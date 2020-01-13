---
pid: 151
type: "post"
title: "Cómo redirigir peticiones de HTTP a HTTPS en Nginx, Apache, Tomcat, Jetty y WildFly"
url: "/2016/06/como-redirigir-peticiones-de-http-a-https-en-nginx-apache-tomcat-jetty-y-wildfly/"
date: 2016-06-18T13:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:nginx.svg"
tags: ["planeta-codigo", "seguridad", "software", "software-libre", "web"]
summary: "Usar el protocolo seguro HTTPS proporciona confidencialidad en la comunicación entre el navegador del usuario y el servidor, es una forma de mejorar la seguridad y privacidad. Por ello el buscador de Google lo tiene en cuenta como un parámetro que afecta al SEO siendo mejor usar el protocolo seguro. Sin embargo, el usuario puede estar accediendo por el protocolo no seguro a la página web al poner la dirección en la barra de direcciones o hay enlaces hacia nuestro sitio en otros que hacen uso del protocolo HTTP. Si queremos que nuestro sitio sea accedido únicamente usando el protocolo seguro deberemos hacer una redirección en el servidor."
---

{{% post %}}

{{< logotype image1="nginx.svg" title1="Nginx" width1="300" image2="apache.svg" title2="Apache HTTPD" width2="200" >}}

Si tenemos una aplicación o una bitácora que hasta el momento era accedido por el protocolo no cifrado <abbr title="Hypertext Transfer Protocol">HTTP</abbr> ahora que Google tiene en cuenta para el <abbr title="Search engine optimization">SEO</abbr> que usar el protocolo seguro es un parámetro que tiene en cuenta el algoritmo de posicionamiento en el buscador quizá queramos redirigir todo el tráfico de HTTP al protocolo cifrado <abbr title="Hypertext Transfer Protocol Secure">HTTPS</abbr>.

Para usar HTTPS deberemos primero [configurar el protocolo TLS/SSL en el servidor web o de aplicaciones][blogbitix-14] usando un certificado SSL que podemos obtener ahora con [Let's Encrypt][letsencrypt] de forma gratuita  o [generar un certificado][blogbitix-13] nosotros y que sea firmado por una autoridad de confianza. Una vez que el servidor es capaz de servir el tráfico por el protocolo HTTPS estamos en condiciones de realizar la redirección al protocolo cifrado HTTPS en el puerto 443 cuando sea accedido por el protocolo no cifrado HTTP en el puerto 80.

Dependiendo del servidor web o de aplicaciones que usemos la configuración será distinta, incluso lo podemos hacer a nivel de aplicación con la ayuda del _framework_ web si este ofrece algún soporte para ello. A continuación incluiré la configuración necesaria para los servidores web y de aplicaciones más populares como son [Nginx][nginx], [Apache HTTPD][apache-httpd], [Tomcat][tomcat], [Jetty][jetty] y [WildFly][wildfly] y finalmente el caso haciendo la redirección a nivel de aplicación con el _framework_ [Apache Tapestry][tapestry] para desarrollar aplicaciones web con el lenguaje Java.

### Nginx
Usando [Docker][docker] nos resultará más sencillo hacer la prueba que teniendo que instalar el paquete de Nginx en nuestra distribución. Puedes consultar [varios artículos sobre Docker][blogbitix-serie-docker] que he escrito a modo introducción y para empezar a usarlo.

En la sección del servidor que escucha en el puerto HTTP (80) realizamos la redirección permanente con el código de estado 301 hacia el protocolo HTTPS. En la sección del servidor que escucha en el pueto HTTPS (443) accitva el uso de TLS/SSL usando varias directivas y sirve los documentos de _/usr/share/nginx/html_ en la ruta _/_.

{{< code file="nginx.conf" language="plaintext" options="" >}}
{{< code file="docker-nginx.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:nginx-https.png" optionsthumb1="300x200" title1="Redirección de HTTP a HTTPS en Nginx"
    caption="Redirección de HTTP a HTTPS en Nginx" >}}

### Apache HTTPD
La configuración para Apache HTTPD es similar simplemente cambian las directivas según su propia configuración. Se activan los módulos para usar TLS/SSL y el que permite hacer reescrituras de las URL.

{{< code file="httpd.conf" language="plaintext" options="" >}}
{{< code file="docker-httpd.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:apache-httpd-https.png" optionsthumb1="300x200" title1="Redirección de HTTP a HTTPS en Apache HTTPD"
    caption="Redirección de HTTP a HTTPS en Apache HTTPD" >}}

### Tomcat, Jetty y WildFly
Es muy habitual que los servidores de aplicaciones como Tomcat, Jetty o WildFly sean accedidos no directamente por el navegador del usuario sino a través de un servidor web como Nginx o Apache haciendo de _proxy_. Cuando hay un servidor web que actúa de _proxy_ para el servidor de aplicaciones es posible decidir que el establecimiento de la conexión cifrada TLS/SSL del protocolo HTTPS se realice en el servidor web y la comunicación cifrada termine al mismo tiempo en él, la comunicación entre el servidor web y el servidor de aplicaciones se realizaría usando el protocolo HTTP. Esto descarga del servidor de aplicaciones la tarea algo costosa del establecimiento de la conexión cifrada y tener que cifrar el tráfico.

Para el caso de Tomcat, Jetty y WildFly habiendo configurado la posibilidad de usar el protocolo seguro la configuración para hacer la redirección es la misma para los tres, habría que añadir al archivo descriptor _web.xml_ de la aplicación el siguiente fragmento XML. Esto hace que el servidor fuerce la conexión segura para los recursos indicados, en este caso todos al usar el patrón _/*_.

{{< code file="web.xml" language="XML" options="" >}}

### Redirección a nivel de aplicación
Con algún mecanismo propio que empleemos al programar la aplicación (en Java por ejemplo con un filtro) o el _framework_ web que usemos para desarrollar la aplicación web quizá nos ofrezca algún mecanismo para redirigir las peticiones al puerto seguro cuando sea accedida por el puerto inseguro, por ejemplo, para que la redirección la haga la aplicación en vez del servidor con el _framework_ Apache Tapestry basta añadir la siguiente configuración en el módulo de la aplicación.

{{< code file="AppModule.java" language="java" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/RedirigirHTTPaHTTPS" command="./docker-nginx.sh o ./docker-httpd.sh" >}}

{{< reference >}}
* [Redirect Request to SSL](https://wiki.apache.org/httpd/RedirectSSL)
* [Redirect HTTP Requests to HTTPS (in Tomcat)](https://confluence.atlassian.com/stashkb/redirect-http-requests-to-https-333810132.html)
* [Configuring SSL/TLS (in Jetty)](http://www.eclipse.org/jetty/documentation/current/configuring-ssl.html)
{{< /reference >}}

{{% /post %}}
