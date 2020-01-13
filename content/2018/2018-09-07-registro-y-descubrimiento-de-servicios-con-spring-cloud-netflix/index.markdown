---
pid: 344
type: "post"
title: "Registro y descubrimiento de servicios con Spring Cloud Netflix"
url: "/2018/09/registro-y-descubrimiento-de-servicios-con-spring-cloud-netflix/"
date: 2018-09-07T19:00:00+02:00
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

Los microservicios en una aplicación con una arquitectura de microservicios son efímeros, se crean, se escalan para atender picos de mayor demanda, pueden desaparecer por problemas de la red de comunicaciones que no es fiable y volverse a crear en una ubicación diferente. Por esta naturaleza efímera es necesario un servicio con el cual los clientes de los microservicios puedan encontrarlos y que los microservicios utilizan para registrarse cuando se inician.

Este servicio de registro y descubrimiento es esencial y crítico en una aplicación orientada a microservicios ya que sin él los clientes no pueden encontrar los servicios que necesitan. Dado que es un servicio esencial es necesario que esté siempre disponible y para ello es recomendable crear un cluster de servicios de registro y descubrimiento para que en caso de que una instancia de este servicio falle estén disponibles otras instancias para los clientes.

Una [implementación de registro y descubrimiento es Consul][blogbitix-206], [Consul][consul] es un servicio externo creado por [Hashicorp][hashicorp]. [Spring Cloud][spring-cloud] entre sus proyectos, [Spring Cloud Netflix][spring-cloud-netflix], proporciona una implementación con [Eureka][netflix-eureka] de servicio de registro y descubrimiento que se pueden embeber en una aplicación de [Spring Boot][spring-boot].

Para crear un servidor Eureka con Spring y Spring Boot hay que crear una aplicación con las dependencias adecuadas y la anotación _@EnableEurekaServer_ para habilitar el inicio del servidor de registro y descubrimiento. Además, establecer las propiedades de configuración adecuadas para que el cluster de servidores Eureka se forme. Este microservicio es el primero que ha de iniciarse en una aplicación orientada a microservicios.

Utilizando [Gradle][gradle] las dependencias y la anotación _@EnableEurekaServer_ a añadir a la clase principal de la aplicación son las siguientes.

{{< code file="build.gradle" language="groovy" options="" >}}
{{< code file="Main.java" language="java" options="" >}}

La propiedad de configuración principal para formar el cluster es _eureka.client.serviceURL.defaultZone_ donde se especifica una lista _hostnames_ donde están los servidores de registro y descubrimiento. Para dar a cada servidor en local un nombre de dominio distinto he usado el servicio de DNS [xip.io][xipio] que resuleve el nombre de dominio a la dirección IP indicada en el propio nombre de dominio, así _ds1.127.0.0.1.xip.io_ se resuelve a _127.0.0.1_ que es la dirección para la propia máquina local al igual que _ds2.127.0.0.1.xip.io_ y _ds3.127.0.0.1.xip.io_. El servicio de xip.io evita tener que crear en el archivo de _hosts_ local una correspondencia entre nombre de _hostname_ y la dirección IP de _loopback_ de la propia máquina local.

En el archivo de configuración hay tres perfiles distintos que varían algunas propiedades según sea el perfil que se active al iniciar la instancia del servicio. En el perfil _ds1_ el puerto donde se inicia el servicio es _8761_, con el perfil _ds2_ el servicio se inicia en el puerto _8762_ y con _ds3_ en el _8763_, además se cambia el _hostname_ para que la instancia sepa cual es.

{{< code file="application.yml" language="YAML" options="" >}}

Los comandos para arrancar tres instancias de servidor de registro y descubrimiento utilizando varios perfiles de configuración de Spring son los siguientes.

{{< code file="run-discoveryserver.sh" language="bash" options="" >}}

Estando disponible el servicio de registro y descubrimiento ya se puede iniciar el servicio de configuración. Con estos dos servicios de infraestructura iniciados los que sería un servicio de la aplicación ya puede iniciarse que consiste en este caso en obtener una referencia de una instancia del servicio de configuración registada en el servicio de registro y descubrimiento, con esta referencia obtiene su configuración y se inicia.

{{< code file="run-configserver.sh" language="bash" options="" >}}
{{< code file="run-service.sh" language="bash" options="" >}}

Una vez iniciados los servidores de descubrimiento en la página _dashboard_ de cualquiera de ellos cambiando el puerto de la dirección _http\://ds1.127.0.0.1.xip.io:8761/_ se observan varias propiedades como la lista de servidores del cluster, las réplicas registradas y disponibles y los servicios registrados con su ubicación y puerto. En este caso hay tres instancias del servicio de registro y descubrimiento, una de servidor de configuración y dos instancias de un servicio. 

{{< image
    gallery="true"
    image1="image:spring-eureka-1.png" optionsthumb1="300x200" title1="Cluster del servicio de registro y descubrimiento"
    image2="image:spring-eureka-2.png" optionsthumb2="300x200" title2="Servicios registrados en el servicio de registro y descubrimiento"
    caption="Servicios y su estado registrados en el servicio de registro y descubrimiento" >}}

{{< sourcecode git="blog-ejemplos/tree/master/SpringCloud" command="./gradlew discoveryserver:run --args=\"--spring.profiles.active=ds1\"" >}}

{{% /post %}}
