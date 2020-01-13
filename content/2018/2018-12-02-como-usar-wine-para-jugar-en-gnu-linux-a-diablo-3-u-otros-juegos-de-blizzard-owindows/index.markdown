---
pid: 364
type: "post"
title: "Cómo usar Wine para jugar en GNU/Linux a Diablo 3 u otros juegos de Blizzard o Windows"
url: "/2018/12/como-usar-wine-para-jugar-en-gnu-linux-a-diablo-3-u-otros-juegos-de-blizzard-o-windows/"
aliases: ["/2018/12/como-usar-wine-para-jugar-en-gnu-linux-a-diablo-3-u-otros-juegos-de-windows/"]
date: 2018-12-02T17:30:00+01:00
updated: 2018-10-07T16:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imageHead: "images/battle-net-3.jpg"
imagePost: "logotype:wine.svg"
tags: ["gnu-linux", "juegos", "software", "software-libre", "windows"]
series: ["juegos"]
---

{{% post %}}

{{< logotype image1="wine.svg" title1="Wine" width1="200" image2="blizzard.svg" title2="Blizzard" width2="300" image3="linux.svg" >}}

Desde el año 2008 que llevo utilizando [GNU][gnu]/[Linux][linux] como único sistema operativo en mi equipo para todas las tareas que realizo nunca me he planteado jugar a juegos de primera linea o triple A. No por que no se pudiese sino porque GNU/Linux nunca ha sido considerado una opción para estos juegos, [hay juegos sí y algunos buenos][blogbitix-serie-juegos] pero la mayoría de los comerciales se desarrollan para ejecutarse en [Windows][windows] o como mucho en [macOS][macos] y yo ni siquiera me lo había planteado.

Con el último portátil que he tenido con un procesador [Intel i5-3210M][intel-i5-3210M] con una gráfica integrada [HD 4000][intel-hd-4000] ya hubiese podido jugar a alguno aunque hubiese sido a una resolución no muy alta o bajando detalles gráficos. Por lo menos para jugar a unos de los juegos que siempre me ha llamado la atención en sus diferentes versiones, [Diablo](https://es.wikipedia.org/wiki/Diablo_(videojuego)), [Diablo 2](https://es.wikipedia.org/wiki/Diablo_II) y [Diablo 3](https://es.wikipedia.org/wiki/Diablo_III). El primero y el segundo me los pasé en la época que jugaba más habitualmente, Diablo 2 habrá sido uno de los últimos juegos que me he pasado completos al menos con una clase de personaje.

Ahora que he cambiado de equipo a un [Intel NUC8i5BEK][intel-nuc8i5bek] con un procesador de 4 núcleos y 8 hilos [i5-8259U][intel-i5-8259U] que aunque lleva una gráfica integrada [Iris Graphics 655][intel-iris-graphics-655] ya es bastante más capaz y suficiente para jugar a Diablo 3 que es un juego del 2012. Me he planteado ahora más en serio comprobar si en GNU/Linux se puede jugar a juegos con la experiencia de que tal se puede jugar a Diablo 3.

Como los juegos son desarrollados para Windows hay que utilizar una capa que implementa la API de Windows para hacer funcionar los juegos en GNU/Linux, pueden ser juegos pero también programas como [Microsoft Word][microsoft-office]. La capa de implementación de la API de Windows utilizada en GNU/Linux es [Wine][wine].

Como siempre he empezado por leer el artículo de la [wiki de Arch Linux dedicado a Wine](https://wiki.archlinux.org/index.php/Wine) pra ver que paquetes son necesarios instalar además del repositorio _multilib_ y que información contiene, en un primer momento hay que habilitar el repositorio _multilib_ con implementaciones de librerías de 32 bits. Para juegos la opción recomendable es [wine-staging](https://www.archlinux.org/packages/multilib/x86_64/wine-staging/) que contiene los últimos parches añadidos, [wine](https://www.archlinux.org/packages/multilib/x86_64/wine/) es una versión más estable pero con una cadencia de versiones más lenta que no tiene los últimos parches. También son necesarios los [controladores gráficos de 32 bits de la tarjeta](https://www.archlinux.org/packages/multilib/x86_64/lib32-mesa/), en este caso de Intel. Y el sistema de sonido para 32 bits, si no se instala [lib32-libpulse](https://www.archlinux.org/packages/multilib/x86_64/lib32-libpulse/)  en la terminal aparecen mensajes de que no se encuentra las librerías _libpulse.so.0_ y _libpulse.so.2_. [wine_gecko](https://www.archlinux.org/packages/multilib/x86_64/wine_gecko/) y [wine-mono](https://www.archlinux.org/packages/community/any/wine-mono/) son unos requerimientos de Wine y los programas Windows.

{{< code file="install-wine.sh" language="bash" options="" >}}

Por otro lado Wine posee una [base de datos con información de compatibilidad y estabilidad][wine-appdb] de programas Windows sobre Wine en GNU/Linux. [Diablo 3][blizzard-diablo3] es un juego de [Blizzard][blizzard] que posee un sistema con una aplicación propia para descargar, instalar y controlar el uso adecuado del juego, la aplicación es [Battle.net][blizzard-battlenet] con la que se pueden instalar [todos los juegos de este estudio](http://eu.blizzard.com/es-es/games/). Para obtenerla hay que registrarse como usuario y una vez registrados se puede descargar el cliente que es un archivo ejecutable de Windows _.exe_ que hay que ejecutar con Wine. 

* [World of Warcraft][blizzard-worldofwarcraft] y [Warcraft III][blizzard-warcraft3]
* [Diablo 3][blizzard-diablo3]
* [Overwatch][blizzard-overwatch]
* [Starcraft II][blizzard-starcraft2] y Starcraft
* [Heroes of the Storm][blizzard-heroesofthestorm]
* [Hearthstone][blizzard-hearthstone]

Por lo que para instalar Diablo 3 es necesario Battle.net. La [página de información de Battle.net de Wine](https://appdb.winehq.org/objectManager.php?sClass=version&iId=28855) indica que es necesario adicionalmente las librerías [lib32-libldap](https://www.archlinux.org/packages/multilib/x86_64/lib32-libldap/) y [lib32-gnutls](https://www.archlinux.org/packages/multilib/x86_64/lib32-gnutls/) además de [winetricks](https://www.archlinux.org/packages/community/any/winetricks/). El comando de _winetricks_ es necesario para resolver el problema descrito en la página de Wine sobre Battle.net, _Blizzard App icon keeps spinning forever_, para poder iniciar sesión en con el cliente.

{{< code file="install-libs.sh" language="bash" options="" >}}

Con esto ya se puede iniciar el cliente de Battle.net con Wine y comenzar la instalación de Diablo 3, ocupa unos 17 GB que dependiendo de la conexión a internet de la que se disponga tardará más menos. Llegado a cierta cantidad de datos descargado del juego ya se puede iniciar pero se puede esperar a que se descargue completamente para tener mejor experiencia y no falte nada del contenido. En algunos momentos mientras se descarga el juego la aplicación parece que se queda congelada aunque sigue descargando, basta redimensionar un poco la ventana para activarse de nuevo y ver el progreso.

{{< code file="winetrics.sh" language="bash" options="" >}}

Una vez instalados los paquetes necesarios y realizada la configuración se puede iniciar el cliente de Battle.net.

{{< code file="wine-battlenet.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:battle-net-1.png" optionsthumb1="200x150" title1="Cliente de Battle.net"
    image2="image:battle-net-2.png" optionsthumb2="200x150" title2="Cliente de Battle.net"
    image3="image:battle-net-3.jpg" optionsthumb3="200x150" title3="Cliente de Battle.net"
    caption="Cliente de Battle.net" >}}
{{< image
    gallery="true"
    image1="image:battle-net-4.jpg" optionsthumb1="200x150" title1="Instalación de Diablo 3"
    image2="image:battle-net-5.jpg" optionsthumb2="200x150" title2="Instalación de Diablo 3"
    image3="image:battle-net-6.jpg" optionsthumb3="200x150" title3="Instalación de Diablo 3"
    caption="Instalación de Diablo 3" >}}

Instalado el juego se inicia con un comando de Wine o con el acceso directo del menú de aplicaciones del juego o del cliente de Battle.net.

{{< code file="wine-diablo3.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:menu-aplicaciones.jpg" optionsthumb1="200x150" title1="Menú de aplicaciones con accesos directos de Battle.net y Diablo 3"
    caption="Menú de aplicaciones" >}}

Leyendo la [página de información de Diablo 3](https://appdb.winehq.org/objectManager.php?sClass=version&iId=29952) indica que hay que utilizar el cliente de 32 bits sino se utiliza la API de gráficos DirectX 11 que no ofrece buen rendimiento como he comprobado, no ofrece más de 10 fps. Con el cliente de 32 bits el rendiminto ya es el normal. El cliente de 32 bits se activa en _Battle.net App -> Settings -> Game Settings -> Diablo 3 -> Launch 32-bit client (instead of 64-bit)_.

Diablo 3 comienza con una cinemática introductoria que en mi caso no iba bien y tampoco las siguientes cinemáticas que se reproducen en ciertos hitos del juego. Para verlas se puede ir a Youtube, cada clase tiene una inicial distinta. Como he elegido como clase la del monje para mi primer personaje pongo la de este.

{{< youtube video="8U-grPG5W8M" >}}

{{< youtube video="STx7Um655aw" >}}

La trama del juego comienza con la caída de una estrella en la antigua catedral de Tristán y el personaje en el camino dirigiéndose hacia Nueva Tristán con motivo de tal acontecimiento.

{{< image
    gallery="true"
    image1="image:diablo-3-1.jpg" optionsthumb1="300x200" title1="Personaje de clase monje"
    image2="image:diablo-3-2.jpg" optionsthumb2="300x200" title2="Caminio hacia Nueva Tristán" >}}
{{< image
    gallery="true"
    image1="image:diablo-3-3.jpg" optionsthumb1="200x150" title1="Jugando a Diablo 3"
    image2="image:diablo-3-4.jpg" optionsthumb2="200x150" title2="Jugando a Diablo 3"
    image3="image:diablo-3-5.jpg" optionsthumb3="200x150" title3="Jugando a Diablo 3"
    caption="Juego de Diablo 3" >}}

El juego se inicia y funciona correctamente, en unas poca horas que he estado jugando, no ha quedado engendro, barril ni tocón en pie >:), no he tenido ningún cierre del juego inesperado ni ningún error, salvo por las cinemáticas irreproducibles de las que se sale con la tecla escape. El NUC en el que lo he ejecutado parece que no se calienta en exceso al tacto, la temperatura de la CPU se mantiene de forma estable a 75ºobservando sus sensores por software, el ventilador funcionando a esta temperatura hace mucho ruido y no se percibe en el fragor del juego, con buenos FPS aún a resolución QHD de 2560x1440. .

El juego permite ajustar la calidad gráfica a la capacidad del equipo para tener buenos fps, la principal es la resolución a menor resolución mejor rendimiento, también calidad de texturas y efectos gráficos. Con estas calidades gráficas estos son los fotogramas por segundo. Los fotogramas por segundo se muestran en la parte inferior derecha pulsando la combinación de teclas _Ctrl+R_. A una resolución de 1920x1080 que no es poco ya se obtienen unos muy aceptables 60 fps.

* A 2560x1440 va a 42 fps en el NUC8i5BEK.
* A 1920x1080 va a 60 fps.
* A 1600x900 va a 70 fps.

{{< image
    gallery="true"
    image1="image:opciones-graficas.jpg" optionsthumb1="300x200" title1="Opciones de calidad gráfica usadas para medir el rendimiento en fps"
    caption="Opciones de calidad gráfica usadas para medir el rendimiento en fps" >}}

Por defeco en mi caso no he podido cambiar la resolución del juego desde las opciones solo me ofrece una opción la de la resolución del monitor, como 2560x1440 es una resolución alta y aún jugables los 42 fps no son muchos, a más fps se aprecia más fluidez. Para cambiar la resolución he tenido que utilizar el siguiente comando desde la terminal con el que Wine ejecuta el programa en modo explorador o en un escritorio virtual, se indica el nombre del escritorio virtual Diablo 3, 1920x1080 es la resolución deseada en este caso y el último parámetro _Diablo III.exe_ es la ubiciación del ejecutable.

{{< code file="wine-explorer.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:wine-exporer-1.jpg" optionsthumb1="300x200" title1="Diablo 3 en Wine modo explorardor"
    image2="image:wine-exporer-2.jpg" optionsthumb2="300x200" title2="Diablo 3 a resolución 1920x1080"
    caption="Diablo 3 en Wine modo explorardor a 1920x1080" >}}

Si soy sincero en toda mi época jugona creo que no he pagado por ningún juego de los que he tenido y he jugado a muchos de los más populares que estaban cada momento. Así que recuerde es muy posible que me decida a pagar por este Diablo 3 por primera vez por un juego viendo que puedo jugar el GNU/Linux perfectamente. Se puede mediante [PayPal][paypal] y por supuesto con tarjeta de crédito. La única duda que tengo es si ejecutar Diablo 3 sobre Wine es algo aceptable por Blizzard o si esto es motivo de expulsión y cierre de cuenta, el llamado _baneo_, hay comentados algunos casos por estos motivos. El [juego básico de Diablo 3](https://eu.shop.battle.net/es-es/product/diablo-iii) cuesta 20 € y [la expansión Reaper of Souls](https://eu.shop.battle.net/es-es/product/diablo-iii-reaper-of-souls) que incluye una nueva clase la de cruzado, el acto V, modo aventura y nuevas habilidades en clases otros 20€, [comprando ambos a la vez](https://eu.shop.battle.net/es-es/product/diablo-iii-battle-chest) son 30€. Hay una [segunda expansión, Despertar del Nigromante](https://eu.shop.battle.net/es-es/product/diablo-iii-rise-of-the-necromancer), que permite jugar con una clase adicional de nigromante por 15 €.

{{< image
    gallery="true"
    image1="image:pago.png" optionsthumb1="300x200" title1="Formas de pago"
    caption="Formas de pago" >}}

Otros juegos que tengo en mi lista pero ya de [Steam que tiene un cliente ya nativo para GNU/Linux][blogbitix-431] con varios juegos compatibles. Aunque sea solo para probar que también se pueden jugar a muchos juegos del amplio catálogo de Steam lo probaré. Otra plataforma que posiblemente pruebe sea [GOG][gog]. Y con estas tres plataformas espero que quede demostrado que en GNU/Linux se puede jugar a juegos comerciales aceptablemente, aún alguno teniendo varios años como este Diablo 3 pero que para mi habiendo estado bastante desconectado de los juegos me parece que tiene una historia, argumento y una calidad gráfica artística impresionante.

Otros juegos en mi lista:

* [DirtRally](https://store.steampowered.com/app/310560/DiRT_Rally/)
* [Pathfinder: Kingmaker](https://store.steampowered.com/app/640820/Pathfinder_Kingmaker/)
* [Tochligh II](https://www.gog.com/game/torchlight_ii)
* [Grand Theft Auto V](https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/)
* [Tropico 5](https://store.steampowered.com/app/245620/Tropico_5/)
* [Baldur's Gate II: Enhanced Edition](https://store.steampowered.com/app/257350/Baldurs_Gate_II_Enhanced_Edition/)

Hay alguna utilidad que realiza algunas modificaciones a Wine, una de ellas es [PlayOnLinux][playonlinux] que es una colección de _scripts_ que en principio mejora la experiencia y compatibilidad pero en algún comentario he leído que alguno de esos _scripts_ están desactualizados y es mejor usar Wine directamente leyendo las páginas de la base de datos con la información de pasos relevantes si hay que hacer alguno. La siguiente versión de PlaynLinux se llamará [Phoenicis][phoenicis], otro proyecto que estoy siguiendo es [Winepak][winepak] que es un repositorio específico para aplicaciones Windows de [Flatpak][flatpak], [Flatpak es una nueva forma de distribuir software en GNU/Linux][blogbitix-362] que tiene algunas ventajas a utilizar los paquetes propios de la distribuciones GNU/Linux.

Al instalar programas en Wine se crean accesos directos en el menú de aplicaciones con lo que la integración en el sistema es perfecta y una aplicación Wine se puede ejecutar como cualquier otra aplicación del sistema. Si más tarde se desea [desinstalar todos esos paquetes de _multilib_](https://wiki.archlinux.org/index.php/Official_repositories#Disabling_multilib), Wine y [eliminar los accesos directos en el menú de aplicaciones creados por Wine](https://wiki.archlinux.org/index.php/Wine#Removing_menu_entries) hay que ejecutar los siguientes comandos, en Arch Linux.

{{< code file="uninstall.sh" language="bash" options="" >}}

{{< reference >}}
* [How to Install Blizzard Battlenet App on Linux](https://linoxide.com/linux-how-to/install-blizzard-battlenet-app-linux/)
* [How do I get Wine to launch an application in a virtual desktop?](https://wiki.winehq.org/FAQ#How_do_I_get_Wine_to_launch_an_application_in_a_virtual_desktop.3F)
{{< /reference >}}

{{% /post %}}
