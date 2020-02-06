---
pid: 460
type: "post"
title: "10º aniversario del blog"
url: "/2020/02/10-aniversario-del-blog/"
date: 2020-02-06T19:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:hugo.png"
tags: ["blog", "planeta-codigo"]
series: ["aniversario"]
---

{{% post %}}

{{< logotype image1="hugo.svg" >}}

    "Bueno, ¡pues ya está!, ya tengo mi propio blog, todavía está en fase de construcción así que según vaya teniendo tiempo iré haciendo pequeños cambios en los gadgets y en su disposición. Por ahora me conformo con tenerlo visible [...].  Pero lo principal, escribir entradas en el blog, es algo que ya puedo realizar. Tratarán sobre temas relacionados con el software libre, incluyendo las dos distribuciones GNU/Linux que en este momento uso más habitualmente que son Ubuntu y Arch Linux, temas de tecnología, quizá temas de programación, experiencias personales sobre los mismos y otras cosas que se me vayan ocurriendo. [...]".

Con el texto anterior empezaba el primer artículo a modo de prestación en [elblogdepicodev][elblogdepicodev-0] en el 2010, este mes de febrero se cumple que hace 10 años creé y empecé a escribir en un blog, durante todo este tiempo habrá habido pocas semanas de las 520 que no he escrito al menos un artículo, es más el total de artículos que he escrito desde entonces ha sido de unos 650 artículos dado que algunas semanas he publicado dos artículos y algunas esporádicamente incluso tres. En total 2,5 millones de páginas vistas, 525K en el último año. Cuando miro [Google Analytics][google-analytics] y veo artículos del año 2017, 2016, 2015, 2014, ... que se siguen visitado, no me da la sensación de que hayan pasado varios años desde que los publique.

Pasados estos 10 años y a pesar del tiempo que requiere escribir y publicar cada artículo aún sigo con ganas de seguir escribiendo y publicando, hay una enorme cantidad de temas interesantes sobre los que escribir, no me he planteado dejarlo, y es que me permite seguir aprendiendo cada semana un poco sobre alguna cosa que me interesa, me gusta compartir con la intención de que a alguien le resulta útil el contenido y quizá en un futuro esto mismo que escribo me resulte útil laboralmente. La temáticas principales siguen siendo [Java][java] y [GNU][gnu]/[Linux][linux] aunque no es un blog solo de Java ni un blog solo de GNU/Linux. Como blog personal en el sentido de individual que es, muy rara vez incluyo información personal, en él ocasionalmente hago desempaquetados de los productos que compro y he probado, algún artículo de opinión o desde hace unos meses que tengo una PS4 escribiré sobre los juegos que voy jugando y completando.

Como comentaba en la [última hemeroteca del año 2019][blogbitix-452] el blog no ha crecido en visitas a pesar de haber escrito unos 80 artículos nuevos, por ello quiero hacer algunos cambios. El primero es planificar mejor el contenido que escribo y publico con el objetivo en parte de atraer más visitas que al mismo tiempo sean interesantes de leer pero también manteniendo que el escribir lo sea para mi. Hasta ahora he escrito de lo que me ha apetecido en cada momento de forma un tanto aleatoria sin ningún plan de publicación incluso para las series de artículos relacionados como [la serie de Docker][blogbitix-serie-docker] o [la serie sobre GraphQL][blogbitix-serie-graphql]. Analizando los artículos más vistos alguno de los más sencillos son los más populares de mi blog como [4 formas de hacer un bucle for en Java][blogbitix-247], me plantearé escribir según se me vayan ocurriendo alguno de estos artículos sencillos, básicos o no sencillos pero esenciales que en algún caso no escribo por ya darlo por sabido. Tampoco quiero dejar de escribir por completo de vez en cuando algún artículo que para mi considero avanzado.

El segundo punto que ya he empezado, es hacer algunas modificaciones en los estilos del blog para mejorar el porcentaje de rebote, que creo es muy alto casi de un 90%, y aumentar el número de páginas vistas por sesión. Para esto tengo pensado modificar las páginas de lista de artículos como en la página de inicio y los artículos relacionados al final de cada artículo. En vez de que sean un simple enlace que sean el título y una imagen que traigan algo más la atención a dos o tres columnas en vez de a una solo para que quepan más en lugar de un artículo en el mismo espacio. Quizá incluiré en algunas páginas un _slider_ que incluya artículos que considero destacables también para mejorar el porcentaje de rebote y para que artículos antiguos sean un poco más visibles. También mejorar la página de error 404 con estas mismas ideas, que aunque no debería llegarse a ella si se realizan algunas visualizaciones, ahora solo muestro un mensaje sin ningún enlace salvo los de la estructura de la página.

Esos son los estilos por los que ha pasado el blog.

{{< image
    gallery="true"
    image1="image:elblogdepicodev-blogger.jpg" optionsthumb1="200x150" title1="El blog de pico.dev con Blogger"
    image2="image:blogbitix-octopress.jpg" optionsthumb2="200x150" title2="Blog Bitix con Octopress"
    image3="image:blogbitix-hugo-2020-02.png" optionsthumb3="200x150" title3="Blog Bitix con Hugo"
    caption="Rediseños por los que he ido realizando en el blog" >}}

Algunas otras modificaciones ya he realizado, una de ellas crear la versión de [páginas AMP][blogbitix-amp] del blog para ver que resultado da. En un principio esta versión está mejor adaptada para los móviles, siendo más rápida, con lo que para Google es posible que la considere mejor, y dado que Google es la mayor fuente de usuarios quizá se note algo. Al final de año mediré con Analytics cual ha sido el resultado. En las primeras semanas algunos usuarios ya están accediendo a la versión AMP.

Otra modificación importante que he realizado ha sido [cargar las imágenes, los comentarios de Disqus e _iframes_ como vídeos de YouTube con _lazy load_][blogbitix-453]. Así estos elementos no se soliciten hasta que realmente sean necesarios al ser visualizados, lo que hace que la página se cargue antes y sea más rápida. Mejora la métrica de PageSpeed y Google en su algoritmo de posicionamiento es posible que las posicione mejor en su página de resultados.

Con algunas nuevas capacidades de Hugo como los _render hooks_ de enlaces e imágenes es posible implementar cierta lógica para algunas cosas interesantes que simplifiquen la generación del contenido. Aún estoy pendiente de que Hugo permita usar el formato de [imágenes WebP](https://github.com/gohugoio/hugo/issues/5924) y [soporte _watermarking_](https://github.com/gohugoio/hugo/issues/4595).

Vamos a ver que ocurre en la década del 2020.

{{% /post %}}
