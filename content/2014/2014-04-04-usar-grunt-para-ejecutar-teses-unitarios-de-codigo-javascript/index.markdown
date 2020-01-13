---
pid: 19
type: "post"
title: "Usar Grunt para ejecutar teses unitarios de código JavaScript"
url: "/2014/04/usar-grunt-para-ejecutar-teses-unitarios-de-codigo-javascript/"
date: 2014-04-04T16:43:23+02:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:grunt.png"
tags: ["software", "programacion", "javascript", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="grunt.png" title="Grunt" width="200" >}}

En la [serie de artículos que escribí sobre javascript](https://elblogdepicodev.blogspot.com.es/2013/03/introduccion-y-ejemplo-de-requirejs.html) hice un ejemplo más o menos complejo y parecido a lo que podría ser una aplicación real usando muchas de las herramientas que ahora se consideran una buena opción para desarrollar aplicaciones javascript como [RequireJS](https://elblogdepicodev.blogspot.com.es/2013/03/introduccion-y-ejemplo-de-requirejs.html), [Backbone](http://www.genbetadev.com/desarrollo-web/patron-de-diseno-mvc-del-lado-cliente-con-backbonejs), [Marionette](https://elblogdepicodev.blogspot.com.es/2013/08/ejemplo-lista-de-tareas-con-marionette.html), [Jasmine y Sinon](https://elblogdepicodev.blogspot.com.es/2013/05/ejemplo-de-pruebas-unitarias-en.html). En el [ejemplo de la lista de tareas con estas herramientas](https://elblogdepicodev.blogspot.com.es/2013/08/ejemplo-lista-de-tareas-con-marionette.html) hice unas cuantas pruebas unitarias para mostrar en un ejemplo como son y la forma de usar [Jasmine](http://jasmine.github.io/).

Sin embargo, para ejecutar las pruebas unitarias se necesitaba un navegador y hacerlo de forma manual cuando quisiéramos comprobar el estado de las pruebas. Lo ideal tal y como se comenta en el libro [The Pragmatic programmer](https://amzn.to/2SVraLu), es que las pruebas unitarias se ejecuten de forma automatizada con la herramienta de construcción que usemos, esto evitará que se nos olvide ejecutarlas en cada cambio y así descubriremos los errores pronto, también podremos hacer que se ejecuten en un entorno de integración continua como podría ser [Jenkins](http://jenkins-ci.org/). En esta entrada mostraré como ejecutar esas pruebas unitarias de javascript con una tarea de la herramienta [Gradle](http://www.gradle.org/) y usando una herramienta similar a Gradle pero para JavaScript llamada [Grunt](http://gruntjs.com/).

Primeramente necesitaremos instalar node.js y el paquete de javascript grunt-cli con de forma global en el sistema:

{{< code file="script-1.sh" language="bash" options="" >}}

En caso de que tengamos pruebas unitarias con Jasmine como es el caso de este ejemplo deberemos instalar los siguientes paquetes en el directorio raíz del proyecto:

{{< code file="script-2.sh" language="bash" options="" >}}

La siguiente linea como se explica en [la documentación del paquete grunt-template-jasmine-requirejs](https://www.npmjs.org/package/grunt-template-jasmine-requirejs) puede ser necesaria si en algún momento obtenemos el siguiente error:

{{< code file="script-3.sh" language="bash" options="" >}}

{{< code file="mensaje.txt" language="plaintext" options="" >}}

{{< code file="script-4.sh" language="bash" options="" >}}

Si usamos [Mocha][mochajs] como librería de pruebas unitarias probablemente disponemos de varios paquetes que podemos instalar de forma similar. Una vez instaladas estas herramientas debemos crear dos archivos necesarios para Grunt, que son [package.json](https://github.com/picodotdev/elblogdepicodev/blob/master/MarionetteREST/package.json) y [grunt.js](https://github.com/picodotdev/elblogdepicodev/blob/master/MarionetteREST/grunt.js). El primero contiene la definición del paquete js para Grunt, quizá lo más destacable es que el nombre del paquete debe estar en minúsculas sino obtendremos un error parecido a «Error: Invalid name: "MarionetteREST" npm ERR! at ensureValidName». El archivo grunt.js es la descripción de las tareas de grunt que contiene un poco de configuración donde indicamos las especificaciones que contienen las pruebas unitarias, las dependencias necesarias para ejecutar las pruebas y las tareas que se definen. Con todo esto ya podemos ejecutar las pruebas con:

{{< code file="script-5.sh" language="bash" options="" >}}

Sin embargo, puede que deseemos ejecutarlas desde la herramienta de construcción que usemos, en mi caso con Gradle. Para añadir el soporte a Gradle de ejecutar las pruebas unitarias a su vez con Grunt debemos añadir la siguiente configuración a nuestro archivo build.gradle:

{{< code file="build.gradle" language="groovy" options="" >}}

Veremos como salida el siguiente resultado en la terminal.

{{< image
    gallery="true"
    image1="image:grunt-jasmine.png" optionsthumb1="300x200" title1="Ejecutar teses Jasmine con Grunt" >}}

Al hacer esta entrada de forma que las pruebas se ejecuten con Grunt he movido las plantillas de Mustache de lugar, antes estaban embebidas en el html en el ejemplo [Backbone](https://elblogdepicodev.blogspot.com.es/2013/04/ejemplo-lista-de-tareas-con-backbone.html) y las he movido a dentro del javascript de la aplicación de la lista de tareas. Esto hace que para pasar las pruebas no tengamos una dependencia sobre un archivo html externo en el que buscar las plantillas, también así el javascript es más autónomo y está incluido en él todo lo que necesita.

Aún tengo otra entrada preparada sobre javascript que es el mismo ejemplo de la lista de tareas pero en vez de usando las vistas de Backbone o Marionette usando [React](https://reactjs.org/). El [código fuente completo de este ejemplo sobre pruebas unitarias y Marionette](https://github.com/picodotdev/elblogdepicodev/tree/master/MarionetteREST) está en [mi regpostorio de GitHub](https://github.com/picodotdev).

{{< reference >}}
* [Introducción y ejemplo de RequireJS](https://elblogdepicodev.blogspot.com.es/2013/03/introduccion-y-ejemplo-de-requirejs.html)
* [Introducción y ejemplo de Mustache](https://elblogdepicodev.blogspot.com.es/2013/03/introduccion-y-ejemplo-de-mustache.html)
* [Logging en JavaScript con log4javascript](https://elblogdepicodev.blogspot.com.es/2013/03/logging-en-javascript-con-log4javascript.html)
* [Capturar errores de JavaScript](https://elblogdepicodev.blogspot.com.es/2013/04/capturar-errores-de-javascript.html)
* [Optimizar módulos de RequireJS y archivos JavaScript](https://elblogdepicodev.blogspot.com.es/2013/04/optimizar-modulos-de-requirejs.html)
* [Introducción y ejemplo de Backbone.js](http://elblogdepicodev.blogspot.com/2013/04/introduccion-y-ejemplo-de-backbonejs.html)
* [Ejemplo de pruebas unitarias en javascript con Jasmine y Sinon](https://elblogdepicodev.blogspot.com.es/2013/05/ejemplo-de-pruebas-unitarias-en.html)
* [Ejemplo lista de tareas con Marionette](https://elblogdepicodev.blogspot.com.es/2013/08/ejemplo-lista-de-tareas-con-marionette.html)
* [Ejemplo lista de tareas con Backbone y React][blogbitix-20]
{{< /reference >}}

{{% /post %}}
