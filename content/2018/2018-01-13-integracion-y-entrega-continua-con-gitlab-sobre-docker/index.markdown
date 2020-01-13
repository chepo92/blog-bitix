---
pid: 294
type: "post"
title: "Integración y entrega continua con GitLab sobre Docker"
url: "/2018/01/integracion-y-entrega-continua-con-gitlab-sobre-docker/"
date: 2018-01-13T10:30:00+01:00
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

[GitLab][gitlab] es una herramienta muy completa, una de las necesidades de los proyectos es tener teses y que estos se ejecuten con cada _commit_ para asegurar que los cambios no introducen errores en las funcionalidades cubiertas por los teses, esto es la integración continua. La entrega inmediata es una vez que los teses se han ejecutado correctamente hacer el despliegue en los servidores de forma pasa el tiempo mínimo entre que una funcionalidad está desarrollada y esta se puede utilizar.

GitLab proporciona integración continua (_Continuos Integration_, CI) y entrega continua (_Continuos Delivery_, CD) sin necesidad de una herramienta externa más especializada como es [Jenkins][jenkins]. En el siguiente ejemplo muestro como configurar GitLab para crear uno o varios _runner_ que son los que realizan las acciones de integración y entrega continua y el archivo descriptor _.gitlab-ci.yml_ en formato _yaml_ que define las acciones específicas del proyecto que se ejecutarán con cada _commit_ en el repositorio [Git][git].

Jenkins es una herramienta más especializada que también sirve para realizar integración y entrega continua. En la página [GitLab vs Jenkins](https://about.gitlab.com/comparison/gitlab-vs-jenkins.html) se comparan las características de ambas herramientas, aunque en esa página de comparación GitLab está indicando que tiene algunas características más y aunque no tuviera tantas para la mayoría de los casos de uso es más que suficiente con la ventaja de no necesitar una herramienta más al estar estar ya integrado en GitLab que ofrece además del repositorio de código fuente, una wiki o un páginas para un sitio web.

Para realizar integración y entrega continua hay definir las acciones, tareas y comandos de los que se componen del _pipeline_ específico para el proyecto, la descripción del _pipeline_ se define en un archivo _.gitlab-ci.yml_ que se añade en el directorio raíz del código fuente del proyecto en su repositorio de Git. El _pipeline_ según las necesidades del proyecto consta de varios pasos o _steps_ que se ejecutan de forma secuencial. Si en un mismo paso hay varias acciones estas se ejecutan de forma paralela. En el ejemplo de proyecto _test_ con un programa _Hola Mundo_ con Java y usando la herrramienta de contrucción [Gradle][gradle] el _pipeline_ consta de las acciones de compilación y de ejecución de pruebas unitarias y [creación de documentación _javadoc_][blogbitix-260]. La tarea de Gradle _build_ en un proyecto Java realiza la compilación, ejecución de pruebas unitarias y genera el artefacto resultado el el directorio _build/distributions_ y la librería _jar_ con las clases compiladas en _build/libs_, la tarea _javadoc_ genera la [documentación Javadoc][javadoc-9] de las clases del proyecto.

{{< code file="gitlab-ci.yml" language="YAML" options="" >}}

Añadido el archivo del _pipeline_ al código fuente del proyecto hay que definir un _runner_ que se encargará de ejecutarlo con cada _commit_ que se envíe al repositorio de código fuente. Hay que registrarlo y se necesita un _token_ que se puede obtener desde el área de administración en _Overview > Runners_.

{{< image
    gallery="true"
    image1="image:gitlab-runners.png" optionsthumb1="300x200" title1="Runners"
    caption="GitLab Runners" >}}

Al registrarlo hay que especificar el tipo de _runner_, hay varios tipos, en este caso se usa el de _docker_ para ejecutar el _pipeline_ dentro de un contenedor de [Docker][docker]. En en archivo de [Docker Compose][docker-compose] es necesario que el _runner_ pueda comunicarse con el servicio de Docker, para ello como punto de montaje del contenedor de _gitlab-runner_ se especificar el archivo _docker.sock_.

{{< code file="add-gitlab-runner.sh" language="bash" options="" >}}

En este ejemplo y con este _pipeline_ el artefacto distribuible de la aplicación y el Javadoc se alamacena en GitLab estando accesible para su descarga desde el panel lateral una vez finalizado el _pipeline_.

{{< image
    gallery="true"
    image1="image:pipelines.png" optionsthumb1="300x200" title1="Pipelines"
    image2="image:pipeline.png" optionsthumb2="300x200" title2="Pipeline"
    caption="Pipeline" >}}

El descriptor usando [Docker Compose][docker-compose] que define el servicio de GitLab y otro para GitLab Runner es el siguiente. El nombre de dominio que he utilizado para el servidor es _gitlab_ y ha de añadirse al archivo _/etc/hosts_ para que sea resuelto localmente.

{{< code file="docker-compose-all.yml" language="YAML" options="" >}}

En la sección de referencia hay unos buenos enlaces de documentación de GitLab sobre la integración continua, despliegue continuo y entrega continua.

{{< sourcecode git="blog-ejemplos/tree/master/GitLab" command="docker-compose -f docker-compose-all.yml up" >}}

{{< reference >}}
* [GitLab Continuous Integration (GitLab CI/CD)](https://docs.gitlab.com/ce/ci/)
* [Getting started with GitLab CI/CD](https://docs.gitlab.com/ce/ci/quick_start/README.html)
* [Configuration of your jobs with .gitlab-ci.yml](https://docs.gitlab.com/ce/ci/yaml/README.html)
* [A sample of .gitlab-ci.yml for a gradle project](https://gist.github.com/daicham/5ac8461b8b49385244aa0977638c3420)
{{< /reference >}}

{{% /post %}}
