---
pid: 14
type: "post"
title: "Configurar SSL/TLS en un servidor Tomcat, JBoss, WildFly, Lighttpd, Nginx o Apache"
url: "/2014/02/configurar-ssl-en-un-servidor-tomcat-jboss-wildfly-lighttpd-nginx-apache/"
date: 2014-02-28T16:58:17+01:00
updated: 2016-03-05T12:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:openssl.svg"
tags: ["seguridad", "software", "software-libre", "planeta-codigo", "web"]
summary: "Tanto en un servidor web como de aplicaciones podemos hacer que la comunicación entre el cliente y el servidor esté cifrada usando un protocolo seguro. La configuración para usar un protocolo seguro en cada servidor es diferente pero todos se basan en lo mismo, usar un certificado y un clave. En este artículo muestro la configuración necesaria en los servidores web y de aplicaciones más populares."
---

{{% post %}}

{{< logotype image1="openssl.svg" title1="OpenSSL" width1="400" >}}

En entradas anteriores he explicado [en que consiste la criptografía y GPG][elblogdepicodev-181] y como podemos usarlo a nivel personal para firmar y cifrar archivos y [firmar correos electrónicos con el cliente de correo Evolution][elblogdepicodev-182]. También he comentado [como crer un certificado con OpenSSL y como convertirlo a diferentes formatos][blogbitix-13]. En esta entrada explicaré como usar un certificado SSL creado con OpenSSL después de conocer los [Certificados SSL, de empresa, «wildcard» y de validación extendida][blogbitix-77] para proporcionar acceso cifrado al sevidor web o servidor de aplicaciones, explicaré cual es la configuración necesaria para los servidores [Tomcat](http://tomcat.apache.org/), [Lighttpd](http://www.lighttpd.net/), [JBoss](http://jbossas.jboss.org/)/[WildFly](http://wildfly.org/), [Nginx](http://nginx.org/) y [Apache](http://www.apache.org/).

Usar una conexión <abbr title="Secure Sockets Layer">SSL</abbr> o <abbr title="Transport Layer Security">TLS</abbr> y un certificado de servidor evita que los datos entre el navegador del usuario y el servidor sean legibles para una tercera parte siendo mayor la seguridad en nuestras aplicaciones o dando mayor confianza al usuario y usando algunos certificados al aparecer en la barra de navegación del navegador en verde el nombre de la entidad detrás de la página evitando problemas de suplantación de identidad.

Los principales navegadores han anunciado que una conexión cifrada SSL/TLS es condición necesaria para usar el ya presente [protocolo HTTP/2][blogbitix-127] que es más eficiente tanto para el cliente como para el servidor y con menores latencias. [Configurar HTTP/2 en Nginx, Apache HTTPD, WildFly o Jetty][blogbitix-129] es sencillo y mejorará el rendimiento de nuestros sitios web o aplicaciones.

### Configurar SSL/TLS en Tomcat

Tomcat es uno de los servidores de aplicaciones más usado para desplegar aplicaciones web desarrolladas con el lenguaje Java. La forma que explicaré a continuación sobre como obtener cifrado SSL con este servidor será usando APR (_Apache Portable Runtime_). Previamente deberemos haber generado un certificado SSL con OpenSSL, una vez dispogamos del nuestro aunque sea autofirmado debemos añadir la siguiente configuración al archivo server.xml:

{{< code file="server.xml" language="XML" options="" >}}

Hay que activar el conector SSL (el anterior xml) y disponer del certificado y su clave privada, ambos archivos se indican en los atributos SSLCertificateFile y SSLCertificateKeyFile. Si queremos usar el puerto estandar del protocolo HTTPS cambiaremos el valor del puerto de 8443 a 443 en el atributo port. La configuración es la misma tanto para Tomcat 7 como para Tomcat 8.

### Configurar SSL/TLS en JBoss

JBoss es otro de los servidores que es ampliamente usado para desplegar aplicaciones Java y que proporciona un perfil completo de las especificaciones EE al contrario que Tomcat que solo proporciona un perfil web. La configuración que hay que indicar en JBoss 7.1 es la siguiente:

{{< code file="standalone-jboss.xml" language="XML" options="" >}}

### Configurar SSL/TLS en WildFly

JBoss cambió recientemente el nombre de la versión community de JBoss, esta ha pasado a llamarse WildFly y la comercial con soporte sigue llamandose JBoss. WildFly soporta las especificaciones de Java EE 7. En WildFly el contenedor web es [undertow](http://undertow.io/) en vez de Tomcat y cambia la configuración de SSL. Senecesita crear un keystore JKS que contenga tanto la clave como el certificado.

{{< code file="standalone-wildfly.xml" language="XML" options="" >}}

### Configurar SSL/TLS en Lighttpd

Lighttpd es un servidor web de los denominados ligeros que aunque posiblemente no tiene toda la versatilidad de Apache ofrece un mayor rendimiento. Para activar SSL en lighttpd debemos modificar el archivo de configuración y añadir lo siguiente:

{{< code file="lighttpd.conf" language="plaintext" options="" >}}

Quizá debamos cambiar el propietario y permisos con:

{{< code file="script-1.sh" language="bash" options="" >}}

El archivo localhost.pem contiene la clave y el certificado.

### Configurar SSL/TLS en Nginx

El proceso es similar para el servidor web Nginx aunque lógicamente se usan las directivas propias de configuración de Nginx.

{{< code file="nginx.conf" language="plaintext" options="" >}}

### Configurar SSL/TLS en Apache

Apache es uno de los servidores web más utilizados para servir sitios web en internet. Para activar SSL en Apache debemos modificar el archivo de configuración, añadiendo la siguiente configuración que activa el soporte de SSL y especifica el archivo de clave y certificado, nada distinto de lo necesario en los servidores anteriores:

{{< code file="httpd.conf" language="plaintext" options="" >}}

{{< reference >}}
* [Tomcat](https://tomcat.apache.org/tomcat-7.0-doc/ssl-howto.html)
* [JBoss](http://docs.jboss.org/jbossweb/7.0.x/ssl-howto.html)
* [WildFly (Undertow)](https://community.jboss.org/message/824152#824152)
* [Lighttpd](http://redmine.lighttpd.net/projects/1/wiki/HowToSimpleSSL)
* [Nginx](http://nginx.org/en/docs/http/ngx_http_ssl_module.html)
* [Apache](http://httpd.apache.org/docs/current/ssl/ssl_howto.html)
{{< /reference >}}

{{% /post %}}
