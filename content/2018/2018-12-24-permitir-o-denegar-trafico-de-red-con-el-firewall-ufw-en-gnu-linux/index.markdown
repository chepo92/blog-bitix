---
pid: 369
type: "post"
title: "Permitir o denegar tráfico de red con el firewall UFW en GNU/Linux"
url: "/2018/12/permitir-o-denegar-trafico-de-red-con-el-firewall-ufw-en-gnu-linux/"
aliases: ["/2018/12/impedir-o-permitir-trafico-de-red-con-el-firewall-ufw-en-gnu-linux/"]
date: 2018-12-24T13:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo", "software-libre"]
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Un cortafuegos o _firewall_ hace que un sistema sea más seguro analizando todo el tráfico de red que se recibe y envía impidiéndolo o permitiéndolo según las reglas que se hayan definido. Aunque los _routers_ con los que nos conectamos a internet también hacen la función de _firewall_ es aconsejable instalar un cortafuegos en cada sistema, sobre todo en sistemas portátiles que podemos conectar a redes WIFI ajenas a las que pueden conectarse al mismo tiempo otros muchos usuarios que desconocemos.

En [GNU][gnu]/[Linux][linux] un _firewall_ con el que las reglas de tráfico de red se puede definir de forma sencilla es _Uncomplicated Firewall_ o UFW. En la distribución [Arch Linux][archlinux] hay que instalar su paquete y habilitarlo para que se inicie con el sistema.

{{< code file="pacman.sh" language="bash" options="" >}}
{{< code file="ufw-enable.sh" language="bash" options="" >}}

En la [wiki de Arch Linux][archlinux-wiki] hay una buena página explicativa de su uso.

* [Arch Linux Wiki Uncomplicated Firewall](https://wiki.archlinux.org/index.php/Uncomplicated_Firewall)

Instalado y activado hay que definir las reglas de tráfico permitidas. Por defecto, se deniega el tŕafico proveniente de un sistema que no sea el local. Por ejemplo, con el cortafuegos activado para que un servidor web sea accesible desde otro equipo en la misma red o desde internet hay crear una regla que permita todo el tráfico entrante los puertos por defecto _80_ para _http_ y _443_ para _https_.

{{< code file="ufw-allow-1.sh" language="bash" options="" >}}

Para permitir acceso al servidor web únicamente desde la red local a la que está conectado el equipo hay que indicar la dirección IP de la red, los casos habituales son _192.168.0.0/24_ o _192.168.1.0/24_. En vez de usar la directiva _allow_ se puede emplear la directiva _deny_ para denegar el tráfico.

{{< code file="ufw-allow-2.sh" language="bash" options="" >}}

Definidas algunas reglas se pueden listar y de forma numerada en el caso de querer eliminar alguna.

{{< code file="ufw-status-1.sh" language="bash" options="" >}}

Para eliminar reglas hay que hacerlo según su número de la lista anterior.

{{< code file="ufw-delete.sh" language="bash" options="" >}}

Ciertas aplicaciones usan un puerto conocido como el ejemplo de servidor web en el puerto _443_ o _80_, SSH en el _22_ o descarga y compartición de archivos mediante P2P por Bittorrent que dependiendo de la aplicación se usa uno u otro, en el caso de [Transmission][transmissionbt] es _51413_. Sabiendo la aplicación para la que se quiere permitir el tráfico no es necesario conocer su puerto, ufw ya incorpora varias aplicaciones conocidas que se listan y activan con un comando.

{{< code file="ufw-app-list.sh" language="bash" options="" >}}
{{< code file="ufw-app-allow.sh" language="bash" options="" >}}

En el caso de este ejemplo se permite el tráfico para la aplicación Transmission desde cualquier ordenador y a las aplicaciones de servidor web tanto en el puerto seguro como inseguro y en el puerto _8080_ que usan algunos servidores de aplicaciones limitando su acceso únicamente desde la red local.

{{< code file="ufw-status-2.sh" language="bash" options="" >}}

Los comandos anteriores aunque cambiando los valores de los puertos o dirección IP son suficientes para hacer un sistema más seguro no permitiendo tráfico de red y evitando que se puedan establecer conexiones desde otro sistema en la misma red de área local a ciertos puertos de red abiertos sin ser conscientes de que los están.

En algunos casos como usando una [Raspberry Pi][raspberrypi] sin interfaz gráfica para minimizar el consumo de recursos es necesario conocer o consultar los comandos de ufw.

{{< reference >}}
* [Ubuntu UFW](https://help.ubuntu.com/community/UFW)
{{< /reference >}}

{{% /post %}}
