---
pid: 63
type: "post"
title: "Internacionalización (i18n) en JavaScript"
url: "/2015/01/internacionalizacion-i18n-en-javascript/"
date: 2015-01-23T10:00:00+01:00
updated: 2015-01-31T01:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:javascript.svg"
tags: ["javascript", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="javascript.svg" title1="JavaScript" width1="200" >}}

Si desarrollamos una aplicación web, que es usada en múltiples idiomas y el lado del cliente tiene cierta complejidad quizá nos encontremos con la necesidad de proporcionar internacionalización (i18n) para los textos o mensajes mediante una librería javascript. Una de la que más me ha gustado de las que he encontrado ha sido [i18next][i18next] pero hay [varias opciones más](https://stackoverflow.com/questions/3084675/internationalization-in-javascript), incluidas dos que merecen ser nombradas que son [polyglot](http://airbnb.github.io/polyglot.js/) y [messageformat](https://github.com/SlexAxton/messageformat.js), estas tres opciones son parecidas pero no tienen exactamente las mismas funcionalidades, deberemos evaluarlas para elegir una según lo que necesitemos.

La documentación de i18next no es muy extensa pero es suficiente, las funcionalidades que ofrece son:

* Soporte para variables (interpolación)
* Soporte para variables anidadas
* Soporte para múltiples formas plurales e indefinidos
* Soporte sprintf
* Integración con jquery
* Búsqueda de locales
* Obtención de traducciones del servidor
* Cacheo de recursos en el navegador
* Algunas otras adicionales

Para mostrar su uso me basaré en el ejemplo [Lista de tareas con Backbone y React][blogbitix-20] al que le añadiré el soporte de internacionalización con i18next. Como en el ejemplo uso RequireJS usaré la versión de i18next con soporte para AMD. Una vez descargada y colocada en el directorio de los módulos de RequireJS deberemos añadir la dependencia a los módulos donde la usemos, en el caso del ejemplo en tareas.js. En el ejemplo los textos que se necesitan internacionalizar son el título, el texto que aparece en el input antes de introducir el nombre de una tarea, el número de tareas completadas y el texto del botón limpiar, para mostrar estos textos usaremos la función t de i18next que nos devolverá dada la clave del texto que queremos el valor adecuado según los archivos de literales y el idioma de la aplicación. Todo esto lo hacemos de la siguiente forma:

{{< code file="tareas-1.js" language="JavaScript" options="" >}}

Los archivos de literales son poco más que una relación de claves valor similar a los archivos properties de Java aunque en el caso de i18next se definen en archivos con formato json. En este ejemplo la localización (l10n) que proporcionaré será para español (translation-dev.json, idioma por defecto) y para inglés (translation-en.json). Por cada idioma localizado necesitamos crea un archivo con los literales:

{{< code file="translation-dev.json" language="json" options="" >}}
{{< code file="translation-en.json" language="json" options="" >}}

Los lenguajes tienen diferentes formas plurales, por ejemplo, en español hay dos formas plurales (1 y más de uno) pero dependiendo del número de elementos a los que hagamos referencia y el lenguaje puede variar el [número de formas plurales](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html?id=l10n/pluralforms). Si en una aplicación ves las típicas eses entre paréntesis, (s), es porque esa aplicación aunque esté internacionalizada no soporta las múltiples formas plurales de los lenguajes, para un usuario ver esos (s) crea confusión y dificulta la lectura del texto. Si nos encontramos con este caso el literal de la forma plural lo definiríamos y lo obtendríamos de la siguiente forma en el caso del español, el parámetro _count_ se utiliza para determinada la forma plural a utilizar (en el caso de español, singular o plural) y los parámetros _completadas_ y _total_ como parématros del literal usando sus valores en la interpolación en la cadena:

{{< code file="tareas-2.js" language="JavaScript" options="" >}}

Para completar el ejemplo debemos inicializar la librería i18next con la configuración que queramos por lo menos para definir el locale  y la disposición de los archivos de literales. Esta configuración en el ejemplo está antes de inicializar el componente de la lista de tareas:

{{< code file="main.js" language="JavaScript" options="" >}}

Cambiando el idioma preferido en el navegador podemos ver los textos de la aplicación según el mismo:

{{< image
    gallery="true"
    image1="image:lista-tareas-es.png" optionsthumb1="300x200" title1="Aplicación en español"
    image2="image:lista-tareas-en.png" optionsthumb2="300x200" title2="Aplicación en inglés" >}}

El texto que indica cuantas tareas están completadas usa las diferentes formas plurales del lenguaje, en el caso del español dos, singular y plural cuando se marca una o dos tareas completadas.

{{< image
    gallery="true"
    image1="image:una-tarea-completada.png" optionsthumb1="300x200" title1="Una tarea completada"
    image2="image:dos-tareas-completadas.png" optionsthumb2="300x200" title2="Dos tareas completadas" >}}

i18next se encarga de obtener los archivos de traducciones automáticamente según el idioma en que se deba mostrar la aplicación, para el caso de que el usuario tenga como idioma preferido es-ES se buscarán los archivos localizados es-ES, es y finalmente dev:

{{< image
    gallery="true"
    image1="image:peticiones-locales-es-ES.png" optionsthumb1="300x200" title1="Búsqueda de traducciones"
    image2="image:peticiones-locales-dev.png" optionsthumb2="300x200" title2="Búsqueda de traducciones" >}}

Una vez hechos los cambios y habiendo modificado las pruebas unitarias de javascript comprobamos que todos siguen pasando correctamente:

{{< image
    gallery="true"
    image1="image:teses.png" optionsthumb1="300x200" title1="Pruebas unitarias" >}}

Eso es todo, este ejemplo aunque sencillo muestra bastantes cosas que se podrían utilizar como base para algo real, usa [RequireJS][requirejs], [Mustache][mustache], [Backbone][backbone], [React][react], [Jasmine][jasmine], [Grunt][grunt] y ahora [i18next][i18next] por la parte cliente y [RESTEasy][resteasy] y [Apache Tapestry][tapestry] por la parte servidor, cada una de estas tecnologías las he comentado individualmente en varios artículos.

* [Introducción y ejemplo de RequireJS](https://elblogdepicodev.blogspot.com.es/2013/03/introduccion-y-ejemplo-de-requirejs.html)
* [Introducción y ejemplo de Mustache](https://elblogdepicodev.blogspot.com.es/2013/03/introduccion-y-ejemplo-de-mustache.html)
* [Logging en JavaScript con log4javascript](https://elblogdepicodev.blogspot.com.es/2013/03/logging-en-javascript-con-log4javascript.html)
* [Capturar errores de JavaScript](https://elblogdepicodev.blogspot.com.es/2013/04/capturar-errores-de-javascript.html)
* [Optimizar módulos de RequireJS y archivos JavaScript](https://elblogdepicodev.blogspot.com.es/2013/04/optimizar-modulos-de-requirejs.html)
* [Introducción y ejemplo de Backbone.js](http://elblogdepicodev.blogspot.com/2013/04/introduccion-y-ejemplo-de-backbonejs.html)
* [Ejemplo de pruebas unitarias en javascript con Jasmine y Sinon](https://elblogdepicodev.blogspot.com.es/2013/05/ejemplo-de-pruebas-unitarias-en.html)
* [Ejemplo lista de tareas con Marionette](https://elblogdepicodev.blogspot.com.es/2013/08/ejemplo-lista-de-tareas-con-marionette.html)
* [Lista de tareas con Backbone y React][blogbitix-20]

El [código fuente completo de este ejemplo](https://github.com/picodotdev/blog-ejemplos/tree/master/BackboneReact) está en [mi repositorio de GitHub](https://github.com/picodotdev), una vez descargado el código puedes probarlo en tu equipo con el siguiente comando:

{{< code file="gradle-tomcatRun.sh" language="bash" options="" >}}

{{< reference >}}
* [Internationalization in JavaScript](https://stackoverflow.com/questions/3084675/internationalization-in-javascript)
* [Internacionalización a lenguajes con diferentes formas plurales en Java][elblogdepicodev-internacionalizacion-lenguajes-con]
* [Internacionalización (i18n) de campos con Hibernate][elblogdepicodev-internacionalizacion-i18n-de-campos-con]
{{< /reference >}}

{{% /post %}}
