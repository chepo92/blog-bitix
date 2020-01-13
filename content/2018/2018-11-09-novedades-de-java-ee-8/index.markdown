---
pid: 360
type: "post"
title: "Novedades de Java EE 8"
url: "/2018/11/novedades-de-java-ee-8/"
date: 2018-11-09T17:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java-ee.png"
tags: ["java", "planeta-codigo", "programacion"]
series: ["java-platform"]
---

{{% post %}}

{{< logotype image1="java-ee.png" title1="Java EE" width1="200" image2="java.svg" >}}

La [publicación de Java 9][blogbitix-263] en agosto de 2017 con la importante novedad de los módulos ha hecho que la publicación de Java EE 8 haya pasado desapercibida. También ha contribuido el hecho de que [Oracle][oracle] haya entregado el desarrollo de futuras nuevas especificaciones de Java EE a la [fundación Eclipse][eclipse] con el objetivo de que sea más abierto a otras empresas, Java EE a partir de ahora bajo la fundación Eclipse se denominará [Jakarta EE][jakartaee]. Pasados algunos meses los servidores de aplicaciones ya están implementando las nuevas novedades de Java EE 8. Algunos de los servidores que ya soportan estas nuevas especificaciones y novedades son [Wildfly][wildfly], [Payara][payara] [Kumuluz][kumuluzee] o [Tomcat][tomcat] 9.

Hay algunas novedades de Java EE 8 entre ellas:

* Java Servlet 4.0 API con soporte para el protocolo HTTP/2, incluido el soporte para enviar recursos desde el servidor sin que el cliente los haya pedido aún a través del método [newPushBuilder()](https://javaee.github.io/javaee-spec/javadocs/javax/servlet/http/HttpServletRequest.html#newPushBuilder--) de la clase [HttpServletRequest](https://javaee.github.io/javaee-spec/javadocs/javax/servlet/http/HttpServletRequest.html).
* Soporte para JSON mejorado incluyendo una nueva API de _binding_.
* Eventos CDI asíncronos.
* Una nueva API de seguridad simple, estandarizada y modernizada.
* Soporte para las nuevas capacidades de Java 8 (pe. Date & Time API, Streams API, mejoras en las anotaciones).

El soporte para [HTTP/2 y sus importantes novedades][blogbitix-127] hace que desde Java se puedan aprovechar las mejoras en la segunda versión del protocolo HTTP y se aprovechan las [novedades de Java 8][blogbitix-17]. También en Java EE 8 se han actualizado de versión algunas de las especificaciones e incluido alguna nueva como la de la nueva API de seguridad que han de soportar los servidores de aplicaciones para ser compatibles:

* JSR 366 – Java EE 8 Platform
* JSR 365 – Contexts and Dependency Injection (CDI) 2.0
* JSR 367 – The Java API for JSON Binding (JSON-B) 1.0
* JSR 369 – Java Servlet 4.0
* JSR 370 – Java API for RESTful Web Services (JAX-RS) 2.1
* JSR 372 – JavaServer Faces (JSF) 2.3
* JSR 374 – Java API for JSON Processing (JSON-P)1.1
* JSR 375 – Java EE Security API 1.0
* JSR 380 – Bean Validation 2.0
* JSR 250 – Common Annotations 1.3
* JSR 338 – Java Persistence 2.2
* JSR 356 – Java API for WebSocket 1.1
* JSR 919 – JavaMail 1.6

Hay un [tutorial de Java EE 8](https://javaee.github.io/tutorial/) y con el [ejemplo FirstCup](https://javaee.github.io/firstcup/toc.html) se puede adquirir un buen conocimiento para desarrollar aplicaciones con el lenguaje Java. En el artículo [What's new in Java EE 8](https://www.ibm.com/developerworks/opensource/library/j-whats-new-in-javaee-8/index.html) hay unos pocos ejemplos de código con varias de estas novedades. Finalmente, con el traspaso de Java EE a la fundación Eclipse y por motivos de marca registrada el proyecto ha sido renombrado a Jakarta EE. Java EE o ahora Jakarta EE, [Microprofile][microprofile] y [Spring][spring] junto con algunos _frameworks_ especializados son las opciones más utilizadas para realizar aplicaciones en Java en el lado del servidor.

{{< reference >}}
* [Java Platform, Enterprise Edition 8 SDK - Release Notes](https://www.oracle.com/technetwork/java/javaee/documentation/ee8-release-notes-3894362.html)
* [What's new in Java EE 8](https://www.ibm.com/developerworks/opensource/library/j-whats-new-in-javaee-8/index.html)
* [Java EE 8 Overview](https://blogs.oracle.com/java/java-ee-8-overview)
* [Java™ EE at a Glance](https://www.oracle.com/technetwork/java/javaee/overview/index.html)
* [Java EE (GitHub)](https://javaee.github.io/)
* [Java EE Tutorial](https://javaee.github.io/tutorial/)
* [Java EE Tutorial (Content)](https://javaee.github.io/tutorial/toc.html)
* [Java EE Tutorial: Your First Cup](https://javaee.github.io/firstcup/toc.html)
* [From Java EE to Jakarta EE](https://www.infoq.com/news/2018/02/from-javaee-to-jakartaee)
* [An Overview of CDI Events](https://dzone.com/articles/an-overview-of-cdi-events)
* [Firing CDI events asynchronously](http://docs.jboss.org/cdi/spec/2.0/cdi-spec.html#firing_events_asynchronously)
{{< /reference >}}

{{% /post %}}
