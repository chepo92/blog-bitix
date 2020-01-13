---
pid: 263
type: "post"
title: "Novedades y nuevas características de Java 9, los módulos"
url: "/2017/09/novedades-y-nuevas-caracteristicas-de-java-9-los-modulos/"
date: 2017-09-23T12:00:00+02:00
updated: 2019-07-07T12:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java","planeta-codigo", "programacion"]
series: ["java-platform"]
summary: "Si en Java 8 la característica más destacada fue la incorporación al lenguaje de las _lambdas_ y los _streams_ en Java 9 la característica que más destaca es la definición de los módulos que proporciona varios importantes beneficios."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Después de unos cuantos aplazamientos de fechas finalmente ha sido publicado el 21 de septiembre de 2017 la [versión 9 del lenguaje y plataforma Java](https://www.oracle.com/technetwork/java/javase/downloads/index.html), tres años después de las también importantes [novedades y nuevas características de Java 8][blogbitix-17]. Al mismo tiempo se ha publicado versión de [Java EE 8](https://www.oracle.com/technetwork/java/javaee/downloads/index.html).

La incorporación de los módulos a la plataforma con Java 9 es una de las modificaciones más importantes en esta versión mayor del lenguaje. Aún siendo una de las características más destacadas y que ha eclipsado a otras modificaciones más allá de los módulos también importantes.

* [Oracle JDK 9 Documentation](https://docs.oracle.com/javase/9/index.html)
* [What’s New in Oracle JDK 9](https://docs.oracle.com/javase/9/whatsnew/toc.htm)
* [Guías descargables con documentación del JDK 9](https://docs.oracle.com/javase/9/javase-docs.htm)
* [Varios _screencasts_ sobre varias de las novedades de Java 9](https://www.oracle.com/java/java9-screencasts.html)
* [Java Magazine Sep/Oct 2017](http://www.javamagazine.mozaicreader.com/SeptOct2017/Twitter)

{{< image
    gallery="true"
    image1="image:tabla-novedades-java-9.jpg" optionsthumb1="300x200" title1="Tabla de novedades de Java 9"
    caption="Tabla de novedades de Java 9" >}}
{{< image
    gallery="false"
    image1="image:duke-java-9.png" optionsthumb1="300x250" title1="Duke Java 9" >}}

Los módulos van a mejorar una de las deficiencias existentes en la visibilidad de las clases entre paquetes. Los módulos de Java proporcionan una mayor encapsulación de las clases contenidas en un paquete y las librerías. Esta encapsulación evita que una aplicación u otra librería haga uso y dependa de clases y paquetes de los que no debería lo que mejora la compatibilidad con versiones futuras. Los desarrolladores de una librería con los módulos ahora tienen un mayor control de los paquetes que expone una librería y que forma parte de su API pública. Con lo que se evita casos que se han dado hasta ahora como que librerías y programas dependan de clases internas en la API de Java como _sun.misc.BASE64Encoder_ o la famosa _sun.misc.Unsafe_, para la primera en Java se añadió un reemplazo con [java.util.Base64](https://docs.oracle.com/javase/9/docs/api/java/util/Base64.html), para la segunda con Java 9 para parte de su funcionalidad se ha añadido algunas nuevas clases.

{{< image
    gallery="true"
    image1="image:java-version.png" optionsthumb1="300x200" title1="Java 9"
    image2="image:jshell.png" optionsthumb2="300x200" title2="JShell"
    caption="Java 9 y JShell" >}}

Los módulos proporcionan:

* Encapsulación fuerte: se diferencia entre que es la API pública y usable y la parte privada a la que impide su uso accidental y acoplamiento indeseado entre módulos. La parte privada está encapsulado y de esta forma puede modificarse libremente con la seguridad de no afectar a los usuarios del módulo.
* Interfaces bien definidas: el código no encapsulado forma parte de la API del módulo, dado que otros módulos pueden usar esta API pública hay que tener especial cuidado al modificarlo al introducir cambios que sean incompatibles. Los módulos deben exportar una API bien definida y estable.
* Dependencias explícitas: los módulos necesitan a menudo otros módulos, estas dependencias son parte de la definición del módulo. Las dependencias explícitas forman un grafo que es importante conocer para entender las necesidades de una aplicación y para ejecutarla con todas sus dependencias.

Los beneficios son:

* Configuración confiable: el sistema de módulos comprueba si una combinación de módulos satisface todas las dependencias antes de compilar o ejecutar una aplicación.
* Encapsulación fuerte: se evitan dependencias sobre detalles internos de implementación.
* Desarrollo escalable: se crean límites entre el equipo que desarrolla un módulo y el que lo usa.
* Optimización: dado que el sistema de módulos sabe que módulos necesita cada uno solo se consideran los necesarios mejorándose tiempos de inicio y memoria consumida.
* Seguridad: la encapsulación y optimización limita la superficie de ataque.

La modularización afecta al diseño, compilación, empaquetado y despliegue es mucho más que una nueva característica del lenguaje. Los módulos son artefactos con su propia entidad que contienen código y metadados para describir el módulo y como se relaciona con otros módulos.

Hasta ahora se seguía una convención de poner clases en paquetes de nombre _.impl_ o _.internal_ pero realmente la gente seguía usando esas clases porque simplemente se podía. No había ninguna forma de ocultar las implementaciones de esos paquetes más allá del los modificadores de accesibilidad _protected_ y _private_ que no son satisfactorios para ocultar las implementaciones.

Java desde sus inicios ha hecho un buen trabajo en la definición de interfaces usando la palabra reservada _interface_. En el apartado de dependencias es donde había deficiencias. Sí, hay sentencias _import_ explícitas pero desafortunadamente son únicamente para el tiempo de compilación.

En tiempo ejecución no hay ninguna noción de archivos JAR o agrupación lógica. En el _classpath_ todas las clases son puestas en una lista plana. Cuando la JVM carga una clase la encuentra recorriendo esa lista en orden secuencial, tan pronto como la clase es encontrada la búsqueda finaliza y la clase es cargada. Si la clase no se encuentra se obtiene una excepción en tiempo de ejecución y dado que las clases son cargadas bajo demanda en el momento de uso esa excepción potencialmente puede ser lanzada en un momento posterior de haber iniciado la aplicación. La JVM no puede verificar eficientemente la corrección del _classpath_ en el inicio o si se debería añadir otra librería _jar_. Otros problemas insidiosos suceden cuando hay clases duplicadas en el _classpath_ por versiones diferentes de una misma librería.

Antes del sistema de módulos de Java la librería de tiempo de ejecución consistía en un gran archivo _rt.jar_ con un tamaño de más de 60 MiB. Este archivo contiene la mayor parte de clases de la plataforma en forma de monolito. Para conseguir mayor flexibilidad y ser una plataforma de futuro se decidió modularizar el JDK.

Eliminar algunas tecnologías en desuso del JDK no era una opción viable. La compatibilidad hacia atrás es uno de los principios más importantes para Java que guían su desarrollo. Eliminar estas APIs rompería esta compatibilidad hacia atrás, a pesar de que afectaría a un pequeño porcentaje de usuarios todavía hay una buena cantidad de gente usando tecnologías como CORBA.

Descomponer el JDK en módulos ha sido un trabajo inmenso. Con más de 20 años de código heredado acumulados separar una enmarañada y grande base de código conteniendo cientos de clases en módulos bien definidos con límites claros mientras se mantiene la compatibilidad hacia atrás. Esto toma tiempo siendo el motivo de tomar tanto tiempo el incorporar un sistema de módulos en Java. Pero en el futuro este esfuerzo será recompensado en términos de velocidad de desarrollo y aumento de flexibilidad para el JDK.

Con el tiempo las dependencias entre los propios paquetes y clases de la API de Java estaba enmarañada, con Java 9 las dependencias entre paquetes se ha simplificado en gran medida.

{{< image
    gallery="true"
    image1="image:java-8-modules.jpg" optionsthumb1="300x200" title1="Módulos de Java 8"
    image2="image:java-9-modules.jpg" optionsthumb2="300x200" title2="Módulos de Java 9"
    caption="Módulos de Java 8 y Java 9" >}}


El entorno de ejecución de Java y el compilador conocen exactamente ahora que módulo resolver al buscar los tipos para un paquete dado. Previamente la única forma de obtener un tipo arbitrario era hacer una búsqueda en todo el _classpath_. Por ejemplo, dos módulos con el mismo nombre producen un error en inicio de la aplicación, en vez de en tiempo de ejecución.

Los módulos permiten definir a cada librería los paquetes de clases que exporta como su API accesible por otra librería o programa que la requiera. Además, cada librería debe al mismo tiempo definir qué paquetes requiere. Las exportaciones y requerimientos permiten ahora detectar al iniciar la máquina virtual si el grafo de dependencias está completo cosa que antes se producía en un mayor número de casos en tiempo de ejecución posiblemente con la excepción [NoClassDefFound](https://docs.oracle.com/javase/9/docs/api/java/lang/NoClassDefFoundError.html). Una de los efectos que se mejoran en Java y que ya es una característica a la que se le da mucha importancia es la compatibilidad hacia atrás y también la encapsulación ya que los desarrolladores de las librerías tienen mayor control de que paquetes se permite su uso evitando dependencias no deseadas que impidan en un futuro que aplicaciones que hipotéticamente las usasen dejasen de ser compatibles con nuevas versiones.

{{< code file="java-list-modules.sh" language="bash" options="" >}}

La definición de un módulo se realiza con un nuevo archivo de código fuente de nombre _module-info.java_. Con la palabra reservada _requires_ y una línea por paquete se definen qué paquetes requiere el módulo, con la palabra reservada _exports_ se define que paquetes del módulo se exportan y son visibles por algún otro módulo que lo requiera. También se han añadido las palabras reservadas _provides_ y _uses_ para proporcionar y usar definiciones de servicios que con anterioridad se realizaba en archivos ubicados en _META-INF/services_ como muestro en el ejemplo [Aplicación Java extensible con la clase ServiceLoader][blogbitix-94]. También se puede hacer que la directiva _requires_ sea de forma transitiva para que el módulo que lo use pueda usar ese paquete sin requerirlo de forma explícita, la directiva _opens_ permite hacer uso de reflectividad usando el método [setAccesible](https://docs.oracle.com/javase/9/docs/api/java/lang/reflect/AccessibleObject.html).

Dado que la transición hacia el uso de los módulos puede generar problemas de compatibilidad con aplicaciones existentes se han añadido algunos parámetros para la máquina virtual en el comando _java_ e incluso en el caso más grave desactivar completamente el sistema de módulos, aunque lógicamente esto está desaconsejado. En la [guía de migración a Java 9](https://docs.oracle.com/javase/9/migrate/toc.htm) están detallados los aspectos a tener en cuenta en la migración de una versión anterior a Java 9.

Este es el típico ejemplo _Hola Mundo_ con Java 9 en que que muestro como compilar un programa usando los módulos y como ejecutarlo directamente desde la linea de comandos. En el código de la clase _Main_ no hay ningún cambio respecto al que sería con una versión anterior de Java sin embargo se añade el nuevo archivo de código fuente _module-info.java_ donde se definen sus dependencias que este programa no tiene salvo la implícita sobre el módulo _java.base_. Los comandos para compilar y ejecutar el ejemplo directamente con los comandos _javac_ y _java_ si cambian, ahora se usa en vez de _classpath_ la opción _module-path_ y se indica la clase del módulo que contiene el método _main_ del programa, [comparar con un ejemplo en Java 8 o anteriores versiones][blogbitix-373]. 

{{< code file="Main.java" language="java" options="" >}}
{{< code file="module-info.java" language="java" options="" >}}
{{< code file="java.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:java-9-helloworld.png" optionsthumb1="300x200" title1="Hola Mundo con Java 9"
    caption="Hola Mundo con Java 9" >}}

El comando _jdeps_ muestra las dependencias de los módulos muy útil para tareas de análisis o depuración.

{{< image
    gallery="true"
    image1="image:jdeps.png" optionsthumb1="300x200" title1="Dependencias del ejemplo Hola Mundo con Java 9"
    image2="image:jdeps-java-sql.png" optionsthumb2="300x200" title2="Dependencias del módulo java.sql"
    caption="Análisis de dependencais con jdeps" >}}

Con el objetivo de mantener la compatibilidad en la mayor medida posible con las librerías existentes y una transición progresiva de un sistema sin módulos a uno con módulos [la platforma de módulos de Java define varios tipos de módulos][blogbitix-420], los módulos con nombre, los automáticos y el módulo anónimo. Para profundizar más en los detalles de la modularidad y el resto de novedades de Java 9 están los libros [Java 9 Revealed](http://amzn.to/2g0qu6t) y [Java 9 Modularity Revealed](http://amzn.to/2fY3wwT).

{{< amazon
    linkids="9c7874501bb32fa3318e285022e0207a,59d96101c25f9c16c4427b8ee9daef1a"
    asins="1484225910,1484227123" >}}

Para finalizar este artículo incluyo un vídeo sobre los módulos que comenta los aspectos más destacados. Hay [otros vídeos sobre las novedades de Java 9](https://www.oracle.com/java/java9-screencasts.html) de no más de 15 minutos cada uno.

{{< iframe src="https://players.brightcove.net/1460825906/VkKNQZg6x_default/index.html?videoId=5582429007001" size="640x360" >}}

{{< sourcecode git="blog-ejemplos/tree/master/HolaMundoJava9" command="./java.sh" >}}

{{< reference >}}
* [Java 9: It's Heeeere](https://dzone.com/articles/java-9-its-heeeere)
* [Java Platform, Standard Edition Oracle JDK 9 Migration Guide](https://docs.oracle.com/javase/9/migrate/toc.htm)
* [Java 9 modules – JPMS basics](https://jaxenter.com/java-9-modules-jpms-basics-135885.html)
* [JShell la herramienta REPL incorporada en Java 9][blogbitix-265]
* [La herramienta jlink para generar runtimes de Java incluyendo exclusivamente los módulos que usa una aplicación][blogbitix-307]
* [Code First Java 9 Tutorial](https://blog.codefx.org/java/java-9-tutorial/)
{{< /reference >}}

{{% /post %}}
