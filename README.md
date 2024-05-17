# NabBlockly

NabBlockly, est une interface de programmation par blocs des chorégraphies pour le Nabaztag et Nabaztag:tag, proche de ce qui existe avec [Stratch](https://llk.github.io/scratch-gui/develop/) ou [Code.org](https://code.org/).

## Pré-requis

1. Un Nabaztag ou Nabaztag:tag avec [pynab](https://github.com/nabaztag2018/pynab).

    Depuis la version 0.6.3b de pynab, NabBlockly est installé par défaut des releases et fonctionne sur le port [8080](http://nabaztag.local:8080/). L'installation est d'ailleurs possible sur le port 80 en modifiant la configuration de Nginx.

2. Erlang

    Le code est développé avec la version 21 de Erlang/OTP.
    ```shell
    sudo apt-get install erlang-nox erlang-dev
    ```

## Installation

La compilation se fait avec [rebar3](http://github.com/erlang/rebar3). La
version 3.15.1 est la dernière compatible avec OTP-21 qui est la version
d'Erlang sur les images pynab actuelles à base de Buster.

Attention à bien faire un clone dans pynab (nécessaire pour les sons).
```shell
cd /home/pi/pynab
git clone https://github.com/pguyot/nabblockly
cd nabblockly
wget https://github.com/erlang/rebar3/releases/download/3.15.1/rebar3 && chmod +x rebar3
./rebar3 release
```

## Configuration

NabBlockly comprend un serveur web qui remplace celui de Pynab :
```shell
sudo cp nabblockly-nginx.conf /etc/nginx/sites-enabled/nabblockly
sudo mv /etc/nginx/sites-enabled/pynab /etc/nginx/sites-available/pynab
sudo service nginx reload
```

## Démarrage

```shell
sudo cp nabblockly.service /lib/systemd/system/
sudo systemctl enable nabblockly
sudo service nabblockly start
```

Éventuellement, désactivation des services pynab (pour ne pas interférer) :
```shell
sudo systemctl disable nabclockd
sudo systemctl disable nabweb
sudo systemctl disable nabmastodond
sudo systemctl disable nabtaichid
sudo systemctl disable nabsurprised
sudo systemctl disable nab8balld
sudo systemctl disable nabweatherd
sudo reboot
```

Smileys
-----

Les smileys dans l'interface sont l'œuvre de [Landry](https://twitter.com/_Landry) pour le forum [Nabaztag](http://nabaztag.forumactif.fr/), réutilisés avec permission.
