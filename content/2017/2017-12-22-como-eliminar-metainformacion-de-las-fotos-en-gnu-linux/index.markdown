---
pid: 289
type: "post"
title: "Como eliminar metainformación de las fotos en GNU/Linux"
url: "/2017/12/como-eliminar-metainformacion-de-las-fotos-en-gnu-linux/"
date: 2017-12-22T18:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo", "software-libre"]
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

En los archivos de las fotos e imágenes además de su información visual gráfica, los millones de píxeles, se guarda información adicional relacionada con la misma, por ejemplo, con que modelo de cámara se realizó, la fecha y la hora a la que se realizó, e incluso la localización si la cámara dispone de GPS u otro medio de ubicación como posicionamiento mediante la red de datos móvil o WIFI.

Compartir la foto en redes sociales ya es compartir mucha información y un peligro para la privacidad pero si además va acompañada de esta metainformación lo es algo más. Esta metainformación, información sobre la información, información sobre la imagen, son los [datos EXIF](https://es.wikipedia.org/wiki/Exchangeable_image_file_format) y se guardan embebidos en el propio archivo de la foto.

Podemos obtener la metainformación guardada en la foto de diferentes formas. Una con la herramienta de visualización de imágenes de nuestro entorno de escritorio, en mi caso con el visor de imágenes de [GNOME][gnome] o con las propiedades de archivo de [Windows][windows] (botón derecho del ratón sobre el archivo > Propiedades). Otra es usando la herramienta ImageMagick.

{{< image
    gallery="true"
    image1="image:visor-imagenes.png" optionsthumb1="300x200" title1="Visor de imágenes de GNOME"
    image2="image:propiedades-imagen.png" optionsthumb2="300x200" title2="Propiedades de imagen con metadatos"
    caption="Imagen y propiedades con metadatos" >}}

Instalado el paquete [ImageMagick][imagemagick] de nuestra distribución [GNU][gnu]/[Linux][linux], en este caso con [Arch Linux][archlinux] la metainformación de una foto se obtiene con el comando:

{{< code file="identify.sh" language="bash" options="" >}}

Si la foto incluye personas algunas redes sociales como [Facebook][facebook] permiten identificarlas, acompañada de metainformación además informa de con que, con quién, cuando y donde se tomó la foto. Si te importa y quieres proteger tu privacidad un poco es aconsejable eliminar esta metainformación al subir o compartir las fotos en las redes sociales. Con ImageMagick se puede eliminar la metainformación con los siguientes comandos. El primero modifica el archivo original y el segundo crea una copia de la foto sin la metainformación:

{{< code file="mogrify-convert.sh" language="bash" options="" >}}

[Twitter elimina los datos EXIF](https://help.twitter.com/es/using-twitter/tweeting-gifs-and-pictures) de las fotos aunque utiliza la ubicación de la foto para realizar sugerencias de ubicaciones. [Facebook][facebook] creo que también elimina los datos EXIF al menos al visualizarlas, también [WhatsApp][whatsapp] y [Telegram][telegram]. Pero al compartir los archivos de fotos de forma directa como correo electrónico o por algún otro medio los metadatos seguirán estando presentes.

{{< image
    gallery="true"
    image1="image:planton-roble.jpg" optionsthumb1="300x200" title1="Imagen con datos EXIF"
    image2="image:planton-roble-noexif.jpg" optionsthumb2="300x200" title2="Imagen sin datos EXIF"
    caption="Imagen izquierda con datos EXIF, imagen derecha sin datos EXIF" >}}

¿Puedes averiguar el dispositivo, la fecha en la que hizo la foto y con que software fotográfico se editó?

Independientemente de los datos EXIF al compartir fotos hay que tener un poco de cuidado, si tu privacidad no te importa mucho y compartes cualquier cosa personal tuya y así lo has decidido, tú mismo, eso sí simplemente se respetuoso y respeta la privacidad de las personas de las que tienes intención de compartir fotos. Ten en cuenta que compartir que estás de vacaciones, amigos, familiares y con el resto del historial de tu red social se puede conocer bastante acerca de la vida de una persona.

{{% /post %}}
