---
pid: 415
type: "post"
title: "Comprobar la seguridad de un sitio web que use SSL/TLS"
url: "/2019/06/comprobar-la-seguridad-de-un-sitio-web-que-use-ssl-tls/"
date: 2019-06-23T12:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:html.svg"
tags: ["planeta-codigo", "seguridad", "software", "web"]
---

{{% post %}}

Aunque un sitio web no trate datos sensibles como tarjetas de crédito o datos personales es muy recomendable que use el protocolo seguro HTTPS para proporcionar cifrado entre el servidor y el navegador del usuario para dotar de confidencialidad a las comunicaciones a la vez que evitar modificaciones por terceras personas de los datos transmitidos. Además, el buscador Google lo tiene en cuenta para el SEO o posicionamiento en su buscador.

Para usar HTTPS lo difícil era conseguir un certificado firmado por una autoridad de confianza que los navegadores tengan instalada, la obtención y renovación de un certificado tenía un coste. Desde hace un tiempo la autoridad [Let's encrypt][letsencrypt] emite certificados digitales gratuitamente que proporciona uno en pocos minutos y de forma automatizada incluida la renovación para usar un protocolo seguro. [Usar un certificado de Let's encrypt en el servidor web nginx][blogbitix-252] no es complicado.

Sin embargo, usar HTTPS simplemente no es suficiente y ha de configurarse el servidor web para que utilice algoritmos de cifrado fuertes y que no tengan problemas seguridad conocidos o hoy estén ya considerados débiles. Para analizar el nivel de seguridad proporcionado en las conexiones HTTPS de un servidor web se puede utilizar la herramienta [Qualys SSL Labs](https://www.ssllabs.com/). Por ejemplo, analizando la seguridad del protocolo HTTPS ofrecido por [GitHub Pages][github-pages] basta con introducir el dominio a analizar.

El informe que proporciona incluye información sobre el certificado del servidor entre ella su tiempo de validadez y fecha de expiración, y si es de confianza para los navegadores y plataformas como Mozilla, Apple, Android, Java o Windows. Los datos de configuración como protocolos soportados, _cipher suites_ y una simulación de _handshake_ con una gran variedad de versiones de navegadores en diferentes plataformas y versiones incluyendo dispositivos móviles y de escritorio que permite conocer si algún dipositivo pudiera tener algún problema con la configuración de TLS en la conexión, también otros detalle del protocolo.

{{< image
    gallery="true"
    image1="image:ssllabs.png" optionsthumb1="650x450" title1="Informe de seguridad TLS"
    caption="Informe de seguridad TLS" >}}

La herramienta proporciona una nota entre A y F siendo la A la mejor calificación posible. Como se observa en la captura para GitHub Pages la herramienta proporciona una calificación de A.

Hay múltiples combinaciones de algoritmos de cifrado o _cipher suites_ usados en una conexión SSL/TLS. La primera parte de los siguientes se refieren a TLS, está el tamaño de la clave y el modo y el algoritmo de autenticación del mensaje. Algunas recomendaciones de uso es usar tamaños de clave de más de 128 bits, evitar usar RC4, DES y 3DES, preferir ECDHE y DHE ya que ofrecen _forward secrecy_ que protege las comunicaciones pasadas aún habiéndose comprometida la clave privada del servidor.

* TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384
* TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384
* TLS_RSA_WITH_AES_256_CBC_SHA256
* TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384
* TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384
* TLS_DHE_RSA_WITH_AES_256_CBC_SHA256
* TLS_DHE_DSS_WITH_AES_256_CBC_SHA256
* TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
* TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
* TLS_RSA_WITH_AES_256_CBC_SHA
* TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA
* TLS_ECDH_RSA_WITH_AES_256_CBC_SHA
* TLS_DHE_RSA_WITH_AES_256_CBC_SHA
* TLS_DHE_DSS_WITH_AES_256_CBC_SHA
* TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256

Y algunas propiedades de los servidores web [Apache HTTP][apache-httpd] y [nginx][nginx] que afectan a los algoritmos de cifrado soportados son las siguientes. Algunos navegadores antiguos puede que no soporten los últimos algoritmos de cifrado por lo que hay que permitir en el servidor web unos que sean considerados como seguros pero que también soporten los navegadores de los usuarios del sitio web. 

* [Apache Module mod_ssl](https://httpd.apache.org/docs/current/mod/mod_ssl.html)
* [Nginx Module ngx_http_ssl_module](https://nginx.org/en/docs/http/ngx_http_ssl_module.html)

Uan vez configurada la seguridad con TLS/SSL es recomendable [redirigir el tráfico del protocolo HTTP no seguro al protocolo HTTPS seguro][blogbitix-151].

{{% /post %}}
