---
pid: 97
type: "post"
title: "Grabar y compartir vídeo de la terminal con Asciinema"
url: "/2015/09/grabar-y-compartir-video-de-la-terminal-con-asciinema/"
date: 2015-09-20T13:00:00+02:00
updated: 2015-11-11T19:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:asciinema.png"
tags: ["gnu-linux", "planeta-codigo"]
summary: "Asciinema es una herramienta que nos permite grabar un vídeo de texto con la salida de la terminal. El vídeo de texto es mucho mejor que una foto estática de la salida en un determinado punto o un vídeo de imágenes del que no podemos seleccionar y copiar su texto."
---

{{% post %}}

{{< logotype image1="asciinema.png" title1="Asciinema" width1="200" >}}

Si queremos compartir las acciones en una terminal y su salida tenemos varias opciones, la más simple es ejecutar el comando y copiar la salida en un archivo de texto, correo electrónico o artículo de una bitácora. Sin embargo, con esta opción solo tenemos el contenido final del comando y a veces en donde se usan varios comandos o que limpian la terminal (como por ejemplo con ssh) es difícil seguir en esa foto final la salida que se ha ido produciendo en la terminal. Otra opción es crear un vídeo tradicional de imágenes que podamos reproducir con [VLC][vlc] para ver la evolución de la salida tal y como se produce, sin embargo, en esta opción perdemos el poder copiar y pegar texto, es habitual que tengamos que parar el vídeo y escribir el comando o la salida que vemos en el vídeo, esto es lento y propenso a errores ya que podemos confundirnos varias veces al teclear lo que vemos en el vídeo. Otra opción mejor es usar [Asciinema][asciinema] que captura el texto de la terminal y crea un vídeo de texto que representa la sesión de terminal que hemos tenido.

Asciinema es como un vídeo pero de texto que además podemos compartir para que otras personas lo vean y que podemos incrustar en páginas web como artículos de bitácoras. Además permite seleccionar y copiar texto y seguro que necesita mucho menos ancho de banda que un vídeo de [YouTube][youtube]. Empezar a crear vídeos de texto es tan sencillo como [descargar el binario de Asciinema](https://github.com/asciinema/asciinema/releases) o [instalarlo con el gestor de paquetes](https://asciinema.org/docs/installation) de la distribución GNU/Linux que usemos, también se puede usar en [Mac OS][macos] y [FreeBSD][freebsd].

Una vez instalado, podemos iniciar una grabación de la terminal, esto creará un archivo _video.asciinema_. Podremos parar la grabación con la combinación de teclas <kbd>ctrl+d</kbd> o tecleando el comando <code>exit</code>:

{{< code file="asciinema-rec.sh" language="bash" options="" >}}

Reproducir el vídeo creado con:

{{< code file="asciinema-play.sh" language="bash" options="" >}}

Y compartirlo con:

{{< code file="asciinema-upload.sh" language="bash" options="" >}}

Para compartir los vídeos solo necesitaremos una cuenta de correo, no necesitaremos una clave ya que la autenticación en Asciinema se hace mediante un enlace que se nos envían a nuestra cuenta de correo cada vez que queremos acceder a nuestra cuenta. Si instalamos Asciinema por segunda vez o en otro ordenador y queremos asociarlo con la cuenta que ya tenemos podemos hacerlo con:

{{< code file="asciinema-auth.sh" language="bash" options="" >}}

En la [documentación de Asciinema](https://asciinema.org/docs) están las opciones completas que podemos usar por ejemplo para añadir un título al vídeo o para ejecutar un comando directamente. Una vez que tenemos subido el vídeo a la web de Asciinema podemos compartirlo ya sea enviando en enlace del vídeo o con un reproductor embebido en una página web o artículo de un _blog_. Para esto último deberemos incluir un _script_ de JavaScript para el reproductor de la siguiente forma, con el atributo id indicamos el vídeo que queremos reproducir, en la [documentación de las opciones para embeber los vídeos](https://asciinema.org/docs/embedding) podemos ver las opciones completas que podemos emplear:

{{< code file="asciinema-embed.html" language="html" options="" >}}

Y este es el resultado de un vídeo en el que muestro un [Script de instalación de Arch Linux desatendido, automatizado y personalizable][blogbitix-204].

{{< asciinema id="192880" caption="Vídeo de ejemplo de Asciinema, Instalación de sistema base de Arch Linux con alis" >}}

{{< reference >}}
* [Asciinema][asciinema]
* [Documentación de Asciinema](https://asciinema.org/docs)
* [Documentación para embeber vídeos](https://asciinema.org/docs/embedding)
{{< /reference >}}

{{% /post %}}
