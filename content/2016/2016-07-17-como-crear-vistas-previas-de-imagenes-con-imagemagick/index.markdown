---
pid: 161
type: "post"
title: "Cómo crear miniaturas o vistas previas de imágenes con ImageMagick"
url: "/2016/07/como-crear-miniaturas-o-vistas-previas-de-imagenes-con-imagemagick/"
aliases: ["/2016/07/como-crear-vistas-previas-de-imagenes-con-imagemagick/"]
date: 2016-07-17T12:00:00+02:00
updated: 2020-04-12T18:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "software-libre"]
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

En una página web es útil utilizar imágenes más pequeñas en tamaño que las originales para reducir la cantidad de kilobytes transferidos al acceder a una página consiguiendo además que cargue más rápido en conexiones lentas. Algunas imágenes en alta calidad pueden ocupar varios _megas_, es poco eficiente cargar una imagen que posteriormente en el navegador se visualizará en un tamaño más pequeño, ya que la imagen se descargará en su tamaño original pero posteriormente el navegador al visualizarla la escalará al tamaño en que la muestre.

Si con antelación hacemos el escalado podremos ahorrar una buena cantidad de ancho de banda que se notará en mayor medida en los dispositivos móviles que usen las redes de operadores de telefonía y ahorrará datos en aquellos usuarios que tengan algún límite de transferencia mensual en su tarifa. También afecta al SEO, el tiempo de carga de una página Google es un criterio que tiene en cuenta su algoritmo para ordenar los resultados en su página, para mejorar el tiempo de carga de una página otra cosa a considerar es [cargar las imágenes cuando se visualizan][blogbitix-453] y no al cargar la página.

Si tenemos unas pocas imágenes y no es algo que hagamos a menudo podemos usar una herramienta de retoque fotográfico como [GIMP][gimp] pero si tenemos muchas imágenes o es algo que hacemos de forma regular es conveniente automatizar la tarea, nos ahorraremos bastante tiempo de algo que es tedioso hacer de forma manual.

### Crear una miniatura o vista previa

Al igual que podemos [convertir imágenes entre diferentes formatos][elblogdepicodev-129] o [añadir marcas de agua a imágenes][elblogdepicodev-58] de forma automatizada con [Image Magick][imagemagick] podemos escalar imágenes para generar miniaturas o _thumbnails_ más pequeñas para que ocupen menos. El comando para escalar todas las imágenes de una extensión _jpg_ en este caso a un tamaño original de 1600 de ancho y 1067 de alto en pixeles conservando la proporción de la imagen es el siguiente:

{{< code file="convert.sh" language="bash" options="" >}}

El primero de los comandos sirve para haceer cambios de tamaño de forma individual a cada foto y el segundo de forma masiva usando [Bash][bash]. Crean nuevos archivos con las miniaturas añadiendo al nombre de cada vista previa la terminación _\_thumb_, además con la opción _-strip_ elimina la metainformación de la foto o imagen que se hubiera almacenado junto con ella como hacen los teléfonos móviles y cámaras.

{{< image
    gallery="true"
    image1="image:201607.jpg" optionsthumb1="450x300" title1="Previsualización de imagen en tamaño 450x300"
    image2="image:201607.jpg" optionsthumb2="300x200" title2="Previsualización de imagen en tamaño 300x200"
    caption="Previsualización de imagen en tamaño 450x300 y 300x200 del original 1600x1067" >}}

Este sería una ejemplo de la imagen que tengo como fondo de escritorio. Su tamaño original ocupa 1 MB, la vista previa aproximadamente 210 KB en tamaño 650x450 y 50 KB en tamaño de 300x200. Una reducción de tamaño considerable.

Los ahorros de espacio conseguidos anteriores son consecuencia de reducir el tamaño de la imagen, [utilizar el formato de imagen WebP en vez de _jpg_ y _png_][blogbitix-447] además permite conseguir importantes reducciones de tamaño del espacio ocupado por las fotografías e imágenes originales, en torno al 20% y 60%.

### Escala de grises

Los siguientes comandos permiten crear imágenes en escala de grises.

{{< code file="convert-grayscale.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:201607-grayscale.jpg" optionsthumb1="300x200" title1="Imagen en escala de grises"
    caption="Imagen en escala de grises" >}}

### Convertir svg a jpg o png

Si la imagen original está en el formato escalar _svg_ para convertir a formatos _jpg_, _png_, o generar vistas previas el comando es similar indicando también el tamaño de la imagen deseada.

{{< code file="convert-svg.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:linux.svg" optionsthumb1="300x200" title1="Imagen en formato svg"
    image2="image:linux.png" optionsthumb2="300x200" title2="Imagen en formato png"
    caption="Imagen en formato svg y en formato png" >}}

{{< reference >}}
* [Añadir marcas de agua a imágenes con ImageMagick][elblogdepicodev-58]
* [Convertir imágenes entre formatos y cambiar tamaño con ImageMagick][elblogdepicodev-129]
{{< /reference >}}

{{% /post %}}
