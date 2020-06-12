---
pid: 113
type: "post"
title: "Información y métricas de la aplicación con Spring Boot Actuator"
url: "/2015/12/informacion-y-metricas-de-la-aplicacion-con-spring-boot-actuator/"
date: 2015-12-04T17:30:00+01:00
updated: 2015-12-11T23:25:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:spring.svg"
tags: ["java", "planeta-codigo", "programacion", "spring"]
series: ["spring-cloud"]
summary: "Desarrollar una aplicación no solo implica implementar su funcionalidad, esa aplicación ha de mantenerse funcionando en su entorno de producción. Monitorizar y disponer de información sobre el estado ayuda a mantenerla funcionando sin ninguna caída de servicio u obtener métricas para mejorar su funcionamiento. Entre las numerosas funcionalidades ofrecidas por Spring para las aplicaciones Java está Spring Boot Actuator que precisamente nos proporcionará métricas e información interesantes de serie pudiendo implementar nueva según la necesidades."
---

{{% post %}}

{{< logotype image1="spring.svg"  image2="java.svg" >}}

Es conveniente tener monitorizado el estado de una aplicación para conocer si el servicio que ofrece está funcionando o en caso de que no conocerlo cuanto antes para restaurarlo además de conocer otra serie de métricas básicas como la cantidad de <abbr title="Central Processing Unit">CPU</abbr> que se está usando, la cantidad de memoria usada y libre, número de _threads_ instanciados, espacio ocupado y libre en disco, actividad de entrada y salida ya sea de red o de disco, tiempo de inicio del sistema y de la aplicación. Otras métricas a nivel de aplicación que puede interesarnos conocer es número de usuarios conectados, número de sesiones, páginas vistas, sentencias SQL o transacciones ejecutadas, ... que podemos obtener directamente desde la aplicación o combinándolo con otras herramientas como [Google Analytics][google-analytics].

Monitorizar el estado de la aplicación nos permitirá conocer en poco tiempo si hay algo que va mal con la intención de restaurar el servicio con el menor tiempo de caída, también nos permitirá conociendo las métricas normales del servicio si hay algún parámetro fuera de los valores típicos como un consumo excesivo de CPU, memoria o disco, conociendo la normalidad podremos descubrir la anormalidad y después corregirla, cuanto antes sea descubierta más sencillo será determinar el cambio que la ha provocado.

Continuando la serie de artículos sobre [Spring Boot][spring-boot] y [Spring Cloud][spring-cloud] comentaré la utilidad [Spring Boot Actuator][spring-boot-actuator] que precisamente proporciona métricas y permite monitorizar una aplicación. En un aplicación que use Spring Boot simplemente incluyendo la dependencia _org.springframework.boot:spring-boot-starter-actuator_ se añadirán a la aplicación varios _endpoints_ para consultar información. Hay varios, estos son solo algunos de la [lista completa](https://docs.spring.io/spring-boot/docs/1.5.x/reference/htmlsingle/#production-ready-endpoints):

* _beans_: permite conocer los _beans_ de la aplicación.
* _configprops_: muestra las propiedades de configuración.
* _env_: muestra información de la clase [ConfigurableEnvironment](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/core/env/ConfigurableEnvironment.html) que incluye propiedades del sistema.
* _health_: permite conocer si la aplicación está en funcionamiento.
* _info_: muestra información arbitraria sobre la aplicacion.
* _metrics_: permite obtener los valores de las métricas.
* _trace_: información de las últimas peticiones a la aplicación.

Salvo _health_ e _info_ los demás _endpoints_ contienen información sensible y no son accesibles pudiendo requerir un usuario/contraseña según como se configure el permiso para su acceso. Con las propiedades de configuración booleanas `endpoints.[endpoint].sensitive` y `endpoints.[endpoint].enabled` se puede cambiar si el servicio se considera sensible y si está activado respectivamente. Para permitir el acceso sin restricciones a las métricas y habilitar el _endpoint_ para detener la aplicación necesitaríamos establecer las siguientes propiedades de configuración:

{{< code file="application.yml" language="YAML" options="" >}}

El _endpoint_ _info_ mostrará todas las propiedades con el patrón `info.\*` y con el _plugin_ de [Gradle][gradle] [com.gorylenko.gradle-git-properties](https://plugins.gradle.org/plugin/com.gorylenko.gradle-git-properties) también podremos conocer el _commit_ y rama del código fuente del archivo _.jar_ en ejecución. Se pueden implementar nuevos indicadores de salud escribiendo un componente de Spring que implemente la interfaz [HealthIndicator](https://docs.spring.io/spring-boot/docs/1.5.x/api/org/springframework/boot/actuate/health/HealthIndicator.html). Con la propiedad de configuración `management.context-path` se puede cambiar el _path_ usado para todos los _endpoint_ de forma que no colisione con los propios de la aplicación. También se puede cambiar el puerto y dirección <abbr title="Internet Protocol">IP</abbr> de la aplicación en el que se ofrecen los _endpoints_ con las propiedad de configuración `management.port` y `management.address` y protegerlos con un cortafuegos. Dependiendo de la combinación de seguridad requerida y consideración de sensibilidad se muestra más información o solo información de estado.

Las métricas ofrecidas en el _endpoint_ _metrics_ por Spring Boot Actuator muestran información del sistema (memoria total, procesadores, tipo de inicio de aplicación y sistema, carga media, memoria usada, _threads_, clases cargadas y información del recolector de basura de Java), información de los _datasource_ (número de conexiones establecidas y uso actual), métricas de las caches, usando [Tomcat][tomcat] de las sesiones (actuales y máximas). Haciendo uso de los servicios de Spring [CounterService](https://docs.spring.io/spring-boot/docs/1.5.x/api/org/springframework/boot/actuate/metrics/CounterService.html) y [GaugeService](https://docs.spring.io/spring-boot/docs/1.5.x/api/org/springframework/boot/actuate/metrics/GaugeService.html) se pueden establecer métricas relativas y absolutas en cualquier punto de la aplicación con la lógica que deseemos.

En la aplicación Spring Boot incluyendo la dependencia de Spring Boot Actuator en el archivo _build.gradle_ del proyecto podemos acceder a los _endpoints_ comentados en las <abbr title="Uniform Resource Locator">URL</abbr> según el puerto y contexto de la interfaz de administración.

{{< code file="build.gradle" language="groovy" options="" >}}

{{< image
    gallery="true"
    image1="image:spring-boot-actuator-health.png" optionsthumb1="300x200" title1="Spring Boot Actuator endpoint Health"
    image2="image:spring-boot-actuator-env.png" optionsthumb2="300x200" title2="Spring Boot Actuator endpoint Env"
    image3="image:spring-boot-actuator-metrics.png" optionsthumb3="300x200" title3="Spring Boot Actuator endpoint Metrics"
    caption="Spring Boot Actuator endpoints health, env y metrics " >}}

Spring Boot Actuator es otro de los varios módulos disponibles en Spring Boot. Para conocer más en detalle cuales son sus posibilidades el libro [Spring Boot in Action](https://amzn.to/2SVtJNU) lo explica bastante bien.

{{< amazon
    linkids="f900d5c99d0e0007341953a3065f4631"
    asins="1617292540" >}}

De cualquier modo conviene también tener automatizada la monitorización de las métricas. Con estos _endpoints_ y una herramienta como [Prometheus][prometheus] podemos visualizar gráficas generadas con los datos a lo largo del tiempo, con los datos visualizados de forma gráfica podremos ver rápidamente picos, cambios bruscos y tendencias en alguno de ellos o compararlos con tiempos pasados. Esta misma herramienta nos puede servir para enviar alertas y notificaciones o hacer consultas sobre los datos recolectados.

Con Uptime Robot y el _endpoint_ _health_ podemos [monitorizar la aplicación y recibir notificaciones][blogbitix-114] si en algún momento la aplicación deja de responder.

{{< sourcecode git="blog-ejemplos/tree/master/SpringBoot" command="./gradlew run" >}}

{{< reference >}}
* [Aplicación Java autocontenida con Spring Boot][blogbitix-103]
* [Configuración de una aplicación en diferentes entornos con Spring Cloud Config][blogbitix-112]
* [Monitorizar estado de sitios web con Uptime Robot][blogbitix-114]
{{< /reference >}}

{{% /post %}}
