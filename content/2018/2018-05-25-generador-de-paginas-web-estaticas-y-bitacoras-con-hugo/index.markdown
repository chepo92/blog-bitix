---
pid: 323
type: "post"
title: "Generador de páginas web estáticas y bitácoras Hugo"
url: "/2018/05/generador-de-paginas-web-estaticas-y-bitacoras-con-hugo/"
date: 2018-05-25T18:00:00+02:00
updated: 2018-06-05T18:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:hugo.svg"
tags: ["blog", "planeta-codigo"]
summary: "Hugo es un de las mejores herramientas en la categoría de generadores de páginas web estáticas, también puede utilizarse para generar bitácoras. Su fácil instalación, rapidez, personalización o su gran sistema de plantillas y taxonomía son varias de sus características destacadas. Con Hugo conseguí resolver varias de las necesidades que tenía para Blog Bitix, la gestión de enlaces internos y externos, personalización de diseño y procesado de imágenes."
---

{{% post %}}

{{< logotype image1="hugo.svg" >}}

En diciembre del 2013 pase de usar [Blogger][blogger] a usar [Ocotpress][octopress] junto con [GitHub Pages][github-pages] para el hospedaje. En mayo del 2015 modifiqué mi bitácora para usar en vez de [Octopress][octopress] la herramienta equivalente [Hugo][hugo], ambas sirven para generar sitios web estáticos formados únicamente por HTML, CSS, imágenes, documentos y JavaScript. Tanto Octopress, [Jekyll][jekyll] como Hugo y otros como [Pelican][pelican] son similares, a partir de archivos normalmente en formato _markdown_ genera el HTML de la página web o bitácora junto con los recursos estáticos que necesite. Cada una de estas opciones son adecuadas para páginas de presencia en internet y bitácoras.

Varían en el lenguaje de programación que emplean, Octopress usa [Ruby][ruby] y Hugo usa [Go][go], y el formato de las plantillas que utilizan para personalizar la generación del contenido. La [migración desde Blogger a Octopress][blogbitix-16] que hice en 2013 me supuso una gran mejora al editar los artículos. La edición de los artículos se puede hacer con cualquier editor de textos en la computadora local en vez de usar una editor en un navegador mucho más limitado y lento, además de editar el texto la gestión de las imágenes es mucho más simple al tratarse como simples archivos que basta colocar entre el código fuente de la bitácora que usará el generador para producir la página web o bitácora y no menos importante aprovechar la corrección ortográfica de las palabras que en mi caso hago con [vim][vim], no me imagino la gran cantidad de errores que tendré en los artículos de Blogger y no me habré dado cuenta a pesar de siempre leer un par de veces cada artículo antes de pubicarlo. El [cambio de Octopress a Hugo][blogbitix-80] más tarde me permitió otros aspectos importantes a la hora de editar los artículos.

La web está formada por un conjunto de páginas enlazadas, la gestión de los enlaces es un aspecto muy importante en una página web y en una bitácora es igual. Si una página a la que hacíamos referencia cambia de dirección todos los enlaces que tuviésemos quedarán rotos. Hay varias posibilidades para [buscar enlaces rotos][blogbitix-115], encontrados y sustituirlos usando Blogger es complicado ya que hay que usar el lento y poco cómodo editor web, usando Octopress era más sencillo haciendo una búsqueda y reemplazo en los archivos de texto en formato _markdown_ con un buen editor de textos pero con Hugo me resulta mucho más sencillo por la forma en que he organizado el código fuente. Los enlaces comunes que utilizo en múltiples artículos los incluyo en un [_shortcode_](https://github.com/picodotdev/blog-bitix/blob/master/layouts/partials/links.html) y otro para los [propios artículos del blog](https://github.com/picodotdev/blog-bitix/blob/master/layouts/partials/links-posts.html) y luego en la página o artículo hago referencia a ellos usando un identificador de forma que si un día cambia una página de dirección o una URL de algún artículo solo he de hacer la sustitución en un único lugar en esos _shortcodes_. Con [Disqus][disqus] externalizo los comentarios.

* [Gestionar los enlaces de una bitácora con Hugo][blogbitix-182]

La gestión de las imágenes es otro aspecto que si no se organiza se acaba con un directorio sin ninguna organización donde es complicado saber que imágenes utiliza cada artículo. Los principales directorios que utilizo son dos uno para [imágenes de logotipos](https://github.com/picodotdev/blog-bitix/tree/master/static/assets/images/logotipos) y otro para las [imágenes de cada artículo](https://github.com/picodotdev/blog-bitix/tree/master/static/assets/images/posts) con una subcarpeta por año y otra con el identificador del artículo. Hasta hace poco usaba [ImageMagick][imagemagick] para producir las previsulizaciones de las imágenes y una reducción de las imágenes originales. Recientemente en Hugo se ha incorporado la funcionalidad de aplicar procesado a las imágenes con lo que es posible generar estas previsualizaciones y reducciones sin necesidad de perder las [imágenes originales](https://github.com/picodotdev/blog-bitix/tree/master/content/post/2018/2018-05-04-los-plantones-de-roble/images), esto tiene la ventaja de que si un tiempo después hay que hacer algún cambio a un imagen se puede utilizar la original. También podido simplificar la forma de organizar las imágenes, ahora al lado del artículo _markdown_ en que se usan.

Tanto la gestión de enlaces como de los recursos estáticos es algo que no podía hacer con Blogger y fue uno de los principales motivos para migrar a un generador estático de páginas web. Como todo son archivos estáticos lo único que hace falta es un servidor web, hay varias opciones de hospedaje bastante baratas al no necesitar un lenguaje de programación en el servidor como PHP ni una base de datos relacional. Yo utilizo GitHub Pages que es incluso sin coste. Usando algunas de las [varias formas para monetizar un blog][blogbitix-192] escribiendo contenido interesante y de forma regular los ingresos por este medio cubren el coste del hospedaje y del dominio.

Con Hugo personalicé completamente el diseño y estilos de de la bitácora pero [Hugo dispone de múltiples temas](https://themes.gohugo.io/). En la página de [documentación de Hugo](https://gohugo.io/documentation/) está el formato a usar en las plantillas, [_shortcodes_](https://gohugo.io/content-management/shortcodes/) y [_partials_](https://gohugo.io/templates/partials/) así como las [variables disponibles](https://gohugo.io/variables/) y [funciones](https://gohugo.io/functions/) disponibles en las plantillas. Con la [guía de inicio rápido](https://gohugo.io/getting-started/quick-start/) es posible tener una página web en unos pocos minutos y la [estructura básica de directorios](https://gohugo.io/getting-started/directory-structure/).

Una de las características destacadas de Hugo es que es muy rápido, en unos pocos segundos es capaz de generar la página web completa a partir del código fuente de los archivos. Ya he escrito más de 300 artículos y tarda menos de 3 segundos en generar este blog. Otra que destaco es que solo se necesita un único binario con lo que se evita el infierno de dependencias que en alguna ocasión con Octopress me causó problemas. Usando el servidor web incorporado que posee es posible previsualizar en local el contenido de la página antes de publicarla.

{{< reference >}}
* [¡Hola nuevo mundo!][blogbitix-0]
* [Nuevo diseño en Blog Bitix][blogbitix-80]
* [Gestionar los enlaces de una bitácora con Hugo][blogbitix-182]
{{< /reference >}}

{{% /post %}}
