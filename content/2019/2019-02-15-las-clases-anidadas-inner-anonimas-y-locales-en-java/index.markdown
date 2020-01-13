---
pid: 384
type: "post"
title: "Las clases anidadas inner, anónimas y locales en Java"
url: "/2019/02/las-clases-anidadas-inner-anonimas-y-locales-en-java/"
date: 2019-02-15T18:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Por regla general en Java cada clase se define en su propio archivo de código fuente, pdor ejemplo, una clase de nombre _Order_ se ha de definir en el archivo _Order.java_. Sin embargo, esta no es la única forma de definir clases, es posible definir clases _inner_ y anónimas que evita tener que crear un nuevo archivo de código fuente.

Las clases _inner_ se definen dentro de otra clase cuando esa clase _inner_ tiene alta cohesión (su lógica está muy relacionada con la clase que la contiene), en algunos casos se emplean para ocultar los tipos que implementan la lógica. Dependiendo de si la clase _inner_ debe acceder a los datos de la clase que la contiene o no la clase _inner_ se define como no estática o como estática con la palabra reservada _static_. Las clases _inner_ estáticas no necesitan una referencia a la clase que la contiene y por ello son algo más eficientes y el método preferido de definirlas, si la clase _inner_ debe acceder a los miembros de la clase contenedora hay que definirla como no estática. Para desambiguar la referencia _this_ y miembros con el mismo nombre de la clase _inner_ con la de la clase contenedora se puede utilizar en el ejemplo _Order.this.products_ quitando los _static_ de las clases.

Las clases anónimas pueden definirse en la misma línea de código donde se declara su referencia, se denominan anónimas porque no se les asigna un nombre como en el ejemplo es el caso de la clase calculadora de precio para el descuento del más barato gratis.

{{< code file="Product.java" language="java" options="" >}}
{{< code file="Order.java" language="java" options="" >}}
{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}

Para los programadores en Java seguramente esto de las clases _inner_ y anónimas no es nada nuevo pero ¿conoces las clases locales? Dentro de un método también se puede definir una clase, llamada por ello local. Las clases locales no son habituales y para su uso su funcionalidad ha de estar altamente cohesionado con el método, un posible uso es para realizar validaciones o formateos que sean un poco complejos. El siguiente [ejemplo de clase local](https://docs.oracle.com/javase/tutorial/java/javaOO/localclasses.html) _PhoneNumber_ muestra su uso.

En la [sección de clases anidadas](http://docs.oracle.com/javase/tutorial/java/javaOO/nested.html) o _nested classes_ del [tutorial sobre clases y objetos](http://docs.oracle.com/javase/tutorial/java/javaOO/index.html) se explica más detalladamente estas capacidades del lenguaje Java.

{{% sourcecode git="blog-ejemplos/tree/master/JavaInnerClasses" command="./gradlew run" %}}

{{% /post %}}
