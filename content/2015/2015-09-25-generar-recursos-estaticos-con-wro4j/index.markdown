---
pid: 98
type: "post"
title: "Generar recursos estáticos con wro4j"
url: "/2015/09/generar-recursos-estaticos-con-wro4j/"
date: 2015-09-25T17:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Con nuevas tecnologías como less, Sass o CoffeeScript el desarrollo y mantenimiento de una página web medianamente compleja mejora notablemente. Con la librería wro4j en una aplicación Java podemos procesar este tipo de recursos y convertirlos a los equivalentes que saben interpretar los navegadores de forma nativa CSS y JavaScript además de optimizar su tamaño u ofuscarlos."
---

{{% post %}}

{{< logotype image="java.svg" >}}

El desarrollo y las tecnologías de las páginas web sigue evolucionando, HTML 5, JavaScript, CSS 3, [diseño adaptable](https://es.wikipedia.org/wiki/Dise%C3%B1o_web_adaptable) (_responsive_), ... Y también surgen nuevas herramientas que hacen el desarrollo más simple o hace que las aplicaciones sean más eficientes. Algunas de estas nuevas tecnologías son [less][less] o [Sass][sass] que permiten producir hojas de estilo CSS utilizando una mejor notación, si la hoja de estilos es grande usar una tecnología como esta puede reducir considerablemente su tamaño, hacerla más legible y de más fácil mantenimiento, [CoffeeScript][coffeescript] también puede hacer más simple el desarrollo de la parte cliente de una aplicación, proporciona una sintaxis más clara (para algunos) que la ofrecida por el propio lenguaje JavaScript, que compilados generan su equivalente en JavaScript.

También hay herramientas para optimizar los recursos eliminando los espacios innecesarios reduciendo su tamaño, la reducción conseguida variará en función del tamaño del archivo. En los archivos JavaScript la reducción puede ser mayor ya que aparte de eliminar los espacios en blanco se pueden renombrar los nombres de las variables, funciones y argumentos por otros más cortos consiguiendo una mayor reducción de tamaño. Esta minificación puede servirnos para ofuscar el código si queremos dificultar su lectura para las personas.

En Java disponemos de la librería [wro4j][wro4j] (_Web Resource Optimizer for Java_) para hacer este procesado de conversión y optimización desde nuestra aplicación. Puede interesarnos si el _framework_ web no ofrece esta funcionalidad o en una aplicación _standalone_ como ha sido el caso de [Blog Stack][blogstack] donde la he usado para en vez de usar CSS directamente usar un archivo less y luego transformarlo a CSS. Su uso no es complicado y puede mejorar nuestra aplicación o el desarrollo de la misma notablemente:

{{< code file="Wro4j.java" language="java" options="" >}}

Aparte de los procesadores de este ejemplo wro4j tiene [disponibles muchos otros](https://code.google.com/p/wro4j/wiki/AvailableProcessors). Este procesado es algo costoso en cuanto a tiempo pero el archivo producido podemos cachearlo al inicio de la aplicación o después de compilarlo.

Si queremos usarlo en una aplicación web Java y el _framework_ que usemos no lo usa internamente o no proporciona algo parecido podemos [seguir 3 para emplear wro4j](http://wro4j.github.io/wro4j/), añadir un filtro, una configuración en XML y una etiqueta _link_ y otra _script_ para incluirlos en las páginas, por supuesto habrá que añadir la dependencia de la librería con [la herramienta de construcción automatizada Gradle][elblogdepicodev-98] u otra.

{{< reference >}}
* [wro4j][wro4j]
* [less][less]
* [sass][sass]
{{< /reference >}}

{{% /post %}}
