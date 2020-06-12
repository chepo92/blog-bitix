---
pid: 354
type: "post"
title: "Proxy para microservicios con Spring Cloud Netflix y Zuul"
url: "/2018/10/proxy-para-microservicios-con-spring-cloud-netflix-y-zuul/"
date: 2018-10-13T23:00:00+02:00
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

{{< logotype image1="spring.svg"  image2="java.svg" >}}

Teniendo una buen número de microservicios con múltiples instancias ofreciendo cada uno una API y en una ubicación diferente para simplificar la visión de los que actúen clientes de los microservicios se puede utilizar un _proxy_. Con un _proxy_ es posible centralizar todas las peticiones, que sea éste el encargado de conocer la ubicación de todas las instancias de los microservicios y de hacer la llamada allí donde se encuentre cada una de ellas.

Entre las varias funcionalidades que proporcionar el proyecto [Spring Cloud Netflix][spring-cloud-netflix] es esta de _proxy_ mediante [Zuul][netflix-zuul]. Para hacer de _proxy_ Zuul necesita tener una correspondencia entre URLs y servicios que realmente proporcionan la funcionalidad, una forma que tiene Zuul de conocer la ubicación de las instancias es utilizando el servicio de registro y descubrimiento [Eureka][netflix-eureka]. Además, Zuul como cliente de los microservicios posee la funcionalidad de [Hystrix][netflix-hystrix] que implementa el patrón _circuit breaker_ para tolerancia a fallos, [Ribbon][netflix-ribbon] para hacer balanceo de carga entre varias instancias de los microservicios a nivel de servidor además de reintentos cuando una instancia falla.

En el ejemplo que he utilizado para esta [serie de artículos sobre Spring Cloud][blogbitix-serie-spring-cloud] hay un servicio que por defecto se inicia en el puerto _8080_ y ofrece un _endpoint_ _/_ que devuelve un mensaje. Para crear un microservicio _proxy_ con Zuul hay que crear una aplicación [Spring Boot][spring-boot] anotar la clase principal con la anotación _@EnableZuulProxy_ y proporcionar la configuración para la correspondencia de rutas y microservicios, además de las propiedades para hacer reintentos en caso de que un microservicio falle y de _timeouts_ en caso de que se comporte no como se espera en cuanto tiempos de respuesta.

{{< code file="Main (zuul).java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

Se puede establecer un tiempo máximo para establecer la conexión, de tiempo de petición, el número de reintentos en la misma instancia si falla o en otro número de instancias, el número máximo de conexiones y el número máximo de conexiones al mismo _host_. Todas ellas definibles en cada servicio de forma individual bajo las propiedades _hystrix.command.service_ y _service.ribbon_ donde _service_ es el identificativo del servicio. Las rutas se indican bajo la propiedad _zuul.routes_ con la relación identificativo del servicio y _path_.

{{< code file="proxy.yml" language="YAML" options="" >}}

Dado que Zuul es un _proxy_ para múltiples instancias de microservicios a cada microservicio hay que darle una ruta, cuando Zuul realiza la llamada a una instancia del microservicio se encarga de omitirla. En el ejemplo, la ruta en Zuul _/service/**_ está asociada al microservicio _service_ pero el servicio _service_ ofrece su _endpoint_ en _/_, Zuul se encarga de omitir la parte de la ruta para el _proxy_ y hace la llamada a la ruta _/_ como espera el microservicio.

Lógicamente los clientes deben contactar con el _proxy_ en vez de con el microservicio directamente. Arrancado el servicio de descubrimiento y registro Eureka, el servidor de configuración de Spring Cloud, dos instancias del servicio y el _proxy_ con Zuul haciendo las llamadas al _proxy_ se observa que se obtiene el resultado del microservicio. Como en el ejemplo hay varias instancias del servicio Zuul realiza balanceo de carga entre ellas con Ribbon utilizando la política _round-robin_ y el mensaje es diferente en cada una de las respuestas según la instancia invocada. Con Zuul además se consigue balanceo de carga a nivel de servidor que Ribbon solo ofrece a nivel de cliente.

{{< code file="Main (client).java" language="java" options="" >}}
{{< code file="ProxyService.java" language="java" options="" >}}
{{< code file="gradle-run.sh" language="bash" options="" >}}

Las URLs del servicio en el microservicio y en el _proxy_ son.

{{< code file="curl.sh" language="bash" options="" >}}

El cliente de ejemplo realiza peticiones al _proxy_, en la salida se muestra el resultado del balanceo de carga cuando hay varias instancias, cuando se añade una nueva instancia entra a formar parte del balanceo de carga. Otro beneficio de Zuul es que ofrece la funcionalidad de reintentos de modo que si una instancia de un servicio falla la petición se reintenta en otra. En el artículo [Balanceo de carga y resilencia en un microservicio con Spring Cloud Netflix y Ribbon][blogbitix-353] usando solo Ribbon se observaba que cuando una instancia falla se le siguen haciendo peticiones hasta que la lista de instancias del servicio en Eureka se actualiza quitando la fallida, con Hystrix se obtiene la respuesta _fallback_ pero no se evita completamente el error. Zuul puede ocultar el error provocado por una instancia que falla reintentado la petición en la misma nuevamente, en otra u otras instancias según se configure. El comportamiento con Zuul cuando una instancia falla se puede comparar con el comportamiento incluido en el [artículo anterior usando en el cliente los microservicios directamente][blogbitix-353].

{{< code file="System.out" language="plaintext" options="" >}}

Zuul además es capaz de proporciona otras muchas funcionalidades como:

* Autenticación
* Seguridad
* Recolección de métricas y monitorización
* Pruebas de carga
* Pruebas de verificación o _canary testing_
* Enrutado dinámico
* Migración de servicio
* Abandono de carga o _load shedding_
* Manejo de respuesta estática
* Gestión de tráfico active/active

{{< sourcecode git="blog-ejemplos/tree/master/SpringCloud" command="./gradlew-run.sh" >}}

{{% /post %}}
