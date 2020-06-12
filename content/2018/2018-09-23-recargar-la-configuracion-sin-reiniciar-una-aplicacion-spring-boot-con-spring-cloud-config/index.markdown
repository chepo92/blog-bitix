---
pid: 349
type: "post"
title: "Recargar sin reiniciar la configuración de una aplicación Spring Boot con Spring Cloud Config"
url: "/2018/09/recargar-sin-reiniciar-la-configuracion-de-una-aplicacion-spring-boot-con-spring-cloud-config/"
aliases: ["/2018/09/recargar-la-configuracion-sin-reiniciar-una-aplicacion-spring-boot-con-spring-cloud-config/"]
date: 2018-09-23T00:15:00+02:00
updated: 2018-09-23T00:50:00+02:00
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

No es raro la necesidad de querer cambiar algunos valores de la configuración de una aplicación sin ningún cambio adicional en el código. Normalmente la configuración se externaliza en un archivo de texto en un determinado formato como _properties_ o _yaml_ que se lee al iniciarse la aplicación pero que al querer hacer cambios y hacerlos efectivos requiere reiniciar la aplicación.

Para evitar la caída de servicio en un reinicio de aplicación requiere tener varias instancias de la aplicación, ir sacando del balanceador las instancias para que no le soliciten nuevas peticiones, reiniciarlas y añadirlas de nuevo al balanceador si se hace balanceo de carga en el servidor o reiniciar las aplicaciones progresivamente si se hace en el cliente. Y esto con todas las instancias del servicio. [Spring Cloud Config][spring-cloud-config] y [Spring Boot][spring-boot] entre sus funcionalidades de configuración posee una que consiste en recargar la configuración o ciertas partes de la misma. Para ello [Spring Boot Actuator][spring-boot-actuator] ofrece un _endpoint_ con el que disparar la recarga.

En el siguiente ejemplo de microservicio que posee una clase de configuración con algunas propiedades. El valor de estas propiedades se utilizan para el resultado de una acción en un _endpoint_ del servicio.


{{< code file="DefaultConfiguration.java" language="java" options="" >}}
{{< code file="DefaultController.java" language="java" options="" >}}
{{< code file="service.yml" language="YAML" options="" >}}

Iniciada la aplicación que requiere iniciar previamente el servicio de registro y descubrimiento y el servidor de configuración, la aplicación al iniciarse obtiene su configuración del servidor de configuración. Si se cambia la configuración de la variable _config.key_ la aplicación no obtendrá el valor actualizado hasta que se invoque el _endpoint_ _http\://localhost:8080/actuator/refresh_. Para que Spring Boot recargue la configuración es necesario anotar con _@RefreshScope_ la clase de configuración. Invocado el _endpoint_ de recarga de configuración la aplicación toma de nuevo los nuevos valores del servicio de configuración.

{{< code file="gradle-run-1.sh" language="bash" options="" >}}
{{< code file="curl-1.sh" language="bash" options="" >}}

En una aplicación orientada microservicios es muy posible que haya múltiples instancias del mismo servicio y para recargar la configuración de cada uno de ellos hay que hacerlo de forma individual con su _endpoint_ de recarga de configuración. Dado el número de microservicios y su ubicación distribuida hacerlo de forma individual es un inconveniente.

Para resolver este inconveniente integrando [Spring Cloud Bus][spring-cloud-bus] en las aplicaciones es posible recargar la configuración de todos los microservicios haciendo una única llamada al _endpoint_ _http\://localhost:8090/monitor_ indicando el servicio a actualizar su configuración lo que es independiente del número de instancias y de su ubicación. Integrar Spring Clud Bus requiere disponer de una instancia de mensajes como [RabbitMQ][rabbitmq] e incluir como dependencia tanto en el servidor de configuración como en el servicio la dependencia _spring-cloud-starter-bus-amqp_. Para esta comunicación de mensajes Spring Cloud Config crea en RabbitMQ una cola de mensajes que empieza por _springCloudBus_. 

{{< code file="configserver.gradle" language="groovy" options="" >}}
{{< code file="service.gradle" language="groovy" options="" >}}

Los pasos para probar estas funcionalidades con Spring Cloud Bus en una o varias varias instancias son iniciar una instancia o más del servidor de registro y descubrimiento, iniciar una o más instancias del servidor de configuración, iniciar una o varias instancias del servicio todas las instancias en un puerto y terminal diferente, invocar el servicio cuyo valor de respuesta depende de una propiedad de configuración, modificar el valor de la propiedad de configuración, recargar la configuración e invocar de nuevo el servicio para comprobar que el nuevo valor se ha hecho efectivo.

{{< code file="gradle-run-2.sh" language="bash" options="" >}}
{{< code file="curl-2.sh" language="bash" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/SpringCloud" command="./gradle-run-1.sh, ./curl-1.sh" >}}

{{< reference >}}
* [Spring Cloud Bus - Quick Start](http://cloud.spring.io/spring-cloud-static/spring-cloud-bus/2.0.0.RELEASE/single/spring-cloud-bus.html#_quick_start)
* [Spring CloudBus - Push Notifications and Spring Cloud Bus](http://cloud.spring.io/spring-cloud-static/spring-cloud-config/2.0.1.RELEASE/single/spring-cloud-config.html#_push_notifications_and_spring_cloud_bus)
* [Spring Boot - Configuration Classes](https://docs.spring.io/spring-boot/docs/current/reference/html/using-boot-configuration-classes.html)
{{< /reference >}}

{{% /post %}}
