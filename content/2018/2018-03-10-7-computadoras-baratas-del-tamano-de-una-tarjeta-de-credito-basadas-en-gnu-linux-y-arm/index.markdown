---
pid: 304
type: "post"
title: "7+ computadoras baratas del tamaño de una tarjeta de crédito basadas en GNU/Linux y ARM"
url: "/2018/03/7-plus-computadoras-baratas-del-tamano-de-una-tarjeta-de-credito-basadas-en-gnu-linux-y-arm/"
aliases: ["/2018/03/7-computadoras-baratas-del-tamano-de-una-tarjeta-de-credito-basadas-en-gnu-linux-y-arm/"]
date: 2018-03-10T10:00:00+01:00
updated: 2019-07-12T12:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:linux.svg"
tags: ["gnu-linux", "hardware", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="linux.svg" image2="gnu.svg" image3="arm.svg" title3="ARM" width3="350"  >}}

Una de las tendencias de la tecnología desde sus inicios es que en todo momento está en constante evolución y mejora. Cada vez es más potente, más pequeña y más barata. Hay multitud de ejemplos en cualquier dispositivo electrónico que se use para ver su evolución desde [discos duros de 5 megas que ocupaban un armario y pesaban varias decenas de kilos](https://en.wikipedia.org/wiki/History_of_IBM_magnetic_disk_drives#IBM's_first_HDD_versus_its_last_HDDs) a ahora las tarjetas microSD del tamaño de una uña con una capacidad de 256 GiB, de procesadores que en los años 70 funcionaban a una frecuencia de unos pocos megahercios a ahora varios gigahercios, de memorias RAM de unos pocos kilobytes a ahora varios gigabytes, de _chips_ con [unos miles de transistores](https://en.wikipedia.org/wiki/Transistor_count), ya no digamos válvulas de vacío, a varios miles de millones de transistores que emplean ahora las GPU de las tarjetas gráficas.

En poco más de dos décadas ha habido un salto de entre dos y tres órdenes de magnitud. Mi primer ordenador en 1996 fué un Intel Pentium a 120 Mhz con 8 MiB de memoria RAM que luego amplié a 32 MiB y un disco duro de 1 GiB que utilicé en mis años de universidad. En el 2002 cambié a un AMD 1800+ con 512 MiB, 60 GiB de disco duro y una gráfica Nvidia GeForce 2 MX creo que con 32 MiB de memoria gráfica con un monitor de 17" de tubo que pesaba más de 10 kilos seguro. En el 2008 dejé el ordenador de escritorio y pase a un portátil Dell, del que no me quiero acordar mucho por lo malo que resultó, con un Intel Core 2 Duo 8100 fabricado un una litografía de 45 nanómetros, 4 GiB de RAM, un disco duro de 320 GiB y una gráfica Nvidia 8600 con 256 MiB de memoria gráfica. Finalmente ya casi en el 2013 a mi siguiente equipo como portátil con un Intel i3-3210 de 2 núcleos y 4 hilos fabricado a 22 nanómetros, 8 GiB de memoria e inicialmente un disco duro de 500 GiB que posteriormente cambié por un SSD de 250 GiB. Y actualmente si cambiase de equipo optaría seguramente por un AMD basado en la arquitectura Zen que han aumentado de forma significativa los núcleos e hilos de los procesadores, iría a por 32 GiB para virtualizar a gusto o 64 GiB si fuese posible y la memoria DDR4 estuviese a precios más asequibles, un monitor 2K o 4K y un disco SSD basado en NVMe que aumenta más la tasa de transferencia incluso sobre la interfaz SATA. Eso en los computadores tradicionales pero ya algunos modelos de móviles de gama alta poseen más memoria que varios portátiles de la gama básica y en el tamaño de 5 pulgadas.

* [Desempaquetado Intel NUC8i5BEK (Bean Canyon), HyperX Impact (RAM) y Samsung 970 EVO NVMe (SSD)][blogbitix-363], finalmente adquirí un Intel NUC

En otro artículo algo comentaba [Sobre el rápido avance de la tecnología][blogbitix-186] y básicamente sacaba dos conclusiones. Una no merece comprar tecnología hasta que realmente es necesario pero tampoco esperar indefinidamente a lo siguiente mejor y como segunda conclusión que no hace falta tener lo último para hacer lo mismo que ya es posible con lo anterior.

Una de las últimas adquisiciones que hice fué en 2012, uno de los primeros modelos de la popular computadora del tamaño de una tarjeta de crédito Raspberry Pi con un procesador ARM con el juego de instrucciones _armv6h_ y 256 MiB que he utilizado mayoritariamente para realizar descargas y compartir archivos _torrent_ o algunas pruebas de [utilización de sensores y dispositivos de entrada y salida con Java][blogbitix-212] o para [usar un certificador de Let's Encrypt en un servidor Nginx][blogbitix-252]. El siguiente uso que le daré es como [consola de juegos retro][blogbitix-301], otro uso es utilizarla como [nube privada de documentos personales con Nextcloud y OnlyOffice][blogbitix-446].

Ya había placas de tamaño reducido con un computador completo similares a la Raspberry Pi pero la Raspberry Pi ha sido la placa con más éxito y que sigue teniendo uno de los mejores soportes y comunidad. Su propósito original es el aprendizaje a nivel educativo sin embargo su precio reducido de unos 36€ por los que se puede [comprar ahora en Amazon](http://amzn.to/2EP9mHX) ha sido gran parte de su éxito junto con una labor de promoción muy bien realizada en internet que contribuyó a crear gran expectación superando con creces la demanda esperada por los propios creadores en los meses iniciales. Han sido elaborados nuevos modelos más capaces con 4 núcleos a más velocidad y basados en un procesador de arquitectura ARM Cortex-A53 de 64 bits, con WiFi y Bluetooth, pero con solo 1 GiB de memoria y ciertas limitaciones en el ancho de banda de red.

La Raspberry Pi es la más popular y con mejor soporte pero no es la mini placa más capaz ni incluso la más barata, debido a su éxito han surgido numerosas placas similares. La totalidad de estas placas usan alguna distribución de GNU/Linux y procesadores ARM ya sea [Debian][debian], [Ubuntu][ubuntu], [Android][android], [Arch Linux ARM][archlinuxarm], [Armbian][armbian] o algunas distribuciones especializadas como [Lakka][lakka] para consola de juegos retro y [LibreELEC][libreelec] o [Kodi][kodi] para centro multimedia de salón.

El uso que se les puede dar a estas computadores es muy diverso quizá no como para sustituir a un ordenador de escritorio o portátil basado en procesadores [Intel][intel] o [AMD][amd] pero si para otros propósitos como servidor de descargas, centro multimedia, servidor web, cluster de servidores con [Docker][docker], servicio en la nube propio con [OwnCloud][owncloud], servidor de código fuente con [GitLab][gitlab], servidor de integración continua con [Jenkins][jenkins], base de datos [PostgreSQL][postgresql] o los mencionados consola de juegos retro y centro multimedia entre cualesquiera otros usos que queramos mientras el software necesario esté disponible y la cantidad memoria de la computadora sea suficiente.

{{< image
    gallery="false"
    image1="image:arm-powered.png" command1="Fit" optionsthumb1="300x250" title1="ARM Powered" >}}

### Raspberry Pi

Cuando apareció en el 2012 ya había placas similares pero su bajo precio y _marketing_ ha sido la que ha alcanzado la mayor popularidad sin ser la más potente. Gracias a su éxito con más de 14 millones de unidades vendidas es la mejor opción por su gran soporte de la comunidad aunque para algunos casos de uso su gigabyte de memoria en el modelo [Raspberry Pi 3](https://www.raspberrypi.org/magpi/raspberry-pi-3-specs-benchmarks/) puede quedarse escaso. Su _SoC_ BCM2837 de Broadcom no es el más capaz tanto en CPU (_quad-core_ ARM Cortex-A53 a 1.4 GHz) como en GPU (VideoCore IV) y con su gigabit ethernet compartida con los puertos USB y limitada lo que es un inconveniente importante en las transferencias de datos.

* SoC: CPU Broadcom BCM2837B0, 4 x Cortex-A53 (ARMv8) 64-bit SoC @ 1.4GHz
* GPU VideoCore IV
* Memoria 1GB LPDDR2 SDRAM
* WiFi 2.4GHz and 5GHz IEEE 802.11.b/g/n/ac wireless LAN, Bluetooth 4.2, BLE
* Red Gigabit Ethernet over USB 2.0 (maximum throughput 300 Mbps)
* Extended 40-pin GPIO header
* Full-size HDMI
* 4 USB 2.0 ports
* CSI camera port for connecting a Raspberry Pi camera
* DSI display port for connecting a Raspberry Pi touchscreen display
* 4-pole stereo output and composite video port
* Micro SD port for loading your operating system and storing data
* 5V/2.5A DC power input
* Power-over-Ethernet (PoE) support (requires separate PoE HAT)

La [Raspberry Pi 4](https://www.raspberrypi.org/magpi/raspberry-pi-4-specs-benchmarks/) ha sido anunciada y comercializada por sorpresa el 2019 cuando pocos se esperaban este nuevo modelo. Mejora sensiblemente varios aspectos y limitaciones de las versiones anteriores y sigue manteniendo un precio reducido. La CPU pasa a estar formada por 4 núcleos ARM Cotex-A72 a 1.5 GHz lo que es alrededor de 3 veces más potente que la CPU de la Raspberry Pi 3. La memoria pasa a tener varias configuraciones de 1, 2 y 4 GiB además de ser más veloz al ser LPDDR4. Se ha eliminado la limitación del puerto Gigabit ethernet y dos puertos USB pasan a ser USB 3.0 con notables aumentos de capacidad de transferencia. La salida de vídeo ahora está compuesta por dos mini HDMI para soportar configuraciones multimonitor en resolución 4K. La GPU es una Video Core VI con soporte de OpenGL ES 3.0.

* SoC: CPU Broadcom BCM2711B0 quad-core A72 (ARMv8-A) 64-bit @ 1.5GHz
* GPU: Broadcom VideoCore VI
* RAM: 1GB, 2GB, or 4GB LPDDR4 SDRAM
* Red: 2.4 GHz and 5 GHz 802.11b/g/n/ac wireless LAN
* Bluetooth: Bluetooth 5.0, Bluetooth Low Energy (BLE)
* GPIO: 40-pin GPIO header, populated
* Almacenamiento: microSD
* Puertos: 2 × micro-HDMI 2.0, 3.5 mm analogue audio-video jack, 2 × USB 2.0, 2 × USB 3.0, Gigabit Ethernet, Camera Serial Interface (CSI), Display Serial Interface (DSI)

El precio del modelo de 1 GiB de memoria se mantiene en $35 y el de 4 GiB llega a $55. Con este nuevo modelo la Raspberry Pi vuelve a posicionarse a la altura de sus equivalentes que con el paso del tiempo habían superado a los modelos anteriores de RPi.

{{< image
    gallery="true"
    image1="image:raspberrypi3b.jpg" optionsthumb1="300x200" title1="Raspberry Pi 3"
    image2="image:raspberrypi4b.jpg" optionsthumb2="300x200" title2="Raspberry Pi 4"
    caption="Raspberry Pi 3 y 4" >}}

{{< amazon
    linkids="6e87726b77e92056e7ac168add1bc747,bef0fad42b2cc046799c66f7fa220c0f,fc47107b5f2e02c96571abfa0506c1c7,df5c52be4ca21b9991d26145edb0b642,39ee0802cdc202ce8259d463b59224ed"
    asins="B07TC2BK1X,B07XNVPK8X,B073JYC4XM,B014I8U33I,B07VMXHJ4Q" >}}

### Rock64

El segundo modelo que destacaré es este de [PINE64][pine64] porque posee versiones de 1, 2 y 4 GiB de memoria, gigabit ethernet y 1 puerto USB 3.0 a un precio similar al de una Raspberry Pi, lo único que le falta es WiFi para superar en todo a la RPi. También posee un módulo eMMC más rápido que las tarjetas microSD, SPI de 128 MiB para prescincir de tarjeta microSD en el arranque, salida de audio, otros 2 puertos USB 2.0, salida HDMI con soporte para 4K@60fps HDR10, botones dedicados de encendido y reinicio y los 40 _pines_ para usar sensores. El _SoC_ es un [Rockchip RK3328](http://www.rock-chips.com/a/en/products/RK33_Series/2017/0118/829.html) _quad-core_ ARM Cortex-A53 y la GPU [ARM Mali-450MP2](https://developer.arm.com/products/graphics-and-multimedia/mali-gpus/mali-450-gpu) con capacidad para OpenGL ES 1.1 / 2.0.

* CPU Rockchip RK3328, 4 x Cortex-A53 (ARMv8) 64-bit SoC @ 1.4GHz
* GPU ARM Mali-450MP2
* Memoria 1 / 2 / 4 GiB 1600 MHz LPDDR3 SDRAM
* 128 Mb SPI Flash
* eMMC Module Socket, eMMC Jumper
* MicroSD Card Slot (Bottom)
* 3.5mm Barrel Power Jack (5V3A)
* 4K60P HDR Digital Output
* A/V Jack
* Red Gigabit Ethernet
* 2 x USB 2.0 Dedicated Host, 1 x USB 3.0 Dedicated Host
* Pi-P5+ Bus
* Pi-2 Bus
* Power, Reset and Recovery Buttons
* IR Receiver Port

{{< image
    gallery="true"
    image1="image:rock64.jpg" optionsthumb1="300x200" title1="Rock64"
    caption="Rock64" >}}

Para suplir la carencia de WiFi en su tienda hay disponible un accesorio conectable a un puerto USB, también tienen la posibilidad de comprar el alimentador de corriente, mando a distancia, caja acrílica y un _splitter_ con _Power Over Ethernet_ o _PoE_ que hace innecesario el alimentador de corriente si poseemos o adquirimos un _switch_ con esa función, tarjetas eMMC de 16, 32 y 64 GiB. Su precio de unos $45 para el modelo de 4 GiB.

{{< youtube video="ZejkWra-Mfc" >}}

En el momento de escribir el artículo están preparando el lanzamiento de la placa Rock64Pro con un mejor _SoC_ [Rockchip RK3399](http://www.rock-chips.com/a/en/products/RK33_Series/2016/0419/758.html) _hexa-core_ con dos Cortex-A72 y 4 Cortex-A53 además de un puerto USB Type-C y mejor GPU con una [ARM Mali-T860MP4](https://developer.arm.com/products/graphics-and-multimedia/mali-gpus/mali-t860-and-mali-t880-gpus) _quad-core_ con soporte para OpenGL ES 1.1 / 2.0 / 3.0 and OpenCL 1.2.

{{< image
    gallery="true"
    image1="image:rock64pro.jpg" optionsthumb1="300x200" title1="Rock64Pro"
    caption="Rock64Pro" >}}

Estas placas de PINE64 son de lo mejor en la relación características hardware y precio, donde adolecen es en el software y es que aún con un tiempo relativamente corto de un año de vida es en el software donde pueden presentar algún problema. Conforme pase el tiempo mejorarán pero quizá no sea el modelo más adecuado para aquellos usuarios que no deseen encontrase problemas en su uso y no estén dispuestos buscar información o a resolver los que se presenten.

Aunque no es como los modelos anteriores de placas base este es destacable por ser un portátil basado en un procesador ARM a un precio de $90. Pantalla de 11" o 14" con una resolución de 1366x768, 2 GiB de memoria, WiFi, microSD, mini HDMI, 16GB eMMC, dos puertos USB 2.0, salida de audio, cámara web y batería de 10000mAH, teclado y _touchpad_.

{{< image
    gallery="true"
    image1="image:pinebook-11-inch.jpg" optionsthumb1="300x200" title1="PineBook (11 pulgadas)"
    caption="PineBook (11 pulgadas)" >}}

### Rock Pi 4B

Un modelo de placa mas reciente también basada en el mismo _SoC_ de la Rock64Pro el Rockchip RK3399 con algunas características muy completas. Esta [Rock Pi](http://rockpi.org/) no tiene uno de los defectos de la Rock64 y es que tiene WiFi AC y Bluetooth 5.0, su memoria también es de hasta 4 GiB pero LPDDR4, puerto Gigabit Ethernet, tiene dos puertos USB 2.0 y otros dos 3.0, GPIO de 40 _pines_ compatible con la Raspberry Pi, además de conector de 3.5mm para el audio y salida HDMI de hasta 4K, se alimenta mediante conector USB Type-C, tarjeta microSD, tiene _socket_ eMMC pero es que además tiene un conector M.2 lo que le permite tener SSD con esta interfaz y un gran ancho de banda para el almacenamiento.

* CPU Rockchip RK3399, 2 x Cortex-A72, 4 x Cortex-A53
* GPU Mali T860MP4 (OpenGL ES 1.1 /2.0 /3.0 /3.1 /3.2, Vulkan 1.0, Open CL 1.1 1.2, DX11)
* Memory LPDDR4 1GB/2GB/4GB
* Storage eMMC, microSD, M.2 SSD
* Display HDMI 2.0 4K@60, Audio 3.5mm jack
* WiFI 802.11 ac, Bluetooth 5.0, Gigabit Ethernet with PoE
* 2 x USB 3.0, 2 x USB 2.0
* IO 40-pin GPIO header
* Power USB Type C, RTC battery connector

Por si fuera poco tiene un precio razonable y similar al resto de placas que está entre los 70€ y los 107€ según configuración de memoria y accesorios incluidos, además es ofrecido por varias tiendas alemanas. Aunque no tiene el soporte de la Raspberry Pi en cuanto a características técnicas es posiblemente el mejor modelo de los comentados en este artículo.


{{< youtube video="C4p9EpjA0ZM" >}}

### ASUS Tinker Board

La [ASUS Tinker Board](https://www.asus.com/uk/Single-Board-Computer/Tinker-Board/overview/) también está basada en un _SoC_ de Rockchip pero en este caso el modelo [RK3288](http://www.rock-chips.com/a/en/products/RK32_Series/2014/0504/484.html) que como CPU tiene el modelo más potente de 32 bits con una ARM Cortex-A17 _quad-core_ e incorporando una GPU Mali-T764 mejor que la Mali de la Rock64. Tiene 2 GiB de memoria e incorpora de serie WiFi N y Bluetooth 4.0.

Su precio es algo más elevado que la Rock64 y tiene menos memoria pero más que la Raspberry Pi, aún así incorpora de serie WiFi y Bluetooth por lo que no sería necesario comprar elementos adicionales.

* CPU Rockchip Quad-Core RK3288 processor
* Memoria 2GB Dual Channel DDR3
* GPU ARM Mali-T764
* Micro SD(TF) card slot
* Red Gigabit Ethernet
* WiFi 802.11 b/g/n, Bluetooth V4.0 + EDR
* Audio RTL ALC4040 CODEC
* 4 x USB 2.0
* GPIO 40-pin header, up to 28 x GPIO pins, up to 2 x SPI bus, up to 2 x I2C bus, up to 4 x UART, up to 2 x PWM, up to 1 x PCM/I2S, 2 x 5V power pins, 2 x 3.3V power pins, 8 x ground pins, 1 x PWM, 1 x S/PDIF, 1 x 15-pin MIPI DSI, 1 x 15-pin MIPI CSI

{{< image
    gallery="true"
    image1="image:asus-tinker-board.jpg" optionsthumb1="300x200" title1="ASUS Tinker Board"
    caption="ASUS Tinker Board" >}}

### Cubox

Aunque los modelos de [SolidRun][solid-run] son significativamente más caros poseen buenas especificaciones como el modelo [CuBox i4x4](https://www.solid-run.com/product/cubox-i4x4/) con un procesador _quad core_ aunque en si versión ARMv7 de 32 bits pero con 4 GiB de memoria, gigabit ethernet, WiFi y blutooth incluido en un formato de cubo de 2 pugadas. Como decía a un precio mas elevado, $170.

El modelo mas reciente [Cubox Pulse](https://www.solid-run.com/nxp-family/cubox-pulse/) incorpora un procesador [NXP i.MX8M](https://www.nxp.com/products/processors-and-microcontrollers/applications-processors/i.mx-applications-processors/i.mx-8-processors:IMX8-SERIES) ya a 64 bits pero con el precio igualmente abultado respecto a otras opciones de 170€.

* CPU i.MX8M Dual/Quad core ARM Cortex A53 up to 1.5Ghz (with ARM M4 GPP)
* Memoria up to 4GB LPDDR4
* MicroSD
* eMMC
* 2 x USB 3.0, 1 x HDMI 2.0, 1 x RJ45
* Power on button
* Indication LEDs
* RTC
* IR receiver
* PoE sink support

{{< image
    gallery="true"
    image1="image:cubox.jpg" optionsthumb1="300x200" title1="Cubox"
    image2="image:cubox-pulse.jpg" optionsthumb2="300x200" title2="Cubox Pulse"
    caption="Cubox y Cubox Pulse" >}}

### ODROID

Otro distribuidor importante es [Hardkernel][hardkernel] con sus modelos ODROID de pequeñas computadoras basadas en ARM con varios modelos entre ellos el [ODROID C2](http://www.hardkernel.com/main/products/prdt_info.php?g_code=G145457216438) que posee un procesador ARM Cortex-A53 _quad-core_, 2 GiB de memoria, gigabit ethernet, soporta HDMI 2.0 4K@60fps, eMMC, 4 puertos USB 2.0 pero sin WiFi ni bluetooth. A un precio de $46.

Están preparando el modelo [ODROID N1](https://forum.armbian.com/topic/6496-odroid-n1-not-a-review-yet/) tambien basada en el _SoC_ Rockchip RK3399.

{{< image
    gallery="true"
    image1="image:odroid-c2.jpg" optionsthumb1="300x200" title1="ODROID C2"
    caption="ODROID C2" >}}

### NanoPi, OrangePi y BananaPi

De [NanoPi][nanopi] voy a destacar el modelo [NanoPi K2](http://nanopi.org/NanoPi-K2_Feature.html) con 2 GiB de memoria, procesador quad core, con WiFi y bluetooth y gigabit ethernet y soporte de 4K@60fps y H.265 10bit, H.264 a un precio de $50.

Parece que con la costumbre de denominar a estas placas bases el nombre de frutos están [OrangePi Plus 2](http://www.orangepi.org/orangepiplus2/) y [BananaPi M3](http://www.banana-pi.org/m3.html), el primero a un precio de 45€ con 2 GiB de memoria y soporte para HDMI 4K además de incluir gigabit ethernet y WiFi. El modelo de Banana Pi se diferencia en tener un procesador _octa-core_, un puerto SATA y un precio superior de 85€.

### Conclusión

Estos no son los únicos modelos que existen pero son algunos de los más destacables. Si queremos 4 GiB de memoria la opción preferente es la Rock64 con la posibilidad de añadirle en un puerto USB la conectividad WiFi o la Rock Pi que ya incorpora WiFi. Si con 2 GiB es suficiente está la la ODROID C2, si se desea que tenga WiFI sin adaptadores adicionales la opción preferente es la NanoPi K2 o la ASUS Tinker Board.

A pesar de que las alternativas de placas bases sean más capaces que la Raspberry Pi esta les gana en mejor soporte del software como distribuciones GNU/Linux y programas como Kodi que también es algo a tener muy en cuenta y este posiblemente es el motivo de que aún siendo menos capaz tiene más éxito e igualmente una muy buena opción. Quizá con algunas de estas placas alternativas hay que leer la documentación que tengan, algún foro y probar más cosas de las que requeriría una Raspberry Pi.

Estas placas son un logro del avance de la tecnología pero ciertamente no hay ningún modelo que soporte la memoria que un Intel NUC, todas estas placas no incluyen más de 4 GiB de memoria ni es ampliable, los NUC pueden llegar hasta los 32 GiB siendo más capaces. En cuanto al precio quizá los NUC son algo más caros pero la plataforma x86 tiene un gran soporte de software y no está tan fragmentado como la plataforma ARM, por otro lado al precio de las placas hay que añadirles los accesorios como la fuente de alimentación, caja, disipador, microSD o eMMC. A los NUC lo que les falta es el puerto GPIO para [trastear con la electrónica como LEDs, _displays_ y otros actuadores][blogbitix-serie-electronica]. Si el propósito es de software preferiría un NUC, si el propósito es la electrónica o un precio muy ajustado una de estas placas.

{{< reference >}}
* [Procesadores ARM Cortex-A](https://www.arm.com/products/processors/cortex-a)
* [Arquitectura ARM](https://es.wikipedia.org/wiki/Arquitectura_ARM)
* [Raspberry Pi](https://es.wikipedia.org/wiki/Raspberry_Pi)
* [GPUs ARM Mali](https://www.arm.com/products/graphics-and-multimedia/mali-gpu)
* [GPUs ARM Mali (wkipedia)](https://www.arm.com/products/graphics-and-multimedia/mali-gpu)
* [VideoCore](https://en.wikipedia.org/wiki/VideoCore)
* [OpenGL ES][opengles]
* [OpenCL][opencl]
* [OpenVG][openvg]
{{< /reference >}}

{{% /post %}}
