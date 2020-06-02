---
pid: 84
type: "post"
title: "Nueva visita a Herramientas para un proyecto Java"
url: "/2015/06/nueva-visita-a-herramientas-para-un-proyecto-java/"
date: 2015-06-12T20:00:00+02:00
updated: 2019-10-23T19:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "opinion", "planeta-codigo", "programacion"]
summary: "Las tecnologías para desarrollar una aplicación son un medio para resolver las necesidades del negocio o un cliente, no un fin. Pero esto no quiere decir que la elección sea trivial o poco importante, realizar las elecciones adecuadas según lo requisitos puede evitar complicaciones en un futuro. Para un proyecto basado en la plataforma Java esta es mi selección de herramientas de las que conozco."
---

{{% post %}}

{{< logotype image="java.svg" >}}

Hace 4 años escribí un [artículo comentando que tecnologías eligiría][elblogdepicodev-62] para un proyecto Java si tuviese posibilidad. Al ritmo que avanza la tecnología cuatro años es un tiempo bastante largo, también es un tiempo en el que he podido aprender y añadir a mi «caja de herramientas» nuevas opciones que después de evaluarlas me han gustado. En este artículo haré una nueva visita al artículo anterior y comentaré algunas nuevas herramientas.

### Lenguaje de programación

Como lenguaje de programación seguiría usando Java, en mi caso es el lenguaje que más conozco y sigue siendo una de las opciones más válidas. Pero con la salida de una nueva versión usaría Java 8. La [publicación de Java 8 incorporando varias novedades importantes][blogbitix-17] han mejorado varios aspectos de este lenguaje, por mencionar los más relevantes están la incorporación de _lambdas_ que proporciona una cierta forma de programación funcional, también destaca los _streams_ que permite describir los algoritmos que procesan datos de una forma más expresiva y legible además de aprovechar mejor los procesadores multinúcleo, métodos por defecto en interfaces que permite mantener compatibilidad hacia atrás (aunque esto interesa más a los desarrolladores que hacen APIs para que sean usadas por terceras partes), una nueva API para el manejo de fechas eliminando una de las críticas de versiones anteriores y algunas cosas más. El futuro con Java 9 es prometedor si presenta la interesante modularidad.

* [Novedades y nuevas características de Java 8][blogbitix-17]
* [10 razones para seguir usando Java][blogbitix-81]
* [Introducción y nuevas características de Java EE 7][blogbitix-131]
* [Novedades de la plataforma Java][blogbitix-serie-java-platform]

### Persistencia en base de datos

Para la persistencia en vez de usar la muy difundida librería [Hibernate][hibernate] usaría [jOOQ][jooq]. jOOQ es una librería que no tienen tanta magia como Hibernate que en muchas ocasiones produce errores complicados de resolver y no tenemos tanto control de lo que hace, por otro lado jOOQ devuelve a la base de datos y al lenguaje SQL la relevancia que con Hibernate queda abstraída con el mapeado del modelo de datos a objetos y el lenguaje HQL. jOOQ permite construir las sentencias SQL de forma programática con lo que el compilador nos indicará errores de compilación y nos validará los tipos que usemos, ambas cosas son importantes cuando hacemos un _refactor_ en alguna parte de la aplicación. En el artículo [alternativa a Hibernate y ejemplo jOOQ][blogbitix-82] entro en más detalles.

* [Alternativa a Hibernate y ejemplo jOOQ][blogbitix-82]

### Modificaciones de la base de datos

En un proyecto de larga duración y en el que se realicen mejoras probablemente necesitaremos modificar el modelo de la base de datos. Empleando la herramienta [Liquibase][liquibase] podremos [automatizar la actualización del esquema de la base de datos][elblogdepicodev-155] ya necesitemos añadir campos, cambiarlos de nombre, eliminarlos, crear o eliminar tablas, insertar, eliminar o actualizar datos. Estas actualizaciones de la base de datos se indican en un archivo que podemos guardar en nuestro repositorio de control de versiones de forma que podamos ver y reproducir los cambios que se han hecho a la base de datos a lo largo del tiempo.

* [Modificar la base de datos con Liquibase][elblogdepicodev-155]

### Pruebas

Para pruebas unitarias dos buenas posibilidades son [Spock][spock] y [Geb][geb]. Spock permite realizar los teses unitarias con un DSL bastante descriptivo que facilita la lectura posteriormente de la prueba. Por otro lado Geb permite automatizar las pruebas de las aplicaciones web proporcionando facilidades, se puede integrar con Spock.

* [Pruebas unitarias con Spock y Mockito][elblogdepicodev-114]
* [Pruebas funcionales con Geb en una aplicación web Java][blogbitix-332]
* [Pruebas de carga y rendimiento de un servicio web con Apache Bench][blogbitix-411]
* [Teses unitarios parametrizados con JUnit][blogbitix-410]

### Cliente

En el lado cliente de una aplicación web usaría la combinación de varias tecnologías, [jQuery][jquery] para acceder y manipular el DOM de la página web, [RequireJS][requirejs] para cargar los archivos necesarios en la página y evitar la polución del ámbito global javascript. Si la aplicación tiene una carga importante en el lado cliente usaría [Backbone][backbone], [React][react] y [Mustache][mustache], en el ejemplo [lista de tareas con Backbone y React][elblogdepicodev-152] puede verse como podría quedar el código, también [Jasmine][jasmine] para hacer pruebas unitarias en javascript.

* [Introduccion y ejemplo de RequireJS][elblogdepicodev-147]
* [Introducción y ejemplo de Backbone.js][elblogdepicodev-152]
* [Introducción y ejemplo de Mustache][elblogdepicodev-148]
* [Ejemplo de pruebas unitarias en javascript con Jasmine y Sinon][elblogdepicodev-154]
* [Ejemplo lista de tareas con Backbone y React][blogbitix-20]
* [Internacionalización (i18n) en JavaScript][blogbitix-63]
+ [Componentes en el cliente con Web Components usando JavaScript, HTML y CSS][blogbitix-388]

### _Framework_ web

Para el desarrollo de una página o aplicación web seguiría usando [Apache Tapestry][tapestry] por la productividad y alta reutilización que se puede conseguir, también por la flexibilidad, extensibilidad y adaptabilidad del _framework_. Descargando el [libro PlugIn Tapesty][blogbitix-12] puedes conocer muchos más detalles. Si se tratase de una aplicación REST evaluaría [Spark][sparkjava], [RESTEasy][resteasy] o [GraphQL][graphql] para proporcionar la interfaz exterior de los microservicios y quizá evaluaría [Apache Thrift][thrift] o [gRPC][grpc] para consumirlos internamente, Thrift permite acceder a la API de una forma programática más sencillamente que consumir una interfaz REST o GraphQL cruda. La tendencia actual es desarrollar microservicios y esto en las aplicaciones web supone que sean capaces de ofrecer su servicio por si mismas no usando un servidor de aplicaciones que hay que instalar previamente simplificando el despliegue a los administradores de sistemas, esto también se puede conseguir en parte usando [Docker][docker]. En vez de usar un [Tomcat][tomcat] tradicional podemos usar la versión embebible o [Spring Boot][spring-boot].

* [Libro sobre desarrollo de aplicaciones con Apache Tapestry][blogbitix-12]
* [Introducción y ejemplo de API RPC con Apache Thrift][blogbitix-72]
* [Aplicación web Java autocontenida con Tomcat Embedded][blogbitix-71]
* [Ejemplo sencillo de servicio web con RESTEasy][elblogdepicodev-142]
* [Aplicación Java autocontenida con Spring Boot][blogbitix-103]
* [Qué es GraphQL y ejemplo para una interfaz de un servicio con Spring Boot y Java][blogbitix-275]
+ [Dependencias sobre librerías de lado de cliente con Webjars en una aplicación web Java][blogbitix-325]

### Base de datos

Para una base de datos relacional en vez de [MySQL][mysql] usaría [PostgreSQL][postgresql]. PostgreSQL posee numerosas opciones avanzadas y es una de las bases de datos libres más reconocidas. El futuro de MySQL con Oracle y su escisión en MariaDB es más incierto además de no poseer algunas características que PostgreSQL sí.

Dependiendo del causística de la aplicación otras opciones complementarias son [Redis][redis] y [Mongo][mongodb], una base de datos clave-valor, una base de datos de documentos y en caso de tener que hacer búsquedas [Elasticsearch][elasticsearch].

* [Introducción a la base de datos relacional PostgreSQL][blogbitix-236]
* [Introducción a la base de datos NoSQL MongoDB][blogbitix-237]
* [Introducción a Elasticsearch][blogbitix-21]

### Entorno de desarrollo

Para el entorno de desarrollo o _devbox_ usaría [Docker][docker] y [Compose][docker-compose] que permiten disponer de un entorno más parecido al entorno de producción y en menos tiempo que instalando todo lo necesario en la máquina física. También podemos usar Docker para el entorno de producción. Para automatizar la tareas de configuración o despliegue usaría [Ansible][ansible] ya que al contrario de otras opciones no requiere instalar un agente en las máquinas a administrar, con un acceso SSH es suficiente.

* [Introducción y características de Docker][blogbitix-49]
* [Inicio básico de Docker][blogbitix-50]
* [Cómo crear una imagen para Docker usando un Dockerfile][blogbitix-51]
* [Introducción a Ansible][blogbitix-52]

### Hospedaje

En cuanto al alojamiento para la aplicación la nube es otra tendencia por su flexibilidad. La [nube de Amazon][amazon-ec2] proporciona muchos servicios que pueden sernos útiles sin embargo si nuestra aplicación no los necesita y no es demasiado complicada podemos optar por otras opciones más baratas. Dos opciones más baratas son [Linode][linode] o [Digital Ocean][digital-ocean] con las que por unos 5 o 10 € al mes podemos disponer de una máquina con 1 GIB de RAM, unos 30 GiB de discos SSD y una amplia transferencia de datos entrantes y salientes.

* [Nueva visita a 5+ opciones de «hosting» para aplicaciones][blogbitix-76]

### Otras

Hay otras herramientas aún pasado este tiempo seguiría usando como [Git][git] para el control de versiones, [GitLab][gitlab] como plataforma para desarrollo que incluye repositorio de git, gestión de peticiónes e integración continua además de otras funcionalidades en una única herramienta. [PMD][pmd] y [Checkstyle][checkstyle] para analizar el código fuente, [Gradle][gradle] como herramienta de construcción, [GNU/Linux][linux] tanto para desarrollar como para el servidor en el que desplegar la aplicación, [eclipse][eclipse] para editar código Java o [Visual Studio Code][microsoft-visual-studio-code] para editar archivos no Java, [JasperReports][jasperreports] para informes complejos, [Nginx][nginx] como servidor web, [Quartz][quartz] para lanzar tareas en ciertos momentos o regularmente, [Log4j][log4j] 2 para emitir trazas de la aplicación en vez las propuestas anteriormente (SLF4J o Logback), [less][less] para facilitar la escritura de hojas de estilo CSS y [Bootstrap][bootstrap] como estilos por defecto para una aplicación. O alguna nueva como [RabbitMQ][rabbitmq] para una comunicación entre aplicaciones o partes de ella basada en mensajes y de forma desacoplada.

* [GitLab, la completa herramienta integrada para desarrollo de software][blogbitix-290]
* [Análisis estático de código con PMD y un ejemplo][blogbitix-297]
* [Herramienta de construcción Gradle][elblogdepicodev-98]

Para cada un de estas herramientas en muchos casos tendremos varias alternativas similares para elegir, a veces elegir una u otra es algo subjetivo. Estas herramientas en muchos casos son de lo mejor que hay disponible pero perfectamente se pueden usar alternativas similares.

¿Cuales serán las herramientas que formarán el «estado del arte» dentro de otros cuatro años? ¿Cuales sobrevivirán y cuales perecerán en el camino? ¡Apasionante!

{{< reference >}}
* [Elegir herramientas para un proyecto][elblogdepicodev-62]
* [Build Your Own Technology Radar](http://nealford.com/memeagora/2013/05/28/build_your_own_technology_radar.html)
* [Technology Radar](http://www.thoughtworks.com/radar)
{{< /reference >}}

{{% /post %}}
