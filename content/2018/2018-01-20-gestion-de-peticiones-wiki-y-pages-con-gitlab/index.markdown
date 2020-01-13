---
pid: 295
type: "post"
title: "Gestión de peticiones, wiki y pages con GitLab"
url: "/2018/01/gestion-de-peticiones-wiki-y-pages-con-gitlab/"
date: 2018-01-20T10:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:gitlab.svg"
tags: ["planeta-codigo", "software", "software-libre"]
series: ["gitlab"]
---

{{% post %}}

{{< logotype image1="gitlab.svg" title1="GitLab" width1="200" >}}

Una de las cosas que me gustan de [GitLab][gitlab] es que se puede usar en un servidor propio, la otra cosa que me gusta es que incluye varias herramientas casi imprescindibles para cualquier proyecto como gestión de peticiones para recoger las historias, wiki como documentación e información y _pages_ para generar pequeños sitios web además de los repositorios de [Git] o el servidor de integración y entrega continua. Que GitLab incluya por defecto todas estas herramientas hace innecesario recurrir en la mayoría de los casos a varias herramientas especializadas que cubran estas necesidades como [JIRA][jira], [Jenkins][jenkins], [MediaWiki][mediawiki] o un servidor web para los sitios web.

Después de [instalar GitLab usando Docker][blogbitix-290] o de alguna de sus otras formas, creado un usuario no administrador y un proyecto se puede empezar a usar las herramientas de gestión de incidencias, wiki y _pages_. Estas son solo tres de sus herramientas incluidas, además incluye [integración y entrega continua][blogbitix-294].

### Gestión de peticiones

La herramienta de gestión de peticiones permite crear historias que recojan las tareas a realizar, las historias pueden ser de diferente tipo como nuevas funcionalidades, mejoras técnicas o errores, es posible asignarlas a diferentes usuarios, relacionar peticiones entre si o incluir documentos adjuntos. Las historias también se pueden mostrar en un panel [Kanban](https://es.wikipedia.org/wiki/Kanban_(desarrollo)) para visualizar el estado de las peticiones, las que están realizándose, las desplegadas en producción, las siguientes peticiones y donde puede haber cuellos de botella en los procesos. El flujo y el panel Kanban que siguen las peticiones desde que se crean hasta que se dan por terminadas es personalizable.

Para crear una nueva petición hay que acceder en el proyecto a _Issues_ y pulsar el botón _New Issue_. Rellenados los datos del formulario de creación se puede consultar desde _Issues > List_ para verlas en formato lista o _Issues > Board_ para verlas en formato panel Kanban. El panel Kanban se puede modificar y asignando etiquetas a las peticiones crear columnas adaptado al flujo de trabajo de una organización. Con [formato de las descripciones de las peticiones](https://docs.gitlab.com/ee/user/markdown.html) permite hacer referencia a otras o incluir menciones a otros usuarios.

* [Issues Functionalities](https://docs.gitlab.com/ee/user/project/issues/issues_functionalities.html#11-reference)
* [Crosslinking Issues](https://docs.gitlab.com/ee/user/project/issues/crosslinking_issues.html)
* [Issue Board](https://about.gitlab.com/product/issueboard/)

{{< image
    gallery="true"
    image1="image:new-issue-1.png" optionsthumb1="300x200" title1="Nueva petición A"
    image2="image:new-issue-2.png" optionsthumb2="300x200" title2="Nueva petición B"
    caption="Nueva petición" >}}
{{< image
    gallery="true"
    image1="image:issues.png" optionsthumb1="300x200" title1="Lista de peticiones"
    image2="image:labels.png" optionsthumb2="300x200" title2="Etiquetas"
    caption="Lista de peticiones y etiquetas" >}}
{{< image
    gallery="true"
    image1="image:board.png" optionsthumb1="300x200" title1="Panel Kanban"
    caption="Panel Kanban" >}}

### Wiki

Una wiki ayuda a recoger información útil en el mismo proyecto pero no en el repositorio de código fuente, por ejemplo, cómo iniciar la aplicación de un proyecto a partir del repositorio de código fuente, qué dependencias tiene como el JDK o una base de datos. También puede recoger información general de lógica de negocio que no cambien tan a menudo como el código como pudiera ser un esquema de alto nivel de arquitectura o por que se han tomado algunas descisiones en la arquitectura y los requerimientos.

Cuando se accede por primera vez a la wiki se crea la página de inicio que se puede editar o crear nuevas páginas. Las páginas de la wiki se escriben en formato [Markdown][markdown] y se guarda un historial de las ediciones que se han realizado a cada página.

* [GitLab Wiki](https://docs.gitlab.com/ce/user/project/wiki/index.html)

{{< image
    gallery="true"
    image1="image:new-page.png" optionsthumb1="300x200" title1="Nueva página"
    image2="image:page.png" optionsthumb2="300x200" title2="Página"
    caption="Nueva página y página" >}}

### Pages

La herramienta de _pages_ o páginas permite crear un pequeño sitio web. Se pueden utilizar varias de las herramientas generadoras de sitios web estáticos como [Jekyll][jekyll] o [Hugo][hugo]. Para crear un sitio web hay que crear un repositorio de código fuente con un archivo _.gitlab-ci.yml_ y una tarea de nombre _pages_ que contiene los comandos para construir el sitio web.

Es posible asignar a los sitios web de _pages_ un dominio propio y añadirles seguridad con el protocolo HTTPS. En [estos repositorios](https://gitlab.com/pages) hay ejemplos de como generar un sitio web del proyecto con varios de los más populares generadores de sitios web estáticos. Dependiendo de si el sitio web es para el proyecto o del usuario o grupo el sitio estará accesible en la dirección u otra.

* [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/index.html#gitlab-pages-documentation)

En resumen, ya con esta pequeña serie de artículos queda claro que GitLab es una herramienta muy completa y que incluye las funcionalidades de varias que son suficientes para la mayoría de los casos sin tener que recurrir a Jira, Jenkins, MediaWiki o un servidor web. Además, con la muy completa [API de GitLab](https://docs.gitlab.com/ce/api/) es posible hacer desarrollos a medida y según las necesidades que se tengan.

{{< sourcecode git="blog-ejemplos/tree/master/GitLab" command="docker-compose -f docker-compose-all.yml up" >}}

{{% /post %}}
