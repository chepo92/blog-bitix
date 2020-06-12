---
pid: 427
type: "post"
title: "Iniciar una aplicación de Spring Boot en un puerto aleatorio"
url: "/2019/08/iniciar-una-aplicacion-de-spring-boot-en-un-puerto-aleatorio/"
date: 2019-08-09T18:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
series: ["spring-cloud"]
summary: "En una arquitectura basada en microservicios es normal iniciar varias instancias de un mismo servicio, si están en la misma máquina ha de asignarse a cada instancia un puerto diferente. Asignar los puertos manualmente no es recomendable cuando se quieren varias instancias, Spring Boot ofrece la funcionalidad de iniciar la aplicación en un puerto aleatorio."
---

{{% post %}}

{{< logotype image1="spring.svg"  image2="java.svg" >}}

Mediante configuración se puede especificar el puerto en el que se desea iniciar una aplicación de [Spring Boot][spring-boot] que ofrece un servicio de red. El puerto por convención suele ser el _8080_ y la propiedad de configuración de Spring Boot para modificarlo es _server.port_.

{{< code file="application-1.yml" language="YAML" options="" >}}
{{< code file="run-1.sh" language="bash" options="" >}}

Cuando se tiene únicamente una aplicación este puerto por defecto es suficiente pero si se desean iniciar varias instancias de una aplicación o microservicio en una misma máquina es necesario asignar a cada una de ellas un puerto diferente para que no haya conflictos a usar el mismo puerto de red. Se puede hacer manualmente aunque con muchas instancias también se puede dejar a Spring Boot elegir un puerto aleatorio.

Para dejar a Spring Boot elegir el puerto de forma aleatoria basta con especificar el puerto con valor _0_ en la propiedad de configuración _server.port_.

{{< code file="application-2.yml" language="YAML" options="" >}}
{{< code file="run-2.sh" language="bash" options="" >}}

Usando un [servicio de registro y descubrimiento como Eureka][blogbitix-344] el servicio registra su ubicación y los servicios que quieran acceder a él obtendrán del mismo servicio de registro y descubrimiento su ubicación, de forma que para los clientes es transparente en qué puerto se inicie.

Sin embargo, por algún motivo con Eureka los servicios no se registran en el puerto aleatorio en el que realmente se inician sino que se registran incorrectamente en el puerto _0_, quizá utilizando [Consul][consul] el servicio de Spring Boot si se inicie en un puerto aleatorio.

{{% sourcecode git="blog-ejemplos/tree/master/SpringCloud" command="./gradle-run.sh" %}}

{{< reference >}}
* [Spring Boot Random Server Port](https://javadeveloperzone.com/spring-boot/spring-boot-random-server-port/)
* [Registro y descubrimiento de servicios con Spring Cloud y Consul][blogbitix-206]
{{< /reference >}}

{{% /post %}}
