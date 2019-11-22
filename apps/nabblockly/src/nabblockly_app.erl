%%%-------------------------------------------------------------------
%% @doc nabblockly public API
%% @end
%%%-------------------------------------------------------------------

-module(nabblockly_app).

-behaviour(application).

%% Application callbacks
-export([start/2, stop/1]).

%%====================================================================
%% API
%%====================================================================

start(_StartType, _StartArgs) ->
    Dispatch = cowboy_router:compile([
        {'_', [
            {"/api/state", nabblockly_api_state_h, []},
            {"/api/mode", nabblockly_api_mode_h, []},
            {"/api/command", nabblockly_api_command_h, []},
            {"/", cowboy_static, {priv_file, nabblockly, "index.html"}},
            {"/[...]", cowboy_static, {priv_dir, nabblockly, "",
                [{mimetypes, cow_mimetypes, all}]}}
        ]}
    ]),
    {ok, _} = cowboy:start_clear(my_http_listener,
        [{port, 8080}],
        #{env => #{dispatch => Dispatch}}
    ),
    nabblockly_sup:start_link().

%%--------------------------------------------------------------------
stop(_State) ->
    ok.

%%====================================================================
%% Internal functions
%%====================================================================

