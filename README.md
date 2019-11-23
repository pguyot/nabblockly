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
Attention à bien faire un clone dans pynab (nécessaire pour les sons).

    cd /home/pi/pynab
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

Démarrage
-----

    sudo cp nabblockly.service /lib/systemd/system/
    sudo systemctl enable nabblockly
    sudo service nabblockly start

Éventuellement, désactivation des services pynab (pour ne pas interférer) :

    sudo systemctl disable nabclockd
    sudo systemctl disable nabweb
    sudo systemctl disable nabmastodond
    sudo systemctl disable nabtaichid
    sudo systemctl disable nabsurprised
    sudo systemctl disable nab8balld
    sudo systemctl disable nabweatherd
    sudo reboot

Smileys
-----

Les smileys dans l'interface sont l'œuvre de [Landry](https://twitter.com/_Landry) pour le forum [Nabaztag](http://nabaztag.forumactif.fr/), réutilisés avec permission.
