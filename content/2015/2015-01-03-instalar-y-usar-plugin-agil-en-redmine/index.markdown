---
pid: 59
type: "post"
title: "Instalar y usar un plugin ágil en Redmine"
url: "/2015/01/instalar-y-usar-plugin-agil-en-redmine/"
date: 2015-01-03T01:27:56+01:00
updated: 2015-01-10T12:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:redmine.png"
tags: ["gnu-linux", "planeta-codigo", "software", "software-libre"]
---

{{% post %}}

{{< logotype image="redmine.png" title="Redmine" width="300" >}}

Las metodologías ágiles para la gestión de proyectos son ya ampliamente usadas, como [scrum][scrum] o [programación extrema][programacion-extrema] (XP). Una diferencia entre las metodologías ágiles y las metodologías empleadas tradicionalmente como el modelo en cascada es que en las metodologías ágiles se tiene en cuenta que se pueden producir cambios en el desarrollo del proyecto y suelen ser más flexibles y adaptables ante estos cambios.

En el modelo de metodología ágil podemos usar un panel kanban donde ver de un vistazo rápido las tareas terminadas, las que están en progreso y las próximas tareas planificadas reflejando la realidad del equipo de desarrollo. Reorganizándolas según prioridades que pueden cambiar de una semana a otra, en las metodologías ágiles no se realiza una planificación completa inicial sino que se va realizando a medida que el proyecto progresa.

{{< image
    gallery="true"
    image1="image:panel-kanban.png" optionsthumb1="300x200" title1="Panel Kanban de Redmine" >}}

También para la gestión de las tareas de los proyectos se suele usar algún tipo de herramienta que permita recoger y gestionar las peticiones adaptada a la metodología que usemos, una de estas herramientas puede ser [Redmine][redmine]. En la [introducción sobre Redmine][blogbitix-57] comentaba que es lo nos puede ofrecer para gestionar el proyecto.

Por defecto, Redmine no dispone de un panel kanban para ver las peticiones pero [usando el plugin ágile de RedmineCRM](http://www.redminecrm.com/projects/agile/pages/1) se le puede añadir la funcionalidad con el que además del panel kanban podemos ver otra serie de gráficas como [burndown](https://es.wikipedia.org/wiki/Burn_down_chart) y paneles. Hay otras opciones perfectamente válidas como [JIRA][jira] pero esta tiene una política de precios basada en el número de usuarios y a partir de un cierto número es una cantidad considerable.

Podemos usar la versión gratuita del [plugin RedmineCRM](http://www.redminecrm.com/) lo que nos ofrecerá los agile boards, version planner y burndown chart, la versión PRO para un solo sitio tiene un precio de $200, ofrece funcionalidades adicionales como organización en lineas horizontales, subcolumnas y colores para las peticiones en el panel kanban además de algunas opciones más. Para el caso de Redmine también hay otros plugins disponibles para gestionar los proyectos de forma ágil pero no tan buenos como el de RedmineCRM, estos son [Redmine Backlogs](http://www.redminebacklogs.net/) y [Scrum2B](http://www.redmine.org/plugins/scrum2b).

Después de [instalar Redmine con Bitnami][blogbitix-54] si queremos instalar el plugin ágile de RedmineCRM debemos realizar los siguientes pasos desde la terminal de la máquina virtual, en mi caso usando VirtualBox:

{{< code file="instalar-redminecrm-bitnami.sh" language="bash" options="" >}}

Finalmente, debemos activar el plugin agile en el proyecto usando la opción Administration> Agile.

{{< image
    gallery="true"
    image1="image:configuracion.png" optionsthumb1="300x200" title1="Activación panel Kanban" >}}

Una vez activado ya podemos ver el panel kanban mostrado en la primera captura en la pestaña ágil. Por defecto en Redmine solo veremos las columnas New, In progress, Resolved y Feedback pero podemos modificar el flujo de las peticiones adaptándolo a nuestra metodología u organización, podemos hacer esto desde Administración> Estados de peticiones para crear nuevos estados y Administración> Flujo de trabajo para establecer el grafo de estados determinando a que estados puede cambiar una petición desde su estado actual.

{{< image
    gallery="true"
    image1="image:estados-peticiones.png" optionsthumb1="300x200" title1="Estados de peticiones"
    image2="image:flujo-de-trabajo.png" optionsthumb2="300x200" title2="Flujo de trabajo" >}}

{{< reference >}}
* [Introducción al gestor de proyectos y tareas Redmine][blogbitix-57]
* [Introducción a Bitnami][blogbitix-54]
* [Introducción e inicio a Drupal][blogbitix-60]
{{< /reference >}}

{{% /post %}}
