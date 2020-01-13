---
pid: 78
type: "post"
title: "Escribir en varios «Writer» a la vez"
url: "/2015/04/escribir-en-varios-writer-a-la-vez/"
date: 2015-04-30T20:00:47+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "programacion", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="java.svg" >}}

Hace un tiempo tuve necesidad de generar cierto contenido sobre varios writers, la necesidad en concreto era generar un archivo xml en disco y al mismo tiempo el mismo contenido para un correo electrónico. Para no escribir lo mismo en dos [Writer](javadoc8:java/io/Writer.html) diferentes la solución fue crear un writer y este fuese el que escribiese el contenido que se le enviaba sobre varios writers. En la API de Java no hay una clase específica que haga esto pero es muy sencillo hacer una implementación que lo haga, esto va a ser lo que explicaré en el siguiente artículo.

Para hacer que el contenido de un writer se escriba a varios deberemos extender la clase Writer de esta manera su uso será como la de cualquier otro Writer. Lo especial de la implementación del writer es que su misión será realizar la misma operación que se haga sobre él sobre los writers que en este caso se pasan como parámetros en el constructor en forma de varargs.

{{< code file="MultipleWriter-1.java" language="java" options="" >}}

El bucle _for_ sobre cada uno de los _Writer_ está encapsulado en el método _doWriters_, el objeto _Command_ es que realmente hace la escritura en el writer usando el método _write_ que se llamó sobre la clase _MultipleWriter_. A falta de las [funciones lambda hasta Java 8][blogbitix-17] se usa el objeto _Command_ y el método doWriters_, por contra se crea por cada método _writer_ invocado se crea una instancia de la clase Command.

Con [closures y las novedades de Java 8 en la API][blogbitix-17] no sería necesario que usaramos una clase Command, el código es más sencillo, breve y más legible.

{{< code file="MultipleWriter-2.java" language="java" options="" >}}

Independiente de la implementación con Java 7 o con a Java 8 el uso sería el siguiente:

{{< code file="Main.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:multiplewriter-consola.png" optionsthumb1="300x200" title1="Salida en la consola" >}}

Con [Groovy][groovy] además de las _closures_ no será necesario que declararemos de forma explícita el lanzamiento de las excepciones sin embargo al usarlo perderíamos la ayuda que ofrece el compilador.

{{< reference >}}
* [Otros artículos sobre Java][blogbitix-tag-java]
* [Novedades y nuevas características de Java 8][blogbitix-17]
{{< /reference >}}

{{% /post %}}
