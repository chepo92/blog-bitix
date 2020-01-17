---
pid: 307
type: "post"
title: "La herramienta jlink para generar runtimes de Java incluyendo exclusivamente los módulos que usa una aplicación"
url: "/2018/03/la-herramienta-jlink-para-generar-runtimes-de-java-incluyendo-exclusivamente-los-modulos-que-usa-una-aplicacion/"
date: 2018-03-24T23:30:00+01:00
language: "es"
rss: true
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En versiones anteriores de Java 9 había un único _runtime_ para ejecutar cualquier aplicación que debía ser instalado previamente para la ejecución de la aplicación. Aunque la aplicación no usase _Swing_ por ser una aplicación web o cosas como [CORBA](https://es.wikipedia.org/wiki/CORBA) ya en desuso aún estaban disponibles en el _runtime_ por motivos de no romper la compatibilidad con versiones anteriores.

Esto hacía que las aplicaciones no fuesen lo más eficiente posible y aumenta el tamaño necesario ahora de las imágenes de contenedores como [Docker][docker] estas tuviesen un tamaño mayor del imprescindible, además de hacer que el tiempo de arranque sea algo mayor e incluir clases que aumentan la superficie de ataque ante un fallo de seguridad. Entre las [novedades de Java 8][blogbitix-17] se añadieron los [_compact profiles_](https://www.oracle.com/technetwork/java/embedded/resources/tech/compact-profiles-overview-2157132.html) que eran subconjuntos más reducidos del _runtime_ pero eran conjuntos prefijados, las aplicaciones debían usar el mínimo que necesitasen si querían usar alguno. La solución de Java 8 fue una solución intermedia, [los módulos de Java 9][blogbitix-263] han sido la solución completa.

Con la incorporación de la modularidad a Java 9 se posibilita generar _runtimes_ con exclusivamente los módulos que necesite la aplicación, si la aplicación solo necesita el módulo _java.base_ por ser muy sencilla se puede generar un _runtime_ con solo este módulo. Los módulos son una mejora conveniente para la tendencia en el desarrollo de aplicaciones en forma de microservicios y ejecución con contenedores. La herramienta que posibilita generar _runtimes_ personalizados con [jlink](https://docs.oracle.com/javase/9/tools/jlink.htm) que pueden ser ejecutandos sin instalar previamente ningún JDK en el sistema y posibilitando que cada aplicación pueda usar su propio _runtime_.

Usando como ejemplo el caso de la [aplicación con el cliente de HTTP/2][blogbitix-268] que tiene como dependencias únicamente el módulo _jdk.incubator.httpclient_ de forma explícita y _java.base_ de forma implícita en su definición de módulo la forma de generar un runtime específico para esta aplicación con _jlink_ es la siguiente que utiliza el archivo con las dependencias de módulos declarados en el archivo _module-info.java_.

{{< code file="module-info.java" language="java" options="" >}}

Usando la linea de comandos o con una tarea de [Gradle][gradle] se genera el _runtime_ para la aplicación con _jlink_. El módulo ha de compilarse previamente. Con la opción _\-\-launcher_ se crea un _script_ para lanzar la aplicación con la clase que contiene el método _main_ indicada como punto de entrada, la opción _\-\-output_ indica donde se genera el contenido del _runtime_.

{{< code file="jlink.sh" language="bash" options="" >}}

El espacio total del _runtime_ en este caso de es de solo 38 MiB. Comparados con los casi 200 MiB que ocupa el [OpenJDK][openjdk] comprimido que incluye todos los módulos, aproximadamente 500 MiB instalado y alrededor de entre 600 y 900 MiB dependiendo de la imagen base de Docker que se use se aprecia que el ahorro de espacio es considerable lo que redunda en tiempos de transferencia por red menores y un inicio más rápido de las aplicaciones.

El contenido del _runtime_ y de su estructura de directorios es la indicada a continuación. Listando los módulos incluidos en este _runtime_ en vez de todos los del JDK se observa que solo están incluidos los necesarios por la aplicación.

{{< code file="info.sh" language="bash" options="" >}}

{{< code file="build.gradle" language="groovy" options="" >}}

Una vez generado el _runtime_ su uso es el siguiente:

{{< code file="run.sh" language="bash" options="" >}}

En el vídeo [Java in a World of Containers](https://www.oracle.com/java/java9-screencasts.html?bcid=5582437011001&playerType=single-social&size=events) se comenta otra serie de características y opciones incluidas en Java para hacer de esta plataforma más consciente de las condiciones de ejecución propias de los contenedores.

{{< sourcecode git="blog-ejemplos/tree/master/JavaHttp2" command="./gradew jlink" >}}

{{% /post %}}
