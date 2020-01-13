---
pid: 176
type: "post"
title: "Localización de un comando y paquete propietario de un archivo en GNU/Linux"
url: "/2016/09/localizacion-de-un-comando-y-paquete-propietario-de-un-archivo-en-gnu-linux/"
date: 2016-09-03T13:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:archlinux.svg"
tags: ["gnu-linux"]
---

{{% post %}}

{{< logotype image1="archlinux.svg" title1="Arch Linux" width1="250" >}}

Usando alguna distribución [GNU][gnu]/[Linux][linux] en algún momento nos interesará saber a qué paquete de los que tenemos instalados pertenece un determinado comando o a qué paquete pertenece un determinado archivo del sistema.

Para saber en qué paquete está un determinado archivo primero deberemos conocer la ruta absoluta del archivo en cuestión. Si se trata de un comando con el comando <code>which</code> conoceremos la ubicación absoluta. Por ejemplo, para conocer la ubicación de el comando <code>java</code> usamos:

{{< code file="which.sh" language="bash" options="" >}}

Conociendo la ruta absoluta del archivo y con el gestor de paquetes de la distribución podremos conocer en qué paquete está contenido y por qué paquete ha sido instalado o es su propietario. En [Arch Linux][archlinux] se averigua con el siguiente comando:

{{< code file="pacman-java.sh" language="bash" options="" >}}

En Arch Linux _java-runtime-common_ es un paquete que nos permite cambiar la versión de la máquina virtual a usar en el sistema pudiendo intercambiar entre Java 7 y Java 8, esto se realiza con algunos enlaces simbólicos.

{{< code file="ls.sh" language="bash" options="" >}}

Si queremos conocer el paquete del binario <code>java</code> usaremos la ruta absoluta en el comando para averiguarlo con el gestor de paquetes ya sea con <code>pacman</code> o <code>yaourt</code>:

{{< code file="pacman-java8.sh" language="bash" options="" >}}

En las distribuciones basadas en paquetes _.deb_ como [Debian][debian] o [Ubuntu][ubuntu] el comando es el siguiente:

{{< code file="dpkg.sh" language="bash" options="" >}}

Y en las distribuciones basadas en _.rpm_ como como [RedHat][rhel] y [Fedora][fedora]:

{{< code file="rpm.sh" language="bash" options="" >}}

{{% /post %}}
