---
pid: 178
type: "post"
title: "Ejemplo de API REST en Java con JAX-RS y Spring Boot"
url: "/2016/09/ejemplo-de-api-rest-en-java-con-jax-rs-y-spring-boot/"
date: 2016-09-17T12:00:00+02:00
update: 2017-12-18T22:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion", "spring"]
---

{{% post %}}

{{< logotype image1="java.svg" image2="spring.svg" title2="Spring Framework" width2="200" >}}

En Java a través de JAX-RS, una de entre las varias [especificaciones de JavaEE][blogbitix-131], podemos desarrollar servicios web basados en [<abbr title="Representational State Transfer">REST</abbr>][rest] y [<abbr title="JavaScript Object Notation">JSON</abbr>][json]. Estos servicios web al usar la infraestructura de la web y el protocolo HTTP podemos hacer uso de facilidades que proporciona como [cacheo][blogbitix-165], [protocolo seguro][blogbitix-151], [HTTP/2][blogbitix-127], [compresión][blogbitix-155] o autenticación. Usando [Spring Boot][spring-boot] podemos desarrollar servicios web autocontenidos al igual que podemos hacer con las aplicaciones web tradicionales.

Para facilitar el inicio de los proyectos podemos usar [Spring Initializr][spring-initializr] seleccionando los módulos web y JAX-RS con la implementación de referencia [Jersey][jersey]. Al proyecto creado deberemos añadir los servicios que queramos proporcionar. En el ejemplo añadiré uno muy sencillo que devuelva un nuevo mensaje creado en un servicio inyectado en la clase del recurso del servicio REST.

Esta es la definición del _bean_ del servicio que creará el mensaje para el contenedor de inversión de control, también definimos el recurso del servicio REST para Jersey.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="JerseyConfig.java" language="java" options="" >}}

El servicio lo definimos en una interfaz y una clase que la implementa.

{{< code file="MessageService.java" language="java" options="" >}}
{{< code file="DefaultMessageService.java" language="java" options="" >}}
{{< code file="Message.java" language="java" options="" >}}

 Es habitual que los servicios REST produzca como resultado un JSON como formato para devolver los datos. No necesitaremos hacer nada especial para convertir el _Java Bean_ de la clase _Message_ a JSON, de ello se encargará automáticamente JAX-RS. Con anotaciones como [@QueryParam](https://docs.oracle.com/javaee/7/api/javax/ws/rs/QueryParam.html) podemos obtener los parámetros del _query string_, de la URL o cabeceras enviadas.

{{< code file="MessageResource.java" language="java" options="" >}}

Iniciada la aplicación con <code>./gradlew run</code> y con la siguiente comando de <code>curl</code> y URL obtendremos el mensaje en formato JSON en la salida.

{{< code file="curl.sh" language="bash" options="" >}}
{{< code file="out.txt" language="plaintext" options="" >}}

Al diseñar APIs REST más complejas que este sencillo ejemplo conviene conocer el término [HATEOAS][hateoas]. Deberemos definir como organizar la información devuelta por los diferentes que los libros [RESTful Web APIs](https://amzn.to/2cxWMRo) y [REST in Practice](https://amzn.to/2cEzQz5) además de [artículos con consejos sobre como diseñar APIs RESTful](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api).

{{< amazon
    linkids="e0cd589f357dfc1c77cfb004e6668fa5&internal=1,3b1ee2b6ff595b6b3c2fd7c70eb35cc7&internal=1"
    asins="1449358063,0596805829" >}}

Una vez que disponemos del servicio REST podemos [añadir autenticación y autorización con Keycloak como proveedor de OAuth][blogbitix-180]. 

Otra alternativa a una interfaz REST es usar [GraphQL][graphql] que muestro en el artículo [Ejemplo de GraphQL para una interfaz de un servicio con Spring Boot y Java][blogbitix-275]

{{< sourcecode git="blog-ejemplos/tree/master/SpringBootJaxrs" command="./gradlew run" >}}

{{< reference >}}
* [Introducción y nuevas características de Java EE 7][blogbitix-131]
* [Aplicación de ejemplo usando varias especificaciones de Java EE 7][blogbitix-136]
* [Buenas prácticas para el diseño de una API RESTful pragmática](https://elbauldelprogramador.com/buenas-practicas-para-el-diseno-de-una-api-restful-pragmatica/)
{{< /reference >}}

{{% /post %}}
