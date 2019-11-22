-module(nabblockly_api_command_h).

-export([init/2]).
-export([allowed_methods/2]).
-export([content_types_provided/2]).
-export([content_types_accepted/2]).
-export([run_command/2]).

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
		{{<<"application">>, <<"x-www-form-urlencoded">>, '*'}, run_command}
	], Req, State}.

run_command(Req0, State) ->
    {ok, EncodedBody, Req1} = cowboy_req:read_urlencoded_body(Req0),
    {<<"sequence">>, SequenceStr} = lists:keyfind(<<"sequence">>, 1, EncodedBody),
    Sequence = jiffy:decode(SequenceStr, [return_maps]),
    ok = nabblockly_server:command(Sequence),
    {true, Req1, State}.
