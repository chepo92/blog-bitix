---
pid: 39
type: "post"
title: "Doble barra de botones con Apache Tapestry"
url: "/2014/08/doble-barra-de-botones-con-apache-tapestry/"
date: 2014-08-29T13:04:52+02:00
updated: 2015-05-27T23:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:apache-tapestry-5.svg"
tags: ["java", "programacion", "tapestry", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="apache-tapestry-5.svg" title="Apache Tapestry" width="400" >}}

Por motivos de usabiliad en algunas páginas se incluyen dos barra de botones, una antes de una larga sección y otra después. El motivo de la doble barra de botones inicial es que no sea necesario hacer «scroll» hasta el final de la página para acceder a los botones y realizar la acción que permitan. Por el contrario, inlcuir la barra de botones al final de la página permite que una vez seleccionados los elementos o revisado el contenido de la sección hacer disponibles las acciones que es probable que se quieran realizar.

{{< image
    gallery="true"
    image1="image:doble-barra-botones.png" optionsthumb1="300x200" title1="Doble barra de botones" >}}

Dependiendo del _framework_ web que utilicemos podremos hacerlo de una o varias formas pero de lo que estamos seguros es que copiar y pegar haciendo que el código esté duplicado no es una buena idea por los problemas de mantenimiento que puede suponer. Pero crear una pequeña plantilla o archivo exclusivo para incluir la barra de botones tampoco es la solución ideal, ¿por que? pues porque creando un archivo específico con la botonera puede que nos ocasione un problema que denominaré de «microgestión», es decir, nos obliga a crear un montón de pequeños archivos pequeñitos y hacer referencia o utilizar el mecanismo de inclusión que dispongamos para usar el contenido en unos de otros. En una aplicación grande esta microgestión si nos vemos obligados a ella puede llegar a ser molesta al desarrollar cuanto menos.

¿Como se puede evitar? En el _framework_ [Apache Tapestry][tapestry] la doble botonera puede hacerse de varias formas una de ellas es crear un componente pero esto nos obliga a crear un archivo para la clase java y probablemente tambien un archivo de plantilla con el contenido html causando el problema de la microgestión. Pero en Tapestry también podemos hacer uso del [componente block](http://tapestry.apache.org/component-templates.html) que sirve para incluir en él cierto contenido y el [componente delegate](http://tapestry.apache.org/5.3/apidocs/org/apache/tapestry5/corelib/components/Delegate.html) que sirve para emitir el contenido entre otras cosas de un componente block. Usando estos dos componentes podemos evitar la microgestión definiendo todo en un mismo archivo, además al tener todo en un mismo archivo el código será más fácilmente legible, quedándonos en un ejemplo de la siguiente forma:

{{< code file="ProductoAdmin.tml" language="plaintext" options="" >}}

En [Grails][grails] por poner un ejemplo de un _framework_ que no usa el concepto de componentes la forma habitual de hacerlo es usando un g:include y con ello teniendo microgestión. Pero retorciendo un poco (creo) en este caso el uso de Grails podemos emplear la etiqueta g:set para establecer el contenido de la botonera y emitir su contenido dos veces en el gsp.

{{< code file="ProductoAdmin.gsp" language="plaintext" options="" >}}

El código completo de este ejemplo del caso de Tapestry está en un [repositorio de GitHub][ejemplo-plugin-tapestry]. Si estás interesado en conocer más en profundidad como funciona Tapestry y sus múltiples «killer features», bastantes mucho más importantes que lo explicado en este artículo, puedes descargarte el [libro PlugIn Tapestry][blogbitix-12] que he escrito, de forma gratuita, sin registros, y en varios formatos ¿que más puedes pedir?. Y si te interesa el tema puedes suscribirte al [canal RSS de esta bitácora][blogbitix-feed] para no perderte nada del nuevo contenido que publique, no solo sobre Tapestry, sino también sobre Java, Linux, ...

{{< plugintapestry >}}

{{< reference >}}
* [Libro PlugIn Tapestry][blogbitix-12]
* [Más artículos sobre Apache Tapestry][blogbitix-tag-tapestry]
{{< /reference >}}

{{% /post %}}
