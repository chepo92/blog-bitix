---
pid: 196
type: "post"
title: "Guardar contraseñas de forma segura con KeePassXC"
url: "/2016/11/guardar-contrasenas-de-forma-segura-con-keepassxc/"
aliases: ["/2016/11/guardar-contrasenas-de-forma-segura-con-keepassx/"]
date: 2016-11-26T11:00:00+01:00
updated: 2018-10-07T13:45:00+01:00
language: "es"
rss: true
sharing: true
comments: true
imagePost: "logotype:keepassxc.png"
tags: ["gnu-linux", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="keepassxc.png" title1="KeePassXC" width1="200" >}}

La mayor parte de servicios usan aún como forma de autenticación el método de usuario y contraseña. Si la contraseña proporcionada conocida solo por su usuario es correcta el sistema confía en que el usuario es quien dice ser. Las contraseñas deberían ser difíciles de averiguar, se recomienda que tenga una longitud mínima de 8 caracteres y que contenga letras en minúscula y mayúscula, números y símbolos. Sin embargo, cuanto más larga, fuerte y difícil sea de averiguar más difícil es recordarla.

Además, es muy recomendable utilizar una contraseña distinta en cada servicio para evitar que descubierta la contraseña por un fallo de seguridad en cualquiera en los que se use pueda accederse a todos los otros servicios que utilice ese usuario, por lo que el número de contraseñas a recordar son numerosas. Muchos usuarios terminan usando la misma contraseña en varios servicios con el riesgo que conlleva. Dado que recordar una contraseña única fuerte para cada servicio es difícil y mantenerlas guardadas en un archivo de texto o en un papel no es lo más recomendable se puede usar un programa que las almacene cifradas de forma segura.

Uno de estos programas es [KeePass][keepass], básicamente es una base de datos de contraseñas que se almacenan de forma segura y cifrada y protegidas por una contraseña maestra o para mayor seguridad con un archivo a modo de contraseña maestra. La información básica que se puede guardar es el nombre del servicio y su URL, el usuario en ese servicio y la contraseña. Se pueden agrupar y buscarlas con un campo que va encontrando las coincidencias a medida que se escribe.

En realidad de KeePass hay varias implementaciones, la original es KeePass implementada en C# y el framework .NET. Para evitar el framework .NET y hacarla multiplataforma se reimplementó con C++ y las librerías Qt, la nueva versión se denominó [KeePassX][keepassx]. Sin embargo, el desarrollo de KeePassX es lento y no incopora las mejoras que algunos usuarios proponían de modo que decidieron hacer un nuevo _fork_ dando lugar [KeePassXC][keepassxc].

Instalado el [paquete de KeePassXC](https://www.archlinux.org/packages/community/x86_64/keepassxc/) de nuestra distribución [GNU][gnu]/[Linux][linux] o el binario para nuestro sistema operativo lo primero que deberemos hacer es crear una base de datos que protegeremos con una contraseña maestra, se puede guardar la base de datos en un archivo en cualquier ubicación.

{{< code file="pacman.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:keepassxc-1.png" optionsthumb1="300x200" title1="KeePassXC"
    image2="image:keepassxc-2.png" optionsthumb2="300x200" title2="KeePassXC" >}}

Lo siguiente será crear una entrada con el usuario y contraseña de un servicio.

{{< image
    gallery="true"
    image1="image:keepassxc-4.png" optionsthumb1="300x200" title1="KeePassXC"
    image2="image:keepassxc-3.png" optionsthumb2="300x200" title2="KeePassXC" >}}

Una vez almacenada la credencial se puede copiar al portapapeles el usuario y contraseña para usarlas en la página de autenticación del servicio con unos botones en la parte superior a tal efecto. También se puede ver la contraseña no protegida con asteriscos sino los caracteres originales. Otra funcionalidad muy útil es la de realizar autoescritura que automatiza el introducir el usuario y contraseña en la página que solicita autenticación. Normalmente consiste en escribir la contraseña en un campo de entrada, pulsar la tecla tabulador para cambiar al campo de entrada de la contraseña, introducir la contraseña y pulsar la tecla _return_. Con KeePassXC se puede realizar todo esto con un par de pulsaciones de ratón.

{{< image
    gallery="true"
    image1="image:keepassxc-6.png" optionsthumb1="300x200" title1="Configuración de autoescritura" >}}

KeePassXC es una herramienta que no tiene más complejidad, podemos asociar alguna información más a la credencial con atributos adicionales y archivos adjuntos pero no es imprescindible. Por supuesto, tiene un generador de contraseñas muy útil con el que obtener contraseñas únicas para cada servicio con las propiedades de seguridad que se requiera en cuanto a longitud, caracteres especiales, mayúsculas, minúsculas y números.

{{< image
    gallery="true"
    image1="image:keepassxc-5.png" optionsthumb1="300x200" title1="Nueva contraseña" >}}

Si somos nosotros los que implementamos un servicio con el método de autenticación de usuario y contraseña deberíamos [almacenar las contraseñas de forma segura usando «password salted hasing»][blogbitix-75].

Otras formas de guardar las contraseñas es en un [archivo cifrado con GPG][elblogdepicodev-181] que desciframos cuando queramos usar alguna contraseña o en un [sistema de archivos cifrado como con EncFS][blogbitix-126] que lo montamos para acceder a archivo de texto con las contraseñas. [Strong Password Generator][strongpasswordgenerator] en una página web con la que podemos generar contraseñas usando estas mismas preferencias desde el navegador.

{{% /post %}}
