# Eliminar todos los paquetes instalados del repositorio multilib
# pacman -R $(comm -12 <(pacman -Qq | sort) <(pacman -Slq multilib | sort))

# Eliminar accesos directos creados por Winw
$ rm ~/.local/share/mime/packages/x-wine*
$ rm ~/.local/share/applications/wine-extension*
$ rm ~/.local/share/icons/hicolor/*/*/application-x-wine-extension*
$ rm ~/.local/share/mime/application/x-wine-extension*