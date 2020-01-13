---
pid: 429
type: "post"
title: "Utilizar credenciales de conexión a la base de datos generadas por Vault en una aplicación de Spring"
url: "/2019/08/utilizar-credenciales-de-conexion-a-la-base-de-datos-generadas-por-vault-en-una-aplicacion-de-spring/"
date: 2019-08-23T09:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
series: ["hashicorp", "spring-cloud"]
summary: "Spring Cloud Vault facilita la integración con Vault, una de sus usos es utilizarlo para obtener unas credenciales de conexión a la base de datos generadas bajo demanda y con un tiempo de vida limitado en vez de embeberlas en la configuración de la aplicación y con u tiempo de vida indefinido."
---

{{% post %}}

{{< logotype image1="spring.svg" title1="Spring" width1="200" image2="vault.svg" title2="Vault" width2="200" >}}

La herramienta [Vault][vault] de [HashiCorp][hashicorp] permite almacenar secretos, otra de sus funcionalidad es ser capaz de generar credenciales de forma dinámica. Habitualmente una aplicación para conectarse a una base de datos incluye en su configuración las credenciales, usuario y contraseña, para autenticarse y crear las conexiones, estas credenciales tiene un tiempo de vida indefinido y comprometidas proporcionan acceso a la base de datos.

Vault permite centralizar la seguridad, otorgar a cada aplicación los permisos para conectarse a una base de datos a través de la obtención de credenciales (usuario y contraseña), auditar su uso y limitar el tiempo de validez de las credenciales a unas horas en vez de forma indefinida.

[Spring Cloud Vault][spring-cloud-vault] permite a una aplicación [Spring][spring] simplificar la integración con Vault para obtener unas credenciales generadas dinámicamente.

En el archivo de contrucción de la aplicación hay que incluir las dependencias de Spring para la integración con Vault.

{{< code file="build.gradle" language="groovy" options="" >}}

Obtener la credenciales de conexión a la base de datos es transparente para el código de la aplicación, lo único que se necesita es el usuario y contraseña además de la URL de conexión. 

{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}

La parte más relevante está en la configuración necesaria de la aplicación. Hay que añadir como configuración la ubicación del servidor Vault, es necesario configurar un método de autenticación para Vault, para el caso de aplicaciones el recomendado es _AppRole_. Con _AppRole_ cada aplicación necesita de un _role-id_ y un _secret-id_ que hay que generar previamente. Y el rol del que obtener las credenciales, _app_.

{{< code file="bootstrap.yml" language="YAML" options="" >}}

Para probarlo hay que iniciar en este caso el servidor [Consul][consul] ya que en el ejemplo se utiliza como el lugar donde se guardan los secretos. También hay que iniciar Vault.

{{< code file="consul.sh" language="bash" options="" >}}
{{< code file="vault.sh" language="bash" options="" >}}
{{< code file="vault.hcl" language="plaintext" options="" >}}

La base de datos postgres se inicia como un contenedor de [Docker][docker].

{{< code file="postgres.sh" language="bash" options="" >}}

Para realizar la configuración de Vault primero hay que iniciar sesión, en el modo desarrollo del ejemplo utilizando el _token root_ que es generado y emitido en la salida al iniciarlo.

{{< code file="vault-login.sh" language="bash" options="" >}}

Como en el artículo [Generar credenciales de conexión a base de datos bajo demanda con Vault][blogbitix-428] hay que activar el _backend_ de _database_ para generar credenciales de bases de datos, en las que básicamente se especifica la cadena de conexión a la base de datos de postgres con un usuario y contraseña con permisos suficientes para crear usuarios y la sentencia SQL que los crea. Se habilita y configura el _backend database_ del que obtener las credenciales.

{{< code file="vault-database.sh" language="bash" options="" >}}

Para que la aplicación de Spring Boot obtenga las credenciales ha de autenticarse en Vault en este caso utilizando el método recomendado para las aplicaciones que es utilizando en mecanismo de autenticación _AppRole_ que básicamente es un usuario y contraseña para las aplicaciones.

{{< code file="vault-approle.sh" language="bash" options="" >}}

En Vault los permisos se otorgan con las _policy_, los secretos se organiza en una estructura jerárquica de directorios y a cada una de los contextos se le otorga los permisos deseados. Spring obtiene las credenciales para la base de datos del contexto _database/creds/app_ por lo que al rol utilizando para obtener las credenciales hay que asocialer un _policy_ con permisos de lectura para este contexto. 

{{< code file="vault-policy.sh" language="bash" options="" >}}
{{< code file="database-app.hcl" language="plaintext" options="" >}}

Obtenido un _role-id_ y un _secret-id_ so observa los _policies_ asociados además de otras propiedades.

{{< code file="vault-role-id.sh" language="bash" options="" >}}

En este caso la aplicación de Spring incluye en su configuración las credenciales del _AppRole_, también se puede proporcionar como variables de entorno y propiedades del sistema.

{{% sourcecode git="blog-ejemplos/tree/master/SpringCloudVault" %}}

{{< reference >}}
* [An Intro to Spring Cloud Vault](https://www.baeldung.com/spring-cloud-vault)
* [Spring Cloud Vault AppRole authentication](https://cloud.spring.io/spring-cloud-vault/reference/html/#_approle_authentication)
* [Spring Cloud Vault Database backends](https://cloud.spring.io/spring-cloud-vault/reference/html/#vault.config.backends.database-backends)
{{< /reference >}}

{{% /post %}}
