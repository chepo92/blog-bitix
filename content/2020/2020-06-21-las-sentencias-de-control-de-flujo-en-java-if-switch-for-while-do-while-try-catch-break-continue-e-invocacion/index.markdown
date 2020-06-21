---
pid: 494
type: "post"
title: "Las sentencias de control de flujo en Java (if, switch, for, while, do-while, try-catch, break, continue e invocación)"
url: "/2020/06/las-sentencias-de-control-de-flujo-en-java-if-switch-for-while-do-while-try-catch-break-continue-e-invocacion/"
date: 2020-06-21T07:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
summary: "El lenguaje de programación Java utiliza un paradigma orientado a objetos pero también emplea otros paradigmas como el funcional con la incorporación de las _lambas_ en Java 8 y el imperativo en los bloques de sentencias de los métodos. En este artículo están los tipos de sentencias de control de flujo disponibles en el lenguaje de programación Java: condicionales, de repetición, de asignación, de gestión de excepciones e invocación de métodos en Java."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Java es un lenguaje orientado a objetos donde aplicando los principios de encapsulación, herencia y polimorfismo, el código está dentro de los métodos de las clases de los objetos. El código dentro de los métodos sigue los principios de los lenguajes imperativos con una secuencia de sentencias de asignación, control de flujo, llamada a otros métodos y de repetición, más recientemente con la [incorporación de las _lambdas_ y referencias a métodos en Java 8][blogbitix-17] es posible emplear también un enfoque de programación funcional.

La orientación a objetos es una forma de organizar el código y los datos que maneja ese código de modo que se respeten los principios de encapsulación, una forma de reutilizar el código con herencia y una forma de abstraer el comportamiento dependiendo de la clase concreta que implementa el método. Pero el código de Java no es únicamente código orientado a objetos también es un lenguaje imperativo para el código de los métodos.

El código imperativo se basa en la ejecución de forma secuencial de un conjunto de sentencias. Las sentencias de un método o programa son de diferente tipo: de asignación, condicionales, de repetición, de gestión de excepciones para controlar errores y de llamadas a funciones, en el caso de los lenguajes orientados a objetos llamadas a métodos. Estas sentencias individuales se pueden anidar unas dentro de otras por ejemplo tener una sentencia de repetición dentro del bloque de sentencias de una condicional.

Cada uno de estos tipos de sentencias forman las piezas básicas de construcción de los programas, combinadas en múltiples lineas de código forman programas complejos que sirven para el propósito para que el programa fue escrito.

### Sentencias de asignación

Las sentencias de asignación sirven para asignar nuevos valores y referencias a objetos a variables y propiedades de objetos. La sintaxis de la asignación consta del nombre de variable que toma el valor a la izquierda, el operador de asignación en el medio y de la expresión a la derecha. El valor de una variable o propiedad cambia con una sentencia de asignación, el valor anterior se reemplaza por el nuevo valor. El nuevo valor de la variable es el resultado de evaluar la expresión que proporciona el valor, con una asignación de inicialización es posible asignar un valor al mismo tiempo que se declara una variable o propiedad de un objeto.

Una variable tiene un valor si se trata de un tipo primitivo de datos, en caso de tener como tipo una clase contiene una referencia a una instancia de un objeto de ese tipo o la referencia nula. Una expresión devuelve como resultado un valor y este es el asignado a la variable por la sentencia de asignación.

Una expresión puede contener múltiples operadores: para datos booleanos (de lógica _&&, ||, !_ y de comparación _==, !=, <, >, <=, >=_), aritméticos para datos numéricos (_+, -, *, /, %, ++, --_) o operadores para datos binarios (_&, |, ^, ~, <<, >>, >>>_). Otros operadores de asignación (_+=, -=, *=, /=, %=, <<=, >>=, &=, ^=, |=_) toman como primer operando el valor de la variable, esto evita repetir el nombre de la variable en la expresión y facilita la legibilidad del código.

{{< code file="Asignacion.java" language="java" options="" >}}

El operador ternario _?:_ es una expresión condicional que devuelve el valor de la expresión según el resultado de evaluar una expresión booleana.

{{< code file="CondicionalTernario.java" language="java" options="" >}}

### Setencias condicionales (if, switch)

Las sentencias condicionales son un tipo de sentencia que evalua una expresión booleana y dependiendo de su valor verdadero o falso ejecuta o no su su bloque de sentencias asociado para cada caso. Las sentencias a continuación de la condición se ejecutan si la sentencia _if_ se evalúa como verdadero. La sentencia _if_ además puede tener otro bloque de sentencias a ejecutar si la expresión booleana se evalúa como falso, el bloque de sentencias _else_. Las sentencias _if_ y _else_ se pueden encadenar.

{{< image
    gallery="true"
    image1="image:sentencia-if.png" optionsthumb1="300x200" title1="Diagrama sentencia if"
    image2="image:sentencia-if-else.png" optionsthumb2="300x200" title2="Diagrama sentencia if-else"
    caption="Diagramas sentencias if e if-else" source="beginnersbook.com" >}}

{{< code file="CondicionalIf.java" language="java" options="" >}}

Cuando una sentencia _if_ tiene muchas ramas y la expresión condicional comprueba en todos los casos diferentes valores de una misma variable se utiliza la sentencia _switch_. Si el valor de la variable coincide con el valor del bloque del caso se ejecutan las sentencias de ese bloque. Cada bloque ha de estar finalizado con sentencia _break_ para no evaluar las sentencias del siguiente bloque. El caso _default_ permite ejecutar un bloque de sentencias si el valor de la expresión no coincide con ninguno de los valores de los casos, siendo como la parte _else_ de las sentencias _if_.

{{< image
    gallery="true"
    image1="image:sentencia-switch.png" optionsthumb1="650x450" title1="Diagrama sentencia switch"
    caption="Diagrama sentencia switch" source="beginnersbook.com" >}}

{{< code file="CondicionalSwitch.java" language="java" options="" >}}

La sentencia _if_ equivalente del _switch_ anterior sería el siguiente. si es posible se prefiere usar la sentencia _switch_ sobre la _if_ equivalente, más si hay un varias ramas, ya que es mas sencilla, legible y no hace falta indicar en cada expresión de condición la expresión que devuelve el valor.

{{< code file="CondicionalSwitchIf.java" language="java" options="" >}}

Las sentencias _if_ se pueden anidar unas dentro de otras esto dificulta la legibilidad del código, para evitar [múltiples anidaciones y crear varias ramas  se utilizan guard clauses][blogbitix-267] que simplifican el flujo del programa.

### Sentencias de repetición (for, foreach, while, do-while, break, continue)

Las sentencias de repetición permiten ejecutar un bloque de sentencias durante un número determinado de veces o mientras se cumpla una condición. En cada iteración después de ejecutar el bloque de sentencias la condición se vuelve a evaluar si se sigue cumpliendo, si se cumple se realiza una nueva iteración si no se cumple se sale del bucle y se continua con la siguiente sentencia del programa. Esta evaluación de la condición y ejecución del bloque de sentencias se realiza hasta que la condición del blucle _while_ no se cumpla. Hay varios tipos de bucles.

La sentencia _while_ ejecuta un bloque de sentencias mientras se cumpla una condición, puede ocurrir el caso de que la condición de la sentencia _while_ no se cumpla y por tanto el bloque de sentencias de repetición no se ejecute ninguna vez. La comprobación de la condición se realiza antes de entrar al bucle.

{{< image
    gallery="true"
    image1="image:sentencia-while.png" optionsthumb1="650x450" title1="Diagrama sentencia while"
    caption="Diagrama sentencia while" source="beginnersbook.com" >}}

{{< code file="RepeticionWhile.java" language="java" options="" >}}

En el bucle _do-while_ la comprobación de la condición está después del bloque de sentencias de repetición, a diferencia del bucle _while_ en el _do-while_ el bloque de sentencias se ejecutan al menos una vez.

{{< image
    gallery="true"
    image1="image:sentencia-do-while.png" optionsthumb1="650x450" title1="Diagrama sentencia do-while"
    caption="Diagrama sentencia do-while" source="beginnersbook.com" >}}

{{< code file="RepeticionDoWhile.java" language="java" options="" >}}

La sentencia _for_ utilizan otra sintaxis para realizar bucles, una de las [4 formas de hacer un bucle for][blogbitix-247] contiene una inicialización, condición de repetición e incremento además del bloque de sentencias a ejecutar. Otras formas de bucle _for_ son el _forearch_ para colecciones de objetos.

{{< image
    gallery="true"
    image1="image:sentencia-for.png" optionsthumb1="650x450" title1="Diagrama sentencia for"
    caption="Diagrama sentencia for" source="beginnersbook.com" >}}

{{< code file="RepeticionFor.java" language="java" options="" >}}

Dentro de las sentencias de bucle se pueden emplear las palabras reservadas _break_ y _continue_. La sentencia _break_ permite salir del bucle inmediatamente sin necesidad de evaluar la condición. La palabra _continue_ dejar de ejecutar sentencias del bucle y evaluar de nuevo la condición de bucle, si se sigue cumpliendo la condición se ejecuta de nuevo el bloque de sentencias. Las sentencias _break_ y _continue_ normalmente se utilizan dentro de una sentencia condicional _if_.

{{< image
    gallery="true"
    image1="image:sentencia-continue.png" optionsthumb1="650x450" title1="Diagrama sentencia continue"
    caption="Diagrama sentencia continue" source="beginnersbook.com" >}}

{{< code file="BreakContinue.java" language="java" options="" >}}

Un bucle infinito es en un bucle que se itera contnuamente porque la condición de iteración se cumple siempre. Ejecutar continuamente un bloque de sentencias hace que el procesador consuma todos los recursos que se disponen de cómputo de procesador o una alta actividad de entrada y salida que degrada el rendimiento del sistema sin producir ningún resultado útil cuanto menos si no genera errores en el resto de programas del sistema. Suele ser por un error de programación y para resolverlo habitualmente hay que matar el proceso del programa y reiniciarlo, si no se corrige el error en el bucle en las mismas condiciones se producirá de nuevo el bucle infinito.

### Setencias de control de expceciones (try-catch, throw)

Las expresiones _try-catch_ son [el mecanismo de control de errores en Java][blogbitix-270]. Estas expresiones permiten tratar las excepciones lanzadas por la palabra reservada _throw_ en los métodos invocados de su bloque de sentencias.

{{< code file="TryCatch.java" language="java" options="" >}}

Las excepciones se lanzan con la palabra reservada _throw_, toda excepción ha de heredar de [Exception](java11:java.base/java/lang/Exception.html) y si no hereda de [RuntimeExecption](java11:java.base/java/lang/RuntimeException.html) ha de declararse en la firma del método para indicar que el método puede lanzar esa excepción en caso de no ser tratada dentro del mismo método con un _try-catch_.

{{< code file="Throw.java" language="java" options="" >}}

### Invocación de métodos

Las funciones en los lenguajes orientados a objetos dentro de las clases, las clases encapsulan las variables y las funciones o métodos. Los métodos tiene acceso además de a los parámetros que recibe a las variables del objeto en las están contenido y otros métodos de la misma clase u otros objetos respetando los [ámbitos de visibilidad de las palabras reservadas _public_, _protected_, _private_ y _default_][blogbitix-458].

Las expresiones de invocación a métodos se componen del objeto que recibe la llamada a uno de sus métodos separado por un punto y nombre del método. Si el método llamado devuelve un objeto se puede encadenar otra nueva llamada a un método del objeto devuelto. El valor o referencia a objeto devuelto se puede asignar a una variable también.

{{< code file="Invocacion.java" language="java" options="" >}}

{{% /post %}}
