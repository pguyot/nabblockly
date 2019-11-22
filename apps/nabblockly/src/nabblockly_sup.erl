%%%-------------------------------------------------------------------
%% @doc nabblockly top level supervisor.
%% @end
%%%-------------------------------------------------------------------

-module(nabblockly_sup).

-behaviour(supervisor).

%% API
-export([start_link/0]).

%% Supervisor callbacks
-export([init/1]).

-define(SERVER, ?MODULE).

%%====================================================================
%% API functions
%%====================================================================

start_link() ->
    supervisor:start_link({local, ?SERVER}, ?MODULE, []).

%%====================================================================
%% Supervisor callbacks
%%====================================================================

%% Child :: {Id,StartFunc,Restart,Shutdown,Type,Modules}
init([]) ->
    MainServerSpec = {nabblockly_server, % id
            {nabblockly_server, start_link, []}, % init function
            transient, % restart children that crash
            5000, worker,
            [nabblockly_server] % modules
        },
    {ok, { {one_for_all, 5, 1}, [MainServerSpec]} }.

%%====================================================================
%% Internal functions
%%====================================================================

