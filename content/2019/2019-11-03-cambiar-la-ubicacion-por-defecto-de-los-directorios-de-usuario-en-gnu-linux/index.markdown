---
pid: 440
type: "post"
title: "Cambiar la ubicación por defecto de los directorios de usuario en GNU/Linux"
url: "/2019/11/cambiar-la-ubicacion-por-defecto-de-los-directorios-de-usuario-en-gnu-linux/"
date: 2019-11-03T13:00:00+01:00
updated: 2019-11-04T19:30:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:gnome-user-dirs.png"
tags: ["gnu-linux", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Los directorios de _Descargas_, _Documentos_, _Música_, _Imágenes_, _Vídeos_, _Escritorio_, _Plantillas_ y _Público_ «bien conocidos» por defecto se encuentran en el directorio de inicio o _home_ del usuario, en mi caso sería _/home/picodotdev/_ o abreviadamente _~/_.

Por preferencias o necesidad según el usuario, la ubicación de cada uno de estos directorios se puede cambiar individualmente. Por ejemplo, si en la carpeta _Documentos_, _Música_ e _Imágenes_ se tiene un montón de archivos que ocupan varias decenas de gigabytes que no se usan de forma habitual ni se desea tener en el SSD ocupando espacio la ubicación de estos directorios se puede cambiar por uno que se encuentra en un disco mecánico USB o tarjeta microSD externa.

Los discos duros SSD se han abaratado muchísimo en los últimos años pero aún no han alcanzado a los discos duros mecánicos en el precio de € por GB. Un [disco duro mecánico de 4 TB](https://amzn.to/2NEWsly) tiene un precio bastante asequible. A lo largo del tiempo he ido reaprovechando los discos duros de portátiles para los que compré una caja USB para utilizarlos como discos duros externos USB y ahora tengo varios, uno de 500 GB, otro de 320 GB, y dos de 120 GB.

{{< amazon
    linkids="e4fd44ae2ee8a6632bf514c94a9bcce2,51f9f449af48eb3c5f98ae05eb93cbc7,7e74aadff0dd2b77d5f5d8ee66108f4d"
    asins="B0713WPGLL,B07H1231S8,B07FD6D4HJ" >}}

Cuando compré el [Intel NUC][blogbitix-363] compré la versión _slim_ sin bahía para disco SATA 2.5" y solo le puse un SSD de 500 GB con conexión M.2. Tenía intención de comprar una [tarjeta SDXC](https://amzn.to/2NE97Fg) o una [memoria USB](https://amzn.to/2NE97Fg) pequeña para tenerla siempre conectada al ordenador y como una forma de ampliar la capacidad de almacenamiento. Sin embargo, ni la tarjeta microSD ni la memoria USB es barata comparada con el precio de un SSD SATA. Al final he optado por utilizar uno de esos discos duros externos que tengo para el mismo propósito. Lo que necesitaba era cambiar la ubicación de esos directorios por defecto para que en vez de estar en la carpeta de inicio de mi usuario y en el SSD estuviesen en el disco duro externo USB.

La ubicación de los directorios de usuario se puede cambiar modificando las rutas en el archivo de configuración _~/.config/user-dirs.dirs_. En este caso poniendo la ubicación del punto de montaje del disco duro externo USB.

{{< code file="user-dirs.dirs" language="plaintext" options="" >}}

Cambiar los valores de los directorios de usuario a otro directorio requiere que esos directorios estén disponibles a iniciar sesión de usuario en el entorno de escritorio. Para que el disco duro externo USB se monte al iniciar el sistema he definido un servicio de tipo _mount_ para [systemd][systemd] en la ubicación _/etc/systemd/system/run-media-picodotdev-bmovenegro.mount_ con el siguiente contenido. El disco duro se monta en el directorio _/run/media/bmovenegro/_.

{{< code file="run-media-picodotdev-bmovenegro.mount" language="plaintext" options="" >}}

El identificador UUID de un dispositivo se obtiene con el comando _lsblk_.

{{< code file="lsblk.sh" language="plaintext" options="" >}}

Con esta configuración para el explorador de archivos en este caso Nautilus de [GNOME][gnome] la ubicación de estos archivos de usuario es transparente, los directorios aparecen en el panel lateral. Aunque en el directorio _home_ siguen existiendo las carpetas originales de los directorios de usuario realmente cuando se hace clic en el panel lateral del directorio _Documentos_ se muestra el contenido _/run/media/bmovenegro/Documentos_ y no de _~/Documentos_.

{{< image
    gallery="true"
    image1="image:gnome-user-dirs.png" optionsthumb1="300x200" title1="Directorios de usuario en el directorio home"
    image2="image:usb-user-dirs.png" optionsthumb2="300x200" title2="Directorios de usuario en disco USB externo"
    caption="Directorios de usuario en el directorio home y en disco USB externo" >}}

En el caso de GNU/Linux los directorios de usuario además están localizados de forma automática, esto es al listar los directorios los nombres están en el idioma del usuario de forma consistente, al contrario de como ocurre en otros sistemas operativos que sus nombres se mantienen en inglés aún en su explorador de archivos aparecer en el idioma del usuario creando una inconsistencia entre los nombres que se listan desde la terminal y los que aparecen en su explorador de archivos. 

{{< image
    gallery="true"
    image1="image:terminal-user-dirs.png" optionsthumb1="300x200" title1="Directorios de usuario en el directorio home"
    image2="image:usb-terminal-user-dirs.png" optionsthumb2="300x200" title2="Directorios de usuario en disco USB externo"
    caption="Directorios de usuario en el directorio home y en disco USB externo" >}}

{{< reference >}}
* [XDG user directories](https://wiki.archlinux.org/index.php/XDG_user_directories)
* [Change the location of subfolders in your Home partition](https://sites.google.com/site/installationubuntu/tweaking-ubuntu/change-the-location-of-subfolders-in-your-home-partition)
{{< /reference >}}

{{% /post %}}
