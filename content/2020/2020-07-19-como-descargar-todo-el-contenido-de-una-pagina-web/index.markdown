---
pid: 501
type: "post"
title: "Cómo descargar todo el contenido de una página web"
url: "/2020/07/como-descargar-todo-el-contenido-de-una-pagina-web/"
date: 2020-07-19T10:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:archivos-sitio-web.png"
tags: ["gnu-linux", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="gnu.svg" >}}

La necesidad puede ser hacer una copia de seguridad periódicas para conservar el historial del sitio web, descargar el contenido para procesarlo de alguna forma, para consultarlo sin conexión a internet u _offline_ si nuestra conexión es lenta o inestable o el servidor está caído, migrar un sitio web de un servidor web a otro o descargar los archivos de vídeo, audio, imágenes o multimedia.

Los navegadores web con el botón derecho del ratón ofrecen la posibilidad de descargar y guardar en el sistema de archivos la página que se está visualizando, está es la opción más simple ya que no se necesitan herramientas adicionales si solo se quiere guardar una página de las muchas de un sitio web. Su desventaja es que no sirve para guardar un sitio web completo por requerir hacer la operación manualmente por cada página, de forma que para realizar la operación de forma másiva y automatizada para el sitio web completo hay que utilizar alguna herramienta especializada.

### Descargar un sitio web desde la línea de comandos con wget

La herramienta de línea de comandos [wget][wget] permite descargar un sitio web completo con un comando ejecutado desde la terminal incluyendo los archivos HTML y de recursos como imágenes, vídeos, contenido multimedia como audio o música, de estilos CSS o archivos JavaScript. El contenido que descarga wget es el referenciado a través de los enlaces presentes en el propio contenido, wget explora los archivos HTML en busca de enlaces a recursos u otras páginas HTML y de forma recursiva descarga el contenido completo al sistema de archivos local. Está disponible para los sistemas operativos [Windows][windows], [GNU][gnu]/[Linux][linux] y [macOS][macOS] y es una herramienta de software libre y gratuita.

Basta indicar el o los dominios del sitio web de los que se quiere descargar el contenido y la URL de rastreo de inicio u otras URLs adicionales que se desean descargar. Este comando con las opciones indicadas solo descarga los enlaces del sitio web puesto como argumento, los enlaces a sitios web externos no indicados expresamente en la opción _--domain_ son ignorados. El comando wget soporta numerosas opciones para personalizar la descarga explicadas en su [página de manual](https://www.gnu.org/software/wget/manual/wget.html).

{{< code file="wget-download.sh" language="bash" options="" >}}

Terminado el proceso de descarga el contenido del sitio web se guarda en el sistema de archivos conservando la jerarquía de carpetas de las URLs de los recursos.

{{< image
    gallery="true"
    image1="image:archivos-sitio-web.png" optionsthumb1="650x450" title1="Archivos del sitio web en el explorador de archivos"
    caption="Archivos del sitio web en el explorador de archivos" >}}

Descargar un sitio web no es la única funcionalidad que ofrece wget, otra necesidad habitual es [buscar los enlaces rotos de una página web][blogbitix-115] que con el paso del tiempo se van generando ya sea porque los sitios web externos desaparecen o por errores en la edición y enlazado interno. Conocer los enlaces rotos permite arreglarlos para ofrecer mejor experiencia de usuario al visitante y para mejorar el SEO en el posicionamiento en los buscadores.

### Descargar un sitio web con programas de interfaz gráfica o páginas web

Hay algunas herramientas con interfaz gráfica como [HTTrack](https://www.httrack.com/) o [Cyotek WebCopy](https://www.cyotek.com/cyotek-webcopy) que realizan la misma tarea que wget de forma más intutiva. Aún así el comando de wget es una forma sencilla y rápida de realizar la descarga de un sitio web completo.

También hay algunas herramientas o páginas web _online_ que realizan la descarga de sitios web como [Website Downloader](https://websitedownloader.io) o [Archivarix](https://archivarix.com/en/website-downloader-cms-converter/) sin necesidad de instalar ningún programa en el ordenador aunque tienen unos límites muy reducidos que sobrepasados no son gratuitas y hay que pagar por utilizarlas.

{{% reference %}}
* [Downloading an Entire Web Site with wget](https://www.linuxjournal.com/content/downloading-entire-web-site-wget)
{{% /reference %}}

{{% /post %}}
