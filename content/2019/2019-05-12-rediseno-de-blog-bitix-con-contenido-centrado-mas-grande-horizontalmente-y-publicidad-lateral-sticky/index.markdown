---
pid: 404
type: "post"
title: "Rediseño de Blog Bitix con contenido centrado, más grande horizontalmente y publicidad lateral sticky"
url: "/2019/05/rediseno-de-blog-bitix-con-contenido-centrado-mas-grande-horizontalmente-y-publicidad-lateral-sticky/"
date: 2019-05-12T14:00:00+02:00
updated: 2019-05-13T20:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:hugo.svg"
tags: ["blog", "planeta-codigo"]
summary: "He cambiado ligeramente el diseño del blog con la intención de mejorar la experiencia de usuario haciendo que el contenido quede centrado en la pantalla en vez de estar desplazado un poco a la izquierda por un panel lateral. Pero más espacio horizontal para el contenido podría afectar negativamente al rendmiento de los _banners_ de publicidad laterales si tenía que quitarlos con lo que he tenido que buscar una solución para ambos requerimientos. También he experimentado con la disposición de la publicidad, incluido un _billboard_ y publicidad lateral _sticky_ para que permanezca más tiempo visible y quizá mejorar su rendmiento."
---

{{% post %}}

{{< logotype image1="hugo.svg" title1="Hugo" width1="200" >}}

En el último [diseño significativo que hice en el 2015][blogbitix-80] cambié a un tema más claro, la posición de varios _banners_ de publicidad además de quitar algunas secciones, otros cambios de menor importancia han sido quitar el justificado del texto o la posición del título en la cabecera, además de generar de forma estática el contenido del blog con [Hugo][hugo] en vez de [Octopress][octopress].

Hacía tiempo que como mejora para el diseño del blog quería que el contenido de los artículos estuviese centrado en la pantalla y tuviese más espacio horizontal, ambas cosas porque considero que mejoraría un poco la experiencia de lectura de los usuarios. Un panel a la derecha que ocupaba cierto espacio hacía que el contenido del artículo no estuviese centrado y quedase escorado un poco hacia la izquierda, además en ciertos artículos donde incluyo código por el espacio ocupaban requería de una barra de desplazamiento horizontal para ver la parte derecha de los listados.

Este deseo me obligaba a quitar el panel lateral donde tenía un _banner_ de publicidad fijo estilo _large-skycraper_ de 300px de ancho por 600px de alto junto a otro debajo _large-rectangle_ de 336px por 280px, una imagen con un enlace de [Yo apoyo al software libre, tu también][blogbitix-117] con los artículos de donaciones que he hecho y un enlace al [Archivo y hemeroteca][blogbitix-archive]. Pero perder esos _banners_ de publicidad para dejar más espacio al contenido posiblemente afectaría al rendimiento de los anuncios.

Querer que el contenido estuviese centrado y ocupase más espacio horizontal y querer publicidad lateral competían entre sí así que tenía que buscar una solución que cumpliese ambos.

{{< image
    gallery="true"
    image1="image:diseno-blogbitix-antes.png" optionsthumb1="300x200" title1="Diseño de Blog Bitix antes de hacer cambios"
    caption="Diseño de Blog Bitix antes de hacer cambios" >}}

Hacer que el contenido estuviese centrado y ocupase más espacio horizontal obligaba poner la publicidad lateral más a la derecha, fuera del espacio del contenido central. Como mejora para esa publicidad lateral también quería que permaneciese visible aún haciendo desplazamiento vertical, ya que antes la publicidad siempre permanecía en la misma posición al inicio del artículo y se dejaba de ver en la parte inferior del artículo posiblemente quedando desaprovechada alguna oportunidad. Para hacer que la publicidad se desplace verticalmente he usado el [posicionamiento _sticky_](https://developer.mozilla.org/en-US/docs/Web/CSS/position) que ya soportan los navegadores. Con los primeros cambios el diseño queda como deseaba.

{{< image
    gallery="true"
    image1="image:diseno-blogbitix-despues-1.png" optionsthumb1="300x200" title1="Diseño de Blog Bitix después de hacer algunos cambios"
    caption="Primer diseño de Blog Bitix después de hacer algunos cambios" >}}

Sin embargo, hacer que el contenido ocupe todo el espacio horizontal de lo que tenía anteriormente y poner la publicidad más a la derecha requiere que los usuarios tengan una pantalla con suficientemente resolución para que quepa todo. Yo [tengo una pantalla de resolución 2560x1440][blogbitix-356] y lo veía todo bien pero [Google Analytics][google-analytics] me indicaba que un porcentaje importante del los usuarios, un 32%, tienen una resolución habitual en los portátiles de 1366x768 píxeles. Con esa resolución los 1140 píxeles requeridos para el contenido más los 300 del _banner_ horizontal en la parte derecha no entraba. También agravado si para algunas páginas deseaba en la parte lateral izquierda otro panel _sticky_ de publicidad.

Mantener la publicidad lateral _sticky_ hace que no entre un _skycraper_ y un _large-rectangle_ verticalmente en una resolución de 768px de alto de modo que he dejado solo un espacio para publicidad. Como idea para el futuro quizá haga que al llegar a cierto desplazamiento vertical se cambier el espacio de publicidad por otro.

{{< image
    gallery="true"
    image1="image:resolucion-usuarios.png" optionsthumb1="300x200" title1="Resolución de pantalla de los usuarios"
    caption="Resolución de pantalla de los usuarios" >}}

Ocupando 1140 píxeles el contenido poco espacio queda en los laterales en una resolución de 1366 de ancho. La solución que he aplicado para poder poner publicidad en ambos laterales es reducir un poco el ancho para el contenido central, a 1080px, y que la publicidad lateral se adapte al espacio que queda, no entran _banners_ de 300px en los laterales pero si dos _skycraper_ de 120px de ancho al menos, con la que en buena medida la experiencia de usuario se mantiene igual que en resoluciones mayores.

La página es ahora un poco menos ancha que antes 1080px frente a 1140px pero el contenido ocupa más espacio horizontal, 1080px frente a unos 840px. Haciendo que la publicidad lateral se adapte al espacio restante según la resolución que quede me ha permitido cumplir los dos objetivos de hacer que el contenido quede centrado y con más espacio horizontal sin perder la publicidad lateral y haciendo que esta permanezca visible en la pantalla aún con desplazamiento vertical y en ambos laterales en algunas páginas.

En resoluciones menores de 1366 he optado por quitar completamente la publicidad lateral ya que aún aplicando un diseño adaptativo en cualquier caso no aparecería en los laterales porque físicamente no hay espacio suficiente.

Así queda en las resoluciones habituales de 2560 píxeles, 1920, 1600, 1440, 1366 y 1200.

{{< image
    gallery="true"
    image1="image:diseno-blogbitix-despues-2560.png" optionsthumb1="300x200" title1="Diseño después con resolución 2560"
    image2="image:diseno-blogbitix-despues-1920.png" optionsthumb2="300x200" title2="Diseño después con resolución 1920"
    image3="image:diseno-blogbitix-despues-1600.png" optionsthumb3="300x200" title3="Diseño después con resolución 1600" >}}
{{< image
    gallery="true"
    image1="image:diseno-blogbitix-despues-1440.png" optionsthumb1="300x200" title1="Diseño después con resolución 1440"
    image2="image:diseno-blogbitix-despues-1366.png" optionsthumb2="300x200" title2="Diseño después con resolución 1366"
    image3="image:diseno-blogbitix-despues-1200.png" optionsthumb3="300x200" title3="Diseño después con resolución 1200"
    caption="Diseño después de los cambios a diferentes resoluciones (2560, 1920, 1600, 1440, 1366 y 1200)" >}}

Padría hacer algún experimento o test _a/b_ de que diseño resulta mejor si el anterior o el contenido más ancho y medirlo por el porcentaje de rebote, tiempo medio de permanencia en la página o retorno de usuarios pero dudo que esas métricas fuesen suficientemente buenas como para determinar que un diseño sea mejor que otro, es dedicar un tiempo y esfuerzo a medir algo que considero claramente es mejor. En lo que si podría hacer algún experimento es medir que disposición de anuncios, en ubicación y tamaño da mejor resultado pero prefiero dedicar el tiempo a escribir artículos, no creo que los cambios que he hecho en los anuncios impacten muy negativamente o quiza se compense con la posición _sticky_ de los _banners_ laterales.

También he introducirdo un _banner_ _billboard_ en la cabecera de la página a ver que tal resultado da, el _leaderboard_ del inicio de los artículos tenía buen rendimiento aún siendo bastante pequeño, lo he mantenido en los artículos que incluyo un resumen. En los que no tienen un resumen lo he sustituido por el _billboard_ ya que mantener ambos me resutlaba un exceso de publicidad. Dentro de unos meses compararé con los anteriores o del año pasado si los cambios que he hecho dan buen resultado.

{{< reference >}}
* [Hola nuevo mundo][blogbitix-0]
* [Nuevo diseño en Blog Bitix][blogbitix-80]
{{< /reference >}}

{{% /post %}}
