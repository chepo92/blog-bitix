---
pid: 20
type: "post"
title: "Ejemplo lista de tareas con Backbone y React"
url: "/2014/04/ejemplo-lista-de-tareas-con-backbone-y-react/"
date: 2014-04-11T16:33:28+02:00
updated: 2015-10-01T20:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:backbone.svg"
tags: ["software", "programacion", "javascript", "planeta-codigo"]
summary: "He desarrollado este ejemplo de lista de tareas usando diferentes herramientas javascript primeramente con solo Backbone y después con Marionette. En este caso realizaré el mismo ejemplo para ver las diferencias usando la combinación Backbone para los modelos y React para las vistas junto con otras herramientas como ReactJS, Mustache, Jasmine, Grunt e i18n. Un ejemplo bastante completo de lo que ofrece javascript en estos momentos con la composición de herramientas que más me ha gustado."
---

{{% post %}}

{{< logotype image1="backbone.svg" title1="Backbone" width1="200" image2="react.svg" title2="React" width2="200" >}}

En anteriores entradas explicaba como hacer el típico ejemplo que se suele usar como demostración en los _framework_ MVC de JavaScript que consiste en una lista de tareas en la que se pueden añadir nuevas, marcarlas como completadas y eliminarlas. Realice este ejemplo en uno de ellos [usando solo Backbone](https://elblogdepicodev.blogspot.com.es/2013/04/ejemplo-lista-de-tareas-con-backbone.html) y posteriormente [usando Marionette](https://elblogdepicodev.blogspot.com.es/2013/08/ejemplo-lista-de-tareas-con-marionette.html). Estos ejemplos eran parte de una serie de artículos sobre JavaScript que la que mostaba como usar muchas otras herramientas como [Require JS](https://elblogdepicodev.blogspot.com.es/2013/03/introduccion-y-ejemplo-de-requirejs.html), [Mustache](https://elblogdepicodev.blogspot.com.es/2013/03/introduccion-y-ejemplo-de-mustache.html), [logging con javscript](https://elblogdepicodev.blogspot.com.es/2013/03/logging-en-javascript-con-log4javascript.html), [capturar errores en javascript](https://elblogdepicodev.blogspot.com.es/2013/04/capturar-errores-de-javascript.html), [introducción a Backbone](http://elblogdepicodev.blogspot.com/2013/04/introduccion-y-ejemplo-de-backbonejs.html), [lista de tarea con Backbone, RESTEasy y Tapestry](https://elblogdepicodev.blogspot.com.es/2013/04/ejemplo-lista-de-tareas-con-backbone.html), [pruebas unitarias con Jasmine y Sinon](https://elblogdepicodev.blogspot.com.es/2013/05/ejemplo-de-pruebas-unitarias-en.html), [Usar Grunt para ejecutar teses unitarios de código JavaScript][blogbitix-19] y que constituyen parte del actual «estado del arte» en cuanto a desarrollo con JavaScript.

La lista de tareas aunque es un ejemplo sencillo sirve perfectamente como ejercicio para mostrar el uso de los _frameworks_ MVC. En esta entrada voy a mostrar como hacer el mismo ejemplo usando [Backbone](http://backbonejs.org/) y [React](https://reactjs.org/) y veremos, en mi opinión, que el ejemplo es mucho mas sencillo y lógico.

La parte más complicada y menos intuitiva del ejemplo de la lista de tareas con solamente Backbone o con [Marionette](https://marionettejs.com/) probablemente era la V del MVC. Backbone es un _framework_ que deja bastante libertad al desarrollador pudiendo usar únicamente las partes que necesitemos de él, sin embargo, esta sencillez nos obliga a gestionar ciertas «tareas de fontanería» y repetitivas nosotros mismos como la gestión de las vistas y la memoria. Marionette trata de dar solución a parte de estas tareas necesarias además de proporcionar unas guías y arquitectura para el desarrollo de las aplicaciones. Sin embargo, aún con Marionette la construcción de la parte de la vista con el uso de ItemView, CollectionView y Layout comentados en la [documentación](https://github.com/marionettejs/backbone.marionette) me resultó poco intuitivo y en cierta medida todavía complicado, no acabé convencido del todo, con React he acabado con la sensación que hacer algo más complejo que este ejemplo es algo al menos manejable.

React es una librería que en algunos casos se está usando en aplicaciones junto con Backbone para proporcionar la parte de la vista y controlador que en conjunto definen lo que en React se conoce como un componente. De esta manera Backbone proporciona los modelos, eventos, routing , ... y React proporciona la representación de esos modelos en html y el código encargado de gestionar el estado de esa vista. React tiene ciertas ventajas adicionales por su funcionamiento y es que cuando se cambia algo en la vista no se reemplaza el html completo de la vista y se inserta uno nuevo sino que React busca las diferencias entre la vista actual y la nueva y realiza únicamente los cambios necesarios para tener la vista nueva, esto tiene la ventaja de que el proceso es más eficiente y rápido y puede notarse en aplicaciones con muchos datos gestionados en el cliente. Pero lo que más me ha gustado de React es la definición del concepto de componente (vista + controlador) que por una parte hace que la creación de las vistas sea mucho más sencilla e intuitiva que en Backbone o Marionette y que junto con el controlador permite crear piezas reusables de código.

Los componentes de React reemplazan a las vistas de Backbone y vistas, controladores y layouts de Marionette. En el nuevo ejemplo los cambios principales se encuentran en el archivo tareas.js que contiene el código de la aplicación de lista de tareas.

{{< code file="tareas.js" language="JavaScript" options="" >}}

El resultado es el siguiente:

{{< image
    gallery="true"
    image1="image:backbone-react.png" optionsthumb1="300x200" >}}

Los elementos de las vistas se recomienda definirlas con los elementos que proporciona React con React.DOM, pueden definirse más al estilo de html con jsx pero esto hace que el javascript haya de compilarse para transformar ese jsx/html a los elementos React.DOM, el mayor problema es que esto es un proceso costoso lo que puede ralentizar la carga de una página y que el compilador tiene un tamaño considerable de unos 300 KiB. El JSX es más claro y parecido al resultado final que el código equivalente React.DOM pero aún así el código javascript es suficientemente claro. Si aún así quisiésemos usar JSX lo recomendable sería que los archivos con contenido jsx se precompilase en un momento anterior de enviarlo al cliente, posiblemente antes del despliegue de la aplicación en el servidor.

Para probar el código podemos hacerlo abriendo el archivo test/javascript/SpecRunner.html, sin embargo, deberemos hacerlo con Chrome o Chromium y lanzándolo con un parámetro opcional para permitir la carga de los archivos.

{{< code file="chromium.sh" language="bash" options="" >}}

También podríamos probarlo usando gradle con:

{{< code file="gradlew.sh" language="bash" options="" >}}

Sin embargo, [PhantomJS](http://phantomjs.org/) que es lo que se utiliza para simular el navegador en las pruebas con jasmine y grunt, no soporta la función bind produciéndose la siguiente excepción al usarse en la librería de React.

{{< code file="error-bind.txt" language="plaintext" options="" >}}

Para evitarlo debemos añadir un _polyfill_. Deberemos añadir los polyfills de [cujojs/poly](https://github.com/cujojs/poly), podemos hacer uso de ellos con RequireJS basta como añadirlo como dependencia:

{{< code file="main-specs.js" language="JavaScript" options="" >}}

Este problema de la función _bind_ ya esta incluido como [peticion en PhantomJS](https://code.google.com/p/phantomjs/issues/detail?id=522) y probablemente se resuelva en la versión 2.0.

El ejemplo con el [código fuente completo de este ejemplo](https://github.com/picodotdev/blog-ejemplos/tree/master/BackboneReact) está en [mi repositorio de GitHub](https://github.com/picodotdev), puedes probarlo en tu equipo con el siguiente comando:

{{< code file="gradle-tomcatRun.sh" language="bash" options="" >}}

{{< reference >}}
* [Introducción y ejemplo de RequireJS](https://elblogdepicodev.blogspot.com.es/2013/03/introduccion-y-ejemplo-de-requirejs.html)
* [Introducción y ejemplo de Mustache](https://elblogdepicodev.blogspot.com.es/2013/03/introduccion-y-ejemplo-de-mustache.html)
* [Logging en JavaScript con log4javascript](https://elblogdepicodev.blogspot.com.es/2013/03/logging-en-javascript-con-log4javascript.html)
* [Capturar errores de JavaScript](https://elblogdepicodev.blogspot.com.es/2013/04/capturar-errores-de-javascript.html)
* [Optimizar módulos de RequireJS y archivos JavaScript](https://elblogdepicodev.blogspot.com.es/2013/04/optimizar-modulos-de-requirejs.html)
* [Introducción y ejemplo de Backbone.js](http://elblogdepicodev.blogspot.com/2013/04/introduccion-y-ejemplo-de-backbonejs.html)
* [Ejemplo de pruebas unitarias en javascript con Jasmine y Sinon](https://elblogdepicodev.blogspot.com.es/2013/05/ejemplo-de-pruebas-unitarias-en.html)
* [Ejemplo lista de tareas con Marionette](https://elblogdepicodev.blogspot.com.es/2013/08/ejemplo-lista-de-tareas-con-marionette.html)
* [Usar Grunt para ejecutar teses unitarios de código JavaScript][blogbitix-19]
* [Moment.js, librería JavaScript para fechas][blogbitix-148]
* [Internacionalización (i18n) en JavaScript][blogbitix-63]
* [Function/bind#Compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Compatibility)
* [React, JSX, and CoffeeScript](http://neugierig.org/software/blog/2014/02/react-jsx-coffeescript.html)

{{% /post %}}
