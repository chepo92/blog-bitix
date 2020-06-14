---
pid: 492
type: "post"
title: "Comando para convertir una imagen SVG a PNG y JPG con diferentes tamaños, formatos y color de fondo con Inkskape"
url: "/2020/07/comando-para-convertir-una-imagen-svg-a-png-y-jpg-con-diferentes-tamanos-formatos-y-color-de-fondo-con-inkskape/"
date: 2020-06-14T09:00:00+02:00
updated: 2020-06-14T10:40:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo", "software-libre"]
summary: "El formato de imagen SVG tiene la ventaja de permitir el escalado de la imagen sin pérdida de calidad y suele tener menor tamaño que la imagen equivalente en formato PNG y JPG. Si es necesario la imagen SVG es exportable a formato de imagen PNG y JPG con el tamaño deseado o color de fondo. El editor de imágenes Inkscape permite con su utilidad de línea de comandos automatizar y exportar archivos SVG a PNG y JPG y ocultar y mostrar las capas deseadas del archivo original para obtener el resultado deseado en la exportación."
---

{{% post %}}

{{< logotype image1="inkscape.svg" image2="gnu.svg" >}}

El formato de imagen SVG es un formato de imagen vectorial donde las líneas, formas, posición y colores se describen en formato texto, tiene la ventaja de ser un formato escalable que no pierde resolución independiente del tamaño de imagen en la que se represente, es decir, la imagen tiene la misma calidad al tamaño _full hd_ 1920x1080 que a 4K 3840x2560 que en 800x600 píxeles.

Con las imágenes de fotos en formato JPG y sin pérdida de calidad PNG la resolución adecuada para mostrar estas imágenes es la original del archivo a otra resolución hay que hacer un escalado con un algoritmo para añadir o quitar píxeles, el escalado es una operación imprecisa que resta algo de calidad a la imagen. [Escalar el tamaño de una imagen JPG o PNG][blogbitix-161] es necesario para obtener la imagen en otros tamaños, dependiendo del número de píxeles a añadir si se hace más grande que la original o píxeles a quitar si se reduce el tamaño la pérdida de calidad se nota más o menos.

{{< image
    gallery="true"
    image1="image:201607.jpg" optionsthumb1="300x200" title1="Imagen en formato JPG original"
    image2="image:201607-thumb-300x200.jpg" optionsthumb2="300x200" title2="Imagen en formato JPG escalada a 300x200 píxeles"
    caption="Imagen en formato JPG original y escalada a 300x200 píxeles" >}}

Los navegadores y dispositivos móviles ya soportan como formato de imagen el SVG, en la web y los dispositivos móviles es especialmente adecuado este formato ya que además de adaptarse a la variedad de tamaños de los dispositivos de escritorio o móviles suelen tener un menor tamaño de archivo lo que hace que se descarguen más rápido al requerir menos ancho de banda.

Aún con los beneficios que posee el formato SVG algunas aplicaciones no soportan el formato SVG y en este caso es necesario hacer una conversión de SVG a los formatos binarios _rasterizados_ PNG o JPG. El formato SVG permite obtener estas imágenes PNG y JPG en diferentes tamaños sin pérdida de calidad.

[Inkscape][inkscape] es un editor de imágenes vectoriales con una utilidad de línea de comandos que permite convertir y exportar imágenes en formato SVG a PNG y JPG en el tamaño y con el color de fondo deseado. El siguiente comando convierte todos los archivos SVG a PNG de una carpeta. En el comando se indican varios parámetros como la anchura deseada de la imagen, el color de fondo, los identificativos de las capas a exportar, el formato de salida y el nombre del archivo creado. Posteriormente con un segundo comando hay que [convertir las imágenes de formato PNG a JPG][blogbitix-447], dependiendo del tipo de imagen, los colores y degradados de la imagen el tamaño en formato PNG será mayor o menor que en formato JPG.

{{< code file="inkscape-convert-svg-png.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:apache-tapestry.svg" optionsthumb1="300x200" title1="Imagen original en formato SVG"
    caption="Imagen original en formato SVG" >}}

El editor Inkscape permite definir capas con diferentes elementos de la imagen, la linea de comandos permite exportar únicamente capas deseadas de la imagen para obtener el resultado deseado en la exportación. El SVG anterior contiene en el mismo archivo diferentes capas con diferentes versiones de la imagen adecuadas para un fondo claro y oscuro.

{{< code file="inkscape-png-versions.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:apache-tapestry-icontext-800-light.png" optionsthumb1="300x200" title1="Imagen en formato PNG"
    image2="image:apache-tapestry-icontext-800-dark.png" optionsthumb2="300x200" title2="Imagen en formato PNG" >}}
{{< image
    gallery="true"
    image1="image:apache-tapestry-icon-800-light.png" optionsthumb1="300x200" title1="Imagen en formato PNG"
    image2="image:apache-tapestry-icon-800-dark.png" optionsthumb2="300x200" title2="Imagen en formato PNG" >}}
{{< image
    gallery="true"
    image1="image:apache-tapestry-text-800-light.png" optionsthumb1="300x200" title1="Imagen en formato PNG"
    image2="image:apache-tapestry-text-800-dark.png" optionsthumb2="300x200" title2="Imagen en formato PNG"
    caption="Diferentes versiones de la imagen SVG en formato PNG" >}}

También es posible modificar el SVG original para mostrar y ocultar las capas visibles del archivo. Los siguientes comandos permiten exportar a PNG la imagen en diferentes versiones (icono y texto, solo icono o solo texto), con diferente color de fondo (transparente, blanco y negro) y en diferente tamaño. Esto permite automatizar y hacerlo mucho más rápido que el repetitivo proceso que sería realizar manualmente la exportación usando la interfaz gráfica de Inkscape.

{{< code file="inkscape-svg-versions.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:apache-tapestry-icontext-light.svg" optionsthumb1="300x200" title1="Imagen en formato SVG" class1="white-background"
    image2="image:apache-tapestry-icontext-dark.svg" optionsthumb2="300x200" title2="Imagen en formato SVG" class2="black-background" >}}
{{< image
    gallery="true"
    image1="image:apache-tapestry-icon-light.svg" optionsthumb1="300x200" title1="Imagen en formato SVG" class1="white-background"
    image2="image:apache-tapestry-icon-dark.svg" optionsthumb2="300x200" title2="Imagen en formato SVG" class2="black-background" >}}
{{< image
    gallery="true"
    image1="image:apache-tapestry-text-light.svg" optionsthumb1="300x200" title1="Imagen en formato SVG" class1="white-background"
    image2="image:apache-tapestry-text-dark.svg" optionsthumb2="300x200" title2="Imagen en formato SVG" class2="black-background"
    caption="Diferentes versiones de la misma imagen SVG" >}}

{{% /post %}}
