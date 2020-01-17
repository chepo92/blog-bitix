---
pid: 290
type: "post"
title: "GitLab, la completa herramienta integrada para desarrollo de software"
url: "/2017/12/gitlab-la-completa-herramienta-integrada-para-desarrollo-de-software/"
date: 2017-12-23T10:00:00+01:00
updated: 2018-01-14T02:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:gitlab.svg"
tags: ["planeta-codigo", "software", "software-libre"]
series: ["gitlab"]
summary: "Al desarrollar software una herramienta de control de versiones como Git y otras como un gestor de peticiones, una herramienta de integración continua o despliegue contínuo o una wiki para documentación son necesarias. Hay productos específicos para cada uno de ellos pero GitLab proporciona en una único producto todas estas facilitando su instalación y administración estando integradas en el mismo producto."
---

{{% post %}}

{{< logotype image1="gitlab.svg" title1="GitLab" width1="200" >}}

Usar una herramienta de control de versiones para el código fuente de un proyecto o programa es imprescindible para recuperar versiones anteriores de los archivos, comparar y compartir los cambios con el resto de desarrolladores del equipo. Otras herramientas imprescindibles son un gestor de peticiones para documentar cuál es el trabajo a realizar, ver en que se está trabajando, priorizar el trabajo inmediato que se realizará y el estado de cada petición. Por otro lado una herramienta donde recoger documentación del proyecto ayuda a compartir información y hacer que ese conocimiento quede recogido en algún lugar que pueda ser consultado con posterioridad o para futuros desarrolladores. También en estos días es imprescindible una herramienta para automatizar la ejecución de las pruebas unitarias y funcionales en cada _commit_ al repositorio de código fuente.

Para cada una de estas funcionalidades hay herramientas específicas: [Git][git] para la herramienta de control de versiones, [GitHub][github] con algunas funciones colaborativas como _pull request_ y revisiones de código, [Jira][jira] para la gestión de peticiones, [MediaWiki][mediawiki] para documentar cierta información o [Jenkins][jenkins] para la ejecución de las pruebas automatizadas. Instalar estas herramientas individualmente requiere tiempo y dedicación, además de mantenimiento posterior.

[GitLab][gitlab] es una herramienta que proporciona estas funcionalidades en un único producto y por tanto más fácil de instalar y administrar. Quizá su gestor de peticiones y wiki no tenga tantas opciones como sus respectivos productos específicos pero para la mayoría de casos son más que suficientes. Y tiene un desarrollo muy activo añadiendo características cada pocas semanas.

Hay varias formas de instalar GitLab, una de ellas es [instalandolo como un paquete de software](https://about.gitlab.com/installation/#ubuntu) en la propia máquina, usando una [imagen de Docker](https://docs.gitlab.com/ce/install/docker.html) o con una [imagen de Bitnami](https://bitnami.com/stack/gitlab). Siguiendo el artículo de [Introducción a Bitnami][blogbitix-54] puedes conocer como instalar GitLab en una máquina virtual con [VirtualBox][virtualbox] y con la [serie de artículos sobre Docker][blogbitix-serie-docker] como instalarlo en forma de contenedor y en la web de GitLab se explica como instalarlo como un software más de un sistema.

Usando [Docker][docker] y el siguiente archivo de [Docker Compose][docker-compose] basta el comando `docker-compose up` para iniciar GitLab. Instalado GitLab de alguna de las formas anteriores usando un navegador web y con la dirección _https\://gitlab_ (configurados los certificados SSL y la ubicación de los volúmenes) se accede a la aplicación de GitLab, donde inicialmente se pide la contraseña del usuario administrador _root_ con la que iniciar sesión y realizar las tareas administrativas como crear otros usuarios y proyectos.

{{< code file="docker-compose.yml" language="YAML" options="" >}}

{{< image
    gallery="true"
    image1="image:change-password.png" optionsthumb1="300x200" title1="Contraseña de root"
    image2="image:sing-in.png" optionsthumb2="300x200" title2="Inicio de sesión"
    caption="Contraseña e inicio de sesión" >}}
{{< image
    gallery="true"
    image1="image:welcome.png" optionsthumb1="300x200" title1="Página de bienvenida"
    caption="Página de bienvenida" >}}
{{< image
    gallery="true"
    image1="image:profile.png" optionsthumb1="300x200" title1="Perfil de usuario"
    image2="image:admin-area.png" optionsthumb2="300x200" title2="Área de administración"
    caption="Perfil de usuario y área de administración" >}}

Iniciada sesión ya se puede empezar a usar GitLab a crear usuarios con sus claves SSH, repositorios de Git pudiendo importar otros existentes, crear nuevos, páginas de una wiki y peticiones, integración y entrega continua y personalizar el panel _kanban_ con el flujo que deseamos que sigan las peticiones en la organización, por ejemplo, _planning_, _ready_, _doing_, _review_, _merged_ y _deployed_.

{{< image
    gallery="true"
    image1="image:new-proyect.png" optionsthumb1="300x200" title1="Nuevo proyecto"
    caption="Nuevo proyecto" >}}
{{< image
    gallery="true"
    image1="image:new-issue.png" optionsthumb1="300x200" title1="Nueva petición"
    image2="image:issues-board.png" optionsthumb2="300x200" title2="Panel de peticiones"
    caption="Nueva petición y panel de peticiones" >}}
{{< image
    gallery="true"
    image1="image:new-wiki-page.png" optionsthumb1="300x200" title1="Nueva página wiki"
    image2="image:wiki-page.png" optionsthumb2="300x200" title2="Página wiki"
    caption="Página wiki" >}}

Creado un proyecto GitLab e introducida la clave pública SSH nos proporciona la dirección URL con la que se puede clonar, convertir una carpeta existente en un repositorio o añadir un repositorio existente. Una vez con el repositorio en el sistema de archivos local se puede empezar a subir, modificar y eliminar archivos del repositorio de control de versiones. Hecho algún _commit_ y subido algún archivo desde GitLab se puede ver el contenido del repositorio de Git.

{{< code file="clone-repository.sh" language="bash" options="" >}}
{{< code file="existing-folder.sh" language="bash" options="" >}}
{{< code file="existing-repository.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:project-details-1.png" optionsthumb1="300x200" title1="Detalles de proyecto"
    image2="image:project-details-2.png" optionsthumb2="300x200" title2="Detalles de proyecto"
    caption="Detalles de proyecto" >}}
{{< image
    gallery="true"
    image1="image:source-file.png" optionsthumb1="300x200" title1="Contenido de archivo código fuente"
    caption="Contenido de archivo de código fuente" >}}

Otras formas de usar GitLab es desde la nube de [Amazon EC2][amazon-ec2] o de forma SaaS a un coste de entre 39€ y 199€ por usuario y mes pero si la nube no es una opción una de las ventajas de GitLab es que se puede instalar en algún sistema propio de cualquiera de las formas anteriores y tener proyecto privados. GitLab es otra herramienta que a añadiría a [Herramientas para un proyecto Java][blogbitix-84]. Hay alguna cosa adicional a conocer [como realizar una actualización](https://docs.gitlab.com/ce/update/README.html) cuando se publique una nueva versión o [como hacer copias de seguridad y restaurarlas](https://docs.gitlab.com/ce/raketasks/backup_restore.html#creating-a-backup-of-the-gitlab-system). Lo que he mostrado aqui son solo una introducción a unas pocas de las muchas posibilidades de GitLab.

{{< sourcecode git="blog-ejemplos/tree/master/GitLab" command="docker-compose up" >}}

{{% /post %}}
