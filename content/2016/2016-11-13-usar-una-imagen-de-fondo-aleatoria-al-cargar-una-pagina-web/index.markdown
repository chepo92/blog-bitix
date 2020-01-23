---
pid: 194
type: "post"
title: "Usar una imagen de fondo aleatoria al cargar una página web"
url: "/2016/11/usar-una-imagen-de-fondo-aleatoria-al-cargar-una-pagina-web/"
date: 2016-11-13T12:00:00+01:00
updated: 2017-03-20T21:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
imagePost: "logotype:javascript.svg"
tags: ["javascript", "planeta-codigo", "programacion"]
---

{{% post %}}

Para darle un toque de estilo a la bitácora he usado unas cuantas texturas de fondo obtenidas de [Subtle Patterns](https://www.toptal.com/designers/subtlepatterns/). Son unas imágenes con un patrón repetitivo de colores suaves y poco llamativos que podemos usar como fondo de una página web, son de libre uso respetando la [licencia Creative Commons - Reconocimiento - Compartir igual](https://creativecommons.org/licenses/by-sa/3.0/). Podemos encontrar texturas en las siguientes categorías y motivos:

* [Light](http://subtlepatterns.com/tag/light/)
* [Dark](http://subtlepatterns.com/tag/dark/)
* [Paper](http://subtlepatterns.com/tag/paper/)
* [Stripes](http://subtlepatterns.com/tag/stripes/)
* [Wall](http://subtlepatterns.com/tag/wall/)
* [Fabric](http://subtlepatterns.com/tag/fabric/)
* [Noise](http://subtlepatterns.com/tag/noise/)
* [Diamond](http://subtlepatterns.com/tag/diamond/)
* [Grid](http://subtlepatterns.com/tag/grid/)
* [Carbon](http://subtlepatterns.com/tag/carbon/)

En el momento de escribir este artículo hay 400+ texturas con diferentes patrones para temas claros, oscuros, ... Como tenemos muchas podemos usar varias y hacer que se cargue una diferente de forma aleatoria cada vez que se visualiza una página variando un poco el estilo de la página cada vez que se carga. En el momento de escribir este artículo es lo que hago en Blog Bitix con el siguiente código JavaScript, puedes probar a recargar la página y verás que se carga otra textura de fondo.

{{< code file="app-theme.js" language="JavaScript" options="" >}}

Otra página que podemos para obtener una textura en este caso con ruido es [Noise Texture Generator](http://www.noisetexturegenerator.com/). Indicamos unos cuantos parámetros y podemos obtener la textura generada.

Si lo que queremos son fotos de buena calidad en la página en [Unsplash](https://unsplash.com/) se publican 10 fotos cada 10 días que también podemos usar libremente, deberemos tener en cuenta que como son fotos de alta calidad y en formato jpg ocupan bastante más y si las usamos en una web deberemos reducir su tamaño para que la carga de la página no se ralentice demasiado en conexiones lentas o consuma demasiados datos, también podemos usarlas como fondo de pantalla de nuestro escritorio.

Una buena textura o imagen pueden darle a una página un aspecto mucho más atractivo y si además hacemos que se use una diferente cada cierto tiempo o de forma aleatoria hacemos que la página sea algo diferente cada vez que se visualiza.

{{< reference >}}
* [Subtle Patterns](http://subtlepatterns.com/)
* [Noise Texture Generator](http://www.noisetexturegenerator.com/)
* [Unsplash](https://unsplash.com/)
{{< /reference >}}

{{% /post %}}
