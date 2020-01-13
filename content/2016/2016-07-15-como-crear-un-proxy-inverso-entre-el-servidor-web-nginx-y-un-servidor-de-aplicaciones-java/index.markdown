---
pid: 159
type: "post"
title: "Cómo crear un proxy inverso entre el servidor web Nginx y un servidor de aplicaciones Java"
url: "/2016/07/como-crear-un-proxy-inverso-entre-el-servidor-web-nginx-y-un-servidor-de-aplicaciones-java/"
date: 2016-07-15T18:00:00+02:00
updated: 2016-07-16T13:30:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:nginx.svg"
tags: ["planeta-codigo", "software", "software-libre", "web"]
summary: "Continuando la serie de artículos sobre varios aspectos realizados muy comúnmente en las aplicaciones y servidores web en este artículo explicaré como hacer que un servidor web nginx haga de _proxy_ inverso para un servidor de aplicaciones Java en este caso Tomcat."
---

{{% post %}}

{{< logotype image1="nginx.svg" title1="Nginx" width1="300" image2="tomcat.svg" title2="Tomcat" width2="200" >}}

Las aplicaciones web dinámicas Java se despliegan en un contenedor de _servlets_ o un [servidor de aplicaciones como WildFly][blogbitix-10] que implementa las [especificaciones de los estándares de Java EE][blogbitix-131] pero es habitual que los usuarios no accedan directamente al contenedor de aplicaciones Java sino que se ponga delante un servidor web como [Apache][apache-httpd] o [Nginx][nginx] con la tarea de que realice algunas tareas. Las tareas que puede realizar un servidor web son varias como:

* [Realizar la conexión TLS/SSL][blogbitix-14] sin necesidad de que llegue al servidor de aplicaciones.
* Servir el contenido estático.
* [Balanceo de carga][blogbitix-157] con la que podremos tener varios servidores de aplicaciones Java en caso de que la aplicación deba soportar muchos usuarios.
* Cacheo de páginas y contenido.
* Redirecciones y reescritura de URL.
* Seguridad.
* [Forzar el uso del protocolo seguro HTTPS][blogbitix-38].
* [Ofrecer el protocolo HTTP/2][blogbitix-129].

{{< image
    gallery="true"
    image1="image:reverse-proxy.png" optionsthumb1="300x200" title1="Esquema de un proxy inverso"
    caption="Un proxy inverso recibe las peticiones de internet y las reenvía a los servidores de una red interna sin necesidad de que los clientes conozcan la red interna" >}}

Para que un servidor web como Nginx actúe como _proxy_ inverso o _reverse proxy_ para un servidor de aplicaciones debemos añadir unas pocas directivas al archivo de configuración del servidor web. En el caso de Nginx usando la directiva _proxy\_pass_ donde indicamos para una localización la URL del servidor de aplicaciones a la que se le solicitará el contenido, en el ejemplo usando un servidor [Tomcat][tomcat].

{{< code file="nginx.conf" language="plaintext" options="" >}}

Una forma fácil de probarlo es usando [Docker][docker] y [Docker Compose][docker-compose] que en varios artículos introductorios siendo el primero el [inicio básico de Docker][blogbitix-50] comento como empezar a usarlo y en que consiste esta nueva forma de ejecución para las aplicaciones. Con el siguiente archivo de Docker Compose creamos dos contenedores uno para Nginx en el que proporcionamos su configuración personalizada y otro contenedor para Tomcat.

{{< code file="docker-compose.yml" language="YAML" options="" >}}

Al hacer un _proxy_ inverso debemos tener en cuenta que el servidor Tomcat si devuelve URL absolutas las haga siendo las del servidor web por las que se accede a la aplicación, si únicamente genera URL relativas no deberemos hacer nada pero en el caso de absolutas el servidor Tomcat deberá conocer el protocolo usado en el servidor web (HTTP o HTTPS) y el puerto del servidor web que suele ser 80 para HTTP y 443 para HTTPS pero que en el servidor Tomcat suele ser 8080 para HTTP y 8443 para HTTPS. Si el protocolo y puerto usado en el servidor web y servidor de aplicaciones es diferente y una aplicación genera URL absolutas el servidor de aplicaciones deberá tener esto en cuenta que es lo que se usa el en servidor web.

En la documentación se comentan varios [parámetros de configuración de Tomcat](https://tomcat.apache.org/tomcat-8.0-doc/config/http.html) como _proxyPort_ y _scheme_ que ajustan la información devuelta por los métodos _request.getServerPort()_ y _request.getScheme()_ y que nos servirá en caso de tener que generar URLs absolutas.

Arrancado los contenedores con el comando <code>docker-compose up</code> accediendo al servidor web veremos que el contenido proporcionado es el ofrecido por Tomcat, que con la configuración del ejemplo es la página de inicio de Tomcat. En las cabeceras de respuesta Nginx añade una, _Server_, indicando su versión.

{{< image
    gallery="true"
    image1="image:nginx-tomcat.png" optionsthumb1="300x200" title1="Nginx configurado como proxy inverso de un servidor de aplicaciones Tomcat"
    caption="Nginx configurado como proxy inverso de un servidor de aplicaciones Tomcat" >}}

En la [documentación sobre _reverse proxy_ de Nginx](https://www.nginx.com/resources/admin-guide/reverse-proxy/) se explican algunas directivas más para pasar al servidor Tomcat la dirección IP del usuario usando cabeceras HTTP, en la configuración de Nginx usando _proxy\_set\_header_.

{{< sourcecode git="blog-ejemplos/tree/master/NginxReverseProxy" command="docker-compose up" >}}

{{< reference >}}
* [NGINX Reverse Proxy](https://www.nginx.com/resources/admin-guide/reverse-proxy/)
* [Unir Apache HTTPD y Tomcat mediante un reverse proxy ](https://elblogdepicodev.blogspot.com.es/2011/02/unir-apache-httpd-y-tomcat-mediante-un.html)
{{< /reference >}}

{{% /post %}}
