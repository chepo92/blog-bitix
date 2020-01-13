---
pid: 343
type: "post"
title: "Aplicaciones basadas en microservicios"
url: "/2018/08/aplicaciones-basadas-en-microservicios/"
date: 2018-08-31T18:00:00+02:00
updated: 2018-09-02T12:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:spring.svg"
tags: ["planeta-codigo", "programacion", "spring"]
series: ["spring-cloud"]
---

{{% post %}}

{{< logotype image1="spring.svg" title1="Spring" width1="200" image2="java.svg" >}}

La arquitectura de las aplicaciones está cambiando en lo que era lo habitual hace no tanto. Con el desarrollo de las redes de comunicación entre computadoras tanto en una red local con ethernet como en internet con el protocolo TCP/IP se desarrollaron las primeras aplicaciones cliente/servidor como es un servidor web y un navegador o una base de datos y una aplicación.

A las páginas HTML de los servidores web, estáticas hasta entonces, se les añadió lógica de servidor para procesar datos y generar el contenido dinámicamente, se crearon las aplicaciones web ejecutadas en el servidor en un principio en lo que ahora denominamos monolitos en forma de [código espagueti][codigo-espagueti] o más estructurado con los denominados _frameworks_ del lenguaje de programación de turno empleando el [modelo de tres capas](https://es.wikipedia.org/wiki/Programaci%C3%B3n_por_capas) formadas por la presentación, lógica y base de datos.

Más recientemente con las nuevas posibilidades de la virtualización, los contenedores, la computación en nube con la flexibilidad que aporta de reservar recursos de computación bajo demanda en minutos y para evitar varios problemas que presentan los monolitos se evoluciona hacia microservicios. Esto no quiere decir que los monolitos con este nombre con cierto matiz peyorativo que ha adquirido no sigan siendo perfectamente válidos en algunos contextos en los que ahora se usan sin embargo en el contexto de la computación en la nube y servicio para un gran número de peticiones, usuarios o aplicación funcionalmente grande los microservicios son una mejor adaptación.

Los problemas que presentan las aplicaciones monolíticas donde toda la lógica está en una aplicación en un servidor son:

* Son grandes y difíciles de modificar.
* Realizan múltiples funcionalidades.
* Hay un único punto de fallo, un error puede afectar al sistema entero.
* Requieren escalar el monolito entero lo que es poco eficiente.
* Hacen muy difícil emplear la tecnología más adecuada para cada problema de la aplicación o adoptar nuevas.
* Los despliegues de nuevas versiones pueden ser problemáticos por el tamaño de la aplicación.

{{< image
    gallery="true"
    image1="image:monolith.png" optionsthumb1="600x450" title1="Arquitectura basada en 3 capas"
    caption="Arquitectura basada en 3 capas" >}}

Los microservicios surgen como alternativa tratando de resolver los problemas de las aplicaciones monolíticas aunque planteando nuevos retos pero también varios beneficios:

* Las aplicaciones basadas en microservicios se componen de múltiples aplicaciones cada una con un contexto delimitado pequeño que se comunican mediante la red.
* Son más pequeños con una base de código menor y por tanto más fáciles de modificar o en su caso reemplazar siempre se implemente la misma interfaz o contrato.
* No son tan dependientes de la tecnología pudiendo elegir la más adecuada en cada uno de ellos.
* Al ser más pequeños se pueden escalar más fácilmente horizontalmente si no mantienen estado, basta con escalar el servicio que lo requiera.
* Arrancan más rápido y son más fáciles de desplegar.
* Cada microservicio puede estar desarrollado por un equipo diferente centrado en ese servicio.

Pueden ser una aplicación que ofrezca una API en forma de REST, [GraphQL][graphql] o RPC para una determinada funcionalidad o una aplicación que consuma otros microservicios y proporcione la interfaz para un navegador web.

{{< image
    gallery="true"
    image1="image:microservices.png" optionsthumb1="600x450" title1="Arquitectura basada en microservicios"
    caption="Arquitectura basada en microservicios" >}}

Algunos nuevos retos de los microservicios son:

* Añaden complejidad. Son más numerosos y requieren más procesos para su ejecución. Esto obliga a automatizar su gestión para que sea manejable con el menor número de tareas manuales posibles. Forman un sistema distribuido.
* Difícil integrar cambios si afectan a varios servicios.
* Cada microservicio al ser responsable de sus propios datos y formar un sistema de información distribuido plantea problemas en como compartirlos y dificultando la transaccionalidad y consistencia del sistema, se suele optar por una eventual consistencia. Al estar los datos distribuidos se plantea la dificultad de elaborar informes, una posibilidad es consolidar los datos en un única base de datos para la tarea mediante exportaciones de las bases de datos origen.
* Como centralizar los registros de trazas.
* Como centralizar los accesos.
* Obtener métricas y monitorización, a nivel de microservicio (cpu, memoria, espacio disco, red, ...) y de negocio (eventos, operaciones, transacciones, ...).
* Como hacer que los microservicios se descubran entre ellos.
* Si un microservicios falla los que dependan de él fallarán, al comunicarse por un medio no totalmente fiable como la red se pueden producir errores. El sistema se ha de hacer tolerante a fallos.

Para modelar los microservicios y definir que funcionalidad contiene cada uno de los que forman el sistema se opta por utilizar _bounded contex_ y _domain driven design_. Cada microservicio debe ser altamente cohesivo donde toda su funcionalidad esté relacionada y realizar una o muy pocas tareas siendo propietario de los datos de su contexto delimitado.

En el ámbito Java el proyecto [Spring][spring] se compone de varios adaptados a la nueva realidad de los microservicios y [Java EE][java-ee] a partir de la versión 8 ahora denominada [Jakarta EE][jakartaee] y [Microprofile][microprofile] proporcionan funcionalidades más adaptadas a las necesidades de las arquitecturas basadas en microservicios.

* [Spring Boot][spring-boot] como una forma de embeber en una aplicación Java con un servidor web de forma que la aplicación sea autocontenida y no requiera un servidor web preinstalado.
* [Spring Cloud Config][spring-cloud-config] para gestionar la configuración.
* [Spring Session][spring-session] para hacer que los microservicios web no mantengan estado y sean escalables.
* [Spring Boot Actautor][spring-boot-actuator] para monitorización y métricas.
* [Eureka][netflix-eureka] para registro y descubrimiento de servicios.
* [Hystrix][netflix-hystrix] con una implementación del patrón _circuit breaker_ para proporcionar resilencia.

De varios de estos proyectos ya he escrito varios artículos pero escribiré algunos más para completar varias áreas que aún no he comentado. Algunos de ellos serán:

* Como hacer el [descubrimiento de servicios con Spring Cloud utilizando el servidor Eureka][blogbitix-344] mostrando incluso como crear un _cluster_ de servicios de descubrimiento para mayor disponibilidad y tolerancia a fallos, esto útil al mismo tiempo que de gran importancia ya que este servicio es crítico para el correcto funcionamiento de los microservicios.
* Como crear un [servicio de configuración del cual los microservicios obtengan su configuración][blogbitix-346] por ejemplo según el entorno o para mantenerla centralizada, este servicio también es crítico y requiere de varias instancias de este servicio.
* Como [cambiar la configuración de los microservicios sin necesidad de reiniciarlos][blogbitix-349].
* Como mantener cifrada partes sensibles de la configuración como son las contraseñas, _bearers_ de autenticación, URLs de conexión u otra información especialmente sensible para la seguridad.
* Un cliente que realiza balanceo de carga entre múltiples instancias de los servicios utilizando Ribbon.
* Un cliente de microservicio que implementa el patrón _circuit breaker_ con la librería Hystrix y _timeouts_ para ser tolerante a fallos al llamar a otros microservicios.

Según vaya escribiendo y publicando los artículos aparecerán en la lista de la serie de artículos. El ejemplo en el que me basaré para estos lo añado a continuación.

{{< sourcecode git="blog-ejemplos/tree/master/SpringCloud" >}}

{{< reference >}}
* [Monolithic vs. Microservices Architecture](https://articles.microservices.com/monolithic-vs-microservices-architecture-5c4848858f59)
{{< /reference >}}
