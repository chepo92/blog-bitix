---
pid: 0
type: "post"
title: "¡Hola nuevo mundo!"
url: "/2013/12/hola-nuevo-mundo/"
date: 2013-12-02T13:00:00+01:00
updated: 2015-05-28T20:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:octopress.png"
tags: ["blog", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="octopress.png" title="Octopress" width="300" >}}

Esta es la última entrada que publicaré en el [elblogdepicodev.blogspot.com.es][elblogdepicodev] o la primera de [picodotdev.github.io/blog-bitix][blogbitix] dependiendo del blog al que hayas accedido, es decir, seguiré teniendo un blog y escribiendo sobre la temática alrededor de la tecnología como hasta ahora pero a partir de este momento todo el nuevo contenido que publique lo haré en el nuevo blog [picodotdev.github.io/blog-bitix][blogbitix], por lo que si estás suscrito al feed de elblogdepicodev te recomiendo que te suscribas al [feed de bitix][blogbitix-feed] para no perderte ninguna de las nuevas entradas que publique.

## Que está por venir en Bitix
Tengo bastante cotenido por publicar en el futuro más o menos inmediato empezando por continuar con la [serie de artículos sobre criptografía, GPG y DNI electrónico][elblogdepicodev-181], instalar la [Raspberry Pi][raspberrypi] en una memoria USB o disco duro externo para ganar velocidad en vez de en la tarjeta SD como he explicado en la [guía de instalación con Arch Linux para la RPi][elblogdepicodev-108], como usar la Raspberry Pi como «media center» con [GeeXboX][geexbox], explicar como usar [Octopress][octopress] y [GitHub Pages][github-pages] para bloggear y como personalizarlo, programas para «scrapear» webs, mi experiencia y consejos como blogger, el patrón de diseño no operation, usar marcadores con herramientas de logging como [SLF4J](http://www.slf4j.org/), el servidor de aplicaciones [JBoss](http://jbossas.jboss.org/) y [Wildfly](http://www.wildfly.org/) y muchas otras cosas que tengo apuntadas o que se me vayan ocurriendo según publico estas. Desde luego tengo contenido para seguir escribiendo en el nuevo blog que al ritmo de una entrada por semana continuaré publicando.

## ¿Por que este cambio?

Por varias razones, [blogger][blogger] es una plataforma estupenda y a mi durante todo este tiempo me ha servidor perfectamente, es sencillo usarla y en muy poco tiempo se puede tener un blog listo para empezar a escribir en él sin necesidad de muchos conocimientos. Pero tambien tiene varias desventajas, algunas de ellas son:

* Las entradas han de ser escritas con su [editor wysiwyg](https://es.wikipedia.org/wiki/WYSIWYG) y como muchos editores en los que ves es lo que obtienes a veces para dejar las cosas como uno quiere hay que acceder al código html que genera y modificarlo directamente, esto consume tiempo que podría dedicarse a escribir contenido en el blog y no en la publicación. Yo suelo escribir las entradas en un bloc de notas (con gedit) en texto plano, el pasarlo a blogger y formatearlo posteriormente con su editor me consume también bastante tiempo, tanto o más que en escribir una primera versión de la entrada.
* La edición de la entrada con el editor de blogger requiere conexión a internet, si no estamos conectados a internet no podemos editar o nos obliga a usar un bloc de notas y posteriormente cuando dispongamos de conexión a internet transpasarlo al editor y darle formato.
* Las imágenes hay que subirlas usando la propia herramienta de blogger en el momento de publicación de la entrada y conectado a internet. La gestión de las mismas no es muy cómoda, para borrar una imagen una vez subida hay que ir a los álbumes de picasa y cuando se tienen muchas imágenes ya subidas al blog encontrar una en toda la lista se vuelve complicado y lento.
* Ajustar el diseño de blogger no es muy complicado pero para personalizarlo de forma avanzada requiere editar el HTML de la plantilla. Esta edición no es nada amigable para un usuario con pocos conocimientos y para algunas cosas hay que hacerlo, como por ejemplo, [integrar Karmacracy en blogger][elblogdepicodev-99].
* Parece que blogger no es una de las herramientas que Google cuide (al igual que otras varias), las actualizaciones son escasas y con el tiempo van surgiendo herramientas mejores que blogger.
* Los ejemplos de código los añado a cada entrada utilizando [Gist][github-gist] e introducir la referencias adecuadas en cada entrada implica editar e introducir código en la vista html. Además en la vista del editor wysiwyg los gist no se visualizan y si no se tiene cuidado se pueden borrar sin querer con lo que hay que volver a introducirlos. Nuevamente incluir las referencias de los gist me consume tiempo.

## ¿Que herramienta de _blogging_ he elegido?

La plataforma de_blogging_ que he elegido ha sido [Octopress][octopress], una plataforma de_blogging_ que en mi caso solventa casi todos los problemas o molestias  que actualmente me ocasiona blogger descritos en los anteriores puntos. Es una plataforma basada en [Ruby][ruby] y [Jekyll][jekyll], uno de los precursores de una nueva generación de plataforma para blogear y es la plataforma de referencia para escribir en blogs y alojarlos en [GitHub Pages][github-pages]. Aún asi hay alternativas parecidas en otros lenguajes de programación como en Python con [Pelican](http://docs.getpelican.com). La verdad es que usar Pelican en un principio me atraía más porque con ello quizá aprendiese algo de Python pero el hecho de que Jekyll sea la plataforma de referencia de GitHub es un punto a su favor.

En las siguientes entradas ([1](https://arunrocks.com/moving-blogs-to-pelican/)), ([2](http://blog.parkermoore.de/2012/12/18/the-immediate-future-of-jekyll/)) hay algunos comentarios interesantes sobre [Pelican][pelican] y [Jekyll][jekyll]. Jekyll por lo visto ha estado abandonado durante un tiempo y Octopress no ha avanzado durante un buen tiempo aunque el desarrollo parece haberse retomado, desde luego por lo que he leído ([3](http://sasheldon.com/blog/2013/07/07/waiting-for-octopress-2-successor/)) de Octopress es que llevan bastante tiempo con la intención de publicar una nueva versión pero hasta el momento no se ha producido.

Lo principal que buscaba en cualquiera de estas plataformas eran las siguientes ventajas sobre blogger:

* [Markdown][markdown] ([4](https://daringfireball.net/projects/markdown/)): este es un formato en texto plano que puede ser transformado a html con ciertos estilos. Como edito con gedit en texto plano usando markdown me va a evitar tener que transformar el contenido de la entrada a html usando el editor wysiwyg de blogger. Además, el html resultante será mejor gracias por una parte a las plantillas de Octopress y por otro a Markdown.
* Edición fuera de linea o desconectado: como el editor puede ser cualquier editor de texto no hace falta estar conectado a internet para escribir o transformar lo escrito al editor de bogger, para las imágenes tampoco hace falta usar la herramienta de blogger sino que su administración es tan simple como gestionar archivos con el navegador de archivos de nuestro sistema operativo. El sitio puede previsualizarse en local.
* Diseño adaptable («responsive»): blogger posee plantillas que puede visualizarse más o menos correctamente tanto en el navegador como en un dispositivo móvil con una resolución y pantalla más pequeña pero no se adaptan al tamaño de pantalla o ventana del navegador que esté usando el usuario. Por el contrario, las plantillas por defecto de Octopress son adaptables o «responsivas» lo que mejora la experiencia del usuario al leer el blog, los elementos cambian de posición y de tamaño según el tamaño de ventana para el navegador. Esto se consigue mediante las nuevas características de CSS3 con las que se pueden aplicar unos estilos u otros en función del espacio disponible para los elementos en el navegador del usuario.
* [Git][git]: todo el código del blog lo tenemos en local y podemos regenerar su contenido en cualquier momento. Al usar git tenemos un histórico de todos los cambios que hemos hecho a los archivos y podemos recuperar algo si nos es necesario, en blogger solo tenemos la última versión. Si en blogger perdiesemos el acceso a nuestro blog regenerar uno nuevo nos sería complicado, tendríamos que tener una copia de seguridad del contenido y esto no nos serviría para recuperar la plantilla si la hemos personalizado.
* [Gist][github-gist]: el soporte que ofrece Octopress para incluir trozos de código de los gist es más simple, basta indicar el número y el nombre del archivo del gist.
* Cualquier servidor web como hospedaje: si disponemos de una cuenta de GitHub podemos crear un repositorio para servir el contenido del blog con lo que no necesitaremos contratar ningún servidor de hosting pero si disponemos de un servidor web podemos emplearlo para servir el contenido del blog ya que todo es contenido estático.
* Y otras ventajas como la posibilidad de [hacer referencia a otras entradas del blog](https://github.com/mojombo/jekyll/pull/369) sin usar la URL completa.

Octopress también es fácilmente integrable con todos los elementos de terceras partes que buscaba como [Share This][sharethis] y [Karmacracy][karmacracy] para compartir contenido, [Disqus][disqus] para los comentarios, [AdSense](http://www.google.com/adsense) para la publicidad, [Feedburner](http://feedburner.google.com) para los feeds y [Gist][github-gist] para los ejemplos de código.

Así que dicho todo esto solo me queda añadir, suscríbete al [nuevo feed][blogbitix-feed] y... ¡Hola nuevo mundo!

{{% /post %}}
