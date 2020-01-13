---
pid: 329
type: "post"
title: "Decidido a comprar un Intel NUC entre las opciones que he evaluado"
url: "/2018/06/decidido-a-comprar-un-intel-nuc-entre-las-opciones-que-he-evaluado/"
aliases: ["/2018/06/decidido-a-comprar-un-intel-nuc-bean-canyon-entre-las-opciones-que-he-evaluado/"]
date: 2018-06-23T22:30:00+02:00
updated: 2018-07-01T19:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:intel.svg"
tags: ["hardware", "planeta-codigo", "opinion"]
---

{{% post %}}

{{< logotype image1="intel.svg" title1="Intel" width1="300" >}}

El ordenador portátil que tenía sigue siendo perfectamente útil, sin embargo, en algunos casos concretos de mi uso la cantidad de memoria que tenía se me estaba quedando corta y cuando me pasa esto suelo aprovechar si alguien de mi entorno necesita ordenador traspasarlo y yo comprarme otro nuevo.

El ordenador que tenía era un [Sony VAIO de finales del 2012][elblogdepicodev-134] con un procesador [Intel i5-3210M][intel-i5-3210M] con gráfica integrada [HD 4000][intel-hd-4000], 8 GiB de memoria, almacenamiento de estado sólido Samsung 840 EVO de 256 GiB con interfaz SATA y una pantalla de resolución 1600x900. Durante todo este tiempo me ha funcionado a la perfección, incluso con su gráfica me fue suficiente para un entorno de escritorio [GNOME][gnome] con [GNU][gnu]/[Linux][linux] y he acabado muy contento con la marca [Sony][sony] al contrario de mi anterior portátil [Dell][dell] XPS 1530 de la que no pienso comprar nunca nada de esta marca, quizá tuve mala suerte pero el portátil Dell no fue barato, no acabé contento con la calidad del producto pasado el encantamiento inicial y al final acabó totalmente muerto sin ni siquiera encenderse.

Con lo que desde hace unos meses he empezado a barajar [opciones para comprar equipo][blogbitix-309] con los requisitos que tengo de ser lo más pequeño posible, silencioso, con 32 GiB de memoria, procesador con mínimo 4 cores y 8 hilos, no necesito tarjeta gráfica dedicada ya que no jugaré a juegos o una integrada con bajar calidad de detalles me servirá a modo ocasional. También quería una pantalla externa de 25" o 27" con resolución de 2K para mayor comodidad y evitar problemas por estar con la cabeza medio agachada durante bastante tiempo. Habiendo pasado 5 años desde mi anterior portátil Sony quiero que el ordenador sea un salto significativo en lo que tenía por eso el requerimiento de los 4 cores, los 32 GiB de memoria y la pantalla 2K. La memoria a pesar del caro precio de la DDR4 en el momento de este artículo. El SSD es la mejor inversión para mejorar el rendimiento que uno puede hacer, más que el procesador. El SSD probablemente elija uno en formato M.2 con interfaz NVMe que tienen una tasa de transferencia 3 veces superior a los SSD con interfaz SATA que ya son rápidos, los NVMe son algo más caros pero no mucho más.

He barajado varias opciones principalmente ordenadores en factor de forma pequeños como los [Intel NUC][intel-nuc], [Gigabyte Brix](http://es.gigabyte.com/products/select/desktop_platform/Mini-PcBarebone), [Zotac](https://www.zotac.com/es/product/mini_pcs/overview), [MSI Cubi](https://www.msi.com/Desktops/#?tag=Pro-Series), [Slimbook ONE][slimbook-one], [Slimbook PRO2][slimbook-pro2] o [AMD Ryzen][amd-ryzen] montando un [mini-ITX](https://es.wikipedia.org/wiki/Mini-ITX). Ya estoy casi decidido a lo que compraré y no quiero esperar mucho más a tener equipo propio de cuando se comercialicen y aunque estoy aguantando con un Mac del trabajo comentando [Tu con tu macOS yo con mi GNU/Linux][blogbitix-305]. Será con mucha probabilidad un Intel NUC Bean Canyon que se lanzarán en la segunda mitad del 2018.

A pesar de saber que todos los procesadores Intel de la última década está afectados por los [importantes problemas de seguridad Meltdown y Spectre][blogbitix-293] que se están mitigando por software, de momento no se ha descubierto una forma de aprovecharlos pero quizá en un futuro se pueda y afecte de forma importante al rendimiento para corregirlos si es que se puede. Pero es que el resto de opciones he ido descartando por otros motivos.

{{< image
    gallery="false"
    image1="logotype:meltdown.svg" optionsthumb1="200x200" title1="Meltdown"
    image2="logotype:spectre.svg" optionsthumb2="200x200" title2="Spectre"
    caption="Logotipos de Meltdown y Spectre" >}}

El precio que calculo tendrá el Intel NUC Bean Canyon con procesador [Intel i5 8250U](https://ark.intel.com/es-es/products/124967/Intel-Core-i5-8250U-Processor-6M-Cache-up-to-3_40-GHz) (4 núcleos, 8 hilos, 6 MiB cache) estará en el momento de su salida entre los 350 y 450€ sin incluir la memoria y el SSD, respecto al modelo con el [Intel i3 7100U](https://ark.intel.com/es-es/products/95442/Intel-Core-i3-7100U-Processor-3M-Cache-2_40-GHz) (2 núcleos, 4 hilos, 3 MiB cache) que cuesta unos 250€ se puede dudar si esos dos núcleos adicionales y 3 MiB de caché más en el procesador merecen la pena la diferencia de precio. En mi caso estoy estoy dispuesto a pagarlo queriendo tener algo significativamente con mejor rendimiento teórico que lo que tenía.

He revisado algunos análisis de los NUC y me han gustado, en este por ejemplo se explica cómo instalar la memoria, el SSD, como es la BIOS/UEFI y sus opciones de configuración como por ejemplo el _ring_ que puede mostrar la actividad del SSD y se pueden personalizar los colores, también muestra el rendimiento en algunos juegos. Y en otro la gráfica HD 620 es suficiente para jugar a Diablo 3 a 30 fotogramas por segundo en un resolución de 1080p bajando detalles, esta gráfica integrada equivale a una dedicada NVIDIA GeForcd 920m _laptop_ o GeForce 730 _desktop_ que no está del todo mal para un jugador ocasional si no importa jugar bajando algunos detalles de calidad. En GNU/Linux es posible jugar a juegos destinados a Windows con [PlayOnLinux](https://www.playonlinux.com/en/).

{{< youtube video="GBCI3Xg3b9g" >}}

{{< youtube video="su06vU8X1V8" >}}

Investigando más he visto también el [Intel i5 8259U](https://ark.intel.com/es-es/products/124967/Intel-Core-i5-8250U-Processor-6M-Cache-up-to-3_40-GHz), solo cambia el último número pero la diferencia es importante en el apartado gráfico ya que este en vez de una UHD 620 lleva una Iris Pro 655 que es nada más y nada menos el doble de potente en teoría gracias a que tiene el doble de _execution units_, _shading units_ y memoria dedicada de 128 MiB (que la UHD 620 no tiene). No llegará al nivel de una gráfica dedicada de [NVIDIA][nvidia] o [AMD][amd] pero es suficiente para el jugador ocasional.

* [Intel prepara sus equipos NUC con CPUs Coffee Lake-U con gráficos Iris Plus Graphics 655](https://elchapuzasinformatico.com/2018/07/intel-nuc-coffee-lake-u-iris-plus-graphics-655/)
* [First Online Stores Listing Coffee Lake NUCs](https://nucblog.net/2018/07/first-online-stores-listing-coffee-lake-nucs/)
* [Some More Coffee Lake NUC Details](http://nucblog.net/2018/06/some-more-coffee-lake-nuc-details/)
* [Intel NUC: Bean Canyon con Coffee Lake-U y 128 MB eDRAM en detalle](https://www.computerbase.de/2018-06/intel-nuc-bean-canyon-coffee-lake-u-iris-pro/) (en alemán, traducir)
* [Intel prepara Bean Canyon, NUC con GPU Iris Plus Graphics](https://www.tomshw.it/intel-prepara-bean-canyon-nuc-gpu-iris-plus-graphics-95577) (en italiano, traducir)

El uso que le daré es el de programación, virtualización, contenedores [Docker][docker], navegación, ofimática, leer PDF, tal vez algún juego ocasional, quizá Diablo 3 si pudiese, y usando GNU/Linux con la distribución [Arch Linux][archlinux]. En un futuro lo quiero como equipo servidor dedicado personal con por ejemplo [Nextcloud][nextcloud].

Los Gigabyte Brix ya hay algunos modelos con los Intel i5 8250U a un precio de unos 440€, sin embargo, no me gusta que no tienen luz indicador de actividad de SSD y creo que su BIOS/UEFI es en modo texto. La luz de actividad de SSD me parece importante para saber si en algún momento el ordenador se queda bloqueado o por algún tipo de problema lee, o peor escribe, constantemente al almacenamiento persistente cuando no debería. Los Zotac están dotados de una buena cantidad de puertos USB, incluso algunos tiene dos conexiones de red pero son algo caros y la mayoría de sus modelos están orientados a _gamers_, no son fáciles de encontrar ni siquiera en [Amazon][amazon] ni en [PC Componentes][pccomponentes] que es donde compraré finalmente el equipo. De MSI Cubi no hay muchos modelos y aún no he visto ninguno anunciado con un Intel de 4 núcleos. Los Slimbook ONE me gustaban pero los modelos con los Intel de 4 núcleos solo tienen una ranura de memoria, se les pueden instalar 32 GiB... cuando haya módulos de memoria de 32 GiB, ahora me tendría que conformar con 16 GiB.

{{< amazon
    linkids="9d60080eaf057ed135f9a7518f1e3e9d,17acb1dd67101dd9012b6020fa699714,84f61ad5974ea5bb1b1c0d644818349a,d2208cc6633acfc885c4f2f7ef94c7a0"
    asins="B07DGVT2Q9,B01N6SRT4H,B07D8ZK6QB,B01N6SG8DP" >}}

{{< amazon
    linkids="6c7ae73f4dc54a1da316d1b5292ca18d,6353b999569a8b0acfdc24bb1a9e4532,f2af5cb1f93ced34794cb7a11675b810"
    asins="B07CZ6GMRB,B019FRBHZ0,B07CGGNX7S" >}}

También he seguido los NUC con un Intel Core i3 7100U sin embargo tiene solo 2 cores y 4 hilos con 3 MiB de memoria será algo mejor que el Intel i3 3210M que tenía pero no me parece una mejora significativa habiendo pasado 5 años y a pesar de que el 7100U está fabricado a 14 nanómetros y el 3210M a 22 nanómetros, los NUC con [Intel i7 8650U](https://ark.intel.com/es/products/124968/Intel-Core-i7-8650U-Processor-8M-Cache-up-to-4_20-GHz) son más caros, sobre los 580€ y teniendo en cuenta que la memoria y SSD hay que comprarlos aparte. Los NUC más económicos sobre los 175€ con [Intel Pentium J5005](https://ark.intel.com/es/products/128984/Intel-Pentium-Silver-Processor-J5005-4M-Cache-up-to-2_80-GHz) solo admiten 8 gigas como máximo y me parece que están limitados artificialmente a ese tamaño máximo de memoria. En [Aliexpress][aliexpress] hay productos similares a los NUC con procesador i5 8250U pero a ver quien se la juega a importar desde China por aduanas y con la incertidumbre de lo que llega y que tal funciona, también he estado mirando placas [ARM][arm] aunque no con el objetivo que sea mi equipo principal, [7+ computadoras baratas del tamaño de una tarjeta de crédito basadas en GNU/Linux y ARM][blogbitix-304], como la [Rock64][rock64] que tiene 4 gigas pero siguiendo su desarrollo y foros no son pocos los problemas que la gente crea en su repositorio de [Github](https://github.com/ayufan-rock64/linux-build) con lo que me da que pensar que la experiencia podría ser algo frustrante, la arquitectura x86/x64 es mucho más compatible, en ARM cada placa es un mundo aparte de que su rendimiento es mucho más limitado.

Preferiría un microprocesador [AMD][amd] ya que solo están afectados por algunas variantes de _Spectre_, pero AMD no tiene tanta diversidad de productos como tiene Intel, no tienen nada parecido a los Intel NUC y en portátiles prácticamente todos los modelos equipan un Intel, quizá cambia ahora algo con los Ryzen. Por rendimiento y precio posiblemente elegiría un [AMD Ryzen 2400G](https://www.amd.com/es/products/apu/amd-ryzen-5-2400g) pero de momento las placas con el _chipset_ B450 para sacarle el máximo rendimiento aún no están disponibles, en la generación 1xxx de los Ryzen no hay modelos con gráfica integrada, tendría que ser un mini-ITX y el equipo me lo tendría que montar yo, no es difícil pero si tuviese algún imprevisto o incompatibilidad sería un problema por tener que devolver piezas y buscar otras, además no estoy seguro del ruido que haría, lo quiero muy silencioso al menos en tareas ofimáticas, navegación por internet y cosas simples, no estoy seguro de que lo sea con el ventilador de la CPU y fuente de alimentación. Ocupa más que un NUC para mi importante si en un futuro le quiero dar uso como ordenador secundario, servidor personal o quisiera traspasarlo. Pero por 400€ se tiene un ordenador muy decente en plataforma AMD Ryzen a falta de memoria y SSD.

{{< amazon
    linkids="a905704fcfef9ed2713a34d3ddb555fa,143ee2d24bf0649b2d0affddf13f24cb,5f0cd76fff30430ed354ec67845802e8,08b14b0134d00cc43b35b907b2815c0a,21cd29a0ba90015364a242ae10b47284"
    asins="B077BZRZVL,B079D8FD28,B073R8DB3G,B015UDUAKG,B019NWTCEA" >}}

La pantalla que estoy siguiendo es una 2K de [BenQ PD2700Q](https://amzn.to/2ltsRhf) en tamaño de 27”, 4K me parece excesiva resolución para ese tamaño de pantalla, a su máxima resolución en una 27" 4K las cosas ven muy pequeñas y tendría que escalarla a 2K, busco que sea IPS ya que los colores en este tipo de paneles se ven significativamente mejor que en un panel TN, uno al lado del otro la diferencia es clara. Apreciaré una mejora notable en la calidad de la pantalla de la que tenía en el portátil Sony. No es barata pero es algo que no necesitan renovarse tan a menudo como el ordenador seguramente pueda tener un uso durante una década si no presenta ningún problema de funcionamiento. Otros aspectos interesantes son ser regulable en altura y horizontalmente, colocable en posición vertical y puertos USB, HDMI y DisplayPort por otro lado una información en pantalla o OSD aceptable y de fácil configuración.

Entre otras cosas están el teclado y ratón que me conformo con un modelo básico y barato como el [Logitech MK120](https://amzn.to/2yCcE2T) y una alfombrilla que cubra la mesa.

{{< amazon
    linkids="1f32d07d228fd9c0eaaafcd1146b25d8,e51cd8d969848df3bb23c36529afdc8e,76bdcf7d3ff1a90eff397bc913a911d7"
    asins="B01K2210GS,B00564GWEI,B01HNYV65S" >}}

Otras personas no se lo piensan tanto pero en un área del que más o menos entiendo algo me gusta saber con mucho detalle lo que estoy comprando. Una vez que uno comprende las especificaciones técnicas de los productos, que diferencias hay entre cada una de ellas, se entiende las diferencias de precios y se compra con criterio.

No es lo mismo comprar un [NUC7i3BNH](https://ark.intel.com/products/95066/Intel-NUC-Kit-NUC7i3BNH) con un i3-7100 que tiene una gráfica [HD Graphics 620](https://en.wikipedia.org/wiki/Intel_HD_and_Iris_Graphics#Kaby_Lake) con un precio de unos 250€ que un [NUC7i5BNH](https://ark.intel.com/products/95067/Intel-NUC-Kit-NUC7i5BNH) con un [i5-7260U](https://en.wikipedia.org/wiki/List_of_Intel_Core_i5_microprocessors#%22Kaby_Lake-U%22_(dual-core,_14_nm)) que tiene un gráfica [Iris Plus 640](https://en.wikipedia.org/wiki/Intel_HD_and_Iris_Graphics#Kaby_Lake) con un precio de unos 360€.

La diferencia del precio está en que el procesador i5-7260U que tiene 4 MiB de cache por 3 MiB del i3-7100 que le proporciona algo más de rendimiento y la gráfica Iris del primero es el doble de potente con 48 _execution units_, 384 _shading units_, con memoria gráfica dedicada de 64 MiB eDRAM para proporcionar unos 700/800 GFLOPS de rendimiento contra la gráfica HD Graphics 620 que tiene 24 _execution units_, 192 _shading units_, 0 MiB eDRAM (sin memoria dedicada) con unos 400 GFLOPS. Aún siendo ambas gráficas integradas para jugadores ocasionales en todo caso mucho menos capaces que una dedicada con su memoria más veloz, la Iris Plus 640 del i5-7260U es el doble de potente que la HD Graphics 620 del i3-7100. Por este motivo se justifica la diferencia de precio entre los modelos. Dependiendo del uso que se le dé al NUC será preferible un modelo u otro.

En estas dos páginas se pueden conocer muchos detalles de los procesadores y gráficas de Intel.

* [Intel NUC][intel-nuc]
* [Intel HD, UHD and Iris Graphics](https://en.wikipedia.org/wiki/Intel_HD,_UHD_and_Iris_Graphics)

Cuando realmente compre el equipo publicaré varios artículos con el _unboxing_, instalación, análisis, uso y opinión personal de varios de ellos.

{{< reference >}}
* [The NUC Blog](http://nucblog.net/)
* [Intel NUC Roadmap 2018 – 2019](https://www.cnx-software.com/2017/09/20/intel-nuc-roadmap-2018-2019-gemini-lake-coffee-lake-and-kaby-lake-h/)
* [Intel HD Graphics - Nvidia and AMD Equivalents](https://www.pvladov.com/2015/07/intel-hd-graphics-nvidia-and-amd-equivalents.html)
* [Games Playable on Intel HD Graphics](https://www.pvladov.com/2014/10/games-playable-on-intel-hd-graphics.html)
* [How to Install Diablo 3 on Linux](https://news.softpedia.com/news/How-to-Install-Diablo-3-on-Linux-273950.shtml)
* [Intel NUC NUC7i7DNKE Intel Core i7-8650U](https://www.pccomponentes.com/barebone-intel-nuc-nuc7i7dnke-intel-core-i7-8650u)
* [Intel NUC NUC7PJYH2 Intel Pentium Silver J5005](https://www.pccomponentes.com/barebone-intel-nuc-nuc7pjyh2-intel-pentium-silver-j5005)
* [Sapphire lanzará placas base 5×5″ con una APU Ryzen V1000 soldada](https://elchapuzasinformatico.com/2018/07/sapphire-placas-base-5x5-apu-ryzen-v1000/)
{{< /reference >}}

{{% /post %}}
