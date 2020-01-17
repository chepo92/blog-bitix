---
pid: 133
type: "post"
title: "Cómo firmar correos electrónicos con GPG y JavaMail"
url: "/2016/03/como-firmar-correos-electronicos-con-gpg-y-javamail/"
date: 2016-03-19T10:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion", "seguridad"]
summary: "El correo electrónico es un medio muy utilizado para realizar ataques de _phising_, algunos son muy burdos pero seguramente algunos usuarios sin muchos conocimientos caen víctimas de ellos y aún los usuarios con conocimientos también pueden serlo si están bien realizados y muestran un correo electrónico exactamente igual que el que intentan suplantar. Los usuarios son las víctimas pero si los sitios web que envían los correos electrónicos legítimos los firmasen digitalmente sería una garantía más para proteger a sus usuarios, pudiendo detectar de otra forma el _spam_ y _phising_. En este artículo muestro a modo de ejemplo como firmar un correo electrónico con GPG y JavaMail e igualmente podría utilizarse para cifrarlo, aunque usar DKIM sería lo más apropiado."
---

{{% post %}}

{{< logotype image1="java.svg" image2="gnupg.svg" title2="GnuPG" width2="200" >}}

Los sitios de comercio electrónico y muchas páginas web utilizan el [protocolo seguro HTTPS][https] para cifrar los datos intercambiados entre cliente y servidor impidiendo a una tercera persona conocer qué información se está transmitiendo, además impide que puedan ser alterados sin su conocimiento. Es habitual usar HTTPS y certificados en las páginas de compra en las que hay que introducir datos personales junto con la tarjeta de crédito también en las cuentas de usuario como forma de proporcionar seguridad y proteger la información personal. Generando y usando [certificados TLS/SSL en el servidor][blogbitix-14] el sitio y el usuario evitan caer en un ataque de _phising_ en la que una tercera persona con intenciones maliciosas intenta suplantar la identidad del sitio web.

Pero los [ataques de _phising_][phishing] también son realizados a través del correo electrónico, mensajes en los que se incluyen enlaces hacia páginas que suplantan a un sitio. Algunos usuarios quizá no se den cuenta de la suplantación al hacer clic en los enlaces maliciosos. Los motores de búsqueda mantendrán a los usuarios a salvo de enlaces maliciosos en las páginas de resultados que les lleven a páginas de _phising_, pero no del correo electrónico que si no es detectado como _spam_ llegará a la bandeja de entrada de los usuarios. El correo electrónico es una vía para llevar a los usuarios hacia esas páginas de _phising_. Para evitar este posible peligro no todos los sitios web y de comercio electrónico son los que firman sus mensajes como forma de verificar la autenticidad de los mismos así como evitar que pueda ser modificados sin conocimiento.

Con [GPG][gnupg] y [JavaMail][javamail] podemos firmar los mensajes electrónicos que enviemos desde una aplicación Java. La firma de un correo electrónico consiste baśicamente en firmar el contenido del mensaje y adjuntar la firma como un documento adjunto con un _mimetype_ de _application/pgp-signature_. Lo primero que deberemos hacer es [generar un par de claves de cifrado asimétrico usando GPG][blogbitix-13]. Si los mensajes los vamos a enviar usando un cuenta de [gmail][google-gmail] y tenemos activada la verificación en dos pasos debemos genera una contraseña de aplicación desde [Mi cuenta de Google][google-myaccount].

Además de cómo firmar un correo electrónico el siguiente ejemplo muestra [cómo ejecutar un proceso del sistema en Java][blogbitix-132] que nos proporciona acceso a todas las utilidades GNU, scripts de [Python][python] u otros comandos que tenga instalados, también muestra [cómo enviar un correo electrónico en un programa Java][elblogdepicodev-50] que ya comenté pero ahora con un ejemplo ejecutable y enviando un archivo adjunto.

{{< code file="Main.java" language="java" options="" >}}

En este ejemplo solo se firma el contenido del mensaje quedando fuera de la firma el asunto, fecha, otros adjuntos y destinatarios del mensaje pero podría utilizarse lo mismo para firmar estos otros datos. Enviado el correo electrónico podemos verificar la firma con el siguiente comando de GPG.

{{< code file="gpg-verify.sh" language="bash" options="" >}}
{{< code file="email.txt" language="plaintext" options="" >}}
{{< code file="signature.asc.txt" language="plaintext" options="" >}}
{{< code file="email-original.txt" language="plaintext" options="" >}}

{{< image
    gallery="true"
    image1="image:gpg-verify.png" optionsthumb1="300x200" title1="Verificación de la firma GPG del correo electrónico"
    caption="Verificación de la firma GPG del correo electrónico" >}}

En el anillo de claves de GPG la clave que usemos para firmar no ha de tener _passphrase_ de lo contrario cuando se ejecute el comando GPG la solicitará en una ventana emergente. Aunque con las opciones `--passphrase` y `--batch` no debería solicitarla no he conseguido evitarlo.

{{< sourcecode git="blog-ejemplos/tree/master/JavaMailGPG" command="./gradlew --daemon run -Pargs=\"[contraseña de aplicación de cuenta gmail]\"" >}}

Las suplantaciones mediante correo electrónico son y seguirán siendo habituales si no son detectadas como _spam_. Después de escribir este artículo usar [<abbr title="DomainKeys Identified Mail">DKIM</abbr>](https://es.wikipedia.org/wiki/DomainKeys_Identified_Mail) parece ser la forma adecuada de firmar y cifrar los correos electrónicos y viendo el mensaje original de los que envían [Google][google] y [Amazon][amazon] es lo que utilizan ellos que algo sabrán de esto. Usar DKIM en los correos electrónicos será tema para otro posible artículo, la [nube de Amazon ofrece soporte para DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html).

{{< code file="email-dkim.txt" language="plaintext" options="" >}}

{{< reference >}}
* [Introducción a la criptografía e inicio con GPG ][elblogdepicodev-181]
* [Enviar correos electrónicos mediante Java Mail ][elblogdepicodev-50]
* [Generar y convertir claves y certificados con OpenSSL][blogbitix-13]
* [Configurar SSL/TLS en un servidor Tomcat, JBoss, WildFly, Lighttpd, Nginx o Apache][blogbitix-14]
* [Easy DKIM in Amazon SES](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html)
{{< /reference >}}

{{% /post %}}
