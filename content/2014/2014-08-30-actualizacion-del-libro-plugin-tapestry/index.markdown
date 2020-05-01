---
pid: 40
type: "post"
title: "Actualización del libro PlugIn Tapestry"
url: "/2014/08/actualizacion-del-libro-plugin-tapestry/"
date: 2014-08-30T00:16:10+02:00
updated: 2015-10-04T17:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:apache-tapestry-icon-light.svg"
tags: ["java", "programacion", "tapestry", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="apache-tapestry-icon-light.svg" >}}

Hace un poco más de una año publiqué el [libro PlugIn Tapestry][blogbitix-12] que como su nombre ya adelanta versa sobre el _framework_ [Apache Tapestry][tapestry] para el desarrollo de aplicaciones y páginas web con Java. Casi 300 páginas de documentación que describen este _framework_, como usarlo y va más allá explicando como realizar algunas de las tareas comunes que es necesario hacer en casi todas las aplicaciones web independientemente del _framework_ que elijamos pero en este caso visto desde el punto de vista de Tapestry.

{{< image
    gallery="true"
    image1="image:PugInTapestry_Portada.png" optionsthumb1="300x200" title1="Portada libro PlugIn Tapestry" >}}

En esta actualización he revisado capítulos como el Inicio rápido para empezar a desarrollar en unos pocos minutos, la sección que trata sobre Plantillas para dar a las páginas un aspecto común, la sección que trata sobre unas Convenciones para los archivos de literales, ampliada la sección de Principios en la que se detalla cuales son las ideas y objetivos por los que se rige el _framework_, también reescrita la sección de Integración con Spring, una de las librerías más usadas y que facilita el desarrollo enormemente.

Pero además he incluido nuevo contenido que he publicado en diferentes artículos en [mi bitácora][blogbitix] desde la plublicación original del libro. Estos han sido Como ejecutar Apache Tapestry en un servidor de aplicaciones JBoss o Wildfly, explicada la página Dashboard que nos permite obtener información interesante mientras desarrollamos como que páginas y componentes incluye la aplicación o las estadísticas de Hibernate, explicadas las diferencias del modelo «pull» en el que se basa Tapestry del modelo «push» en el que se basan la mayoría de _frameworks_ orientados a acciones independientemente del lenguaje (Grails, Django, Symfony, ASP.NET MVC), como servir los recursos estáticos desde una red de contenidos (CDN, Content Delivery Network), la anotación Cached que permite evitar invocaciones a métodos devolviendo el resultado obtenido en la primera invocación, como usar Tapestry en una aplicación de forma «standalone» fuera del contexto de un servidor de aplicaciones, la anotación Secure y como añadir más seguridad usando el protocolo seguro HTTPS.

<div class="buttons">
    <a href="https://picodotdev.github.io/blog-bitix/assets/custom/PlugInTapestry.pdf" class="btn btn-lg btn-success">Descargar el libro (PDF)</a>
    <a href="https://github.com/picodotdev/blog-ejemplos/tree/master/PlugInTapestry" class="btn btn-lg btn-success">Obtener código fuente ejemplos</a>
</div>

<div class="share-this" style="text-align: center; margin-bottom: 20px">
    <h3>¡Y luego compártelo!</h3>
</div>

{{% /post %}}
