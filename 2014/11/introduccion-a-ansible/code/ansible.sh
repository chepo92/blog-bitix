$ ansible devbox -i hosts -m ping
$ ansible devbox -i hosts -m pacman -a "name=docker state=installed"