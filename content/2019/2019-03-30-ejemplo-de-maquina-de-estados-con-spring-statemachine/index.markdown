---
pid: 394
type: "post"
title: "Ejemplo de máquina de estados con Spring Statemachine"
url: "/2019/03/ejemplo-de-maquina-de-estados-con-spring-statemachine/"
date: 2019-03-31T06:30:00+01:00
updated: 2019-03-31T23:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:spring.svg"
tags: ["java", "planeta-codigo", "spring"]
---

{{% post %}}

{{< logotype image1="spring.svg"  image2="java.svg" >}}

Hace ya unos años escribí un [ejemplo y un artículo con una implementación propia de una máquina de estado en Java][blogbitix-93], para algún caso muy básico puede ser suficiente pero para algo serio no es la opción a elegir. Pasado un tiempo de ese ejemplo y artículo descubrí uno de los muchos proyectos de [Spring][spring] útiles para una aplicación, para las necesidades más habítuales tiene un proyecto que lo proporciona y para las menos habituales es también posible que la proporcione como en el caso del proyecto [Spring Statemachine][spring-statemachine] que precisamente tiene el mismo objetivo de implementar una máquina de estados cubriendo muchos casos de uso.

El uso de una máquina de estados permite modelar un proceso con cierta complejidad. Puede ser el ciclo de vida de una compra, un envío, un proceso documental, financiero, ... cualquiera en el que intervengan estados, transiciones entre esos estados y realización de acciones necesarias para proporcionar la funcionalidad deseada.

Una máquina de estados se compone de un conjunto de estados finito, de transiciones en esos estados, de eventos que disparan las transiciones y cambios de estado, de acciones asociadas a los estados, a las transiciones o a la entrada o salida de un estado, _guards_ que permiten decidir que transición se escoge entre varias en los _choices_, _forks_ en las que el flujo sigue por varios caminos en paralelo,     temporizadores que pasado un tiempo disparan una transición, seguridad para proteger la ejecución de eventos, transiciones y acciones con [Spring Security][spring-security], persistencia tanto para la configuración como para el estado en bases de datos relacionales o NoSQL como [Redis][redis] y [MongoDB][mongodb]. Una lista bastante completa de características que cubrirá las necesidades de la mayoría de aplicaciones.

Aparte de proporcionar una librería para crear máquinas de estados en Java otra ventaja es que el fujo de un proceso queda recogido y documentado en la implementación de la máquina de estados. De que estados, transiciones y eventos se compone en un punto más centralizado lo que en otro caso podría estar repartido por el código de la aplicación utilizando una solución propia codificada expresamente para el caso.  

En el ejemplo he definido el siguente grafo de estados y transiciones que contiene estado inicial, _choice_, _fork_, _join_, jerarquía de estados con en el estado _Tasks_ y un estado final. Una selección completa del conjunto de tipos de estados. En este caso las flechas van únicamente en una dirección pero perfectamente el flujo podría tener transiciones que volviesen a estados anteriores creando ciclos.

{{< image
    gallery="true"
    image1="image:graph.png" optionsthumb1="600x450" title1="Grafo de la máquina de estados"
    caption="Grafo de la máquina de estados" >}}

El uso de _Spring Statemachine_ es relativamente sencillo. En el ejemplo se define en un enumerado la lista de estados, también la lista de eventos o transiciones. Una de las formas de definir el grafo dela máquina de estados es mediante código Java y utilizando Spring definiendo un _bean_. La clase [StateMachineBuilder](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/config/StateMachineBuilder.html) facilita la construcción de la definición de la máquina de estados, por una parte está la configuración general o de infraestructura con el método [configureConfiguration()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/config/StateMachineBuilder.Builder.html#configureConfiguration--). Con el método [configureStates()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/config/StateMachineBuilder.Builder.html#configureStates--) se define los estados de la máquina y su tipo (inicial, final, normal, _choice_, _fork_, _join_,) así como las acciones que se deseen ejecutar al entrar, en el estado y al salir del estado con los métodos _stateEntry()_, _stateDo()_ y _stateExit()_. Con el método _withStates()()_ se pueden definir submáquinas o una jerarquía de estados como en el caso del estado _Tasks_. Finalmente hay que definir cuales son las posibles transiciones de los estados y que eventos las disparan. Normalmente las transiciones se definen con el método [withExternal()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/config/builders/StateMachineTransitionConfigurer.html#withExternal--) pero en los casos de los estados de tipo _choice_, _fork_ y _join_ se define con los métodos [withChoice()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/config/builders/StateMachineTransitionConfigurer.html#withChoice--), [withFork()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/config/builders/StateMachineTransitionConfigurer.html#withFork--) y [withJoin()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/config/builders/StateMachineTransitionConfigurer.html#withJoin--).

{{< code file="Main-1.java" language="java" options="" >}}

Las acciones asociadas a los estados del ejemplo simplemente emiten trazas pero tienen disponible el parámetro _context_ para obtener datos e implementar su lógica, como es un componente de Spring podría incluso hacer uso de inyección de dependencias para utilizar otros servicios que necesitase.

{{< code file="DefaultAction.java" language="java" options="" >}}
{{< code file="DefaultErrorAction.java" language="java" options="" >}}

En el caso de un _choice_ se utilizan los métodos [first()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/config/configurers/ChoiceTransitionConfigurer.html#first-S-org.springframework.statemachine.guard.Guard-), [then()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/config/configurers/ChoiceTransitionConfigurer.html#then-S-org.springframework.statemachine.guard.Guard-) y [last()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/config/configurers/ChoiceTransitionConfigurer.html#last-S-) que una cláusula _guard_ en los dos primeros determinan a que estado se transiciona. Una clásula _guard_ es una instancia de la clase [Guard](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/guard/Guard.html) que contiene un método que devuelve un _boolean_ según su lógica. Si es verdadero se seleciona el estado asociado, para la lógical se puede utilizar la información de contexto [StateContext](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/StateContext.html) entre otra información como la que se haya asociado en los diferentes estados con el método [getExtendedState()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/StateContext.html#getExtendedState--) y la proporcionada en la ejecución del evento con [getMessageHeaders()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/StateContext.html#getMessageHeaders--).

{{< code file="RandomGuard.java" language="java" options="" >}}

En este ejemplo se utiliza [Spring Boot][spring-boot], aparte de las configuraciones anteriores se realizan dos cosas adicionales. Una de ellas es utilizar un [ThreadPoolTaskScheduler](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/scheduling/concurrent/ThreadPoolTaskScheduler.html) en modo demonio de modo que la máquina virtual y el programa pueda finalizar correctamente. La otra es que con una implementación de la clase [StateMachineListenerAdapter](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/listener/StateMachineListenerAdapter.html) se pueden recibir que acciones realiza la máquina de estados, en este caso para emitir trazas.

{{< code file="DefaultStateMachineEventListener.java" language="java" options="" >}}

Una vez definida la máquina de estados su uso comienza con el método [start()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/region/Region.html#start--), a continuación ya se pueden enviar eventos par provocar cambios de estado y ejecución de acciones. Se puede proporcionar información de contexto para la máquina accesible desde cualquier estado en el mapa obtenido con [ExtendedState.getVariables()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/ExtendedState.html#getVariables--) y al provocar eventos con la clase [GenericMessage](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/messaging/support/GenericMessage.html). En cualquier momento el método [getState()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/support/AbstractStateMachine.html#getState--) devuelve en que estado se encuentra la máquina. Según la rama que haya elegido la clase _RandomGuard_ en la bifurcación y el estado en el que esté la máquina se envía la transición _CHOICE1\_FORK_ o _CHOICE2\_FORK_. El _fork_ provoca que la máquina de estados ejecute en paralelo dos caminos, enviados los eventos correctos se llega a los estados finales de las dos ramas del subestado y se pasa automáticamente al estado _JOIN_ que a su vez pasa automáticamente a _STATE2_, finalmente se pasa al estado _END_ y termina la máquina de estados.

{{< code file="Main-2.java" language="java" options="" >}}

Otro caso de uso posible es en vez de iniciar la máquina de estados desde el inicio es iniciarla en un determinado estado para continuar con el flujo de una entidad que anteriormente se quedó en ese estado. En el caso del ejemplo la máquina de estados se continua desde el estado _TASK11_ y _TASK22_ utilizando el método [resetStateMachine()](https://docs.spring.io/spring-statemachine/docs/current/api/org/springframework/statemachine/support/AbstractStateMachine.html#resetStateMachine-org.springframework.statemachine.StateMachineContext-), se vuelve a iniciar la máquina y se envían los eventos adecuados a partir de esos estados.

{{< code file="Main-3.java" language="java" options="" >}}

Por defecto el contenedor de dependencias de Spring utiliza el [@Scope](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/beans/factory/config/Scope.html) _singleton_ para los _beans_ de modo que solo existe una única instancia, como las máquinas tiene estado no pueden compartirse, hay que crear una nueva en caso de querer utilizar dos simultáneamente como sería el caso de una aplicación web o un proceso que escucha mensajes de una cola, utilizando el _scope prototype_ se crea una instancia cada vez que se necesite. La creación de más máquina de estado se indica en la documentación que es algo costoso para no tener que crearlas, tener varias instancias y limitado a cierto número se puede utilizar un [_pool_ de máquinas de estado](https://docs.spring.io/spring-statemachine/docs/2.1.1.RELEASE/reference/htmlsingle/#statemachine-examples-eventservice).

En un cambio de estado se produce la siguiente secuencia de eventos y acciones.

* Se notifica del inicio de la transición.
* Se ejecuta la acción asociada a la transición.
* Se notifica de la transición, de la salida del estado anterior y de la entrada en el nuevo.
* Se ejecuta la acción de entrada al estado y del estado.
* Se notifica del cambio de estado.
* Se notifica de la finalización de la transición.

{{< code file="System.out-3" language="plaintext" options="" >}}

Estas son las dependencias necesarias a añadir n la herramienta de construcción y la salida en la terminal de las trazas ejecutando la máquina de estados desde el estado inicial e inicializada desde un estado en concreto.

{{< code file="build.gradle" language="groovy" options="" >}}
{{< code file="System.out-1" language="plaintext" options="" >}}
{{< code file="System.out-2" language="plaintext" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/SpringStatemachine" command="./gradle run" %}}

{{< reference >}}
* [Spring Statemachine Javadoc](https://docs.spring.io/spring-statemachine/docs/current/api/)
* [A Guide to the Spring State Machine Project](https://www.baeldung.com/spring-state-machine)
* [Spring State Machine: what is it and do you need it?](https://codeburst.io/spring-state-machine-what-is-it-and-do-you-need-it-e894c78f5d84)
{{< /reference >}}

{{% /post %}}
