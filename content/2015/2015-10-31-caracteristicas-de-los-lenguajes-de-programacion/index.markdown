---
pid: 107
type: "post"
title: "Características de los lenguajes de programación"
url: "/2015/10/caracteristicas-de-los-lenguajes-de-programacion/"
date: 2015-10-31T12:00:00+01:00
updated: 2015-11-27T20:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["planeta-codigo", "programacion"]
summary: "Hay numerosos y diferentes lenguajes de programación pero solo una docena tienen una cuota de uso significativa. Muchos comparten características y algunos lenguajes las van incorporando a medida que se demuestra que sus beneficios son mayores que la complejidad que pueden añadir. Veamos algunas de sus propiedades."
---

{{% post %}}

Hay cantidad de lenguajes de programación, algunas diferencias entre ellos se encuentran su propósito (general o específico para cierto tipo de tareas), en la sintaxis, el sistema de tipos, por los paradigmas de programación que soporta (<abbr title="Programación orientada a objetos">POO</abbr>, imperativo, funcional, ...), otras diferencias están en la librerías disponibles, _frameworks_ o comunidad, sin embargo, la mayoría comparten algunas características por las que se pueden catalogar los lenguajes. En este artículo comentaré algunas de estas características por las que podemos catalogar y agrupar los lenguajes de programación.

Describiré brevemente cada una de las características ya que están muy bien explicadas en cada una de sus páginas de la wikipedia.

### Compilado
En un lenguaje compilado el código fuente fuente antes de ser ejecutado es convertido a lenguaje máquina (C, C++) aunque también puede ser convertido a representación intermedia que posteriormente es interpretada y convertida a lenguaje máquina <abbr title="Just in Time">JIT</abbr> (Java, C#). El compilador puede detectar una gran cantidad de errores que en un lenguaje interpretado o de tipado dinámico se descubrirían en tiempo de ejecución. [Wikipedia](https://es.wikipedia.org/wiki/Lenguaje_de_programaci%C3%B3n_compilado).

### Interpretado
En un lenguaje interpretado el código fuente es compilado a código máquina en el momento de su ejecución ([Python][python], [Ruby][ruby], [PHP][php], JavaScript). [Wikipedia](https://es.wikipedia.org/wiki/Lenguaje_de_programaci%C3%B3n_interpretado).

### Orientado a objetos
Parte del éxito de los [lenguajes orientado a objetos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos) se debe a conceptos como la [herencia](https://es.wikipedia.org/wiki/Herencia_%28inform%C3%A1tica%29) que es una forma de reutilizar el código de la clase de la que se hereda, el [polimorfismo](https://es.wikipedia.org/wiki/Polimorfismo_%28inform%C3%A1tica%29) con la que un mismo método puede estar implementado de diferente forma en función de la clase que lo implementa en la jerarquía de clases construida con la herencia, la [sobrecarga](https://es.wikipedia.org/wiki/Sobrecarga_%28inform%C3%A1tica%29) usar un mismo método con diferentes parámetros y también igual o más importante la [encapsulación](https://es.wikipedia.org/wiki/Encapsulamiento_%28inform%C3%A1tica%29) con la que se ocultan los detalles internos del funcionamiento de la clase siendo únicamente posible manejar la clase a través de la interfaz (métodos) que ofrece.

### Tipado estático
En un lenguaje de tipado estático las comprobaciones de tipos se realizan en tiempo de compilación (C, C++, Java). Los tipos pueden ser declarados de forma explícita o de forma inferida según el análisis del código fuente que realiza el compilador. [Wikipedia](https://es.wikipedia.org/wiki/Sistema_de_tipos#Tipado_est.C3.A1tico).

[Static versus Dynamic typing](https://en.wikipedia.org/wiki/Programming_language#Static_versus_dynamic_typing)

### Tipado dinámico
Por el contrario el tipado dinámico comprueba los tipos en el momento de ejecución del programa (PHP, Python, Groovy, JavaScript). A esos lenguajes se les conoce como lenguajes dinámicos. [Wikipedia](https://es.wikipedia.org/wiki/Sistema_de_tipos#Tipado_est.C3.A1tico).

[The Inconvenient Truth About Dynamic vs. Static Typing](https://blog.jooq.org/2014/12/11/the-inconvenient-truth-about-dynamic-vs-static-typing/)

### Fuertemente y débilmente tipado
En un lenguaje fuertemente tipado un dato con un tipo no puede ser usado como si fuese de otro. Aunque algunos lenguajes como Java se dicen que son fuertemente tipado tienen algunas laxitudes. Por ejemplo, en Java un _float_ puede usarse como si fuese un _double_ y en otros lenguajes con menor grado de tipificación como PHP un _string_ puede ser usado como un dato numérico. [Wikipedia](https://es.wikipedia.org/wiki/Tipado_fuerte)

[Lenguajes fuertemente, débilmente, estáticamente y dinámicamente tipados](http://latecladeescape.com/t/Lenguajes+fuertemente,+d%C3%A9bilmente,+est%C3%A1ticamente+y+din%C3%A1micamente+tipados)

Otras características que se suelen mencionar al hablar de lenguajes de programación.

### Inferencia de tipos
En base al análisis del código fuente se puede inferir el tipo de las variables evitando que el programador los declare explícitamente continuamente. [Wkipedia](https://es.wikipedia.org/wiki/Inferencia_de_tipos).

### Closures y Lambdas
Un _closure_ es una referencia a una función que puede referenciar las variables del contexto en el que está definida. Una _lambda_ es simplemente una referencia a una función anónima. En Java las _lambdas_ puede referenciar variables declaradas como _final_, esto es, sean constantes. [Wikipedia](https://en.wikipedia.org/wiki/Closure_%28computer_programming%29).

### Defaults methods y Traits
Un _trait_ define una colección de métodos posiblemente incluyendo también su implementación, además, pueden definir propiedades. Los _defaults methods_ de Java pueden definir implementaciones en algunos métodos de interfaces. [Wikipedia](https://en.wikipedia.org/wiki/Trait_%28computer_programming%29).

### High Order Functions
Las funciones de orden superior son funciones que toman como argumentos una o más funciones o devuelven como resultado otra función. [Wikipedia](https://en.wikipedia.org/wiki/Higher-order_function).

### Currying
La currificación consiste en transformar una función con al menos dos argumentos en una función con al menos un argumento menos. [Wikpedia](https://en.wikipedia.org/wiki/Currying).

### Duck typing
Este concepto es usado en los lenguajes de tipado dinámico tratando a las variables no por su tipo o herencia sino en base a las propiedades y métodos que soporta (Python, PHP, Groovy, JavaScript). [Wikipedia](https://es.wikipedia.org/wiki/Duck_typing).

### Intersection types y Union types
[Ceylon][ceylon] tiene un sistema de tipos más avanzado (y complejo) que Java, una expresión es asignable a un _intersection types_ _X & Y_ si esa expresión es asignable a _X_ e _Y_ individualmente. Una expresión es asignable a un _union type_ _X | Y_ si es asignable a _X_ o _Y_.

[Union, intersection, and enumerated types](http://ceylon-lang.org/documentation/1.2/tour/types/)

### Named arguments
Cuando invocamos un método con argumentos, los argumentos se asignan a los parámetros de la función según el orden en que son declarados. Los _named arguments_ permiten asignar los argumentos a los parámetros de la función por sus nombres. [Wikipedia](https://en.wikipedia.org/wiki/Named_parameter).

### Destructuring assignment
La asignación desestructurada permite extraer datos de _arrays_ y objetos usando una sintaxis réplica de la construcción de _arrays_ y literales de objetos. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

### Tuples
Las tuplas son una estructura de datos formada por varios tipos, en Java 8 puede usarse la librería [vavr][vavr] que añade esto y otras funcionalidades interesantes. En algunos lenguajes puede combinarse con la asignación desestructurada. [Ceylon Tuples](http://ceylon-lang.org/documentation/1.2/tour/sequences/#tuples).

{{< reference >}}
* [Novedades y nuevas características de Java 8][blogbitix-17]
* [10 razones para seguir usando Java][blogbitix-81]
{{< /reference >}}

{{% /post %}}
