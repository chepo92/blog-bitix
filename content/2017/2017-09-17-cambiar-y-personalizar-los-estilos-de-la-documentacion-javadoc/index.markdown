---
pid: 262
type: "post"
title: "Cambiar y personalizar los estilos de la documentación Javadoc"
url: "/2017/09/cambiar-y-personalizar-los-estilos-de-la-documentacion-javadoc/"
date: 2017-09-16T22:00:00+02:00
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

La documentación generada por [la herramienta Javadoc][blogbitix-259] se puede adaptar a las necesidades propias ya que tiene mecanismos para extenderla. [Crear un _taglet_ propio][blogbitix-261] es una forma pero también se pueden modificar los estilos aplicados al HTML generado, por ejemplo, para adaptar el Javadoc a los colores de la organización o para incluir un logotipo en la cabecera o un texto en el pie de página.

El comando _javadoc_ con el que se genera la documentación posee opciones para modificar la cabecera, el pie de página o usar una hoja de estilos propia. Estas opciones son  _-header_, _-footer_ y _-stylesheetfile_. Un punto de partida para modificar los estilos es usar la hoja de estilos generada por defecto, realizar en ella las modificaciones oportunas y finalmente indicar que se use con el opción _-stylesheetfile_.

En el caso de este ejemplo en vez de usar el color azul por defecto he modificado la hoja de estilos para que sea uno verde. En los cambios he partido de la hoja de estilos original del _javadoc_ e inspeccionando los elementos con las herramientas del navegador para sustituir sus colores por otros de una paleta de colores basada en el verde en la que cambia la tonalidad de color hacia más claro. También se puede modificar la cabecera y el pie de página para incluir una nota con un mensaje de derechos de autor o un enlace y añadir nuevos estilos para el _taglet_ _todo_.

<div style="float: left; width: 50px; height: 50px; background: rgb(96, 177, 79);"></div>
<div style="float: left; width: 50px; height: 50px; background: rgb(116, 197, 99);"></div>
<div style="float: left; width: 50px; height: 50px; background: rgb(136, 217, 119);"></div>
<div style="float: left; width: 50px; height: 50px; background: rgb(156, 237, 139);"></div>
<div style="float: left; width: 50px; height: 50px; background: rgb(176, 255, 159);"></div>
<div style="float: left; width: 50px; height: 50px; background: rgb(196, 255, 179);"></div>
<div style="float: left; width: 50px; height: 50px; background: rgb(216, 255, 199);"></div>
<div style="float: left; width: 50px; height: 50px; background: rgb(236, 255, 219);"></div>
<div style="clear: both;"></div>

{{< code file="stylesheet.css" language="CSS" options="" >}}

La [tarea de Gradle para generar la documentación Javadoc](https://docs.gradle.org/current/dsl/org.gradle.api.tasks.javadoc.Javadoc.html) posee [opciones](https://docs.gradle.org/current/javadoc/org/gradle/external/javadoc/StandardJavadocDocletOptions.html) equivalentes al comando _javadoc_, unas de ellas como ejemplo son _footer_ y _bottom_ que añaden un texto en en el pie de página de cada página.

{{< code file="build.gradle" language="groovy" options="" >}}

{{< image
    gallery="true"
    image1="image:javadoc-1.png" optionsthumb1="300x200" title1="Estilos personalizados de la documentación Javadoc"
    image2="image:javadoc-2.png" optionsthumb2="300x200" title2="Estilos personalizados de la documentación Javadoc"
    image3="image:javadoc-3.png" optionsthumb3="300x200" title3="Estilos personalizados de la documentación Javadoc"
    caption="Estilos personalizados de la documentación Javadoc" >}}
{{< image
    gallery="true"
    image1="image:javadoc-jdk-1.png" optionsthumb1="300x200" title1="Estilos por defecto de la documentación Javadoc"
    image2="image:javadoc-jdk-2.png" optionsthumb2="300x200" title2="Estilos por defecto de la documentación Javadoc"
    caption="Estilos por defecto de la documentación Javadoc" >}}

El comando _javadoc_ tiene una buena cantidad de opciones, con la opción _-help_ se obtiene una listado y descripción de cada una de ellas. Dependiendo del destinatario de la documentación, se pueden limitar las clases que son incluidas en el Javadoc si por ejemplo solo se quiere ofrecer la documentación de la parte pública.

{{< code file="javadoc-help.sh" language="bash" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/Javadoc" command="./gradlew javadoc" >}}

{{< reference >}}
* [Documentacion Javadoc del JDK][javadoc-8]
{{< /reference >}}

{{% /post %}}
