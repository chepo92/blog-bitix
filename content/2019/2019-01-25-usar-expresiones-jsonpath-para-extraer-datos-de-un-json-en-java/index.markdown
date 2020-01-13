---
pid: 376
type: "post"
title: "Usar expresiones JSONPath para extraer datos de un JSON en Java"
url: "/2019/01/usar-expresiones-jsonpath-para-extraer-datos-de-un-json-en-java/"
date: 2019-01-25T18:30:00+01:00
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

Para tratar JSON en Java hay varias alternativas una de ellas es [utilizar la API de bajo nivel JSON-P][blogbitix-374], otra es [JSON-B][json-b] que requiere construir una o varias clases de Java a las que hacer la correspondencia entre el JSON y los objetos Java. Otra alternativa es utilizar expresiones o selectores que seleccionen los datos de JSON de forma similar a como se puede hacer con [XPath][xpath] para el caso de XML o [jQuery][jquery] con los elementos de HTML.

Las expresiones de [JSONPath](https://goessner.net/articles/JsonPath/) o _XPath for JSON_ se componen de operadores, funciones, operadores de filtrado y predicados con los que dado un JSON y una expresión permite seleccionar, extraer y transformar los datos de forma precisa. La librería [JsonPath][jsonpath] es una implementación en Java de la especificación JSONPath.

Dado el siguiente texto en JSON estos son algunos ejemplos de expresiones que seleccionan datos utilizando JsonPath.

{{< code file="store.json" language="json" options="" >}}

En estas expresiones por orden se obtienen los autores de los libros de la tienda, los libros de la tienda, los libros cuyo precio es menor que 10, los libros que tienen un atributo _isbn_, los dos primeros libros y los precios de todos los artículos incluidos los de las bicicletas. En las páginas de JSONPath y de JsonPath hay una documentación más detallada de la sintaxis de las expresiones. JSONPath dispone de un [evaluador de expresiones](http://jsonpath.com/) para probar las expresiones de forma rápida.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}

Estas son las dependencias necesarias para JsonPath y como usa [SLF4J][slf4j] varias más para redirigir las trazas a [Log4j][log4j].

{{< code file="build.gradle" language="groovy" options="" >}}

El código equivalente para extraer estos datos usando JSON-P sería más largo, complejo, difícil de mantener y de difícil compresión. Dependiendo de la cantidad de datos a seleccionar se preferirá JSON-B si son muchos o JsonPath si son pocos o hay cierta lógica de filtrado.

La librería [JMESPath][jmespath] es una librería equivalente a JsonPath aunque utiliza otra especificación en la que cambia la sintaxis de las expresiones pero no dejan de ser similares, por el hecho de que las expresiones JsonPath siguen el estándar de XPath para XML le da algo de mayor atractivo.

{{% sourcecode git="blog-ejemplos/tree/master/JavaJson" command="./gradlew run" %}}

{{% /post %}}
