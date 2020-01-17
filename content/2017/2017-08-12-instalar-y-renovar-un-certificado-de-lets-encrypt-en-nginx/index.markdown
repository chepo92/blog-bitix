---
pid: 252
type: "post"
title: "Instalar y renovar un certificado de Let's Encrypt en Nginx"
url: "/2017/08/instalar-y-renovar-un-certificado-de-lets-encrypt-en-nginx/"
date: 2017-08-12T11:00:00+02:00
updated: 2017-08-18T17:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:lets-encrypt.svg"
tags: ["planeta-codigo", "seguridad", "software", "software-libre", "web"]
summary: "Let's Encrypt es una entidad que emite certificados TLS/SSL que son reconocidos como de confianza por los navegadores web. Usando esta entidad de certificación es posible obtener y renovar un certificado TLS/SSL de forma automatizada, rápida y sin coste alguno."
---

{{% post %}}

{{< logotype image1="lets-encrypt.svg" title1="Let's Encrypt" width1="350" >}}

[Google][google] ha anunciado que su buscador va a considerar el uso del protocolo seguro HTTPS como un criterio de <abbr title="Search Engine Optimization">SEO</abbr> y posicionamiento en la lista de resultados, posicionando mejor aquellas páginas web que usen el protocolo seguro. Además, el navegador [Chrome][google-chrome] va a advertir al usuario para algunas páginas que usen solo HTTP que esas páginas son inseguras. Por estos motivos y para mayor seguridad y privacidad del usuario es conveniente usar el protocolo seguro HTTPS.

El mayor inconveniente de usar el protocolo seguro HTTPS es que es necesario un certificado firmado por una autoridad de confianza instalada en el navegador del usuario. Hasta ahora había que comprar el certificado que puede llegar a tener un coste de más de 100€, instalarlo en el servidor y renovarlo antes de su fecha de expiración. Tareas quizá manuales por tanto tediosas y propensas a que surjan errores o se nos olvide hacer la renovación del certificado sobre todo si son múltiples los certificados a gestionar.

Para mejorar la seguridad en la web y facilitar la administración de certificados hace un tiempo se creó una entidad [Let's Encrypt][letsencrypt] asociado a la [Linux Foundation][linux-foundation] con la que es posible automatizar la obtención y renovación de un certificado TLS/SSL firmado por una autoridad de confianza para los navegadores. Además Let's Encrypt permite obtener un certificado sin ningún coste, de forma gratuita.

Los pasos para usar en un servidor web un certificado de Let's Encrypt son los siguientes. Primero hay que instalar el [paquete certbot](https://www.archlinux.org/packages/community/any/certbot/) según la distribución de GNU/Linux, en [Arch Linux][archlinux]:

{{< code file="pacman.sh" language="bash" options="" >}}

En el proceso de obtención del certificado demostraremos que somos los propietarios del sitio web a certificar. Usando [nginx][nginx] como servidor web, iniciado y el dominio a certificar con la opción _-d_ se usa el siguiente comando:

{{< code file="certbot.sh" language="bash" options="" >}}

El certificado obtenido tiene una fecha de expiración de únicamente tres meses periodo antes del cual hay que renovarlo. Para hacer la renovación hay que usar el comando:

{{< code file="certbot-renew.sh" language="bash" options="" >}}

La renovación del certificado se realiza cuando queda poco tiempo para que expire, unos 30 días, el siguiente comando permite comprobar antes si la configuración es correcta para realizar la renovación.

{{< code file="certbot-renew-dry-run.sh" language="bash" options="" >}}

La clave privada y certificado que Let's Encrypt genera una vez el dominio se ha validado se ubican en el directorio _/etc/letsencrypt/live/_ con una carpeta por cada dominio. También se puede ver desde la linea de comandos los certificados existentes y sus fechas de expiración.

{{< code file="key-cert.sh" language="bash" options="" >}}
{{< code file="certbot-certificates.sh" language="bash" options="" >}}

Dado el relativo poco tiempo de validez de los certificados es recomendable automatizar la renovación empleando una [expresión cron](https://es.wikipedia.org/wiki/Cron_(Unix)). La utilidad _certbot_ solo hace la renovación del certificado cuando queda menos de un més para su expiración aunque se programe su ejecución en este caso cada 6 horas y en un minuto aleatorio que Let's Encrypt recomienda para que todos los usuarios no programen sus renovaciones al mismo tiempo:

{{< code file="cron.sh" language="bash" options="" >}}

Una vez que se ha renovado el certificado hay que reiniciar el servidor web para que lo utilice y para ello está el parámetro _\-\-renew-hook_ que ejecuta un comando cuando se produce una renovación. En el ejemplo anterior está el comando para reiniciar el servicio de nginx con el sistema gestión de procesos de [systemd][systemd].

Let's Encrypt con _certbot_ comprueba si somos el propietario de un sitio web instalando en el servidor web un archivo que posteriormente antes de generar el certificado lo valida. Este archivo para nginx se ubica en el directorio _/usr/share/nginx/html/.well-known/acme-challenge/_ y ha de estar accesible desde internet con el protocolo HTTP en la dirección _/.well-known/acme-challenge/_ del servidor web.

La siguiente configuración del servidor web nginx redirige todo el tráfico usando el procotolo HTTPS excepto el contenido del directorio _/.well-known/acme-challenge/_ que queda accesible por HTTP.

{{< code file="nginx.conf" language="plaintext" options="" >}}

Y este es el resultado al acceder con el navegador al sitio web que tengo instalado en una [Raspberry Pi][raspberrypi] accesible desde internet con un dominio de [FreeDNS][freedns]:

{{< image
    gallery="true"
    image1="image:smaug-1.png" optionsthumb1="300x200" title1="Sitio web con certificado de Let's Encrypt"
    image2="image:smaug-2.png" optionsthumb2="300x200" title2="Sitio web con certificado de Let's Encrypt"
    caption="Sitio web con certificado de Let's Encrypt" >}}

En la documentación del proyecto de Let's Encrypt hay explicaciones más detalladas sobre [como funciona](https://letsencrypt.org/how-it-works/), [límites de uso](https://letsencrypt.org/docs/rate-limits/), [como usarlo](https://certbot.eff.org/docs/using.html) y [varias guías según el servidor web y distribución GNU/Linux](https://certbot.eff.org/).

{{% /post %}}
