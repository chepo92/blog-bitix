---
pid: 260
type: "post"
title: "Cómo generar la documentación Javadoc con Gradle"
url: "/2017/09/como-generar-la-documentacion-javadoc-con-gradle/"
date: 2017-09-14T10:00:00+02:00
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

Habiendo explicado [que es la herramienta Javadoc][blogbitix-259], y en otros artículos [como crear taglets][blogbitix-261] para incluirlos en los comentarios y generar contenido con los mecanismos de extensión que ofrece y explicado [como cambiar los estilos que se usan por defecto en el Javadoc][blogbitix-262] para por ejemplo cambiar los colores según la organización o incluir un texto de derechos de autor en el pie de página, hay que generar la documentación _javadoc_ usando la herramienta de construcción que usemos. En este artículo muestro como generar la documentación _javadoc_ con [Gradle][gradle].

Lo primero es incluir en el proyecto el _plugin_ de java. Con el _plugin_ incluido se añade una tarea con la que generar la documentación _javadoc_.

{{< code file="gradle.sh" language="bash" options="" >}}

Para indicar en Gradle [las opciones del comando javadoc](https://docs.oracle.com/javase/7/docs/technotes/tools/windows/javadoc.html#options) hay que ver cuales son en las clases [MinimalJavadocOptions](https://docs.gradle.org/current/javadoc/org/gradle/external/javadoc/MinimalJavadocOptions.html), [CoreJavadocOptions](https://docs.gradle.org/current/javadoc/org/gradle/external/javadoc/CoreJavadocOptions.html) y [StandardJavadocDocletOptions](https://docs.gradle.org/current/javadoc/org/gradle/external/javadoc/StandardJavadocDocletOptions.html). Las opciones permiten indicar la clase de _taglet_ propio y lo mismo para usar una hoja de estilos propia que puede estar basada pero con pequeñas modificaciones sobre la que usa _javadoc_ por defecto, también para incluir un texto en cada página en el pie. Lo mismo sería para usar cualquiera de las otras opciones que tiene el comando _javadoc_. En el ejemplo se usan dos opciones para la codificación de caracteres.

{{< code file="build-1.gradle" language="groovy" options="" >}}

Para generar un artefacto con la documentación comprimida en un archivo _zip_ hay que incluir la siguiente configuración en el archivo _build.gradle_.

{{< code file="build-2.gradle" language="groovy" options="" >}}

Con Gradle la documentación Javadoc se genera en el directorio _build/xxx_ y el artefacto en el directorio _build/xxx_. Con las opciones anteriores este es el resultado del HTML generado.

{{< image
    gallery="true"
    image1="image:javadoc.png" optionsthumb1="300x200" title1="Artefacto generado con la documentación javadoc"
    caption="Artefacto generado con la documentación javadoc" >}}

{{< sourcecode git="blog-ejemplos/tree/master/Javadoc" command="./gradlew build" >}}

{{% /post %}}


