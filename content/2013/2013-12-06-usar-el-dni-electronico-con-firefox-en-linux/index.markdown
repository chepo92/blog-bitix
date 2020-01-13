---
pid: 1
type: "post"
title: "Usar el DNI electrónico con Firefox en Linux"
url: "/2013/12/usar-el-dni-electronico-con-firefox-en-linux/"
date: 2013-12-06T14:07:58+01:00
updated: 2015-04-10T20:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:archlinux.svg"
tags: ["planeta-codigo", "software-libre", "hardware", "software"]
---

{{% post %}}

{{< logotype image1="archlinux.svg" title1="Arch Linux" width1="200" image2="dnie.jpg" title2="DNIe" width2="200" >}}

Una vez hemos conseguido [instalar el DNIe en Linux][blogbitix-1] correctamente podemos empezar a darle alguna utilidad más allá de cuando se nos require para acreditar nuestra identidad. Como veremos en esta entrada podemos usar el DNI electrónico para hacer varios trámites administrativos y consultas con la administración pública, empresas o entidades que en su web soporten el DNIe como medio de autenticación.

En esta entrada explicaré como usar el DNIe electrónico con la combinación del navegador [Firefox][firefox] y [Linux][linux]. Para ello primeramente debemos hacer que Firefox detecte el lector de tarjetas inteligentes, desde el menú de Firefox vamos a «Preferencias> Avanzado> Certificados> Dispositivos de seguridad».

{{< image
    gallery="true"
    image1="image:preferencias-firefox.png" optionsthumb1="300x200" title1="Preferencias de Firefox"
    image2="image:administrador-dispositivos-1.png" optionsthumb2="300x200" title1="Administrador de dispositivos (1)" >}}
{{< image
    gallery="true"
    image1="image:administrador-dispositivos-2.png" optionsthumb1="300x200" title1="Administrador de dispositivos (2)" >}}

En esta pantalla pulsamos el botón «Cargar» e introducimos los siguientes datos:

* Nombre del módulo: podemos poner cualquier cosa que nos sirva para identificar el lector de tarjetas inteligentes como «Smart Card», «Lector de tarjetas inteligentes» o «PKCS#11» como le he puesto y se ve en la imagen.
* Archivo del módulo: en el caso de Arch Linux debemos poner «/usr/lib/opensc-pkcs11.so», en otras distribuciones será algo similar si no es lo mismo.

Pulsamos «Aceptar», salimos del diálogo «Dispositivos de seguridad» y reiniciamos Firefox. Para que Firefox reconoza el lector junto con el DNIe este debe estar introducido al iniciarlo sino no se nos aparecerá el diálogo solicitando el PIN del DNIe en el momento de la autenticación y no podremos usarlo, esto es así posiblemente por algún tipo de circunstancia que impide detectar el DNIe en el momento de introducirlo en Firefox, sabiéndolo no supone mayor problema. Por lo demás, esa es toda la configuración adicional necesaria para usar el DNIe con Firefox.

{{< image
    gallery="true"
    image1="image:lector-dnie.jpg" optionsthumb1="300x200" title1="Lector de tarjetas inteligentes y DNIe"
    image2="image:dnie.jpg" optionsthumb2="300x200" title2="DNI electrónico" >}}

Para probar que tenemos instalado el DNIe crrectamente y que Firefox es capaz de utilizarlo podemos usar la [página preparada para probar el DNI](http://www.dnielectronico.es/como_utilizar_el_dnie/verificar.html). Al final de la misma hay un enlace «Comprobación de certificados» que deberemos pulsar, se nos pedirá el PIN y si todo es correcto veremos una página con diversa información de nuestro DNI.

Con el DNI electrónico preparado podemos hacer distintos tipos de trámites o consultas, por ejemplo, muchos bancos ofrecen medios para acceder de forma electrónica, online y mediante un navegador la consulta del saldo de nuestras cuentas y operaciones que se han realizado o para hacer transferencias. Alguno de los que he visto que soportan el DNIe como medio de autenticación son [BBK](https://portal.bbk.es), [Santander](https://www.bancosantander.es) y el infame [Bankia](http://www.bankia.com/es/), seguro que hay unos cuantos más. También otro tipo de consulta que podemos hacer es consultar los puntos de carnet de conducir que poseemos.

{{< image
    gallery="true"
    image1="image:bbk-dnie.png" optionsthumb1="300x200" title1="Autenticación BBK con DNIe"
    image2="image:dgt-puntos-carnet.jpg" optionsthumb2="300x200" title2="Consultar puntos cárnet DGT" >}}

Independientemente del trámite que hagamos el proceso es el mismo si se permite la autenticación mediante DNIe, conectamos el lector de tarjetas inteligentes por USB a nuestro ordenador, introducimos el DNIe, iniciamos Firefox y accedemos con él a la página donde se ofrece hacer la consulta o trámite. Hay que tener en cuenta que deberemos tener iniciado el servicio o demonio pcscd, manualmente o con el inicio del sistema ([consultar la guía de instalación del DNIe en Linux][elblogdepicodev-183]).

En algún momento en el proceso de autenticación se nos pedirá el PIN secreto que posibilita usar el DNIe, apareciéndonos una ventana similar a la siguiente para introducirlo.

{{< image
    gallery="true"
    image1="image:pin.png" optionsthumb1="300x200" title1="Diálogo de solicitud de PIN con el DNIe" >}}

El PIN secreto de nuestro DNI se facilita en el momento de solicitar o renovar el documento nacional de identidad, es proporcionado en un documento como el siguiente.

{{< image
    gallery="true"
    image1="image:documento-pin-dnie-1.jpg" optionsthumb1="300x200" title1="Documento con el PIN del DNIe (1)"
    image2="image:documento-pin-dnie-2.jpg" optionsthumb2="300x200" title2="Documento con el PIN del DNIe (2)" >}}

Al introducir el PIN hay que poner cuidado y atención, suelen ser unos cuantos números, letras y caracteres especiales que hay que teclear correctamente. Disponemos varios intentos para introducirlos correctamente, al tercero fallido el DNIe se bloqueará y tendremos que acudir a la oficina de expedición de nuestra ciudad para desbloquearlo, también podremos acudir a él para cambiar el PIN. Una vez introducido correctamente podremos continuar con nuestra consulta o trámite.

En definitiva, el DNIe puede evitarnos algún viaje a alguna ventanilla y podemos hacer el trámite las 24 horas sin hacer colas.

{{< reference >}}
* [Configuración del DNI electrónico en Mozilla / Firefox](http://web.cenatic.es/dnie/index.php?option=com_content&view=article&id=104&Itemid=139)
* [Instalar un lector de tarjetas inteligentes y usar el DNIe en Arch Linux][elblogdepicodev-183]
* [Enviar correos electrónicos firmados con el DNIe y Evolution][blogbitix-2]
* [Crear una par de claves GPG][elblogdepicodev-181]
* [Como firmar correos electrónicos con GPG][elblogdepicodev-182]
{{< /reference >}}

{{% /post %}}
