NabBlockly
=====

Application Blockly pour le Nabaztag.

Pré-requis
-----

 * Un Nabaztag avec [pynab](https://github.com/nabaztag2018/pynab).
 
    NabBlockly requiert actuellement la branche master de pynab.

 * Erlang
 
    Le code est développé avec la version 21 de Erlang/OTP.
    
        sudo apt-get install erlang
    

Installation
-----

La compilation se fait avec [rebar3](http://github.com/erlang/rebar3).

    git clone https://github.com/pguyot/nabblockly
    cd nabblockly
    wget https://s3.amazonaws.com/rebar3/rebar3 && chmod +x rebar3
    ./rebar3 release

Configuration
-----

NabBlockly comprend un serveur web qui remplace celui de Pynab :

    sudo cp nabblockly-nginx.conf /etc/nginx/sites-enabled/nabblockly
    sudo mv /etc/nginx/sites-enabled/pynab /etc/nginx/sites-available/pynab
    sudo service nginx reload

Éventuellement :

    sudo service nabweb stop

Démarrage
-----

    ./_build/default/rel/nabblockly/bin/nabblockly start
