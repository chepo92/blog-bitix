---
pid: 327
type: "post"
title: "Soporte para lanzar eventos desde JavaScript con Ajax en un componente de Apache Tapestry"
url: "/2018/06/soporte-para-lanzar-eventos-desde-javascript-con-ajax-en-un-componente-de-apache-tapestry/"
date: 2018-06-09T08:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:apache-tapestry-icon-light.svg"
tags: ["java", "javascript", "planeta-codigo", "programacion", "tapestry"]
---

{{% post %}}

{{< logotype image1="apache-tapestry-icon-light.svg" image2="java.svg" >}}

Para desarrollar aplicaciones web con el lenguaje de programación Java hay gran cantidad de _frameworks_ que proponen un marco de trabajo para proporcionar la mayor parte de la funcionalidad de infraestructura necesaria para una aplicación. La mayoría basados en acciones y unos pocos basados en componentes. Una aplicación web no solo consta de la parte del servidor y desde hace tiempo la parte de cliente ha cobrado gran importancia.

Algunos _frameworks_ proporcionan cierto soporte para JavaScript y recursos CSS en otros es muy escaso o inexistente. En el caso del _framework_ [Apache Tapestry][tapestry] en la categoría de los basados en componentes proporciona un gran soporte no solo en la parte del servidor sino también para la parte cliente.

Una de estas funcionalidades que proporciona Tapestry es poder lanzar eventos desde el cliente mediante una petición _Ajax_ para que sean procesados en el servidor y obtener la respuesta que se devuelva desde el servidor normalmente en formato _Json_. Hay que definir un manejador de evento en el servidor siguiendo la convención _on[Event]_ y en caso de querer lanzar un evento desde el cliente anotándolo con [@PublishEvent](http://tapestry.apache.org/current/apidocs/index.html?org/apache/tapestry5/ComponentResources.html).

{{< code file="Event.java" language="java" options="" >}}
{{< code file="Event.tml" language="html" options="" >}}

El uso del componente en una plantilla de una página.

{{< code file="Index.tml" language="html" options="" >}}

En el código JavaScript asociado a una página o componente hay que hacer uso del módulo que ofrece el soporte para _Ajax_ y los eventos desde el cliente, con [RequireJS][requirejs] se obtiene una referencia a él. Solo es necesario indicar como parámetro el nombre del evento a lanzar, los parámetros si los hubiese y los manejadores de respuesta, tanto en el caso de ser correcta que recibirá los datos devueltos en el servidor como incorrecta. En el archivo [ajax.coffee](https://git1-us-west.apache.org/repos/asf?p=tapestry-5.git;a=blob_plain;f=tapestry-core/src/main/coffeescript/META-INF/modules/t5/core/ajax.coffee;hb=85cc611fbad4a3574664b33ce9adf614b4f0fe07) están documentados todos los parámetros que posee la función _ajax_ del módulo _t5/core/ajax_.

{{< code file="event.js" language="JavaScript" options="" >}}

En el primer elemento del HTML se añade un atributo _data-componenent-events_ que contiene la URL necesaria para cada evento que haya sido declarado como lanzable. A partir del elemento indicado en la opción _element_ se busca la URL en el atributo _data-componenent-events_ siguiendo un orden empezando por el propio elemento, en los previos al mismo nivel jerárquicamente empezando por el más cercano desde abajo hacia arriba, en los padres y finalmente en el elemento _body_.

{{< image
    gallery="true"
    image1="image:event.png" optionsthumb1="300x200" title1="Petición Ajax del evento"
    image2="image:data-component-events.png" optionsthumb2="300x200" title2="Atributo con la URL del evento"
    caption="Petición Ajax y atributo con la URL del evento" >}}

Esta funcionalidad se incorporó en Apache Tapestry 5.2 donde hasta entonces era necesario construir la URL del evento en el servidor con [ComponentResources.createEventLink()](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/ComponentResourcesCommon.html#createEventLink-java.lang.String-java.lang.Object...-) y enviarlo al componente haciendo uso de [JavaScriptSupport](http://tapestry.apache.org/current/apidocs/org/apache/tapestry5/services/javascript/JavaScriptSupport.html) como se muestra en el componente _Ajax_ que no hace uso de esta funcionalidad de eventos.

{{< code file="Ajax.java" language="java" options="" >}}

Con este soporte es algo más fácil enviar eventos y realizar peticiones _Ajax_ desde el cliente para obtener datos.

{{< sourcecode git="blog-ejemplos/tree/master/PlugInTapestry" command="./gradlew run" >}}

{{< plugintapestry >}}

{{< reference >}}
* [Ajax and Zones](https://tapestry.apache.org/ajax-and-zones.html)
* [ajax.coffee](https://git1-us-west.apache.org/repos/asf?p=tapestry-5.git;a=blob_plain;f=tapestry-core/src/main/coffeescript/META-INF/modules/t5/core/ajax.coffee;hb=85cc611fbad4a3574664b33ce9adf614b4f0fe07)
{{< /reference >}}

{{% /post %}}
