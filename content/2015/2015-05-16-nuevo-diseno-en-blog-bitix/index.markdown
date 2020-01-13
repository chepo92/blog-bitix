---
pid: 80
type: "post"
title: "Nuevo diseño en Blog Bitix"
url: "/2015/05/nuevo-diseno-en-blog-bitix/"
date: 2015-05-16T12:00:00+02:00
updated: 2015-05-17T13:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:hugo.svg"
tags: ["blog", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="hugo.svg" title1="Hugo" width1="200" >}}

En diciembre de 2013 pasé de utilizar [Blogger][blogger] a usar [Octopress][octopress] creando la bitácora Blog Bitix. Octopress fue una gran mejora a la hora de editar el contenido y gestionar las imágenes o trozos de código con _gist_. Hace relativamente poco que he pasado a utilizar Octopress pero desde hace un tiempo quería personalizar mucho más el diseño de la bitácora. Estaba esperando a ver como avanzaba el desarrollo de la siguiente versión sin embargo va lentamente por mucho que hayan dicho ya en el 15 de enero que [Octopress 3 de está en camino](http://octopress.org/2015/01/15/octopress-3.0-is-coming/), aún en mayo no hay ninguna nueva noticia desde entonces.

Posiblemente usando [Jekyll][jekyll] directamente (Octopress está basado en Jekyll) podría conseguir el nivel de personalización que quería. Sin embargo, revisando otras opciones dí con otra plataforma de generación de sitios estáticos, [Hugo][hugo]. De Hugo me han gustado varias cosas que en Octopress no tenía:

* Ejecutable: Hugo es un único binario, basta descargar este único archivo. Está desarrollado en el lenguaje [go][go] (Jekyll y Octopress en [Ruby][ruby]). No hay dependencias que descargar que «ensucien» el sistema, esto también tiene la ventaja de que la actualización a una nueva versión es sencilla.
* Temas: crear un tema para Hugo es sencillo y hay una [documentación](http://gohugo.io/overview/introduction/) básica pero suficiente.
* Rapidez: el lenguaje go y Hugo alardean de rapidez y mis sensaciones coinciden con ello, la bitácora completa se genera en unos pocos segundos, los cambios en un artículo son casi instantáneos y el servidor web local arranca muy rápido.
* Taxonomía: con Hugo al contenido se le puede aplicar una taxonomía muy versátil que por ejemplo permite crear series de artículos. Con Octopress tenía que modificar cada artículo de la serie para incluir uno nuevo, con Hugo basta que lo defina en el _front matter_ y el resto de artículos de la serie se actualizarán incluyéndolo.

Con Hugo también he tenido que hacer algún _hack_ y es que en los diferentes artículos de la bitácora suelo incluir enlaces a un montón de herramientas, para no estar repetirlos constantemente y en el caso de que uno cambie no tener que modificar los artículos individualmente tengo un archivo de enlaces comunes que incluyo en cada artículo, y en esta inclusión está el _hack_, usando algunas de las funciones que proporciona Hugo. También he tenido que crear un _script_ para subir los cambios al alojamiento que uso con [GitHub Pages][github-pages] cosa que Octopress proporciona de serie, usar [Grunt][grunt] para generar el archivo de estilos css a partir de un archivo [Less][less] o reescribir las urls de los _feeds_ para que sean absolutas.

Entre las cosas de diseño que quería cambiar estaba la cabecera intentando que fuese pequeña verticalmente para que según se cargue la página se vea la mayor parte posible de contenido, con esto he quitado la descripción de la bitácora de la cabecera y la he puesto en el pié de página. En el menú he puesto enlaces a las secciones de las que suelo hablar: [Java][blogbitix-tag-java], [GNU/Linux][blogbitix-tag-gnu-linux], [JavaScript][blogbitix-tag-javascript] y [Apache Tapestry][blogbitix-tag-tapestry]. Los usuarios podrán encontar más fácilmente el contenido de los temas principales que escribo y quizá Google averigüe un poco mejor de que trata la bitácora. Entre otras cosas he cambiado el tema a uno basado en el color blanco, reorganizado los bloques de anuncios de publicidad Adsense, eliminado [Karmacracy][karmacracy] por nulo uso para compartir contenido y dejando solo [Share This][sharethis] para este propósito, he situado los enlaces de sindicación al lado del logotipo para darles más visibilidad, cambiada la visualización de los _thumbnails_ de las imágenes ahora se podrán ver en un tamaño mucho más grande y mejor, la página de inicio ahora solo incluye un resumen de los artículos en vez del artículo completo con lo que espero que esta página se cargue mucho más rápido, un fondo que varía de forma aleatoria en cada carga de página (lo mismo que hago en [Blog Stack][blogstack]), añadidos algunos estilos para poner pies en las imágenes y algunas correcciones y modificaciones más en el pie y en la barra lateral.

{{< image
    gallery="true"
    image1="image:blog-bitix-hugo.jpg" optionsthumb1="300x200" title1="Diseño nuevo"
    image2="image:blog-bitix-octopress.jpg" optionsthumb2="300x200" title2="Diseño anterior"
    caption="Diseño de Blog Bitix ahora con Hugo y antes con Octopress" >}}

Las _urls_ del contenido no han variado, sí algunas del archivo y de las etiquetas pero como tengo bloqueadas estas con el archivo _robots.txt_ Google no me indicará errores 404. Probablemente si me informe de algún 404 en el contenido aunque espero que no muchos, si ocurre los corregiré en los próximos días o cualquier otra cosa de la que vaya dándome cuenta.

El código fuente completo del tema que he creado y del blog realizado con Hugo puedes encontrarlo en el siguiente [repositorio de GitHub](https://github.com/picodotdev/blog-bitix/tree/master).

¿Que te parece el nuevo diseño?

{{< reference >}}
* [Hola nuevo mundo][blogbitix-0]
* [Rediseño de Blog Bitix con contenido centrado, más grande horizontalmente y publicidad lateral sticky][blogbitix-404]
{{< /reference >}}

{{% /post %}}
