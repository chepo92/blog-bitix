---
pid: 47
type: "post"
title: "Qué es y cómo hacer «web scraping» en Java"
url: "/2014/10/que-es-y-como-hacer-web-scraping-en-java/"
date: 2014-10-10T21:22:40+02:00
updated: 2015-05-26T20:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:java.svg"
tags: ["java", "programacion", "planeta-codigo"]
summary: "A falta de una forma estructurada para obtener datos de una fuente podemos extraerla directamente del contenido html de una página, a esto se le denomina «web scraping». En Java y con la librería jsoup podemos obtener la información que necesitamos de forma sencilla."
---

{{% post %}}

{{< logotype image="java.svg" >}}

Algunas aplicaciones en internet necesitan intercambiar información para hacer algún tipo de integración. La tendencia actual es proporcionar una API REST o algún tipo de archivo descargable con cierto formato que permita procesarlo de forma automatizada y a las aplicaciones obtener la información de forma sencilla y precisa. Sin embargo, hay ocasiones en las que las aplicaciones de las que necesitamos extraer la información no proporcionan ni una API REST ni un archivo descargable con lo que no nos queda más remedio que extraer los datos de la propias páginas web inspeccionando el código HTML, esto en inglés se le conoce como [«web scraping»](https://es.wikipedia.org/wiki/Web_scraping).

En este artículo explicaré como hacer web «scraping» usando la librería [jsoup][jsoup] y usando el lenguaje de programación Java. jsoup proporciona una [API](http://jsoup.org/apidocs/) para poder extraer la información que necesitemos, ya sean las URLs de los enlaces, determinado texto que contiene una valor, imágenes, ... . A través de los selectores similares a los usados en [jquery][jquery] podemos llegar a los elementos que queremos de forma simple sin tener que hacer complicados algoritmos.

Dada la URL, archivo o String con contenido HTML podemos extraer los enlaces de imágenes, enlaces, hojas de estilos, iconos como se muestra en el siguiente ejemplo:

* [Example program: list links](http://jsoup.org/cookbook/extracting-data/example-list-links)

Un ejemplo práctico en el que podríamos hacer «scraping» es por ejemplo para extraer los enlaces torrent de descarga de todos los libros de un determinado autor o determinada serie de la página [epublibre](https://www.epublibre.org/), esto nos ahorraría tener que hacerlo manualmente. Además si usamos transmission a través de su API podríamos automatizar la descarga.

El algoritmo o algoritmos que necesitemos para extraer la información será específico según la estructura HTML de cada página web, si esta cambia deberemos cambiar el algoritmo o los selectores, en cualquier caso es mejor que tener que hacer la tarea manualmente constantemente que al cabo de un tiempo será tediosa, aburrida y repetitiva.

Pero hay que tener cuidado con el contenido «scrapeado» y se debe tratar como una fuente de datos no segura. Por seguridad hay que tener especial cuidado con los scripts del contenido importado que podrían hacer que nuestra aplicación al mostrarlos tuviese algún problema de seguridad. La siguiente semana explicaré [como «scrapear» contenido de forma segura][blogbitix-48] en un ejemplo real como es el agregador de bitácoras [Blog Stack][blogstack] donde solo se permiten los scripts de fuentes consideradas seguras como presentaciones de [Speakerdeck][speakerdeck], [Gist][github-gist] de GitHub, [YouTube][youtube], [Vimeo][vimeo] o publicidad del [programa de afiliados de Amazon][amazon-afiliados].

{{< reference >}}
* [Cómo filtrar contenido HTML de forma segura][blogbitix-48]
* [Cómo hacer un substring de una cadena html][blogbitix-61]
{{< /reference >}}

{{% /post %}}
