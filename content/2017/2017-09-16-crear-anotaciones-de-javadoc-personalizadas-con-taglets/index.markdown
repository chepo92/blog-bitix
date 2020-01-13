---
pid: 261
type: "post"
title: "Crear anotaciones de Javadoc personalizadas con taglets"
url: "/2017/09/crear-anotaciones-de-javadoc-personalizadas-con-taglets/"
date: 2017-09-16T10:00:00+02:00
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

[La herramienta de documentación es Javadoc de Java][blogbitix-259] permite a partir del código fuente de un programa o librería generar un conjunto de documentos en formato HTML enlazados entre si consultables con un navegador web y accesibles desde internet si son accesibles con un servidor web. La documentación se genera a partir de las clases y métodos del código fuente y también a partir de los comentarios de las clases y métodos.

En los comentarios se pueden incluir anotaciones que enriquecen la documentación, por ejemplo, para indicar el autor o en qué versión se incluyó una clase o método, incluir enlaces, ... en el propio JDK ya se incluye un amplio [conjunto completo de anotaciones](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html#javadoctags). Pero además de usar las anotaciones ya incorporados por defecto en la herramienta también es posible añadir nuevos propios, escribiendo un _taglet_. Con la [API de los _taglets_](https://docs.oracle.com/javase/8/docs/technotes/guides/javadoc/taglet/overview.html) basta implementar una clase que implemente la interfaz [Taglet](https://docs.oracle.com/javase/8/docs/jdk/api/javadoc/taglet/com/sun/tools/doclets/Taglet.html). La [interfaz Taglet de Java 9](http://download.java.net/java/jdk9/docs/api/jdk/javadoc/doclet/Taglet.html) ha sido modificada ligeramente pero en esencia proporciona la misma información, en vez de un método para indicar si es posible el _taglet_ en una localización hay un único método que devuelve un _Set_ con todas las posibles localizaciones, en vez de necesitar un método _register_ hay un método [init](http://download.java.net/java/jdk9/docs/api/jdk/javadoc/doclet/Taglet.html#init-jdk.javadoc.doclet.DocletEnvironment-jdk.javadoc.doclet.Doclet-) y un único método para generar el contenido, [toString](http://download.java.net/java/jdk9/docs/api/jdk/javadoc/doclet/Taglet.html#toString-java.util.List-javax.lang.model.element.Element-).

La clase tiene varios métodos uno que indica el nombre único del _taglet_ que identificará la anotación en los comentarios de Javadoc, varios métodos para indicar en que localizaciones es usable y dos métodos que generan el contenido a incluir en el HTML resultante. Las clases [Tag](https://docs.oracle.com/javase/8/docs/jdk/api/javadoc/doclet/com/sun/javadoc/Tag.html) que recibe el método [Taglet.toString()](https://docs.oracle.com/javase/8/docs/jdk/api/javadoc/taglet/com/sun/tools/doclets/Taglet.html#toString-com.sun.javadoc.Tag-) o [ParamTag](https://docs.oracle.com/javase/8/docs/jdk/api/javadoc/doclet/com/sun/javadoc/ParamTag.html) permite obtener diversa información utilizable para generar el contenido apropiado.

Los _taglets_ pueden ser de tipo bloque con su propia entidad o ser embebidos en linea en un comentario del _javadoc_. En ejemplo de _taglet_ de bloque siguiente consiste en permitir incluir elementos que quedan por hacer en el código, una anotación _todo_. Con esta anotación el desarrollador incluye un comentario descriptivo de cuales son las cosas pendientes para un futuro. El código del _taglet_ sería el siguiente.

{{< code file="TodoTaglet.java" language="java" options="" >}}
{{< code file="Main.java" language="java" options="" >}}}

Una vez escrito el código fuente del _taglet_ hay que compilarlo e indicar su ubicación al generar la documentación con la herramienta _javadoc_. Hay que indicar varias opciones (_tagletPath_ y _taglets_) que también se usarían como parámetros empleando directamente la herramienta _javadoc_, los comandos serían los siguientes usando [Gradle][gradle]. También hay que incluir de forma explícita como dependencia la librería _tools.jar_ ubicado en el JDK.

{{< code file="build.gradle" language="groovy" options="" >}}}

{{< image
    gallery="true"
    image1="image:javadoc-taglet.png" optionsthumb1="300x200" title1="Contenido del taglet todo en el javadoc"
    caption="Contenido del taglet todo en el javadoc" >}}

{{< sourcecode git="blog-ejemplos/tree/master/Javadoc" command="./gradlew javadoc" >}}

{{< reference >}}
* [Javadoc Technology](https://docs.oracle.com/javase/8/docs/technotes/guides/javadoc/index.html)
* [Taglet Overview](https://docs.oracle.com/javase/8/docs/technotes/guides/javadoc/taglet/overview.html)
{{< /reference >}}

{{% /post %}}
