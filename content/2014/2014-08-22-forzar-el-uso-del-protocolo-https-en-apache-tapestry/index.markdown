---
pid: 38
type: "post"
title: "Forzar el uso del protocolo https en Apache Tapestry"
url: "/2014/08/forzar-el-uso-del-protocolo-https-en-apache-tapestry/"
date: 2014-08-22T11:09:23+02:00
updated: 2015-05-27T23:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:apache-tapestry-5.png"
tags: ["java", "programacion", "tapestry", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="apache-tapestry-5.png" >}}

El [protocolo seguro https](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol_Secure) hace que los datos que viajan entre el servidor y el cliente a través de internet estén cifrados de modo que nadie más pueda saber cual es es la información intercambiada ni se pueda alterar sin el conocimiento entre las dos partes. Estas propiedades nos son de interés para ciertas partes de una aplicación o en algunos casos la aplicación entera. ¿Cuales son estos casos? Son aquellos en los que queramos garantizar una mayor seguridad, estos pueden ser para proteger usuarios y contraseñas de autenticación para iniciar sesión, ciertos datos sensibles como datos personales, datos de tarjetas de crédito, ... evitando que una tercera parte los obtenga y los utilice para su provecho propio y supongan un problema de seguridad en la aplicación.

Es casi obligatorio forzar a que ciertas páginas de una aplicación o página web funcionen mediante el protocolo seguro https como las páginas de inicio de sesión donde los usuarios se autentican normalmente introduciendo su usuario y contraseña, páginas de compra donde los usuarios introducen los datos de su tarjeta de crédito o algunas secciones de una aplicación como las secciones de las cuentas de los usuarios o un backoffice.

En [Apache Tapestry][tapestry] hay varias formas de forzar a que una determinada página use el protocolo seguro de modo que si se accede por el [protocolo no seguro http](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol) la aplicación obligue a usar https haciendo una redirección. Una de ellas es utilizar la anotación [@Secure](http://tapestry.apache.org/5.3/apidocs/org/apache/tapestry5/annotations/Secure.html) en las páginas que queramos obligar a usar https. Basta con anotar las clases de las páginas con @Secure y Tapestry automáticamente hará la redirección al protocolo https cuando se acceda con http a la página.

{{< code file="Login.java" language="java" options="" >}}

Probablemente nos interese configurar el puerto y el host que usará Tapestry al hacer la redirección para que coincidan con el usado en el servidor al que accede el usuario, sobre todo si en la aplicación usamos un servidor web proxy como [Apache][apache-httpd], [Lighttpd][lighttpd] o [Nginx][nginx] delante del servidor de aplicaciones donde realmente se ejecuta la aplicación web. El puerto seguro del protocolo https predeterminado es 443 pero en el servidor de aplicaciones tomcat por defecto es 8443. Esto en tapestry lo indicamos configurando con ciertos símbolos.

{{< code file="AppModule-1.java" language="java" options="" >}}

Para probar mientras desarrollamos, al menos en nuestro equipo, que la redirección se hace correctamente empleando el plugin de gradle para tomcat podemos hacer que el servidor de desarrollo se inicie con el puerto https disponible. [Para usar https se necesita un certificado digital][blogbitix-13] que el [plugin de gradle para tomcat](https://github.com/bmuschko/gradle-tomcat-plugin) se encarga de generar al iniciar la aplicación, aunque sea autofirmado y el navegador alerte que no lo reconoce como firmado un una autoridad en la que confíe, si lo aceptamos podemos acceder a la aplicación sin más problema. Usando gradle la configuración que podemos emplear es:

{{< code file="build.gradle" language="groovy" options="" >}}

La anotación @Secure en Tapestry es suficiente pero podemos hacer lo mismo empleando [Shiro][shiro]. [Integrando Shiro con Tapestry nos permite realizar autenticación y autorización][elblogdepicodev-seguridad-en-aplicacion-web-con-apache], pero además empleando Shiro también podemos obligar a usar el protocolo https del mismo modo que lo hacemos con la anotación Secure. Cualquiera de las dos formas es perfectamente válida y depende más de cual prefiramos. Con la anotación @Secure deberemos anotar cada página, con Shiro podemos tener centralizado en un único punto en que páginas requerimos https. Con Shiro la configuración se hace con una contribución al servicio SecurityConfiguration y usando el método contributeSecurityConfiguration del módulo y la clase SecurityFilterChainFactory y su método ssl(). Un ejemplo es el siguiente:

{{< code file="AppModule-2.java" language="java" options="" >}}

En cualquiera de los dos casos mostrados en este ejemplo se obliga a usar https en la página de login:

{{< image
    gallery="true"
    image1="image:plugin-tapestry-https.png" optionsthumb1="300x200" title1="PlugIn Tapestry con https" >}}

{{< plugintapestry >}}

{{< reference >}}
* [Configurar SSL en un servidor Tomcat, JBoss, WildFly, Lighttpd, Nginx o Apache][blogbitix-14]
* [Generar y convertir claves y certificados con OpenSSL][blogbitix-13]
* [Libro PlugIn Tapestry][blogbitix-12]
{{< /reference >}}

{{% /post %}}
