---
pid: 96
type: "post"
title: "Ejemplo de multiproyecto con Gradle"
url: "/2015/09/ejemplo-de-multiproyecto-con-gradle/"
date: 2015-09-15T19:00:00+02:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion", "tapestry"]
summary: "En un proyecto grande podemos tener necesidad de dividir el monolito al menos en varios módulos y yendo un paso más lejos en microservicios. La herramienta de construcción que usemos deberá de facilitarnos automatizar la tarea de construcción del código fuente de cada módulo individual, de todos a la vez o de los microservicios si tienen alguna dependencia compartida. En el artículo y ejemplo explicaré cómo usando Gradle podemos dividir el proyecto en varios módulos. No deja de ser un ejemplo pero es bastante completo y está formado por dos aplicaciones web, una librería de componentes y otra librería con el modelo de persistencia, usa Spring, jOOQ, Tapestry, PostgreSQL, Docker, Liquibase, ..."
---

{{% post %}}

{{< logotype image1="java.svg" image2="gradle.svg" title2="Gradle" width2="200" >}}

Cuando una aplicación o proyecto crece en algún momento podemos tener necesidad de partir el monolito en varios módulos más pequeños y más manejables. Las arquitecturas basadas en microservicios proponen en vez de tener una aplicación grande que contenga toda la funcionalidad dividirla en varios servicios manejables, pequeños y lo más independientes posible. En el libro [Building Microservices](https://amzn.to/2MZWW6u) explican muy bien la idea y conceptos de los microservicios. La división de una aplicación implica tener un repositorio de código fuente para cada proyecto, probablemente algunos proyectos dependan de otros y haya alguno que sea utilizado por varios como uno de utilidades. Aunque diría que en los microservicios se prefiere en cierta medida duplicar código que compartir para que cada proyecto tenga un ciclo de vida independiente, esto permite desplegarlos individualmente, aún así podemos aceptar compartir cierto código de utilidades o componentes, necesitando que unos proyectos dependan de otros.

Tener varios proyectos con dependencias entre ellos exige de la herramienta de construcción que esto sea posible y sencillo. En este artículo comentaré como crear un proyecto compuesto de varios componentes con [la herramienta de construcción Gradle][elblogdepicodev-98]. El ejemplo consistirá en dos aplicaciones web basadas en el _framework_ web [Apache Tapestry][tapestry], una será la que vea el público (_web_) y otra de administración (_back_), estas dos aplicaciones compartirán una librería de componentes de Tapestry comunes como un _layout_ (_library_), la cabecera y pie de las páginas de cada proyecto web, finalmente existirá una librería con métodos o servicios de utilidad comunes y el modelo de datos a persistir en una base de datos relacional usada tanto en las aplicaciones web como por la librería de componentes (_core_).

Necesitaremos 4 proyectos para los módulos y 5 proyectos Gradle, uno para cada módulo y otro que los englobe a todos. La estructura de directorios y archivos relativos a Gradle será la siguiente:

{{< code file="estructura.txt" language="plaintext" options="" >}}

En el archivo _build.gradle_ global podemos incluir las cosas comunes a todos los proyectos como dependencias o _plugins_, en el archivo _settings.gradle_ definimos de que componentes está formado el proyecto. Las cosas comunes a todos los proyectos será el uso del _plugin java_ y [_eclipse_][eclipse], el repositorio de dependencias de _mavenCentral_, algunas dependencias y una tarea para instalar el _wrapper_ de Gradle que nos servirá para usarlo sin necesidad de instalar nada (se descargarán sus binarios automáticamente).

{{< code file="build.gradle" language="groovy" options="" >}}
{{< code file="settings.gradle" language="groovy" options="" >}}

Podemos ver los módulos (o proyectos como los llama Gradle) de los que se compone la aplicación y las tareas que podemos ejecutar con:

{{< code file="gradle-info.sh" language="bash" options="" >}}
{{< asciinema id="26292" caption="Comandos básicos de Gradle" >}}

En los proyectos web incluiremos como dependencias las propias de Apache Tapestry, el proyecto _library_ y _core_, también aplicaremos el _plugin_ de [Tomcat][tomcat] para poder iniciar los proyectos con Gradle configurándolos para que cada uno se inicie en un puerto distinto 8080/8443 para web y 9080/9443 para back.

{{< code file="build-web.gradle" language="groovy" options="" >}}
{{< code file="build-back.gradle" language="groovy" options="" >}}

En el proyecto _library_ incluiremos los componentes que podemos reutilizar en cualquiera de los proyectos, será una librería de componentes de Apache Tapestry. Esta librería de componentes no es más que un archivo jar, cada proyecto que necesite utilizarlos basta con que lo incluya como una dependencia.

{{< code file="build-library.gradle" language="groovy" options="" >}}

En el último proyecto _core_ incluiremos una clase de utilidad con los típicos métodos estáticos, incluiremos un [servicio que nos facilitará la persistencia](https://github.com/picodotdev/blog-ejemplos/blob/master/MultiprojectGradle/core/src/main/java/io/github/picodotdev/gradle/core/services/ItemDAOImpl.java) y una [clase de modelo a persistir](https://github.com/picodotdev/blog-ejemplos/blob/master/MultiprojectGradle/core/src/main/java/io/github/picodotdev/gradle/core/models/tables/records/ItemRecord.java) en una base de datos [PostgreSQL][postgresql] generada con [jOOQ como alternativa a Hibernate][blogbitix-82], añadiendo o eliminando instancias persistidas son visualizadas desde el proyecto _web_ y _back_.

{{< code file="build-core.gradle" language="groovy" options="" >}}

Para arrancar los proyectos web deberemos inicializar la base de datos. Con [docker-compose][docker-compose] y el [archivo descriptor de Docker](https://github.com/picodotdev/blog-ejemplos/blob/master/MultiprojectGradle/core/misc/postgres/docker-compose.yml)) iniciamos el contenedor de [Docker][docker] con la base de datos PostgreSQL. La base de datos deberemos crearla manualmente pero el esquema donde se guardarán los datos los crearemos con [Liquibase que nos permite hacer modificaciones a una BBDD][elblogdepicodev-155], deberemos tenerlo instalado y su comando incluido en el _PATH_ del sistema para este ejemplo.

{{< code file="database.sh" language="bash" options="" >}}

Una vez tenemos en cada directorio los archivos _build.gradle_ y el resto de archivos que necesite cada proyecto (archivos .java, .tml, ...) podemos construir los módulos a la vez o de forma individual. Podemos iniciar los proyectos web y acceder a ellos con el navegador con:

{{< code file="back-run.sh" language="bash" options="" >}}
{{< asciinema id="26293" caption="Iniciando aplicación backoffice" >}}

Creando un producto desde la consola de PostgreSQL y refrescando la página en el proyecto de _web_ o _back_ veremos que se visualizan sus datos.

{{< code file="insert.sql" language="SQL" options="" >}}

{{< image
    gallery="true"
    image1="image:back.png" optionsthumb1="300x200" title1="Backoffice"
    caption="Aplicación backoffice" >}}

El [código fuente completo del ejemplo](https://github.com/picodotdev/blog-ejemplos/tree/master/MultiprojectGradle) puedes verlo y descargarlo desde su repositorio de GitHub.

{{< plugintapestry >}}

{{< reference >}}
* [Herramienta de construcción Gradle][elblogdepicodev-98]
* [Usar Gradle mediante Gradle wrapper][elblogdepicodev-100]
* [Incluir información de la versión en el artefacto distribuible con Gradle][blogbitix-145]
* [Libro PlugIn Tapestry][blogbitix-12]
* [Gradle: Multiproyectos Java](http://www.javamexico.org/blogs/windoctor/gradle_multiproyectos_java)
* [Gradle: Múltiples Proyectos en Java - P1](https://www.youtube.com/watch?v=eP0NBHkAwwU)
* [Gradle: Múltiples Proyectos en Java - P2](https://www.youtube.com/watch?v=fkzPB3IgrB8)
* [Gradle: Múltiples Proyectos en Java - P3](https://www.youtube.com/watch?v=-ITQ7_94iMM)
{{< /reference >}}

{{% /post %}}
