---
pid: 330
type: "post"
title: "Hemeroteca #13"
url: "/2018/06/hemeroteca-13/"
date: 2018-06-30T10:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:hugo.svg"
tags: ["blog", "java", "planeta-codigo", "programacion", "software", "software-libre", "tapestry", "gnu-linux"]
series: ["hemeroteca"]
library: "true"
---

{{% post %}}

El primer semestre del 2018 ya ha pasado. Estos primeros meses he publicado 38 artículos sobre la temática habitual de esta bitácora como programación, software libre, [GNU][gnu]/[Linux][linux] algunos de opinión relacionados con la tecnología. Las visitas e ingresos de AdSense no han crecido tanto como en ocasiones anteriores pero se han mantenido a un nivel similar sobre los 30K páginas vistas y los 30€ de ingresos en AdSense que no están nada mal.

Dado que desde hace unos cuantos meses no tengo ordenador propio y solo dispongo de el del trabajo normalmente solo los fines de semana no he podido investigar, probar tantas cosas que me gustaría y he publicado más artículos de opinión que de software libre y GNU/Linux. Como comento en algunos de los artículos publicados más o menos ya tengo decidido que mi siguiente equipo será un [Intel NUC][intel-nuc] pero estoy esperando a que salgan esta segunda mitad los Bean Canyon para que el salto que experimente sea notable tanto en el microprocesador con un [Intel Core i5 8250U](https://ark.intel.com/es-es/products/124967/Intel-Core-i5-8250U-Processor-6M-Cache-up-to-3_40-GHz) o [i5-8259U][intel-i5-8259U], 4 núcleos y 8 hilos, 6 MiB de caché y 32 GiB de memoria sobre lo que tenía antes un [Intel Core i5 3210M][intel-i5-3210M], 3 MiB de caché, 2 núcleos, 4 hilos y 8 GiB de memoria. Con tal cantidad de memoria podré hacer algunas pruebas con contenedores y virtualización que con solo 8 GiB de memoria ya incluso se me quedaba escaso. Cuando adquiera este nuevo equipo publicaré varios artículos con el desempaquetado o _unboxing_ y el análisis de varios de esos componentes.

{{< image
    gallery="true"
    image1="image:analytics.png" optionsthumb1="650x450" title1="Evolución Analytics" >}}
{{< image
    gallery="true"
    image1="image:adsense.png" optionsthumb1="650x450" title1="Evolución AdSense"
    caption="Evolución Analytics y AdSense" >}}

Entre los artículos sobre programación han estado los habituales sobre Java, destacando las novedades de Java 10, un par sobre [Apache Tapestry][tapestry]. Como resolver varios de los problemas clásicos de sincronización, programación concurrente en Java, [Webjars][webjars], ...

* [Integración y entrega continua con GitLab sobre Docker][blogbitix-294]
* [Gestión de peticiones, wiki y pages con GitLab][blogbitix-295]
* [Análisis estático de código con PMD y un ejemplo][blogbitix-297]
* [Las 6+2 formas normales de las bases de datos relacionales][blogbitix-299]
* [Referencias a grupos de captura en expresiones regulares y reemplazos][blogbitix-300]
* [El problema de concurrencia de la cena de los filósofos resuelto con Java][blogbitix-302]
* [El problema de concurrencia del agente y los fumadores resuelto en Java][blogbitix-303]
* [Novedades de Java 10][blogbitix-306]
* [La herramienta jlink para generar runtimes de Java incluyendo exclusivamente los módulos que usa una aplicación][blogbitix-307]
* [Qué es y cómo funciona el type erasure en Java][blogbitix-308]
* [Introducción a NIO.2, el sistema de entrada/salida de Java][blogbitix-310]
* [La controversia sobre las excepciones checked y unchecked][blogbitix-313]
* [La sentencia try-with-resources de Java][blogbitix-314]
* [La clase Optional de Java para evitar la excepción NullPointerException][blogbitix-315]
* [Plantillas con etiquetas no balanceadas en Apache Tapestry][blogbitix-317]
* [Gestión de errores con Either o Try en vez de con código de error, null, Optional, checked exception o unchecked exception][blogbitix-319]
* [Depurar código JavaScript con la instrucción debugger][blogbitix-321]
* [Recuperar datos eficientemente en GraphQL usando batching][blogbitix-322]
* [Empaquetar una aplicación Java en un archivo jar ejecutable incluyendo sus dependencias][blogbitix-324]
* [Dependencias sobre librerías de lado de cliente con Webjars en una aplicación web Java][blogbitix-325]
* [Actualizar las versiones de las librerías JavaScript built-in de Apache Tapestry][blogbitix-326]
* [Soporte para lanzar eventos desde JavaScript con Ajax en un componente de Apache Tapestry][blogbitix-327]
* [Java Magazine, la publicación gratuita sobre Java][blogbitix-328]

En la categoría de software libre o GNU/Linux como tener una consola de juegos retro con una Raspberry Pi, varias computadoras similares a la Raspberry Pi.

* [Consola de juegos retro con Lakka y una Raspberry Pi][blogbitix-301]
* [7+ computadoras baratas del tamaño de una tarjeta de crédito basadas en GNU/Linux y ARM][blogbitix-304]
* [Prompt de la terminal personalizado en carpetas de git con el intérprete Bash][blogbitix-312]
* [Personalizar el prompt del sistema del intérprete de comandos Bash][blogbitix-316]
* [Generador de páginas web estáticas y bitácoras Hugo][blogbitix-323]

En la categoría de opinión están el importante problema de seguridad que se hacía público a principio de año y que afectaba a todos los microprocesadores de Intel fabricados desde hace una década con _Meltdown_. [Intel][intel], [AMD][amd] y [ARM][arm] afectados otras variantes denominadas _Spectre_. Como el hardware estos microprocesadores es defectuoso ni solucionable por microcódigo solo se ha podido mitigar mediante parches de software en los nucleos de los sistemas operativos y compiladores que en cualquier caso pueden suponer una merma en el rendimiento. Aún no se conoce un software capaz de aprovechar estos fallos de seguridad pero no quiere decir que no se descubran. Afecta aún más si cabe a entornos de computación en la nube al compartirse los recursos de computación, en estos entornos es especialmente grabe por seguridad ya que el fallo permite leer la memoria del _kernel_, aplicaciones, contenedores, datos, claves, ...

También publiqué un artículo el ordenador con las opciones que barajaba, una opinión sobre el [Slimbook AIO Curve][slimbook-curve] y cómo internet está transformando el sector del comercio y distribución o mi opinión de que me quedo GNU/Linux sobre un Mac. También los artículos con las opciones que estoy tomando para comprar equipo ya no a mucho tiempo tardar.

* [Artículo #5 de Yo apoyo al software libre][blogbitix-292]
* [Explicación del fallo de seguridad Meltdown y Spectre en los microprocesadores Intel][blogbitix-293]
* [Conferencia BilboStack 2018][blogbitix-296]
* [8º aniversario del blog][blogbitix-298]
* [Tú con tu Mac, yo con mi GNU/Linux][blogbitix-305]
* [Intentando elegir portátil, NUC o mini ITX para comprar nuevo equipo][blogbitix-309]
* [Sobre el Slimbook AIO Curve][blogbitix-311]
* [Sobre el comercio electrónico, El Corte Inglés y Amazon][blogbitix-320]
* [Decidido a comprar un Intel NUC entre las opciones que he evaluado][blogbitix-329]

Para finalizar otro artículo fuera de tema del habitual de este blog con los plantones de roble que tengo, como han crecido y como están desde que los planté el año pasado. Aunque aún no lo he publicado algunos están mostrando síntomas de fallecimiento y lo que es peor no tengo claro por que si por la cantidad de agua, excesiva luz directa del sol, humedad, calor, ...

* [Los plantones de roble][blogbitix-318]

{{% /post %}}
