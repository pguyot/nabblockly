-module(nabblockly_server).
-behaviour(gen_server).

%%% API
-export([
    start_link/0
    ]).

-export([
        init/1,
        handle_call/3,
        handle_cast/2,
        handle_info/2,
        code_change/3,
        terminate/2
    ]).

-export([
        get_state/0,
        mode/3,
        command/1
    ]).

-spec start_link() -> {ok, pid()} | {error, tuple()}.
start_link() ->
    gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).

-record(state,
    {
        socket = undefined :: undefined | inet:socket(),
        state = undefined :: undefined | unicode:unicode_binary(),
        requests = gb_trees:empty() :: gb_trees:gb_tree(pos_integer(), any()),
        next_request_id = 1 :: pos_integer()
    }).
-type state() :: #state{}.

-define(COMMAND_TIMEOUT, 60000).

%% ========================================================================= %%
%% gen_server API
%% ========================================================================= %%

%%--------------------------------------------------------------------
%% @doc init callback.
%%
-spec init(any()) -> {ok, state()}.
init(_) ->
    {ok, Socket} = gen_tcp:connect({127,0,0,1}, 10543, [{reuseaddr, true}, {active, true}, {packet, line}]),
    State0 = #state{socket = Socket},
    {ok, State0}.

%%--------------------------------------------------------------------
%% @doc Handle a synchronous message.
%%
-spec handle_call(any(), any(), state()) -> any().
handle_call(get_state, _From, #state{state = CurrentState} = State0) ->
    {reply, CurrentState, State0};
handle_call({mode, Mode, EventsL, _Timeout}, From, #state{} = State0) ->
    Packet = #{<<"type">> => <<"mode">>, <<"mode">> => Mode, <<"events">> => EventsL},
    State1 = send_packet(Packet, From, State0),
    {noreply, State1};
handle_call({command, Sequence}, From, #state{} = State0) ->
    Packet = #{<<"type">> => <<"command">>, <<"sequence">> => Sequence},
    State1 = send_packet(Packet, From, State0),
    {noreply, State1}.  

%%--------------------------------------------------------------------
%% @doc Handle an asynchronous message.
%%
-spec handle_cast(any(), state()) -> any().
handle_cast(_Message, #state{} = State0) ->
    {noreply, State0}.

%%--------------------------------------------------------------------
%% @doc handle system messages.
%%
-spec handle_info(any(), state()) -> any().
handle_info({tcp, Socket, Data}, #state{socket = Socket} = State0) ->
    State1 = try
        Packet = jiffy:decode(Data, [return_maps]),
        parse_packet(Packet, State0)
    catch T:V:Stack ->
        error_logger:info_msg("Exception parsing packet !\n~p\n~p\n", [{T, V}, Stack]),
        State0
    end,
    {noreply, State1}.

%%--------------------------------------------------------------------
%% @doc handle code change.
%%
-spec code_change(string() | {down, string()}, any(), any()) -> {ok, state()}.
code_change(Vsn, State, Extra) ->
    error_logger:info_msg("Unknown code_change (~p, ~p)~n", [Vsn, Extra]),
    {ok, State}.

%%--------------------------------------------------------------------
%% @doc handle termination.
%%
-spec terminate(any(), state()) -> ok.
terminate(_Reason, #state{ } = _State) ->
    ok.

%% ========================================================================= %%
%% Public API
%% ========================================================================= %%

-spec get_state() -> undefined | unicode:unicode_binary().
get_state() ->
    gen_server:call(?MODULE, get_state).

-spec mode(unicode:unicode_binary(), [unicode:unicode_binary()], non_neg_integer() | infinity) -> ok | {error, any()}.
mode(Mode, EventsL, Timeout) ->
    gen_server:call(?MODULE, {mode, Mode, EventsL, Timeout}, ?COMMAND_TIMEOUT).

-spec command([any()]) -> ok | {error, any()}.
command(Sequence) ->
    gen_server:call(?MODULE, {command, Sequence}, ?COMMAND_TIMEOUT).

%% ========================================================================= %%
%% Private functions
%% ========================================================================= %%

parse_packet(Packet, State0) ->
    case Packet of
        #{<<"type">> := <<"state">>, <<"state">> := NewState} ->
            State0#state{state = NewState};
        #{<<"type">> := <<"response">>, <<"request_id">> := RequestID, <<"status">> := Status} ->
            Reply = case Status of
                <<"ok">> -> ok;
                <<"canceled">> -> {error, canceled};
                <<"expired">> -> {error, expired};
                <<"error">> ->
                    ErrorClass = maps:get(<<"class">>, Packet),
                    ErrorMessage = maps:get(<<"message">>, Packet),
                    {error, {ErrorClass, ErrorMessage}}
            end,
            Requests0 = State0#state.requests,
            case gb_trees:lookup(RequestID, Requests0) of
                none ->
                    error_logger:info_msg("RequestID = ~p, could not find it!\n", [RequestID]),
                    State0;
                {value, From} ->
                    gen_server:reply(From, Reply),
                    Requests1 = gb_trees:delete(RequestID, Requests0),
                    State0#state{requests = Requests1}
            end;
        _ ->
            error_logger:info_msg("Unknown packet from nabd: ~p\n", [Packet]),
            State0
    end.

send_packet(Packet0, From, #state{next_request_id = NextRequestID0, requests = Requests0} = State0) ->
    Packet1 = Packet0#{<<"request_id">> => NextRequestID0},
    PacketBin = jiffy:encode(Packet1),
    ok = gen_tcp:send(State0#state.socket, [PacketBin, <<"\n">>]),
    Requests1 = gb_trees:insert(NextRequestID0, From, Requests0),
    State0#state{next_request_id = NextRequestID0 + 1, requests = Requests1}.
