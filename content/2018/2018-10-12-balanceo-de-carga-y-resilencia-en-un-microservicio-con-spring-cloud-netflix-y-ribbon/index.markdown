---
pid: 353
type: "post"
title: "Balanceo de carga y resilencia en un microservicio con Spring Cloud Netflix y Ribbon"
url: "/2018/10/balanceo-de-carga-y-resilencia-en-un-microservicio-con-spring-cloud-netflix-y-ribbon/"
date: 2018-10-12T11:00:00+02:00
updated: 2018-10-12T20:46:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:spring.svg"
tags: ["java", "planeta-codigo", "programacion", "spring"]
series: ["spring-cloud"]
---

{{% post %}}

{{< logotype image1="spring.svg" title1="Spring" width1="200" image2="java.svg" >}}

Un servicio que recibe numerosas peticiones o es crítico para el funcionamiento de una aplicación es necesario escalarlo o crear múltiples instancias de él para atender toda la carga que se demanda o para que en caso de que una instancia falle haya otras disponibles que funcionen correctamente para atender las peticiones.

En este entorno de múltiples instancias se hace necesario un servicio de registro y descubrimiento que usando [Spring][spring], [Spring Boot][spring-boot] y [Spring Cloud Netflix][spring-cloud-netflix] una implementación es [Eureka][netflix-eureka]. Una vez descubiertas las instancias que hay del servicio es necesario hacer balanceo de carga para conseguir escalabilidad y tolerancia a fallos, en el mismo proyecto de Spring Cloud Netflix para realizar balanceo de carga en el cliente se ofrece [Ribbon][netflix-ribbon].

Hay varias formas de usar Ribbon una de ellas es con lo que denominan _feign client_, con [Spring RestTemplate](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/client/RestTemplate.html) o directamente con _LoadBalancerClient_ que es la que muestro en este artículo. Este cliente con Ribbon obtiene del servicio de registro y descubrimiento la lista inicial de instancias de un servicios registrado con sus ubicaciones siendo el _host_ en el que se encuentran y el puerto en el que ofrecen su servicio. Con esta lista y el estado de los servicios se realiza el balanceo de carga. Sin embargo, dada la naturaleza de los microservicios se pueden añadir con posterioridad más instancias de un servicio o algunas pueden empezar fallar, Ribbon se encarga de mantener actualizada la lista de instancias de un servicio.

Combinado con [Hystrix][netflix-hystrix] un ejemplo de cliente que hace peticiones a un servicio es el siguiente. Para demostrar su funcionamiento el cliente realiza varias llamadas a un servicio cada unos pocos milisegundos balanceando la carga entre las instancias que existan. Si con posterioridad se añade una nueva instancia del servicio Ribbon al cabo de un tiempo de que haya sido iniciada lo añadirá a la lista y empieza a seleccionarla para enviarle peticiones. Si una instancia falla hasta que Eureka no marca la instancia como fuera de servicio y el cliente no actualiza su lista de instancias en el ejemplo de cliente seguirá enviando peticiones a la instancia fuera de servicio y con Hystrix utilizando el método de _fallback_ como respuesta.

Ante el fallo de una instancia para evitar que temporalmente el cliente empiece a fallar cuando le redirige una petición este puede reintentar las peticiones en otra instancia, esta funcionalidad se proporciona con [Spring Retry][spring-retry] o utilizando [Zuul][netflix-zuul] como _proxy_.

El cliente usa la clase _LoadBalancerClient_ que en cada invocación del método _choose()_ devuelve una instancia diferente de servicio realizando balanceo de carga utilizando el método _round-robin_. La clase _ServiceInstance_ proporciona la URL de la instancia del servicio.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="ClientService.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

La clase del servicio y los comandos para iniciar el servicio de registro y descubrimiento, el servicio de configuración, las instancias del servicio en diferentes puertos y el cliente.

{{< code file="DefaultController.java" language="java" options="" >}}
{{< code file="gradle-run.sh" language="bash" options="" >}}

Esta es la salida y funcionamiento del cliente realizando balanceado la carga entre las mútiples instancias y que ocurre cuando se añade una nueva o una empieza a fallar y se elimina de la lista.

{{< code file="System.out" language="plaintext" options="" >}}

[Ribbon posee numerosas propiedades de configuración](https://github.com/Netflix/ribbon/blob/master/ribbon-core/src/main/java/com/netflix/client/config/CommonClientConfigKey.java) a nivel global para todos los clientes de servicios o de forma específica para cada servicio ya sea con la anotación _@RibbonClient_ o mediante la configuración en archivos externos de Spring Boot. Algunas propiedades de configuración interesantes son las de _timeout_ que permiten que un cliente no agote sus recursos esperando a que a los servicios que llama si tardan en responder y a su vez el cliente actuando de servidor recibe muchas llamadas de sus clientes. En un comando de Hystrix también se puede especificar un _timeout_ de modo que si se realizan reintentos el tiempo total para Hystrix deberá ser superior que el tiempo total de todos los posibles reintentos teniendo en cuenta el _timeout_ del cliente con Ribbon. Unsando el cliente HTTP [Jersey][jersey] como en este caso también pueden establecerse [_timeouts_ para una petición](https://jersey.github.io/apidocs/1.19.1/jersey/com/sun/jersey/api/client/Client.html).

El balanceo de carga que con Ribbon se realiza en el cliente es más sencillo que realizar el balanceo de carga en el servidor ya que no requiere una pieza más en la infraestructura pero requiere que el cliente tenga algo de lógica para hacer el balanceo de carga.

{{< sourcecode git="blog-ejemplos/tree/master/SpringCloud" command="./gradle-run.sh" >}}

{{% /post %}}
