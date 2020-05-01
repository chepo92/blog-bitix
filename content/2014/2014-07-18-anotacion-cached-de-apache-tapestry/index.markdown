---
pid: 33
type: "post"
title: "Anotación Cached de Apache Tapestry"
url: "/2014/07/anotacion-cached-de-apache-tapestry/"
date: 2014-07-18T21:30:20+02:00
updated: 2015-05-27T23:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:apache-tapestry-icon-light.svg"
tags: ["software", "java", "programacion", "tapestry", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="apache-tapestry-icon-light.svg" >}}

Como he comentado en un artículo anterior sobre los [modelos push y pull empleados en los motores de plantillas][blogbitix-31] donde comentaba algunas diferencias entre ellos, en el modelo pull es la vista la que pide los datos al controlador y no el controlador el que proporciona los datos a la vista como se hace en el modelo push. Un problema que puede plantear el que la vista pida los datos al controlador es que si la devolución de los datos solicitados son costosos en tiempo del cálculo, carga para el sistema en CPU o memoria, o intensivos en entrada/salida de disco o red y se piden varias veces puede suponer como resultado que el tiempo empleado para generar la página sea elevado o la aplicación consuma recursos innecesarios.

[Apache Tapestry](http://tapestry.apache.org/) que emplea el modelo pull dispone de la [anotación Cached](http://tapestry.apache.org/5.3/apidocs/org/apache/tapestry5/annotations/Cached.html) que permite cachear el resultado de un método a nivel de componente y página durante la generación de la misma. Su uso sería el siguiente:

{{< code file="Label.java" language="java" options="" >}}

En este ejemplo cada vez que se llama a los métodos getPosts, getPostsCount se accede a una base de datos (o sistema externo) que lanza una consulta, supongamos, costosa de calcular o que simplemente es innecesaria hacerla varias veces. Usando la anotación Cached podemos hacer la aplicación más eficiente evitando las segundas llamadas a los métodos. Si el componente Label del ejemplo se usa dentro de un bucle de un [componente loop](http://tapestry.apache.org/5.3/apidocs/org/apache/tapestry5/corelib/components/Loop.html) y como parámetros se le van pasando varios labels las llamadas a los métodos getPosts y getPostCount se realizarán solo para cada valor diferente.

Algunas veces puede interesarnos que el cacheo dependa de un dato, es decir, que para cada valor de un dato la anotación Cached devuelva diferentes resultados. Y esto es lo que se hace en el ejemplo con el parámetro watch de la anotación, por cada valor de la propiedad label el resultado probablemente sea diferente pero nos interesa que el método solo se ejecute una vez por cada diferente valor, dado que los artículos y el número de ellos únicamente variarán en función de esta propiedad. Esto también puede ser usado para que solo se evalúe los métodos una vez por iteración de un bucle estableciendo la expresión watch al índice del bucle.

{{< code file="Label.tml" language="plaintext" options="" >}}

Aún así, la anotación Cached funciona a nivel de petición, cada vez que que se haga una petición a la aplicación y se llame al método anotado por primera vez y por cada valor de la expresión watch se ejecutará el método. Si tenemos muchas peticiones o un determinado componente tarda mucho en generar su contenido, por ejemplo, porque depende de un sistema externo lento (base de datos, http, ...) quizá lo que debamos hacer es un componente que almacene durante un tiempo el contenido que genera y sea devuelto en múltiples peticiones, de modo que evitemos emplear un tiempo costoso en cada petición. Para ello, podríamos desarrollar un [componente que usase una librería de cache](https://elblogdepicodev.blogspot.com.es/2011/01/componente-cache-para-tapestry-5.html) como por ejemplo [EHCache](http://ehcache.org/).

{{< plugintapestry >}}

{{< reference >}}
* [Libro PlugIn Tapestry][blogbitix-12]
* [Documentación sobre Apache Tapestry](https://elblogdepicodev.blogspot.com.es/2010/05/documentacion-sobre-apache-tapestry.html)
{{< /reference >}}

{{% /post %}}
