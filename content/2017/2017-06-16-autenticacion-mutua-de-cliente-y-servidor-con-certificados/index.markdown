---
pid: 241
type: "post"
title: "Autenticación mutua de cliente y servidor con certificados"
url: "/2017/06/autenticacion-mutua-de-cliente-y-servidor-con-certificados/"
date: 2017-06-17T02:45:00+02:00
updated: 2017-06-18T23:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:openssl.svg"
tags: ["java", "planeta-codigo", "programacion", "seguridad", "web"]
---

{{% post %}}

{{< logotype image1="openssl.svg" title1="OpenSSL" width1="400" >}}

Los certificados no solo sirven para autenticar a un servidor o acceder solo a aquellos en los que confiamos. El servidor también puede autenticar a los clientes mediante un certificado como alternativa a usar un usuario y contraseña ya sea una autenticación _BASIC_ o un formulario personalizado. Al igual que en el cliente usa el certificado de la autoridad de certificación en la que confía para validar el que presenta el servidor, el servidor puede requerir que el cliente también proporcione un certificado que el servidor valida según las autoridades de certificación en las que confía, en ambos casos el servidor o cliente usan su clave privada para iniciar la conexión segura con el _handsake_ del [protocolo TLS][tls].

Para el ejemplo usaré un servidor web [nginx][nginx] ejecutado como un contenedor de [Docker][docker] configurado de tal manera que requiere autenticación para el cliente con certificados.

Inicialmente deberemos generar tres parejas de claves privadas y públicas, una para nuestra propia autoridad de certificación, una clave para el servidor y otra para el cliente. Al mismo tiempo generaré otras tres parejas de claves privadas y públicas para comprobar que cuando se proporciona un certificado incorrecto la autenticación falla.

{{< code file="openssl-genrsa.sh" language="bash" options="" >}}

{{< code file="ca.crt" language="plaintext" options="" >}}
{{< code file="ca.key" language="plaintext" options="" >}}
{{< code file="ca.pub" language="plaintext" options="" >}}

{{< code file="openssl-genrsa-unknown.sh" language="bash" options="" >}}

El siguiente paso es generar los certificados y firmar con la clave y certificado de la autoridad de certificado los certificados del servidor y cliente. Como paso previo a que la autoridad de certificación emita los certificados del servidor y cliente hay que generar una petición de firma de certificado, los archivos _.csr_.

{{< code file="openssl-req.sh" language="bash" options="" >}}
{{< code file="openssl-req-unknown.sh" language="bash" options="" >}}

Con la misma herramienta de [OpenSSL][openssl] es posible comprobar si un certificado es válido para una autoridad de certificación en la que se confía, para ello se usa el certificado raiz de la autoridad.

{{< code file="openssl-verify.sh" language="bash" options="" >}}
{{< code file="openssl-verify-unknown.sh" language="bash" options="" >}}

Para hacer que el servidor nginx requiera autenticación mediante certificados para el cliente hay que añadir un poco de configuración mediante las directivas _ssl_ donde se indica el certificado del servidor, la clave privada del servidor, el certificado de la autoridad de certificación contra la que se validarán los certificados de los clientes y finalmente la directiva que establece que se ha de verificar a los clientes mediante certificados.

{{< code file="nginx.conf" language="plaintext" options="" >}}

Con el siguiente archivo descriptor de [Docker Compose][docker-compose] y comando se inicia el servidor web nginx.

{{< code file="docker-compose.sh" language="bash" options="" >}}
{{< code file="docker-compose.yml" language="YAML" options="" >}}

Iniciado el servidor web ya se pueden realizar peticiones y el servidor y el cliente se autenticarán mutuamente. El servidor devolverá el código HTML de la página de bienvenida por defecto con las cabeceras del protocolo HTTP después de realizar el _handsake_ donde se valida el certificado del servidor.

{{< code file="curl.sh" language="bash" options="" >}}

Si se intenta realizar una petición sin certificado de cliente o con un certificado de cliente en el que no confié el servidor (que no esté firmado por la autoridad de certificación en la que confía) se devolverá un código de estado 400 que indica que la petición se ha rechazado. También el cliente advertirá si la autoridad de certificación en la que confía no valida el certificado del servidor con un error 400 y título _400 The SSL certificate error_.

{{< code file="curl-unknown.sh" language="bash" options="" >}}

El siguiente _script_ escrito en lenguaje [Groovy][groovy] muestra como desde un programa para la plataforma Java se realiza autenticación mutua y que error da cuando alguno de los certificados es inválido ya sea el del cliente o el del servidor. Generando previamente los _keystores_ de la autoridad de certificado y del cliente introduciendo como clave en el ejemplo _password_ cuando se solicita.

{{< code file="keytool.sh" language="bash" options="" >}}
{{< code file="MutualCertAuth.groovy" language="groovy" options="" >}}
{{< code file="groovy.sh" language="bash" options="" >}}

En caso de que al usar un _keystore_ con un certificado de una autoridad que no valida el certificado del servidor se producirán un error, también cuando el certificado del cliente no sea válido para el servidor.

{{< code file="groovy-unknown.sh" language="bash" options="" >}}

Lo anterior es usando la herramienta _curl_ o un un programa en la plataforma Java, en el caso de querer realizar autenticación mutua con un navegador web como [Firefox][firefox] hay que instalar el certificado del cliente y si es necesario el certificado de la autoridad de certificación para que el candado indicativo de la seguridad del protocolo HTTPS se muestre en verde y no indique ningún problema de seguridad en la autenticación del servidor. En Firefox los certificados se añaden en el menú _Preferencias > Avanzado > Ver certficados_. En la pestaña _Sus certificados_ hay que importar el certificado del cliente en formato _PKCS12_ y en la pestaña _Autoridades_ el certificado de la autoridad que haya firmado el certificado del servidor, con el botón _Importar_ se selecciona el archivo _crt_ de la autoridad. Al introducir la URL y realizar la petición Firefox solicita mediante un diálogo seleccionar el certificado a usar para realizar la autenticación en el servidor.

{{< image
    gallery="true"
    image1="image:firefox-bad-request.png" optionsthumb1="300x250" title1="Autenticación mutua fallida"
    image2="image:firefox-mutual-authorized.png" optionsthumb2="300x250" title2="Autenticación mutua correcta"
    image3="image:firefox-server-cert.png" optionsthumb3="300x250" title3="Certificado del servidor validado por la CA" >}}
{{< image
    gallery="true"
    image1="image:firefox-certs.png" optionsthumb1="300x250" title1="Certificados de cliente"
    image2="image:firefox-cas.png" optionsthumb2="300x250" title2="Certificados de la autoridades de certificación"
    image3="image:firefox-ca.png" optionsthumb3="300x250" title3="Añadir certificado de CA" >}}
{{< image
    gallery="true"
    image1="image:firefox-select-cert.png" optionsthumb1="300x250" title1="Selección de certificado de cliente"
    caption="Autenticación mutua de cliente y servidor con el navegador web Firefox" >}}

{{< sourcecode git="blog-ejemplos/tree/master/MutualCertAuth" command="docker-compose up, groovy MutualCertAuth.groovy" >}}

{{< reference >}}
* [Serie de artículos sobre Docker][blogbitix-serie-docker]
* [Guardar contraseñas usando «Salted Password Hashing» y otras formas correctas][blogbitix-75]
{{< /reference >}}

{{% /post %}}
