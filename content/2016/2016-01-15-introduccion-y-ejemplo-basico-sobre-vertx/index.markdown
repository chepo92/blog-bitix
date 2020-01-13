---
pid: 120
type: "post"
title: "Introducción y ejemplo básico sobre Vert.x"
url: "/2016/01/introduccion-y-ejemplo-basico-sobre-vertx/"
date: 2016-01-15T15:00:00+01:00
updated: 2016-01-15T20:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:vertx.svg"
tags: ["java", "planeta-codigo", "programacion",]
summary: "Las aplicaciones basadas en eventos y con E/S no bloqueante son más eficientes, requieren menos recursos y son capaces de servir más peticiones o usuarios por unidad de tiempo. En JavaScript su mejor representante es Node.js, en la plataforma JVM uno equivalente es Vert.x. Pero también tiene sus contrapartidas. En el artículo incluiré un pequeño ejemplo de Vert.x que muestre las diferencias con las aplicaciones tradicionalmente basadas en hilos y llamadas a métodos bloqueantes."
---

{{% post %}}

{{< logotype image1="vertx.svg" title1="Vert.x" width1="300" image2="java.svg" >}}

Tradicionalmente las aplicaciones web y los servidores han manejado con un hilo cada petición. Hasta ahora ha funcionado y en muchos casos sigue siendo suficiente para el número de usuarios y peticiones a los que atienden esas aplicaciones. Pero cuando se necesita escalar a un gran volumen de peticiones y usuarios usar hilos es ineficiente y requiere escalar horizontalmente (con más servidores) que tiene costes adicionales y una mayor complejidad en la infraestructura de la aplicación. Dedicar en exclusiva un hilo por petición hasta que esta es atendida es ineficiente ya que las operaciones de  entrada/salida como disco o red como un servidor de base de datos el hilo se bloquea esperando a obtener respuesta del disco o base de datos, recursos que quedan bloqueados. Por otra parte, un cambio de contexto del procesador para pasar de ejecutar un proceso o hilo a otro es una operación costosa comparada con las velocidades de los procesadores y al mismo tiempo agravada por la necesidad de contención entre los hilos en el acceso concurrente a datos.

Para aprovechar en mayor medida la capacidad de cálculo y cada vez mayor de los modernos procesadores están surgiendo servidores y _frameworks_ con principios diferentes, basados en eventos y la [programación reactiva](https://en.wikipedia.org/wiki/Reactive_programming). Unos de los más conocidos es el _runtime_ [Node.js][nodejs] y el servidor web [Nginx][nginx]. La idea de cualquiera de ellas es usar eventos que son procesados por un único hilo (o uno por núcleo del procesador) con ninguna o menor necesidad de contención entre los hilos y usando programación reactiva de modo que las operaciones de E/S no sean bloqueantes. Por otra parte menos hilos necesitarán menos recursos del sistema y también menos cambios de contexto en el procesador. Todo ello hace que usando el mismo sistema las aplicaciones basadas en eventos, programación reactiva y no bloqueantes en la E/S consuman menos memoria y sean capaces de servir más peticiones por una diferencia muy significativa que las aplicaciones basadas en hilos.

Los hilos y las operaciones bloqueantes a pesar de su ineficiencia hacen fácil la programación usando programación imperativa o al menos más que la programación reactiva en las que se usan una función de rellamada o _callback_ por cada operación bloqueante que realicemos. También señalar que un bloqueo en el hilo que procesa las peticiones por un fallo de programación, por una operación que es bloqueante o que en su proceso acapara un tiempo significativo si no es tenida en cuenta impedirá que la aplicación procese eventos y peticiones lo que se traducirá en un aparente denegación de servicio. Esta es la contrapartida de este nuevo paradigma para las aplicaciones.

Teniendo en cuenta estos aspectos una de las opciones de la plataforma JVM es [Vert.x][vertx] que es el equivalente a Node.js en la plataforma JavaScript. Otra de las características de Vert.x es que es políglota de modo que podremos elegir el lenguaje de programación que prefiramos ya sea [Java][java], [JavaScript][javascript], [Groovy][groovy], [Ruby][ruby] o [Ceylon][ceylon]. Hay que tener en cuenta que en su mayor parte las librerías Java no han sido diseñadas para la programación reactiva y no bloqueante, para lo cual Vert.x proporciona varios módulos diseñados con esta idea, en la [página de documentación](https://vertx.io/docs/) están indicados cuales son, su documentación y ejemplos de uso. También Vert.x prescinde de los servidores de aplicaciones y estas se ejecutan siguiendo la nueva tendencia de un proceso por aplicación más alineado con los microservicios.

En el código del siguiente ejemplo emplearé Java por [mis preferencias y motivos para seguir usándolo][blogbitix-81] pero sería similar empleando cualquiera de los otros si prefirieses uno de ellos. El ejemplo _Main.java_ es una aplicación que devuelve un mensaje en la URL _http\://localhost:8080_, el ejemplo _Server.java_ devuelve una cabecera y usa un [Verticle](https://vertx.io/docs/vertx-core/java/#_verticles) y el tercero _Web.java_ acepta un parámetro y usa una plantilla de [Thymeleaf][thymeleaf], finalmente el archivo _build.gradle_ contiene las dependencias necesarias para los tres ejemplos y la construcción del proyecto con [Gradle][gradle].

{{< code file="build.gradle" language="groovy" options="" >}}
{{< code file="Main.java" language="java" options="" >}}
{{< code file="Server.java" language="java" options="" >}}
{{< code file="Web.java" language="java" options="" >}}

La documentación de cada módulo de Vert.x está bastante bien y explicada en los diferentes lenguajes que soporta. Si la documentación no nos es suficiente en el [repositorio de ejemplos](https://github.com/vert-x3/vertx-examples) veremos el código fuente completo de diversas funcionalidades.

{{< sourcecode git="blog-ejemplos/tree/master/HolaMundoVertx" command="./gradlew run" >}}

{{< reference >}}
* [10 razones para seguir usando Java][blogbitix-81]
* [Alternativa a Hibernate u ORM y ejemplo de jOOQ][blogbitix-82]
* [Múltiples esquemas o bases de datos con jOOQ y Spring en Java][blogbitix-106]
* [Obtener datos de múltiples tablas con jOOQ][blogbitix-109]
* [Herramienta de construcción Gradle][elblogdepicodev-98]
* [Usar Gradle mediante Gradle wrapper][elblogdepicodev-100]
* [Ejemplo de multiproyecto con Gradle][blogbitix-96]
* [Aplicación web con Spark _framework_ y Java][blogbitix-121]
{{< /reference >}}

{{% /post %}}
