---
pid: 198
type: "post"
title: "Introducción al JavaScript de ECMAScript 6"
url: "/2016/12/introduccion-al-javascript-de-ecmascript-6/"
aliases: ["/2016/12/introduccion-a-javascript-de-ecmascript-6/"]
date: 2016-12-03T12:00:00+01:00
updated: 2016-12-09T13:50:00+01:00
language: "es"
rss: true
sharing: true
comments: true
imagePost: "logotype:javascript.svg"
tags: ["javascript", "planeta-codigo", "programacion"]
summary: "Con ECMAScript 6 se han incorporado al lenguaje varias novedades como nuevas palabras reservadas para definir variables y constantes, símbolos, interpolación de variables en cadenas, desestructuración, forma abreviada para declarar funciones, nueva sintaxis más sencilla para definir clases, objetos de tipo _Map_ y _Set_, _Promises_ como alternativa a _callbacks_, el protocolo _Iterator_ y generadores, además de algunas otras cosas que si como yo no habías dedicado tiempo a aprender mejor JavaScript aún te resulten novedosas."
---

{{% post %}}

{{< logotype image1="javascript.svg" title1="JavaScript" width1="200" >}}

Hasta ahora como desarrollador web durante prácticamente toda mi vida laboral no había dedicado tiempo a conocer en más detalle el lenguaje de programación [JavaScript][javascript] usado en los navegadores web. Mucho de lo que necesitaba me era suficiente con librerías como [jQuery][jquery] o [underscore][underscorejs]. Ahora algunas páginas web tienen un peso importante en el lado cliente y ante esta necesidad el lenguaje JavaScript está evolucionando e incorporando nuevas características como las definidas en sus especificaciones de [ECMAScript][ecmascript].

Para aprender en mucho más en detalle lo poco que conocía de JavaScript he leído el libro [Learning JavaScript](https://amzn.to/2g3TV52) que cubre las novedades de ECMAScript 2015 también conocido como ECMAScript 6 (ES6). Después de leerlo diré que es un libro que me ha gustado mucho y considero que es adecuado tanto para alguien que pueda estar aprendiendo a programar como para alguien que ya conoce otros lenguajes de programación explicando los conceptos sin complicaciones.

{{< amazon
    linkids="3ea3a8ae787fc5f9cdd9ca6934c7d635&internal=1"
    asins="1491914912" >}}

Las últimas versiones de los navegadores [Chrome][google-chrome] y [Firefox][firefox] ya soportan todo lo que describo a continuación y que está más detalladamente explicado en el libro. Para los navegadores que aún no soportan todo como en los dispositivos móviles hay compiladores o _transpilers_ para [traducir de ECMAScript 6 a ECMAScript 5][blogbitix-200]. En un entorno en el que sepamos se usa solo Chrome o Firefox como en una intranet o una aplicación de uso interno en una organización podemos utilizar estas novedades y si es una aplicación accesible por cualquier usuario desde internet podemos hacer la conversión de ECMAScript 6 a ECMAScript 5 con [gulp][gulpjs] o [grunt][grunt].

Estas son gran parte de las novedades que he anotado al leer el libro Learning JavaScript. Para profundizar sobre JavaScript la documentación de [Mozilla Developer Network][mozilla-mdn] está muy bien como manual de referencia donde hay más ejemplos y comentarios más extensos de los que hago en cada sección.

### Definición de variables

Para solventar las deficiencias de las variables declaradas con _var_ hay dos nuevas palabras reservadas _let_ para [declarar variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations) que cambian de valor y _const_ para constantes. También se pueden declarar símbolos que son identificadores de tipos únicos e inmutables.

El problema de las variables declaradas con _var_ está en que tienen ámbito de función con _let_ no existe hasta que es declarada. Las variables con _var_ son declaradas al principio del ámbito de la función o en el ámbito global.

{{< code file="variables.js" language="JavaScript" options="" >}}

### Interpolación de variables en cadenas

La [interpolación de variables en cadenas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) facilita la construcción de _strings_ y hace el código más legible. Las plantillas se definen con comillas de acento grave \`.

{{< code file="interpolation.js" language="JavaScript" options="" >}}

### Desestructuración

Se ha incorporado la [asignación desestructurada](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) pudiendo hacer cosas como las siguientes en las asignaciones y en las llamadas a las funciones.

{{< code file="destructuring.js" language="JavaScript" options="" >}}

### Operador _spread_

El [operador _spread_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) permite a una expresión se expandida en lugares donde se esperan múltiples argumentos como en llamadas a funciones, múltiples elementos para literales de _arrays_ o múltiples variables para asignación desestructurada.

{{< code file="spread.js" language="JavaScript" options="" >}}

### Bucles con _in_ y _of_

Usando el [iterador _in_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) en un bucle recorremos las propiedades de un objeto y con el [iterador _of_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) podemos recorrer cualquier objeto iterable. Cualquier objeto que definamos podemos hacerlo iterable cumpliendo el [protocolo Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).

{{< code file="iterator-in-of.js" language="JavaScript" options="" >}}

### Funciones

En JavaScript [definir funciones](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) es una parte muy importante de la esencia del lenguaje, ahora hay una forma corta de definir funciones.

{{< code file="arrow-functions.js" language="JavaScript" options="" >}}

### Arrays

El [tipo Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) tiene muchos métodos y funciones adecuadas para la programación funcional como _map_, _filter_ o _reduce_ y también _push_, _pop_, _shift_, _unshift_, _forEach_, _slice_, _splice_, _fill_, _copyWithin_, _findIndex_, _lastIndexOf_, _indexOf_, _reverse_, _sort_, _some_, _every_, _join_ o _concat_. Funciones que antes no estaban presentes y para suplir su ausencia usábamos la librería _underscore_.

### Métodos de la clase _Function_

Teniendo en una variable de [tipo Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) podemos llamarla con _call_ incluyendo un parámetro que se considerará el valor de la referencia _this_ dentro de la función. Con _apply_ los argumentos serán los definidos en un array aunque con la sintaxis _spread_ esta función puede caer en desuso. Con _bind_ podemos asociar a la función la referencia que siempre se tomará como _this_.

### Nueva sintaxis para clases

Anteriormente en JavaScript ya se podían [definir clases](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) haciendo uso de la propiedad _prototype_ aunque su sintaxis ahora se ha simplificado y hecho más parecida a otros lenguajes además de definir propiedades con su método _getter_ y _setter_.

{{< code file="classes.js" language="JavaScript" options="" >}}

### Objetos Map y Set

Los objetos pueden ser utilizados como mapas pero a veces utilizar un objeto no es deseable como contenedor de datos, para ello se definen los [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) que son clases que a través de una clave se accede a un valor y [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) para colecciones sin elementos repetidos.

Algunas funciones de la clase Map son _get_, _set_, _has_, _size_, _keys_, _values_, _entries_, _forEach_, _delete_, _clear_ y _size_. Algunas de la clase Set son _add_, _has_, _forEach_, _delete_ y _size_.

### Operadores _instanceof_ y _typeof_

Con [instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) se puede comprobar si una variable es de un cierto tipo, si su cadena de prototipos incluye la función indicada. Con [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) se puede conocer el tipo de dato de una variable.

{{< code file="instanceof-typeof.js" language="JavaScript" options="" >}}

### Excepciones

JavaScript soporta gestionar ciertas circunstancias de error con excepciones y con la construcción [try catch finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) similar a la existente en lenguajes como Java.

### _Callback_ y _Promise_

Algunas tareas las manejamos usando [funciones _callback_](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/Using_js-ctypes/Declaring_and_Using_Callbacks), funciones que se pasan como argumento y que son llamadas en algún momento. La programación con _callback_ se hace complicada en la programación asíncrona cuando se anidan varias funciones. Con los [objetos Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) el código de la programación asíncrona es más legible.

{{< code file="callback-promise.js" language="JavaScript" options="" >}}

### _Generators_

Los [objetos Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) que se basan en el [protocolo _Iterator_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) pueden establecer una comunicación entre el generador y el código que lo llama con la palabra reservada _yield_ que retorna el valor del generador y la función _next()_ del iterador que puede proporcionar una parámetro usable en el generador. Las funciones generadoras se declaran poniendo un * después de la palabra _function_.

{{< code file="generator.js" language="JavaScript" options="" >}}

Otros métodos nuevos de la [clase _Object_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) son _freeze_ que impide añadir nuevas propiedades al objeto, eliminar existentes o modificar sus valores haciendo al objeto inmutable. Con _seal_ se previene únicamente añadir nuevas propiedades.

### Misc

Declarando el [modo esctricto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) con _'use strict';_ evitamos algunos de los errores que podemos cometer al usar JavaScript como declarar una variable en un ámbito global cuando no es nuestra intención. Con el método [toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) de los objetos podremos proporcionar una representación de un objeto más descriptiva.

### Manipulación DOM

Es raro que para manipular el árbol [DOM](https://es.wikipedia.org/wiki/Document_Object_Model) que representa el HTML cargado en el navegador no usemos la librería jQuery pero para casos básicos o cuando no podemos usar esa librería o queremos esa dependencia podemos hacer uso de las funciones incorporadas en el propio navegador y algunas funciones declaradas en el [objeto Document](https://developer.mozilla.org/en-US/docs/Web/API/Document). Algunos métodos del objeto Documento son _getElementById_, _getElementsByClassName_, _getElementsByTagName_, _querySelector_ y _querySelectorAll_.

Para manipular el texto de un nodo se usa la propiedad _textContent_ de la [interfaz Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) y para incluir en el nodo contenido HTML la propiedad _innerHTML_ de la [interfaz Element](https://developer.mozilla.org/en-US/docs/Web/API/element).

Con _createElement_ de Document mediante código podemos crear nuevos elementos y con _appendChild_ o _insertBefore_ de Node insertarlos en el árbol DOM. Con la propiedad _classList_ y los métodos _add_ y _remove_ podemos añadir clases a un nodo y con _dataset_ acceder a los atributos _data-_ de la etiqueta.

### Eventos

Los navegadores definen más de 200 eventos ante los que podemos reaccionar, uno de los más típicos es el _click_ en un botón. A un [Element](https://developer.mozilla.org/en-US/docs/Web/API/element) de la página y con el método _addEventListener()_ se pueden asociar eventos.

Eventos como el _click_ en algunos elementos tienen definido un comportamiento por defecto, para evitar ejecutar ese comportamiento por defecto disponemos de la función _preventDefault_.

Los manejadores de eventos se van recorriendo primero en modo captura desde la raíz hasta el nodo del árbol DOM donde se ha producido el evento y posteriormente en modo burbuja desde el nodo donde se ha producido el evento hasta la raíz. Con _stopPropagation_ se puede cancelar la propagación del evento, realmente la propagación se sigue realizando pero el evento se marca como cancelado. Con _stopImmediatePropagation_ se puede parar la propagación completamente, parando incluso la propagación con el evento cancelado.

Todos estos ejemplos funcionan en los navegadores Firefox y Chrome pudiendo probarlos en la consola JavaScript que incorporan para los desarrolladores. En la página [es6-features](http://es6-features.org/) hay una lista completa de todas las nuevas características de ECMAScript 6.

{{< reference >}}
* [Mozilla Developer Network][mozilla-mdn]
* [es6-features](http://es6-features.org/)
{{< /reference >}}

{{% /post %}}
