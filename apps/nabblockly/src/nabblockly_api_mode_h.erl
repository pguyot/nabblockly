-module(nabblockly_api_mode_h).

-export([init/2]).
-export([allowed_methods/2]).
-export([content_types_provided/2]).
-export([content_types_accepted/2]).
-export([set_mode/2]).

init(Req, State) ->
    {cowboy_rest, Req, State}.

allowed_methods(Req, State) ->
	{[<<"PUT">>], Req, State}.

content_types_provided(Req, State) ->
	{[
		{{<<"text">>, <<"plain">>, []}, undefined}
	], Req, State}.

content_types_accepted(Req, State) ->
	{[
		{{<<"application">>, <<"x-www-form-urlencoded">>, '*'}, set_mode}
	], Req, State}.

set_mode(Req0, State) ->
    {ok, EncodedBody, Req1} = cowboy_req:read_urlencoded_body(Req0),
    EventsL = case lists:keyfind(<<"events">>, 1, EncodedBody) of
        false -> [];
        {<<"events">>, EventsBin} -> binary:split(EventsBin, <<",">>, [global])
    end,
    {<<"mode">>, Mode} = lists:keyfind(<<"mode">>, 1, EncodedBody),
    Timeout = case lists:keyfind(<<"timeout">>, 1, EncodedBody) of
        {<<"timeout">>, TimeoutBin} -> binary_to_integer(TimeoutBin);
        false -> infinity
    end,
    ok = nabblockly_server:mode(Mode, EventsL, Timeout),
    {true, Req1, State}.

        
