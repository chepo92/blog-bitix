---
pid: 29
type: "post"
title: "Iniciar rápidamente aplicación con Apache Tapestry"
url: "/2014/06/iniciar-rapidamente-aplicacion-con-apache-tapestry/"
date: 2014-06-20T23:08:07+02:00
updated: 2015-05-27T23:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:apache-tapestry-5.svg"
tags: ["java", "programacion", "tapestry", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="apache-tapestry-5.svg" title="Apache Tapestry" width="400" >}}

Un proyecto web en Java requiere de unos cuantos archivos con cierta estructura que nos puede llevar un tiempo en crearlos. Normalmente cuando empezamos un nuevo proyecto solemos basarnos en otro existente  copiando y pegando contenido de él. Pero ademas de tiempo podemos cometer errores o no seguir algunas convenciones propias de Java o del _framework_ web que usemos. Para un proyecto grande esa dedicación al inicio del proyecto no nos importará pero para un proyecto pequeño o para hacer una prueba puede que queramos tener algo más rápido y con menos esfuerzo para estar en disposición de empezar a desarrollar en muy poco tiempo.

Para crear el esqueleto de una aplicación rápidamente en [Apache Tapestry](http://tapestry.apache.org/) hay disponible un arquetipo de [Maven](http://maven.apache.org/) que puede generar una aplicación en unos pocos minutos. Para usarlo deberemos instalar maven previamente. Una vez instalado Maven basta con que usemos el siguiente comando.

{{< code file="mvn.sh" language="bash" options="" >}}

El comando nos presentará un montón de arquetipos, el propio de Tapestry se corresponde con una opción que deberemos buscar, org.apache.tapestry:quickstart. Además, del arquetipo a usar se nos pedirá el grupo de la aplicación y nombre de artefacto, para el ejemplo usaré como grupo io.github.picodotdev.bitix y como nombre de artefacto iniciorapido. También nos pedirá la versión y finalmente el paquete de las clases, podemos dejar las opciones por defecto.

{{< image
    gallery="true"
    image1="image:arquetipos-maven.png" optionsthumb1="300x200"
    image2="image:arquetipos-tapestry.png" optionsthumb2="300x200" >}}
{{< image
    gallery="true"
    image1="image:arquetipo-tapestry.png" optionsthumb1="300x200" >}}

Aunque el arquetipo lo realizamos con Maven los archivos que genera son válidos tanto para trabajar con Maven como con [Gradle](http://www.gradle.org/), una vez que tenemos la aplicación generada podemos usar el que prefiramos, probablemente mejor Gradle. Los archivos generados son los siguientes:

{{< image
    gallery="true"
    image1="image:archivos-generados.png" optionsthumb1="300x200" title1="Terminal al iniciar la aplicación" >}}

Una vez generada la aplicación podemos iniciarla con un servidor embebido [Jetty](http://www.eclipse.org/jetty/) con la aplicación desplegada en él ya usando [Gradle](http://www.gradle.org/):

{{< code file="build.gradle" language="groovy" options="" >}}

Y accediendo con el navegador a la URL que nos indica Tapestry al final de las trazas veremos la aplicación en funcionamiento.

{{< image
    gallery="true"
    image1="image:inicio-aplicacion-terminal.png" optionsthumb1="300x200" title1="Terminal al iniciar la aplicación"
    image2="image:inicio-aplicacion-navegador.png" optionsthumb2="300x200" title2="Aplicación en el navegador" >}}

Probablemente necesitaremos configurar muchas cosas adicionales como usar [Tomcat como servidor embebido](https://github.com/bmuschko/gradle-tomcat-plugin) en vez de Jetty o añadir la [configuración necesaria para ejecutar los teses unitarios y de integración](https://elblogdepicodev.blogspot.com.es/2013/06/pruebas-unitarias-y-de-integracion-en-apache-tapestry.html), Tapestry no es un _framework_ _fullstack_ y será responsabilidad nuestra disponer de esas características si necesitamos. En definitiva, con este arquetipo de Maven en unos pocos minutos y con poco esfuerzo podemos disponer de una aplicación Apache Tapestry a partir de la que empezar a desarrollar.

{{< plugintapestry >}}

{{< reference >}}
* [Libro PlugIn Tapestry][blogbitix-12]
* [Documentación sobre Apache Tapestry](https://elblogdepicodev.blogspot.com.es/2010/05/documentacion-sobre-apache-tapestry.html)
{{< /reference >}}

{{% /post %}}
