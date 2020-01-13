---
pid: 352
type: "post"
title: "Tolerancia a fallos en un cliente de microservicio con Spring Cloud Netflix y Hystrix"
url: "/2018/10/tolerancia-a-fallos-en-un-cliente-de-microservicio-con-spring-cloud-netflix-y-hystrix/"
date: 2018-10-05T20:30:00+02:00
updated: 2019-10-10T19:00:00+01:00
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

Los microservicios son independientes unos de otros y se comunican mediante operaciones de red. Dado que las operaciones se realizan a través de un medio no confiable como la red, dada su naturaleza efímera y a que pueden fallar en los microservicios es importante que los clientes estén preparados ante posibles fallos.

Un patrón o técnica que se suele emplear es el de [Circuit Breaker](https://www.martinfowler.com/bliki/CircuitBreaker.html), en Java y con [Spring][spring] se ofrece en el proyecto [Spring Cloud Netflix][spring-cloud-netflix] mediante [Hystrix][netflix-hystrix] y [Javanica](https://github.com/Netflix/Hystrix/tree/master/hystrix-contrib/hystrix-javanica). Este patrón soluciona dos problemas cuando un microservicio del que se depende falla y hace al microservicio que lo usa tolerante a fallos.

* Uno es que cuando un microservicio empieza a fallar es necesario dejar de hacerle peticiones para permitirle recuperarse si está saturado que provoca esos fallos. Cuando ocurre un fallo es posible realizar una acción en sustitución de la llamada al microservicio y devolver un valor alternativo como medida paliativa y hacer que el microsevicio afectado tenga la posibilidad de seguir ofreciendo su servicio aunque sea de forma degradada.
* Otro problema es que el microservicio aunque no falle tarde demasiado en responder, se puede establecer un _timeout_ que si se supera se deja de esperar e igualmente se realiza la acción de sustitución lo que evita que los microservicios que usan uno que tarda demasiado en responder agoten sus recursos y empiecen a fallar o tardar demasiado también.

En ambos casos se evita que la cadena de microservicios empiece a fallar y con ello sistema completo. El proyecto [Hystrix ha dejado de desarrollarse de forma activa](https://dzone.com/articles/resilience4j-and-sentinel-two-open-source-alternat) tal como aparece en el propio [README.md](https://github.com/Netflix/Hystrix/blob/master/README.md) y como alternativa se recomienda usar [Resilience4j](https://github.com/resilience4j/resilience4j) que además está diseñado para Java 8 y la programacion funcional, en el artículo [Implementar tolerancia a fallos con Resilience4j][blogbitix-425] muestro su implementación.

{{< image
    gallery="false"
    image1="image:hystrix.png" command1="Fit" optionsthumb1="650x450" title1="Hystrix" >}}

El patrón _circuit breaker_ se denomina así ya que implementa una lógica similar a un circuito eléctrico. El circuito en su estado normal está cerrado y se realizan las llamadas al microservicio servidor. Si el microservicio servidor empieza a fallar se llama a la acción alternativa con su valor, si se supera un umbral de errores el circuito pasa a estado abierto y se dejan de hacer llamadas al microservicio servidor. Cada cierto tiempo definido se realiza una llamada al servicio servidor para comprobar su estado de forma que si responde correctamente el circuito pasa a estado cerrado nuevamente y las siguientes llamadas se realizan al microservicio servidor dejándose de utilizar la acción alternativa.

{{< image
    gallery="true"
    image1="image:circuit-breaker-diagram.png" optionsthumb1="300x200" title1="Diagrama del patrón circuit breaker"
    image2="image:circuit-breaker-states.png" optionsthumb2="300x200" title2="Diagrama de estados"
    image3="image:hystrix-fallback.png" optionsthumb3="300x200" title3="Fallback del patrón circuit breaker"
    caption="Diagrama del patrón circuit breaker, de estados y método fallback" >}}

Para utilizar Hystrix como implementación del patrón _circuit breaker_ en una aplicación Java con [Spring Boot][spring-boot] el método que realiza la llamada al microservicio servidor ha de  encapsularse en un método anotado con la anotación [@HystrixCommand](https://netflix.github.io/Hystrix/javadoc/com/netflix/hystrix/HystrixCommand.html), como parámetro se indica un método con la acción alternativa o _fallback_ que obtiene un valor en los fallos. También se puede indicar el _tiemout_ de espera antes de considerar que la llamada ha fallado con la propiedad _execution.isolation.thread.timeoutInMilliseconds_. Igualmente se pueden indicar los valores para abrir el circuito con _circuitBreaker.requestVolumeThreshold_ y _circuitBreaker.errorThresholdPercentage_. Esos son los básicos para utilizar este patrón de tolerancia a fallos. Tiene [algunos valores adicionales más que se pueden configurar](https://github.com/Netflix/Hystrix/tree/master/hystrix-contrib/hystrix-javanica#configuration) para adaptar el patrón a los valores óptimos de la aplicación.

En el ejemplo el cliente en un bucle realiza las llamadas al servicio con un método _get()_ anotado con _@HystrixCommand_. En este método se encapsula la petición HTTP que puede fallar, utilizando la librería [Jersey][jersey] y obtenida la ubicación de una instancia del servicio a su vez del servicio de registro y descubrimiento [Eureka][netflix-eureka].

{{< code file="ClientService.java" language="java" options="" >}}
{{< code file="Main.java" language="java" options="" >}}
{{< code file="build.gradle" language="groovy" options="" >}}

El circuito se abre cuando el número de llamadas supera un umbral y un porcentaje de fallos, se han de cumplir las dos condiciones. Si el número de llamadas que se realizan no superan el umbral aunque todas fallen el circuito permanece cerrado. Ambos valores son personalizables con las propiedades _circuitBreaker.requestVolumeThreshold_ y _circuitBreaker.errorThresholdPercentage_. El circuito permanece abierto al menos durante el tiempo indicado por _metrics.rollingStats.timeInMilliseconds_.

{{< code file="DefaultController.java" language="java" options="" >}}

En la aplicación ejemplo hay un microservicio servidor y un microservicio cliente, iniciada una instancia de microservicio servidor y una instancia del microservicio cliente que implementa el patrón _circuit breaker_ inicialmente las peticiones se realizarán correctamente si no ocurre un _timeout_. Si se finaliza el proceso del microservicio servidor las peticiones del cliente al servidor empezarán a fallar y este obtiene el valor alternativo del método _fallback_, si se supera el umbral de llamadas y de fallos el circuito pasa a estado abierto. Mientras el circuito permanezca abierto el cliente sondea con una petición cada cierto tiempo el estado del servidor, si el servicio servidor se inicia unos instantes después de que esté disponible el cliente con la petición de sondeo comprobará que el servidor funciona, se cerrará el circuito y el cliente empezará a obtener los valores devueltos por el microservicio servidor.

{{< code file="System.out" language="plaintext" options="" >}}

Para monitorizar en tiempo real el estado del sistema y de los circuitos se ofrece un _dashboard_ en el que visualizan el número de peticiones que se están realizando, las fallidas, el estado de los circuitos, las que fallan por _timeout_ o las que fallan con error. Para tener acceso a esta página hay que incluir la dependencia _org.springframework.cloud:spring-cloud-starter-netflix-hystrix-dashboard_. La página _dashboard_ está disponible en la dirección _http\://localhost:8085/hystrix_. Este _dahsboard_ que ofrece Hystrix es muy básico y con un diseño mejorable, se pueden [exponer las métricas de Hystrix en Grafana con Prometheus][blogbitix-368] para tener un panel con exactamente la información que se desee en una gráficas muhco más vistosas además de observar los datos exactamente en el periodo de tiempo deseado.

{{< image
    gallery="true"
    image1="image:circuit-breaker-closed.png" optionsthumb1="300x200" title1="Circuit breaker cerrado"
    image2="image:circuit-breaker-open.png" optionsthumb2="300x200" title2="Circuit breaker abierto"
    caption="Estados del circuit breaker" >}}

{{< code file="gradle-run.sh" language="bash" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/SpringCloud" command="./gradle-run.sh" >}}

{{< reference >}}
* [CircuitBreaker](https://www.martinfowler.com/bliki/CircuitBreaker.html)
* [Circuit Breaker: Hystrix Clients](http://cloud.spring.io/spring-cloud-static/spring-cloud-netflix/2.0.1.RELEASE/single/spring-cloud-netflix.html#_circuit_breaker_hystrix_clients)
* [Hyxtrix Configuration (1)](https://github.com/Netflix/Hystrix/tree/master/hystrix-contrib/hystrix-javanica#configuration)
* [Hyxtrix Configuration (2)](https://github.com/Netflix/Hystrix/wiki/Configuration)
* [Java Magazine Sep/Oct 2018](http://www.javamagazine.mozaicreader.com/SeptemberOctober2018/Twitter)
{{< /reference >}}

{{% /post %}}
