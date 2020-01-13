---
pid: 27
type: "post"
title: "Ejecutar Apache Tapestry en el servidor de aplicaciones WildFly"
url: "/2014/06/ejecutar-apache-tapestry-en-el-servidor-de-aplicaciones-wildfly/"
date: 2014-06-06T20:58:25+02:00
updated: 2015-05-27T23:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:apache-tapestry-5.svg"
tags: ["software", "java", "programacion", "tapestry", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="apache-tapestry-5.svg" title1="Apache Tapestry" width1="400" image2="wildfly.svg" title2="WildFly" width2="200" >}}

Los class loaders del [servidor de aplicaciones JBoss/WildFly][blogbitix-10] habitualmente han dado algún problema en la ejecución de las aplicaciones y la carga de clases. En versiones antiguas como la 4 se podían producir conflictos entre las librerías de las aplicaciones y las librerías instaladas en el servidor ya que en [JBoss](http://jbossas.jboss.org/) se buscaba las clases por defecto y primero en el class loader del servidor en vez de en el classloader de la aplicación (war). Ya en las últimas versiones como JBoss 7 y [WildFly](http://wildfly.org/) la forma de cargar las clases es más parecido al modelo habitual que se sigue en las aplicaciones Java EE y en servidores como Tomcat buscando primero en el directorio classes WEB-INF/classes y entre las librerías de la carpeta WEB-INF/lib del archivo war. Además, con la inclusión de JBoss Modules se puede seguir un esquema OSGi con lo que incluso podríamos usar simultaneamente en el servidor diferentes versiones de la misma librería.

Sin embargo, a pesar de seguir el esquema estándar de buscar las clases y usar OSGi para que Tapestry encuentre los archivos que necesita, como plantillas, imágenes, literales que pueden estar embebidos en los archivos jar de librerías es necesario hacer algunas modificaciones. En una [guía de uso de Tapestry con JBoss](http://wiki.apache.org/tapestry/HowToRunTapestry5OnJBoss7Dot1) se explica como conseguir hacer funcionar una aplicación Tapestry tanto en JBoss 7 como en WildFly 8. La solución consiste en proporcionar una clase para que encuentre correctamente los archivos que Tapestry necesita y esta clase será la que veremos en el siguiente ejemplo.

Con la clase que permite funcionar las aplicaciones Tapestry en JBoss/WildFly junto con un poco de configuración para el contenedor de dependencias definido en un módulo será suficiente. La clase es la siguiente:

{{< code file="WildFlyClasspathURLConverter.java" language="java" options="" >}}

La configuración adicional para el contenedor de dependencias es para que Tapestry use esta nueva clase:

{{< code file="AppModule.java" language="java" options="" >}}

El ContextListener que nos permite acceder al ServletContext es el siguiente:

{{< code file="ContextListener.java" language="java" options="" >}}

Además hemos de incluir en el proyecto un par de librerías y usar al menos la versión 16 de guava si se incluye como dependencia en el war:

{{< code file="build.gradle" language="groovy" options="" >}}

En la [aplicación de ejemplo](https://github.com/picodotdev/elblogdepicodev/tree/master/PlugInTapestry) también deberemos actualizar la versión de guava al menos a la versión 16. Y esta clase y configuración es suficiente para que "mágicamente" se solucionen los problemas de las aplicaciones Tapestry con el servidor de aplicaciones JBoss/WildFly. Si no usamos lo indicado en este artículo al acceder al acceder a la aplicación fallaría con una excepción.

{{< plugintapestry >}}

{{< reference >}}
* [Libro PlugIn Tapestry][blogbitix-12]
* [Documentación sobre Apache Tapestry](https://elblogdepicodev.blogspot.com.es/2010/05/documentacion-sobre-apache-tapestry.html)
* [Servidor de aplicaciones JBoss/WildFly][blogbitix-10]
* [http://wiki.apache.org/tapestry/HowToRunTapestry5OnJBoss7Dot1](http://wiki.apache.org/tapestry/HowToRunTapestry5OnJBoss7Dot1)
{{< /reference >}}

{{% /post %}}
