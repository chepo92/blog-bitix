---
pid: 112
type: "post"
title: "Configuración de una aplicación en diferentes entornos con Spring Cloud Config"
url: "/2015/11/configuracion-de-una-aplicacion-en-diferentes-entornos-con-spring-cloud-config/"
date: 2015-11-28T11:00:00+01:00
updated: 2015-12-11T22:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:spring.svg"
tags: ["java", "planeta-codigo", "programacion", "spring"]
series: ["spring-cloud"]
summary: "La configuración de una aplicación suele varíar según el entorno en el que se ejecuta, la opción recomendada es que este externalizada y que el artefacto que se despliega en cada entorno sea el mismo. Con Spring Cloud Config en vez de guardar la configuración en un archivo de la propia máquina donde se instala podemos guardar de forma centralizada en un repositorio y que la aplicación obtenga la versión más actualizada cuando se inicia. En este ejemplo explicaré como crear el servidor de configuraciones con Spring Cloud Config y un ejemplo de cliente con Spring Boot que le solicita su configuración según su entorno."
---

{{% post %}}

{{< logotype image1="spring.svg" title1="Spring" width1="200" image2="java.svg" >}}

Desarrollar una aplicación no consiste solo en programar el código que proporciona su funcionalidad, con igual de importancia está como poner en producción esa aplicación para que preste su servicio, algo de lo que el desarrollador no debería ser ajeno. Casi siempre hay algo de configuración que varia entre entornos siendo estos al menos el de desarrollo y producción. En el ciclo de vida de una aplicación esta pasa por varios entornos de ejecución hasta llegar a producción, desde desarrollo, pruebas, <abbr title="Quality assurance">QA</abbr> y finalmente en producción. Casi seguro que la aplicación en cada uno de estos entornos la configuración varía, por ejemplo, las direcciones ya sean IP o nombres de dominio de las bases de datos relacional u otros servicios externos. Para que en el entorno de pruebas y QA se use exactamente el mismo artefacto (en Java un archivo war o jar) que el que se enviaría al entorno de producción la configuración de la aplicación no debería ser incluida en el propio artefacto, si la configuración fuese incluida en el propio artefacto sería distinto que el que se enviaría a producción y las pruebas no válidas, podría haber alguna diferencia en la construcción del artefacto para cada entorno.

El proyecto [Spring Cloud][spring-cloud] con [Spring Cloud Config][spring-cloud-config] proporciona un mecanismo para externalizar y actualizar de forma sencilla las varias configuraciones de una aplicación en los diferentes entornos en los que se vaya a ejecutar. La opción recomendada es crear un repositorio de Git donde se almacenarán las diferentes configuraciones de la aplicación para cada entorno y bajo un sistema de control de versiones. El que las configuraciones se obtengan de un repositorio y con [Git][git] evita que el archivo de configuración esté como un fichero regular en cada máquina del entorno de ejecución, duplicados si hay varias máquinas o con algunas diferencias en cada una. En caso de tener solo una máquina si deja de funcionar o ser accesible perderíamos el archivo de configuración y los cambios que hubiésemos hecho en él directamente, al mismo tiempo estando en un sistema de control de versiones como Git tendremos un histórico de los cambios realizados.

En el caso de este ejemplo usaré la opción del sistema de archivos en vez de Git por ser más sencilla para el ejemplo. Spring Cloud Config usa una arquitectura cliente/servidor en la que cada aplicación al iniciarse solicitará su configuración en función del entorno para el que se desee ejecutar. Spring Cloud Config no solo es usable en aplicaciones Java sino que al proporcionar una <abbr title="Application Programming Interface">API</abbr> <abbr title="Representational State Transfer">REST</abbr> y devolver documentos <abbr title="JavaScript Object Notation">JSON</abbr> puede ser usado por cualquier lenguaje popular ([C#][csharp], [Python][python], [Ruby][ruby], [Groovy][groovy], ...).

Para el ejemplo me basaré en varios artículos que he escrito anteriormente como [la herramienta de construcción Gradle][elblogdepicodev-98] ya que con esta herramienta construiré el proyecto, [multiproyectos con Gradle][blogbitix-96] dado que el ejemplo se dividirá en dos, la parte cliente y la parte servidor y [aplicación autocontenida con Spring Boot][blogbitix-103] como forma de iniciar tanto la aplicación cliente como servidor, también como obtener [información y métricas de la aplicación con Spring Boot Actuator][blogbitix-113]. Recomiendo leer estos artículos si no las conoces aún.

Para la parte servidor deberemos incluir como dependencia en el archivo _build.gradle_ la propia del servidor de Spring Cloud Config, _org.springframework.cloud:spring-cloud-config-server_, y dos archivos de configuración, _application.yml_ y _bootstrap.yml_ donde indicaremos el puerto donde escuchará la aplicación y la ruta del sistema de ficheros del repositorio de configuraciones. En la clase que inicia el servidor con [Spring Boot][spring-boot] usaremos la anotación `@EnableConfigServer`.

{{< code file="Main-server.java" language="java" options="" >}}
{{< code file="build-server.gradle" language="groovy" options="" >}}
{{< code file="application.yml" language="YAML" options="" >}}
{{< code file="bootstrap-server.yml" language="YAML" options="" >}}

En el repositorio de configuraciones cada combinación de aplicación y entorno de ejecución tendrá su propio archivo de configuración. En el caso de una aplicación de nombre _springcloudclient_ que se ejecuta en los entornos _dev_, _test_ y _prod_ los archivos serían los siguientes. Cada archivo tiene similares propiedades de configuración pero posiblemente variando los valores de cada una de ellas. Los archivos pueden definirse en varios formatos, en este caso usando <abbr title="YAML Ain't Another Markup Language">YAML</abbr>.

{{< code file="springcloudclient-dev.yml" language="YAML" options="" >}}
{{< code file="springcloudclient-test.yml" language="YAML" options="" >}}
{{< code file="springcloudclient-prod.yml" language="YAML" options="" >}}

En la búsqueda de las ubicaciones de los archivos de configuración se siguen los siguientes patrones, en el caso del ejemplo he usado la segunda opción, el primero que se encuentre es el que se usa:

* _/{application}/{profile}[/{label}]_
* _/{application}-{profile}.yml_
* _/{label}/{application}-{profile}.yml_
* _/{application}-{profile}.properties_
* _/{label}/{application}-{profile}.properties_

Este sería el inicio del servidor de configuración y el documento JSON que devuelve para la aplicación _springcloudclient_ para el entorno _prod_ en una petición <abbr title="Hypertext Transfer Protocol">HTTP</abbr>.

{{< asciinema id="30811" caption="Inicio del servidor Spring Cloud Config" >}}
{{< image
    gallery="true"
    image1="image:spring-cloud-client-prod.png" optionsthumb1="300x200" title1="Configuración de la aplicación para el entorno de producción"
    caption="Configuración de la aplicación para el entorno de producción" >}}

La aplicación cliente cuando se inicie solicitará su configuración al servidor Spring Cloud Config mediante una petición HTTP en función del entorno para el que se inicie. Deberemos usar la dependencia _org.springframework.cloud:spring-cloud-starter-config_. Para obtener los valores de las propiedades de configuración podemos usar la anotación `@Value`. En los archivos _application.yml_ y _bootstrap.yml_ indicamos el perfil para el cual se activará la aplicación y podemos especificar la <abbr title="Uniform Resource Locator">URL</abbr> con la localización del servidor de configuración.

{{< code file="Main-client.java" language="java" options="" >}}
{{< code file="build-client.gradle" language="groovy" options="" >}}
{{< code file="bootstrap-client.yml" language="YAML" options="" >}}

Si no queremos obtener las propiedades con la anotación `@Value` podemos usar el _bean_ [Environment](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/core/env/Environment.html) que define Spring y sus métodos _getProperty_ con el que además podremos averiguar los perfiles activos de la aplicación. Por otra parte las mismas propiedades de configuración del cliente podemos especificarlos mediante parámetros, propiedades de sistema, propiedades de entorno y algunas formas más como se explica en como [externalizar la configuración en las aplicaciones Spring](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html). De cualquiera de estas formas podemos indicar o sobreescribir los valores como puede ser el perfil activo de la aplicación.

{{< asciinema id="30810" caption="Inicio de aplicación cliente de servidor Spring Cloud Config" >}}

Este ejemplo solo muestra una pequeña parte de las posibilidades que ofrece Spring Cloud Config, otras son la posibilidad de [servir archivos de configuración completos](http://cloud.spring.io/spring-cloud-config/spring-cloud-config.html#_serving_plain_text) para por ejemplo [Nginx][nginx], los valores de las propiedades de configuración en el repositorio de configuración pueden ser cifradas y al enviarlas al cliente ser descifradas. Spring Cloud Config solo es una pequeña parte del proyecto Spring Cloud que proporciona más funcionalidades útiles para sistemas distribuidos y microservicios y un complemento adicional interesante para Spring Boot.

{{< sourcecode git="blog-ejemplos/tree/master/SpringCloud" command="./gradlew cloudconfig:run, ./gradlew clouddiscovery:run, ./gradlew service:run, ./gradlew client:run" >}}

{{< reference >}}
* [Herramienta de construcción Gradle][elblogdepicodev-98]
* [Ejemplo de multiproyecto con Gradle][blogbitix-96]
* [Aplicación Java autocontenida con Spring Boot][blogbitix-103]
* [Información y métricas de la aplicación con Spring Boot Actuator][blogbitix-113]
* [Spring Cloud][spring-cloud]
* [Spring Cloud Config][spring-cloud-config]
* [Documentación Spring Cloud Config](http://cloud.spring.io/spring-cloud-config/spring-cloud-config.html)
{{< /reference >}}

{{% /post %}}
