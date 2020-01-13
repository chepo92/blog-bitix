---
pid: 15
type: "post"
title: "Introducción y ejemplo sencillo de Java Message Service (JMS)"
url: "/2014/03/introduccion-y-ejemplo-sencillo-de-java-message-service-jms/"
date: 2014-03-07T18:31:22+01:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "programacion", "planeta-codigo"]
summary: "JMS es una especificación de Java que define en esta plataforma una forma comunicación entre aplicaciones basada en el intercambio de mensajes. Los mensajes permiten a las aplicaciones no conocerse entre sí y comunicarse de forma asíncrona pudiendo hacer que los mensajes de una cola solo sean consumidos por un único receptor o por varios suscriptores interesados en un determinado tema. En el código de ejemplo muestro tanto la comunicación con colas (queues) como con temas (topics)"
---

{{% post %}}

{{< logotype image="java.svg" >}}

[La plataforma Java EE](https://en.wikipedia.org/wiki/Java_Platform,_Enterprise_Edition) (Java Enterprise Edition) pone a disposición de los desarrolladores varias especificaciones, estas especificaciones describen las funcionalidades y la API que deben proporcionar las implementaciones y proporcionan al desarrollador herramientas para facilitar, hacer mejor las aplicaciones y de forma estándar según estas especificaciones. Haciendo uso de una de estas especificaciones es posible cambiar de una implementación a otra de forma transparente y sin modificar ninguna línea de código de la aplicación (en teoría). Hay especificaciones para persistencia en base de datos (JPA), para transaccionalidad (JTA), para servicios web (JAX-WS ) y REST (JAX-RS) entre otras. En el siguiente enlace puede encontrarse el [listado completo de especificaciones y sus versiones de JEE 7](https://glassfish.java.net/downloads/ri/).

Una de ellas es el [servicio de mensajería JMS](https://es.wikipedia.org/wiki/Java_Message_Service) (Java Message Service). JMS es un sistema de comunicación entre aplicaciones en base a mensajes. El usar mensajes como forma de comunicación entre aplicaciones tiene los siguientes beneficios o ventajas:

* Integración de sistemas: las aplicaciones que se comunican intercambiando mensajes puede ser desarrolladas con tecnologías diferentes el único requisito es que cada una de ellas tenga una forma de enviar y recibir los mensajes.
* Escalabilidad: en caso de necesitar más capacidad para procesar los mensajes se pueden añadir más procesadores de mensajes sin que los emisores tengan ningún conocimiento de ello.
* Asincronía: los mensajes puede ser procesados de forma asíncrona de forma que si un mensaje desencadena un proceso largo en tiempo el emisor del mensaje no tiene que esperar a que el proceso termine, el emisor puede enviar el mensaje y olvidarse. Además, el emisor no necesita que un receptor exista para enviar el mensaje tampoco el receptor necesita que que el emisor exista para recibir el mensaje. Cuando haya un receptor este se encargará de procesar los mensajes que se hayan enviado y estén aún sin procesar.
* No acoplamiento: el emisor y el receptor no se conocen directamente de forma que cada uno de ellos puede reemplazarse por una nueva implementación de forma transparente para el otro.

La comunicación puede realizarse de dos formas cada una con sus características:

* Punto a punto (P2P): mediante esta comunicación el mensaje se garantiza que es procesado únicamente una vez independientemente del numero de posibles procesadores que podrían recibir el mensaje. El procesado del mensaje puede ser síncrono o asíncrono. En caso de que no haya un receptor disponible el mensaje se guarda hasta poder entregarse a un receptor. Se realiza mediante colas (Queue). En este modelo al emisor se le denomina Sender y al receptor Receiver.
* Pub/Sub: en este modelo un mensaje es recibido por todos los receptores suscritos a un tema (Topic) de forma similar a una emisión broadcast. Al emisor se le denomina Publisher y al receptor Subscriber. El emisor y receptor están más desacoplados ya que el emisor no conoce cual de los receptores procesará el mensaje.

Esta comunicación de mensajes entre aplicaciones o entre diferentes partes de una aplicación tiene muchas posibilidades, podría ser utilizado para que un receptor enviase mensajes electrónicos en base a los mensajes enviados a una cola o para actualizar o precalcular datos de una base de datos que puede llevar un considerable tiempo y que de hacerlo en la misma petición de una aplicación web haría que el cliente estuviese esperando hasta que el proceso terminase, en ambos casos no es necesario que los procesos se hagan inmediatamente, son solo dos ejemplos de aplicación real. Esta es la misma funcionalidad que expliqué como hacerla con [programación concurrente y el patrón de diseño Command](https://elblogdepicodev.blogspot.com.es/2012/04/ejemplo-del-patron-de-diseno-command-y.html) pero pudiéndola implementar con JMS.

Los mensajes puede tener cabeceras (asignada automáticamente por JMS o por el desarrollador), atributos y y los datos (payload) que pueden transportar texto, un stream de objetos primitivos, ... en función del tipo de mensaje. Cualquiera de estas cabeceras, atributos y datos puede utilizarse como información	 para procesar el mensaje.

A continuación pondré el código de una sencilla aplicación que se conecta al servicio JMS de un [servidor de aplicaciones WildFly][blogbitix-10] de forma remota y envía y recibe unos pocos mensajes de texto.

Primero el código de un modelo Pub/Sub. Como es propio de este modelo los mensajes se reciben por todos los receptores (los dos threads que escuchan en un topic que debemos crear), en este caso hay un publicador y dos suscriptores:

{{< code file="Topic.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:topic.png" optionsthumb1="300x200" title1="Resultado de Topic.java" >}}

A continuación el código de utilizando un modelo punto a punto en el que vuelve a haber un emisor y dos receptores. En el resultado de la ejecución puede observarse que a pesar de haber dos receptores solo uno de los dos recibe cada mensaje:

{{< code file="Queue.java" language="java" options="" >}}

{{< image
    gallery="true"
    image1="image:queue.png" optionsthumb1="300x200" title1="Resultado de Queue.java" >}}

Comentar que los mensajes se procesan en serie por cada MessageListener, esto es, hasta que no termina el consumo de uno no se consume el siguiente. Esto se aplica por MensajeListener y sesión.

Si queremos probar los ejemplos deberemos disponer del servidor de aplicaciones WildFly. Para que los ejemplos funcionen deberemos configurarlo añadiendo un usuario «guest», de contraseña «guest» y de rol «guest», el añadirlo lo podemos hacer con la utilidad add-user.sh. También deberemos modificar el archivo standalone-full.xml añadiendo el topic y el queue en la sección de JMS e iniciar WildFly usando esa configuración:

{{< code file="standalone.sh" language="bash" options="" >}}
{{< code file="standalone-full.xml" language="XML" options="" >}}

Para terminar y conocer más sobre JMS un buen libro es [Java Message Service](https://amzn.to/37y9WYA) de O'Reilly, que explica de forma mucho más extensa y completa este tema.

{{< amazon
    linkids="c529d10cc15d949e4e670e83bdb21d54"
    asins="0131872486" >}}

El [código fuente completo de estos ejemplos](https://github.com/picodotdev/blog-ejemplos/tree/master/HolaMundoJMS) los puedes descargar de [mi repositorio de GitHub](https://github.com/picodotdev/blog-ejemplos).

{{< reference >}}
* [WildFly Messaging configuration](https://docs.jboss.org/author/display/WFLY8/Messaging+configuration)
* [WildFly8Configurations](https://docs.jboss.org/author/display/WFLY8/Getting+Started+Guide#GettingStartedGuide-WildFly8Configurations)
* [HelloWorldJMSClient.java](https://github.com/wildfly/quickstart/blob/master/helloworld-jms/src/main/java/org/jboss/as/quickstarts/jms/HelloWorldJMSClient.java)
* [Ejemplo de RabbitMQ con Java para enviar y recibir mensajes][blogbitix-210]
* [Publicación y suscripción de eventos con Guava EventBus en una aplicación Java][blogbitix-422]
{{< /reference >}}

{{% /post %}}
