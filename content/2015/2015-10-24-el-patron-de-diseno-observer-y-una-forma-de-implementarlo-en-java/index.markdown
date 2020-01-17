---
pid: 105
type: "post"
title: "El patrón de diseño Observer y una forma de implementarlo en Java"
url: "/2015/10/el-patron-de-diseno-observer-y-una-forma-de-implementarlo-en-java/"
aliases: ["/2015/10/ejemplo-del-patron-de-diseno-observer-y-una-forma-de-implementarlo-en-java/"]
date: 2015-10-24T12:00:00+02:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "Otro de los patrones de diseño que en algún momento nos puede ser útil es el patrón _Observer_. Podemos usar este patrón si tenemos la necesidad de realizar acciones como consecuencia del cambio de estado o cierta circunstancia de un objeto. El patrón _Observer_ nos permite mantener desacoplados el objeto que emite el evento y el objeto que recibe el evento e independizar al objeto observable del número de observadores que tenga."
---

{{% post %}}

{{< logotype image="java.svg" >}}

En Java este patrón podemos implementarlo usando una clase, la [clase Observable](javadoc8:java/util/Observable.html), y una interfaz, la [interfaz Observer](javadoc8:java/util/Observer.html) proporcionadas en el propio <abbr title="Java Development Kit">JDK</abbr>. La clase que queremos que reciba los eventos deberá implementar la interfaz _Observer_ y el objeto que queremos que produzca los eventos debe extender o contener una propiedad de tipo _Observable_. La interfaz _Observer_ contiene un único método de nombre [_update_](javadoc8:java/util/Observer.html#update-java.util.Observable-java.lang.Object-), que recibe dos parámetros que son la instancia del objeto observable sobre la que se ha producido el evento y un _Object_ a modo de argumento que el objeto observable envía. La clase _Observable_ contiene métodos para añadir y eliminar observadores que queremos que sean notificados, obtener un contador con el número de observadores y unos métodos para conocer y establecer si un objeto ha cambiado con el método [_hasChanged_](javadoc8:java/util/Observable.html#hasChanged--).

El patrón _Observer_ proporciona algunas propiedades de los sistemas que se comunican mediante mensajes:

* No hay que estar monitorizando un objeto en búsqueda de cambios, se hace la notificación cuando un objeto cambia.
* Permite agregar nuevos observadores para proporcionar otro tipo de funcionalidad sin cambiar el objeto observador.
* Bajo acoplamiento entre observable y observador, un cambio en el observable u observador no afecta al otro.

Esta funcionalidad es la ofrecida en el propio JDK, los sistemas que permiten comunicar las aplicaciones usando mensajes como [RabbitMQ][rabbitmq] o <abbr title="Java Message Service">JMS</abbr> proporcionan estas características deseables además de otras propiedades como funcionamiento asíncrono.

Implementar el patrón no es muy complicado basta con extender de una clase (_Observable_) e implementar una interfaz (_Observer_), sin embargo, tener que extender de la clase _Observable_ puede ser un problema si la clase que queremos observar ya extiende de otra clase, esto es así porque en Java no hay herencia múltiple de varias clases, si es posible implementar varias interfaces. ¿Que podemos en este caso? La solución es usar composición en vez de herencia aunque con composición no tendremos acceso a los métodos [clearChanged](javadoc8:java/util/Observable.html#clearChanged--) ni [setChanged](javadoc8:java/util/Observable.html#setChanged--) si nos son necesarios.

Supongamos que tenemos una clase _Producto_ con un precio y queremos emitir un mensaje en la terminal cuando un producto cambie de precio. Para implementar este patrón _Producto_ debería extender de _Observable_ y otra clase hacer que implemente la interfaz _Observer_, sin embargo, si no queremos o no podemos hacer que nuestra clase extienda de _Observable_ para no limitarnos en nuestra jerarquía de clases o porque ya extiende de otra podemos usar composición, por otro lado, si no queremos registrar el observador en cada instancia de _Producto_  sino observar cualquier instancia que se cree podemos implementar el _Observer_ de forma estática en la clase _Producto_. El observable _ProductoObservable_ amplia la visibilidad del método _setChanged_ para poder hacer uso de él usando composición, deberemos invocarlo para que los observadores sean notificados. A continuación pondré el código usando composición e implementándolo de forma estática.


{{< code file="Producto.java" language="java" options="" >}}
{{< code file="ProductoObserver.java" language="java" options="" >}}
{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}

Conocer los patrones de diseño, conocer sus beneficios y desventajas y saber cuando aplicarlos probablemente nos sea de provecho en los casos reales que nos encontremos. En el libro [Head First Design Patterns](https://amzn.to/2SVhrFc) explican bastante bien este y otros patrones, este libro lo considero como lectura recomendada junto a otros [8+ libros para mejorar como programadores][blogbitix-55].

El [código fuente completo del ejemplo](https://github.com/picodotdev/blog-ejemplos/tree/master/PatronObserver) puedes descargarlo del repositorio de ejemplos alojado en [GitHub][github] y probarlo ejecutando el comando `./gradlew run`.

{{< reference >}}
* [Patrones de diseño en la programación orientada a objetos][elblogdepicodev-97]
* [Ejemplo del patrón de diseño State][elblogdepicodev-170]
* [Implementación de máquina de estados finita (FSM) con Java 8][blogbitix-93]
* [Ejemplo del patrón de diseño Command y programación concurrente en Java][elblogdepicodev-101]
* [Ejemplo del patrón de diseño No Operation][blogbitix-8]
* [8+ libros para mejorar como programadores][blogbitix-55]
{{< /reference >}}

{{% /post %}}
