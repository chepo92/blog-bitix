---
pid: 436
type: "post"
title: "Microservicios con Spring Cloud, Consul, Nomad y Traefik"
url: "/2019/10/microservicios-con-spring-cloud-consul-nomad-y-traefik/"
date: 2019-10-12T02:30:00+02:00
updated: 2020-03-11T11:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:consul.png"
tags: ["java", "planeta-codigo", "programacion", "software", "software-libre"]
series: ["hashicorp", "spring-cloud"]
summary: "Sin entrar a si los microservicios son adecuados o no son adecuados en una aplicación, está claro que si se utilizan estos tienen varias necesidades. Un servicio de registro y descubrimiento, configuración centralizada, tolerancia a fallos, _gateway/load balancer/reverse proxy_, trazabilidad y métricas, autenticación, orquestación, ... Los microservicios quiza no sean un gran monolito, quizá mas pequeños y con funcinalidad más acotada, pero el hecho de que se comuniquen a través de un medio más complejo y menos fiable como la red en vez de una llamada a un método y sean más numerosos hacen que la complejidad sea incluso mayor. Este artículo propone un ejemplo con Spring Cloud para los servicios, Consul para el registro y descubrimiento, Nomad para la orquestación y Traefik como _gateway_."
---

{{% post %}}

{{< logotype image1="java.svg" image2="spring.svg"  >}}

En otro artículo mostraba un ejemplo de [microservicios con Spring Cloud][blogbitix-344] usando únicamente herramientas de [Spring][spring]. Cada una de esas herramientas cubren una funcionalidad que necesitan los microservicios. Entre ellas:

* Registro y descubrimiento, con [Eureka][netflix-eureka]. Los microservicios son numerosos, de vida efímera creándose y destruyéndose en diferentes ubicaciones por lo tanto necesitan una forma de localizarse unos a otros, la forma para encontrarse es acudiendo a un servicio donde se registran cuando se inician y se descubren cuando necesitan la ubicación de otro servicio.
* Configuración centralizada, con [Spring Cloud Config][spring-cloud-config]. Dado el número de microservicios actualizar la configuración de cada uno de ellos puede ser un problema, además dado que se pueden iniciar en diferentes ubicaciones aprovisionarles la configuración adecuada es un reto. En vez de aprovisionar la configuración otra técnica es hacer que cuando se inicien la obtengan de un servicio donde queda centralizada la configuración.
* Tolerancia a fallos, con [Hyxtrix][netflix-hystrix] y [Resilience4j][resilience4j]. El medio de comunicación de los microservicios es a través de la red un medio mucho menos confiable que una llamada a un método en un lenguaje de programación en una aplicación monolítica. De modo que los microservicios han de estar preparados para tolerar fallos en sus comunicaciones con otros servicios.
* _Gateway_, _load balancer_ y _reverse proxy_ con tolerancia a fallos, con [Zuul][netflix-zuul]. Para aumentar la disponibilidad, escalabilidad y tolerar fallos en algunos servicios se suelen crear varias instancias de cada microservicio pero tener varias instancias hace que sea necesario balancear la carga entre cada una de las instancias. Para que los clientes sean agnósticos del número de instancias se emplea un _gateway_ que proporciona balanceo de carga e implementa a su vez patrones de tolerancia a fallos.
* Trazabilidad y correlación de trazas entre diferentes servicios, con [Spring Cloud Sleuth][spring-cloud-sleuth]. Una petición puede desencadenar una cadena de peticiones entre diferentes servicios ubicados en múltiples nodos, para tareas de diagnóstico en caso de querer investigar un _bug_ o que ha ocurrido es necesario correlacionar todas las trazas que ha desencadenado una petición, se implementa asignado un identificativo global a la petición que es transmitido en las llamadas de microservicio a microservicio.

En otro [ejemplo sobre OAuth con Spring][blogbitix-382] mostraba otra funcionalidad:

* _Gateway_, con [Spring Cloud Gateway][spring-cloud-gateway].
* Autenticación y autorización, con [Spring Security OAuth][spring-security-oauth].

Los microservicios también necesitan monitorización y métricas, en el ejemplo [Monitorizar una aplicación Java de Spring Boot con Micrometer, Prometheus y Grafana][blogbitix-366]:

* Con [Prometheus][prometheus] y [Grafana][grafana]. Nuevamente el número de instancias que requiere una arquitectura orientada a microservicios origina la necesidad en mayor medida de conocer el estado del sistema, ya sean métricas de los sistemas como uso de CPU, memoria o almacenamiento o de la aplicación como peticiones por segundo y porcentaje de correctas e incorrectas.

En esta lista falta un orquestador para el despliegue de los microservicios, que se encargue de su ciclo de vida, escalado de instancias y despliegue con estrategias _rolling_, _blue/green_ y _canary_. Es una cosa que le faltaba al ejemplo de microservicios con Spring Cloud.

* Orquestador de servicios, con [Nomad][nomad]. [Introducción a Nomad para gestionar aplicaciones y microservicios][blogbitix-398], [Estrategias de despliegue para microservicios con Nomad][blogbitix-399].

Además, en este ejemplo reemplazo varias de estas herramientas de Spring. Sustituyo el servicio de registro y descubrimiento proporcionado por Eureka por [Consul][consul], el _gateway_, _load balancer_ y _reverse proxy_ proporcionado por Zuul por [Traefik][traefik] y añado el orquestador de microservicios [Nomad][nomad].

{{< image
    gallery="false"
    image1="logotype:consul.svg" optionsthumb1="200x200" title1="Consul"
    image2="logotype:nomad.svg" optionsthumb2="200x200" title1="Nomad"
    image3="logotype:traefik.svg" optionsthumb3="200x200" title1="Traefik" >}}

Traefik se configura con los servicios iniciados en los contenedores de Docker utilizando junto con los bloques o _stanzas_ de _config_ y _tags_ en la definición de los servicios de Nomad. Según el criterio definido por el servicio Traefik es capaz de redirigir el tráfico que le llegue al servicio apropiado, entre las posibilidades que puede realizar Traefik es balanceo de carga entre las múltiples instancias que se hayan definido pero también implementa patrones de tolerancia a fallos con reintentos, el patrón _circuit breaker_ o limitar el tráfico para evitar saturar a un servicio con demasiadas peticiones.

El esquema de servicios sería el siguiente. Los _job_ son enviados a Nomad desde la linea de comandos que inicia los contenedores en Docker y registra los servicios en Consul, Traefik monitoriza el catálogo de servicios registrados en Consul y se autoconfigura según los _tags_ asociados a los servicios, los _tags_ se especificar en los archivos de los servicios para Nomad. Una vez iniciados los servicios desde la terminal con un _curl_ o desde la aplicación cliente que accede a Consul para conocer la ubicación del servicio de Traefik envían una petición a Traefik que haciendo balanceo de carga la reenvía a una de las instancias del servicio, el servicio responde y Traefik envía la respuesta al cliente.

{{< image
    gallery="true"
    image1="image:esquema-arquitectura.png" optionsthumb1="600x450" title1="Esquema arquitectura"
    caption="Esquema arquitectura" >}}

La ejecución del ejemplo requiere [Docker][docker] ya que es en este caso el _driver_ empleado en Nomad para ejecutar los servicios del servicio de configuración, el _gateway_, el servicio y el cliente del servicio. Nomad además se encarga de registrar los servicios en el servicio de registro y descubrimiento de Consul.

Los contenedores de Docker se añade a una misma red para que puedan comunicarse entre ellos, ha de ser así hasta que no se resuelva una [petición de Docker para que los contenedores puedan comunicarse con la máquina _host_](https://github.com/docker/for-linux/issues/264) que los alberga.

{{< code file="docker-network-create.sh" language="bash" options="" >}}

Poteriormente hay que ejecutar Consul y Nomad tras lo cual se puede acceder a sus consolas de estado.

{{< code file="nomad-consul-run.sh" language="bash" options="" >}}

Enviar a Nomad los _job_ de Traefik tras lo cual se puede acceder a su consola de estado. El siguiente paso es enviar el _job_ del servicio que proporciona la configuración a los microservicios. Lo anterior únicamente es infraestructura aún no hay ningún servicio que proporcione alguna funcionalidad, la funcionalidad que proporciona el servicio implementado con Spring es simplemente devolver un mensaje como respuesta a la petición que se le realice, se envía el _job_ del servicio a Nomad. Finalmente, el servicio es consumido por un cliente que realiza una petición al servicio cada 1 segundo.

{{< code file="nomad-job-run.sh" language="bash" options="" >}}

Definición de un servicio en un _job_ para Nomad. _count_ define cuantas instancias del servicio se inicia, la _stanza_ _update_ define como será la actualización cuando se actualice el servicio, la _stanza_ _labels_ contiene la configuración para Traefik, _check_ define los parámetros para la monitorización.

{{< code file="service.nomad" language="hcl" options="" >}}

Tanto Consul, Nomad como Traefik ofrecen una consola para ver su estado ubicadas en las siguientes direcciones respectivamente accesibles con el navegador _http\://127.0.0.1:8500_, _http\://127.0.0.1:4646_, _http\://127.0.0.1:8092_.

{{< image
    gallery="true"
    image1="image:consul.png" optionsthumb1="200x150" title1="Consul"
    image2="image:nomad-1.png" optionsthumb2="200x150" title2="Nomad"
    image3="image:nomad-2.png" optionsthumb3="200x150" title3="Nomad" >}}
{{< image
    gallery="true"
    image1="image:traefik-1.png" optionsthumb1="200x150" title1="Traefik"
    image2="image:traefik-2.png" optionsthumb2="200x150" title2="Traefik"
    caption="Consolas de administración de Consul, Nomad y Traefik" >}}

El código del servicio, del cliente implementados con Spring y la salida del cliente son los siguientes.

{{< code file="DefaultController.java" language="java" options="" >}}
{{< code file="ProxyService.java" language="java" options="" >}}

Como hay 2 instancias del servicio y Traefik realiza balanceo de carga utilizando el algoritmo _round robbin_ se observa en la salida con las respuestas que la dirección IP que ha atendido la petición es alternativamente una de las dos instancias del servicio.

{{< code file="System.out" language="plaintext" options="" >}}

En un momento posterior si surge la necesidad de querer desplegar una nueva versión del microservicio basta con generar de nuevo el artefacto del microservicio, cambiando la versión en el archivo _build.gradle_. El despliegue de la nueva versión se realizan mediante la estrategia _canary_, manteniendo las instancias con la versión anterior del servicio y añadiendo una nueva con la nueva versión. Si se descubre algún error en la instancia _canary_ se puede revertir el estado a la versión anterior, que consiste en detener la instancia _canary_. Una vez se comprueba que la instancia con la nueva versión funciona correctamente analizando sus trazas y métricas se envía la order a Nomad de promocionar las instancias de forma progresiva con la versión antigua a la nueva versión.

{{< code file="nomad-job-promote.sh" language="bash" options="" >}}

El servicio exporta métricas en formato para Prometheus que con Grafana. Según se realizan peticiones al servicio el valor de métrica de contador de llamadas al servicio aumenta de forma progresiva.

{{< code file="service-prometheus.sh" language="bash" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/SpringCloudConsulNomadTraefik" command="./run.sh" %}}

{{% /post %}}
