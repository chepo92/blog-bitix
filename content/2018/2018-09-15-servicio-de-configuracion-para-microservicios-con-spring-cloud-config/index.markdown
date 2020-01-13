---
pid: 346
type: "post"
title: "Servicio de configuración para microservicios con Spring Cloud Config"
url: "/2018/09/servicio-de-configuracion-para-microservicios-con-spring-cloud-config/"
date: 2018-09-15T16:00:00+02:00
updated: 2018-09-15T19:30:00+02:00
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

Al igual que un servicio de registro y descubrimiento es esencial para los microservicios un servicio de obtención de configuración de donde puedan obtener su configuración es también básico. Dado el gran número de microservicios de los que puede estar compuesta una aplicación, su carácter efímero, los varios entornos de ejecución (desarrollo, pruebas, producción, ...) mantener centralizada la configuración en un único sitio hace las cosas mucho más sencillas cuando hay que cambiar el valor de alguna propiedad, en vez de la alternativa aún externalizada del artefacto del microservicio en el sistema de archivos del entorno de ejecución.

Dado que este servicio de configuración es esencial para que los microservicios puedan obtener su configuración sin la cual no podrían proporcionar su funcionalidad hay que configurarlo de tal manera que sea tolerante a fallos. Una de las medidas para hacerlo tolerante a fallos es iniciar varias instancias de servidores de configuración, estas instancias se autoregistran en el servicio de descubrimiento para que los microservicios puedan descubrirlos y obtener su configuración al iniciarse.

Con el comando <code>./gradlew configserver:run --args="--port=8090"</code> se inicia una instancia de servicio de configuración en el puerto _8090_, cambiando el número de puerto se puede iniciar otra instancia en el puerto especificado. Una vez iniciadas varias instancias en el _dashboard_ del servicio de descubrimiento se observa como se autoregistran y su estado.

{{< code file="gradlew-run.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:spring-eureka-2.png" optionsthumb1="300x200" title1="Servicios registrados en el servicio de registro y descubrimiento"
    caption="Servicios y su estado registrados en el servicio de registro y descubrimiento" >}}

Dado que los servicios de configuración no pueden confiar en obtener su configuración de una instancia de su servicio de configuración ha de establecerse en el propio microservicio los nombres de _host_ de las instancias de registro y descubrimiento en las que registrarse, en la propiedad _eureka.client.serviceUrl.defaultZone_.

{{< code file="bootstrap.yml" language="YAML" options="" >}}
{{< code file="application.yml" language="YAML" options="" >}}

Los archivos de configuración para los microservicios en este ejemplo están en el directorio _misc/config_ donde siguiendo algunas convenciones para asignar el nombre a los archivos se pueden personalizar las configuraciones de los microservicios según el entorno y perfil con el que se active. En este caso se utiliza lo que [Spring Cloud Config][spring-cloud-config] denomina un _filesystem backend_, sin embargo, hay otras disponibles como un repositorio de [git][git] el cual ofrece varias ventajas propias de un repositorio de código como historial, ramas de trabajo y hacer cambios con un _commit_.

Un microservicio o aplicación de [Spring][spring] que use un servidor de Spring Cloud Config una de las primeras acciones que realiza al iniciarse es obtener su configuración en función del nombre del microservicio y perfil con el que se inicie. Dado que la configuración se obtiene en el inicio en base a su nombre y perfil tanto el nombre del microservicio y su perfil de configuración se ha de configurar en el archivo _bootstrap.yml_.

El proceso de configuración de un microservicio está formado por dos pasos, en el primero el servicio se conecta al servicio de registro y descubrimiento obtiene los servicios registrados de configuración y en el segundo paso solicita a uno de ellos su configuración.

{{< code file="bootstrap-service.yml" language="YAML" options="" >}}
{{< code file="service.yml" language="YAML" options="" >}}
{{< code file="client.yml" language="YAML" options="" >}}

El servicio de configuración es accesible mediante una interfaz REST. Para obtener la configuración del servicio _service_ y del servicio _client_ de este ejemplo las URLs para obtenerlas son las siguientes. Estos _endpoints_ devuelven en formato _json_ un documento con los valores de las propiedades principalmente están en el mapa _source_ entre otros datos que Spring al iniciar la aplicación con ellos configura la aplicación.

{{< code file="curl.sh" language="bash" options="" >}}
{{< code file="service-config.json" language="json" options="" >}}
{{< code file="client-config.json" language="json" options="" >}}

En otro artículo relacionado con la configuración de los microservicios comentaré [como recargar la configuración de los microservicios sin necesidad de reiniciarlos][blogbitix-349] y _como almacenar datos sensibles de forma cifrada_ para mayor seguridad.

{{< sourcecode git="blog-ejemplos/tree/master/SpringCloud" command="./gradlew run:configserver --args=\"port=8090\"" >}}

{{< reference >}}
* [Spring Cloud Config, Git](http://cloud.spring.io/spring-cloud-static/spring-cloud-config/2.0.1.RELEASE/single/spring-cloud-config.html#_git_backend)
* [Spring Cloud Config, Vault](http://cloud.spring.io/spring-cloud-static/spring-cloud-config/2.0.1.RELEASE/single/spring-cloud-config.html#vault-backend)
* [Spring Cloud Config, JDBC](http://cloud.spring.io/spring-cloud-static/spring-cloud-config/2.0.1.RELEASE/single/spring-cloud-config.html#_jdbc_backend)
* [Spring Cloud Config, Externalized Configuration](https://docs.spring.io/spring-boot/docs/2.0.4.RELEASE/reference/htmlsingle/#boot-features-external-config)
{{< /reference >}}

{{% /post %}}
