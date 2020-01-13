---
pid: 57
type: "post"
title: "Introducción al gestor de proyectos y tareas Redmine"
url: "/2014/12/introduccion-al-gestor-de-proyectos-y-tareas-redmine/"
date: 2014-12-19T19:57:31+01:00
updated: 2015-01-10T12:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:redmine.png"
tags: ["gnu-linux", "planeta-codigo", "software", "software-libre"]
---

{{% post %}}

{{< logotype image1="redmine.png" title1="Redmine" width1="200" image2="bitnami.svg" title2="Bitnami" width2="200" >}}

Para desarrollar un proyecto de software se hace imprescindible disponer de algunas herramientas que nos permitan realizar las tareas. Una de estas herramientas es un [gestor de tareas, peticiones o errores](https://en.wikipedia.org/wiki/Issue_tracking_system), que nos permite recoger en una herramienta gran parte de la información, conocer el estado, planificar y hacer el seguimiento las tareas necesario para desarrollar de forma ordenada, sin que perdamos nada de información y pudiendo recuperarla en cualquier momento en un futuro.

Como es habitual herramientas que gestionan tareas disponemos de varias algunas de las más conocidas son [Bugzilla][bugzilla], [JIRA][jira], [Mantis][mantis], [Trac][trac] y la herramienta de la que hablaré en este artículo, [Redmine][redmine]. Cada una de estas herramientas como gestores de tareas son parecidas pero se diferencian en algunas cosas como la licencia que tiene, el esquema de precios o la funcionalidad que ofrece. Redmine tiene una [licencia de software libre GPL](http://www.gnu.org/licenses/old-licenses/gpl-2.0.html) y por tanto la podemos usar sin ningún coste, en la siguiente tabla podemos compararla con los [precios de JIRA](https://www.atlassian.com/software/jira/pricing) que para pocos usuarios son asumibles pero que a medida que se aumentan los usuarios empiezan a ser notables aunque posiblemente alcanzables en función del tamaño de la empresa. En cualquier siendo JIRA también una herramienta excelente Redmine cumple perfectamente con la misma función. En la wikipedia podemos encontrar [más opciones y comparar unas con otras](https://en.wikipedia.org/wiki/Comparison_of_issue-tracking_systems).

Si queremos evaluar Redmine una forma sencilla podemos hacerlo mediante una imagen de Bitnami con VirtualBox. En la [introducción a Bitnami][blogbitix-54] comento qué es y como nos puede ayudar a disponer de software que en algunos casos no es simple de instalar y que con Bitnami podemos disponer de forma sencilla y rápida, además de como usar con VirtualBox cualquier imagen de Bitnami de las herramientas ofrecidas. Una vez seguidos los pasos de la guía anterior podemos acceder a Redmine con el navegador web y una dirección similar a _http\://192.168.0.11_, el usuario y contraseña para acceder es user y bitnami respectivamente.

{{< image
    gallery="true"
    image1="image:proyecto.png" optionsthumb1="300x200" title1="Proyecto"
    image2="image:peticion.png" optionsthumb2="300x200" title2="Petición" >}}

Con Redmine podemos adaptar el flujo de las tareas a la forma de organización que empleemos, podemos personalizar el grafo de estados que siguen las tareas y que personas tiene permisos para hacer cada uno de los cambios de estado. También podemos añadir campos personalizados que queremos recoger para cada petición, por ejemplo, podemos querer dar un tamaño a las tareas en función de si estimamos que es grande, media o pequeña. También podemos crear filtros y guardarlos para encontrar fácilmente tareas.

{{< image
    gallery="true"
    image1="image:estados.png" optionsthumb1="300x200" title1="Estados"
    image2="image:propiedades.png" optionsthumb2="300x200" title2="Propiedades" >}}
{{< image
    gallery="true"
    image1="image:consulta.png" optionsthumb1="300x200" title1="Filtros"
    image2="image:flujo-estados.png" optionsthumb2="300x200" title2="Flujo estados" >}}

Además de gestionar las tareas Redmine dispone de herramientas que nos pueden ser útiles en el proyecto como una wiki para recoger documentación del proyecto y un repositorio de documentos para aquellos que no queremos incluir en la herramienta de control de versiones por su tamaño pero que queremos que estén disponibles para cualquiera que trabaje con el proyecto.

{{< image
    gallery="true"
    image1="image:wiki.png" optionsthumb1="300x200" title1="Wiki"
    image2="image:archivos.png" optionsthumb2="300x200" title2="Archivos" >}}

Pero Redmine es más que una herramienta de gestión de tareas, los complementos pueden añadirle funcionalidad adicional que permite [convertirla en un CRM para gestionar las comunicaciones con clientes](http://www.redminecrm.com/projects/crm/pages/1) o en un [helpdesk para atender las tareas de clientes](http://www.redminecrm.com/projects/helpdesk/pages/1). Además de otros como [personalizar los usuarios de Redmine](http://www.redminecrm.com/projects/people/pages/1) o crear [pequeñas listas de tareas](http://www.redminecrm.com/projects/checklist/pages/1) que nos evitará crear subtareas.

En el siguiente artículo comentaré como instalar el [plugin agile de Redmine](http://www.redminecrm.com/projects/agile/pages/1) con la imagen de Bitnami en VirtualBox de forma que podamos visualizar las tareas en un panel kanban, y de un vistazo y rápidamente conozcamos las tareas que están terminadas, que están en progreso, a punto de empezarse o en la cola de tareas por hacer.

{{< reference >}}
* [Instalar y usar plugin ágil en Redmine][blogbitix-59]
* [Introducción e inicio a Drupal][blogbitix-60]
* [5 plugins gratuitos para instalar a Redmine](http://www.luisblasco.com/5-plugins-gratuitos-instalar-en-redmine/)
* [Aplicar y guardar filtros](http://www.redmine.org/projects/redmine/wiki/RedmineIssueList#Applying-and-saving-filters)
* [Como modificar un filtro](https://stackoverflow.com/questions/9027479/how-do-you-modify-a-filter-in-redmine)
* [Blog con varios artículos interesantes sobre Redmine](http://www.luisblasco.com/blog/)
{{< /reference >}}

{{% /post %}}
