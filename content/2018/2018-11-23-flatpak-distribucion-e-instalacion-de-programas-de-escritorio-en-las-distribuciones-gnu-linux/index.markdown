---
pid: 362
type: "post"
title: "Flatpak, distribución e instalación de programas de escritorio en las distribuciones GNU/Linux"
url: "/2018/11/flatpak-distribucion-e-instalacion-de-programas-de-escritorio-en-las-distribuciones-gnu-linux/"
date: 2018-11-23T17:30:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:flatpak.svg"
tags: ["gnu-linux", "planeta-codigo", "software", "software-libre"]
---

{{% post %}}

{{< logotype image1="flatpak.svg" title1="Flatpak" width1="300" image2="linux.svg" >}}

Las distribuciones GNU/Linux son la recolección de cantidad de programas de software libre, cientos o miles, con una garantía de que funcionan correctamente en esa distribución y que facilita a los usuarios una fácil utilización. Hay múltiples distribuciones GNU/Linux con diferentes intereses ya sean generalistas como [Ubuntu][ubuntu], [Fedora][fedora], [Debian][debian], [Arch Linux][archlinux], [elementary][elementary], [openSUSE][opensuse] entre las más populares y otras especializadas en propósitos más específicos para servidor con [RHEL][rhel], [CentOS][centos], [Zentyal] o [Alpine][alpine-linux], para equipos con pocos recursos como [Puppy][puppylinux] o [Tiny Core][tinycorelinux], seguridad y privacidad como [Tails][tails] o sin componentes privativos como [Trisquel][trisquel].

Cada una de estas distribuciones es creada por personas que se encargan de mantener la distribución cogiendo el código fuente que los programadores del software crean y publican, compilandolo para crear un binario o paquete utilizable e instalable en esa distribución y comprobar que funciona correctamente sin conflictos con otros paquetes. Los mantenedores se encargan de publicar nuevas versiones de paquetes con cada nueva versión de cada programas, de reportar errores y de incluso aplicar parches de seguridad cuando se descubren.

Esta tarea que hacen los mantenedores se hace por cada paquete, son miles los que contiene una distribución, Debian tiene más de 51000, y por cada distribución aunque algunas se basan en otras como Ubuntu se basa en Debian y otras se basan a su vez en Ubuntu. Esto es una ingente cantidad de tiempo de dedicación de muchas personas y replicado en gran parte en cada distribución que podrían ser empleado en otras tareas.

La tarea que hacen los mantenedores es útil para comprobar que los paquetes de cada distribución funcionan correctamente y en conjunto con el resto de paquetes y porque los autores originales del software no tenían una forma de distribuir su software para que funcionase correctamente en todas las distribuciones.

[Flatpak][flatpak] se define como el futuro, aunque es ya un presente, de forma de distribuir aplicaciones de escritorio siendo [varias distribuciones GNU/Linux importantes que ya lo soportan](https://www.flatpak.org/setup/). Las ventajas que proporciona son:

* Los paquetes de flatpak son utilizables en cualquier distribución.
* Los autores del software pueden crear el paquete sin depender de que los mantenedores lo incluyan en una distribución para que sea utilizable por sus usuarios.
* Una nueva versión está disponible inmediatamente para todas las distribuciones que será más una buena mejora para distribuciones con ciclos de publicación más lentos.
* Proporciona entornos consistentes.
* Las aplicaciones son utilizables incluso en nuevas versiones de una distribución.
* Se pueden instalar múltiples versiones de una misma aplicación.
* Hay menos riesgo de que una actualización de un programa provque que el sistema quede inconsistente pudiendo incluso a no llegar a iniciarse correctamente.
* Se mejora la seguridad el ejecutarse las aplicaciones de forma aislada en una caja de arena que limita las acciones que puede realizar. Los permisos como almacenamiento, red y dispositivos se han de conceder de forma explícita.
* Cualquiera puede publicar su aplicación y ser utilizable por los usuarios sin que necesite ganar popularidad para que los mantenedores la incluyan en la distribución.
* Las aplicaciones Flatpak se puede instalar a nivel de sistema (por defecto) y a nivel de usuario.

{{< youtube video="jDVCITRWGgs" >}}

La [instalación de Flatpak](https://www.flatpak.org/setup/) y [guía de uso](http://docs.flatpak.org/en/latest/using-flatpak.html) no es más complicado que utilizar el propio gestor de paquetes de cada distribución. Los desarrolladores tienen su [guía para crear paquetes](http://docs.flatpak.org/en/latest/building.html) y [publicar](http://docs.flatpak.org/en/latest/publishing.html) en Flatpak.

{{< code file="flatpak.sh" language="bash" options="" >}}

[Flathub](https://flathub.org/home) es un repositorio de las [aplicaciones Flatpak](https://flathub.org/apps) que en el ejemplo se añade con el comando con _flatpak remote-add_. Las que hay se pueden [navegar por categoría](https://flathub.org/apps/category/All) y son algunas de las más populares y que es probable querer instalar en cualquier sistema. A medida que pase el tiempo habrá más disponibles.

* [Audio y vídeo](https://flathub.org/apps/category/AudioVideo): Audacity, GNOME Music, HandBrake, OpenShot, Pitivi, Rhythmbox, VLC, ...
* [Desarrollo](https://flathub.org/apps/category/Development): Atom, gitg, Meld, Backets, Sequeler, SmartGit, Sublime Text, Visual Studio Code, ...
* [Educación](https://flathub.org/apps/category/Education): GCompris, GeoGebra, GNU Octave, ...
* [Juegos](https://flathub.org/apps/category/Game): 0 A.D, Battle for Wesnoth, Games, gbrainy, GNOME Chess, OpenTTD, ScummVM, Shattered Pixel Dungeon, Steam, SuperTuxKart, Teeworlds, ...
* [Gráficos y fotografía](https://flathub.org/apps/category/Graphics): Blender, Colo , GNU Image Manipulation Program (GIMP), Image Optimizer, Inkscape, Krita, Scribus, Synfig Studio, ...
* [Comunicación y noticias](https://flathub.org/apps/category/Network): Dropbox, FeedReader, FileZilla, Geary, JDownloader, Pidgin, Polari, Remmina, Signal, Skype, Slack, Telegram, Thunderbird, Transmission, ...
* [Productividad](https://flathub.org/apps/category/Office): Calendar, Calibre, Contacts, Evolution, LibreOffice, Thunderbird, ...
* [Ciencia](https://flathub.org/apps/category/Science): Elements, Genius, Stellarium, ...
* [Configuración](https://flathub.org/apps/category/Settings): RazerGenie, ...
* [Utilidades](https://flathub.org/apps/category/Utility): Agenda, FreeFileSync, KeePassXC, Nextcloud, Vim, ...

Con las ventajas de Flatpak tanto para usuarios, desarrolladores y mantenedores y a medida que gane más popularidad los desarrolladores tendrán más motivación por publicar sus aplicaciones en paquete Flatpak y en alguno de sus repositorios.

En la página de [preguntas frecuentes](https://www.flatpak.org/faq/) está el curioso origen del nombre de Flatpak en relación con una de las innovaciones de paquetes planos de IKEA. Es una tecnología acoplada a Linux ya que utiliza varias de las tecnologías propias de Linux y por tanto no está para las [distribuciones BSD][bsd] como ocurre en otros casos. El entorno de desarrollo [GNOME Builder][gnome-builder] soporta la programación para Flatpak.

Flatpak está más apoyada por [Red Hat][redhat], [Canonical][canonical] tiene su tecnología similar con [Snapcraft][snapcraft]. Ha ocurrido igual en anteriores casos con [systemd][systemd] y [Upstart][upstart] o [Wayland][wayland] y [Mir][mir] donde las tecnologías más apoyadas por Red Hat han sido las que mayor éxito han tenido y han prevalecido. Si nada cambia en [Red Hat al ser adquirida por parte de IBM][blogbitix-358] puede que se produzca el mismo resultado no tanto por que las tecnologías de Red Hat sean mejores sino porque tiene más peso en la comunidad que Canonical. Por el momento la [adopción para snap contra la de Flatpak](https://kamikazow.wordpress.com/2018/06/08/adoption-of-flatpak-vs-snap-2018-edition/) no produce buenos augurios para la primera donde solo en Ubuntu es buena como no podría ser de otra forma.

Si usas Arch Linux e instalas el entorno de escritorio GNOME con los paquetes _gnome_ y _gnome-extra_ ya tendrás instalado Flatpak ya que se instala como dependencia. Se puede instalar directamente con el gestor de paquetes _pacman_ con el siguiente comando:

{{< code file="install.sh" language="bash" options="" >}}

Las distribuciones tal y como las conocemos van a cambiar mucho, entre esos cambios están una nueva forma de sistema base inmutable y actualizaciones con [OSTree][ostree] o sistema de archivos con [OpenZFS][openzfs].

* [Sobre el futuro de las distribuciones GNU/Linux y los sistemas operativos][blogbitix-479]

{{< reference >}}
* [Flatpak vs Snap - Which format is "Better"? A rather excellent in-depth comparison](https://www.reddit.com/r/linux/comments/60qdtw/flatpak_vs_snap_which_format_is_better_a_rather/)
* [Flatpak Arch Linux Wiki](https://wiki.archlinux.org/index.php/Flatpak)
{{< /reference >}}

{{% /post %}}
