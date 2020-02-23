---
pid: 0466
type: "post"
title: "Cómo migrar el contenido de un sitio web HTML a formato Markdown"
url: "/2020/02/como-migrar-el-contenido-de-un-sitio-web-html-a-formato-markdown/"
date: 2020-02-23T11:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:markdown.svg"
tags: ["planeta-codigo", "web"]
---

{{% post %}}

{{< logotype image1="html.svg" image2="markdown.svg" >}}

[Wordpress][wordpress] es una opción muy pupular por su facilidad de uso para crear sitios web y blogs. Sin embargo, tiene algunos puntos débiles como necesitar una base de datos para guardar el contenido lo que hace que su instalación, mantenimiento, actualizción o presente problemas de seguridad por necesitar de un procesamiento en este caso [PHP][php] para generar las páginas HTML a partir del contenido guardado en la base de datos y sus _plugins_ instalados.

Por estos motivos los generadores de sitios web estáticos al ser mucho más simples son una alternativa, el resultado final es simplemente contenido HTML, hojas de estilo CSS, imágenes, JavaScript y los recursos adicionales que necesite. Todo este contenido estático simplemente necesita de un servidor web no necesita ninguna base de datos lo que lo hace más sencillo instalar en un servidor ni ningún programa que genere el contenido HTML. Además, los generadores de sitios web estáticos permiten editar el contenido en el ordenador local con cuales quiera herramientas instaladas, como [Visual Studio Code][microsoft-visual-studio-code], entre otras cosas para buscar y reemplazar u aplicar otros comandos de [GNU][gnu]/[Linux][linux] para transformar el contenidode forma masiva.

Muchos de los generadores estáticos de sitios web como [Hugo][hugo] usan como formato de contenido [Markdown][markdonw]. Markdown utiliza una sintaxis que procesada se convierte con posterioridad a HTML, en los archivos Markdown también puede incluirse trozos de HTML que es emitido sin ningún cambio.

Migrar un sitio web web HTML generador por Wordpress u otro a un generador estático es posible, requiere las siguientes tareas:

* Recuperar todo el contenido del sitio web original. El contenido complete de un sitio web se puede descargar con un comando de _wget_.
* Extraer la parte de contenido propio de la página o del artículo. En Java con la librería [jsoup][jsoup], no es complicado utilizando un selector similar a los empleados por [jQuery][jquery].
* Convertir el contenido HTML a Markdown, en Java ofrecen esta funcionalidad las librerías [remark][remark] y [MarkdownJ][markdownj].

{{< code file="wget.sh" language="bash" options="" >}}

Migrar un sitio web HTML con Wordpress sería una tarea que requeriría mucho tiempo, más si tiene muchos artículos, si se hace manualmente copiando y pegando el texto de cada artículo, imágenes, ... Creando un _script_ la mayor parte de la tarea se automatiza, seguramente hay que hacer algunas acciones manuales pero con _wget, __jsoup_, _remark_ y un _script_ que no tiene por que ser muy largo en líneas de código la tarea es realizable con una inversión de tiempo razonable.

{{< code file="page.xhtml" language="html" options="" >}}

Descargado el sitio web la tarea del _script_ es por cada artículo del sitio web aplicar un selector de _jsoup_ extraer el contenido y convertirlo a Markdown con _remark_, también sería tarea del _script_ mover los recursos a la ubicación que requiera el generador de sitios web estáticos del artículo como las imágenes, que el comando _wget_ también descarga.

{{< code file="Main.java" language="java" options="" >}}

Resultado en formato markdown.

{{< code file="index.xmarkdown" language="markdown" options="" >}}

{{% /post %}}