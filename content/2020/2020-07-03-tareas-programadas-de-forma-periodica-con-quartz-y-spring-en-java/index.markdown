---
pid: 497
type: "post"
title: "Tareas programadas de forma periódica con Quartz y Spring en Java"
url: "/2020/07/tareas-programadas-de-forma-periodica-con-quartz-y-spring-en-java/"
date: 2020-07-03T11:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:jobs.png"
tags: ["java", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

En las aplicaciones web basadas en el protocolo HTTP la petición al servidor es el desencadenante de la ejecución de la acción que le da respuesta. Algunas acciones no dependen de la solicitud de un usuario o de la recepción de un mensaje sino que se han de ejecutar de forma periódica cada cierto tiempo o de forma planificada en tiempos determinados. Por ejemplo, una tarea que necesite ejecutarse todos los días a las 3 de la mañana o cada 5 minutos.

[Quartz][quartz] es una de las librerías en la plataforma Java que proporciona la funcionalidad de planificador de tareas, permite ejecutar tareas de forma periódica o de forma planificada en determinados tiempos. 

[Spring] también integra una solución sencilla para ejecutar tareas de forma programada disponible para las aplicaciones que usen [Spring Boot][spring-boot] sin necesidad de dependencias adicionales.

El propio JDK desde la versión 5 incorpora varias clases para ejecutar tareas programadas sin ninguna dependencia en elproyecto ni siquera de Spring.

La programación de las tareas también se puede realizar a nivel de sistema operativo. En [GNU][gnu]/[Linux][linux] con la utilidad [cron](https://wiki.archlinux.org/index.php/Cron) y con [systemd][systemd] se puede programar tareas. Sin embargo, realizar la programación a nivel de sistema operativo se crean nuevos procesos y la configuración está externalizada de la aplicación. Utilizar Quartz, Spring o las clases del JDK tiene la ventaja de que la configuración de la programación de las tareas está más en el ámbito de la programación que en la de configuración de sistemas, el primer caso los cambios los hace el programador, en el segundo los hace la persona a cargo de los sistemas.

### Tareas programadas con Quartz y Spring Boot

Entre las muchas itegraciones que ofrece Spring una de ellas es para Quartz. Las clases importantes que ofrece Quartz son:

* [Job](https://www.quartz-scheduler.org/api/2.3.0/org/quartz/Job.html): es la tarea a ejecutar.
* [JobDetail](https://www.quartz-scheduler.org/api/2.3.0/org/quartz/JobDetail.html): es una instancia de una tarea.
* [Trigger](https://www.quartz-scheduler.org/api/2.3.0/org/quartz/Trigger.html): es el disparador que determina los momentos de ejecución de los _Jobs_, cuando una tarea se ha de ejecutar se crea una instancia de _JobDetail_ de la tarea a ejecutar.
* [JobListener](https://www.quartz-scheduler.org/api/2.3.0/org/quartz/JobListener.html): recibe eventos sobre las ejecuciones de las tareas.
* [JobBuilder](https://www.quartz-scheduler.org/api/2.3.0/org/quartz/JobBuilder.html): una clase que implementa el patrón factoría que facilita la definición de las clases anteriores.
* [JobStore](https://www.quartz-scheduler.org/api/2.3.0/org/quartz/spi/JobStore.html): una clase que permite guardar las definiciones de las tareas en la base de datos.
* [JobDetailFactoryBean](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/scheduling/quartz/JobDetailFactoryBean.html), [SimpleTriggerFactoryBean](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/scheduling/quartz/SimpleTriggerFactoryBean.html): clases alternativas proporcionadas por Spring para la configuración de las tareas, por ejemplo para añadir _listeners_. Los _listeners_ permiten recibir notificaciones de los eventos de ejecución de las tareas, por ejemplo cuando una tarea se va a ejecutar y cuando se ha ejecutado. En el ejemplo e _listeners_ emite unas trazas en la salida.

Esta es la configuración para definir los _jobs_ con Spring, los _triggers_ que disparan los _jobs_ cada cierto tiempo con una expresión _cron_ y los _listeners_ que reciben los eventos de ejecución de los _jobs_.

{{< code file="Main-1.java" language="java" options="" >}}

Para usar Quartz con Spring Boot hay que incluir su dependencia en el archivo de construcción del proyecto.

{{< code file="build.gradle" language="groovy" options="" >}}

Con Quartz no existe la opción de planificar una tarea pasado un tiempo desde la última ejecución. Solo se pueden planificar los _Jobs_ en tiempos regulares, esto provoca que si la tarea tarda en ejecutarse más que el intervalo entre ejecuciones haya dos instancias de la tarea en ejecución de forma paralela. Hay dos opciones para evitar ejecuciones paralelas: una de ellas es utilizar la anotación [DisallowConcurrentExecution](https://www.quartz-scheduler.org/api/2.3.0/org/quartz/DisallowConcurrentExecution.html), la otra forma es planificar otra ejecución de la tarea cuando la anterior ejecución haya terminando proporcionando una implementación de JobListener.

En las clases de las tareas se pueden inyectar _beans_ de Spring con la anotación [@Autowired](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/factory/annotation/Autowired.html).

{{< code file="QuartzJob.java" language="java" options="" >}}
{{< code file="QuartzJobListener.java" language="java" options="" >}}

### Tareas programadas con Spring

Las tareas programadas con Spring son una opción sencilla, basta con anotar un método con la anotación [@Scheduled](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/scheduling/annotation/Scheduled.html) e indicar los parámetros de la anotación el mecanismo que dispara la tarea y los periodos de tiempo. Las planificaciones pueden ser:

* _initialDelay_: las tareas se ejecutan con un retraso desde el inicio de la aplicación.
* _fixedRate_: ejecución cierto tiempo fijo e independiente de la duración de la tarea.
* _fixedDelay_: con una diferencia de tiempo desde la última ejecución.
* _cron_: con una expresión _cron_ que permite planificar los periodos de ejecución de la tarea.

{{< code file="springJobs.java" language="java" options="" >}}

### Tareas programadas con las clases del JDK

Otra tercera forma de ejecutar tareas periódicas es con las clases [Executors](javadoc11:java.base/java/util/concurrent/Executors.html) y [ScheduledExecutorService](javadoc11:java.base/java/util/concurrent/ScheduledExecutorService.html) que están disponibles desde la versión 5 de Java. Proporcionan una funcionalidad similar a las tareas programadas de Spring sin la funcionalidad de expresiones _cron_.

{{< code file="Main-2.java" language="java" options="" >}}

{{< code file="JavaJob.java" language="java" options="" >}}

### Elegir entre usar Quartz, usar Spring o usar las clases del JDK

La ventaja de usar las clases del JDK es que ya están incluidas en el JDK y no se necesita incluir ninguna dependencia en el proyecto. Si se usa Spring tampoco se necesitan dependencias adicionales y además proporciona la funcionalidad de expresiones _cron_ que no tienen las clases del JDK. La desventaja de usar el JDK y Spring está en que no tienen todas las opciones de Quartz como la persistencia en la base de datos, la ejecución de tareas que reciban parámetros a modo de contexto o la característica de los _listeners_ que en Spring habría que implementar con alguna otra solución como [usar Guava para publicar y suscribirse a eventos][blogbitix-422].

Dependiendo de las nacesidades de la aplicación será más adecuado usar las clases del JDK, Spring o Quartz.

### Ejemplo de tareas programadas con Quartz, Spring y las clases del JDK

El ejemplo incluye varias tareas definidas con Quartz y con Spring. En las trazas se observan los tiempos de ejecución de cada tarea. La tarea de Quartz tiene dos _triggers_, uno que se ejecuta cada 10 segundos y otro cada minuto. Los _jobs_ de Spring _scheduleJobWithFixedRate_ se ejecuta cada dos segundos, _scheduleJobWithDelay_ se ejecuta cada dos segundos después de haber terminado la anterior ejecución que como tarda dos segundos en ejecutarse se ejecuta en realidad cada cuatro segundos y finalmente _scheduleJobWithCron_ se ejecuta cada minuto. Las tareas planificadas con las clases del JDK se ejecutan igual que las tareas de Spring cada dos y cada cuatro segundos.

{{< code file="System.out" language="plaintext" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/QuartzSpring" command="./gradlew run" %}}

{{% reference %}}
* [Quartz Examples](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/examples/)
* [Scheduling in Spring with Quartz](https://www.baeldung.com/spring-quartz-schedule)
* [How to Schedule Tasks with Spring Boot](https://www.callicoder.com/spring-boot-task-scheduling-with-scheduled-annotation/)
{{% /reference %}}

{{% /post %}}
