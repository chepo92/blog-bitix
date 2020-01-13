---
pid: 9
type: "post"
title: "Logging usando marcadores con slf4j y logback"
url: "/2014/01/logging-usando-marcadores-con-slf4j-y-logback/"
date: 2014-01-31T17:10:17+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image="java.svg" >}}

Un sistema de logging en una aplicación es indispensable para saber lo que está sucediendo en la aplicación en el mismo momento o pasado un tiempo. Es de gran utilidad tanto para en el momento de desarrollar la aplicación como para una vez puesta en producción. Con el registro de las trazas podemos obtener información que nos permitirá descubrir un error o averiguar más fácilmente y rápidamente porque sucede algún comportamiento que no es como se espera.

En Java hay varios sistemas de logging entre los más utilizados están [Log4j][log4j], [logback][logback], [java.util.logging](https://docs.oracle.com/javase/7/docs/api/java/util/logging/package-summary.html) y la capa de abstracción [slf4j][slf4j] sobre varios de estas librerías. En estas librerías de logging las trazas se emiten a través de un logger que normalmente se corresponde con el nombre de la clase en la que se emite la traza. De esta forma las trazas se pueden filtrar por el nivel de importancia de la traza (debug, info, warn, ...) y por el nombre del logger de forma que podemos obtener un registro de las trazas emitidas por los loggers que deseamos.

Sin embargo, el nivel de trazas y nombre de logger no son los más adecuados para determinadas necesidades. En algún caso nos puede interesar solo algunas trazas asociadas a determinada funcionalidad, el resto de trazas podríamos querer filtrarlas, pero únicamente con los filtros por nivel y nombre de logger no podríamos. Además, una funcionalidad puede estar dispersa entre varias clases con lo que si el nombre del logger es el nombre de la clase deberíamos especificar todos los logger que queremos individualmente y aunque los loggers tienen una relación jerárquica no es útil para obtener lo que queremos.

Para obtener las trazas específicas que queremos y que pueden estar dispersas en varias clases podemos usar los [filtros de logback](http://logback.qos.ch/manual/filters.html), una posibilidad es usar los marcadores pero hay otra buena cantidad de posibilidades dependiendo de nuestras necesidades.

Por ejemplo, para la siguientes clases nos podría interesar obtener las trazas asociadas a la funcionalidad de importación pero si indicamos que queremos la trazas del logger Importador y de nivel INFO obtendríamos todas la trazas de la clase incluidas las trazas de persistencia.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="Importador.java" language="java" options="" >}}
{{< code file="Utils.java" language="java" options="" >}}

Este sería el resultado:

{{< image
    gallery="true"
    image1="image:sin-filtro.png" optionsthumb1="300x200" >}}

Para conseguir solo las trazas de una funcionalidad se pueden utilizar los marcadores («markers») de forma que además de por el nivel del mensaje de traza y el logger podamos filtrar por el marcador asociado a la traza. El marcador de una traza es una etiqueta por la que posteriormente podemos filtrar. Si una funcionalidad estuviese repartida por varias clases podríamos usar el mismo marcador en todas esas trazas de forma que podamos filtrar luego por él. El resultado del ejemplo completo sería el siguiente:

{{< image
    gallery="true"
    image1="image:con-filtro.png" optionsthumb1="300x200" >}}

En ambos resultados puede verse el nombre del marcador (IMP de importación, PER de persistencia, UTL de utilidad) asociado a la traza, en el segundo solo se muestran las trazas con el marcador IMP de la funcionalidad de importación.

Utilizando la combinación slf4j y logback, la configuración para de logback y usando un filtro para obtener las trazas con el marcador asociado que deseamos es la siguiente:

{{< code file="logback.xml" language="XML" options="" >}}

Este sería el código del filtro que nos permitiría obtener las trazas de una determinada funcionalidad, en el caso del ejemplo las trazas relativas a la funcionalidad de importación.

{{< code file="ImportacionFilter.java" language="java" options="" >}}

Puedes obtener el [código fuente completo del ejemplo](https://github.com/picodotdev/blog-ejemplos/tree/master/MarcadoresSLF4J) de su repositorio de GitHub y probarlo en tu equipo.

¿Conocías y has usado alguna vez esta funcionalidad?

{{< reference >}}
* [Librerías de logging para Java (slf4j, Log4j, java.util.logging, logback, MentaLog](https://elblogdepicodev.blogspot.com.es/2012/04/librerias-de-logging-para-java-slf4j.html)
{{< /reference >}}

{{% /post %}}
