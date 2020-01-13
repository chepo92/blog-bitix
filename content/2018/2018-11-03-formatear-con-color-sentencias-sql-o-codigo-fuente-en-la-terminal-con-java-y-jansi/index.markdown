---
pid: 359
type: "post"
title: "Formatear con color sentencias SQL o código fuente en la terminal con Java y Jansi"
url: "/2018/11/formatear-con-color-sentencias-sql-o-codigo-fuente-en-la-terminal-con-java-y-jansi/"
date: 2018-11-03T23:30:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Usando la librería [Jansi][Jansi] es posible [hacer que un programa Java emita texto en color en la terminal][elblogdepicodev-135]. Emitir color en la terminal sirve para identificar más fácilmente y visualmente ciertas partes del texto, por ejemplo, emitiendo en rojo mensajes importantes o con color amarillo de fondo algún dato. Una utilidad práctica es formatear con color una sentencia SQL que se va a ejecutar en una aplicación a modo de traza o con colores el código fuente de un archivo Java u otro tipo de archivo de texto.

Una forma sencilla para formatear con colores un archivo de código fuente Java o una sentencia SQL sin llegar a hacer un procesador de sintaxis de ese lenguaje o formato es [utilizar expresiones regulares y grupos de captura][blogbitix-300]. En ambos casos hay partes que son palabras claves, números o cadenas en definitiva elementos que se deseen destacar. Con las clases [Pattern](javadoc11:java.base/java/util/regex/Pattern.html) y [Matcher](javadoc11:java.base/java/util/regex/Matcher.html) de Java se van obteniendo los diferentes grupos de captura de forma secuencial. Según sea el grupo capturado del elemento actual se utiliza Jansi para formatearlo con el color que le corresponde.

Una formateador simple para cada uno de estos casos serían los siguientes donde se utiliza una expresión regular con diferentes grupos de captura con nombre. El primer caso es para formatear con color una sentencia SQL sencilla en el método _printSql()_ y el segundo el programa _Hola mundo_ de Java en el metodo _printJava()_.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

El resultado en la terminal es el siguiente.

{{< image
    gallery="true"
    image1="image:JavaRegexFormatter.png" optionsthumb1="650x450" title1="Formateado de sentencia SQL y código Java"
    caption="Formateado de sentencia SQL y código Java" >}}

Este ejemplo es una aplicación útil de las expresiones regulares. En este caso he usado Jansi para emitir en la terminal texto con color pero de forma similar esto se puede usar para formatear en una web el mismo texto transformándolo y generando el HTML con las clases CSS adecuadas.

{{< sourcecode git="blog-ejemplos/tree/master/JavaRegexFormatter" command="./gradlew installDist, ./build/install/JavaRegexFormatter/bin/JavaRegexFormatter" >}}

{{% /post %}}
