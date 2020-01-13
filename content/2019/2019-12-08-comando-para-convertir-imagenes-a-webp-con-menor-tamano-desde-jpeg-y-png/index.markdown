---
pid: 447
type: "post"
title: "Comando para convertir imágenes a WebP con menor tamaño desde JPEG y PNG"
url: "/2019/12/comando-para-convertir-imagenes-a-webp-con-menor-tamano-desde-jpeg-y-png/"
date: 2019-12-08T14:00:00+01:00
updated: 2019-12-30T22:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "resource:images/image-1.jpg"
tags: ["gnu-linux", "planeta-codigo"]
summary: "Las velocidades de conexión actuales de 100 Mbps y de 600 Mbps en los hogares permiten no darle tanta importancia al tamaño de una imagen y aunque los dispositivos móviles también tienen unas velocidades de conexión rápidas reducir el tamaño de las imágenes puede significar que una página web cargue algo más rápido. El ahorro está en un 30% y 60% lo que en colecciones grandes de imágenes el ahorro es considerable. WebP proporciona un ahorro de tamaño en las imágenes con una calidad similar que _jpg_ y _png_."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Para que las imágenes ocupen menos espacio se utilizan formatos como _jpg_ para fotos y _png_ utilizado en imágenes como capturas de pantalla de ordenador. En las imágenes fotográficas los píxeles adyacentes suelen tener el mismo color y formatos como _jpg_ se basan en esto para dividir la imagen en pequeñas baldosas en las que  pueda almacenar la información de menos píxeles, _jpg_ es un formato con pérdida de calidad que sin ser excesiva es aceptable y se ve compensada con un ahorro importante en el tamaño de la imagen. El formato _png_ es un formato sin pérdida de calidad pero con igualmente con reducido tamaño en imágenes de captura de pantalla de ordenador.

Para comprimir aún más el tamaño de las imágenes con la misma calidad apreciable Google ha desarrollado el formato de imágenes [WebP][webp]. Webp soporta imágenes con pérdida de calidad para ser una alternativa a _jpg_, sin pérdida de calidad y imágenes con animaciones como alternativa a imágenes _png_ con animación. La reducción en tamaño de WebP sobre _jpg_ y _png_ está en un 30% o 60% dependiendo de la imagen un ahorro de tamaño significativo que es útil para que por ejemplo las páginas web tengan un menor tamaño de descarga y con ello se carguen más rápido si tiene numerosas fotos e imágenes.

Los navegadores modernos como [Google Chrome][google-chrome], [Firefox][firefox], [Microsoft Edge][microsoft-edge] y versiones para Android ya soportan WebP en los formatos con pérdida, sin pérdida y con animaciones.

Una imagen que usé para [crear una imagen reducida o vista previa][blogbitix-161] tiene un tamaño de 1600 píxeles de ancho y 1067 de alto ocupando 1018 KiB, la imagen en formato _png_ tiene un tamaño de 1426 píxeles por 947 ocupando 78 KiB.

{{< image
    gallery="true"
    image1="image:image-1.jpg" optionsthumb1="300x200" title1="Fotografía en formato jpg"
    image2="image:image-2.png" optionsthumb2="300x200" title2="Captura de pantalla en formato _png_"
    caption="Imágenes en formato JPEG y PNG" >}}

Las mismas imágenes comprimidas con WebP ocupan 826 KiB, un 18% menos, para la original en formato _jpg_ y 26 KiB, un 66% menos, para la original en formato _png_. Las reducciones de tamaño son importantes y teniendo en cuenta que es sin pérdida de calidad apreciable sobre las originales utilizar WebP como formato de imagen permite ahorrar un tamaño importante de descarga en una página web o en espacio de almacenamiento en colecciones grandes de fotografías e imágenes.

{{< image
    gallery="true"
    image1="image:image-1.webp" thumb1="image-1-thumb.webp" optionsthumb1="300x200" title1="Fotografía en formato WebP"
    image2="image:image-2.webp" thumb2="image-2-thumb.webp" optionsthumb2="300x200" title2="Captura de pantalla en formato WebP"
    caption="Mismas imágenes en formato WebP" >}}

[ImageMagick][imagemagick] permite convertir las imágenes entre estos formatos. Con este comando se convierten todas las imágenes _jpg_ y _png_ de un directorio a formato WebP.

{{< code file="convert-to.webp.sh" language="bash" options="" >}}

{{< reference >}}
* [Convertir imágenes entre formatos y cambiar tamaño con ImageMagick][elblogdepicodev-129]
{{< /reference >}}

{{% /post %}}
