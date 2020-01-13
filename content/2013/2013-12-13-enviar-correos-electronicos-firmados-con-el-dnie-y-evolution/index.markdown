---
pid: 2
type: "post"
title: "Enviar correos electrónicos firmados con el DNIe y Evolution"
url: "/2013/12/enviar-correos-electronicos-firmados-con-el-dnie-y-evolution/"
date: 2013-12-13T16:39:07+01:00
updated: 2015-05-28T20:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:archlinux.svg"
tags: ["planeta-codigo", "software-libre", "hardware", "software"]
---

{{% post %}}

{{< logotype image1="archlinux.svg" title1="Arch Linux" width1="200" image2="dnie.jpg" title2="DNIe" width2="200" >}}

Otra forma de la que podemos sacar partido al DNI electrónico además de para [identificarnos en sitios web][blogbitix-1] que lo soporten como medio de autenticación es usarlo para firmar digitalmente los correos electrónicos que enviamos. Ya he comentado [como firmar correos electrónicos con GPG][elblogdepicodev-182] pero hacerlo con el DNI electrónico tiene la ventaja de que no necesitaremos [crear una par de claves GPG][elblogdepicodev-181] sino que con tener el DNI e [instalar un lector de tarjetas inteligentes][elblogdepicodev-183] será suficiente.

En esta entrada explicaré como usar el DNI electrónico para firmar digitalmente correos usando el cliente de correo [Evolution](https://projects.gnome.org/evolution/). Primeramente necesitaremos hacer una configuración adicional a la que hemos necesitado para poder usar el lector de tarjetas inteligentes y el DNIe en Linux. Y es usar el siguiente comando tal y como está comentado en [esta página](https://forja.cenatic.es/plugins/mediawiki/wiki/opendnie/index.php/Documentacion_Aplicaciones_Evolution#Configuraci.C3.B3n_del_DNIe_en_el_cliente_de_correo_Evolution) cambiando el directorio home del usuario por el que corresponda:

{{< code file="comando-opensc-dnie.sh" language="bash" options="" >}}

A continuación, el proceso es similar a como se configura la firma con claves GPG, con el lector de tarjetas inteligentes conectado al equipo y el DNI electrónico introducido accedemos a las propiedades de la cuenta, a la sección seguridad y en el apartado MIME seguro (S/MIME) seleccionamos nuestro certificado. Si queremos que nuestros mensajes se firmen automaticamente debemos marcar la opción «Firmar siempre los mensajes salientes cuando se use esta cuenta». Habiendo ejecutado el comando modutil cuando pulsemos el botón seleccionar en el apartado S/MIME se nos solicitará el PIN secreto de nuestro DNIe.

{{< image
    gallery="true"
    image1="image:pin.png" optionsthumb1="300x200" title1="Diálogo de solicitud de PIN con el DNIe"
    image2="image:seleccion-certificado.png" optionsthumb2="300x200" title2="Selección de certificado digital con el DNIe" >}}
{{< image
    gallery="true"
    image1="image:seguridad-evolution.png" optionsthumb1="300x200" title1="Diálogo de preferencias de seguridad de Evolution para el DNIe" >}}

Una vez con las propiedades de la cuenta configurada para que Evolution use nuestro DNI electrónico, si no hemos marcado la opción «Firmar siempre los mensajes...» podemos realizarlo al escribir el propio correo marcando la opción «Opciones> Firmar con S/MIME». Al enviar un correo electrónico firmado se añadirá automáticamente un adjunto con la firma de nombre «smime.sp7». Al contrario que GPG la firma está en un formato binario y es dificilmente legible con un lector de texto plano.

{{< image
    gallery="true"
    image1="image:confimacion-firma.png" optionsthumb1="300x200" title1="Confirmación de firma digital con el DNIe"
    image2="image:mensaje-firmado-dnie.png" optionsthumb2="300x200" title2="Mensaje firmado con el DNIe" >}}

{{< reference >}}
* [Crear una par de claves GPG][elblogdepicodev-181]
* [Como firmar correos electrónicos con GPG][elblogdepicodev-182]
* [Instalar un lector de tarjetas inteligentes y usar el DNIe en Arch Linux ][elblogdepicodev-183]
* [Usar el DNI electrónico con Firefox en Linux][blogbitix-1]
* [Firmar digitalmente documentos con el DNIe y Sinadura][blogbitix-3]
{{< /reference >}}

{{% /post %}}
