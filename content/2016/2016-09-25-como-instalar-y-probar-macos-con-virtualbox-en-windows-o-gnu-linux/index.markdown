---
pid: 181
type: "post"
title: "Cómo instalar y probar macOS con VirtualBox en Windows o GNU/Linux"
url: "/2016/09/como-instalar-y-probar-macos-con-virtualbox-en-windows-o-gnu-linux/"
date: 2016-09-25T11:00:00+02:00
updated: 2020-07-04T23:30:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imageHead: "image:macos-catalina-wallpaper.jpg"
imagePost: "logotype:apple.svg"
tags: ["apple", "gnu-linux", "planeta-codigo"]
summary: "¿Queres comprar un Mac, tienes dudas o deseas probar su sistema operativo antes? Aunque el rendimiento será menor que una máquina real y la experiencia de usuario será peor, usando un _hackintosh_ mediante VirtuaBox ya sea con Windows o GNU/Linux podremos probarlo en detalle y hacernos una idea de su funcionamiento y aspecto visual."
---

{{% post %}}

{{< logotype image1="apple.svg" image2="macos.svg" >}}

Estaría leyendo alguna noticia, ahora no me acuerdo que me despertaría la curiosidad pero me pregunté si es posible usar de forma virtualizada [macOS][macos] con [VirtualBox][virtualbox] tanto en [Windows][windows] como en [GNU][gnu]/[Linux][linux]. Usar lo que se conoce como _hackintosh_, esto es _hackear_ el sistema operativo Macinstosh que solo está soportado y destinado funcionar en los equipos de [Apple][apple] para que se ejecute en cualquier un dispositivo no soportado. En la página web [hackintosh](http://www.hackintosh.com/) hay información diversa sobre el tema como instrucciones, vídeos, comunidades, ... Es política de Apple que su sistema operativo solo pueda ser ejecutado en sus equipos que los vende de forma conjunta a un notable precio. No se si alguien usa macOS en un sistema no Mac con garantías de que en alguna actualización el sistema deje de funcionar teniendo en cuenta la política de Apple para con sus productos.

Ya sea por curiosidad o por probar antes de hacer una compra se puede tener interés en cómo probar el sistema operativo macOS para saber si nos convence y nos gusta, sin embargo como macOS solo está soportado en sistemas Apple es difícil probarlo sin haber comprado antes un equipo. VirtualBox es un software de virtualización que permite ejecutar un sistema operativo dentro de otro con el que es posible ejecutar macOS en un sistema que tenga instalado Windows o GNU/Linux o probar GNU/Linux en un sistema Windows o macOS.

Si te gusta y convence macOS estos son varios de los equipos Apple en formato de escritorio y portátil.

{{< amazon
    linkids="985c015a07f1aeb92b4938f07efc4092,0aa1dc43af09cde9683bf55251528765,ccab7216adb50858f5eb5d55e30ad85b,7b5fd1a6f05821d2bcb5232d01704063,e3a47715b60f846d9d1fd81a4fcb82ae"
    asins="B0863RCN53,B0863G2M7F,B081G4SK26,B071K2RVHF,B07922WLRF" >}}

En esta guía muestro como instalar y probar macOS 10.15 Catalina con VirtualBox, los pasos on similares para las versiones 10.14 Mojave y 10.13 High Sierra.

### Requerimientos

Los requerimientos mínimos de macOS en la versión Catalina son los siguientes:

* 4 GiB de memoria RAM
* 12.5GB de espacio de almacenamiento
* MacBook (principios de 2015 o más nuevo)
* MacBook Air (mediados de 2012 o más nuevo)
* MacBook Pro (mediados de 2012 o más nuevo)
* Mac mini (final de 2012 o más nuevo)
* iMac (final de 2012 o más nuevo)
* iMac Pro (2017)
* Mac Pro (final de 2013 o más nuevo)

Dado que al virtualizar se están ejeutando dos sistemas operativos a la vez los requerimientos de la computadora anfitrión donde se ejecutan ambos son más elevados en cuando a memoria y almacenamiento siendo recomendable tener al menos 8 GiB de memoria, asignando 4 GiB a la máquina virtual y 25 GiB de almacenamiento. Para probar macOS Catalina en VirtualBox es necesario asignar a la máquina virtual 8 GiB de modo que es necesario tener en el sistema al menos 16 GiB.

### Descargar la imagen de macOS para Virtualbox

Los pasos para instalar macOS en una máquina virtual con VirtualBox requieren descargar un archivo _torrent_ con la imagen del disco duro de macOS y una vez creada la máquina virtual en VirtualBox ejecutar unos comandos para cambiar algunos parámetros del sistema de arranque EFI. Hay que descomprimir la imagen del disco duro para obtener el archivo de extensión _vmdk_ y proceder a crear la máquina virtual. Hay que elegir crear una máquina virtual de tipo macOS, cambiando algunas opciones, asignando unos 2 o 3 GiB de memoria, seleccionar el disco duro con la imagen _vmdk_ descomprimida y cambiar la memoria asignada a la pantalla.

De macOS hay múltiples versiones que con el tiempo Apple ha publicado inclorporando mejoras en el sistema operativo. Entre ellas:

* 10.15, Catalina publicada en octubre de 2019
* 10.14, Mojave con la ultima versión menor de actualización publicada en mayo de 2019
* 10.13, High Sierra con la ultima versión menor de actualización publicada en septiembre de 2017

Los archivos _torrent_ permiten descargar las imágenes de instalación de macOS que ocupan entre 5 y 10 GiB mediante compartición de archivos entre usuarios _torrent_ con programas como [Transmission][transmissionbt] o [uTorrent][utorrent]. Depediendo de la velocidad de conexión a internet la descarga tarda más o menos.

* {{< resourcelink text="Archivo de descarga macOS-10.15-Catalina" name="macOS-10.15-Catalina.torrent" >}}
* {{< resourcelink text="Archivo de descarga macOS-10.14-Mojave" name="macOS-10.14-Mojave.torrent" >}}
* {{< resourcelink text="Archivo de descarga macOS-10.13-High-Sierra" name="macOS-10.13-High-Sierra.torrent" >}}

Una vez descargados los archivos hay que descomprimirlos, **si al descomprimir el archivo _rar_ se solicita la contraseña es `Geekrar.com`**.

{{< image
    gallery="true"
    image1="image:descargar-macos-virtualbox.png" optionsthumb1="300x200" title1="Descarga de macOS mediante torrent"
    image2="image:archivo-imagen-macos-catalina-vmdk.png" optionsthumb2="300x200" title2="Archivo VMDK de instalación de macOS para Virtualbox"
    caption="Descarga de macOS mediante torrent y archivo VMDK para VirtualBox" >}}

### Crear la máquina virtual en VirtualBox

VirtualBox es un software de virtualización gratuito disponible para varios sistemas operativos entre ellos Windows, GNU/Linux y macOS. De modo que probar macOS se puede hacer en cualquiera de estas plataformas. Instalado Virtuabox hay que crear una nueva máquina virtual asignar los parámetros de memoria RAM, almacenamiento de disco, memoria de vídeo y seleccionar usar un disco duro virtual existente que será el archivo _vmdk_ descomprimido descargado mediante _torrent_.

{{< image
    gallery="true"
    image1="image:configuracion-maquina-virtual-macos-1.png" optionsthumb1="200x150" title1="Configuración de la máquina virtual macOS con VirtualBox"
    image2="image:configuracion-maquina-virtual-macos-2.png" optionsthumb2="200x150" title2="Configuración de la máquina virtual macOS con VirtualBox"
    image3="image:configuracion-maquina-virtual-macos-3.png" optionsthumb3="200x150" title3="Configuración de la máquina virtual macOS con VirtualBox" >}}
{{< image
    gallery="true"
    image1="image:configuracion-maquina-virtual-macos-4.png" optionsthumb1="200x150" title1="Configuración de la máquina virtual macOS con VirtualBox"
    image2="image:configuracion-maquina-virtual-macos-5.png" optionsthumb2="200x150" title2="Configuración de la máquina virtual macOS con VirtualBox"
    caption="Configuración de la máquina virtual macOS con VirtualBox" >}}

Una vez creada la máquina virtual antes de iniciarla si se usa Windows hay que ejecutar los siguientes comandos en modo administrador, sustituyendo _macOS 10.15 Catalina_ por el nombre que le hayamos dado a la máquina virtual al crearla.

{{< code file="windows.cmd" language="Batchfile" options="" >}}

En el caso de Linux el archivo de comandos es similar aunque no es necesario ejecutar los comandos con permiso de administrador. Igualmente hay que sustituir _macOS 10.15 Catalina_ por el nombre que le hayamos dado a la máquina virtual al crearla.

{{< code file="linux.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:configuracion-maquina-virtual-macos-6.png" optionsthumb1="300x200" title1="Configuración de la máquina virtual macOS con VirtualBox"
    caption="Comandos de configuración de la máquina virtual macOS con VirtualBox" >}}

Hecho estos dos pasos podemos proceder a iniciar la máquina virtual.

### Instalar macOS en una máquina virtual

Al iniciar la ejecución de la máquina virtual de macOS en los primeros segundos empiezan a salir unos cuantos mensajes en modo texto hasta que se inicia el sistema gráfico con un proceso que inicia la instalación que tarda varios minutos pudiendo llegar a más de la media hora. 

{{< image
    gallery="true"
    image1="image:inicio-instalacion-macos-1.png" optionsthumb1="300x200" title1="Inicio de la instalación de macOS Catalina"
    image2="image:inicio-instalacion-macos-2.png" optionsthumb2="300x200" title2="Inicio de la instalación de macOS Catalina"
    image3="image:inicio-instalacion-macos-3.png" optionsthumb3="300x200" title3="Inicio de la instalación de macOS Catalina"
    caption="Inicio de la instalación de macOS Catalina" >}}

Después de completar la instalación inicial, un reinicio y otros minutos de espera se inicia el asistente de instalación y configuración inicial que consta de varios pasos con una pantalla de bienvenida seguido de otras para introducir algunos datos como el idioma, la disposición del teclado, opciones de localización, privacidad, ... en los que básicamente es dar varias veces al botón siguiente.

{{< image
    gallery="true"
    image1="image:asistente-de-instalacion-y-configuracion-inicial-1.png" optionsthumb1="200x150" title1="Asistente de instalación y configuración inicial de macOS Catalina"
    image2="image:asistente-de-instalacion-y-configuracion-inicial-2.png" optionsthumb2="200x150" title2="Asistente de instalación y configuración inicial de macOS Catalina"
    image3="image:asistente-de-instalacion-y-configuracion-inicial-3.png" optionsthumb3="200x150" title3="Asistente de instalación y configuración inicial de macOS Catalina" >}}
{{< image
    gallery="true"
    image1="image:asistente-de-instalacion-y-configuracion-inicial-4.png" optionsthumb1="200x150" title1="Asistente de instalación y configuración inicial de macOS Catalina"
    image2="image:asistente-de-instalacion-y-configuracion-inicial-5.png" optionsthumb2="200x150" title2="Asistente de instalación y configuración inicial de macOS Catalina"
    image3="image:asistente-de-instalacion-y-configuracion-inicial-6.png" optionsthumb3="200x150" title3="Asistente de instalación y configuración inicial de macOS Catalina" >}}
{{< image
    gallery="true"
    image1="image:asistente-de-instalacion-y-configuracion-inicial-7.png" optionsthumb1="200x150" title1="Asistente de instalación y configuración inicial de macOS Catalina"
    image2="image:asistente-de-instalacion-y-configuracion-inicial-8.png" optionsthumb2="200x150" title2="Asistente de instalación y configuración inicial de macOS Catalina"
    image3="image:asistente-de-instalacion-y-configuracion-inicial-9.png" optionsthumb3="200x150" title3="Asistente de instalación y configuración inicial de macOS Catalina" >}}
{{< image
    gallery="true"
    image1="image:asistente-de-instalacion-y-configuracion-inicial-10.png" optionsthumb1="200x150" title1="Asistente de instalación y configuración inicial de macOS Catalina"
    image2="image:asistente-de-instalacion-y-configuracion-inicial-11.png" optionsthumb2="200x150" title2="Asistente de instalación y configuración inicial de macOS Catalina"
    image3="image:asistente-de-instalacion-y-configuracion-inicial-12.png" optionsthumb3="200x150" title3="Asistente de instalación y configuración inicial de macOS Catalina" >}}
{{< image
    gallery="true"
    image1="image:asistente-de-instalacion-y-configuracion-inicial-13.png" optionsthumb1="200x150" title1="Asistente de instalación y configuración inicial de macOS Catalina"
    image2="image:asistente-de-instalacion-y-configuracion-inicial-14.png" optionsthumb2="200x150" title2="Asistente de instalación y configuración inicial de macOS Catalina"
    image3="image:asistente-de-instalacion-y-configuracion-inicial-15.png" optionsthumb3="200x150" title3="Asistente de instalación y configuración inicial de macOS Catalina" >}}
{{< image
    gallery="true"
    image1="image:asistente-de-instalacion-y-configuracion-inicial-16.png" optionsthumb1="200x150" title1="Asistente de instalación y configuración inicial de macOS Catalina"
    image2="image:asistente-de-instalacion-y-configuracion-inicial-17.png" optionsthumb2="200x150" title2="Asistente de instalación y configuración inicial de macOS Catalina"
    caption="Asistente de instalación y configuración inicial de macOS Catalina" >}}

### Primer inicio de sesión con macOS

Completados los pasos del asistente se entra en el escritorio con el fondo de pantalla característico según la versión de macOS y algunas de las aplicaciones incorporadas en el propio sistema por defecto en la barra de tareas inferior.

También se puede probar a [instalar otros programas con Hombrew][blogbitix-195], para instalar programas de la [Apple Store][apple-store] es necesario tener una cuenta.

{{< image
    gallery="true"
    image1="image:primer-inicio-macos-1.png" optionsthumb1="200x150" title1="Primer inicio de macOS Catalina en VirtualBox"
    image2="image:primer-inicio-macos-2.png" optionsthumb2="200x150" title2="Primer inicio de macOS Catalina en VirtualBox"
    image3="image:primer-inicio-macos-3.png" optionsthumb3="200x150" title3="Primer inicio de macOS Catalina en VirtualBox" >}}
{{< image
    gallery="true"
    image1="image:primer-inicio-macos-4.png" optionsthumb1="300x150" title1="Primer inicio de macOS Catalina en VirtualBox"
    caption="Primer inicio de macOS Catalina en VirtualBox" >}}

### Conclusión

Como partidario del software libre y la privacidad además de [los ínfimos impuestos que paga Apple][blogbitix-175] usando reprobable ingeniería fiscal y su software privativo no recomiendo usar un Mac pero si alguien quiere probar este sistema operativo antes de decidirse a hacer una compra usarlo de forma virtualizado es una buena ayuda para tomar una decisión y ver si nos gusta su sistema operativo aparte del propio equipo junto con su precio que podemos ver en las tiendas. Si no nos convence ni su software ni su abultado precio podemos optar por un portátil de [Slimbook][slimbook] mucho más económico y con características notables con los que no tendremos que pagar tampoco el [impuesto Windows][elblogdepicodev-57] ya que podemos elegir entre varias la distribución GNU/Linux preinstalada que deseamos.

Hay que tener en cuenta que al probar macOS con VirtualBox el rendimiento de la máquina virtual no será exactamente el mismo que en un equipo real por la sobrecarga impuesta por la virtualización. La experiencia de usuario puede cambiar significativamente junto con el hecho de que los portátiles Mac tiene una pantalla bastante mejor y con más resolución que la mayoría de portátiles diseñados para Windows o GNU/Linux y un SSD de gran rendimiento además de la falta de su _touchpad_, todo esto puede marcar diferencias en la experiencia de uso global.

{{< reference >}}
* [Install macOS Catalina on VirtualBox on Windows PC](https://www.geekrar.com/install-macos-catalina-on-virtualbox-on-windows-pc/)
* [How to Install macOS Sierra 10.12 on VirtualBox?](http://www.wikigain.com/install-macos-sierra-10-12-virtualbox/)
{{< /reference >}}

{{% /post %}}
