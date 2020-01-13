---
pid: 41
type: "post"
title: "Procesador de documentos LyX"
url: "/2014/09/procesador-de-documentos-lyx/"
date: 2014-09-05T13:12:12+02:00
updated: 2014-09-07T03:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:lyx.svg"
tags: ["software", "software-libre", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="lyx.svg" title="LyX" width="200" >}}

Hace unos días publiqué una [nueva edición del libro PlugIn Tapestry][blogbitix-40], sobre el _framework_ [Apache Tapestry][tapestry] para el desarrollo de páginas y aplicaciones web con Java. En este artículo quiero recoger las herramientas que utilicé para escribirlo y algunas cosas básicas a conocer para tener un libro con un aspecto decente y más prefesional. Son cosas muy básicas pero que a mi me costo un poco poco encontrarlas para conseguir lo que quería, quizá a alguien le sirvan.

## Herramientas

Empecé evaluando la herramienta más adecuada para escribir el libro, en un principio empecé con [Google Docs][google-docs], también con [LibreOffice][libreoffice], sin embargo, al final descubrí [LyX][lyx] y fué el que empleé. ¿Por que LyX? Porque al contrario de Google Docs y LibreOffice que son procesadores de textos LyX es un procesador de documentos ¿que significa esto? Que con LyX te centras casi exclusivamente en escribir el contenido del libro no de estar formateándolo. Como procesador de documentos hace que no tengas tanto control sobre los estilos pero a la vez hace que todo el libro tenga un formato homogéneo y no tengas que «microgestionar» el estilo de cada elemento, en un documento grande de más de 250 páginas es muy útil y te evita casi todo el trabajo de mantener la coherencia en los estilos, ahorrándole a uno mucho tiempo.

{{< image
    gallery="true"
    image1="image:lyx-plugin.png" optionsthumb1="300x200" title1="LyX" >}}

## LyX

LyX es una herramienta que funciona excelentemente, mucho mejor que LibreOffice según mi experiencia y tiene más posibilidades que Google Docs. LyX tiene varias funcionalidades que nos serán muy útiles como la creación de índices (también para figuras, cuadros, ...), inclusión de figuras y referencias que permiten a un término hacer referencia a otra parte del libro, inlcuir los listados de código en archivos externos, ...

Una de las primeras cosas que deberemos hacer es indicarle a LyX la clase de documento que pretendemos escribir a partir del cual se establecerán los estilos y opciones que LyX nos ofrecerá, también las secciones que dispondremos. Con la clase de documento book tendremos secciones numeradas y no numeradas, la diferencia es que además de unas tener numeración y otras no es que las numeradas aparecerán en el índice y las no numeradas no. Para ello seleccionamos Documento> Configuración.

{{< image
    gallery="true"
    image1="image:lyx-configuracion-documento.png" optionsthumb1="300x200" title1="Configuración documento, LyX" >}}

Entre las mismas opciones podemos seleccionar las tipografías, el diseño de la página (A4, A5, ...), los márgenes y una parte importe donde podremos modificar varios aspectos del documento, el preámbulo LaTeX, lo difícil de esta sección es saber cuales son las opciones podemos escribir en él pero si necesitamos modificar algo probablemente debamos insertarlo en esta sección. Un posible contenido es el siguiente donde defino y modifico el color de los hiperenlaces del libro y las opciones por defecto de los listados.

{{< image
    gallery="true"
    image1="image:lyx-preambulo-latex.png" optionsthumb1="300x200" title1="Configuración documento, LyX" >}}

{{< code file="preamble.tex" language="plaintext" options="" >}}

Otras opciones deberemos incluirlas como código Tex al principio (Insertar> Código Tex) del documento, para establecer cuál es la palabra a emplear para nombrar los capítulos, figuras y listados que por defecto aparecerán en inglés en vez de español (Chapter 1 en vez de Capítulo 1). Este es el primer recuadro en rojo de la imagen LyX.

Con LyX si necesitamos reorganizar los capítulos o secciones es muy simple, para ello abrimos el panel del esquema, seleccionamos la sección o capítulo y pulsamos sobre las flechas de ordenación.

## Fuente del documento

Podemos modificar la fuente del documento en Documento> Configuración> Tipografías. La fuente del elemento Romana será la que se use para la mayoría de elementos del documento.

{{< image
    gallery="true"
    image1="image:lyx-tipografias.png" optionsthumb1="300x200" title1="Tipografías, LyX" >}}

## Encabezados y pies de página

En Documento> Configuración> Diseño de página podemos establecer si queremos encabezados y pies de página en los que se incluye el número de página. Tenemos a nuestra disposición de varios tipos.

{{< image
    gallery="true"
    image1="image:lyx-diseno-pagina.png" optionsthumb1="300x200" title1="Tipografías, LyX" >}}

## Referencias

Las referencias permiten hacer referencia a otra parte del documento donde el concepto esté explicado de forma más completa. Las referencias son creadas en dos pasos, primero toda sección del documento a la que queramos hacer referencia deberemos asignarle una etiqueta Insertar> Etiqueta.

Una vez que disponemos la etiqueta podemos insertar una referencia a ella en cualquier otra parte del documento con Insertar> Referencia cruzada. Disponemos de varios formatos para la referencia como texto al que hace la referencia o como la página en la que se encuentra.

## Listados de código

Si el libro versa sobre un téma técnico y queremos mostrar listados de código tenemos dos opciones incrustar el código dentro del texto en LyX o hacer que se incluyan desde un archivo externo. En mi caso prefiero la segunda ya que de este modo si en algún momento queremos hacer alguna corrección a algún listado me parece más fácil hacerlo en el archivo externo que en el propio LyX, además el documento LyX queda más sencillo que con listados de código.

Para insertar un listado de código como documento externo debemos usar la opción Insertar> Archivo> Documento hijo, seleccionamos el archivo, en tipo de inclusión seleccionamos Listado de código y con el parámetro language=Java podemos hacer que LyX proporcione resaltado de sintaxis según el lenguaje del listado, en este caso Java.

{{< image
    gallery="true"
    image1="image:listado-codigo.png" optionsthumb1="300x200" title1="Listados de código" >}}

## Portada

Con LyX no podremos crear una portada atractiva dado lo limitado que estamos para modificar los estilos. Sin embargo, podemos incluir las páginas de un pdf externo a nuestro ducmento LyX. Este pdf externo lo podemos crear con la herramienta que queramos LibreOffice o Inskape. Con la opción Insertar> Archivo> Material externo podemos insertar todas las páginas del documento o solo las que queramos.

{{< image
    gallery="true"
    image1="image:libreoffice-plugin.png" optionsthumb1="300x200" title1="Tipografías, LyX" >}}

## Corrector ortográfico

Parte de la revisión consiste en corregir los posibles fallos ortográficos que cometamos, LyX incluye un corrector ortográfico. Para hacer uso de él deberemos instalar los diccionarios, en [Arch Linux][archlinux] instalaremos los paquetes aspell y aspell-es. Una vez instados podemos hacer uso del corrector con Herramientas> Corrector ortográfico, una vez iniciada la revisión podremos ir corrigiendo las palabras que no se encuentren en el diccionario.

## Versiones en formato de libro electrónico (pdf, epub y mobi)

En un principio no lo tuve en cuenta pero con LyX es posible generar muy fácilmente además de la versión pdf, la versión epub y mobi del libro con la ayuda de [Calibre][calibre]. La versión de libro electrónico en formato epub y mobi es muy útil para los usuarios que posean un lector de ebooks como el Kindle o cualquier otro, el pdf también se puede leer en un ebook pero una página del pdf no entrará de forma completa en la pantalla y obligaremos al usuario a hacer varios cambios de página.

Una vez que tenemos nuestro documento podemos exportarlo a diferentes formatos, uno de ellos es pdf para ello seleccionamos la opción Archivo> Export> PDF (LuaTeX). Para las versiones en libro electrónico deberemos exportar primeramente a formato LyXHTML una vez tenemos el libro en este formato comprimimos en un archivo zip todos los archivos que forman parte del libro (los genera en la misma ubicación del archivo .lyx). Este zip lo importamos en nuestra biblioteca de Calibre y a continuación lo empleamos para hacer la conversión a formato epub y luego a mobi. Con esto ya tenemos la versión en formato electrónico de nuestro libro que podrá ser leído de forma más cómoda en un libro electrónico.

Con LyX le podemos ofrecer al usuario la versión del libro que prefiera sin mucho trabajo por nuestra parte.

## Revisión, difusión y publicidad

Para finalizar diré que escribir un libro es un trabajo que consume mucho tiempo y esfuerzo y aunque parezca que no escribir el contenido del libro puede no ser la parte más costosa, revisarlo me costó tanto como escribirlo así como el hacer la aplicación con los ejemplos, la página en la que la alojaría y el marketing para darlo a conocer lo máximo posible publicándolo en webs en las que sus usuarios podrían estar interesados, en este caso en [JavaHispano][javahispano], [Barrapunto][barrapunto], en este blog y en los varios planetas en los que este blog puede publicar sus entradas.

{{< reference >}}
* [Introducción a LaTeX/XeTeX/LyX](https://elpinguinotolkiano.wordpress.com/latexxetexlyx/)
{{< /reference >}}

{{% /post %}}
