---
pid: 48
type: "post"
title: "Cómo filtrar contenido HTML de forma segura"
url: "/2014/10/como-filtrar-contenido-html-de-forma-segura/"
date: 2014-10-17T16:53:25+02:00
updated: 2015-01-16T12:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "programacion", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="java.svg" >}}

Algunos sitios y aplicaciones pueden tener la necesidad de [«scrapear» el contenido de sitios web][blogbitix-47] para extraer información de ellos y posteriormente usarla de alguna forma. El contenido «scrapeado» o obtenido de una fuente externa debe ser filtrado, si no es filtrado y posteriormente es servido a los usuarios puede enviárseles principalmente scripts con contenido malicioso (provocando un ataque [cross-site scripting, XSS](https://en.wikipedia.org/wiki/Cross-site_scripting)) o causar una desmaquetación al visualizar el contenido. A la hora de implementar la agregación de contenido de forma segura en [Blog Stack][blogstack], contenido obtenido de una fuente RSS o Atom pero que en esencia es HTML he usado la librería [jsoup][jsoup], de tal forma que solo el contenido considerado seguro o confiable de los artículos sea agregado.

¿Que puede pasar si en una fuente envía elementos &lt;script&gt;, &lt;iframe&gt; u &lt;object&gt;? Los &lt;script&gt; son código que se envía al navegador del usuario y que podrían explotar algún fallo de seguridad del navegador que usen, los &lt;iframe&gt; permiten cargar contenido de una tercera fuente. En definitiva podrían hacer que visitar Blog Stack fuese inseguro. Pero no permitir incluir estos elementos también haría que no se pudiesen mostrar vídeos de [YouTube][youtube], [Vimeo][vimeo], [Gist][github-gist] de GitHub, presentaciones de [SpeackerDeck][speakerdeck] y se perdería parte del contenido original. La solución que he aplicado en Blog Stack es permitir el contenido de esos elementos que provienen de una fuente considerada confiable, es decir, si se trata de un iframe cuyo elemento src proviene de YouTube se permite el contenido ya que se supone que YouTube y su contenido es seguro. De esta forma el contenido puede agregarse de forma segura sin perder nada del contenido original.

Para hacer el filtrado de HTML en java podemos usar jsoup, para ello deberemos usar la clase [Whitelist](http://jsoup.org/apidocs/org/jsoup/safety/Whitelist.html) que proporciona jsoup o implementar una clase que la extienda con las etiquetas y sus atributos que consideramos seguros. En Blog Stack he necesitado implementar una clase Whitelist agregándole la funcionalidad que deseaba.

Esta es la implementación de la clase Whitelist, con el método addTag se indican los tags permitidos, con addAttributes se indican los atributos permitidos para cada etiqueta, addProtocols se indican los protocolos permitidos para cada etiqueta y atributo, finalmente el método addAttribute permite usar una expresión regular para el valor del atributo, esto se comprueba en el método isSafeAttribute:

{{< code file="AppWhitelist.java" language="java" options="" >}}

Y esta es la forma de usar la clase a través de [Jsoup.clean](http://jsoup.org/apidocs/org/jsoup/Jsoup.html#clean%28java.lang.String,%20java.lang.String,%20org.jsoup.safety.Whitelist%29):

{{< code file="IndexServiceImpl.java" language="java" options="" >}}

El [código fuente completo de BS](https://github.com/picodotdev/blog-stack) junto con el «scrapeado» y el uso de esta clase está disponible en un repositorio de GitHub.

{{< reference >}}
* [Qué es y cómo hacer «web scraping» en Java][blogbitix-47]
* [Cómo hacer un substring de una cadena html][blogbitix-61]
* [Codificar los datos para evitar ataques XSS en una página web][blogbitix-392]
{{< /reference >}}

{{% /post %}}
