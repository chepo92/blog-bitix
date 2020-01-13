---
pid: 174
type: "post"
title: "Cómo configurar una impresora HP en red en Arch Linux"
url: "/2016/08/como-configurar-una-impresora-hp-en-red-en-arch-linux/"
date: 2016-08-28T10:00:00+02:00
updated: 2016-08-28T15:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:archlinux.svg"
tags: ["gnu-linux"]
summary: "Después de mucho tiempo sin tener configurada una impresora en red decidí dedicarle un tiempo a realizar la configuración. Con un par de errores que me encontré finalmente conseguí realizar correctamente la impresión de prueba con el modelo de impresora en concreto del que dispongo."
---

{{% post %}}

{{< logotype image1="archlinux.svg" title1="Arch Linux" width1="250" >}}

Uso [Arch Linux][archlinux] desde hace ya más de un lustro, en mi equipo personal e incluso en el equipo del trabajo. Hasta hace poco cuando necesitaba imprimir llevaba el documento en formato PDF en una memoria USB a una copistería y allí los imprimía dado que no tenía configurado mi equipo para usar la impresora en red, más que nada porque no le había dedicado de tiempo para hacerlo. Por último, encontré un momento y realice la configuración de un impresora en red _Hewlett Packard Color LaserJet MFP M476dw_ con <abbr title="Common Unix Printing System">[CUPS][cups]</abbr> en Arch Linux no sin encontrarme con algunos algunos problemas que finalmente conseguí resolver.

La [wiki de Arch Linux][archlinux-wiki] es una de la mejores documentaciones que hay en GNU/Linux pero en el caso de la [versión en inglés de CUPS](https://wiki.archlinux.org/index.php/CUPS) tiene bastantes secciones desactualizadas, la [versión en español de CUPS](https://wiki.archlinux.org/index.php/CUPS_(Espa%C3%B1ol)) está mejor pero aún así siguiendolas no conseguí instalar la impresora. Tuve que hacer varias búsquedas en foros.

Lo primero necesario a instalar es el paquete de CUPS y el controlador de la impresora en este caso HP, posteriormente iniciar como superusuarios el servicio de CUPS con systemd y avahi para el descubrimiento de impresoras y activarlos con el inicio del sistema si así lo deseamos:

{{< code file="install.sh" language="bash" options="" >}}

CUPS posee un panel de administración accesible con el navegador en la dirección _http\://localhost:631/admin_. Pulsando el botón _Añadir impresora_ en el panel de administración de CUPS iniciamos el asistente para añadir la impresora en el que avahi nos detectará la impresora en red y deberemos seleccionar la marca junto con el modelo específico. Al añadir la impresora se nos preguntará por un usuario y contraseña, como nombre usuario deberemos introducir _root_ y como contraseña la que hayamos establecido en el sistema para el superusuario. Desde el panel de impresoras de [GNOME][gnome] se debería poder añadir la impresora, sin embargo, a mi me daba algún tipo de error de modo que lo hice desde CUPS.

{{< image
    gallery="true"
    image1="image:cups-administracion.png" optionsthumb1="300x200" title1="Administración de CUPS"
    image2="image:cups-anadir-impresora-1.png" optionsthumb2="300x200" title2="Asistente añadir impresora en CUPS" >}}
{{< image
    gallery="true"
    image1="image:cups-anadir-impresora-2.png" optionsthumb1="300x200" title1="Asistente añadir impresora en CUPS"
    image2="image:cups-anadir-impresora-3.png" optionsthumb2="300x200" title2="Asistente añadir impresora en CUPS" >}}
{{< image
    gallery="true"
    image1="image:cups-anadir-impresora-4.png" optionsthumb1="300x200" title1="Asistente añadir impresora en CUPS" >}}

Finalizado el asistente en la sección _Impresoras_ examinado los detalles de la misma podremos ver los documentos imprimidos o en proceso de impresión. En el desplegable _Mantenimiento_ podremos imprimir una página de prueba con la que comprobaremos que funciona correctamente además de otras acciones sobre los trabajos, en el desplegable _Administración_ podemos eliminarla o modificarla.

{{< image
    gallery="true"
    image1="image:cups-impresoras-1.png" optionsthumb1="300x200" title1="Impresoras en CUPS"
    image2="image:cups-impresoras-2.png" optionsthumb2="300x200" title2="Impresoras en CUPS" >}}
{{< image
    gallery="true"
    image1="image:gnome-impresoras.png" optionsthumb1="300x200" title1="Impresoras en GNOME" >}}

Si la página de prueba no funciona en el archivo _/var/log/cups/error\_log_ encontraremos mensajes de error con pistas que nos ayudarán a saber que está fallando. Algunos de los mensajes de error que me encontré al realizar la configuración fué el siguiente.

{{< code file="error_log" language="plaintext" options="" >}}

A raíz de este mensaje tuve que añadir en el archivo _/etc/hosts_ el _host_ _HP.local_ con la dirección IP de la impresora en red que averigüé usando la pantalla táctil que ofrece este modelo de impresora (las mayúsculas y minúsculas son importantes).

{{< code file="hosts" language="plaintext" options="" >}}

Con todo configurado la prueba de impresión realizable tanto desde la página de administración de CUPS como de GNOME se realizó correctamente y este es el resultado. Una vez que esta prueba es satisfactoria podemos imprimir documentos desde las aplicaciones usando el diálogo de impresión donde aparecerá la impresora en red configurada. Además podremos cambiar algunas opciones como imprimir a dos caras o solo a una, imprimir en blanco y negro o a color o usar un perfil de impresión para ahorro de tinta.

{{< image
    gallery="true"
    image1="image:prueba-de-impresion-cups.jpg" optionsthumb1="300x200" title1="Prueba de impresión con CUPS" >}}

Para otras marcas y modelos de impresoras deberemos instalar otro controlador, en la siguiente [base de datos de impresoras](http://www.openprinting.org/printers) encontraremos el controlador aconsejado si en nuestra distribución no está documentado.

{{< reference >}}
* [CUPS][cups]
* [CUPS](https://es.wikipedia.org/wiki/Common_Unix_Printing_System) (wikipedia)
* [Documentación de CUPS](https://www.cups.org/documentation.html)
{{< /reference >}}

{{% /post %}}
