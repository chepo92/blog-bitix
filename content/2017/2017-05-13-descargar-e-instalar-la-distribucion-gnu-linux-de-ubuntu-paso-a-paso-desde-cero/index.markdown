---
pid: 232
type: "post"
title: "Descargar e instalar la distribución Ubuntu de GNU/Linux paso a paso desde cero"
url: "/2017/05/descargar-e-instalar-la-distribucion-ubuntu-de-gnu-linux-paso-a-paso-desde-cero/"
date: 2017-05-13T09:00:00+02:00
updated: 2020-07-03T19:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imageHead: "image:ubuntu-wallpaper.jpg"
imagePost: "logotype:ubuntu.svg"
tags: ["gnu-linux", "planeta-codigo", "software", "software-libre"]
summary: "Pasar de usar Windows a usar una distribución GNU/Linux es un paso difícil para muchos usuarios, algunos usuarios desconocen incluso que tienen la posibilidad de usar un sistema operativo alternativo a Windows. O si lo conocen pueden creer erróneamente que instalar una distribución GNU/Linux es muy complicado... sabiendo algunas casas por lo demás es tan sencillo instalar como el sistema operativo Windows ya que muchas distribuciones incluyen una interfaz gráfica en su instalador y el proceso consiste en responder unas pocas preguntas, introducir algunos datos y pulsar varios botones siguiente."
---

{{% post %}}

{{< logotype image1="ubuntu.svg" title1="Ubuntu" width1="200" image2="linux.svg" image3="gnu.svg" >}}

Quizá hayas oído hablar de Linux o [GNU][gnu]/[Linux][linux] como alternativa al sistema operativo de Microsoft [Windows][windows] y sientes curiosidad por probarlo y adentrarte con ello en el mundo del software libre. Si estás leyendo esta guía y te es necesaria para instalar una de las muchas distribuciones de GNU/Linux entiendo que necesitas ayuda para saber como instalarlo desde cero, paso a paso y empezando desde lo más básico.

En GNU/Linux para cada tarea que un usuario quiera realizar hay múltiples opciones entre las que elegir, desde tareas ofimáticas como [LibreOffice][libreoffice], navegadores web como [Firefox][firefox] o [Chrome][google-chrome], mensajería instantánea como [Empathy](https://wiki.gnome.org/action/show/Apps/Empathy), correo electrónico como [Evolution][evolution], [Thunderbird][thunderbird] o [Geary][geary], reproductores de música o vídeo como [VLC][vlc], visor de imágenes y archivos PDF, edición fotográfica como [GIMP][gimp], edición de vídeo como [OpenShot][openshot], [algunos juegos destacables][blogbitix-172], ... en todos los casos hay un programa de software libre por el que no hay que pagar una licencia ni buscar _cracks_ para activar el software que son fuente de virus y problemas de seguridad. Y ya desde hace mucho tiempo en GNU/Linux el hardware es reconocido y usable en su mayor parte desde el primer momento incluyendo la tarjeta gráfica, sonido, red, bluetooth, wifi, HDMI, USB, ... aunque alguno puede necesitar instalar sus controladores de dispositivo.

Debes saber es en GNU/Linux hay muchas versiones o distribuciones, muchas desarrolladas por personas sin ánimo de lucro que se agrupan formando comunidades y otras que tienen el soporte de una empresa pero que a los usuarios les ofrece la distribución sin ningún coste ni necesidad de adquirir licencias. Una distribución está formada por el conjunto de programas de software o paquetes, repositorios de paquetes y gestor de paquetes. Hay muchas distribuciones, y muchas son cientos, pero no más de 10 con una cuota de uso dentro de las distros significativa.

El paso de Windows a GNU/Linux significa usar un nuevo entorno y es algo que muchos de los usuarios que hoy somos de GNU/Linux hemos dado en algún momento, yo empecé por pasar [De Windows a Arch Linux][elblogdepicodev-15] y aún me mantengo [De Arch Linux a Arch Linux][blogbitix-36]. GNU/Linux tiene sus puntos fuertes y algunos para los usuarios de escritorio menos fuertes, principalmente debido a no ser el sistema mayoritario los fabricantes tienen más en cuenta a Windows cuando lanzan un nuevo producto, en el caso de los juegos triple A o la excesiva fragmentación por la cantidad de opciones. En cualquier caso muchas distribuciones GNU/Linux son tan fáciles de usar como Windows o [macOS][macos] y tan o más capaces que estos.

Lo primero que debes hacer es [decidir la distribución que quieres instalar][blogbitix-190], según tus preferencias y necesidades. Para los usuarios que van a tener su primer contacto con GNU/Linux algunas de las recomendadas son [Ubuntu][ubuntu] o [elementaryOS][elementary].

Ubuntu es una de las muchas distribuciones de GNU/Linux existentes y una de las recomendadas para los usuarios principiantes y con más conocimientos por su buen funcionamiento. Las versiones LTS de Ubuntu tienen [ciclo de desarrollo][ubuntu-release-cyle] con un soporte de largo plazo de 5 años para corrección de errores y fallos de seguridad. Las versiones LTS se publican cada dos años. Salvo que estés afectado por _versionitis_ y quieras tener las últimas versiones de los programas la versión LTS más reciente es la recomendable y suficiente en vez de la última versión no LTS.

Para instalar Ubuntu solo se necesita una memoria USB de 4 GiB de capacidad, el medio de instalación y unos 30 minutos para completar el proceso de instalación. Ubuntu instalado ocupa unos 10 GiB de espacio pero dependiendo de las aplicaciones que se quieran instalar, los documentos personales, fotos, vídeos y otros archivos el espacio recomendado es mayor.

En este artículo explicaré como instalar Ubuntu en su versión 20.04 <abbr title="Long Term Support">LTS</abbr>.

### Requisitos mínimos

Los [requisitos mínimos de Ubuntu](https://help.ubuntu.com/community/Installation/SystemRequirements) son bastante bajos para cualquier sistema de unos pocos años, menores que los requeridos para instalar Windows. Aunque en la memoria es recomendable tener al menos 2 GiB o incluso 4 GiB. Cualquier equipo medio de de la última década cumple estos requisitos.

* Procesador 2 GHz con dos núcleos o mejor
* Memoria RAM del sistema de 4 GiB
* 25 GB de espacio de almacenamiento
* Gráficos con resolución de al menos 1024x768
* Unidad USB o CD/DVD
* Acceso a internet es recomendable

### Crear una copia de seguridad

Al instalar Ubuntu todos los datos que tuviese el equipo se perderán por lo que si quieres conservarlos debes copiarlos previamente a un disco duro externo o memoria USB de la capacidad que necesiten tus archivos, una vez finalizada la instalación de Ubuntu puedes recuperarlos y copiarlos al equipo de nuevo.

* [Cómo realizar copias de seguridad en Windows con FreeFileSync][blogbitix-144]

### Descargar el medio de instalación de Ubuntu

Antes de iniciar la instalación hay que [descargar la imágen ISO][ubuntu-download-desktop] de la versión de Ubuntu que queramos instalar desde la [página oficial de la distribución][ubuntu], solo es necesario un navegador web para descargar de forma directa el archivo que es la imagen del medio de instalación, un archio de extensión _iso_ que ocupa casi 3 GiB. El archivo también es descargable mediante la red de compartición de archivos entre usuarios _torrent_. Ubuntu proporciona [varias versiones de su distribución](https://ubuntu.com/download/flavours) donde varía principalmente el entorno de escritorio que también debes elegir según tus preferencias, hay varias posibilidades entre ellas dos de las más preferidas están [GNOME][gnome] y [KDE][kde]. Cualquiera de ellas con un aspecto gráfico muy cuidado, intuitivas y fáciles de usar. La opción más similar al entorno de escritorio de Windows es KDE con la que te encontrarás bastante cómodo al usarla si provienes de Windows.

* [Ubuntu][ubuntu]
* [Más sabores de Ubuntu](https://ubuntu.com/download/flavours)

### Crear el medio de instalación USB

Para una mayor velocidad de instalación es mejor usar una memoria USB de al menos 8 GiB de capacidad en vez un disco CD o DVD que son más lentos y algunos equipos nuevos ya ni siquiera incorporan estas unidades porque están en desuso con la aparición de las memorias USB más rápidas, fiables, de mayor capacidad y más pequeñas. La memoria debe estar vacía ya que se perderán todos sus datos. Con el [programa Rufus para Windows](https://rufus.akeo.ie/) seleccionado el archivo de la imagen ISO descargada y la unidad USB se crea el medio de instalación, en la siguiente página está explicado como [crear una memoria USB arrancable en Windows](https://ubuntu.com/tutorials/tutorial-create-a-usb-stick-on-windows).

Hay que conectar una memoria USB, seleccionarla, seleccionar el archivo de la imagen ISO de Ubuntu y pulsar el botón _Empezar_, al cabo de unos minutos la memoria estará lista para empezar a instalar Ubuntu.

{{< image
    gallery="true"
    image1="image:rufus.png" optionsthumb1="300x200" title1="Creación de medio de instalación en memoria USB desde Windows"
    caption="Creación de medio de instalación en memoria USB dese Windows" >}}

### Iniciar el sistema con el medio de instalación

Con el equipo apagado y la memoria USB contactada a un puerto hay que iniciar el equipo para que se inicie desde la memoria USB. La forma de hacer que el equipo arranque desde la memoria USB depende de cual sea el fabricante. Pulsando una tecla dependiendo de caso como F2, F8, F10, F12, ESC u otra se puede entrar en la BIOS o seleccionar el medio de instalación. La BIOS es una zona de configuración donde se modifican algunos parámetros del equipo muy importantes con lo que hay que tener cuidado de que se modifica para evitar comportamientos anómalos, a pesar de todo suele ser bastante intuitiva y si es un equipo reciente incluso con interfaz gráfica.

Según el fabricante e incluso modelos de la misma fabricante la tecla de acceso para iniciar desde el medio de instalación varía:

* Acer: F2 o Delete
* Asus: F2 o F10
* Dell: F2, F1, Delete, F12 o F3
* HP: F10 o Esc
* Lenovo: F1 o F2
* Sony: F2, F3, F1 o tecla assist
* Toshiba: F2, F1, Esc

En las siguientes páginas puedes encontrar varias posibles teclas para entrar en la BIOS y cambiar la unidad de inicio del sistema según la marca, [I](http://www.makeuseof.com/tag/enter-bios-computer/), [II](https://www.lifewire.com/bios-setup-utility-access-keys-for-major-bios-manufacturers-2624461) y [III](https://www.lifewire.com/bios-setup-utility-access-keys-for-popular-computer-systems-2624463).

Puede ser el caso de que cuando se inicia el equipo muestre un mensaje con la tecla que hay que pulsar si hay que probar hasta dar con ella. Después de pulsar la tecla de encendido poco después o según se muestra un logotipo es cuando hay que pulsar la tecla.

Si tu sistema tiene una BIOS de tipo UEFI, cualquier equipo del último lustro su BIOS será de este tipo, se debe [desactivar la opción llamada _Secure Boot_](https://help.ubuntu.com/community/UEFI) que utiliza Windows como medida de seguridad pero que no está soportada aún en GNU/Linux.

### Instalar Ubuntu

Al iniciar el instalador al pricipio de todo se ofrece la posibilidad de probar Ubuntu sin realizar ningún cambio al equipo, esto permite comprobar que funciona correctamente y no hay problemas de compatibilidad con el hardware importantes. La mayoría de hardware es reconocido sin necesidad de instalar controladores específicos. Una vez realizada la prueba se puede iniciar la instalación.

El instalador que guía en la instalación de Ubuntu realiza varias preguntas a responder por el usuario e introducir algunos pocos datos y en cuestión de menos de una hora el equipo ya está listo para empezar a usarse. En el artículo he utilizado la versión 20.04 LTS.

El asistente de instalación pregunta:

* El idioma.
* Si se quieren descargar las actualizaciones (recomendable) y software para reproducir mp3, flash así como controladores para la tarjeta gráfica y wifi.
* Borrar el contenido del disco duro y si se quieren cifrar los datos del dispositivo de almacenamiento.
* La clave para cifrar los datos del dispositivo de almacenamiento.
* Una confirmación para proceder a borrar el disco duro e iniciar la instalación.
* La zona horaria del usuario y la disposición del teclado.
* El nombre del equipo, del usuario y la contraseña para iniciar sesión.

Inicio del asistente.

{{< image
    gallery="true"
    image1="image:instalacion-ubuntu-01.png" optionsthumb1="300x200" title1="Instalación de Ubuntu"
    image2="image:instalacion-ubuntu-02.png" optionsthumb2="300x200" title2="Instalación de Ubuntu"
    image3="image:instalacion-ubuntu-03.png" optionsthumb3="300x200" title3="Instalación de Ubuntu" >}}

Pasos en los que solicitan unos pocos datos como el idioma, la disposición del teclado, tipo de instalación, ubicación y el usuario y contraseña de inicio de sesión.

{{< image
    gallery="true"
    image1="image:instalacion-ubuntu-04.png" optionsthumb1="300x200" title1="Instalación de Ubuntu"
    image2="image:instalacion-ubuntu-05.png" optionsthumb2="300x200" title2="Instalación de Ubuntu"
    image3="image:instalacion-ubuntu-06.png" optionsthumb3="300x200" title3="Instalación de Ubuntu" >}}
{{< image
    gallery="true"
    image1="image:instalacion-ubuntu-07.png" optionsthumb1="300x200" title1="Instalación de Ubuntu"
    image2="image:instalacion-ubuntu-08.png" optionsthumb2="300x200" title2="Instalación de Ubuntu"
    image3="image:instalacion-ubuntu-09.png" optionsthumb3="300x200" title3="Instalación de Ubuntu" >}}

El resto de la instalación Ubuntu copia los archivos necesarios al dispositivo de almacenamiento.

{{< image
    gallery="true"
    image1="image:instalacion-ubuntu-10.png" optionsthumb1="300x200" title1="Instalación de Ubuntu"
    image2="image:instalacion-ubuntu-11.png" optionsthumb2="300x200" title2="Instalación de Ubuntu"
    image3="image:instalacion-ubuntu-12.png" optionsthumb3="300x200" title3="Instalación de Ubuntu" >}}
{{< image
    gallery="true"
    image1="image:instalacion-ubuntu-13.png" optionsthumb1="300x200" title1="Instalación de Ubuntu"
    image2="image:instalacion-ubuntu-14.png" optionsthumb2="300x200" title2="Instalación de Ubuntu"
    image3="image:instalacion-ubuntu-15.png" optionsthumb3="300x200" title3="Instalación de Ubuntu" >}}
{{< image
    gallery="true"
    image1="image:instalacion-ubuntu-16.png" optionsthumb1="300x200" title1="Instalación de Ubuntu"
    image2="image:instalacion-ubuntu-17.png" optionsthumb2="300x200" title2="Instalación de Ubuntu"
    image3="image:instalacion-ubuntu-18.png" optionsthumb3="300x200" title3="Instalación de Ubuntu" >}}

Al final de la instalación se solicita reiniciar para realizar el primer arranque.

{{< image
    gallery="true"
    image1="image:instalacion-ubuntu-19.png" optionsthumb1="300x200" title1="Instalación de Ubuntu"
    image2="image:instalacion-ubuntu-20.png" optionsthumb2="300x200" title1="Instalación de Ubuntu"
    caption="Instalación de Ubuntu" >}}

### Primer inicio de sesión Ubuntu

Si se ha elegido cifrar el contenido del dispositivo de almacenamiento al realizar la instalación en el inicio del sistema Ubuntu pregunta por la contraseña para descifrar su contenido. Por seguridad se solicita el usuario y contraseña introducir en los pasos de la instalación.

{{< image
    gallery="true"
    image1="image:ubuntu-01.png" optionsthumb1="300x200" title1="Ubuntu 20.04"
    image2="image:ubuntu-02.png" optionsthumb2="300x200" title1="Ubuntu 20.04"
    image3="image:ubuntu-03.png" optionsthumb3="300x200" title3="Ubuntu 20.04 con entorno de escritorio Unity" >}}

Este es el aspecto del entorno de escritorio con GNOME de Ubuntu 20.04. En la parte izquierda se encuentra el lanzador de aplicaciones con varios iconos. En la parte superior izquierda está a acción actividades con la que buscar el resto de aplicaciones instaladas, el la parte superior derecha el menú del sistema desde donde se puede apagar, reiniciar el equipo o variar el volumen del sistema entre otras opciones de configuración.

{{< image
    gallery="true"
    image1="image:ubuntu-04.png" optionsthumb1="300x200" title1="Ubuntu 20.04 con entorno de escritorio GNOME"
    caption="Ubuntu 20.04 con entorno de escritorio GNOME" >}}

### Realizar tareas básicas para instalar programas, obtener actualizaciones y mantenimiento

Después de instalar Ubuntu es necesario conocer como realizar algunas tareas básicas de mantenimiento para tener actualizado el sistema, para obtener importantes actualizaciones de seguridad, correcciones de errores, nuevas funcionalidades, instalar nuevos programas y desinstalar los programas que se dejan de usar además empezar a conocer la terminal.

* [Tareas básicas después de instalar una distribución GNU/Linux][blogbitix-462]
* [Las aplicaciones del entorno de escritorio de GNOME][blogbitix-464]
* [Listado de programas esenciales según categoría para GNU/Linux][blogbitix-469]

Ubuntu por defecto ya incorpora una buena cantidad de software preinstalado. En cualquier caso con la aplicación _Software de Ubuntu_ se puede instalar más. Al cabo de un tiempo de haber instalado Ubuntu se publicarán actualizaciones del software que tengas instalado con mejoras y correcciones de seguridad que son recomendables instalarlas usando la aplicación _Ubuntu Software_. Ubuntu comprueba periódicamente si hay nuevas actualizaciones, si las hay muestra una notificación con cuales son y permite realizar la actualización a conveniencia del usuario. Una vez instaladas las actualizaciones algunas requieren reiniciar el sistema para que surtan efecto.

{{< image
    gallery="true"
    image1="image:ubuntu-software.png" optionsthumb1="300x200" title1="Instalar y desinstalar software"
    image2="image:ubuntu-actualizaciones.png" optionsthumb2="300x200" title2="Notificación de actualizaciones de Ubuntu"
    caption="Instalar software y notificación de actualizaciones de seguridad" >}}

### Obtener ayuda

En internet hay gran cantidad de artículos en blogs o foros con ayuda que puedes encontrar con un buscador web como [Google][google] o [DuckDuckGo][duckduckgo]. En ellos seguramente encontrarás una respuesta que te resuelva o ayude en cualquier problema que se te presente o duda que te surja.

Si has leído este artículo y te decides a dar el salto a GNU/Linux deja un comentario, me gusta leer que he ayudado a alguien y si tienes alguna duda y no encuentras una respuesta en la web pregúntame en un comentario e intentaré darle respuesta.

{{% /post %}}
