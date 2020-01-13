---
pid: 334
type: "post"
title: "La librería Log4j para emitir trazas en aplicaciones Java"
url: "/2018/07/la-libreria-log4j-para-emitir-trazas-en-aplicaciones-java/"
aliases: ["/2018/07/la-libreria-log4j2-para-emitir-trazas-en-aplicaciones-java/"]
date: 2018-07-15T01:00:00+02:00
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

La librería [Log4j][log4j] es la librería sucesora de _log4j_ y [logback][logback] para emitir las trazas de depuración e información indispensables cuando son requeridas en una aplicación Java. Suele usarse en combinación [slf4j][slf4j] ya que esta permite cambiar de librería de _logging_ subyacente sin hacer ningún cambio en la aplicación.

Algunas de las nuevas características de log4j2 son:

* Rendimiento mejorado usando funcionalidades asíncronas en los _loggers_.
* Soporte para múltiples APIs como SL4J, Commongs Logging y java.util.logging (JUL).
* Sin encadenamientos a la librería al poder en cualquier momento usar cualquier librería compatible con SLF4J.
* Recarga automática de la configuración sin perder ninguna traza.
* Filtrado avanzado basado en datos de contexto, marcadores, expresiones regulares y otros componentes.
* Arquitectura basada en _plugins_.
* Soporte de propiedades definidas en archivos de configuración, propiedades del sistema, variables de entorno, el mapa [ThreadContext](https://logging.apache.org/log4j/2.0/log4j-api/apidocs/org/apache/logging/log4j/ThreadContext.html) y datos del evento.
* Soporte de _lambdas_ de Java 8. Las expresiones lambdas no se evalúan si no está activado el nivel de log consiguiendo el mismo efecto que con una sentencia _if_ pero en menos código.
* Niveles de _log_ personalizados fácilmente definibles sin necesidad de realizar subclases.
* Recolección de basura reducida lo que evita presión al recolector de basura y mejora el rendimiento de las aplicaciones.

Por defecto, la [configuración de Log4j](https://logging.apache.org/log4j/2.x/manual/configuration.html) se describe en un archivo _xml_ aunque también soporta definirlo en un formato menos verboso como _yaml_. La siguiente aplicación de [Spring Boot][spring-boot] al iniciarse emite en la consola varios mensajes usando log4j2.

Usando la clase [LogManager](https://logging.apache.org/log4j/2.x/log4j-api/apidocs/org/apache/logging/log4j/LogManager.html) se obtiene una referencia a la clase [Logger](https://logging.apache.org/log4j/2.x/log4j-api/apidocs/org/apache/logging/log4j/Logger.html) con la que se emiten las trazas y que posee diferentes métodos para cada nivel de traza.

Una vez se ha iniciado la aplicación Spring Boot invoca el método _run_ y se emiten las trazas propias de la aplicación después de las que también Spring Boot y otras librerías emiten., en este caso usando [texto en forma de arte ascii][elblogdepicodev-86].

{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}

En el archivo de construcción de la aplicación usando [Gradle][gradle] hay que incluir las dependencias de las librerías.

{{< code file="log4j2.yaml" language="YAML" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

Las trazas son muy importantes por la valiosa información que proporcionan de lo que está sucediendo en una aplicación a los que recurriendo es posible obtener la valiosa información que permite saber que ha sucedido en una determinada acción o que permite descubrir mucho más rápidamente la causa de un error.

En otro artículo ya he comentado [como usar marcadores con sl4j y logback][blogbitix-9] para relacionar trazas que son emitidas en diferentes clases o módulos de la aplicación, también se puede hacer con Log4j. En siguientes artículos comentaré [como transformar un objeto a un mensaje][blogbitix-338] sin necesidad de convertir ese objeto a un String en cada traza de la aplicación donde se use su información y otra forma de relacionar trazas muy útil en aplicaciones web [asignando un indenticador única en cada petición y emitiendolo en todas sus trazas][blogbitix-336], esto permite saber todo lo que ha ocurrido en una petición entre las muchas que se ejecutan concurrentemente por todos los usuarios de la aplicación.

{{< sourcecode git="blog-ejemplos/tree/master/PlugInTapestry" command="./gradlew run" >}}

{{% /post %}}
