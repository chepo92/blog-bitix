---
pid: 25
type: "post"
title: "Página de excepción de Grails"
url: "/2014/05/pagina-de-excepcion-de-grails/"
date: 2014-05-23T20:00:19+02:00
updated: 2014-05-30T20:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:grails.svg"
tags: ["java", "programacion", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="grails.svg" title1="Grails" width1="300" >}}

No es la primera vez que comento algo similar ([I](https://elblogdepicodev.blogspot.com.es/2012/08/paginas-pagecatalog-servicestatus-e.html), [II](https://elblogdepicodev.blogspot.com.es/2011/08/motivos-para-elegir-apache-tapestry.html)) disponer de la mayor cantidad de información cuando se produce una excepción o un error en la aplicación es vital para determinar rápidamente la causa del error y para solucionarlo correctamente. Para disponer de esta información podemos generar un archivo de log que nos permita revisar lo que pasó en la aplicación en un determinado momento. En el momento de desarrollo también nos puede interesar tener una página de excepción informativa.

La página de error de [Grails][grails] por defecto da poca información, a poco más da la traza de la excepción y un extracto de los archivos relacionados donde se ha producido, podría ser mejor. Podría informar de los parámetros que se enviaron en la petición, las cabeceras http o las cookies además de los parámetros de sesión, a veces esta información nos puede servir para identificar la causa más rápidamente ya que la excepción puede estar produciéndose con el valor de un determinado parámetro o un determinado navegador, esta información no la tenemos en una simple traza de la excepción.

En este artículo crearé una página de excepción para Grails con los parámetros de la petición y sesión, cabeceras HTTP y las cookies enviadas además de la traza de la excepción. Los parámetros, las cookies y cabeceras HTTP se pueden obtener de la request y los atributos de la sesión del objeto session. El código del ejemplo de página de excepción es el siguiente.

{{< code file="exception.gsp" language="plaintext" options="" >}}

Para hacer uso de la página de excepción deberemos configurar el archivo UrlMappings para que Grails use esta página de excepción.

{{< code file="UrlMappings.groovy" language="groovy" options="" >}}

El resultado se puede ver en la siguiente captura de pantalla.

{{< image
    gallery="true"
    image1="image:pagina-excepcion-grails-por-defecto.png" optionsthumb1="300x200" title1="Página de error por defecto de Grails"
    image2="image:pagina-excepcion-grails-personalizada.png" optionsthumb2="300x200" title2="Página de error personalizada de Grails" >}}

Los estilos mostrados en las capturas de pantalla podrían ser mejores pero la esencia está en la información que se muestra. En otro artículo publicaré como [obtener estadísticas de Hibernate para detectar problemas de N+1 u obtener las consultas sql que se están realizando en cada página de una aplicación Grails][blogbitix-26], esta información nos puede ayudar bastante y no es excesivamente complicado hacerla. Con ambas conseguiremos que las aplicaciones que desarrollemos con Grails sean un poco más informativas.

{{< reference >}}
* [Detectar problema N+1 y obtener estadísticas de Hibernate con Grails][blogbitix-26]
{{< /reference >}}

{{% /post %}}
