---
pid: 77
type: "post"
title: "Certificado SSL, de empresa, «wildcard» y de validación extendida"
url: "/2015/04/certificado-ssl-de-empresa-wildcard-y-de-validacion-extendida/"
date: 2015-04-25T10:07:04+02:00
updated: 2015-04-25T12:00:00+02:00
rss: true
sharing: true
comments: true
tags: ["programacion", "seguridad", "planeta-codigo", "web"]
---

{{% post %}}

Usar un protocolo seguro garantiza de que los datos intercambiados entre el cliente y el servidor no son leídos ni modificados por una tercera parte además de verificar que la comunicación se está realizando entre las partes que dicen ser. Para usar un [protocolo seguro como SSL/TLS][tls] debemos disponer de con certificado, [con OpenSSL podemos generar y convertirlo al formato que deseemos][blogbitix-13], sin embargo, para que el usuario tenga garantía de que el certificado es válido este se debe estar firmado por una [autoridad de certificación](https://es.wikipedia.org/wiki/Autoridad_de_certificaci%C3%B3n) (CA) en la que confíe, generalmente con una de las autoridades de certificación cuyos certificados están preinstalados en el navegador web (en Firefox podemos verlos en _Preferencias> Avanzado> Certificados> Ver certificados_), los certificados autofirmados son útiles para hacer pruebas pero no son válidos para los usuarios. En este artículo comentaré que tipos de certificados hay y donde podemos obtener o comprar un certificado digital firmado por una CA que sea de confianza para el usuario.

Los navegadores suelen indicar que se está usando una comunicación segura cuando en la barra de direcciones se muestra un candado y se está usando el protocolo https. Además, haciendo clic en el candado se pueden ver los detalles del certificado usado por el servidor para la comunicación cifrada.

{{< image
    gallery="true"
    image1="image:certificado-validacion-dominio.png" optionsthumb1="300x200" title1="Certificado SSL con validación de dominio" >}}
{{< image
    gallery="true"
    image1="image:certificado.png" optionsthumb1="300x200" title1="Datos de certificado de GitHub" >}}

Sin embargo, para proporcionar más seguridad y garantía de que como usuarios nos estamos comunicando con el servidor que creemos sin examinar el certificado algunos certificados permiten mostrar también en la barra de direcciones un recuadro verde con el nombre de la entidad, el recuadro verde que solemos ver también en la barra de direcciones al acceder a algunos dominios y que es proporcionado por certificados de validación extendida.

{{< image
    gallery="true"
    image1="image:certificado-validacion-extendida.png" optionsthumb1="300x200" title1="Certificado SSL con validación extendida" >}}

Por otra parte los certificados SSL se generan para un dominio en concreto con lo que en principio se debería comprar un certificado por cada dominio en el que deseemos usar una comunicación segura. Sin embargo, para evitar comprar múltiples certificados para los diferentes dominios o subdominios podemos comprar un certificado _wildcard_ que nos servirá para los subdominios (*.ejemplo.com) o un certificado multidominio (ejemplo.com, ejemplo.net, ...) para como su nombre indica varios dominios. En los certificados de empresa se solicitan datos datos adicionales al adquirirlo y en los detalles del certificado aparece el nombre de la empresa (campo Organización (O) como en el caso de GitHub).

Los certificados _wildcard_ y que muestran el recuadro verde son más caros pero pueden ser útiles sobre todo para una página de comercio electrónico, el recuadro verde añade más seguridad, seguramente mejore los ratios de conversión y evite [suplantaciones de identidad o _phising_](https://es.wikipedia.org/wiki/Phishing). Además, utilizar un protocolo seguro es un nuevo criterio que utiliza el buscador Google en su algoritmo para establecer el posicionamiento en la página de resultados. Con las intrucciones que incorporan los procesadores modernos el cifrado y descifrado de los datos no tiene por que significar un aumento de carga considerable para el servidor ni el cliente ni en dispositivos móviles.

¿Cómo obtener un certificado SSL firmado por una entidad raíz de certificación? Las entidades de registro de dominios aparte de dominios, _hosting_ virtual o privado algunos permiten comprar certificados SSL. Uno de los que conozco que permite comprar certificados SSL, de empresa, con recuadro verde o _wildcard_ es [DonDominio](http://www.dondominio.com/products/ssl/), otro es [Arsys](http://www.arsys.es/certificados-seguridad-ssl).

{{< image
    gallery="true"
    image1="image:certificados-dondominio.png" optionsthumb1="300x200" title1="Certificados DonDominio" >}}

En el caso de DonDominio dependiendo de la entidad emisora del certficado que deseemos variará el precio, también si queremos que tenga validación extendida o sea _wildcard_. En el caso de un certificado SSL simple que valide solo el dominio es de unos 5 €, de validación de empresa unos 28 €, un certificado de validación extendida con recuadro verde desde unos 126 € y un _certificado wildcard_ de desde unos 75 €. Estos son precios desde, diferentes opciones pueden salir bastante más caras y hay que tener en cuenta que son para una validez de una año, al igual que los dominios hay que renovar su uso.

Si no necesitamos el recuadro verde ni un certificado _wildcard_ una opción interesante es obtener uno gratis a través de [Lets Encrypt](https://letsencrypt.org/). Esta nueva entidad de certificación nos permitirá obtener uno sin coste, de forma sencilla y automatizada, detrás de esta entidad están organizaciones como [Linux Foundation][linux-foundation], [Mozilla][mozilla] o [CISCO][cisco].

Una vez obtenido el certificado debemos instalarlo en el servidor, en el artículo [Configurar SSL en un servidor Tomcat JBoss, Wildfly, Lighttpd, Nginx o Apache][blogbitix-14] comento como usar un certificado en los principales servidores web y de aplicaciones. Si necesitamos un formato concreto podemos [convertir el certificado con OpenSSL][blogbitix-13].

{{< reference >}}
* [Qué es un certificado SSL y por qué debería importarte](https://www.genbeta.com/seguridad/que-es-un-certificado-ssl-y-por-que-deberia-importarte)
{{< /reference >}}

{{% /post %}}
