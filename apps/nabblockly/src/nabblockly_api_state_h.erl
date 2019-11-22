-module(nabblockly_api_state_h).

-export([init/2]).
-export([allowed_methods/2]).
-export([content_types_provided/2]).
-export([to_json/2]).

init(Req, State) ->
    {cowboy_rest, Req, State}.

allowed_methods(Req, State) ->
	{[<<"GET">>], Req, State}.

content_types_provided(Req, State) ->
	{[
		{{<<"application">>, <<"json">>, []}, to_json}
	], Req, State}.

to_json(Req, State) ->
    CurrentState = nabblockly_server:get_state(),
    Output = case CurrentState of
        undefined -> [<<"{\"result\":null}">>];
        _ -> [<<"{\"result\":\"">>, CurrentState, <<"\"}">>]
    end,
    {Output, Req, State}.
