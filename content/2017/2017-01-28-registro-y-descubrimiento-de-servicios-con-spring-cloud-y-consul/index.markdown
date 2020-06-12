---
pid: 206
type: "post"
title: "Registro y descubrimiento de servicios con Spring Cloud y Consul"
url: "/2017/01/registro-y-descubrimiento-de-servicios-con-spring-cloud-y-consul/"
date: 2017-01-28T11:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
imagePost: "logotype:spring.svg"
tags: ["java", "planeta-codigo", "programacion", "spring"]
series: ["spring-cloud"]
summary: "Tradicionalmente el conectar un servicio con sus servicios dependientes se ha realizado por configuración, normalmente mediante un nombre de dominio y su puerto. Esta configuración estática es suficiente para unos pocos servicios y que no varían durante su funcionamiento. Con el advenimiento de los microservicios con su estado y número cambiantes en el tiempo han surgido varias herramientas para en vez de usar configuración usar descubrimiento. Una de estas herramientas Consul para la que Spring Cloud proporciona integración."
---

{{% post %}}

{{< logotype image1="spring.svg"  image2="java.svg" >}}

En una aplicación con una arquitectura de microservicios esta se compone de múltiples partes cambiantes. Los microservicios pueden aparecer, desaparecer, variar en número o cambiar de ubicación, la aplicación debe ser tolerante a esos cambios y seguir proporcionando su servicio. Por tanto, la configuración de red de los servicios no se puede realizar usando direcciones <abbr title="Internet Protocol">IP</abbr> ya que no se conocen las que utilizarán los microservicios y usar nombres de dominio de <abbr title="Domain Name System">DNS</abbr> puede no ser viable ya que los cambios tardan en propagarse. Conocer el nombre de _host_ y puerto reales de los microservicios es proporcionado por la funcionalidad de descubrimiento de servicios o _service discovery_ que proporcionan algunos servicios como [Eureka](https://github.com/Netflix/eureka), [Consul][consul] o [Apache Zookeper](https://zookeeper.apache.org/).

En este artículo explicaré como usar la parte de descubrimiento de servicios de Consul usando una aplicación con [Spring Boot][spring-boot] y  con [Spring Cloud][spring-cloud]. Spring Cloud proporciona varias cosas comunes para aplicaciones basadas en microservicios. Si aún no conoces las herramientas en las que se basará el ejemplo puedes consultar los siguientes artículos específicos como introducción:

* [Herramienta de construcción Gradle ][elblogdepicodev-98]
* [Ejemplo de multiproyecto con Gradle][blogbitix-96]
* [Aplicación Java autocontenida con Spring Boot][blogbitix-103]
* [Configuración de una aplicación en diferentes entornos con Spring Cloud Config][blogbitix-112]

Consul además de descubrimiento de servicios proporciona otras funcionalidades como detección de fallos o caídas para prevenir enviar peticiones a máquinas fuera de servicio y almacenamiento básico clave/valor para configuración dinámica o activación de características. Dispone de una aplicación web en la que podemos ver el estado de los servicios, una [API REST](https://www.consul.io/api/index.html) con la que comunicarse con Consul en una aplicación o en cada microservicio y un servidor de nombres <abbr>DNS</abbr>, podemos usar cualquiera de las dos interfaces de consulta, la basada en la <abbr>API</abbr> <abbr>REST</abbr> o la basada en DNS para obtener las direcciones IP con la ubicación de los servicios.

{{< image
    gallery="false"
    image1="image:consul.png" optionsthumb1="300x250" title1="Consul" >}}

Instalar Consul es muy sencillo basta con [descargar un binario](https://www.consul.io/downloads.html) y descargar la interfaz web si queremos tener el _dashboard_ con la información del servicio. Descargados y descomprimidos Consul se inicia con el siguiente comando. Podemos acceder al panel _dashboard_ con la dirección _http\://localhost:8500_ con un navegador web. Inicialmente en el panel de servicios solo se encuentra el propio de Consul cuando aún no se ha registrado ningún servicio, aplicación o microservicio.

{{< code file="consul.sh" language="bash" options="" >}}

Una aplicación que use Spring Boot y que quiera hacer pública su disponibilidad en Consul basta con que use la anotación `@EnableDiscoveryClient` en la clase de inicio de la aplicación junto con las dependencias adecuadas. Con la declaración de esta anotación y la dependencia _spring-cloud-starter-consul-all_ Spring se comunicará con Consul a través de la API REST para registrar cuando se inicie la aplicación, su nombre, nombre de máquina y puerto en el que estará disponible.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="application.yml" language="YAML" options="" >}}

Spring Cloud proporciona además un servicio que podemos usar para conocer los servicios registrados en Consul, con la clase _DiscoveryClient_ podemos conocer los nombres de los servicios, su nombre de máquina y puerto desde una aplicación Java. En el método _run_ de la clase _Main_ se usa en este ejemplo para imprimir en la salida el listado de servicios registrados en Consul. Uno de esos servicios esta aplicación de ejemplo, ya que se registra en Consul cuando se inicia.

{{< image
    gallery="true"
    image1="image:consul-services.png" optionsthumb1="300x200" title1="Servicios registrados en Consul"
    caption="Servicios registrados en Consul" >}}

Consul para conocer que los servicios siguen en funcionamiento hace una petición <abbr>HTTP</abbr> cada ciertos segundos a una ruta de la aplicación, Spring Boot proporciona una dependencia, _spring-boot-starter-actuator_, que usada provee del _endpoint /health_ para que Consul monitorice el estado del servicio.

{{< code file="build.gradle" language="groovy" options="" >}}

{{< image
    gallery="true"
    image1="image:service-health.png" optionsthumb1="300x200" title1="Endpoint de estado de servicio"
    caption="Endpoint de estado de servicio" >}}

Esta es la salida en la consola listando los servicios disponibles, siendo uno de ellos esta aplicación.

{{< code file="System.out" language="plaintext" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/SpringCloudConsul" command="./consul/consul.sh y ./gradlew run" >}}

{{< reference >}}
* [Spring Cloud][spring-cloud]
* [Spring Cloud Consul][spring-cloud-consul]
{{< /reference >}}

{{% /post %}}
