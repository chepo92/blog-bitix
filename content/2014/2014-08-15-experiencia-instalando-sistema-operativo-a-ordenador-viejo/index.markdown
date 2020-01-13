---
pid: 37
type: "post"
title: "Experiencia instalando sistema operativo a ordenador viejo"
url: "/2014/08/experiencia-instalando-sistema-operativo-a-ordenador-viejo/"
date: 2014-08-15T09:18:07+02:00
updated: 2015-04-10T20:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:archlinux.svg"
tags: ["gnu-linux", "opinion", "software", "software-libre"]
---

{{% post %}}

{{< logotype image1="archlinux.svg" title1="Arch Linux" width1="250" >}}

Hace unos meses como suele ser habitual en los informáticos me pidieron que formatease e instalase los programas necesarios en un ordenador portátil, más concretamente en un ordenador que a la velocidad que evoluciona la tecnología podría considerarse obsoleto. El modelo exacto era un Acer Aspire 2000 diseñado para Windows XP con las siguientes características:

* CPU: Intel Pentium M (i686)
* Memoria: 1 GiB
* Pantalla: 15.4", 1280 x 800
* Tarjeta gráfica: ATI Radeon 9200 (64 MiB)
* WiFi: 802.11b
* [Características Acer Aspire 2000 completas](http://www.miniputer.com/Acer/Aspire_2000.html)

Como puede verse por las características no es un ordenador muy potente para los días de hoy pero que puede ser suficiente para navegar por internet, ver vídeos, escuchar música y realizar tareas ofimáticas.

Teniendo claro las características del ordenador y el uso que se le iba a dar me tocaba decidir que sistema operativo le iba a instalar. La primera opción que consideré por ser la opción que usaba el portátil de fábrica fue instalarle Windows XP (por supuesto usando una copia sin la correspondiente licencia) pero una vez instalado comenzaron los problemas para que todo funcionase correctamente, la gráfica no era detectada y la pantalla se mostraba en una resolución menor que la que ofrecía la pantalla, la conexión WiFi no funcionaba por no tener los controladores necesarios y tampoco el sonido por el mismo motivo. A pesar de haber buscado no conseguí encontrar los controladores adecuados tanto para la tarjeta gráfica como para la WiFi con lo que el sistema resultante iba a quedar menos aprovechado de lo que pudiera.

Viendo que el resultado con Windows no era nada satisfactorio y que estoy convencido del uso del software libre empecé a buscar alguna distribución ligera que pudiese usar. Algunas de las que probé fueron [gNewSense][gnewsense], luego [trisquel][trisquel], también [Mint][linuxmint] pero gNewSense usaba versiones de software algo antiguas y trisquel y Mint Xfce requería del procesador que tuviese PAE (o no lo detectaba). Al final pensé algo que antes de hacerlo me pareció descabellado, instalar [Arch Linux][archlinux]. Al ser Arch Linux una distribución rolling release y con el software siempre actualizado a las últimas versiones no sabía si iba a funcionar correctamente en un equipo antiguo. Pero sorprendentemente el CD de instalación de Arch no se me quejó por el PAE y aunque la instalación me fue lenta al tener que descargar los paquetes de internet y se descargaban a baja velocidad por algún motivo finalmente completé la instalación sin ningún problema. Después de la instalación base le instalé [Xfce] y como gestor de entorno de escritorio e inicio de sesión le puse [SLiM][slim]. Una vez con el entorno de escritorio Xfce le instalé los programas: el navegador firefox, geary como gestor de correo, VLC para reproducir vídeos y música. Todo sin ningún problema incluso la WiFi B funcionaba, me bastó seguir lo [indicado en la wiki](https://wiki.archlinux.org/index.php/Wireless_network_configuration#Intel) para el caso de una WiFi intel.

El equipo es viejo pero con Arch Linux tiene las versiones de los últimos programas en el momento que se los instalé, al contrario de windows no tuve que buscar los controladores y no malgasté tiempo en ello aparte de no usar un copia de windows sin licencia. El equipo era para un usuario con pocos conocimientos de informática que por supuesto no ha visto ni usado linux en ningún momento, hasta el momento no he recibido ninguna queja en cuanto al uso o que le haya dado problemas. Asi que al contario de lo que pensé al principio Arch Linux fue una distribución adecuada para lo que quería, era lo que más conocía y más documentación tenía como en el caso de instalar la WiFi. Instalar la WiFI quizá en [Debian][debian] u otra distribución también lo hubiese conseguido pero la información para estas distribuciones probablemente la hubiese obtenido en un foro y no de una forma más oficial como la wiki de Arch Linux. Más que el rolling release lo que más me gusta de Arch es su [wiki][archlinux-wiki] por estas cosas con las que uno puede obtener información un poco más oficial y con un poco más de seguridad de que va a funcionar que en la respuesta de un foro que además cuesta tiempo encontrarla.

También puedes leer los pasos que he seguido [desde Windows a Arch Linux][elblogdepicodev-de-windows-arch-linux] con algunos motivos y características de Arch explicados más detalladamente y [De Arch Linux a Arch Linux][blogbitix-36] donde comento ya con más conocimiento porque después de 4 años sigo usando Arch Linux y no he cambiado de distribución GNU/Linux. En el siguiente [anexo a la guía de instalación](https://picodotdev.github.io/blog-bitix/2014/05/anexo-a-la-guia-de-instalacion-y-del-principiante-de-arch-linux/) puedes encontrar los pasos que sigo para instalar Arch Linux.

{{< reference >}}
* [De Windows a Arch Linux][elblogdepicodev-de-windows-arch-linux]
* [De Arch Linux a Arch Linux][blogbitix-36]
* [Anexo a la guía de instalación de Arch Linux][blogbitix-22]
* [Guía instalación Raspberry Pi con Arch Linux ARM (Parte I, instalación base)][elblogdepicodev-guia-instalacion-raspberry-pi-con-arch]
{{< /reference >}}

{{% /post %}}
