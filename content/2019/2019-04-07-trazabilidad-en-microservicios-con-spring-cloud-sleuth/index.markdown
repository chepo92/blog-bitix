---
pid: 396
type: "post"
title: "Trazabilidad en microservicios con Spring Cloud Sleuth"
url: "/2019/04/trazabilidad-en-microservicios-con-spring-cloud-sleuth/"
date: 2019-04-07T10:00:00+02:00
updated: 2019-04-07T12:45:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:spring.svg"
tags: ["java", "planeta-codigo"]
series: ["spring-cloud"]
summary: "Los microservicios son independientes pero se llaman unos a otros, suele ser muy útil para tareas de depuración y de visibilidad de una petición disponer de la traza completa de una petición a lo largo de las llamadas entre varios microservicios. Spring Cloud Sleuth proporciona la infraestructura para que las peticiones salientes envíen un identificativo de correlación de la petición global y para las peticiones entrantes relacionarlo con la petición global."
---

{{% post %}}

{{< logotype image1="spring.svg"  image2="java.svg" >}}

En una aplicación distribuida con varios microservicios es imprescindible tener la configuración de forma centralizada que cada microservicio obtiene al iniciarse y disponer de registro y descubrimiento para que los servicios al iniciarse, terminarse, actualizarse o por un fallo se registren o desregistren y obtengan la ubicación de las dependencias que necesitan.

Otra de las funcionalidades esenciales en una aplicación distribuida es la trazabilidad de una petición, desde que entra por el _API gateway_ pasando por las diferentes peticiones que hacen los microservicios por la red o envío de mensajes. Es necesaria la funcionalidad que relacione las trazas de todos los servicios para depuración o consulta en un futuro para dar visibilidad a las acciones que se realizan en el sistema.

¿Como se consigue relacionar las trazas de los microservicios que son independientes? La técnica que se emplea es asignar a cada petición entrante un identificativo, más bien un identificativo para la transacción de forma global y un identificativo para la transacción en cada microservicio que varía en cada comunicación de red.

Cuando un microservicio se comunica con otro envía en su petición el identificativo de la transacción global y el de su transacción. Si un microservicio no recibe estos identificativos los genera. En el protocolo HTTP estos identificativos se envían y reciben a través de las cabeceras. Los identificativos permiten correlacionar todas las trazas que emiten los diferentes procesos de los microservicios de una misma petición en la aplicación, haciendo una búsqueda global por el identificativo global se obtiene el conjunto de trazas que han emitido los microservicios por las que ha transitado una petición.

Para obtener mejor visibilidad de los tiempos y latencias se puede utilizar [Zipkin][zipkin], [Prometheus][prometheus] junto con [Hystrix][netflix-hystrix] o [Resilience4j][resilience4j] también dan visibilidad de los tiempos entre otras cosas.

En Java el proyecto [Spring Cloud Sleuth][spring-cloud-sleuth] proporciona la funcionalidad de trazabilidad. En el [esquema se observa como Sleuth envía las cabeceras](https://cloud.spring.io/spring-cloud-static/spring-cloud-sleuth/2.1.0.RELEASE/single/spring-cloud-sleuth.html#_propagation) de un servicio cliente a un servicio servidor.

{{< code file="sleuth-headers.txt" language="plaintext" options="" >}}

Sleuth se encarga de propagar las cabeceras del servicio cliente al servicio servidor automáticamente instrumentando los clientes HTTP de _RestTemplate_, _AsyncRestTemplate_, _WebClient_, _Apache HttpClient_ y _Netty HttpClient_. Para enviar, recibir, obtener y establecer los identificativos de correlación con Sleuth junto con el cliente HTTP de Java hay que hacer la instrumentación manualmente con las clases _Tracing_ y _Tracer_ si no está entre los soportados como en el caso del [cliente HTTP que se añadió en Java 11 en el propio JDK][blogbitix-350] con el soporte para HTTP/2.

En la parte servidora Sleuth proporciona un filtro que se encarga de obtener y crear el _span_ de la petición que contiene los identificativos de correlación que con [Spring][spring] y las dependencias adecuadas se configura automáticamente. Para inyectar y extraer las cabeceras de Sleuth con el cliente HTTP de Java o como en el ejemplo con el de [Jersey][jersey] basta con proporcionar una _lambda_ que realice el añadido o extracción de las cabeceras con la API del cliente.

Este es el código para instrumentalizar el cliente HTTP de _Jersey_ que utiliza el servicio cliente que invoca al _gateway_ y el código para crear el _span_ en el cliente con los identificativos de correlación y recogerlos en el servicio servidor.

{{< code file="ProxyService.java" language="java" options="" >}}
{{< code file="DefaultController.java" language="java" options="" >}}

He utilizado el ejemplo de la [serie de artículos sobre Spring Cloud][blogbitix-serie-spring-cloud] añadiendo el soporte para Spring Cloud Sleuth. La aplicación se compone de un microservicio de configuración (con [Spring Cloud Config][spring-cloud-config]), otro de registro y descubrimiento (con Eureka), un servicio de API _gateway_ (con Zuul), el servicio de aplicación y un cliente del servicio que envía las peticiones al _gateway_ y este las redirige al servicio de aplicación.

El cliente inicia un _span_ que es enviado al servidor y el servidor obtiene las cabeceras enviadas. El cliente y el servidor son dos procesos distintos del sistema pero se observa que el identificativo global de la transacción _traceId_ se mantiene en ambos y el identificativo de _spanId_ cambia entre el cliente y el servidor.

{{< code file="System.out" language="plaintext" options="" >}}

Para iniciar los diferentes microservicios de la aplicación hay que utilizar los siguientes comandos.

{{< code file="gradle-run.sh" language="bash" options="" >}}

En los proyectos hay que incluir la dependencia para Sleuth en la herramienta de construcción.

{{< code file="build.gradle" language="groovy" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/SpringCloud" command="./gradle-run.sh" %}}

{{< reference >}}
* [Trazabilidad Distribuida con Spring Cloud: Sleuth y Zipkin](https://www.paradigmadigital.com/dev/trazabilidad-distribuida-spring-cloud-sleuth-zipkin/)
* [Distributed Tracing : Latency Analysis for Your Microservices](https://content.pivotal.io/springone-platform-2017/distributed-tracing-latency-analysis-for-your-microservices-grzejszczak-krishna)
{{< /reference >}}

{{% /post %}}
