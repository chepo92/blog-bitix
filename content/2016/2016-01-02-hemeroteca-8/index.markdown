---
pid: 118
type: "post"
title: "Hemeroteca #8"
url: "/2016/01/hemeroteca-8/"
aliases: ["/2016/01/hemeroteca-number-8/"]
date: 2016-01-02T13:00:00+01:00
updated: 2016-01-04T22:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:hugo.svg"
tags: ["blog", "java", "planeta-codigo", "programacion", "software", "software-libre", "tapestry", "gnu-linux"]
series: ["hemeroteca"]
library: "true"
summary: "Seis meses más de artículos la mayoría sobre programación en Java tratando algunas de las nuevas tendencias de programación con las posibilidades de la plataforma de la JVM. Unos pocos artículos más continuando la serie sobre Docker y uno de opinión sobre las licencias de Microsoft."
---

{{% post %}}

El 2015 pasó, a mi muy rápido. En cuanto a la bitácora toca recapitular cuáles han sido los artículos que he escrito, de que temas principales he hablado, un poco cómo han evolucionado las visitas y que tengo preparado para publicar durante los siguientes meses ya de 2016.

Muchos de los [artículos que he escrito durante el año 2015][blogbitix-section-2015] han estado relacionados con la programación en la plataforma Java, en los que destacaría prácticamente todos empezando por los relacionados con [Spring Boot][spring-boot], [Spring Cloud Config][spring-cloud-config] y [Spring Boot Actuator][spring-boot-actuator] que forman parte del actual de la tendencia a la hora de desarrollar aplicaciones en Java pero también otros cuantos relacionados con [jOOQ][jooq] que ya es una alternativa a [Hibernate][hibernate] y su uso probablemente se extienda y aumente, también otro artículo sobre [Gradle][gradle] que ya es la herramienta de automatización de construcción ampliamente usada.

* [Aplicación Java autocontenida con Spring Boot][blogbitix-103]
* [Múltiples esquemas o bases de datos con jOOQ y Spring en Java][blogbitix-106]
* [Obtener datos de múltiples tablas con jOOQ][blogbitix-109]
* [Validar objetos con Spring Validation, ejemplo registros de jOOQ][blogbitix-110]
* [Configuración de una aplicación en diferentes entornos con Spring Cloud Config][blogbitix-112]
* [Información y métricas de la aplicación con Spring Boot Actuator][blogbitix-113]
* [Ejemplo de multiproyecto con Gradle][blogbitix-96]

Un par de artículos comentando la nueva forma de construir aplicaciones de escritorio tradicionales en Java con [JavaFX][javafx]. También algunos artículos más sobre patrones de diseño con ejemplos en código bastante ilustrativos de sus conceptos y posibles usos. O Java para tareas de _scripting_ con la misma facilidad de un lenguaje interpretado o dinámico pero con las ventajas de un lenguaje compilado.

* [Introducción a JavaFX, aplicaciones de escritorio en Java][blogbitix-100]
* [JavaFX Scene Builder, editor para crear archivos FXML][blogbitix-102]
* [Java para tareas de «scripting»][blogbitix-108]
* [Ejemplo del patrón de diseño Builder][blogbitix-99]
* [Cómo crear clases factoría sin usar if-else][blogbitix-104]
* [El patrón de diseño Observer y una forma de implementarlo en Java][blogbitix-105]

Otros artículos sobre Java de varios temas independientes sobre herramientas como [wro4j][wro4j], cómo trabajar con importes, ratios y divisas en las aplicaciones Java que lo necesiten o una forma incorporada en el propio JDK para hacer las aplicaciones extensibles.

* [Implementación de máquina de estados finita (FSM) con Java 8][blogbitix-93]
* [Aplicación Java extensible con la clase ServiceLoader][blogbitix-94]
* [Ejemplo práctico de ServiceLoader con ServiceProvider de Java Money][blogbitix-95]
* [Cómo trabajar con importes, ratios y divisas en Java][blogbitix-90]
* [Generar recursos estáticos con wro4j][blogbitix-98]

Un par de artículos de opinión, uno con motivo del lanzamiento de [Windows][windows] 10 que se produjo en julio del 2015 y otro comentando las similitudes que tienen un par de librerías [JavaScript][javascript] ([React][react] y [Polymer][polymer]) de las que mucha gente está hablando con el _framework_ [Apache Tapestry][tapestry] para desarrollo de aplicaciones y páginas web en Java.

* [A Microsoft no le importa que uses Windows u Office sin licencia][blogbitix-92]
* [Similitudes entre React y Polymer con Apache Tapestry][blogbitix-101]
* [Características de los lenguajes de programación][blogbitix-107]

Y otro artículo un poco fuera de tema sobre una compra que hice por internet comentando mi experiencia pero en la que comento algunos consejos para los vendedores y para los compradores.

* [Comprando por internet, unos estores en CortinaDecor][blogbitix-111]

Lo más cercano que escrito de [GNU][gnu]/[Linux][linux] ha sido otra serie de artículos sobre [Docker][docker] continuación de otros anteriores.

* [Aplicaciones multicontenedor con Docker Compose][blogbitix-87]
* [Crear y usar un repositorio en Docker Hub][blogbitix-88]
* [Usar docker con Docker Machine en Linux, Windows o Mac][blogbitix-89]
* [Cambiar la ruta raíz del entorno de Docker][blogbitix-91]

Los últimos artículos del año, no por ello menos interesantes. Finalmente se publicó la versión 5.4 de Apache Tapestry que ya era usable desde su estado beta con numerosas mejoras en la parte cliente de las aplicaciones. También cumplí mi propósito de hacer una donación a algún proyecto de software libre cuando recibiese la trasferencia por la publicidad AdSense, fue a la [FSFE][fsfe].

* [Monitorizar estado de sitios web con Uptime Robot][blogbitix-114]
* [Cómo buscar los enlaces rotos de un sitio web][blogbitix-115]
* [Publicado Apache Tapestry 5.4][blogbitix-116]
* [Yo apoyo al software libre, tú también][blogbitix-117]

En otro orden de cosas he seguido haciendo algunos cambios en Blog Bitix como que pueda ser accedido por el protocolo seguro <abbr title="Hypertext Transfer Protocol Secure">HTTPS</abbr> sin que el navegador informe de ningún tipo de advertencia de seguridad, este blog se genera con el generador estático [Hugo][hugo] y está alojado en [GitHub Pages][github-pages] de modo que solo hay ficheros estáticos HTML, CSS y JavaScript pero que permite mayor privacidad y más seguridad. Si yo en una bitácora como esta que solo es contenido estático y algo de JavaScript me preocupo por la seguridad y privacidad de los usuarios me resulta sorprendente que páginas de comercio electrónico que recopilan información personal y datos de tarjetas de crédito o cuantas bancarias mucho más susceptibles de ser atacadas no lo hagan de forma completa y no solo en las áreas de la cuenta del usuario y la página de compra, más ahora que Google lo tiene en cuenta para el [<abbr title="Search Engine Optimization">SEO</abbr>][seo].

También he empezado a incluir en los artículos vídeos de texto con [Asciinema][asciinema] que creo hacen que los ejemplos sean mucho más ilustrativos mostrando la salida real de los comandos de los cuales además se puede copiar y pegar texto.

* [Grabar y compartir vídeo de la terminal con Asciinema][blogbitix-97]

Durante este segundo semestre de 2015 he publicado varios artículos entre semana con lo que al final la media ha sido algo mayor de uno por semana. Para el 2016 ya tengo escritos una buena cantidad de artículos suficientes para seguir publicando al ritmo de un artículo por semana durante unos cuantos meses, por supuesto sobre Java pero alguno también sobre GNU/Linux. Uno de ellos espero que sea el de la conferencia [BilboStack][bilbostack] 2016 que se celebrará a finales de enero para la que escribiré un [artículo similar al que hice el año pasado][blogbitix-62] resumiendo las charlas a las que asista. También estoy en proceso de realizar una nueva actualización del [libro PlugIn Tapestry][blogbitix-12] en el que incorporaré mucho del contenido que he escrito desde su última publicación.

El blog ha seguido creciendo un poco en cuanto a visitas a base de un esfuerzo tremendo tratando de escribir y publicar artículos con cierta calidad, los ingresos por publicidad AdSense siguen siendo prácticamente los mismos, entre 6 y 11€ al mes, como el alojamiento y el dominio me es gratuito es suficiente para hacer alguna [donación a un proyecto relacionado con el software libre][blogbitix-117] por lo que tú visitando este blog en cierta forma también podrás sentirte contribuidor del software libre ya uses productos [Microsoft][microsoft] o [Apple][apple]. Una de las cosas que dicen para aumentar visitas es casi más importante la cantidad que la calidad pero no puedo dedicar más tiempo a escribir así que opto por que lo que escriba no esté ya en varios otros cientos de sitios para alguien con el mismo interés le resulte aprovechable, además trato de que los artículos incluyan un ejemplo funcional con su código fuente completo que se pueda probar de manera simple descargándolo.

{{< image
    gallery="true"
    image1="image:analytics-2015.png" optionsthumb1="300x200" title1="Analytics 2015 de Blog Bitix"
    caption="Analytics 2015 de Blog Bitix" >}}
{{< image
    gallery="true"
    image1="image:gadsense-2015.png" optionsthumb1="300x200" title1="AdSense 2015 de Blog Bitix"
    caption="AdSense 2015 de Blog Bitix" >}}

Ya solo me queda decir... ¡gracias por leer, compartir y comentar esta bitácora!, no recibo muchos comentarios pero algunos como [este](https://twitter.com/josetesan/status/669434170221928449) me anima a seguir escribiendo y compartiendo, ¡que os vaya bien el 2016!.

{{< image
    gallery="true"
    image1="image:christmas-tux-2015.jpg" optionsthumb1="300x200" title1="Christmas Tux 2016"
    caption="¡Buen 2016!" source="klowner.com" >}}

{{% /post %}}
