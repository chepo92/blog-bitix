---
pid: 136
type: "post"
title: "Aplicación de ejemplo usando varias especificaciones de Java EE 7"
url: "/2016/04/aplicacion-de-ejemplo-usando-varias-especificaciones-de-java-ee-7/"
date: 2016-04-08T17:00:00+02:00
updated: 2016-09-17T12:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java-ee.png"
tags: ["java", "planeta-codigo", "programacion"]
series: ["java-platform"]
summary: "Más lentamente que otras tecnologías Java EE en cada nueva versión sigue adaptándose a las nuevas tendencias en el desarrollo y facilitando la programación de aplicaciones de entidad empresarial. Java EE está formado por un conjunto de especificaciones que resuelven en gran medida muchas de las necesidades funcionales de las aplicaciones ya sean de persistencia, seguridad, mensajería, lógica de negocio, transaccionalidad, inyección de dependencias, presentación HTML, JSON, WebSockets, conexión a base de datos, envío de correos electrónicos o concurrencia. En este artículo mostraré un ejemplo usando varias de estas especificaciones y proporcionaré el código fuente completo."
---

{{% post %}}

{{< logotype image1="java-ee.png" title1="Java EE" width1="200" image2="java.svg" >}}

Comentaba las [novedades y nuevas características de Java EE 7][blogbitix-131] que en el 2013 trajo esta nueva versión para el desarrollo de aplicaciones empresariales con el lenguaje Java. Hacía una descripción y cuáles eran las especificaciones y versiones de las mismas que proporcionan la funcionalidades comunes a muchas aplicaciones. En este artículo mostraré un ejemplo con código con la implementación de una aplicación usando varias de las especificaciones de Java EE.

El ejemplo consistirá en una supuesta aplicación sencilla para hacer la lista de la compra de un supermercado usando las siguientes especificaciones <abbr title="Java Server Faces">JSF</abbr>, <abbr title="Java Persistence API">JPA</abbr>, <abbr title="Java Transactions API">JTA</abbr>, Security, <abbr title="Contexts and Dependency Injection">CDI</abbr>, <abbr title="Enterprise Java Bean">EJB</abbr>, <abbr title="Representational State Transfer">REST</abbr>, <abbr title="Java API for RESTful Web Services">JAX-RS</abbr>, <abbr title="JavaScript Object Notation">JSON</abbr>, eventos CDI y WebSockets. El comprador irá seleccionando productos y la cantidad de los mismos de su compra, la aplicación le informará del precio de los productos seleccionados hasta el momento y finalmente para hacer la compra iniciará sesión. En el momento que se realice una compra el _stock_ de productos se actualizará en todos los clientes conectados al supermercado.

Este ejemplo está relacionado con otros artículos que he escrito como [Ejemplo de multiproyecto con Gradle][blogbitix-96], [Novedades y nuevas características de Java 8][blogbitix-17] y alguno quizá considere de la misma forma que sigue habiendo más de [10 razones para seguir usando Java][blogbitix-81].

Para facilitar el desarrollo de la aplicación en el lado cliente usaré algunas librerías JavaScript de forma similar al ejemplo de la [lista de tareas con Backbone y React junto con RequireJS][blogbitix-20]. Seleccionados los productos, la compra se realizará usando una API REST intercambiando los datos con formato JSON, se persistirá en la base de datos con JPA actualizándose en ese momento el _stock_ de los productos de lo que se encargará un EJB para controlar esta pequeña lógica de negocio, si no hay _stock_ suficiente de un producto se producirá una excepción y devolverá un código de estado adecuado en la petición HTTP, al realizar la compra se generará un mensaje evento CDI que desencadenará la actualización del _stock_ de los usuarios conectados usando WebSockets. La página del listado de productos y el formulario de autenticación se generará usando la tecnología de presentación JSF.

{{< image
    gallery="true"
    image1="image:supermarket-java-ee-7.png" optionsthumb1="300x200" title1="Supermarket con Java EE 7"
    caption="Supermarket con Java EE 7" >}}

Veamos primero la página inicial índice con el listado de productos generada con JSF. Obtiene el listado de productos y genera el HTML del mismo, además carga los JavaScripts necesarios para que la aplicación funcione en el navegador del cliente.

{{< code file="index-1.html" language="html" options="" >}}
{{< code file="template.html" language="html" options="" >}}
{{< code file="IndexBean.java" language="java" options="" >}}

El JavaScript añade la lógica en el cliente para ir realizando la lista de la compra usando poco más que [jQuery][jquery] y [Require JS][requirejs], además, inicializa el WebSocket para recibir los mensajes desde el servidor con la actualizaciones del stock de los productos. Realizada la lista de productos se enviará un petición REST al servidor para formalizar la compra.

{{< code file="main-index.js" language="JavaScript" options="" >}}

Las peticiones de compras en el servidor se procesarán por un _endpoint_ de una interfaz REST que usando un EJB con la lógica de negocio para persistir la compra en una base de datos relacional y actualizar los _stocks_. Actualizados los _stocks_ y persistida la compra se genera un evento CDI con el hecho de que se ha producido una compra.

{{< code file="PurchasesResource.java" language="java" options="" >}}
{{< code file="ApplicationConfig.java" language="java" options="" >}}
{{< code file="NoStockExceptionHandler.java" language="java" options="" >}}

La aplicación irá registrando los usuarios conectados a la aplicación con el objetivo de enviarles las actualizaciones de _stock_ de los productos y con un evento CDI con la notificación de que se ha producido una compra que ha actualizado el _stock_ de algunos productos enviará los nuevos _stocks_ a los clientes con la tecnología WebSocket en un mensaje con datos en JSON que soportan los navegadores y Java EE.

{{< code file="Supermarket.java" language="java" options="" >}}
{{< code file="SupermarketLocal.java" language="java" options="" >}}

Usando la API de seguridad de Java EE autenticaremos al comprador o vendedor, la página se personalizará según el rol del usuario y en el servidor con la anotación [RolesAllowed](https://docs.oracle.com/javaee/7/api/javax/annotation/security/RolesAllowed.html) y métodos _post_, _get_, _list_ se limitarán las acciones que pueden realizar según sus roles, su uso se puede ver en los listados de código anteriores. Con la página de inicio de sesión se autenticará al usuario de forma programática usando <code>request.login(username, password);</code>. Esta acción es recomendable hacerla usando el [protocolo seguro HTTPS con TLS a configurar en el servidor][blogbitix-14] para que la contraseña se transmita cifrada entre el cliente y el servidor.

{{< code file="login.html" language="html" options="" >}}
{{< code file="LoginBean.java" language="java" options="" >}}

La aplicación está dividida en varios módulos construidos con la [herramienta de automatización Gradle][elblogdepicodev-98] siendo una aplicación <abbr title="Enterprise ARchive">EAR</abbr> estándar estando constituida por un módulo para los EJB, otro para la aplicación web con un <abbr title="Web  ARchive">WAR</abbr>. Un cliente podría conectarse directamente a la aplicación sin mediación de un navegador web, esto último sería lo que emplearíamos si fuese una [aplicación de escritorio empleando Java FX][blogbitix-100].

{{< code file="SupermarketClient.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:aplicacion-cliente.png" optionsthumb1="300x200" title1="Aplicación cliente Supermarket"
    caption="Aplicación cliente Supermarket" >}}

El conjunto de especificaciones de Java EE proporciona una solución para la mayoría de funcionalidades que necesita una aplicación pero también podemos sustituir alguna y combinarlas con otras de las muchas librerías o _frameworks_ disponibles en la plataforma Java. Por ejemplo, como _framework_ en vez de usar Servlet y JSP o JSF podemos usar [Apache Tapestry][blogbitix-12], [Vert.x][blogbitix-120], [Spark][blogbitix-121], [Struts][struts], [Grails][grails], ... dependiendo de las necesidades de la aplicación, su complejidad y nuestras preferencias. Como [alternativa al ORM de JPA o JDBC se puede usar jOOQ][blogbitix-82]. [RabbitMQ][rabbitmq] en vez de JMS o [Spring][spring] en vez de CDI, EJB y JTA.

Algunos libros sobre Java EE que he leído y que me han gustado han sido los siguientes, [Java EE 7 Essentials](https://amzn.to/2SW6cw2) hace un repaso detallado pero no muy profundo para hacerse una idea bastante buena del conjunto de especificaciones de Java EE. Otro buen libro es [Java EE 7 Development with WildFly](https://amzn.to/2T0MlvA) que entra más en detalle en cada una de las especificaciones. El [tutorial oficial de Java EE 7](https://docs.oracle.com/javaee/7/tutorial/) también es un buen punto de partida. <a target="_blank" href="https://amzn.to/2QLs7TX">Libros sobre Java EE 7</a> hay muchos por la cantidad de tiempo que ya tiene, es recomendable leer alguno que esté actualizado a las últimas versiones.

{{< amazon
    linkids="8f42c49cd2ee85af9d35494fe93b878b,85fd41d16bd855bb3954171284a6b637"
    asins="1782171983,1782171983" >}}

Con Java EE 6 y 7 ciertas partes de configuración se pueden realizar con anotaciones en vez de con XML sin embargo aún no ha desaparecido completamente aunque si reducido considerablemente.

Ejecutar este ejemplo require instalar previamente el servidor de aplicaciones [WildFly][wildfly] e iniciarlo con <code>./standalone.sh -c standalone-full.xml</code>. Iniciado el servidor y desplegada la aplicación con el siguiente comando de Gradle se puede acceder a ella con el navegador en la dirección _https\://localhost:8443/war/_ teniendo el protocolo seguro configurado.

{{< sourcecode git="blog-ejemplos/tree/master/JavaEE7" command="./gradlew build deploy" >}}

En el futuro Java EE 8 está planificado un _framework_ basado en acciones en vez de componentes como en JSF, también el soporte para [el protocolo HTTP/2][blogbitix-127].

{{< reference >}}
* [Introducción y nuevas características de Java EE 7][blogbitix-131]
* [Ejemplo de API REST en Java con JAX-RS y Spring Boot][blogbitix-178]
* [Tutorial Java EE 7](https://docs.oracle.com/javaee/7/tutorial/)
* [Novedades y nuevas características de Java 8][blogbitix-17]
* [10 razones para seguir usando Java][blogbitix-81]
* [Libro sobre desarrollo de aplicaciones con Apache Tapestry][blogbitix-12]
* [Ejemplo lista de tareas con Backbone y React][blogbitix-20]
* [Alternativa a Hibernate u ORM y ejemplo de jOOQ][blogbitix-82]
* [Introducción a JavaFX, aplicaciones de escritorio en Java][blogbitix-100]
* [Herramienta de construcción Gradle][elblogdepicodev-98]
* [Ejemplo de multiproyecto con Gradle][blogbitix-96]
{{< /reference >}}

{{% /post %}}
