---
pid: 181
type: "post"
title: "Cómo instalar y probar macOS con VirtualBox en Windows o GNU/Linux"
url: "/2016/09/como-instalar-y-probar-macos-con-virtualbox-en-windows-o-gnu-linux/"
date: 2016-09-25T11:00:00+02:00
updated: 2016-09-25T23:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:apple.svg"
tags: ["apple", "gnu-linux", "planeta-codigo"]
summary: "¿Queres comprar un Mac, tienes dudas o deseas probar su sistema operativo antes? Aunque el rendimiento será menor que una máquina real y la experiencia de usuario será peor, usando un _hackintosh_ mediante VirtuaBox ya sea con Windows o GNU/Linux podremos probarlo en detalle y hacernos una idea de su funcionamiento."
---

{{% post %}}

{{< logotype image1="apple.svg" title1="Apple" width1="200" image2="macos.svg" title2="macOS" width2="300" >}}

Estaría leyendo alguna noticia, ahora no me acuerdo que me despertaría la curiosidad pero me pregunté si es posible usar de forma virtualizada [macOS][macos] con [VirtualBox][virtualbox] tanto en [Windows][windows] como en [GNU][gnu]/[Linux][linux]. Usar lo que se conoce como _hackintosh_, esto es _hackear_ el sistema operativo Macinstosh de los equipos de [Apple][apple] para que se ejecute en cualquier un dispositivo no soportado. En la página web [hackintosh](http://www.hackintosh.com/) puede encontrarse información diversa sobre el tema como instrucciones, vídeos, comunidades, ....

Es política de Apple que su sistema operativo solo pueda ser ejecutado en sus equipos que los vende de forma conjunta a un notable precio, no se si alguien usa macOS en un sistema no Mac con garantías de que en alguna actualización el sistema deje de funcionar teniendo en cuenta la política de Apple para con sus productos.

Los pasos para instalar macOS en una máquina virtual con VirtualBox son los siguientes, hay que descargar un {{< resourcelink text="archivo torrent con la imagen del disco duro de macOS" name="macOS-Mojave-10.14.4.torrent" >}} y una vez creada la máquina virtual en VirtualBox ejecutar unos comandos para cambiar algunos parámetros del sistema de arranque EFI. Deberemos descomprimir la imagen del disco duro para obtener el archivo de extensión _vmdk_ y proceder a crear la máquina virtual. Elegimos crear una máquina virtual de tipo macOS, cambiaremos algunas opciones, asignando unos 2 o 3 GiB de memoria, seleccionaremos el disco duro con la imagen _vmdk_ descomprimida y cambiaremos la memoria asignada a la pantalla.

{{< image
    gallery="true"
    image1="image:configuracion-virtualbox-macos-vm.png" optionsthumb1="300x200" title1="Configuración máquina virtual macOS"
    image2="image:configuracion-virtualbox-macos-pantalla.png" optionsthumb2="300x200" title2="Configuración pantalla VirtualBox"
    caption="Configuración de la máquina virtual" >}}

Si usamos Windows deberemos ejecutar los siguientes comandos en modo administrador, sustituyendo _macOS Sierra 10.12_ por el nombre que le hayamos dado a la máquina virtual al crearla:

{{< code file="windows.cmd" language="Batchfile" options="" >}}

En el caso de Linux el archivo de comandos es similar e igualmente sustituiremos _macOS Sierra 10.12_ por el nombre que le hayamos dado a la máquina virtual al crearla:

{{< code file="linux.sh" language="bash" options="" >}}

Hecho estos dos pasos podemos proceder a iniciar la máquina virtual, veremos que empiezan a salir unos cuantos mensajes hasta que se inicia el sistema gráfico con la instalación y su asistente que constará de varios pasos.

{{< image
    gallery="true"
    image1="image:1-instalacion-inicio.png" optionsthumb1="300x200" title1="Inicio instalación macOS"
    image2="image:2-instalacion-welcome.png" optionsthumb2="300x200" title2="Asistente instalación macOS" >}}
{{< image
    gallery="true"
    image1="image:3-instalacion-keyboard.png" optionsthumb1="300x200" title1="Teclado"
    image2="image:4-instalacion-location.png" optionsthumb2="300x200" title2="Localización" >}}
{{< image
    gallery="true"
    image1="image:5-instalacion-transfer.png" optionsthumb1="300x200" title1="Transferencia"
    image2="image:6-instalacion-apple-id.png" optionsthumb2="300x200" title2="Apple ID" >}}
{{< image
    gallery="true"
    image1="image:7-instalacion-terms-conditions.png" optionsthumb1="300x200" title1="Términos y condiciones"
    image2="image:8-instalacion-account.png" optionsthumb2="300x200" title2="Cuenta" >}}
{{< image
    gallery="true"
    image1="image:9-instacion-timezone.png" optionsthumb1="300x200" title1="Zona horaria"
    image2="image:10-instalacion-diagnostics.png" optionsthumb2="300x200" title2="Diagnósticos" >}}
{{< image
    gallery="true"
    image1="image:11-instalacion-siri.png" optionsthumb1="300x200" title1="Siri"
    image2="image:12-instalacion-setting-up.png" optionsthumb2="300x200" title2="Configurando" >}}

Terminada la instalación entramos en el escritorio con el aspecto clásico y fondo de pantalla de macOS y las aplicaciones incorporadas en el propio sistema por defecto.

{{< image
    gallery="true"
    image1="image:13-macos-start.png" optionsthumb1="300x200" title1="Inicio"
    image2="image:14-macos-help.png" optionsthumb2="300x200" title2="Ayuda" >}}
{{< image
    gallery="true"
    image1="image:15-macos-overview.png" optionsthumb1="300x200" title1="Resumen"
    image2="image:16-macos-finder.png" optionsthumb2="300x200" title2="Finder" >}}
{{< image
    gallery="true"
    image1="image:17-macos-photos.png" optionsthumb1="300x200" title1="Fotos"
    image2="image:18-macos-preferences.png" optionsthumb2="300x200" title2="Preferencias" >}}

Como partidario del software libre y la privacidad además de [los ínfimos impuestos que paga Apple][blogbitix-175] usando reprobable ingeniería fiscal y su software privativo no recomiendo usar un Mac pero si alguien quiere probar este sistema operativo antes de decidirse a hacer una compra usarlo de forma virtualizado es una buena ayuda para tomar una decisión y ver si nos gusta su sistema operativo aparte del propio equipo junto con su precio que podemos ver en las tiendas. Si no nos convence ni su software ni su abultado precio podemos optar por un portátil de [Slimbook](https://slimbook.es/) mucho más económico y con características notables con los que no tendremos que pagar tampoco el [impuesto Windows][elblogdepicodev-57] ya que podemos elegir entre varias la distribución GNU/Linux preinstalada que deseamos.

{{< amazon
    linkids="cb28136e0fe9b53cc2f70659a332a802&internal=1,0e5bd11129416c356bc34a6aefbcfff7&internal=1,a06a014a2d694cd3a57c629904fbba42&internal=1,90349519a4fe5c650bd8ca6d64f05302&internal=1"
    asins="B00OQ2I4GK,B01ET2K6SU,B01EWWHFOU,B00ULPMPF2" >}}

Deberemos tener en cuenta al probar macOS con VirtualBox que el rendimiento de la máquina virtual no será exactamente el mismo que en un equipo real por la sobrecarga impuesta por la virtualización realizada. La experiencia de usuario puede cambiar significativamente junto con el hecho de que los portátiles Mac tiene una pantalla bastante mejor y con más resolución que la mayoría de portátiles diseñados para Windows o GNU/Linux y un SSD de gran rendimiento además de la falta de su _touchpad_, todo esto puede marcar alguna diferencia.

{{< reference >}}
* [How to Install macOS Sierra 10.12 on VirtualBox?](http://www.wikigain.com/install-macos-sierra-10-12-virtualbox/)
{{< /reference >}}

{{% /post %}}
