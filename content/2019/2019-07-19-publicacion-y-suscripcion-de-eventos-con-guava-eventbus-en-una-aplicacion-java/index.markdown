---
pid: 422
type: "post"
title: "Publicación y suscripción de eventos con Guava EventBus en una aplicación Java"
url: "/2019/07/publicacion-y-suscripcion-de-eventos-con-guava-eventbus-en-una-aplicacion-java/"
date: 2019-07-19T19:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Guava EventBus es una solución simple para la publicación y suscripción de eventos en una misma aplicación y como tal no posee muchas de las capacidades que si tiene JMS o RabbitMQ, sin embargo, en algunos casos puede ser muy útil, una solución sencilla y sin requerimientos adicionales de infraesrtuctura."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En programación los eventos son una buena forma de comunicación que permite desacoplar el emisor del evento del receptor o receptores. Los eventos permiten reaccionar a situaciones que se producen a la aplicación. El emisor los lanza cuando considera adecuado y los receptores se suscriben a los eventos que quieren recibir y actúan según su funcionalidad.

Hay herramientas especificas para eventos en Java está JMS si la aplicación está basada en [la plataforma en Java EE][blogbitix-131], en caso de necesitar un servidor de mensajes adecuado para múltiples plataformas y lenguajes uno de los más conocidos es [RabbitMQ][rabbitmq]. Estas opciones permiten que el emisor y los receptores estén aplicaciones distintas.

En el caso de que el emisor y receptor estén en la misma aplicación una opción más sencilla por no requerir un servidor de mensajería es usando la librería [Guava][guava] y su funcionalidad de [Event Bus](https://github.com/google/guava/wiki/EventBusExplained). Una de las ventajas de Guava Event Bus es que el receptor no requiere un registro explícito en el emisor como ocurre en algunas de las soluciones con clases _Listener_ de Java.

Para hacer uso de Guava Event Bus hay que obtener una referencia a la clase [EventBus](https://guava.dev/releases/snapshot-jre/api/docs/com/google/common/eventbus/EventBus.html) que usando [Spring][spring] se puede definir como un _bean singleton_ en el contenedor de dependencias y ser inyectado en las clases que lo necesiten. Los eventos se envían a haciendo uso del método [post()](https://guava.dev/releases/snapshot-jre/api/docs/com/google/common/eventbus/EventBus.html#post-java.lang.Object-) con el objeto que representa el evento como argumento. Los manejadores de los eventos o _listener_ son simplemente un método anotado con [@Suscribe](https://guava.dev/releases/snapshot-jre/api/docs/com/google/common/eventbus/Subscribe.html) y el tipo del evento como argumento, la clases _listener_ han de registrarse en el _EventBus_ y una misma clase con múltiples métodos anotados puede manejar diferentes eventos.

En el contenedor de Spring se define como un _bean_ la clase _EventBus_ que es inicializada con las clases _listener_ con métodos anotados con _@Suscribe_ registradas con el método [register()](https://guava.dev/releases/snapshot-jre/api/docs/com/google/common/eventbus/EventBus.html#register-java.lang.Object-).

{{< code file="Main.java" language="java" options="" >}}
{{< code file="EventListener.java" language="java" options="" >}}

En este ejemplo sencillo se lanza un evento cuando se realiza una petición y como reacción a este evento se imprime un mensaje en la salida. Una aplicación real del _EventBus_ será más complicada pero este ejemplo muestra perfectamente el mecanismo de lanzado y recepción de eventos en una misma aplicación. La clase que se lanza como evento en este caso es un _POJO_ sin ningún requerimiento especial.

{{< code file="DefaultRestController.java" language="java" options="" >}}
{{< code file="Event.java" language="java" options="" >}}

Al realizar peticiones a la aplicación el controlador emite un evento que es recibido por _listener_ al procesar el evento, en la salida de la aplicación aparecen los mensajes.

{{< code file="System.out" language="plaintext" options="" >}}

En el proyecto hay que incluir como dependencia la librería Guava en este caso usando [Gradle][gradle].

{{< code file="build.gradle" language="groovy" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/Guava" command="./gradlew run" %}}

{{< reference >}}
* [Guide to Guava’s EventBus](https://www.baeldung.com/guava-eventbus)
* [Ejemplo de RabbitMQ con Java para enviar y recibir mensajes][blogbitix-210]
* [Introducción y ejemplo sencillo de Java Message Service (JMS)][blogbitix-15]
* [Aplicación de ejemplo usando varias especificaciones de Java EE 7][blogbitix-136]
{{< /reference >}}

{{% /post %}}
