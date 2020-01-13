---
pid: 128
type: "post"
title: "Cifrar unidad USB completamente con dm-crypt y LUKS en GNU/Linux"
url: "/2016/02/cifrar-unidad-usb-completamente-con-dm-crypt-y-luks-en-gnu-linux/"
date: 2016-02-26T18:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo", "seguridad", "software-libre"]
summary: "¿Has perdido alguna vez una memoria USB? ¿sí, aún no? ¿qué datos contenía? Muy posiblemente son varias las memorias USB que tenemos, por su poco tamaño y cada vez mayor capacidad incluso llevaremos alguna en la cartera siempre con nosotros. Si quieres mantener a salvo los datos en caso de pérdida hay varias opciones, una para esta necesidad es cifrar completamente la unidad con dm-crypt junto con LUKS+Ext4 en GNU/Linux. Suena muy técnico pero es muy sencillo usando la aplicación Discos de GNOME y la seguridad de nuestra información aumentará notablemente."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Seguro que tienes varias memorias USB o discos duros externos con los que transportar información de un sitio a otro o como copia de seguridad. No sería extraño perder alguna de esas unidades en una biblioteca, universidad, aeropuerto, vía pública, metro, ... con toda la información que contengan como fotos y documentos con información personal accesible por cualquier persona que se encuentre esa unidad. Si queremos evitar este posible caso de que al perder la unidad USB que al final es lo de menos ya que se puede sustituir fácilmente toda la información este accesible podemos cifrar su contenido. Hay varias formas una [cifrando con GPG archivos individuales][elblogdepicodev-181], [cifrando con EncFS ciertas carpetas][blogbitix-126] y varios archivos a la vez o la unidad completa con [dm-crypt](https://wiki.archlinux.org/index.php/Dm-crypt) que será el caso de este artículo.

Usar GPG es incómodo si necesitamos cifrar múltiples archivos como sería el caso de una memoria USB, EncFS requiere introducir un comando para montar el sistema de archivos cifrado y no obligaremos a que todos los archivos estén cifrados, usando dm-crypt el sistema nos preguntará por la clave de cifrado al conectar la unidad USB y se encargará de hacer el cifrado y descifrado de forma automática y transparente, nosotros trabajaremos con los archivos y sus aplicaciones con normalidad sin ninguna necesidad especial. Además, no es complicado inicializar la unidad USB para que su contenido esté cifrado usando la [aplicación Discos de GNOME](https://es.wikipedia.org/wiki/GNOME_Disks).

Deberemos formatear la unidad por lo que previamente deberemos hacer una copia de seguridad de su contenido para no perderlo, en teoría desde Nautilus se puede hacer pero en mis pruebas me indicaba un error que usando la aplicación Discos no se produce.

{{< code file="error.txt" language="plaintext" options="" >}}

Iniciada la aplicación Discos e identificada y seleccionada la unidad USB que queremos cifrar usando el botón con el icono de una rueda dentada hacemos clic en la opción formatear partición. Se abrirá un diálogo emergente donde podremos seleccionar el sistema de archivos con el que queremos formatear la unidad, seleccionamos LUKS+Ext4, formato lento e introducimos una contraseña con cierta fortaleza que deberemos recordar (de longitud 8 o más que contenga letras en mayúsculas, minúsculas, números y símbolos como «!"·$%&/()=^*,.-;:_»). El formateo lento tardará más o menos tiempo dependiendo de la capacidad de la unidad pero es aconsejable realizarlo para evitar que con [herramientas de recuperación de archivos como Foremost][blogbitix-125] alguien pueda extraer algún tipo de documento usándola a pesar de en teoría haber sido eliminado, otra forma de evitarlo es [eliminar ciertos o todos los archivos de forma segura][blogbitix-130]. En una unidad sin cifrar es sorprendente la cantidad de archivos que se puede recuperar usando [Foremost](https://wiki.archlinux.org/index.php/Foremost) de los que en algún momento estuvieron.

{{< image
    gallery="true"
    image1="image:discos.png" optionsthumb1="300x200" title1="Aplicación Discos de GNOME"
    image2="image:opciones-formato.png" optionsthumb2="300x200" title2="Opciones formateo unidad" >}}

Formateada la unidad con LUKS+Ext4 al conectarla al equipo o montarla el entorno de escritorio nos preguntará por la contraseña con un diálogo.

{{< image
    gallery="true"
    image1="image:contrasena.png" optionsthumb1="300x200" title1="Diálogo solicitud contraseña" >}}
{{< image
    gallery="true"
    image1="image:unidad-cifrada.png" optionsthumb1="300x200" title1="Unidad cifrada en Nautilus"
    image2="image:unidad-descifrada.png" optionsthumb2="300x200" title2="Unidad BMOVE ROJO descifrada en Nautilus" >}}

Introducida la contraseña veremos los archivos originales y podremos trabajar con ellos con normalidad como si no estuviesen cifrados. En la [wiki de Arch Linux][archlinux-wiki] hay varios artículos explicando en que consiste dm-crypt y los comandos que deberíamos usar desde la terminal, los artículos en el apartado de referencia del final de este artículo. Cifrar la unidad completamente con cm-crypt y LUKS+Ext4 es perfectamente compatible con usar EncFS, es decir, podemos usar dm-crypt en la unidad y en ella que ya está cifrada [almacenar un sistema de archivos también cifrado con EncFS][blogbitix-126].

Son increíbles las opciones que uno va descubriendo del software libre de GNU/Linux y esta es una con la que haremos nuestras unidades USB y los preciados datos que contienen bastante más seguras y a salvo en caso de pérdida o robo. Y esto es solo una muestra, con dm-crypt es posible hacer muchas más cosas que con curiosidad puedes descubrir en la wiki de Arch Linux.

{{< reference >}}
* [Cómo recuperar archivos eliminados o de una unidad corrupta en GNU/Linux][blogbitix-125]
* [Cifrar archivos con EncFS en GNU/Linux][blogbitix-126]
* [Cómo eliminar de forma segura archivos con wipe en GNU/Linux][blogbitix-130]
* [Encrypting a non-root file system](https://wiki.archlinux.org/index.php/Dm-crypt/Encrypting_a_non-root_file_system)
* [Dm-crypt](https://wiki.archlinux.org/index.php/Dm-crypt)
* [Disk encryption](https://wiki.archlinux.org/index.php/disk_encryption)
* [Drive preparation](https://wiki.archlinux.org/index.php/Dm-crypt/Drive_preparation)
* [Device encryption](https://wiki.archlinux.org/index.php/Dm-crypt/Device_encryption)
{{< /reference >}}

{{% /post %}}
