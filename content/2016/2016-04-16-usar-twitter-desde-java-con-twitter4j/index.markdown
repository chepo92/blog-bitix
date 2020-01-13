---
pid: 137
type: "post"
title: "Usar Twitter desde Java con twitter4j"
url: "/2016/04/usar-twitter-desde-java-con-twitter4j/"
date: 2016-04-16T12:30:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

[Twitter][twitter] ofrece una API para realizar las mismas acciones que como usuarios hacemos con su cliente web, desde publicar _tweets_, hacer _retweets_, enviar mensajes directos, leer _timelines_, ... Con la [API REST de twitter](https://dev.twitter.com/rest/public) podemos desde un programa de forma automatizada realizar cualquiera de las anteriores acciones. Por ejemplo, en [Blog Stack][blogstack] cada vez que agrega un artículo de cualquiera de las fuentes se publica un _tweet_ con el título del artículo y el enlace al mismo en la [cuenta de Twitter de Blog Stack][blogstack-twitter]. En este artículo mostraré como desde lenguaje de programación Java podemos usar la API de Twitter para realizar las acciones que deseemos con la librería [twitter4j][twitter4j].

twitter4j nos ofrece una API Java para acceder a la API REST de Twitter de forma más cómoda. Primeramente deberemos crear y registrar una aplicación, esto nos proporcionará varios datos que identificarán a la aplicación y _tokens_ privados para que solo nuestra aplicación en nuestra cuenta pueda realizar las acciones, básicamente son unos datos para autenticar al cliente. La creación de la aplicación se realiza desde la [sección de desarrolladores de twitter] (https://apps.twitter.com/), también veremos las aplicaciones con acceso a la cuenta.

{{< image
    gallery="true"
    image1="image:twitter-apps.png" optionsthumb1="300x200" title1="Twitter Apps"
    caption="Twitter Apps" >}}

Un a vez creada la aplicación y obtenidos los tokens en la sección _Keys and Access Tokens_ para que la aplicación tenga acceso a la cuenta podemos usar twitter4j. Para publicar un tweet usamos el siguiente código. Creamos el objeto de configuración [ConfigurationBuilder](http://twitter4j.org/javadoc/twitter4j/conf/ConfigurationBuilder.html) en el que establecemos los datos de acceso a la API para la aplicacion y la cuenta en la que se realizarán las publicaciones y posteriormente con [TwitterFactory](http://twitter4j.org/javadoc/twitter4j/TwitterFactory.html) obtenemos la clase [Twitter](http://twitter4j.org/javadoc/twitter4j/Twitter.html) con la que realizaremos las operaciones que deseemos.

{{< code file="ShareServiceImpl.java" language="java" options="" >}}

Este ejemplo publica un tweet de solo texto pero puede incluir enlaces e imágenes o posición de geolocalización. Los tweets que publiquemos deberán respetar el límite de 140 caracteres como máximo teniendo presente que los enlaces cuentan como 22 independientemente de la longitud del enlace. En la [sección de ejemplos de twitter4j](http://twitter4j.org/en/code-examples.html) se puede consultar como [leer el timeline de un usuario](http://twitter4j.org/en/code-examples.html#gettingTimeline), [enviar mensajes directos](http://twitter4j.org/en/code-examples.html#directMessage), [buscar tweets](http://twitter4j.org/en/code-examples.html#directMessage) y algunas cosas más, en en [javadoc de la clase Twitter](http://twitter4j.org/javadoc/twitter4j/Twitter.html) están documentados los métodos para acceder a los recursos e información de la cuenta  (mensajes directos, favoritos, seguidores, listas, geolocalización, búsquedas, _spam_, seguidores sugeridos, línea de tiempo, menciones, _retweets_, tendencias, tweets y usuarios).

Tener acceso de escritura en la aplicación requiere que introduzcamos nuestro número de teléfono cosa que desde la web no se puede realizar en ciertos países, pero podemos [añadir el número de telefono desde el cliente de Twitter para el móvil](https://support.twitter.com/articles/365327#), en el siguiente enlace se comenta un [rodeo para insetar el teléfono móvil](http://meberhard.me/workaround-twitter-application-write-access-mobile-number-accepted-twitter-website/).

Teniendo a nuestra disposición la API de Twitter en nuestra aplicación solo nos queda darle un uso útil.

{{< reference >}}
* [Twitter4j][twitter4j]
* [Java Twitter Integration](https://java.dzone.com/articles/java-twitter-integration)
* [Twitter Apps](https://dev.twitter.com/apps)
* [Añadir tu número de teléfono a tu cuenta de Twitter](https://support.twitter.com/articles/365327#)
* [Workaround Twitter application write access mobile number accepted Twitter website](http://meberhard.me/workaround-twitter-application-write-access-mobile-number-accepted-twitter-website/)
{{< /reference >}}

{{% /post %}}
