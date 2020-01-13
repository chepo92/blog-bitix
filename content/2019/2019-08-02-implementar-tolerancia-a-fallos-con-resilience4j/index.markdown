---
pid: 425
type: "post"
title: "Implementar tolerancia a fallos con Resilience4j"
url: "/2019/08/implementar-tolerancia-a-fallos-con-resilience4j/"
date: 2019-08-02T17:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:resilience4j.png"
tags: ["java", "planeta-codigo"]
series: ["spring-cloud"]
---

{{% post %}}

{{< logotype image1="resilience4j.png" title1="Resilience4j" width1="200" image2="java.svg" >}}

[Hystrix][netflix-hystrix] ha sido una de las primeras librerías en Java disponibles para implementar varios patrones de tolerancia a fallos en los microservicios. Desde hace un tiempo ha pasado a modo mantenimiento en el que ya no se incluyen nuevas características, una de las librerías recomendadas como sustituta es [Resilience4j][resilience4j]. Resilience4j proporciona las características similares con algunas ventajas adicionales.

Los patrones útiles para aumentar la tolerancia a fallos debido a problemas de red o fallo de alguno de los múltiples servicios son:

* _Circuit breaker_: para dejar de hacer peticiones cuando un servicio invocado está fallando.
* _Retry_: realiza reintentos cuando un servicio ha fallado de forma temporal.
* _Bulkhead_: limita el número de peticiones concurrentes salientes a un servicio para no sobrecargarlo.
* _Rate limit_: limita el número de llamadas que recibe un servicio en un periodo de tiempo.
* _Cache_: intenta obtener un valor de la cache y si no está presente de la función de la que lo recupera.
* _Time limiter_: limita el tiempo de ejecución de una función para no esperar indifinidamente a una respuesta.
* Además de la funcionalidad de métricas.

La ventaja de Resilience4j es que todos estos patrones para los microservicios se ejecutan en el mismo hilo que el principal y no en un aparte como en Hystrix. Su uso además no requiere de crear clases específicas para hacer uso de los patrones y pueden emplearse las [funciones _lambda_ incorporadas en Java 8][blogbitix-17].

Este artículo actualiza el ejemplo que usaba [Spring Boot][spring-boot] y [Spring Cloud][spring-cloud] que implementé en su momento para la [serie de artículos sobre Spring Cloud][blogbitix-serie-spring-cloud] añadiendo una implementación del cliente de un microservicio con Resilience4j.

La configuración de Resilience4j se puede proporcionar mediante código Java, con anotaciones y con la [integración para Spring Boot](https://resilience4j.readme.io/docs/getting-started-3) con parámetros en el archivo de configuración de la aplicación. La aplicación además de varias cosas de Spring Cloud para otros artículos de la serie consiste para el de este artículo en un servicio cliente y un servicio servidor que para ser tolerantes a fallos hacen uso de los patrones _circuit breaker_ y _time limiter_ para demostrar su uso.

Resilience4j para implementar los patrones lo que hace es decorar la función objetivo que hace la invocación del servicio. Si se quieren aplicar varios patrones hay que encadenar las decoraciones, por ejemplo, si se quiere limitar el número de llamadas salientes con _bulkhead_ y el patrón _circuit breaker_ hay que aplicar una decoración sobre la otra. En este ejemplo se aplica un _time limiter_ y un _circuit breaker_ usando código Java. La variable _get_ es la que realmente contiene la llamada al servicio.

{{< code file="Resilience4jProxyService.java" language="java" options="" >}}

Las dependencias que hay que añadir en el proyecto son:

{{< code file="build.gradle" language="groovy" options="" >}}

Resilience4j proporciona añadidos de integración con Spring Boot y exportación de métricas para [Prometheus][prometheus].

{{% sourcecode git="blog-ejemplos/tree/master/SpringCloud" command="./gradle-run.sh" %}}

{{< reference >}}
* [Achieving Fault Tolerance With Resilience4j](https://dzone.com/articles/resilience4j-intro)
* [Guide to Resilience4j](https://www.baeldung.com/resilience4j)
* [Spring Cloud Greenwich.RELEASE](https://spring.io/blog/2019/01/23/spring-cloud-greenwich-release-is-now-available)
{{< /reference >}}

{{% /post %}}
