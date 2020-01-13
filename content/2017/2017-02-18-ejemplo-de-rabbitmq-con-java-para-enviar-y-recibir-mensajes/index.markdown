---
pid: 210
type: "post"
title: "Ejemplo de RabbitMQ con Java para enviar y recibir mensajes"
url: "/2017/02/ejemplo-de-rabbitmq-con-java-para-enviar-y-recibir-mensajes/"
date: 2017-02-18T10:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
imagePost: "logotype:rabbitmq.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Entre las ventajas de integrar dos aplicaciones mediante el envío de mensajes están que evita que estén acopladas y la comunicación es asíncrona. Con RabbitMQ también podremos implementar cada uno de ellas con el lenguaje de programación que prefiramos de entre las varias posibilidades para las que ofrece clientes y por esto último podemos preferir usarlo en vez de las especificación JMS propia de Java EE que nos obligaría a usar un servidor de aplicaciones que lo implemente, posiblemente JBoss/Wildfly o Weblogic en vez de Tomcat o Jetty. En el artículo incluyo un ejemplo para el lenguaje Java mostrando el envío y recepción de mensajes junto con la aplicación de administración que nos proporcionará información útil."
---

{{% post %}}

{{< logotype image1="rabbitmq.svg" title1="RabbitMQ" width1="200" image2="java.svg" >}}

Las aplicaciones que se integran mediante el envío y recepción de mensajes evitan el acoplamiento y sincronía junto con la posibilidad de implementar cada una de ellas con diferentes lenguajes o plataformas. Entre las especificaciones que componen Java EE está <abbr title=”Java Message Service”>JMS</abbr> pero tanto la aplicación que envía como la que recibe mensajes deben estar programadas en el lenguaje Java, a menos que incluyamos un adaptador que permita a la aplicación no Java interactuar con JMS.

[RabbitMQ][rabbitmq] es un software que proporciona una funcionalidad similar a JMS pero con la ventaja que ofrece soporte para los lenguajes más populares como [Java][java] y [<abbr title="Java Virtual Machine">JVM</abbr>][jvm], [Ruby][ruby], [Python][python], [.NET][dotnet], [PHP][php], [Node.js][nodejs], [Go][go] y varias más. Usa varios conceptos similares a los presentes en JMS como que el emisor envía los mensajes a una cola y el receptor los lee de ella de modo que ni el emisor ni receptor se conocen consiguiendo de este modo el desacoplamiento entre ellos. Los mensajes son leídos de las colas con la posibilidad de que cada mensaje sea recibido por un único receptor o por cada uno de ellos.

Realmente en RabbitMQ los mensajes no son enviados directamente por el emisor a las colas sino que se envían a un _exchange_ que finalmente lo enruta y encola en la cola destino. Los _exchanges_ pueden ser directos basando su lógica de encolado según el valor del _binding key_ enviada junto con el mensaje y un _routing key_ asociada con la cola o basados en temas en los que se usa una cadena formada por una lista de palabras separada por puntos, la lógica de enrutado se toma según si el _binding key_ cumple el patrón del _routing key_ que puede contener sustituidores de palabras, siendo un _*_ una palabra exacta y _#_ varias palabras contiguas.

En la [documentación de RabbitMQ](http://www.rabbitmq.com/documentation.html) hay 6 tutoriales en diferentes lenguajes para el envío y recepción de mensajes.

* [Tutorial 1, Hello World](http://www.rabbitmq.com/tutorials/tutorial-one-java.html)
* [Tutorial 2, Work Queues](http://www.rabbitmq.com/tutorials/tutorial-two-java.html)
* [Tutorial  3, Publish/Subscribe](http://www.rabbitmq.com/tutorials/tutorial-three-java.html)
* [Tutorial 4, Routing](http://www.rabbitmq.com/tutorials/tutorial-four-java.html)
* [Tutorial 5, Topics](http://www.rabbitmq.com/tutorials/tutorial-five-java.html)
* [Tutorial 6, Remote procedure call (RPC)](http://www.rabbitmq.com/tutorials/tutorial-six-java.html)

Basándome en estos ejemplos he creado un proyecto uno muy similar al Tutorial 1, ejecutable más fácilmente con [Docker][docker] y [Gradle][gradle].

Tanto en el emisor como en el receptor deberemos declarar las colas que van a usar (si una no existe se creará y si existe se usará), a la cola se le asigna un nombre y el receptor define un manejador para recibir los mensajes según se envían.

{{< code file="Send.java" language="java" options="" >}}
{{< code file="Receive.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

Para ejecutar el ejemplo usaré el [contenedor de Docker para RabbitMQ](https://hub.docker.com/_/rabbitmq/) iniciándolo con [Docker Compose][docker-compose] y el siguiente archivo descriptor. Puedes consultar la [serie de artículos sobre Docker][blogbitix-serie-docker] que escribí para conocer cómo usarlo.

{{< code file="docker-compose.yml" language="YAML" options="" >}}
{{< code file="docker-run.sh" language="bash" options="" >}}

Una vez iniciado el contenedor y con el código fuente del ejemplo, iniciamos en cualquier orden la parte receptora de los mensajes y la parte emisora de mensajes con los comandos <code>./gradlew receive</code> y <code>./gradlew send</code> respectivamente, momento en el cual veremos que en la consola salen las notificaciones de recepción y envío.

{{< image
    gallery="true"
    image1="image:send.png" optionsthumb1="300x200" title1="Aplicación de ejemplo enviando mensajes"
    image2="image:receive.png" optionsthumb2="300x200" title2="Aplicación de ejemplo reciviendo mensajes" >}}

En la comunicación con RabbitMQ se puede usar [TLS/SSL](http://www.rabbitmq.com/ssl.html) así como mecanismos de [autenticación](http://www.rabbitmq.com/authentication.html) y [autorización](http://www.rabbitmq.com/access-control.html) para mayor seguridad. Usando confirmaciones si el receptor falla en el procesado el mensaje no se pierde ya que no se habrá declarado como _acknowledge_ aún así si RabbitMQ falla los mensajes se perderán a menos que las colas se declaren como persistentes las cuales se guardarán en disco perdurando a una catástrofe.

RabbitMQ posee un [_plugin_ para la administración](https://www.rabbitmq.com/management.html) con el que podemos administrar permisos, tener una vista global, ver ratios de mensajes, estadísticas, colas, _exchanges_ y más información, nos da información muy interesante sobre el estado del procesamiento de mensajes. Es accesible mediante el navegador y la URL _http\://localhost:15672/_. En la captura del estado de la cola _hello_ hay 10 mensajes encolados pendientes de entregar a algún receptor.

{{< image
    gallery="true"
    image1="image:rabbitmq-management.png" optionsthumb1="300x200" title1="Aplicación web de administración de RabbitMQ"
    image2="image:rabbitmq-queue.png" optionsthumb2="300x200" title2="Información de estado de una cola" >}}

Para profundizar más en las aplicaciones basadas en mensajes con RabbitMQ dos buenos libros son [Learning RabbitMQ](https://amzn.to/2lTGMQc) y [Matering RabbitMQ](https://amzn.to/2lW9qwF) cubriendo temas más avanzados como _clustering_, alta disponibilidad, arquitectura, patrones de diseño, seguridad y rendimiento.

{{< amazon
    linkids="9bb0705e8a34f246d5530b141b0a690e,e87eebb622314cdf0c2c14fc32940264"
    asins="1783984562,1783981520" >}}

{{< sourcecode git="blog-ejemplos/tree/master/HolaMundoRabbitMQ" command="docker-compose up, ./gradlew receive, ./gradle send" >}}

{{< reference >}}
* [RabbitMQ][rabbitmq]
* [Documentación RabbitMQ](http://www.rabbitmq.com/documentation.html)
* [Serie de artículos sobre Docker][blogbitix-serie-docker]
* [Introducción y ejemplo sencillo de Java Message Service (JMS)][blogbitix-15]
* [Publicación y suscripción de eventos con Guava EventBus en una aplicación Java][blogbitix-422]
{{< /reference >}}

{{% /post %}}
