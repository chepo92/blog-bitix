---
pid: 145
title: "Incluir información de la versión en el artefacto distribuible con Gradle"
url: "/2016/05/incluir-informacion-de-la-version-en-el-artefacto-distribuible-con-gradle/"
date: 2016-05-27T18:00:00+02:00
updated: 2016-05-27T21:00:00+02:00
sharing: true
comments: true
language: "es"
tags: ["blog-stack", "java", "planeta-codigo", "programacion"]
summary: "Tener trazabilidad entre el código fuente y el código que se está ejecutando en el entorno de producción es importante para saber cual es el origen de alguna excepción o error que se produzca. Con Gradle podemos conseguir esta trazabilidad haciendo unas pocas modificaciones al _script_ de construcción."
---

{{% post %}}
{{< links >}}
{{< postslinks >}}

{{< logotype image1="gradle.png" title1="Gradle" image2="java.png" title2="Java" >}}

Toda aplicación en último término genera un artefacto destinado a ejecutarse en el entorno de producción o un entregable a su destinatario. En Java según el tipo de aplicación el artefacto es un archivo _jar_ ejecutable, un archivo _war_ si es una aplicación web, un archivo _zip_ si proporcionamos el código fuente o la documentación en formato Javadoc de las clases del proyecto. Un aspecto importante que tarde o temprano nos interesará conocer es que versión de la aplicación y por tanto que código está desplegada en el entorno de producción. Con [Gradle][gradle] no es muy complicado añadir la suficiente información para conseguir esta trazabilidad.

La forma tradicional es dar un número de versión al proyecto, hay diferentes nomenclaturas dependiendo del grado de precisión que necesitemos, suele bastar versión mayor, versión menor, y corrección de errores, los tres números que se van incrementando. Si usamos [Jenkins][jenkins] para construir los artefactos nos puede interesar conocer el número de _build_ que lo produjo o la fecha de creación. También nos puede interesar conocer el _hash_ del último _commit_ del código fuente del artefacto. Por otro lado puede que queramos que la aplicación nos informe de la versión que se está ejecutando ya que en algunas corporaciones el acesso al entorno de producción está restringido a sus administradores.

Para conseguir esta trazabilidad haremos dos modificaciones al archivo de construcción de Gradle, modificar el nombre del artefacto con el nombre de la _build_ y el _hash_ del _commit_ e incluir en él un archivo _properties_ con la información de la versión con el que la aplicación sea capaz de informar que versión es la que se está ejecutando. El _hash_ del _commit_ de [Git][git] se obtiene con el comando <code>git log -n 1 --format=%h</code> ejecutando con las facilidades que proporciona [Groovy][groovy].

El nombre del artefacto se modifica con una clase cuyo método _toString()_ proporciona la versión que podemos asignar a la propiedad _version_ de la clase [Project](https://docs.gradle.org/current/javadoc/org/gradle/api/Project.html) definida con el archivo de construcción Gradle. Para proporcionar la información de la versión en la aplicación se incluye un archivo al construir el artefacto modificando la tarea _jar_ y generando el archivo con la tarea _createBuildInfoFile_. Este es el archivo de construcción de Gradle y la clase que contiene la información de la versión que se coloca en el directorio _buildSrc_.

{{< gist picodotdev 32f538f675ec91a88dac1178ab20c402 "build.gradle" >}}
{{< gist picodotdev 32f538f675ec91a88dac1178ab20c402 "ProjectVersion.groovy" >}}

En el caso de un artefacto _jar_ Gradle lo genera en _build/libs/GradleVersion-1.0.b42.fea4d2f.jar_. Ejecutando el _jar_ con <code>java -jar build/libs/GradleVersion-1.0.b42.77c083e.jar</code> cuya clase con el método _main_ informa de la versión leyendo el archivo _properties_ incluído en el _jar_ obtenemos la siguiente salida en la terminal.

{{< gist picodotdev 32f538f675ec91a88dac1178ab20c402 "Main.java" >}}

<div class="media" style="text-align: center;">
    {{< figure pid="145" image1="gradle-version.png" thumb1="gradle-version-thumb.png" title1="Artefacto distribuible con información de versión" >}}
</div>

En este caso el artefacto que he usado ha sido un archivo _jar_ si se tratase de una aplicación web y de un archivo _war_ en el archivo de construcción de Grade se puede aplicar esto de forma similar. La aplicación podría devolver la versión como una cabecera <abbr title="HyperText Transfer Protocol">HTTP</abbr> o el en código fuente de <abbr title="HyperText Markup Language">HTML</abbr> como un comentario que genere sus páginas web.

El libro <a rel="nofollow" href="https://www.amazon.es/gp/product/1617291307/ref=as_li_ss_tl?ie=UTF8&camp=3626&creative=24822&creativeASIN=1617291307&linkCode=as2&tag=blobit-21">Gradle in Action</a><img src="https://ir-es.amazon-adsystem.com/e/ir?t=blobit-21&l=as2&o=30&a=1617291307" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> proporciona una aplicación más detallada de muchos conceptos de Gradle, otro buen punto de partida es la propia [documentación de Gradle](https://docs.gradle.org/current/userguide/userguide.html).

<div class="media-amazon" style="text-align: center;">
    <iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=blobit-21&o=30&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=1617291307&internal=1" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
</div>

{{% code git="blog-ejemplos/tree/master/GradleVersion/" command="export BUILD_NUMBER=42 && ./gradlew build" %}}

{{% reference %}}
{{< links >}}
{{< postslinks >}}
* [Herramienta de construcción Gradle][elblogdepicodev-98]
* [Usar Gradle mediante Gradle wrapper][elblogdepicodev-100]
* [Ejemplo de multiproyecto con Gradle][blogbitix-96]
{{% /reference %}}

{{% /post %}}
