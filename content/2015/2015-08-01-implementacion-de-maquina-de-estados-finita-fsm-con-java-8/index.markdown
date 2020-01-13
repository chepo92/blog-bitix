---
pid: 93
type: "post"
title: "Implementación de máquina de estados finita (FSM) con Java 8"
url: "/2015/08/implementacion-de-maquina-de-estados-finita-fsm-con-java-8/"
date: 2015-08-01T12:00:00+02:00
updated: 2016-02-25T21:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Es raro pero no he encontrado una librería adecuada en Java con una implementación de una máquina de estados. Stateless4j puede ser una candidata pero también tiene algunas deficiencias que pueden hacer que no nos sirva. Basándome en Stateless4j y usando Java 8 he creado una implementación de FSM con una funcionalidad similar y más ligera donde una única instancia de la máquina de estados es independiente del número de instancias de objetos en las que se use."
note: "<strong>Nota</strong>: Cuando busqué no encontré pero resulta que entre uno de los numerosos subproyectos de Spring está uno que sirve como implementación de máquina de estados, [Spring Statemachine](http://projects.spring.io/spring-statemachine/). Por supuesto, Spring Statemachine es mucho más avanzado que este ejemplo que muestro en el artículo y lo recomiendo también por su mejor soporte en futuras actualizaciones. Finalmente, he escrito un [artículo específico sobre Spring Statemachine](https://picodotdev.github.io/blog-bitix/2019/03/ejemplo-de-maquina-de-estados-con-spring-statemachine/)."
---

{{% post %}}

{{< logotype image="java.svg" >}}

Hace un par de años escribía un artículo sobre [cómo implementar una máquina de estados usando el patrón de diseño State][elblogdepicodev-170]. El patrón de diseño State y el ejemplo era válido sin embargo podía tener algunas deficiencias. Una de ellas es que necesitaba una clase por cada estado diferente, si los estados son una docena el número de archivos necesarios son altos. Por otro lado cada estado debe implementar todas las posibles transiciones o métodos de la interfaz del estado que también pueden ser altos dependiendo del numero de estados y transiciones que se haga en ellos, aunque con la clase abstracta [AbstractCompraState](https://gist.github.com/picodotdev/6329908#file-abstractcomprastate-java) del estado solo necesitamos implementar los métodos de transiciones propias del estado. Se podría añadir pero el ejemplo del patrón de diseño estado no tiene operaciones para saber si una determinada transición u operación puede realizarse y en el caso de añadir esa funcionalidad si tuviésemos varias máquinas de estados probablemente duplicaríamos parte del código en cada una de ellas. También viendo el código el flujo de estados no es muy obvio. Por todo ello en este artículo comentaré otra posibilidad, creo que mejor, que es implementando una [máquina de estados finita](https://es.wikipedia.org/wiki/M%C3%A1quina_de_estados) (FSM, Finite State Machine) y [usando Java 8 aprovechando sus nuevas características][blogbitix-17] como los _streams_ e interfaces funcionales.

Me ha parecido raro pero no he encontrado muchas librerías en Java que implementen una máquina de estados, la mejor que he visto ha sido [Stateless4j](https://github.com/oxo42/stateless4j). Es perfectamente usable, sin embargo, al hacer un ejemplo me he dado cuenta de que también tiene un defecto importante. Y es que si queremos aplicar una máquina de estados a una instancia de cierta clase, Stateless4j necesita una instancia de la máquina de estados por cada instancia de esa clase, puede ser usado para controlar, por ejemplo, el estado de unos cuantos personajes de un juego o del juego mismo pero si tenemos unos cuantas miles de instancias como puede ser en una aplicación de gestión el código será poco eficiente y el consumo de memoria mayor. Además usa Java 7 y con Java 8 algunas cosas son más fáciles y claras.

Basándome en Stateless4j he creado una nueva implementación y usando Java 8 la tarea ha sido más sencilla y potente. Las funcionalidades que posee la implementación de esta máquina de estados son:

* Definir estados.
* Definir transiciones, manejadores de transiciones y opcionalmente condiciones que se deben dar para realizar el cambio de estado.
* Definir manejadores de entrada y salida por transición.
* Conocer el estado actual y si se está en un determinado estado.
* Conocer los eventos aceptados para cambiar de estado.
* Provocar eventos en la máquina de estados proporcionando un objeto y unos datos con información adicional para procesar el evento.
* Definir manejadores para excepciones al realizar alguna transición o intentos de transiciones cuando no hay manejador definido.

La API de la máquina de estados se compone de dos _builders_ que proporcionan una API fluida, uno para crear los estados (StateBuilder) y otro para la máquina de estados (StateMachineBuilder). Además de la máquina de estados (StateMachine) y la clase que representa un estado (State).

{{< code file="StateMachineBuilder.java" language="java" options="" >}}
{{< code file="StateBuilder.java" language="java" options="" >}}
{{< code file="StateMachine.java" language="java" options="" >}}
{{< code file="State.java" language="java" options="" >}}

Internamente se usa la clase _TransitionBehiavour_ que define el comportamiento en una transición y ante un evento. Si posee una función de protección (guard) se comprueba antes de ejecutar la acción (selector) y que devolverá el nuevo estado.

{{< code file="TriggerBehaviour.java" language="java" options="" >}}

El siguiente es un ejemplo de uso similar al del artículo del patrón de diseño State con un hipotético flujo de estados para una compra junto con el código de la máquina de estados necesario para implementarlo y con unas pruebas unitarias. El enumerado _State_ define los posibles estados y el enumerado _Trigger_ define los posibles eventos, en constructor _static_ se define la única instancia de máquina de estados necesaria para manejar cualquier número de instancias de _Purchase_ usando las clases _builder_.

{{< code file="Purchase.java" language="java" options="" >}}
{{< code file="PurchaseTest.java" language="java" options="" >}}

La interfaz _Subject_ proporciona las operaciones para que la máquina de estados pueda obtener y modificar el estado del objeto manejado en una transición, en este caso de una instancia de _Purchase_.

{{< code file="Subject.java" language="java" options="" >}}

Otra posibilidad a las máquinas de estados son las herramientas de [procesos de negocio](https://es.wikipedia.org/wiki/Proceso_de_negocio) o BPM (Business Process Management) pero salvo que tengamos algo muy complejo la máquina de estados de este ejemplo será más que suficiente para la mayoría de situaciones. Hace un tiempo escribir varios artículos sobre [Activiti][activiti] y [Drools][drools]:

* [Conceptos sobre procesos de negocio (BP, BPM, BPMS, ...) ](https://elblogdepicodev.blogspot.com.es/2012/09/conceptos-sobre-procesos-de-negocio-bp.html)
* [Procesos de negocio con Activiti](https://elblogdepicodev.blogspot.com.es/2012/09/procesos-de-negocio-con-activiti.html)
* [Reglas de negocio con Drools y Activiti](https://elblogdepicodev.blogspot.com.es/2012/10/reglas-de-negocio-con-drools-y-activiti.html)

El [código fuente completo](https://github.com/picodotdev/blog-ejemplos/tree/master/Machinarum) está disponible en mi repositorio de ejemplos en GitHub.

{{< reference >}}
* [Spring Statemachine][spring-statemachine]
* [Stateless4j](https://github.com/oxo42/stateless4j)
* [Recommended FSM (Finite State Machine) Library for Java](https://stackoverflow.com/questions/10875317/recommended-fsm-finite-state-machine-library-for-java)
* [A programmable Finite State Machine ](http://www.java2s.com/Code/Java/Collections-Data-Structure/AprogrammableFiniteStateMachineimplementation.htm)
{{< /reference >}}

{{% /post %}}
