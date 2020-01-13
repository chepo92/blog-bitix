---
pid: 35
type: "post"
title: "Usar Apache Tapestry en una aplicación «standalone»"
url: "/2014/07/usar-apache-tapestry-en-una-aplicacion-standalone/"
date: 2014-07-31T13:06:58+02:00
updated: 2015-05-30T00:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:apache-tapestry-5.svg"
tags: ["java", "programacion", "tapestry", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="apache-tapestry-5.svg" title="Apache Tapestry" width="400" >}}

[Apache Tapestry][tapestry] es un _framework_ de desarrollo para aplicaciones o páginas web en el que habitualmente se emplea el lenguaje Java y se despliega en un servidor de aplicaciones como entorno de ejecución. Pero Tapestry es una pieza de software que se compone de diferentes partes algunas de las cuales pueden ser utilizadas fuera del contexto de una aplicación web. Este es el caso del contenedor de dependencias que proporciona [IoC](https://en.wikipedia.org/wiki/Inversion_of_control) (IoC, «Inversion of Control») en Tapestry, podemos usarlo en una aplicación «standalone», es decir, en un programa que se inicia con el típico «public static void main(String[] args)» de las aplicaciones Java.

El contenedor de dependencias de Tapestry tiene algunas propiedades interesantes como que dos servicios pueden ser mutuamente dependientes y que se puede contribuir configuración a cualquier servicio para cambiar en cierta medida su comportamiento además de otras características que explico más en detalle en el libro [PlugIn Tapestry][blogbitix-12]. Para usarlo en una un programa que se ejecuta de la linea de comandos usando el main de una clase Java primeramente deberemos incluir en el proyecto la dependencia sobre tapestry-ioc, si usamos [Gradle][gradle] de la siguiente manera:

{{< code file="build-1.gradle" language="groovy" options="" >}}

Una vez que tenemos la dependencia en el programa deberemos iniciar el contenedor IoC e indicarle los diferentes módulos que contendrán la definición de los servicios.

{{< code file="Main-1.java" language="java" options="" >}}

En este caso he usado [Spring para la transacionalidad](https://elblogdepicodev.blogspot.com.es/2013/11/integracion-y-transacciones-con-spring.html) e Hibernate para la persistencia. Después de esto tenemos la referencia al registro de servicios, podemos obtener cualquiera en base a la interfaz que implementa, en este caso el servicio que implementa la interfaz [MainService](https://github.com/picodotdev/blog-stack/blob/master/src/main/java/info/blogstack/services/MainService.java).

{{< code file="Main-2.java" language="java" options="" >}}

Al final de la aplicación deberemos llamar al método shutdown del registro.

{{< code file="Main-3.java" language="java" options="" >}}

Otra cosa que nos puede interesar es poder generar contenido html usando el sistema de plantillas y componentes de Tapestry, ya sea en una aplicación «standalone» o en una aplicación web para enviar el contenido en un correo electrónico o quizá guardarlo en un archivo. Hay muchos sistemas de plantillas, cada _framework_ suele tener uno propio o usar una solución específica como [Thymeleaf](http://www.thymeleaf.org/) pero la mayoría usa un [modelo push en vez de un modelo pull][blogbitix-31], en el caso de Tapestry se emplea el modelo pull que tiene algunas ventajas como explico en el artículo anterior. Si usamos una aplicación Tapestry usándolo también para generar el contenido de los correos o cierto contenido estático evitamos tener que aprender una segunda tecnología además de aprovechar todo el código reutilizable que posiblemente hemos desarrollado en algunos componentes. Para generar el contenido estático que generaría una página en Tapestry tenemos el módulo [Tapestry Offline](https://github.com/uklance/tapestry-offline). Como no está en los repositorio de maven debemos descargarnos el jar e incluir la dependencia como un archivo.

{{< code file="build-2.gradle" language="groovy" options="" >}}

Para generar una página de Tapestry fuera de una petición web y de un servidor de aplicaciones debemos usar el servicio OfflineComponentRenderer. Su uso sería el siguiente:

{{< code file="GeneratorServiceImpl.java" language="java" options="" >}}

Tengo que decir que al generar la página fuera de una petición web tendremos alguna limitación como solo poder usar assets con el prefijo context. Pero esto por lo menos [como he explicado en el caso de Blog Stack][blogbitix-24] no me ha supuesto ningún problema.

Esto quizá no sea lo habitual pero en [Blog Stack](http://www.blogstack.info/) ambas posibilidades me han resultado de gran utilidad al desarrollar el proyecto. Las posibilidades son muchas por ejemplo podríamos usar alguna combinación de esto mismo con el microframework [Spark][sparkjava] si nuestra aplicación estuviese más orientada a una API aunque también podríamos [usarlo junto con RESTEasy](https://elblogdepicodev.blogspot.com.es/2013/03/integracion-tapestry-con-resteasy.htm.html).

{{< plugintapestry >}}

{{< reference >}}
* [Libro PlugIn Tapestry][blogbitix-12]
* [Documentación sobre Apache Tapestry](https://elblogdepicodev.blogspot.com.es/2010/05/documentacion-sobre-apache-tapestry.html)
{{< /reference >}}

{{% /post %}}
