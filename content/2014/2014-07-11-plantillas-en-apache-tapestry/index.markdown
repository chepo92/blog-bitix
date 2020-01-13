---
pid: 32
type: "post"
title: "Plantillas en Apache Tapestry"
url: "/2014/07/plantillas-en-apache-tapestry/"
date: 2014-07-11T20:54:34+02:00
updated: 2015-05-27T23:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:apache-tapestry-5.svg"
tags: ["java", "programacion", "tapestry", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="apache-tapestry-5.svg" title="Apache Tapestry" width="400" >}}

Una página web está formada por un conjunto de páginas enlazadas entre ellas. Cada página está formado por un html diferente pero normalmente todas las páginas de una misma web comparten el mismo aspecto variando solo una sección donde está el contenido propio de la página. La cabecera de la página, el pie de la página o los menús de navegación suelen estar presentes en todas las páginas de la web y suelen ser los mismos.

En este artículo voy a explicar como crear un componente que nos de a todas las páginas un aspecto común de una aplicación usando apache Tapestry como _framework_ web de tal forma que esa parte común no esté duplicada en la aplicación y pueda ser reutilizada fácilmente. En el caso de [Blog Stack](http://www.blogstack.info) las páginas se componen de las siguientes partes.

{{< image
    gallery="true"
    image1="image:plantilla-blog-stack.png" optionsthumb1="300x200" title1="Plantilla de Blog Stack" >}}

El esquema de la plantilla será una cabecera, una barra de navegación con enlaces a diferentes secciones de la web, un menú lateral con contenido variable según la página, el contenido que variará según la página y un pie de página. Como todo componente de [Apache Tapestry](http://tapestry.apache.org/) está formado de una clase Java y una plantilla. El componente puede tener diferentes parámetros, y en el caso del de la plantilla muchos para poder variar el contenido por defecto de las diferentes secciones de la página, estos son aside1, aside2, aside3, aside4.

{{< code file="Layout.java" language="java" options="" >}}

El archivo tml asociado al componente plantilla será el que genere el contenido html que se enviará al navegador del usuario. En esta plantilla se incluye una cabecera con el logo de la aplicación y una frase que lo describe, posteriormente está una barra de navegación con varios enlaces, con <t:body> se incluye el contenido propio de la página que usa el componente plantilla y usando el componente [<t:delegate>](http://tapestry.apache.org/5.3/apidocs/org/apache/tapestry5/corelib/components/Delegate.html) se incluye el contenido de los diferentes bloques aside si se han personalizado en el uso de la plantilla, con el componente [<t:if test="aside">](http://tapestry.apache.org/5.3/apidocs/org/apache/tapestry5/corelib/components/If.html) se comprueba si hay algún aside usándose el método isAside de la clase Layout asociada al componente plantilla y del tml. Finalmente, está el pie que será común a todas las páginas que usen este componente.

{{< code file="Layout.tml" language="plaintext" options="" >}}

Para terminar nos queda ver como sería usar este componente en una página donde queremos usarlo. En la etiqueta html se usa la plantilla con t:type para indicar que esa etiqueta es un componente de Tapestry y se le pasan los aside1 y aside2 que en esta página tienen contenido propio. El contenido de la etiqueta html se sustituirá por la etiqueta <t:body> de la plantilla, el contenido inlcluido en los componentes [<t:block>](http://tapestry.apache.org/5.3/apidocs/org/apache/tapestry5/Block.html) aunque esté dentro de la etiqueta html solo se mostrará cuando se haga uso de un <t:delegate>, como se hace el componente plantilla. Este es el caso de la [página índice de Blog Stack](http://www.blogstack.info). A pesar de todo el contenido que genera y solo consta de 34 líneas de código, esto muestra lo fácil que es en Tapestry dividir las diferentes partes de una página en componentes que puede ser reutilizados.

{{< code file="Index.tml" language="plaintext" options="" >}}

Usando el mismo componente podemos darle un aspecto común pero variando el contenido de las diferentes secciones. En este caso usamos la misma plantilla donde se muestra la misma cabecera, enlaces de navegación y pie de página pero sin el contenido lateral como en el caso de la página de preguntas frecuentes de [Blog Stack](http://www.blogstack.info/faq), en este caso no usamos los componentes aside.

{{< code file="Faq.tml" language="plaintext" options="" >}}

Por supuesto, podemos crear tantos componentes plantilla como necesitemos en una aplicación y usar uno o otro en función del tipo de página.

{{< plugintapestry >}}

{{< reference >}}
* [Código fuente de Blog Stack](https://github.com/picodotdev/blog-stack)
* [Libro PlugIn Tapestry][blogbitix-12]
* [Documentación sobre Apache Tapestry](https://elblogdepicodev.blogspot.com.es/2010/05/documentacion-sobre-apache-tapestry.html)
{{< /reference >}}

{{% /post %}}
