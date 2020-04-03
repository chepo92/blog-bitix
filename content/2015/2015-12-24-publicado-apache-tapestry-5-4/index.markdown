---
pid: 116
type: "post"
title: "Publicado Apache Tapestry 5.4"
url: "/2015/12/publicado-apache-tapestry-5-4/"
date: 2015-12-24T16:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:apache-tapestry-5.png"
tags: ["java", "planeta-codigo", "tapestry", "programacion"]
---

{{% post %}}

{{< logotype image="apache-tapestry-5.png" >}}

Después 38 betas (han sido tantas porque era barato hacerlas) y una única candidata a publicación, 4 años desde la anterior versión mayor (5.3) y varias versiones menores de esta, la versión final de [Apache Tapestry][tapestry] 5.4 ha sido publicada. Esta nueva versión incorpora más de 300 correcciones de errores, casi 200 mejoras y varias novedades destacadas  centradas en la integración con JavaScript siguiendo la evolución actual de las aplicaciones web con un peso mayor en el lado del cliente. De esta manera el JavaScript se basa en el uso de [RequireJS][requirejs] proporcionando a las aplicaciones todas las bondades que los módulos proporcionan como organizar mejor el JavaScript de las aplicaciones, no polucionar el ámbito global evitando conflictos entre librerías y carga de dependencias de forma dinámica. También se proporciona soporte _built-in_ para [CofeeScript][coffeescript] y [LESS][less].

- Añadida una capa de abstracción sobre la librería JavaScript usada, esto permite usar [jQuery][jquery] en vez de [Prototype][prototypejs] o cualquier otra del presente o que surja en el futuro.
- En un redespliegue solo los _assets_ modificados se volverán a descargar. Junto con el _checksum_ del _asset_ generado a partir del contenido del recurso e incluido en su URL, también se añade soporte para [E-tag](https://en.wikipedia.org/wiki/HTTP_ETag).
- Soporte a CoffeeScript, LESS, minificación de JavaScript y CSS.
- Mejoras en componentes ([Tree](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/Tree.html), [Grid](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/Grid.html), [Palette](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/Palette.html)).
- Mejor soporte para JavaScript con  RequireJS y <abbr title="Asynchronous Module Definition">AMD</abbr>.
- Componente [Autocomplete](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/mixins/Autocomplete.html) basado en [Typeahead](https://twitter.github.io/typeahead.js/).
- Mejoras en el informe de excepciones y la consola de depuración.
- Se incorpora [Bootstrap][bootstrap] 3 como _framework_ para los estilos y se adaptan los componentes a las nuevas etiquetas y estilos.
- Nueva página _Dashboard_ que sustituye a las anteriores páginas _PageCatalog_, _ServiceStatus_ e _Hibernate
Statistics_.
- Inclusión de [Moment.js][momentjs] y nuevos componentes [LocalDate](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/LocalDate.html) y [TimeInterval](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/corelib/components/TimeInterval.html).
- Mejoras de rendimiento y multitud de correcciones de errores.

Y muchas cosas más listadas en las [notas de publicación](http://tapestry.apache.org/release-notes-54.html) en las que se incluyen las peticiones resueltas. Muchas centradas en el lado cliente de las aplicaciones web y otras cuantas que perfeccionan funcionalidades ya existentes.

Si quieres conocer en detalle Tapestry puedes descargar el [libro PlugIn Tapestry][blogbitix-12] que publique hace un tiempo y que tengo pendiente de actualizar con el nuevo contenido que he escrito en el _blog_ desde su última publicación con algunas de estas novedades y otras cosas adicionales.

Esta nueva versión es un buena oportunidad para conocer este _framework_ orientado a componentes con el objetivo de crear aplicaciones web rápidas, dinámicas, robustas y altamente escalables en la plataforma Java con gran productividad y reutilización de código durante el desarrollo. Al basarse en componentes es distinto de los muchos basados en acciones similares en esencia a uno de los pioneros como [Struts][struts] que podemos encontrar en la plataforma Java como [Spring MVC][spring], [Grails][grails] y [Play!][playframework] y también de los muchos otros en los que la principal diferencia es el lenguaje como [Django][django] ([Python][python]), [Symfony][Symfony] ([PHP][php]), [.NET MVC][dotnet] ([C#][csharp]) o [Ruby On Rails][rubyonrails] ([Ruby][ruby]).

En la [etiqueta Tapestry][blogbitix-tag-tapestry] puedes consultar los últimos artículos que he publicado sobre este _framework_ en Blog Bitix y en la aplicación [JumpStart][tapestry-jumpstart] hay multitud de ejemplos funcionales junto con su código fuente.

Buen regalo para acabar el año 2015, ¡feliz navidad!.

{{< image
    gallery="false"
    image1="image:christmastux2015.jpg" optionsthumb1="600x450" title1="ChristmasTux 2015" >}}

{{< plugintapestry >}}

{{% /post %}}
