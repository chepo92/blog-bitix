---
pid: 480
type: "post"
title: "Renombrar múltiples archivos en GNOME"
url: "/2020/05/renombrar-multiples-archivos-en-gnome/"
date: 2020-05-08T16:00:00+02:00
updated: 2020-05-08T22:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:gnome-rename-files-1.png"
tags: ["gnu-linux", "planeta-codigo"]
summary: "Tienes unas decenas de archivos ya sean documentos, imágenes, fotos o archivos de música con nombres que quieres cambiar pero como son muchos hacerlo uno a uno es una tarea que requiere mucho tiempo. Por suerte GNOME posee una utilidad para realizar el renombrado de múltiples archivos, basta seleccionar los archivos a renombrar en el explorador de archivos o Nautilus y pulsar la tecla <kbd>F2</kbd>, con el diálogo que se muestra se introduce el nombre del archivo y el formato de la secuencia que se desee para asignar a cada archivo un nombre único y en pocos segundos se realiza el renombrado."
---

{{% post %}}

{{< logotype image1="gnome.svg" >}}

Cambiar de nombre a archivos es una tarea frecuente ya sea documentos de texto o imágenes. En [Windows][windows] y [GNU][gnu]/[Linux][linux] con [GNOME][gnome] se realiza desde el explorador de archivos, Nautilus en GNOME, seleccionando el archivo con la tecla <kbd>F2</kbd>. Pero a veces se desea renombrar no solo un archivo de forma individual sino múltiples archivos asignándoles un nombre común y un contador, hacer esto de forma manual archivo por archivo es lento, repetitivo, costoso y propenso a errores.

GNOME posee una funcionalidad muy útil para renombrar múltiples archivos que permite ahorrar mucho tiempo y hacerlo de forma rápida. Al seleccionar varios archivos y pulsar la tecla <kbd>F2</kbd> se muestra un diálogo para realizar el renombrado de forma masiva en todos los seleccionados. Este diálogo permite introducir un nombre común para todos los archivos y añadir un contador secuencial para diferenciarlos.

Por ejemplo, algunos móviles dan un nombre a las fotos poco descriptivos que incluye la fecha y la hora, _IMG\_201905201900.jpg_. Quizá prefiramos renombrar esas fotos a un nombre más descriptivo. Si tenemos unas cuantas decenas de fotos en GNOME, seleccionando las fotos, pulsando la tecla <kbd>F2</kbd> y completando el diálogo el renombrado se hace muy rápido.

{{< image
    gallery="true"
    image1="image:gnome-rename-files-1.png" optionsthumb1="300x200" title1="Nombres de archivos originales"
    caption="Nombres de archivos originales" >}}

Los nuevos nombres de archivo han de ser únicos, usando una plantilla y un contador se asigna a cada archivo un nuevo nombre único. El contador puede ser un número o un número con ceros a la izquierda para que todos los archivos tengan la misma longitud de nombre.

{{< image
    gallery="true"
    image2="image:gnome-rename-files-2.png" optionsthumb2="300x200" title2="Renombrar archivos en GNOME usando una plantilla"
    image3="image:gnome-rename-files-3.png" optionsthumb3="300x200" title3="Renombrar archivos en GNOME usando una plantilla"
    caption="Renombrar archivos en GNOME usando una plantilla" >}}

En otras ocasiones es necesario reemplazar una parte del texto de los nombres de archivo por otro, este caso se realiza con la opción buscar y reemplazar texto.

{{< image
    gallery="true"
    image1="image:gnome-rename-files-4.png" optionsthumb1="200x150" title1="Renombrar archivos en GNOME con buscar y reemplazar texto"
    image2="image:gnome-rename-files-5.png" optionsthumb2="200x150" title2="Renombrar archivos en GNOME con buscar y reemplazar texto"
    image3="image:gnome-rename-files-6.png" optionsthumb3="200x150" title3="Renombrar archivos en GNOME con buscar y reemplazar texto"
    caption="Renombrar archivos en GNOME con buscar y reemplazar texto" >}}

Esta es una pequeña utilidad que cuando se necesita se agradece mucho por el tiempo que ahorra en realizar el renombrado de archivos.

{{% /post %}}
