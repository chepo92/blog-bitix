---
pid: 473
type: "post"
title: "Generar enlaces a páginas y de eventos en Apache Tapestry"
url: "/2020/04/generar-enlaces-a-paginas-y-de-eventos-en-apache-tapestry/"
date: 2020-04-03T18:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:apache-tapestry-icon-light.svg"
tags: ["tapestry", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="apache-tapestry-icon-light.svg" >}}

Una de las partes esenciales de una aplicación web es generar enlaces a otras páginas, enlaces a los manejadores de los formularios que procesan los datos enviados, enlaces a manejadores de solicitudes AJAX. Generar enlaces no solo es necesario para ser usados dentro de la misma aplicación web sino también para ser usados en el código JavaScript, en correos electrónicos u informes.

La ventaja de utilizar un framework es que estos facilitan el desarrollo y en el caso de generar enlaces suelen incluir soporte. Pero también es importante que la facilidad que proporcionan los frameworks para generarlos no sea concatenando y hardcodeado cadenas. Si es así en el momento de querer renombrar una página o manejador de evento se convierte en un problema por la inseguridad que plantea para realizar el _refactor_, más en una aplicación grande. Y esto puede dar el caso de que algunos _refactors_ no se aborden por miedo a romper cosas, a la larga es un problema para el desarrollo futuro y el mantenimiento de la aplicación.

En el caso del framework [Apache Tapestry][tapestry] se proporciona un amplio soporte para generar enlaces y evitar concatenaciones y hardcodeos al menos en el código Java. Por otra parte al ser el framework el encargado de construir las URLs si por una nueva versión de framework las URLs cambiar no es necesario realizar ningún cambio en el código.

Lo más básico son los componentes [PageLink](tapestry:org/apache/tapestry5/corelib/components/PageLink.html), [ActionLink](tapestry:org/apache/tapestry5/corelib/components/ActionLink.html), [EventLink](tapestry:org/apache/tapestry5/corelib/components/EventLink.html) y [From](tapestry:org/apache/tapestry5/corelib/components/Form.html) con los que generar enlaces a páginas, acciones y eventos en las plantillas de las páginas y componentes.

En las plantillas que generan el contenido HTML solo en el caso de un enlace a una página hay que hacer un hardcodeo con el nombre de la página. En el caso del formulario es el propio framework el encargado de generar la URL y en caso de los eventos hacen referencia a la página y componente donde están incluidos.

{{< code file="Page.tml" language="html" options="" >}}

Mediante código también se pueden generar enlaces en el caso de querer incluirlos en un coreo electrónico para uso fuera de la aplicación, para las páginas con la clase [PageRenderLinkSource](tapestry:org/apache/tapestry5/services/PageRenderLinkSource.html), para acciones y eventos con la clase [ComponentResources](tapestry:org/apache/tapestry5/ComponentResources.html). En el caso de _PageRenderLinkSource_ tiene métodos para hacer referencia a las páginas con su clase de modo que si se hiciese un renombrado de la página el IDE se encargaría de hacer el renombrado, en el caso de usar _ComponentResources_ solo hace falta indicar el nombre del evento el framework se encarga de establecerlo según la página en la que se realiza la acción.

{{< code file="Events.java" language="java" options="" >}}

Para generar enlaces de eventos a páginas hay que inyectar esa página y obtener su _ComponentResources_, el enlace se genera de la misma forma que los casos anteriores.

{{< code file="Page.java" language="java" options="" >}}

Todos estos métodos devuelven una clase del tipo [Link](tapestry:org/apache/tapestry5/Link.html) que con los métodos _toAbsoluteURI()_, _toRedirectURI()_, _toRedirectURI(bool)_ y _toURI()_ permiten obtener la cadena que representa el enlace. Esta clase tiene otros métodos para en caso de necesidad acceder a los diferentes elementos del enlace evitando tener que interpretarlo para acceder a ellos. Estos cadenas son las que se incluirían en los correos electrónicos, informes y otras aplicaciones puede que también otras páginas y JavaScript.

Desde el lado del cliente en JavaScript también puede ser necesario lanzar eventos, pare evitar generar algunos de los enlaces en lado de servidor y enviarlos al lado del cliente para que estos los usen. En el lado del cliente también se ofrece soporte para lanzar eventos lo que simplifica algunos casos.

{{< code file="events.js" language="javascript" options="" >}}

{{% reference %}}
* [Ajax and Zones](http://tapestry.apache.org/ajax-and-zones.html)
{{% /reference %}}

{{% /post %}}
