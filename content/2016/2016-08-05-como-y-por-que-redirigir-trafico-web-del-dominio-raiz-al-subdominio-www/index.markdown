---
pid: 166
type: "post"
title: "Cómo y por que redirigir tráfico web del dominio raíz al subdominio www (o viceversa)"
url: "/2016/08/como-y-por-que-redirigir-trafico-web-del-dominio-raiz-al-subdominio-www/"
date: 2016-08-05T17:00:00+02:00
updated: 2016-08-05T18:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:html.svg"
tags: ["planeta-codigo", "software", "software-libre", "web"]
summary: "La redirección del dominio raíz al subdominio es una de las cosas básicas que es recomendable realizar en todo dominio, para ello hay que añadir algo de configuración propia de cada servidor para realizar la redirección. Junto con usar el uso del protocolo HTTPS y forzar su uso con otra redirección mejoraremos el SEO y evitaremos penalizaciones por contenido duplicado."
---

{{% post %}}

{{< logotype image1="html.svg" >}}

El nombre de un dominio está formado por varios subdominios separados por un caracter punto. Están los dominios de nivel superior, los genéricos y más antiguos _.com_, _.org_, _.info_, _.net_, los propios de cada país o territoriales _.es_, _.fr_, _.de_ y más recientemente un montón de [nuevos dominios de nivel superior](https://es.wikipedia.org/wiki/Dominio_de_nivel_superior) (_.futbol_, _.arte_, _.blog_, _.madrid_, ...) aunque significativamente más caros. Después del dominio de nivel superior está el subdominio de la empresa, marca o personal, por ejemplo, _empresa.com_ que es realmente lo que compramos cuando solicitamos registrar un dominio. En nuestro dominio _empresa.com_ podemos administrar múltiples subdominios los clásicos son _www.empresa.com_ para el servidor web, _smpt.empresa.com_ para el correo electrónico, _ftp.empresa.com_ para la transferencia de archivos y otros cualesquiera que deseemos.

En el caso del tráfico web debemos evitar que el servidor y la página o aplicación sea accedida por _empresa.com_ y _www.empresa.com_ ya que los buscadores tratarán a la página como dos diferentes y posiblemente detectando contenido duplicado que afectará negativamente o penalizando al SEO de la web. Lo que se suele hacer es hacer una [redirección permanente](https://es.wikipedia.org/wiki/HTTP_301) (cuyo código de estado HTTP para la respuesta es 301) a nivel de servidor que redirija el tráfico de _empresa.com_ a _www.empresa.com_ cuando el usuario acceda con su navegador con la primera.

Esta es una de las cosas básicas que debemos realizar cuando instalemos un servidor web, otras cosas recomendadas para mejorar el SEO y la seguridad de los usuarios es [configurar el servidor web para usar el protocolo seguro HTTPS][blogbitix-129] y [configurar el servidor web para forzar el uso de HTTPS][blogbitix-151] también haciendo una redirección cuando la petición use el protocolo no cifrado HTTP entre otras cosas que indico en la [serie web][blogbitix-serie-web].

Dependiendo del servidor web que utilicemos la configuración a añadir para hacer la redirección será distinta, a continuación indicaré como hacerlo en dos de los servidores web más populares como son [Nginx][nginx] y [Apache HTTPD][apache-httpd].

### Nginx

Usando Docker y el archivo de configuración completo podemos probar que funciona en local sin necesidad de instalar o cambiar la configuración de Nginx si tenemos instalado su paquete.

{{< code file="docker-run-nginx.sh" language="bash" options="" >}}
{{< code file="nginx.conf" language="plaintext" options="" >}}

{{< image
    gallery="true"
    image1="image:nginx.png" optionsthumb1="300x200" title1="Dominio antes de acceder al sitio"
    image2="image:nginx-www.png" optionsthumb2="300x200" title2="Dominio después de acceder al sitio"
    caption="Dominio antes y después de acceder al sitio con Nginx" >}}

### Apache

{{< code file="docker-run-httpd.sh" language="bash" options="" >}}
{{< code file="httpd.conf" language="plaintext" options="" >}}

{{< image
    gallery="true"
    image1="image:httpd.png" optionsthumb1="300x200" title1="Dominio antes de acceder al sitio"
    image2="image:httpd-www.png" optionsthumb2="300x200" title2="Dominio después de acceder al sitio"
    caption="Dominio antes y después de acceder al sitio con Apache HTTPD" >}}

Si prefieriesemos hacer la redirección al revés, del subdominio www al dominio, variaríamos los valores de los nombres del servidor y los valores de las directivas de redirección. En los enlaces de referencia se incluye un ejemplo de esta configuración.

{{< sourcecode git="blog-ejemplos/tree/master/RedirigirSubdominio" >}}

Referencia:
{{< reference >}}
* [Nginx config for www to non-www and non-www to www redirection](https://easyengine.io/tutorials/nginx/www-non-www-redirection/)
* [How to Redirect URLs from Your Root Domain to the WWW Subdomain and Vice Versa](http://www.thesitewizard.com/apache/redirect-domain-www-subdomain.shtml)
{{< /reference >}}

{{% /post %}}
