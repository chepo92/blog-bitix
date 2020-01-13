---
pid: 8
type: "post"
title: "Ejemplo del patrón de diseño No Operation"
url: "/2014/01/ejemplo-del-patron-de-diseno-no-operation/"
date: 2014-01-24T16:48:40+01:00
updated: 2015-09-28T21:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "programacion", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="java.svg" >}}

Hasta el momento ya he escrito alguna entrada sobre los [patrones de diseño](https://elblogdepicodev.blogspot.com.es/2012/03/patrones-de-diseno-en-la-programacion.html) en general, sobre algunos casos particulares como el [patrón de diseño Command](https://elblogdepicodev.blogspot.com.es/2012/04/ejemplo-del-patron-de-diseno-command-y.html) relacionado con la programación concurrente y sobre el [patrón de diseño State](https://elblogdepicodev.blogspot.com.es/2013/08/ejemplo-del-patron-de-diseno-state.html) para hacer máquinas de estados. En esta entrada hablaré sobre otro patrón de diseño, el patrón No Operation y de que forma podemos aprovecharlo para resolver algún problema y hacer nuestro código más simple.

En un programa que emplea un lenguaje de programación orientado a objetos estos están constantemente relacionándose entre si a través de llamadas a métodos y a través de las referencias que un objeto posee de otros. Sin embargo, es habitual que un determinado método devuelva un null en vez de una referencia a un objeto. Esta referencia null puede ser un problema ya que nos obliga en el código hacer una comprobación antes de poder llamarlo. Si un método devuelve un null puede dar como resultado un [NullPointerException](https://docs.oracle.com/javase/7/docs/api/java/lang/NullPointerException.html) en otra parte de la aplicación en donde se intente usar esa referencia y no se haga la comprobación.

Para tratar de evitar llenar nuestro código java de sentencias if con la comprobación de null podemos utilizar el patrón de diseño No Operation. La idea de este patrón es que en vez de devolver un null como resultado de la llamada a un método devolvamos un objeto que no haga nada en las llamadas a los métodos en los que se use. Por ejemplo, supongamos que tenemos un método que en base a un enum se encarga de devolver un objeto que sigue el [patrón Command](https://elblogdepicodev.blogspot.com.es/2012/04/ejemplo-del-patron-de-diseno-command-y.html). Y ahora supongamos que para cierto valor del enum no hay objeto command que se pueda devolver, podríamos devolver null en cuyo caso nos veríamos obligados a realizar la comprobación por null o empleando la idea del patrón No Operation devolver un objeto que implemente la interfaz command en cuestión pero que no haga nada o haga una operación inocua. Si vemos que en un programa estamos llenándolo de sentencias if (objeto == null) tal vez podamos aplicar este patrón. Lo importante para poder eliminar esos if es determinar que es una operación inocua, si se trata de un objeto puede ser que el método no haga nada, si se trata de un número que se utiliza para sumar o multiplicar se puede devolver 0 o 1 respectivamente en vez de null, depende del caso y la operación a simular.

Esta patrón puede usarse también para evitar la excepción NullPointerException pero no es tanto la misión del patrón la misión como evitar preocuparnos por si las referencias son null o no y eliminar ifs, es cierto que empleándolo no dará la excepción pero si la aplicación continua puede producir otra excepción o un comportamiento no deseado más complicado de resolver y de averiguar su causa en otra parte del código.

Veámoslo con el ejemplo de una factoría que para determinados enumerados se devuelve un objeto que sigue el patrón command pero para ciertos valores del enumerado no hay command válido y en vez de devolver null devolvemos un command no operation, este es el caso de llamar a la factoría con un enumerado null. Para el enumerado Operacion.MENSAJE se develve un command que emite un mensaje, para Operacion.NO_MENSAJE y null se devuelve un command que no hace nada.

{{< code file="OperacionCommandFactory.java" language="java" options="" >}}
{{< code file="OperacionCommand.java" language="java" options="" >}}
{{< code file="NoOperacionCommand.java" language="java" options="" >}}
{{< code file="MensajeCommand.java" language="java" options="" >}}

Y finalmente el caso de prueba donde puede verse que no hay ningún if ya que no se devuelve en ningún caso un null:

{{< code file="OperacionCommandFactorySpec.groovy" language="groovy" options="" >}}

Puedes obtener el [código fuente completo del ejemplo](https://github.com/picodotdev/blog-ejemplos/tree/master/PatronNoOperation) de su repositorio de GitHub.

{{< reference >}}
* [Código fuente del ejemplo del patrón de diseño No Operation](https://github.com/picodotdev/blog-ejemplos/tree/master/PatronNoOperation)
* [Patrones de diseño en la programación orientada a objetos][elblogdepicodev-97]
* [Ejemplo del patrón de diseño Command y programación concurrente en Java][elblogdepicodev-101]
* [Ejemplo del patrón de diseño State][elblogdepicodev-170]
* [Ejemplo del patrón de diseño Builder][blogbitix-99]
{{< /reference >}}

{{% /post %}}
