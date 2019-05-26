# Gestionar repositorios de Flatpak
$ flatpak remotes
$ flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
$ flatpak remote-delete flathub

# Buscar programas
$ flatpak search [programas]

# Instalar un paquete, en este caso GIMP
$ flatpak install flathub org.gimp.GIMP

# Ejecutar un programa instalado como Flatpak (aunque se integran en el sistema 
# añadiendo un icono en el lanzador de aplicaciones)
$ flatpak run org.gimp.GIMP

# Actualizar los programas
$ flatpak update

# Listar los programas instalados y runtimes, o solo aplicaciones
$ flatpak list
$ flatpak list --app

# Desinstalar un programa
$ flatpak uninstall org.gimp.GIMP