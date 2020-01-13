---
pid: 103
type: "post"
title: "Aplicación Java autocontenida con Spring Boot"
url: "/2015/10/aplicacion-java-autocontenida-con-spring-boot/"
date: 2015-10-13T00:00:00+02:00
updated: 2015-12-06T12:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:spring.svg"
tags: ["java", "planeta-codigo", "programacion", "spring"]
series: ["spring-cloud"]
summary: "Si queremos una aplicación Java autocontenida ya sea una aplicación de linea de comandos, de escritorio o aplicación web que use el contenedor de dependencias de Spring podemos usar Spring Boot. Además de inicializar el contenedor IoC de Spring, Spring Boot proporciona en una aplicación web elegir el servidor de aplicaciones de entre el por defecto Tomcat y los seleccionables Jetty y Undertow junto con algunas funcionalidades más."
---

{{% post %}}

{{< logotype image1="spring.svg" title1="Spring" width1="200" image2="java.svg" >}}

Tradicionalmente las aplicaciones Java web han sido instaladas en un contenedor de _servlets_ como [Tomcat][tomcat] o [Jetty][jetty] y [Wildfly][wildfly], [JBoss][jboss] o [Weblogic][weblogic] si necesita más servicios que son ofrecidos por la plataforma <abbr title="Java Enterprise Edition">Java EE</abbr> completa como <abbr title="Java Message Service">JMS</abbr>, <abbr title="Java Persistence API">JPA</abbr>, <abbr title="Java Transaction API">JTA</abbr> o <abbr title="Enterprise JavaBeans">EJB</abbr>. Aunque las aplicaciones se ejecutan independientemente unas de otras comparten el entorno de ejecución del servidor de aplicaciones, algunas aplicaciones no necesitarán todos los servicios que ofrecen los servidores de aplicaciones en su implementación del perfil completo Java EE y algunas nuevas aplicaciones pueden necesitar hacer uso de una nueva versión de un servicio como JMS con funcionalidades mejoradas. En el primer caso algunos servicios son innecesarios y en el segundo la actualización del servidor de aplicaciones se ha de producir para todas las aplicaciones que en él se ejecuten o tener varias versiones del mismo servidor de aplicaciones e ir instalando las aplicaciones en la versión del servidor según las versiones de los servicios para las que se desarrolló la aplicación.

Los microservicios proponen una aproximación diferente al despliegue de las aplicaciones prefiriendo entre otros aspectos que sean autocontenidos de tal forma que puedan evolucionar independieintemente unas de otras. Se puede [ejecutar una aplicación web Java de forma autocontenida con la versión embebida de Tomcat][blogbitix-71], Jetty también ofrece una versión embebible que puede usarse de forma similar de tal modo que ya no necesitemos instalar previamente además del <abbr title="Java Development Kit">JDK</abbr> la versión del servidor de aplicaciones que necesite.

Otra forma de poder hacer la aplicación autocontenida es con [Spring Boot][spring-boot], internamente usa una versión embebible del servidor de aplicaciones de la misma forma que lo podemos usar directamente, la ventaja al usar Spring Boot es que soporta Tomcat, Jetty o [Undertow][undertow] y pasar de usar uno a otro es muy sencillo y prácticamente transparente para la aplicación, además proporciona algunas características adicionales como inicializar el contenedor <abbr title="Inversion of Control">IoC</abbr> de [Spring][spring], configuración, perfiles para diferentes entornos (desarrollo, pruebas, producción), monitorización y métricas del servidor de aplicaciones y soporte para [la herramienta de automaticación Gradle][elblogdepicodev-98] entre algunas más. En el siguiente ejemplo mostraré como ejecutar una aplicación Java y una aplicación web Java con Spring Boot que usa [jOOQ como alternativa a Hibernate][blogbitix-82], [Apache Tapestry como _framework_ web][blogbitix-12], [Liquibase para crear el esquema y tablas de la base de datos][elblogdepicodev-155] y por simplicidad [H2][h2] como base de datos.

Los mostrado en este artículo es solo una pequeña parte de lo que ofrece Sring Boot, en el libro [Spring Boot in Action](https://amzn.to/39GvW5x) se comenta en mucho más detalle y de forma didáctica, un libro muy recomendable para adentrarse rápidamente en ste nuevo mundo de posibilidades.

{{< amazon
    linkids="61b49fc8ef6bdf7c80975908df76d4af"
    asins="1617292540" >}}

Spring Boot proporciona un _plugin_, _spring-boot_, para [Gradle][gradle] que deberemos añadir al archivo _build.gradle_, a partir de este momento dispondremos algunas tareas adicionales en el proyecto como _bootRun_ para ejecutar la aplicación desde Gradle (similar a la opción _run_ y el parámetro _mainClassName_ que añade el _plugin application_) y _bootRepackage_ para poder ejecutar la aplicación con el comando <code>java -jar</code>.

{{< code file="build.gradle" language="groovy" options="" >}}

El punto de inicio de una aplicación de Spring Boot es una clase Java con su tradicional método _main_, en el ejemplo la clase _Main_. Bastan tres lineas para iniciar la aplicación y una anotación. Anotando con [<code>@SpringBootApplication</code>](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/autoconfigure/SpringBootApplication.html) la clase que contiene el método _main_ activaremos Spring Boot y el procesado de las anotaciones de Spring. En el método _main_ estableciendo la clase contexto de la aplicación variaremos el tipo de aplicación [AnnotationConfigApplicationContext](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/context/annotation/AnnotationConfigApplicationContext.html) para una aplicación de linea de comandos o de escritorio y [AnnotationConfigWebApplicationContext](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/context/support/AnnotationConfigWebApplicationContext.html) para las aplicaciones web que inicializará el servidor de aplicaciones embebido. Implementando la interfaz [CommandLineRunner](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/CommandLineRunner.html) en la clase que contiene la anotación _SpringBootApplication_  y su método _run_ será el punto de entrada de la aplicación, en el método recibiremos los parámetros de la linea de comandos. Implementar esta interfaz es opcional en las aplicaciones web.

{{< code file="Main.java" language="java" options="" >}}

La clase _AppConfiguration_ contiene la definición de _beans_ propios del contenedor de inversión de control de las aplicaciones que serán inyectados en las clases donde se indiquen. Pero además definiendo algunos _beans_ podremos configurar el servidor de aplicaciones embebido y la aplicación. Con el _bean_ [ServletContextInitializer](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/SpringServletContainerInitializer.html) podemos definir parámetros de inicialización, filtros, _servlets_, listeners, propiedades de _cookies_ y obtener información del entorno. Con el _bean_ [EmbeddedServletContainerCustomizer](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/context/embedded/EmbeddedServletContainerCustomizer.html) podemos añadir páginas de error para estados como 404 o 500, configurar el puerto de servicio, establecer la dirección IP, el contexto de la aplicación, directorio raíz de archivos del servidor web, SSL/TLS y tiempo de vida de las sesiones. Con el _bean_ [TomcatConnectorCustomizer](https://docs.spring.io/autorepo/docs/spring-boot/current/api/org/springframework/boot/context/embedded/tomcat/TomcatConnectorCustomizer.html) se pueden personalizar diferentes parámetros del conector y con el _bean_ [TomcatContextCustomizer](https://docs.spring.io/autorepo/docs/spring-boot/current/api/org/springframework/boot/context/embedded/tomcat/TomcatContextCustomizer.html) varios parámetros del contexto que en un Tomcat instalado como paquete de software configuraríamos mediante el archivo de configuración _server.xml_ o _context.xml_. Para que las peticiones se procesen por el _framework_ web Tapestry se define su filtro en el ejemplo o si fuese el caso un _servlet_. Toda esta configuración es similar a lo que definimos en el archivo _web.xml_, pero en código Java al ser validado por el compilador es menos propenso a errores que los archivos de texto xml.

{{< code file="AppConfiguration.java" language="java" options="" >}}

No será muy común pero si queremos configurar algunas propiedades internas como las [válvulas de Tomcat](https://tomcat.apache.org/tomcat-8.0-doc/config/valve.html) que funcionalmente es similar a un filtro de una aplicación web Java podemos definir un _bean_ del tipo [TomcatEmbeddedServletContainerFactory](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/context/embedded/tomcat/TomcatEmbeddedServletContainerFactory.html), con esta factoría además podremos configurar muchas de las propiedades que podemos configurar con ServletContextInitializer y EmbeddedServletContainerCustomizer pero salvo por las válvulas que es específico de Tomcat la forma preferida hacer la configuración es con estas últimas clases.

Si en vez de usar Tomcat queremos usar Jetty o Undertow debemos cambiar las dependencias de la aplicación, excluimos la dependencia transitiva Tomcat y por defecto de _spring-boot-starter-web_ e incluimos la propia del servidor que deseemos.
[spring-boot-starter-jetty](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#howto-use-jetty-instead-of-tomcat) para Jetty y [spring-boot-starter-undertow](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#howto-use-undertow-instead-of-tomcat) para Undertow. En el siguiente código la configuración a modificar en el archivo _build.gradle_ para ambas.

{{< code file="build-jetty.gradle" language="groovy" options="" >}}
{{< code file="build-undertow.gradle" language="groovy" options="" >}}

El resto de esta aplicación de ejemplo es propio de [jOOQ][jooq] y de [Apache Tapestry][tapestry]. Para inicializar la base de datos H2 antes de ejecutar la aplicación debemos ejecutar la tarea de Gradle _updataDatabase_ que creará las base de datos, esquema y tablas con la herramienta [Liquibase][liquibase].

{{< code file="update-database.sh" language="bash" options="" >}}

El [código fuente del ejemplo completo](https://github.com/picodotdev/blog-ejemplos/tree/master/SpringBoot) puedes encontrarlo en el repositorio de ejemplos de Blog Bitix, arrancarlo y acceder con el navegador a la dirección _http\://localhost:8080/_.

{{< code file="run.sh" language="bash" options="" >}}

En el siguiente vídeo puede verse como es la salida en la terminal cuando la aplicación se arranca con Gradle y con el comando <code>java -jar</code>.

{{< asciinema id="27694" caption="Uso de Spring Boot con Gradle y Java" >}}

Añadiendo la dependencia [Spring Boot Actuator][spring-boot-actuator] podemos [obtener información de estado y métricas en las aplicaciones Spring Boot][blogbitix-113].

En un repositorio de GitHub de Spring hay muchos más [ejemplos sobre Spring Boot](https://github.com/spring-projects/spring-boot/tree/master/spring-boot-samples).

{{< reference >}}
* [Documentación de Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
* [Información y métricas de aplicación con Spring Boot Actuator][blogbitix-113]
* [Configuración de una aplicación en diferentes entornos con Spring Cloud Config][blogbitix-112]
* [Aplicación web Java de forma autontenida con la versión embebida de Tomcat][blogbitix-71]
* [La herramienta de automaticación Gradle][elblogdepicodev-98]
* [Alternativa a Hibernate u ORM y ejemplo de jOOQ][blogbitix-82]
{{< /reference >}}

{{% /post %}}
