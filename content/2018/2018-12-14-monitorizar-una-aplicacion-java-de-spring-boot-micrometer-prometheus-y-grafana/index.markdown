---
pid: 366
type: "post"
title: "Monitorizar una aplicación Java de Spring Boot con Micrometer, Prometheus y Grafana"
url: "/2018/12/monitorizar-una-aplicacion-java-de-spring-boot-con-micrometer-prometheus-y-grafana/"
date: 2018-12-14T20:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion", "software", "spring"]
series: ["spring-cloud"]
---

{{% post %}}

{{< logotype image1="java.svg" image2="prometheus.svg" title2="Promehteus" width2="200" image3="grafana.svg" title3="Grafana" width3="200" >}}

Los [proyectos de Spring][spring-projects] no son tan conservadores como Java EE o ahora Jakata EE y se desarrollan a una velocidad mayor cubriendo de forma más temprana las necesidades de los programadores según evolucionan las tecnologías y se adoptan nuevos modelos de arquitectura.

Con el advenimiento de los microservicios, contenedores, la nube y aplicaciones autocontenidas Spring se ha adaptado con proyectos como [Spring Boot][spring-boot] y [Spring Cloud][spring-cloud]. En el asunto que ocupa este artículo de métricas con la versión 2 de Spring Boot se ha adoptado [Micrometer][micrometer] como librería para proporcionar las métricas.

Micrometer permite exportar a cualquiera de los más populares sistemas de monitorización los datos de las métricas. Usando Micrometer la aplicación se abstrae del sistema de métricas empleado pudiendo cambiar en un futuro si se desea. Uno de los sistemas más populares de monitorización es [Prometheus][prometheus] que se encarga de recoger y almacenar los datos de las métricas expuestas por las aplicaciones y ofrece un lenguaje de consulta de los datos con el que otras aplicaciones pueden visualizarlos en gráficas y paneles de control. [Grafana][grafana] es una de estas herramientas que permite visualizar los datos proporcionados por Prometheus. Estos sistemas de monitorización ofrecen un sistema de alertas que se integran entre otros con [Slack][slack].

En el artículo [Información y métricas de la aplicación con Spring Boot Actuator][blogbitix-113] mostraba como configurar Spring Boot y [Spring Boot Actuator][spring-boot-actuator] para exponer métricas en el _endpoint_ _/actuator/metrics_, con estas herramientas solo se exponen la clave y valor de cada métrica y solo en un momento dado. Pueden ser métricas del servicio como cantidad de CPU usada, memoria consumida y libre, espacio en almacenamiento, etc... o métricas de aplicación como número de peticiones realizadas al servicio, tiempo de respuesta, etc... Una de las funcionalidades de Prometheus es recolectar cada cierto tiempo los valores de estas métricas que da lugar a una colección de datos que varía en el tiempo y que Grafana puede visualizar en gráficas para una mucha mayor facilidad de comprensión que la enorme cantidad de datos en crudo.

Usando Spring Boot 2 exportar los datos para Prometheus es realmente sencillo, basta con incluir la dependencia _io.micrometer:micrometer-registry-prometheus_ mediante la herramienta de construcción, por ejemplo [Gradle][gradle], y automáticamente se expone en el _endpoint_ _/actuator/prometheus_ con la información de las métricas en el formato que espera Prometheus para recolectarla.

{{< code file="build.gradle" language="groovy" options="" >}}

Micrometer y Prometheus ofrecen varios tipos de métricas:

* _Counter_: representa un valor que se va incrementando a lo largo del tiempo. Puede ser el número de invocaciones recibidas por servicio.
* _Gauge_: representa un valor que arbitrariamente puede subir o bajar. Puede ser la cantidad de memoria usada.
* _Timer_: mide periodos de tiempo. Puede ser el tiempo de respuesta empleado para atender una petición de un servicio.
* _Distribution summaries_: recolecta la distribución de una serie de datos con los que se pueden obtener percentiles.

Utilizando el ejemplo que hice para la [serie de artículos sobre Spring Cloud][blogbitix-serie-spring-cloud] he añadido al micro servicio _service_ un contador con el número de invocaciones que se le ha realizado. Este dato se expone en el _endpoint_ con la clave _service.invocations_ como se ha definido al registrar el contador en Micrometer con la clase _MeterRegistry_. Además de esta métrica propia del servicio Spring Boot Actuator añade otras muchas más del uso de la CPU, memoria, ...

Una clase de una aplicación de Spring Boot que utiliza un _Counter_.

{{< code file="DefaultController.java" language="java" options="" >}}

Las claves de las métricas por defecto exportadas por Spring Boot Actuator.

{{< code file="actuator-metrics.json" language="json" options="" >}}

Los datos de una métrica en el _enpoint_ _/actuator/metrics/service.invocations_.

{{< code file="actuator-metrics-service-invocations.json" language="json" options="" >}}

Y las mismas métricas en el formato que espera Prometheus.

{{< code file="actuator-metrics-prometheus.txt" language="plaintext" options="" >}}

Para iniciar el ejemplo de Spring Cloud que consta de un servicio de registro y descubrimiento, un servicio de configuración, un servicio del que se pueden iniciar varias instancias y un cliente que hace peticiones hay que utilizar la siguiente serie de comandos.

{{< code file="gradlew-run.sh" language="bash" options="" >}}

Una vez expuestas las métricas en el formato que espera Prometheus este ya puede recolectarlas. Para usar Prometheus y posteriormente Grafana de forma fácil evitando tener que instalar y configurar nada se puede usar [Docker][docker], en este caso con [Docker Compose][docker-compose]. En la [serie de artículos sobre Docker][blogbitix-serie-docker] explico que proporciona Docker y como usar las varias herramientas que ofrece.

El archivo de Docker Compose contiene dos contenedores uno para Prometheus y otro para Grafana, con sus archivos de configuración. En la configuración de Prometheus se crean un _job_ que recolecta las métricas cada pocos segundos del servicio a través del _endpoint_ de métricas. En la configuración de Grafana se añade como una fuente de datos Prometheus, se puede añadir otras varias.

{{< code file="docker-compose.sh" language="bash" options="" >}}
{{< code file="docker-compose.yml" language="YAML" options="" >}}
{{< code file="prometheus.yml" language="YAML" options="" >}}
{{< code file="grafana-datasources.yml" language="YAML" options="" >}}

Prometheus posee la funcionalidad básica de crear gŕaficas con las métricas recogidas pero no tiene la habilidad de crear paneles que recogen una colección de gráficas relacionadas o un editor de consultas más avanzado como tiene Grafana.

{{< image
    gallery="true"
    image1="image:prometheus-graph.png" optionsthumb1="300x200" title1="Métrica de la aplicación en Prometheus"
    image2="image:grafana-graph.png" optionsthumb2="300x200" title2="Métrica de la aplicación en Grafana"
    caption="Métrica de la aplicación en Prometheus y Grafana" >}}

Una vez que Prometheus recolecta los datos de las métricas al introducir las expresiones se proporciona asistencia de código. Por otro lado, en la sección _Status > Targets_ de 
Prometheus se puede ver el estado de los servicios de los que recolecta métricas.

{{< image
    gallery="true"
    image1="image:prometheus-targets.png" optionsthumb1="300x200" title1="Estado de servicios en Prometheus"
    caption="Estado de los servicios rastreados por Prometheus" >}}

Como Spring Boot Actuator exporta muchas métricas del funcionamiento del servicio Grafana puede crear gráficas de todas ellas. No hace falta crear un _dashboard_ desde cero, se pueden descargar e importar _dashboards_. Este [ejemplo para Micrometer](https://grafana.com/dashboards/4701) recoge la memoria de la JVM (_heap_ y no _heap_), uso de CPU, carga, hilos, estado de hilos, descriptores de archivos, recolector de basura, _classloader_ y entrada/salida básica.

{{< image
    gallery="true"
    image1="image:grafana-spring-boot-micrometer-dashboard.png" optionsthumb1="600x450" title1="Estado de servicios en Prometheus"
    caption="Dashboard de una aplicación Spring Boot en Grafana" >}}

[Grafana tiene _plugins_](https://grafana.com/plugins) para añadir como fuentes de datos bases de datos relacionales para extraer mediante sentencias SQL y visualizar datos almacenados en [MySQL][mysql],  [PostgreSQL][postgresql] u [Oracle][oracle].

Con la información de las métricas se conoce más en detalle cual es el comportamiento normal de una aplicación y observar de forma rápida cuando se introducen cambios como afectan al comportamiento de la misma tanto de forma negativa como de forma positiva. En cualquier aplicación que ofrece un servicio es importante conocer su estado y actuar incluso antes de que ofrezca un mal comportamiento e incluso deje de prestar su servicio. La monitorización no sustituye sino que complementa un sistema de trazas que en una aplicación Java es común que se realice con [SLF4J][slf4j] o [Log4j][log4j].

Aún quedan algunas preguntas por responder ¿como agregar los datos de múltiples instancias? ¿si se crean nuevas instancias del servicio como puede conocer Prometheus los nuevos _targets_ que se han creado? En el ejemplo solo hay una instancia del servicio y la configuración de Prometheus es proporcionada por un archivo estático. Aún desconozco las respuestas, no lo he investigado en detalle, hay alguna [pregunta sobre este tema en StackOverflow](https://stackoverflow.com/questions/46910839/is-it-possible-to-setup-prometheus-with-eureka-sd-without-file-sd-configs) y por la respuesta Prometheus no tiene un adaptador para Eureka entre los [varios servicios de descubrimiento que sí soporta en su configuración](https://prometheus.io/docs/prometheus/latest/configuration/configuration/).

{{< sourcecode git="blog-ejemplos/tree/master/SpringCloud" command="./gradlew-run.sh, docker-compose up" >}}

{{< reference >}}
* [Using Prometheus with Spring Boot](https://njalnordmark.wordpress.com/2017/05/08/using-prometheus-with-spring-boot/)
* [Monitoring Spring Boot Applications with Prometheus – Part 1](https://raymondhlee.wordpress.com/2016/09/24/monitoring-spring-boot-applications-with-prometheus/)
* [Monitoring Spring Boot Applications with Prometheus – Part 2](https://raymondhlee.wordpress.com/2016/10/03/monitoring-spring-boot-applications-with-prometheus-part-2/)
* [Prometheus with Java EE](https://blog.sebastian-daschner.com/entries/prometheus-java-ee)
* [Add Eureka Service Discovery](https://github.com/prometheus/prometheus/pull/3369)
{{< /reference >}}

{{% /post %}}
