---
pid: 31
type: "post"
title: "Modelo «push» contra modelo «pull» en frameworks web"
url: "/2014/07/modelo-push-contra-modelo-pull-en-frameworks-web/"
date: 2014-07-06T10:58:10+02:00
updated: 2015-06-06T11:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:apache-tapestry-icon-light.svg"
tags: ["java", "programacion", "tapestry", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="apache-tapestry-icon-light.svg" >}}

En la mayoría de _frameworks_ de desarrollo de aplicaciones o páginas web para producir el contenido HTML que se envía al cliente se emplea un modelo en el que el controlador proporciona los datos que combinados con una plantilla producen el HTML. Este modelo también es el empleado habitualmente en muchos motores de plantillas ([thymeleaf](http://www.thymeleaf.org/), [mustache](http://mustache.github.io/), ...). Sin embargo, hay dos modelos que se pueden seguir para producir un texto como resultado dada una plantilla y datos:

* Push: este es el modelo comentado. El controlador recupera de antemano todos los datos que necesita la vista, el controlador también determina la vista o plantilla que se usar. Combinando los datos y la plantilla se produce el resultado.

{{< image
    gallery="true"
    image1="image:modelo-push.png" optionsthumb1="300x200" title1="Modelo push" width1="650" >}}

Los pasos que se siguen en este modelo son:

<ol>
<li>La petición llega al servidor</li>
<li>El dispatcher redirige la petición al controlador</li>
<li>El controlador solicita los datos a la base de datos</li>
<li>El controlador obtiene los datos de la base de datos</li>
<li>El controlador redirige a la vista y le envía los datos que necesita</li>
<li>La vista genera el contenido y se envía al cliente</li>
</ol>

* Pull: en este modelo el controlador no conoce los datos que usará la vista y es esta la que los solicita según necesita. La vista tira del controlador, el controlador solo debe ofrecer el soporte par que la vista pueda recuperar los datos que necesite.

{{< image
    gallery="true"
    image1="image:modelo-pull.png" optionsthumb1="300x200" title1="Modelo pull" width1="650" >}}

Los pasos que se siguen en este modelo varían ligeramente del modelo push pero de forma importante, son:

<ol>
<li>La petición llega al servidor</li>
<li>El dispatcher redirige la petición al controlador</li>
<li>El controlador redirige a la vista</li>
<li>La vista pide los datos que necesita al controlador y el controlador los pide a la base de datos</li>
<li>La vista obtiene los datos que ha pedido del controlador</li>
<li>La vista genera el contenido y se envía al cliente</li>
</ol>

El modelo push es empleado en muchos de los _frameworks_ web más usados, algunos ejemplos son [Symfony](http://symfony.com/), [Django](https://www.djangoproject.com/), [Grails][grails] o [ASP.NET MVC](http://www.asp.net/mvc). En la categoría de _frameworks_ que usan un modelo pull está [Apache Tapestry](http://tapestry.apache.org/).

Al modelo push le encuentro algunos problemas. Un problema es que el controlador debe conocer que datos necesita la vista y si la vista tiene cierta lógica esta la tendremos duplicada tanto en en controlador como en la vista. Supongamos que en una aplicación tenemos un usuario y dirección con una relación de 1 a 1 entre ambos y que debemos mostrar en una página el usuario y su dirección solo si solo si es un usuario VIP. En el controlador tendremos que recuperar el usuario, comprobar si es VIP y si lo es recuperar su dirección. El problema está que en la vista deberemos hacer también una comprobación si el cliente es VIP o al menos si a la vista se le ha proporcionado una dirección, como resultado la comprobación la tendremos duplicada tanto en el controlador como en la vista, como sabemos la duplicación de código y lógica habitualmente no es buena idea ya que a la larga dificulta el mantenimiento de la aplicación.

En Grails (pero podría ser cualquier otro _framework_ o motor de plantillas push) podríamos visualizar el usuario y su dirección si es VIP de la siguiente forma:

{{< code file="push.txt" language="plaintext" options="" >}}

Si usamos [hibernate](http://hibernate.org/) la recuperación de la dirección podemos hacerla navegando la relación pero he querido recuperarla en el controlador expresamente para el ejemplo, si no pudiésemos usar hibernate para recuperar el dato relacionado probablemente lo que haríamos es recuperar el dato en el controlador como en el ejemplo.

Otro problema del modelo push es que si la vista es usada en múltiples controladores, y precisamente la separación entre vistas y controladores uno de sus motivos es para esto, todos estos controladores van a compartir el código para recuperar los datos que necesite la vista, dependiendo del número de datos y de veces que empleemos una vista en múltiples controladores quizá debamos hacer una clase asociada a la vista que recupere los datos para evitar tener código duplicado (y exactamente esto es lo que se hace en Tapestry).

En el modelo pull el controlador no debe conocer que datos necesita la vista y si hay lógica para mostrar ciertos datos está lógica solo la tendremos en la vista. Aunque el controlador no deba conocer que datos en concreto necesite la vista si debe ofrecer el soporte para que la vista los recupere cuando necesite. Como se puede ver el código en el siguiente ejemplo la comprobación de si el usuario es VIP solo está en la vista. En Tapestry cada vista tiene asociado una clase Java que es la encargada de ofrecer el soporte para que la vista pueda recuperar los datos, el conjunto de controlador más vista es lo que en Tapestry se conoce como componente, si el componente se usa varias veces en el mismo proyecto no necesitamos duplicar código.

{{< code file="pull.txt" language="plaintext" options="" >}}

¿Podemos emplear un modelo pull en un _framework_ que normalmente se suele usar un modelo push? Sí, basta que en el modelo de la vista pasemos un objeto que le permita recuperar los datos que necesite. En Grails empleando un modelo pull el código podría quedarnos de la siguiente forma:

{{< code file="pull-in-push.txt" language="plaintext" options="" >}}

Como se ve el if de comprobación en el controlador desaparece, a pesar de todo si la vista fuese usada por varios controladores deberíamos crear algo para evitar tener duplicado el código que permite recuperar los datos a la vista. Aunque esto es perfectamente posible no es la forma habitual de usar los modelos push.

Este ejemplo es muy sencillo y empleando cualquiera de los dos modelos es viable, pero cuando el número de datos a recuperar en las vistas y el número de veces que se reutiliza una vista aumenta (y en teoría la separación entro controlador y vista uno de sus motivos es posiblemente para reutilizarlas) el modelo push presenta los problemas que he comentado que el modelo pull no tiene.

{{< plugintapestry >}}

{{< reference >}}
* [Pull vs. Push MVC Architecture](http://www.guyrutenberg.com/2008/04/26/pull-vs-push-mvc-architecture/)
* [Libro PlugIn Tapestry][blogbitix-12]
* [Documentación sobre Apache Tapestry](https://elblogdepicodev.blogspot.com.es/2010/05/documentacion-sobre-apache-tapestry.html)
{{< /reference >}}

{{% /post %}}
