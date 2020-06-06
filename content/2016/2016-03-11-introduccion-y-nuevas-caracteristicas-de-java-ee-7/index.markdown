---
pid: 131
type: "post"
title: "Introducción y nuevas características de Java EE 7"
url: "/2016/03/introduccion-y-nuevas-caracteristicas-de-java-ee-7/"
date: 2016-03-11T17:00:00+01:00
updated: 2016-09-17T12:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java-ee.png"
tags: ["java", "planeta-codigo", "programacion"]
series: ["java-platform"]
summary: "Java sigue siendo uno de los lenguajes más usado para desarrollar aplicaciones empresariales en entidades públicas o empresas privadas. Proporciona un conjunto de especificaciones que cubren las necesidades funcionales de la mayoría de las aplicaciones y sigue evolucionando, adaptándose a las nuevas tendencias actuales y agregando nuevas funcionalidades de forma estandarizada en la plataforma. Aún así muchas entidades siguen y seguirán usando versiones anteriores a la última tanto de Java EE como de Java."
---

{{% post %}}

{{< logotype image1="java-ee.png" title1="Java EE" width1="200" image2="java.svg" >}}

Hace ya unos años, en 2013, fue publicada una nueva versión del conjunto de especificaciones que forman parte de [Java EE][java-ee] con varias novedades y mejoras que aumentan la productividad. Java EE 7 es el conjunto de especificaciones a disposición de las aplicaciones empresariales que son implementadas por cada servidor de aplicaciones donde se ejecutan las _apps_ Java, estas especificaciones describen la funcionalidad y permiten que una aplicación pueda ser ejecutada en cualquier servidor que las implemente ya sea [WildFly][wildfly], [WebLogic][weblogic] o [WebSphere][websphere] sin necesidad de grandes cambios o ninguno en absoluto al proporcionar interoperabilidad entre diferentes implementaciones con el objetivo de no estar encadenado a un determinado vendedor.

Java EE usa como lenguaje de programación Java que incorporando numerosas [novedades en la versión 8][blogbitix-17] lo hacen seguir siendo uno de los mejores lenguajes y más usado para el desarrollo de aplicaciones empresariales. Estos son mis [10 razones para seguir usando Java][blogbitix-81].

El modelo clásico de capas en la arquitectura de las aplicaciones Java EE se divide en las siguientes:

* Cliente: normalmente se trata de un navegador pero puede ser un teléfono inteligente o una computadora de escritorio, incluso otra aplicación. Es la que presenta la información al usuario.
* Capa web: se comunica con el cliente y la capa de negocio. Obtiene los datos y los transforman al formato adecuado al cliente generalmente <abbr title="HyperText Markup Language">HTML</abbr> o <abbr title="JavaScript Object Notation">JSON</abbr>.
* Capa de negocio: proporciona y persiste los datos de la capa cliente y contiene la lógica de negocio de la aplicación. Se ejecuta en un servidor de aplicaciones o contenedor de _servlets_.
* Sistemas de información: donde se persisten los datos de la aplicación, puede ser una base de datos relacional como [Oracle][oracle], [MySQL][mysql] o [PostgreSQL][postgresql] o una base de datos NoSQL como [Redis][redis] o [MongoDB][mongodb] u otros sistemas como [Elasticsearch][elasticsearch].

{{< image
    gallery="true"
    image1="image:aplicaciones-multicapa-javaee.png" optionsthumb1="300x200" title1="Aplicaciones multicapa Java EE"
    caption="Aplicaciones multicapa Java EE" >}}

En el [listado de especificaciones](https://www.oracle.com/technetwork/java/javaee/tech/index.html) encontramos algunas dedicadas a persistencia en base de datos (JDBC, JPA), transaccionalidad (JTA), procesamiento de peticiones HTTP (Servlets, JSF, REST), generación de HTML (Servlets, JSP, JSF), servicios web basados en REST y SOAP (JAX-RS, JAX-WS), soporte para websockets en el lado del servidor y cliente, [generar, procesar y modificar documentos JSON][blogbitix-374], validación de objetos, comunicación entre aplicaciones desacoplada con mensajes (JMS), concurrencia, servicios de nombres y descubrimiento o trabajos en lotes entre otras. Las especificaciones y versiones que componen Java EE 7 son:

Tecnologías aplicaciones Web (websockets, html)

* **Java API for WebSocket** 1.0 (nueva)
* **Java API for JSON Processing** 1.0 (nueva)
* Java Servlet 3.1
* JavaServer Faces (JSF) 2.2
* Expression Language (EL) 3.0
* JavaServer Pages (JSP) 2.3

Tecnologías aplicaciones empresariales (persistencia, transaccionalidad, inyección de dependencias, concurrencia, validación, mensajería, correos electrónicos)

* **Batch Applications for the Java Platform** 1.0 (nueva)
* **Concurrency Utilities for Java EE** 1.0 (nueva)
* Contexts and Dependency Injection for Java (CDI) 1.1
* Dependency Injection for Java 1.0
* Java Persistence (JPA) 2.1
* Java Transaction API (JTA) 1.2
* Java Message Service API (JMS) 2.0
* Enterprise JavaBeans (EJB) 3.2
* Bean Validation 1.1
* JavaMail 1.5
* Interceptors 1.2
* Java EE Connector Architecture (JCA) 1.7
* Common Annotations for the Java Platform 1.2

Tecnologías servicios web (servicios web REST, SOAP)

* Java API for RESTful Web Services (JAX-RS) 2.0
* Java API for XML-Based Web Services (JAX-WS) 2.2
* Implementing Enterprise Web Services 1.3

Metadatos de servicios web para la plataforma Java

* Java API for XML-Based RPC (JAX-RPC) 1.1 (Opcional)
* Java API for XML Messaging 1.3
* Java API for XML Registries (JAXR) 1.0

Tecnologías de gestión y seguridad (autenticación, autorización)

* Java Authentication Service Provider Interface for Containers (JASPIC) 1.1
* Java Authorization Contract for Containers (JACC) 1.5
* Java EE Application Deployment 1.2  (Opcional)
* J2EE Management 1.1
* Debugging Support for Other Languages 1.0

Especificaciones relacionadas con Java EE en Java SE (bases de datos, XML, gestión)

* Java Database Connectivity (JDBC) 4.0
* Java Architecture for XML Binding (JAXB) 2.2
* Java Management Extensions (JMX) 2.0
* JavaBeans Activation _framework_ (JAF) 1.1
* Java API for XML Processing (JAXP) 1.3
* Streaming API for XML (StAX) 1.0

Además de incorporar nuevas especificaciones y las existentes recibir mejoras entre las novedades se encuentran varias que facilitan el desarrollo posibilitando en gran medida prescindir de configuración en archivos <abbr title="eXtensible Markup Language">XML</abbr> propensos a errores, ya se inició en Java EE 6, sustituyéndose por definiciones declarativas con anotaciones. Entre las mejoras están:

* Usando la nueva funcionalidad de entrada y salida (NIO) de Java SE los _servlets_ pueden manejar comunicación asíncrona. Se permite _upgrade_ del protocolo lo que permite por ejemplo empezar una petición como HTTP/1.1 y pasar a usar HTTP/2, en WildFly esto es usado para reducir el número de puertos abiertos.
* JPA ahora puede invocar procedimientos almacenados, ejecutar sentencias SQL de _update_ y _delete_ masivas y controlar que entidades son cargadas de forma ansiosa (_eager_) o vaga (_lazy_).
* Se continúa avanzando en lo iniciado en versiones anteriores permitiendo usar POJO con anotaciones para facilitar el desarrollo.
* JTA define una nueva anotación que permite a cualquier _bean_ CDI usar transacciones.
* En JAX-RS se añade una API cliente para invocar _enpoints_ REST, se añade soporte para E/S asíncrona tanto para el cliente como para el servidor y _hypermedia linking_.
* Bean Validation permite validación a nivel de método con mejor integración en el resto de la plataforma Java EE.

Los servidores de aplicaciones Java pueden implementar todas las especificaciones denominándose _full-profile_ como JBoss/WildFly, WebLogic o WebSphere. Sin embargo, algunas aplicaciones no necesitan todas las funcionalidades definidas en Java EE por lo que algunos servidores como [TomEE][tomee] también WildFly pueden implementar únicamente un subconjunto para la generación de contenido web, denominándose así _web-profile_. Otros servidores como [Tomcat][tomcat] y [Jetty][jetty] son contenedores de _servlets_ que soportan un grupo más reducido de especificaciones de las tecnologías web (únicamente _servlet_, JSP, EL y WebSocket) pero que siguen siendo suficientes para algunas aplicaciones o usando algunas equivalentes proporcionadas por Spring.

Tecnologías _web-profile_

* Java Servlet API
* Enterprise Java Bean Lite
* Context and Dependency Injection
* Java Server Faces
* Java Transaction API
* Java Persistence API
* Web Socket
* Bean Validation
* JAX-RS
* JSON-P

Java EE 7 fué publicada hace ya varios años y muy posiblemente muchas entidades públicas y empresas privadas seguirán usando versiones más antiguas para sus aplicaciones. En el mundo empresarial las aplicaciones se han de mantener funcionando algunos lustros o décadas, para atender este requisito Java en sus 20 años se ha caracterizado por ofrecer compatibilidad hacia atrás en cada nueva versión e incorporar en el lenguaje solo aquellas mejoras que se han mostrado útiles. Esto puede hacer parecer que avanza lentamente, al menos más que otras tecnologías, y que usando las versiones anteriores hoy parezcan obsoletas, en su momento XML era uno de los formatos más empleados para realizar configuración y se usaba profusamente, hoy se están prefiriendo formatos menos verbosos y legibles como JSON y YAML. [Java 8 ofrece varias novedades en el lenguaje][blogbitix-17] y Java EE 7 usando anotaciones en gran medida hace innecesarios los ficheros XML ambos siguiendo las nuevas tendencias del desarrollo y programación. Algunas personas comparan las tecnologías que prefieren con lo que recuerdan de versiones antiguas de Java o Java EE.

Java EE ofrece a los desarrolladores un conjunto de especificaciones que cubren las necesidades de un gran número de aplicaciones empresariales y la plataforma ofrece garantías a largo plazo como ha demostrado que le hacen seguir siendo una de opciones preferidas para el desarrollo. La alternativa a Java EE más usada es [Spring] y sus numerosos proyectos que proporcionan funcionalidades similares sin necesidad de un contenedor _full-profile_. En cualquiera de estas dos opciones la base de procesamiento y generación de HTML en el lado del servidor son los _servlets_ pero estos trabajan a bajo nivel, no se suelen usar directamente prefiriéndose _frameworks_ de más alto nivel como [Spring MVC][spring-framework], [Apache Tapestry][tapestry], [Grails][grails], [Struts][struts] u otros. Del mismo modo para el acceso a la base de datos está JDBC pero tampoco se suele usar directamente por ofrecer una API a bajo nivel prefiriendo [Hibernate][hibernate], JPA o [jOOQ como alternativa a JDBC a los ORM][blogbitix-82] anteriores. En el artículo [Nueva visita a Herramientas para un proyecto Java][blogbitix-84] comento algunas herramientas alternativas o complementarias a algunas de las especificaciones de Java EE.

Algunos libros que he he leído y me han gustado para conocer las nuevas posibilidades de Java EE 7 son los siguientes, [Java EE 7 Essentials](https://amzn.to/2sEyvVi) que no entra en muchos detalles pero hace un repaso general de todo e incluye ejemplos de cada cosa con suficientes pormenores para empezar a programar, [Java EE 7 Development with WildFly](https://amzn.to/2STrgmX) entra un poco más en detalle y explica varias cosas del servidor de aplicaciones WildFly, [Java EE 7 Developer Handbook](https://amzn.to/2Fl048P) repasa igualmente Java EE 7 con numerosos ejemplos de código, finalmente también es posible consultar el [tutorial oficial de Java EE 7](https://docs.oracle.com/javaee/7/JEETT.pdf).

{{< amazon
    linkids="c616c3f3eef393473f0af785d1eb8309,3708b1d14af899f26e43d0bade797dd7,d7fc3436deb932f471b629b68667d7ae"
    asins="B00EJX7WEQ,B00RP13D9M,B00FDLOF66" >}}

El futuro Java EE 8 está planificado para 2017 fecha también planificada para Java 9 en la que se añadirá soporte para HTTP/2 y será la versión 4.0 de los _servlets_. Pero no hace falta esperar hasta el 2017 para aprovecharnos hoy de las [ventajas de HTTP/2 tanto para clientes como servidores][blogbitix-127], los principales navegadores ya lo soportan y se puede [configurar HTTP/2 en varios servidores web y de aplicaciones Java][blogbitix-129] como [Nginx][nginx], [Apache HTTPD][apache-httpd], WildFly o Jetty. También se ha anunciado que como alternativa a JSF basado en componentes se proporcionará una especificación que implemente el patrón MVC basado en acciones.

Descrito, en el otro artículo presentaré un [ejemplo de aplicación usando Java EE 7][blogbitix-136] mostrando algunas de sus funcionalidades como JSF, WebSockets, REST, EJB o JMS usando el [servidor de aplicaciones WildFly][blogbitix-10].

Por cierto, como nota para técnicos, reclutadores, empresas y páginas de empleo, Java EE pasó a llamarse así en el ¡2006!, hace una década, ya es hora actualizarse también y dejar de llamarlo incorrectamente J2EE o JEE.

{{< reference >}}
* [Aplicación de ejemplo usando varias especificaciones de Java EE 7][blogbitix-136]
* [Ejemplo de API REST en Java con JAX-RS y Spring Boot][blogbitix-178]
* [Java EE](https://en.wikipedia.org/wiki/Java_Platform,_Enterprise_Edition)
* [Java EE 7 Tutorial](https://docs.oracle.com/javaee/7/tutorial/)
* [Java EE 7 Technologies](https://www.oracle.com/technetwork/java/javaee/tech/index.html)
* [Novedades y nuevas características de Java 8][blogbitix-17]
* [10 motivos para seguir usando Java][blogbitix-81]
* [Introducción al protocolo HTTP/2][blogbitix-127]
* [Configurar HTTP/2 en Nginx, Apache HTTPD, WildFly o Jetty][blogbitix-129]
* [El servidor de aplicaciones JBoss/WildFly][blogbitix-10]
* [Alternativa a Hibernate u ORM y ejemplo de jOOQ][blogbitix-82]
{{< /reference >}}

{{% /post %}}
