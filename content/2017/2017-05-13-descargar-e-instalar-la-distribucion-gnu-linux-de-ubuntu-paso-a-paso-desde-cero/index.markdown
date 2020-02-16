---
pid: 232
type: "post"
title: "Descargar e instalar la distribución Ubuntu de GNU/Linux paso a paso desde cero"
url: "/2017/05/descargar-e-instalar-la-distribucion-ubuntu-de-gnu-linux-paso-a-paso-desde-cero/"
date: 2017-05-13T09:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
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

Lo primero que debes hacer es [decidir la distribución que quieres instalar][blogbitix-190], según tus preferencias y necesidades. Para los usuarios que van a tener su primer contacto con GNU/Linux algunas de las recomendadas son [Ubuntu][ubuntu] o [elementaryOS][elementary]. En este artículo explicaré como instalar Ubuntu en su versión 16.04 <abbr title="Long Term Support">LTS</abbr>, los pasos son similares para elementaryOS ya que es una distribución que se basa en Ubuntu.

Las versiones LTS de Ubuntu tienen un soporte de largo plazo de 5 años para corrección de errores y fallos de seguridad y se publican cada dos años siendo la siguiente LTS la 18.04 que se publicará en marzo del año 2018. Salvo que estés afectado por _versionitis_ y quieras tener las últimas versiones de los programas la versión LTS más reciente es recomendable y suficiente en vez de la última versión no LTS.

### Requisitos mínimos

Los [requisitos mínimos de Ubuntu](https://help.ubuntu.com/community/Installation/SystemRequirements) son bastante bajos para cualquier sistema de unos pocos años. Aunque en la memoria es recomendable tener al menos 2 GiB o incluso 4 GiB.

* Procesador de 700 MHz (Intel Celeron o mejor)
* Memoria del sistema 512 MiB RAM
* 5 GB de espacio de almacenamiento (o memoria USB, tarjeta de memoria o unidad externa)
* Gráficos con resolución de al menos 1024x768
* Unidad CD/DVD o puerto USB
* Acceso a internet es recomendable

### Copia de seguridad

Al instalar Ubuntu todos los datos que tuviese el equipo se perderán por lo que si quieres conservarlos debes copiarlos previamente a un disco duro externo o memoria USB de la capacidad que necesiten tus archivos, una vez finalizada la instalación de Ubuntu puedes recuperarlos y copiarlos al equipo de nuevo.

### Descarga de Ubuntu

Antes de iniciar la instalación hay que descargar la imágen ISO de la versión de Ubuntu que queramos instalar. En la [página oficial de Ubuntu][ubuntu] se puede descargar de forma directa con el navegador o vía P2P en la red de compartición de archivos torrent. Ubuntu a su vez proporciona varias versiones de su distribución donde varía el entorno de escritorio que también debes elegir según tus preferencias, hay varias posibilidades [Unitiy](http://unity.ubuntu.com/) (que en la versión 18.04 será sustituida por GNOME), [GNOME][gnome] y [KDE][kde] aunque recomiendo una de las dos últimas. Cualquiera de ellas con un aspecto gráfico muy cuidado, intuitivas y fáciles de usar. La opción más similar al entorno de escritorio de Windows es KDE con la que te encontrarás bastante cómodo al usarla si provienes de Windows.

* [Ubuntu][ubuntu]
* [Ubuntu Unity](http://unity.ubuntu.com/)
* [Ubuntu GNOME](https://ubuntugnome.org/)
* [Ubuntu KDE](https://www.kubuntu.org/)
* [Más sabores de Ubuntu](https://www.ubuntu.com/download/ubuntu-flavours)

### Creación del medio de instalación

Para una mayor velocidad de instalación es mejor usar una memoria USB de al menos 8 GiB de capacidad en vez un CD o DVD que son más lentos y algunos equipos nuevos ya ni siquiera incorporan porque están en desuso con la aparición de las memorias USB. La memoria debe estar vacía ya que se perderán todos sus datos. Con el [programa Rufus para Windows](https://rufus.akeo.ie/) seleccionado el archivo de la imagen ISO descargada y la unidad USB se crea el medio de instalación, en la siguiente página está explicado como [crear una memoria USB arrancable en Windows](https://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows).

Hay que conectar una memoria USB, seleccionarla, seleccionar el archivo de la imagen ISO de Ubuntu y pulsar el botón _Empezar_, al cabo de unos minutos la memoria estará lista para empezar a instalar Ubuntu.

{{< image
    gallery="true"
    image1="image:rufus.png" optionsthumb1="300x200" title1="Creación de medio de instalación en memoria USB desde Windows"
    caption="Creación de medio de instalación en memoria USB dese Windows" >}}

### Iniciar el sistema con el medio de instalación

Con el equipo apagado y la memoria USB contactada hay que iniciar el equipo para que se inicie desde la memoria USB. La forma de hacer que el equipo se inicie desde la memoria USB depende de cual sea el fabricante. Pulsando una tecla dependiendo de caso como F2, F8, F10, F12, ESC u otra se puede entrar en la BIOS o seleccionar el medio de instalación. La BIOS es una zona de configuración donde se modifican algunos parámetros del equipo muy importantes con lo que hay que tener cuidado de que se modifica para evitar comportamientos anómalos, a pesar de todo suele ser bastante intuitiva y si es un equipo reciente incluso con interfaz gráfica.

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

### Instalación de Ubuntu

Una vez iniciado el programa que guía en la instalación de Ubuntu hay que responder a algunas preguntas e introducir algunos pocos datos y en cuestión de menos de una hora el equipo ya está listo para empezar a usarse. En el artículo he utilizado la versión 16.04 LTS.

El asistente de instalación pregunta:

* El idioma.
* Si se quieren descargar las actualizaciones (recomendable) y software para reproducir mp3, flash así como controladores para la tarjeta gráfica y wifi.
* Borrar el contenido del disco duro y si se quieren cifrar los datos del dispositivo de almacenamiento.
* La clave para cifrar los datos del dispositivo de almacenamiento.
* Una confirmación para proceder a borrar el disco duro e iniciar la instalación.
* La zona horaria del usuario y la disposición del teclado.
* El nombre del equipo, del usuario y la contraseña para iniciar sesión.

Los asistentes de instalación utilizan el entorno de escritorio del sabor que se está instalando pero los pasos son similares y piden la misma información.

{{< image
    gallery="true"
    image1="image:instalacion-ubuntu-01.png" optionsthumb1="300x200" title1="Instalación de Ubuntu"
    image2="image:instalacion-ubuntu-02.png" optionsthumb2="300x200" title2="Instalación de Ubuntu"
    image3="image:instalacion-ubuntu-03.png" optionsthumb3="300x200" title3="Instalación de Ubuntu" >}}
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
{{< image
    gallery="true"
    image1="image:instalacion-ubuntu-19.png" optionsthumb1="300x200" title1="Instalación de Ubuntu"
    image2="image:instalacion-ubuntu-20.png" optionsthumb2="300x200" title1="Instalación de Ubuntu"
    caption="Instalación de Ubuntu" >}}

### Usando Ubuntu

Si se ha elegido cifrar el contenido del dispositivo de almacenamiento al realizar la instalación en el inicio del sistema Ubuntu pregunta por la contraseña para descifrar su contenido.

{{< image
    gallery="true"
    image1="image:ubuntu-01.png" optionsthumb1="300x200" title1="Ubuntu 16.04"
    image2="image:ubuntu-02.png" optionsthumb2="300x200" title1="Ubuntu 16.04"
    image3="image:ubuntu-03.png" optionsthumb3="300x200" title3="Ubuntu 16.04 con entorno de escritorio Unity"
    caption="Ubuntu 16.04 con entorno de escritorio Unity" >}}
{{< image
    gallery="true"
    image1="image:ubuntu-04.png" optionsthumb1="300x200" title1="Ubuntu 16.04 con entorno de escritorio GNOME"
    image2="image:ubuntu-05.png" optionsthumb2="300x200" title2="Ubuntu 16.04 con entorno de escritorio GNOME"
    image3="image:ubuntu-06.png" optionsthumb3="300x200" title3="Ubuntu 16.04 con entorno de escritorio GNOME"
    caption="Ubuntu 16.04 con entorno de escritorio GNOME" >}}
{{< image
    gallery="true"
    image1="image:ubuntu-07.png" optionsthumb1="300x200" title1="Ubuntu 16.04 con entorno de escritorio KDE"
    image2="image:ubuntu-08.png" optionsthumb2="300x200" title2="Ubuntu 16.04 con entorno de escritorio KDE"
    caption="Ubuntu 16.04 con entorno de escritorio KDE" >}}

### Realizar tareas básicas de mantenimiento, obtener actualizaciones e instalar programas

Después de instalar Ubuntu es necesario conocer como realizar algunas tareas básicas de matenimiento para tener actualizado el sistema, para obtener importantes actualizaciones de seguridad, correcciones de errores, nuevas funcionalidades, instalar nuevos programas y desisntalar los programas que se dejan de usar además empezar a conocer la terminal.

* [Tareas básicas después de instalar una distribución GNU/Linux][blogbitix-462]
* [Las aplicaciones del entorno de escritorio de GNOME][blogbitix-464]

Ubuntu por defecto ya incorpora una buena cantidad de software preinstalado. En cualquier caso con la aplicación _Software de Ubuntu_ se puede instalar más. Al cabo de un tiempo de haber instalado Ubuntu se publicarán actualizaciones del software que tengas instalado con mejoras y correcciones de seguridad que son recomendables instalarlas usando la aplicación _Actualizciones de software_. Ubuntu comprueba periódicamente si hay nuevas actualizaciones, si las hay muestra una notificación con cuales son y permite realizar la actualización a conveniencia del usuario. Una vez aplicadas las actualizaciones puede se requieredo reiniciar el sistema para que surtan efecto.

{{< image
    gallery="true"
    image1="image:ubuntu-software.png" optionsthumb1="300x200" title1="Instalar y desinstalar software"
    image2="image:ubuntu-actualizaciones.png" optionsthumb2="300x200" title2="Instalar actualizaciones de seguridad y software"
    caption="Instalar actualizaciones de seguridad y software" >}}

### Ayuda

En internet hay cantidad de artículos en blogs o foros con ayuda que puedes encontrar con un buscador web como [Google][google] o [DuckDuckGo][duckduckgo]. En ellos seguramente encontrarás una respuesta que te resuelva o ayude en cualquier problema que se te presente o duda que te surja. Y si después de haber buscado no encuentras la solución deja un comentario en este blog e intentaré ayudarte.

{{% /post %}}
