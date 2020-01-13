---
pid: 121
type: "post"
title: "Aplicación web con Spark framework y Java"
url: "/2016/01/aplicacion-web-con-spark-framework-y-java/"
date: 2016-01-23T16:00:00+01:00
updated: 2016-01-24T12:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:sparkjava.png"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Spark _framework_ es un _microframework_ web para Java que además hace uso de las novedades introducidas en la versión 8 del lenguaje. Para una aplicación no compleja o de un tamaño reducido permite desarrollar con su sencillez la funcionalidad de la aplicación inmediatamente y una arquitectura liviana."
---

{{% post %}}

{{< logotype image1="sparkjava.png" title1="Spark" width1="200" proportion1="1" image2="java.svg" >}}

La cantidad de _frameworks_ web disponibles en Java incluso para la misma tarea es notable, a veces cuesta decidirse por uno, sin embargo, tampoco es cuestión de elegir cualquiera. Deberemos evaluar las necesidades de la aplicación y las opciones que consideramos como adecuadas. [Spark Framework][sparkjava] es un _microframework_ simple y sencillo, sin muchas de las funcionalidades de otras opciones más completas y complejas y que quizá no necesitemos. Su funcionalidad es suficiente capaz para servirnos en múltiples casos, uno de ellos es una <abbr title="Application Programming Interface">API</abbr> <abbr title="Representational State Transfer">REST</abbr>, otro una página web dinámica sencilla, prototipos funcionales, ... su sencillez hace que podamos empezar a hacer cosas en poco tiempo. Spark es un _framework_ muy sencillo al estilo de otros disponibles en otros lenguajes pero para la plataforma [Java], ofrece soporte para las [nuevas características introducidas en la versión 8 de Java][blogbitix-17] que facilitan la tarea de programación como las _lambdas_.

Con la aparición de los dispositivos móviles algunas aplicaciones están cambiando su arquitectura. Para evitar duplicar funcionalidades si la aplicación es accedida mediante un navegador, una aplicación de escritorio, mediante un dispositivo móvil en el que queremos aprovecharnos de sus características nativas o queremos que una tercera parte se integre con la aplicación las aplicaciones, en vez de generar <abbr title="HyperText Markup Language">HTML</abbr> en el servidor ofrecen una API REST con la que todos estos clientes se comunican para solicitar los datos o realizar las operaciones que necesitan, una vez que los clientes obtienen los datos estos presentan la información adecuadamente según el dispositivo.

En Java podemos desarrollar una [interfaz REST usando RESTEasy][elblogdepicodev-142] pero también tenemos otras opciones, una Spark. En este artículo comentaré cómo hacer un ejemplo hola mundo usando Spark como opción si no necesitamos todas las funcionalidades que ofrecen otros _frameworks_ más complejos y de mayor tamaño.

{{< code file="HolaMundoSpark.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

Spark ofrece un marco de trabajo en el que podemos crear rutas con las que asociar URLs con las acciones necesarias para devolver el resultado y las funcionalidades básicas de la parte de la interfaz web como acceso a la [Request](http://sparkjava.com/documentation.html#request) y [Response](http://sparkjava.com/documentation.html#response), [Cookies](http://sparkjava.com/documentation.html#cookies), [Sessiones](http://sparkjava.com/documentation.html#sessions), [Filtros](http://sparkjava.com/documentation.html#filters), [Redirecciones](http://sparkjava.com/documentation.html#redirects), [manejo de excepciones](http://sparkjava.com/documentation.html#exception-mapping) o servir [recursos estáticos](http://sparkjava.com/documentation.html#static-files) y algunas integraciones para generar HTML con algunas librerías de plantillado como [Thymeleaf][thymeleaf], [Freemarker][freemarker] o [Mustache][mustache] entre otras, la [documentación](http://sparkjava.com/documentation.html) en unas pocas horas se lee completamente.

Aunque en una aplicación REST no será necesario usar vistas con plantillas ya que el resultado más comúnmente empleado para proporcionar los datos es <abbr title="JavaScript Object Notation">JSON</abbr> probablemente sí que necesitemos usar persistencia en una base de datos con [Hibernate][hibernate] o mejor aún con [jOOQ][jooq] o para facilitarnos la vida de programación queramos disponer de _Inversion of Control_ e inyección de dependencias, la opción más común es emplear el contenedor de servicios [Spring][spring] con la que además podremos proporcionar transacciones si nos conectamos a una base de datos relacional, seguridad también con Spring o con [Shiro][shiro], [Spring Boot][spring-boot] como forma de iniciarlizar la aplicación, [Spring Cloud Config][spring-cloud-config] para configuración en múltiples entornos, [Spring Boot Actuator][spring-boot-actuator] para obtener métricas... en definitiva tendremos libertad de elegir las librerías que consideremos adecuada para la tarea aunque la responsabilidad de realizar la integración será nuestra. Al final del artículo incluyo enlaces comentando varias de estas librerías específicamente.

{{< sourcecode git="blog-ejemplos/tree/master/HolaMundoSpark" command="./gradlew run" >}}

En la dirección http://127.0.0.1:4567/hola obtendremos el mensaje de este ejemplo.

Otra opción usando Java u otros varios lenguajes para los que se ofrece soporte, basado en la programación reactiva y más escalable si llegamos a ese punto de necesidad es [Vert.x que describo y muestro en otro ejemplo básico][blogbitix-120].

{{< reference >}}
* [Ejemplo sencillo de servicio web con RESTEasy][elblogdepicodev-142]
* [Cliente javascript y java de servicio web REST con RESTEasy ][elblogdepicodev-143]
* [Devolver xml, json o html con RESTEasy ][elblogdepicodev-144]
* [Integración de Apache Tapestry con RESTEasy ][elblogdepicodev-145]
* [Alternativa a Hibernate u ORM y ejemplo de jOOQ][blogbitix-82]
* [Aplicación Java autocontenida con Spring Boot][blogbitix-103]
* [Múltiples esquemas o bases de datos con jOOQ y Spring en Java][blogbitix-106]
* [Obtener datos de múltiples tablas con jOOQ][blogbitix-109]
* [Configuración de una aplicación en diferentes entornos con Spring Cloud Config][blogbitix-112]
* [Información y métricas de la aplicación con Spring Boot Actuator][blogbitix-113]
* [Steps toward the glory of REST](https://martinfowler.com/articles/richardsonMaturityModel.html)
* [Hypertext Application Language](http://stateless.co/hal_specification.html)
{{< /reference >}}

{{% /post %}}
