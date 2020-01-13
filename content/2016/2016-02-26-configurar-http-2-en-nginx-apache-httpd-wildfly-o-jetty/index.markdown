---
pid: 129
type: "post"
title: "Configurar HTTP/2 en Nginx, Apache HTTPD, WildFly o Jetty"
url: "/2016/02/configurar-http-2-en-nginx-apache-httpd-wildfly-o-jetty/"
date: 2016-02-26T19:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:apache.svg"
tags: ["planeta-codigo", "web"]
summary: "HTTP/2 se puede usar ya, los principales navegadores web, servidores web y de aplicaciones ya han añadido el soporte necesario ofreciendo varias ventajas para los usuarios, desarrolladores, dispositivos cliente y los servidores. En varios de los servidores más ppulares la configuración necesaria no es complicada."
---

{{% post %}}

HTTP/2 es el protocolo que ha surgido para mejorar la experiecia de navegación de la web, proporcionará menos latencia y más velocidad siendo más eficiente. En la [introducción al protocolo HTTP/2][blogbitix-127] comentaba de que necesidad surge, sus ventajas, alguna diferencia con HTTP 1.1, varias cosas que los desarrolladores hacíamos que quedarán obsoletas y otras varias que deberemos seguir haciendo. Se pubicó oficialmente en 2015 y los principales navegadores como [Mozilla Firefox][firefox], [Google Chrome][google-chrome] y [Microsoft Edge][microsoft-edge] ya lo soportan.

En el lado del servidor varios servidores web también han incluido el soporte para HTTP/2, entre ellos [Nginx][nginx], [Apache HTTPD][apache-httpd], [WildFly][wildfly] y [Jetty][jetty]. Tomcat añadirá el soporte en la versión 9 cuando se publique las especificación de Servlets 4.0 con el soporte de HTTP/2, este soporte necesitará de ALPN que se incluirá en la versión 9 del JDK con lo que en el momento de publicar este artículo todavía quedarán varios meses. Para usar HTTP/2 en Nginx, Apache HTTPD, WildFly y Jetty debemos hacer algunos cambios en sus configuraciones.

Para usar HTTP/2 los navegadores Mozilla Firefox, Google Chrome y Microsoft Edge han anunciado que se necesitará cifrado, por lo tanto deberemos añadir el [soporte para TLS/SSL en el servidor][blogbitix-14] previamente.

### Nginx

En Nginx es muy sencillo, deberemos modifificar el archivo de configuración _default.conf_ para que quede de forma similar a la siguiente.

{{< code file="default.conf" language="plaintext" options="" >}}

{{< image
    gallery="true"
    image1="image:http2-nginx.png" optionsthumb1="300x200" title1="HTTP/2 en Nginx" >}}

### Apache HTTPD

En Apache HTTPD deberemos instalar el [paquete nghttp2](https://www.archlinux.org/packages/extra/x86_64/nghttp2/) de nuestra distribución. y usar el módulo _mod\_http2.so_ junto con _mod\_ssl.so_ para el cifrado.

{{< code file="httpd-default.conf" language="plaintext" options="" >}}

{{< image
    gallery="true"
    image1="image:http2-httpd.png" optionsthumb1="300x200" title1="HTTP/2 en Apache HTTPD" >}}

### WildFly

El WildFly deberemos descargar un archivo jar que ofrece el soporte para la negociación de protocolo,
<abbr title="Application-Layer Protocol Negotiation">ALPN</abbr>, según la versión del JDK que usemos de [Maven Central](http://central.maven.org/maven2/org/mortbay/jetty/alpn/alpn-boot/). Modificamos el archivo de configuración _bin/standalone.conf_.

{{< code file="standalone.conf" language="plaintext" options="" >}}

Y el archivo _standalone/configuration/standalone.xml_ añadimos un nuevo listener para el subsistema de [undertow][undertow] con HTTP/2 habilitado y un Realm asociado para usar TLS/SSL.

{{< code file="standalone.xml" language="XML" options="" >}}

{{< image
    gallery="true"
    image1="image:http2-wildfly.png" optionsthumb1="300x200" title1="HTTP/2 en WildFly" >}}

### Jetty

Dependiendo de la versión de Java, usaremos el módulo alpn adecuado, en el momento de escribir este artículo con la versión 1.8.0_74 del [OpenJDK][openjdk], _modules/alpn-impl/alpn-1.8.0\_74.mod_.

{{< code file="alpn-1.8.0_74.mod" language="plaintext" options="" >}}
{{< code file="jetty.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:http2-jetty.png" optionsthumb1="300x200" title1="HTTP/2 en Jetty" >}}

{{< reference >}}
* [NGINX Open Source 1.9.5 Released with HTTP/2 Support](https://www.nginx.com/blog/nginx-1-9-5/)
* [Jetty ALPN](http://www.eclipse.org/jetty/documentation/current/alpn-chapter.html)
* [Maven ALPN](http://central.maven.org/maven2/org/mortbay/jetty/alpn/alpn-boot/8.1.7.v20160121/)
* [Using HTTP2 With Wildfly 9.0.0.Beta1](http://undertow.io/blog/2015/03/26/HTTP2-In-Wildfly.html)
* [WildFly Security Realms](https://docs.jboss.org/author/display/WFLY10/Security+Realms)
{{< /reference >}}

{{% /post %}}
