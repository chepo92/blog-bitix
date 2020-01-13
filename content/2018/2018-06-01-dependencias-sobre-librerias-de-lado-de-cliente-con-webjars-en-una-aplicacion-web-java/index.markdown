---
pid: 325
type: "post"
title: "Dependencias sobre librerías de lado de cliente con Webjars en una aplicación web Java"
url: "/2018/06/dependencias-sobre-librerias-de-lado-de-cliente-con-webjars-en-una-aplicacion-web-java/"
date: 2018-06-01T17:00:00+02:00
updated: 2018-06-01T21:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion", "tapestry"]
---

{{% post %}}

{{< logotype image1="java.svg" image2="webjars.png" title2="Webjars" width2="250" >}}

Una aplicación web se compone de código de lado de servidor, en el caso de utilizar el lenguaje de programación Java de código Java normalmente utilizando algún de los muchos _framework_ web, por otra parte se compone de código de lado de cliente con una gran variedad de librerías de JavaScript como [jQuery][jquery], [React][react], [Underscore][underscorejs] o [Bootstrap][bootstrap] para los estilos. En las aplicaciones Java las librerías de lado de servidor se gestionan como dependencias del proyecto y con herramientas como [Gradle][gradle] se puede automatizar el descargar la librería de repositorios como [Maven Central][mavencentral] y la versión que se necesite así como hacer sencillo actualizar a una nueva. En el caso de las librerías de lado del cliente con [Webjars][webjars] se consiguen los mismos beneficios.

Los _webjars_ son librerías de extensión _jar_ con los recursos de lado del cliente empaquetados en ellos que en el momento de ser requeridos pueden ser devueltos como un recurso estático por la aplicación, incluyen los archivos JavaScript sin minimizar y minimizados, los archivos _map_ para depuración si minimizados están ofuscados, recursos de estilos CSS o imágenes. Se gestionan como cualquier otra dependencia del proyecto Java lo que proporciona las mismas ventajas de obtener las dependencias de forma automática y hace fácil actualizar a una nueva versión. Por si fuera poco es muy sencillo utilizar _webjars_, para los _frameworks_ más populares se ofrece una pequeña guía de uso en la [documentación](https://www.webjars.org/documentation).

Las librerías más populares de JavaScript o CSS están empaquetadas como _webjars_ en las diferentes versiones y han sido publicadas de forma que es posible añadir la dependencia en la versión concreta que necesite la aplicación. Dado que los _webjars_ se gestionan como una dependencia Java si estos a su vez tiene alguna dependencia sobre otra librería está se incluyen en el proyecto de forma transitiva. El contenido del _webjar_ para _jQuery_ es el siguiente.

{{< code file="jquery-webjar.out" language="plaintext" options="" >}}

En el caso del _framework_ web [Apache Tapestry][tapestry] basado en componentes para el desarrollo de aplicaciones web Java tan solo hay que incluir la dependencia en el proyecto y un poco de configuración en el módulo de la aplicación para el contenedor de dependencias como se indica en la [guía de uso](https://www.webjars.org/documentation#tapestry) con el objetivo que los recursos de los _webjars_ sean servidos.

{{< code file="AppModule.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

Inspeccionando el código fuente de la página devuelta se observa que en el caso de Tapestry la URL generada al solicitar en un _webjar_ es del estilo _https\://localhost:8443/assets/webjars/z941c28a3/requirejs/2.3.5/require.js_.

{{< image
    gallery="true"
    image1="image:tapestry-webjars.png" optionsthumb1="650x450" title1="Apache Tapestry con Webjars"
    caption="Apache Tapestry con Webjars" >}}

Los _webjars_ muy útiles para gestionar las librerías de lado cliente que hacen innecesario descargar manualmente las dependencias, automatizan la descarga, hacen muy sencillo actualizar a nuevas versiones y es muy fácil de usar al no requerir mucha confiración ni ser invasiva. Además, al estar como una dependencia en el archivo de construcción del proyecto queda indicado de forma explícita que el proyecto utiliza y necesita esa librería. Para mi son una herramienta imprescindible.

{{< sourcecode git="blog-ejemplos/tree/master/PlugInTapestry" command="./gradlew run" >}}

{{< plugintapestry >}}

{{< reference >}}
* [Introduction to WebJars](https://www.baeldung.com/maven-webjars)
{{< /reference >}}

{{% /post %}}
