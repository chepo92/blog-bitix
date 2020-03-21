---
pid: 434
type: "post"
title: "Novedades de Java 13"
url: "/2019/09/novedades-de-java-13/"
date: 2019-09-27T16:30:00+02:00
updated: 2019-10-22T19:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
series: ["java-platform"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Continuando las mejoras incrementales cada seis meses el 17 de septiembre se publico Java 13. Java 13 incorpora algunas nuevas características interesantes que mejoran un facilitan la lectura del código, entre las más destacadas están los bloques de texto y las expresiones _switch_ mejoradas.

* [Características de Java 13](https://openjdk.java.net/projects/jdk/13/)
* [Notas de publicación de Java 13](https://jdk.java.net/13/release-notes)
* [Java 13 Javadoc](https://docs.oracle.com/en/java/javase/13/docs/api/)

Las mejoras incluídas en esta versión son:

* JEP 350: [Dynamic CDS Archives](https://openjdk.java.net/jeps/350)
* JEP 351: [ZGC: Uncommit Unused Memory](https://openjdk.java.net/jeps/351)
* JEP 353: [Reimplement the Legacy Socket API](https://openjdk.java.net/jeps/353)
* JEP 354: [Switch Expressions (Preview)](https://openjdk.java.net/jeps/354)
* JEP 355: [Text Blocks (Preview)](https://openjdk.java.net/jeps/355)

Casi coincidiendo con la publicación de Java 13 se publicado [Jakarta EE][jakartaee] 8 que únicamente tiene como novedad que su propiedad ha pasado a estar baja la fundación Eclipse, es totalmente compatible con [Java EE 8 y sus últimas mejoras][blogbitix-360], las novedades vendrán en versiones posteriores de Jakarta EE en las que se dará importancia a la tendencia de las aplicaciones para su funcionamiento en entornos orientados a la nube. Casi al mismo tiempo se ha publicado [JavaFX](https://openjfx.io/) 13 ya fuera del JDK en onde puede seguir su propio ciclo de publicaciones independiente del JDK.

### Bloques de texto

Para definir una cadena de caracteres que tuviese varias lineas en Java había que emplear concatenación de cadenas, si esa cadena contiene el caracter comilla doble _"_ de inicio de cadena había que escaparlo, si esa cadena contenía saltos de línea había que emplear el caracter de escape de salto de línea _\n_. El resultado es una cadena con problemas de legibilidad por los caracteres de escape que incluye en el código fuente del lenguaje. Esto podría se al definir una cadena de texto que tuviese elementos HTML, JSON, sentencias SQL o expresiones regulares.

{{< code file="TextBlock-1.java" language="java" options="" >}}

Con los bloques de texto se emplean una triple comilla doble _"_ para la apertura y cierre de la cadena.

{{< code file="TextBlock-2.java" language="java" options="" >}}

Como ayuda a las cadenas de texto en la clase [String](https://docs.oracle.com/en/java/javase/13/docs/api/java.base/java/lang/String.html) se han añadido varios métodos para eliminar la indentación (_String::stripIndent_), traducir los caracteres secuencia de escape (_String::translateEscapes_) y formatear una cadena usando un método de instancia (_String::formatted_).

* [Text Blocks Come to Java](https://blogs.oracle.com/javamagazine/text-blocks-come-to-java)

### Expresiones switch mejoradas

En las [novedades de Java 12][blogbitix-391] se añadió la posibilidad de los _switch_ fueran expresiones que retornan un valor en vez de sentencias y se evita el uso de la palabra reservada _break_.

{{< code file="Switch-1.java" language="java" options="" >}}

En Java 13 en vez únicamente el valor a retornar se permite crear bloques de sentencias para cada rama _case_ y retornar el valor con la palabra reservada _yield_. En los bloques de sentencias puede haber algún cálculo más complejo que directamente retornar el valor deseado.

{{< code file="Switch-2.java" language="java" options="" >}}

* [Inside Java 13’s switch Expressions and Reimplemented Socket API](https://blogs.oracle.com/javamagazine/inside-java-13s-switch-expressions-and-reimplemented-socket-api)

### Otras características

Las las otras tres características destacadas _Dynamic CDS Archives_, _ZGC: Uncommit Unused Memory_ para la mejora del recolector de basura y _Reimplement the Legacy Socket API_ reescribiendo el código para los _sockets_ en lenguaje Java son cambios internos que afectan a la plataforma Java pero no al lenguaje.

{{< reference >}}
* [What is new in Java 13](https://www.mkyong.com/java/what-is-new-in-java-13/)
* [Definitive Guide To Java 13](https://blog.codefx.org/java/java-13-guide/)
* [Java 13 – a deep dive into the JDK’s new features](https://jaxenter.com/java-13-jdk-deep-dive-new-features-162272.html)
* [Java 13 – why text blocks are worth the wait](https://jaxenter.com/java-13-text-blocks-162278.html)
* [Jakarta EE 8 is sprinting towards an exciting future for enterprise Java](https://jaxenter.com/jakarta-ee-8-future-enterprise-java-161984.html)
* [ The Differences Between Java EE, Jakarta EE, and MicroProfile](https://dzone.com/articles/the-differences-between-java-ee-jakarta-ee-and-mic)
* [Cloud Native Java](https://jakarta.ee/documents/insights/cloud_native_java_ebook.pdf)
* [OpenJFX 13 – "JavaFX gets its own identity"](https://jaxenter.com/openjfx-13-interview-dirk-lemmermann-161967.html)
{{< /reference >}}

{{% /post %}}
