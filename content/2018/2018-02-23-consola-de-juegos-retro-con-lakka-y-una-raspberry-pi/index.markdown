---
pid: 301
type: "post"
title: "Consola de juegos retro con Lakka y una Raspberry Pi"
url: "/2018/02/consola-de-juegos-retro-con-lakka-y-una-raspberry-pi/"
date: 2018-02-23T23:00:00+01:00
updated: 2018-03-05T19:30:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:lakka.png"
tags: ["gnu-linux", "juegos", "planeta-codigo", "software-libre"]
series: ["juegos"]
summary: "El propósito original de las Raspberry Pi era educativo y se ha hecho muy popular debido a su bajo precio y un buen trabajo de _marketing_. Sin embargo, puede utilizarse para muchos otros propósitos desde aprendizaje a programación, electrónica, servidor de archivos personales, descarga de películas, series y libros con torrent y también como una consola de juegos antiguos de arcade."
---

{{% post %}}

{{< logotype image1="lakka.png" title1="Lakka" width1="200" image2="linux.svg" >}}

Desde que compré la [Raspberry Pi][raspberrypi] en el año 2012, el modelo inicial B con 256 MiB de memoria, me ha dado y me esta dando un estupendo servicio. Principalmente la he estado usando para descargar películas y libros vía _torrent_ con [Transmission][transmissionbt] usando la distribución [Arch Linux para ARM][archlinuxarm]. Sin embargo, ya estoy pensando en sustituirla por algo más potente para hacer algunas pruebas con [Docker][docker], [Ansible][ansible] y algunas pruebas más que se me ocurran aparte de seguir queriendo hacer descargas o en un futuro con la función de SmartTV. De la Raspberry Pi no se lanzará un nuevo modelo, el que sería el 4, hasta el 2019 y cuando salga no creo que sea más potente que una [Rock64][rock64] que ya a día de hoy incorporan hasta 4 GiB de memoria, tienen Gigabit Ethernet y un puerto USB 3.0 con precio similar a la Raspberry Pi, lo único que le falta respecto al modelo de la RPi 3 es WiFi y Bluetooth pero a cambio se puede tener 4 veces más memoria, Gigabit Ethernet y un puerto USB 3.0. El mayor problema de la Rock64 es su soporte tanto en distribuciones, software y comunidad, en estos es donde la Raspberry Pi no tiene competidor.

Pero antes estoy pensando en el uso que le puedo dar a la Raspberry Pi para que no se quede en un cajón cogiendo polvo. Y he pensado en utilizarla como consola de juegos retro con [Lakka][lakka] para mis sobrinos que ahora usan PlayStation 1 pero que ya tiene los cables de los mandos estropeados de tanto doblarlos al guardarlos, de tanto uso ya no funcionan bien.

Lo primero que he hecho es comprar unos [mandos similares a los de la antigua Super NES](http://amzn.to/2Cg6035), aunque con un teclado USB también se puede jugar es más cómodo con los mandos, además de poder jugar a dos jugadores. En muchos juegos de _arcade_ antiguos es posible incluso a tres o cuatro jugadores.

{{< image
    gallery="false"
    image1="logotype:retroarch.png" optionsthumb1="658x378" title1="RetroArch" >}}

Los elementos necesarios para tener tener una consola retro son los siguientes: una [Raspberry Pi][amazon-raspberrypi], un [cargador USB](https://amzn.to/2YvYMRw) adecuado, una [tarjeta microSD de 64 GiB](https://amzn.to/3ecB3wp) o más, [dos mandos para consola USB](http://amzn.to/2Cg6035) o un [teclado USB](http://amzn.to/2ou0QHD), un [cable HDMI](http://amzn.to/2sPcjqz) y si se quiere una [caja](http://amzn.to/2Fvtyjy). Por unos 65 € se pueden adquirir los elementos imprescindibles en la tienda de [Amazon][amazon].

* [Raspberry Pi][amazon-raspberrypi]
* [Cargador USB](https://amzn.to/2YvYMRw)
* [Tarjeta microSD de 64 GiB](https://amzn.to/3ecB3wp)
* [Cable HDMI](https://amzn.to/2UCN0n6)
* [Mandos USB](http://amzn.to/2Cg6035)
* [Teclado USB](http://amzn.to/2ou0QHD)
* [Software Lakka][lakka]
* [ROMs de juegos](https://archive.org/details/datomatic.no-intro.org)

{{< amazon
    linkids="6e87726b77e92056e7ac168add1bc747,bef0fad42b2cc046799c66f7fa220c0f,fc47107b5f2e02c96571abfa0506c1c7,df5c52be4ca21b9991d26145edb0b642,39ee0802cdc202ce8259d463b59224ed"
    asins="B07TC2BK1X,B07XNVPK8X,B073JYC4XM,B014I8U33I,B07VMXHJ4Q" >}}

{{< amazon
    linkids="0bcc896ec870ce504e2c4c0acfaa8870,2264c2741c0914e881d4e70b36b927da"
    asins="B01N59IUV5,B00564GWEI" >}}

El software para usar la Raspberry Pi como consola retro que he utilizado es Lakka que es una distribución [GNU][gnu]/[Linux][linux] especifica para convertir un ordenador en una consola de juegos retro. Para instalarlo en la tarjeta microSD hay que [descargar la imagen de Lakka](http://www.lakka.tv/get/) y una forma simple de grabarla en la tarjeta microSD es utilizando [Etcher][etcher], basta instalarlo, iniciarlo, seleccionar la imagen de Lakka una vez descomprimido su archivo zip, seleccionar la unidad de la tarjeta SD (si es necesario ya que Etcher puede seleccionarla automáticamente) y pulsar el botón _Flash!_, después de unos pocos minutos la imagen está grabada y la tarjeta microSD lista para usarla en la Raspberry Pi y efectuar el primer inicio.

{{< image
    gallery="true"
    image1="image:etcher.png" optionsthumb1="300x200" title1="Etcher"
    caption="Etcher" >}}

Los juegos se distribuyen en archivos denominados ROM y estos se pueden descargar de ciertas páginas, una de ellas es de [Internet Archive][archive] donde está una [colección de juegos](https://archive.org/details/datomatic.no-intro.org) de las consolas más populares o si sabemos el nombre del juego de _arcade_ descargarlo individualmente de [CoolROM](http://coolrom.com/). Hay miles de juegos por lo que es importante conocer su nombre para hacer la búsqueda. En otro artículo hice una pequeña [recopilación de juegos míticos de arcade][blogbitix-170] y en otros blog están recopilados otra selección de juegos:

* [Los 10 mejores juegos de MAME para nostálgicos](http://mundogeek.net/archivos/2009/11/16/los-10-mejores-juegos-de-mame-para-nostalgicos/)
* [Los mejores juegos de MAME](http://lopezpino.com/2010/08/24/los-mejores-juegos-de-mame/)
* [Los Mejores 234 Juegos de Mame Por Mediafire](https://www.taringa.net/comunidades/mame-arcade/4629126/Los-Mejores-234-Juegos-de-Mame-Por-Mediafire.html)
* [Los 100 juegos míticos de NES](https://www.hobbyconsolas.com/reportajes/100-juegos-miticos-nes-49310)

Algunas de las consolas emuladas son: 

* Nintendo Entertainment System, Super Nintendo Entertainment System, Nintendo 64, Nintendo GameCube, Game Boy
* Sega Master System, Genesis, Saturn, Dreamcast, Game Gear
* MSX, MSX 2
* Atari 2600, 5200, 7800, Lynx, Jaguar
* Varias más y juegos de máquinas recreativas con FBA Alpha y MAME

En el primer inicio Lakka debe hacer una serie de tareas para inicializar el sistema durante unos minutos, recomiendo no conectar el cable de red  ni ningún mando o teclado en este paso. Una vez se completa este primer inicio el siguiente paso es copiar las ROMs, hay varias formas una de ellas es desde un equipo con GNU/Linux y copiar los archivos al directorio _/storage/ROMs/_ directamente a la tarjeta microSD desde un ordenador. En otros sistemas que no saben como acceder a las particiones _ext4_ de Linux la más sencilla es activando el protocolo SAMBA en Lakka y copiarlos por la red, aunque tarda más. SAMBA se activa desde el menú _Settings > Services > SAMBA Enable_. 

{{< image
    gallery="true"
    image1="image:lakka.jpg" optionsthumb1="300x200" title1="Lakka"
    caption="Raspberry Pi ejecutando Lakka (La televisión va acorde con los juegos XD)" >}}

Con el cable de red conectado a la Rasberry Pi al _router_ y desde un equipo con Windows, macOS o GNU/Linux y probando la dirección IP que el _router_ le ha asignado a la Raspberry Pi se accede a los directorios compartidos por red poniendo en el explorador de archivos _\\\\192.168.0.2_, _\\\\192.168.0.3_ o _\\\\192.168.0.4_, ... o posteriores números dependiendo de los dispositivos conectados en la red, también podría ser _\\\\192.168.1.2_, _\\\\192.168.1.3_, _\\\\192.168.1.4_, ... Con acceso en el explorador de archivos ya solo queda copiar las ROMs a la carpeta compartida ROMs. En macOS macOS con _Finder_ en la opción _Ir > Conectar al servidor_.

{{< image
    gallery="true"
    image1="image:lakka-samba-1.png" optionsthumb1="300x200" title1="Carpetas compartidas por Lakka mediante SAMBA"
    image2="image:lakka-samba-2.png" optionsthumb2="300x200" title2="Archivos de ROMs vía SAMBA"
    caption="Carpetas compartidas por Lakka mediante SAMBA" >}}

Copiados los archivos de las ROMs a la Raspberry Pi desde la opción _Import Content > Scan Directory_ de Lakka esta detectará todos los juegos que encuentre en su base de datos añadiéndolos en varios menús según el sistema emulado del juego en las últimas opciones del menú horizontal de Lakka.

{{< image
    gallery="true"
    image1="image:lakka-games.jpg" optionsthumb1="300x200" title1="Juegos Lakka"
    caption="Juegos Lakka" >}}

Detectadas las ROMS iniciar un juego basta con seleccionarlo desde los menús e iniciarlo. La mayoría funcionará con un rendimiento óptimo tanto el fluidez de imagen como en sonido, la Raspberry Pi es mucho más potente que los sistemas antiguos que emula, el modelo Raspberry Pi 3 incluso funcionará mejor. Aún asi algunos pueden ir un poco lentos o el sonido no ser completamente fiel al original.

{{< image
    gallery="true"
    image1="image:the-legend-of-zelda.png" optionsthumb1="300x200" title1="The Legend of Zelda"
    image2="image:zelda-II-the-adventure-of-link.png" optionsthumb2="300x200" title2="Zelda-II: The Adventure of Link"
    image3="image:super-mario-bros-3.png" optionsthumb3="300x200" title3="Super Mario Bros 3" >}}
{{< image
    gallery="true"
    image1="image:mega-man-5.png" optionsthumb1="300x200" title1="Mega Man 5"
    image2="image:1943.png" optionsthumb2="300x200" title2="1943"
    image3="image:sonic-the-hedgehog.png" optionsthumb3="300x200" title3="Sonic The Hedgehog"
    caption="Varios juegos de la NES y Sega">}}

Tenía dudas por la calidad de los mandos por si eran demasiado frágiles, sin embargo, cuando me han llegado y los he visto me han parecido muy decentes y creo que tratándolos bien van a aguantar mucho tiempo. Además, la Raspberry Pi y Lakka los han reconocido sin ningún tipo de problema tanto conectando uno individualmente o los dos al mismo tiempo reconociendo correctamente todos los botones. Lo único que he tenido que hacer es configurar en el menú _Input > Menu Toggle Gamepad Combo_ (se elige con la cruceta a derecha e izquierda) un botón para salir de un juego pulsando a la vez los botones _Start + Select_.

Tampoco he tenido ningún problema para que me funcione por el HDMI como también por la salida de vídeo RCA y el sonido por el jack de 3.5mm que posee la Raspberry Pi 1 original que tengo, todo me ha funcionado sin haya tenido que realizar ninguna acción.

Si añadimos algunos juegos de _arcade_ que Lakka no reconoce es posible crear una [lista personalizada de juegos](http://www.lakka.tv/doc/Playlists/), el nombre de la lista determina los iconos de los juegos y las [rutas de los _cores_](https://forums.libretro.com/t/megathread-which-roms-work-with-lakka/5566) dependen del sistema a emular, es probable que funcionen con _FB Alpha - Arcade Games_ o _MAME_. Es importante no renombrar los nombres de los archivos zip de las ROMs ya que es necesario que tengan el nombre original para funcionar bien.

También es posible crear una lista de juegos favoritos (muy útil si tenemos muchos juegos), para ello hay que una vez iniciado el juego salir al menú con la conbinación de teclas configurada en _Settings > Input > Menu Toggle Gamepad Combo_ y usar la opción _Add to favorites_. Desde el mismo menú es posible salir del juego u obtener una captura de pantalla. La lista de favoritos se guarda en _Configfiles > retroarch > content\_favorites.lpl_ y el historial en _Configfiles > retroarch > content\_history.lpl_ por si se quiere editar manualmente.

Como son muchas ROMs reconocer una entre las muchas que hay o ver como es el juego sin entrar en él está la opción de descargar imágenes del juego y elegir ver una imagen de como es el juego, su portada o su pantalla inicial. Las imágenes se pueden descargar desde la opcion _Main Menu > Online Updater > Thumbnails Updater_.

Al obtener ROMs de forma individual a veces es difícil dar con una que funcione, de algunos juegos hay varias versiones y es posible que algunas de ellas fallen al cargarse, hay que tener un poco de paciencia para encontrar la correcta.

{{< image
    gallery="true"
    image1="image:the-legend-of-zelda-screenshot.png" optionsthumb1="300x200" title1="The Legend of Zelda"
    caption="Juego The Legend of Zelda de NES" >}}

Ya solo queda pasar algunos buenos momentos con estos juegos antiguos pero entretenidos, nosotros o los más pequeños de la casa. Otra opción alternativa a Lakka para el mismo propósito es [RetroPie](https://retropie.org.uk) aunque la primera soporta algunos modelos mas de placas similares a la Raspberry Pi.

{{< reference >}}
* [Raspberry Pi, desempaquetado](https://elblogdepicodev.blogspot.com.es/2012/05/raspberry-pi-desempaquetado-unboxing.html)
* [Imágenes juegos](http://thumbnailpacks.libretro.com/)
* [Nintendo video game consoles](https://en.wikipedia.org/wiki/Nintendo_video_game_consoles)
* [Sega video game consoles](https://en.wikipedia.org/wiki/List_of_Sega_video_game_consoles)
{{< /reference >}}

{{% /post %}}
