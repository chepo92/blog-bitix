---
pid: 363
type: "post"
title: "Desempaquetado Intel NUC8i5BEK (Bean Canyon), HyperX Impact (RAM) y Samsung 970 EVO NVMe (SSD)"
url: "/2018/11/desempaquetado-intel-nuc-nuc8i5bek-bean-canyon-hyperx-impact-ram-y-samsung-970-evo-nvme-ssd/"
date: 2018-11-30T17:00:00+01:00
updated: 2019-09-16T00:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imageHead: "image:desempaquetado-nuc-2.jpg"
imagePost: "logotype:intel.svg"
tags: ["hardware", "planeta-codigo", "software"]
series: ["desempaquetado-tecnologia"]
summary: "Al fin tengo nuevo equipo que cumple con los requisitos que le demandaba. Principalmente que sea pequeño pero al mismo tiempo suficientemente potente para que me suponga un salto notable en rendimiento respecto al portátil que tenía. Después de decidirme entre nuevo portátil, ITX o NUC me decidí por unos de los nuevos Bean Canyon con procesador de 4 núcleos y 8 hilos, posibilidad de SSD con NVMe y hasta un máximo de 32 GiB de RAM."
---

{{% post %}}

{{< logotype image1="intel.svg" title1="Intel" width1="300" image2="hyperx.svg" title2="HyperX" width2="300" image3="samsung.svg" title3="Samsung" width3="300" >}}

Llevaba unos cuantos meses buscando entre las muchas opciones que hay un nuevo ordenador personal, casi un año desde enero del 2018 hasta ahora noviembre. La espera en algunos momentos se me ha hecho larga ya que sobre [Intel NUC][intel-nuc] por el que me he decidido como nuevo equipo ya había noticias de él en enero, sin embargo, hasta julio no los empezaba a distribuir [Intel][intel] y no ha sido hasta octubre y noviembre (coincidiendo con la semana del _black friday_ a finales de noviembre) cuando ha empezado a estar disponible en las tiendas para comprar. Ha sido tanto tiempo por el conjunto de características que deseaba que limitaba en buena medida las opciones entre las que podía elegir, más cuando en las tiendas aún no estaba el equipo que quería. Por algunas cosas aún seguiría esperando pero ya me decidido a quedarme con el NUC ya que no quiero esperar más a tener mi propio equipo. Por obligación estoy usando un Apple MacBook Pro del 2015 que tengo a mi disposición por motivos laborales pero echo de menos mi distribución [GNU][gnu]/[Linux][linux] preferida que es [Arch Linux][archlinux].

### Anteriores equipos

Siempre que puedo cuando algún familiar necesita un ordenador lo que hago es darle el que tengo yo y yo comprar uno nuevo, de esta forma al ordenador que entrego le doy una segunda vida para la que es perfectamente útil, así ha sido con los tres ordenadores que he comprado hasta el momento desde el 2002. Mis usos son mucho más exigentes, principalmente los equipos se me han quedado pequeños por la cantidad de memoria RAM. El primer ordenador que compré en el 2004 fue un ordenador de escritorio en formato torre tradicional ATX con un [AMD Athlon][amd-athlon] 1800+ (32 bits), 512 MiB de memoria, 60 GB de disco duro y tarjeta gráfica [NVIDIA GeForce2][nvidia-geforce2] MX 400 creo que con 32 MiB. Viendo que al finalizar su vida útil era algo complicado donar un ordenador ATX por tema de espacio el siguiente equipo que compré en el 2008 fue un portátil Dell XPS 1530 con un [Intel Core 2 Duo T8100][intel-core-t8100], 4 GiB de memoria, 320 GB de disco duro y gráfica [NVIDIA 8600GT](https://www.nvidia.es/object/geforce_8600_es.html) con 512 MiB, al poco tiempo de donarlo se estropeó, se quedó completamente muerto sin llegar a hacer ningún atisbo de encenderse, desde entonces no quiero nada que venga de Dell incluidos monitores tampoco me convenció pasado el tiempo de deslumbramiento inicial de su posesión la calidad de esta marca. El tercer equipo que compré a finales del 2012 también fue un portátil con la misma intención de poder donarlo llegado el momento, un Sony VAIO de 14" de resolución 1600x900 en panel TN con un [Intel Core i5 3210M][intel-i5-3210M] (Ivy Bridge, con un [gráfica integrada HD 4000][intel-hd-4000]), 8 GB de memoria con la que poder virtualizar más a gusto y un SSD Samsung 840 EVO de 250 GB SATA III (550 MB/s lectura, 500 MB/s escritura) que le puse a posteriori con el que el aumento de rendimiento en acceso a almacenamiento persistente. El SSD fue una gran mejora respecto a los discos duros mecánicos, mejor inversión que mejor procesador y más cantidad de memoria. Una pena que Sony haya abandonado el mercado de los portátiles porque con este Sony he estado realmente contento aún con algunos acabados en plástico y su pantalla TN.

{{< image
    gallery="true"
    image1="image:componentes.jpg" optionsthumb1="200x150" title1="4 GiB DDR2 de memoria RAM, AMD Athlon e Intel Core 2 Duo (T8100)"
    image2="image:amd-athlon.jpg" optionsthumb2="200x150" title2="Microprocesador AMD Athlon"
    image3="image:intel-core-2-duo.jpg" optionsthumb3="200x150" title3="Microprocesador Intel Core 2 Duo (T8100)"
    caption="4 GiB DDR2 de memoria RAM, AMD Athlon e Intel Core 2 Duo (T8100) de anteriores equipos" >}}

### La búsqueda

Empezaba por decidirme que formato de ordenador quería con [Intentando elegir portátil, NUC o mini ITX para comprar nuevo equipo][blogbitix-309] y pasado un tiempo ya casi optado por la opción que quería, [Decidido a comprar un Intel NUC entre las opciones que he evaluado][blogbitix-329] pasando por un [análisis del Slimbook Curve][blogbitix-311] que hice. Para el nuevo ordenador personal en cualquier opción que eligiese quería monitor externo, al final elegí un [Benq PD2700Q con resolución QHD (2560x1440) e IPS](https://amzn.to/2OFdFi9). Descarté un ATX por tamaño e igualmente un ITX que aún siendo un formato más pequeño seguía siendo grande para mi, a pesar de que con esta opción podría elegir un [AMD Ryzen][amd-ryzen] con mayor cantidad de núcleos. Un portátil seguía siendo una opción válida para poder donarlo en un futuro pero ocupa cierto espacio en la mesa y no tengo intención de moverlo por lo que la función que le da nombre no me es necesaria, si eligiese uno sería un [Slimbook Pro2](https://slimbook.es/en/pro-ultrabook-13-aluminium) seguramente. Como opción me quede con algún ordenador en formato Intel NUC, en un futuro cuando ya se me quede no válido para mis usos principales lo utilizaré como ordenador servidor de archivos, de descargas u otros usos personales que pueda darle como [OwnCloud][owncloud] o [GitLab][gitlab], como ocupa poco el espacio no será un problema.

### Intel NUC8i5BEK (Bean Canyon)

Es una pena que AMD no ofrezca equipos en formato de Intel NUC, muy posiblemente lo hubiese elegido principalmente por [los graves fallos de seguridad Meltdown y Spectre][blogbitix-293] que se hicieron públicos a inicios del 2018 que afectan más a Intel y que por ser un fallo del hardware solo se pueden no arreglar, simplemente mitigar haciendo que sea más difícil explotarlos y con pérdida de rendimiento. Para que en el cambio del equipo fuese una mejora significativa respecto al anterior portátil Sony que tenía quería que tuviese algún núcleo más en esta guerra entre Intel y AMD por ver quien ofrece más núcleos que parece por ahora va ganando AMD con su nueva arquitectura Zen y los problemas que está teniendo Intel para bajar de los 14 nanómetros de litografía para el tamaño de los transistores.

Además, tengo intención de intentar jugar algún juego como [Diablo 3][blizzard-diablo3] en GNU/Linux instalando la aplicación [Battle.net][blizzard-battlenet] de [Blizzard][blizzard] ejecutándola con [Wine][wine], [PlayOnLinux][playonlinux]/[Phoenicis][phoenicis] o [Winepak], al menos en una máquina virtual con [VirtualBox][virtualbox] lo conseguí a pesar de que no llegué a jugar pero si a instalar el juego. También intentaré instalar algún juego de [Steam][steam] y de [GOG][gog] sobre los que si lo consigo publicaré sus respectivos artículos para explicarlo. Al Diablo es casi seguro que jugaré si me funciona en GNU/Linux el resto es más intención de querer tener tiempo para jugar a estos juegos que lo vaya a hacer. Las gráficas integradas de Intel son muy básicas y no está destinadas principalmente a juegos, al menos no triple A nuevos, pero son suficientes para un jugador ocasional como yo que tampoco le importa bajar la resolución y detalles gráficos para tener unos FPS razonables para jugar o se conforma con juegos con unos años.

Los juegos que tengo en mi lista son los siguientes, juegos de rol o estrategia principalmente como se aprecia.

* [Diablo 3][blizzard-diablo3]
* [DirtRally](https://store.steampowered.com/app/310560/DiRT_Rally/)
* [Pathfinder: Kingmaker](https://store.steampowered.com/app/640820/Pathfinder_Kingmaker/)
* [Tochligh II](https://www.gog.com/game/torchlight_ii)
* [Grand Theft Auto V](https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/)
* [Tropico 5](https://store.steampowered.com/app/245620/Tropico_5/)
* [Baldur's Gate II: Enhanced Edition](https://store.steampowered.com/app/257350/Baldurs_Gate_II_Enhanced_Edition/)

Intel ha lanzado al mercado unos NUC con gráfica [AMD Vega][amd-vega] con los que si es posible a jugar bien a juegos, los NUC conocidos como [Hades Canyon][intel-nuc-hades-canyon]. Sin embargo, estos son sensiblemente caros para mi presupuesto y tienen una fuente de alimentación tan grande como el propio NUC con la que era un poco reticente. Al mismo tiempo había leído noticias de los [Bean Canyon][intel-nuc-bean-canyon] que cumplían tres requerimientos que tenía, al menos 4 núcleos y 8 hilos y una gráfica un poco mejor, de la gama Iris que tienen el doble de potencia de lo que ofrece Intel en algunos de sus procesadores y posibilidad de instalar hasta 32 GiB de memoria RAM (aunque en el vídeo de más abajo dicen que se puede instalar 64GB cuando haya módulos de 32GB, en la página oficial de Intel mencionan 32GB como máximo). Sin embargo, esto me implicaba esperar ya que estos equipos aún no estaban en el mercado, había NUCs con 4 núcleos pero con gráfica UHD 630 (GT2) no [Iris Graphics 655][intel-iris-graphics-655] y que eran más caros que el precio al que finalmente han salido los Bean Canyon que llevan también 4 núcleos y la citada Iris Graphics 655 (GT3). Las [gráficas Intel][intel-graphics] no son muy potentes comparadas con las dedicadas NVIDIA y AMD pero tienen muy buen soporte de controladores en GNU/Linux.

Hay varios modelos de Bean Canyon variando el procesador que incorporan, ligeramente en tamaño si ofrecen bahía para disco de 2.5" y en el precio. El más básico [NUC8i3BEK](https://www.intel.com/content/www/us/en/products/boards-kits/nuc/kits/nuc8i3bek.html) lleva un procesador [i3-8109U](https://www.intel.com/content/www/us/en/products/processors/core/i3-processors/i3-8109u.html) que tiene 2 núcleos y 4 hilos con 4 MiB de cache pero la misma gráfica Iris que los modelos mayores. El [NUC8i5BEK][intel-nuc8i5bek] lleva un procesador [i5-8259U][intel-i5-8259U] con 4 núcleos y 8 hilos con 6 MiB de cache, la misma Iris Graphics 655 de todos estos modelos. El modelo [NUC8i7BEK](https://www.intel.com/content/www/us/en/products/boards-kits/nuc/kits/nuc8i7beh.html) lleva un [i7-8559U](https://ark.intel.com/products/137979/Intel-Core-i7-8559U-Processor-8M-Cache-up-to-4-50-GHz-) con 8 MiB de cache. Todos los modelos tienen un TPD de 28W que es algo mayor que los 15W de la generación anterior pero para que no soponga un problema el calor generado en los Bean Canyon Intel ha incorporado un ventilador de un tamaño más grande para que aún así el ruido que hace al funcionar sea menor, además ha modificado las rejillas de ventilación para permitir mayor flujo de aire.

Todos poseen un puerto Ethernet Gigabit y WiFI AC con Bluetooth 5.0, una salida de vídeo HDMI 2.0a con soporte hasta 4K, salida Dislpay Port 1.2 integrada en el conector USB Type-C, cuatro puertos USB dos en la parte frontal (uno con soporte carga) y dos en la parte trasera, además del conector para la fuente de alimentación que tiene un tamaño pequeño comparado con la de los Hades Canyon, en la parte frontal está el botón de encendido y un LED indicador de actividad del SSD junto con la salida de audio en formato jack 3.5mm. Los modelos acabados en _K_ son más pequeños en tamaño vertical ya que no ofrecen bahía 2.5 pulgadas para un segundo disco duro con interfaz SATA III que si ofrecen los acabados en _H_. En un lateral se encuentra la ranura para [tarjetas SDXC][wikipedia-securedigital] con soporte UHS-I en formato microSD. En el interior están los dos _slots_ para la memoria pudiendo instalar hasta un total de 32 GiB DDR4 a 2400Mhz, también está el conector M.2 para un SSD con interfaz NVMe de longitud 2280 o 2242, también tiene un puerto SATA III.

Ocupan muy poco, tiene un tamaño de 11x11x3.6cm (ancho, largo, alto en centímetros) y la fuente de alimentación 13x5x3cm.

* [Next Unit of Computing (NUC)](https://en.wikipedia.org/wiki/Next_Unit_of_Computing)
* [Intel Graphics Technology](https://en.wikipedia.org/wiki/Intel_Graphics_Technology)
* [Intel's Bean Canyon NUCs Hit the Shelves](https://www.tomshardware.com/news/intel-bean-canyon-pricing-specs,37626.html)

{{< image
    gallery="true"
    image1="image:intel-nuc8i5-brief.png" optionsthumb1="600x450" title1="Intel NUC Bean Canyon (tall)"
    caption="Intel NUC Bean Canyon (slim y tall)" >}}

{{< image
    gallery="true"
    image1="image:especificaciones-modelos-intel-nuc-bean-canyon.png" optionsthumb1="600x450" title1="Especificaciones de los modelos Intel NUC Bean Canyon"
    caption="Especificaciones de los modelos Intel NUC Bean Canyon" >}}

En el momento de comercialización el modelo NUC8i3BEK tiene un precio sobre los 300€, el NUC8i5BEK sobre los 400€ y el NUC8i7BEK sobre los 500€. Los Hades Canyon llegan a los 800€ y 1000€ pero con mejor gráfica y mayor número de puertos de conexión. Con la aparición de los Bean Canyon los [Baby Canyon][intel-nuc-baby-canyon] de la generación anterior se han convertido en una opción desaconsejada por la reducida diferencia de precio, el [NUC7i5BNK](https://www.intel.com/content/www/us/en/products/boards-kits/nuc/kits/nuc7i5bnk.html) (i5-7260U) cuesta unos 360€ y tiene 2 núcleos menos que el NUC8i5.

* [Intel NUC8i3BEK](https://amzn.to/2OYiO0d)
* [Intel NUC8i3BEH](https://amzn.to/2RdbQq6)
* [Intel NUC8i5BEK](https://amzn.to/2R6OB0Q)
* [Intel NUC8i5BEH](https://amzn.to/2Ra7Arh)
* [Intel NUC8i7BEH](https://amzn.to/2Rc0MJw)

{{< amazon
    linkids="f3958514001abbfacb4d2d944dbaae79,222f9d7e5b7ea470df5df9148d6ab300,4f67d035caf205cfbefa4e5afe68674a,5b22e238d8496d8d76cd9397d7f13a2d,866537dd626ab63935971b2c0b3fa830"
    asins="B07JCF1BTZ,B07JB2M5JS,B07JBM1CFH,B07JCF1LCL,B07J6T8PH6" >}}

Opté por el modelo NUC8i5BEK sobre el NUC8i3BEK, por sus cuatro núcleos y sobre el NUC8i7BEH porque este no ofrece un aumente de rendimiento significativo sobre el i5 acorde a la diferencia de precio. Podría haber tenido alguna duda de si optar por el modelo sin bahía de 2.5 SATA (_slim_) o el modelo con bahía (_tall_) pero con los 500GB, si necesitase más podría ponerle además una micro SDXC de 128 GB o 256 GB con las que tendré suficiente espacio, con el disco de 250 GB del portátil Sony no llegaba a los 100 GB ocupados. Y en cualquier caso en el futuro si necesito más espacio los SSD se habrán abaratado mucho o aumentado su capacidad si continúan con su bajada de precios y aumento de capacidades a cada mes que pasa como hasta ahora.

El precio del NUC en el momento de salida es de unos 400€ no es muy superior respecto a los que costaría un equipo ITX teniendo en cuenta que en estos hay que comprar procesador, placa base, fuente de alimentación y caja, con la diferencia de que ocupa sensiblemente más. Un [AMD Ryzen 2400G](https://www.pccomponentes.com/amd-ryzen-r5-2400g-36ghz), [placa base MSI B450I](https://www.pccomponentes.com/msi-b450i-gaming-plus-ac), [fuente de 450W](https://www.pccomponentes.com/corsair-cx450-450w-80-plus-bronze) y caja ITX el conjunto se va a aproximadamente a los mismos 400€, el Ryzen tiene mejor gráfica integrada que la Intel pero el conjunto ocupa sensiblemente mucho más espacio.

He esperado todos estos meses hasta ahora que han aparecido a la venta en [Amazon][amazon] y también en [Pc Componentes][pccomponentes]. Varios meses antes se han publicado varios artículos analizando en buen detalle estos modelos de NUC asi como antes la [nota de prensa con la presentación oficial de Intel](https://newsroom.intel.com/news/intel-introduces-new-nuc-kits-nuc-mini-pcs-intel-nuc-family/) en el momento de su inicio de comercialización. En mi experiencia con este caso desde que aparecen las primeras noticias en los medios hasta que se empieza a comercializar y más tarde hasta que aparece en las tiendas y llega a tiendas como Amazon y Pc Componentes, puede pasar perfectamente más de medio año o un año.

* [Coffee Lake i3 NUC Review (NUC8i3BEH)](https://nucblog.net/2018/10/coffee-lake-nuc8i3beh-review/)
* [Coffee Lake i5 NUC Review (NUC8i5BEK / NUC8i5BEH)](https://nucblog.net/2018/11/coffee-lake-i5-nuc-review-nuc8i5bek-nuc8i5beh/)
* [Coffee Lake i7 NUC Review (NUC8i7BEH)](https://nucblog.net/2018/11/coffee-lake-i7-nuc-review-nuc8i7beh/)
* [Gaming on Bean Canyon NUCs – Comparison](https://nucblog.net/2018/11/gaming-on-bean-canyon-nucs/)
* [Intel NUC (NUC8i7BEH) Mini-PC Kit First Impressions](https://www.thurrott.com/hardware/190478/intel-nuc-nuc8i7beh-mini-pc-kit-first-impressions)
* [Intel NUC Kit NUC7PJYH Review](https://www.cnx-software.com/2018/05/16/intel-nuc-kit-nuc7pjyh-review/)
* [Nuevos NUC Intel Bean Canyon: ahora con procesadores Coffee Lake-U](https://hardzone.es/2018/07/25/nuc-intel-bean-canyon-coffee-lake-u/)

En el primer vídeo se hace una análisis del NUC y en el siguiente se puede observar como se comporta en varias pruebas de rendimiento y juegos.

{{< youtube video="MMuJlVW7mQE" >}}

{{< youtube video="4miXwdJMG1s" >}}

También se puede ver una comparativa del rendimiento entre los modelos de procesador de los Bean Canyon y la generación anterior. Los 2 núcleos y cuatro hilos adicionales de la octava generación se notan al comparar los resultados en multihilo.

* [NUC7i5BNK vs NUC8i5BEK](https://browser.geekbench.com/v4/cpu/compare/10847596?baseline=10972155)

### Memoria HyperX Impact

Como desarrollador suelo virtualizar sistemas operativos con [VirtualBox][virtualbox] o iniciar contenedores de [Docker][docker] que demandan en buena medida cantidad de memoria. Todos los equipos principalmente se me quedan pequeños por la cantidad de memoria mucho más incluso que por potencia de procesador o por la velocidad o tamaño del almacenamiento ya habiendo pasado a los SSD, incluso los 8 GiB del portátil Sony se me quedaron pequeños. La memoria DDR4 está muy cara, más incluso que en el momento de su salida (casi el doble) lo que es una anomalía en la tecnología que siempre baja de precio por la presión de los avances, los fabricantes deben estar teniendo unos márgenes de beneficios brutales con la memoria DDR4. La excusa es que han preferido producir memoria NAND y RAM para teléfonos móviles que memoria RAM para ordenadores. En el 2019 está previsto que baje de precio entre un 10% y 20% por menor demanda.

Probablemente 16 GiB me sería suficientes pero no me importa ir a por los 32 GiB aún con el consiguiente aumento de precio. Del modelo de la memoria no tengo muchos requerimientos simplemente una que fuese de 2400Mhz y estuviese entre las [memorias validada por Intel](http://compatibleproducts.intel.com/ProductDetails/ExportPeripheralInfo?moduleName=Intel%C2%AE%20NUC&productType=Kits&productName=Intel%C2%AE%20NUC%20Kit%20NUC8i5BEK) para estos NUC. Hay módulos de 16 GB que se venden sueltos o _kits_ de dos pares de módulos para hacerlos funcionar en _dual channel_. Dependiendo del momento puede salir más económico comprar los dos módulos por separado o comprar un _kit_. La ventaja del _kit_ es que están validados para hacerlos funcionar en _dual channel_ y es que los módulos separados pueden tener alguna diferencia según el momento en que fuero fabricados ya que podrían haberse producido con componentes de diferentes proveedores pudiendo hacer que tengan diferencias que provocase errores en el sistema. Comprando los dos módulos en el mismo momento es raro que tenga alguna diferencia pero por asegurar se puede optar por el _kit_.

* [Kits de RAM vs módulos individuales, ¿existe realmente alguna diferencia?](https://foro.noticias3d.com/vbulletin/showthread.php?t=433238)
* [Difference between memory kits and single memory modules](http://www.tomshardware.co.uk/forum/270105-30-difference-memory-kits-single-memory-modules)
* [HyperX Impact Memory Module Specifications](https://www.kingston.com/datasheets/HX424S14IBK2_32.pdf)

Dos modelos validados por Intel compatibles con esto NUC son [HyperX Impact](https://amzn.to/2K7lnfs) de Kingston y los [G.Skill Ripjaws](https://amzn.to/2PuxIjO) más o menos en el mismo precio, los HyperX tienen algo mejor latencia aunque será poco apreciable en el uso del ordenador. Los 32 GiB en el momento en que los he comprado están entre 280 y 320€. Al final opté por la memoria HyperX Impact.

{{< amazon
    linkids="ef22daf2b91899709c8686b7db8a49c7,06d1aea567128e234b58d2e800ef099c"
    asins="B01BNJL8I4,B017UC3UPW" >}}

* [Memoria HyperX Impact](https://www.hyperxgaming.com/es/memory/impact-ddr4)

### Samsung 970 EVO M.2 NVMe

El almacenamiento en formato SSD está bajando notablemente de precio a cada mes o par de meses que pasa. En tamaño de 250 GB ya tienen un precio muy asequible e incluso en 500 GB y 1 TB no son prohibitivos. Cambiar el disco duro por un SSD es la mejor inversión a realizar en un ordenador si la cantidad de memoria es suficiente, cualquier procesador cumple para usos ofimáticos. Se puede optar por un SSD con interfaz SATA III con una velocidad de lectura y escritura de 550 / 500 MB/s que ya es bastante rápido para muchos usuarios o en formato M.2 NVMe que ofrece sensiblemente mayores tasas de transferencia de hasta 3500 / 2500 MB/s.

Por la cantidad de datos que tengo el tamaño que necesito está entre 250 y 500 considerando que una gran parte de los datos los tengo en dos discos duros USB externos por duplicado y el equipo solo contendría los más importantes. He barajado un M.2, ya que es el conector que ofrece el Intel NUC que he elegido, como el [Samsung 970 EVO](https://amzn.to/2OITkDX) y con interfaz SATA III de 500 GB con conector M.2 había barajado el [Crucial MX500](https://amzn.to/2DGhIFg). Por comparar como han evolucionado el SSD que compré en el 2014 para el Sony Vaio era un Samsung 840 EVO de 250 GB me costó 125€ y ahora un NVMe ofrece el doble de capacidad y a una velocidad sensiblemente superior y en formato SATA III doble de capacidad a un precio sensiblemente inferior.

Al final he optado por el Samsung 970 EVO, con el Crucial con interfaz SATA III tendría creo que suficiente pero no estoy ajustando mucho el precio, al igual que en la memoria. 

{{< amazon
    linkids="d8ee308b386ae8fc1ed0978391f98ade,048e7dde98c59aff3bdf3eda82b0057a,9843c55e883197e8c5108e19cff142ae,30e60238410c4c1f9584f13e067e8cca"
    asins="B07MFBLN7K,B077SQ8J1V,B078WST5RK,B077SF8KMG" >}}

Es muy posible que compre adicionalmente una [tarjeta micro SDXC de 128 GB](https://amzn.to/2BHXPeA) o [de 256 GB](https://amzn.to/2Qq04vm) como una forma de ampliar la cantidad de almacenamiento que tengo disponible y como carperta de descargas y archivos temporales. Las SDXC admiten hasta un almacenamiento de 2 TiB que en un futuro se harán más asequibles en precio.

{{< amazon
    linkids="69626bf45c9c279219546f122fd33a06,186319e6ae3e35777b9412d236a46297"
    asins="B06XFHQGB9,B06XFS5657" >}}

* [Samsung 970 EVO NVMe M.2 500GB SSD](https://www.samsung.com/es/memory-storage/ssd-970-evo/MZ-V7E500BW/)
* [Samsung EVO Plus microSD](https://www.samsung.com/es/memory-storage/evo-plus-microsd-with-adapter-mb-mc128gaeu/MB-MC128GAEU/)

### Desempaquetado

Con estos componentes he realizado el pedido en [Amazon][amazon] ya que es la tienda que suelo utilizar para las compras en internet que hago, por comodidad, ahorrar tiempo, poder informarme lo mejor que puedo con las opiniones de otros clientes y por el amplio catálogo de productos que tiene. En total el conjunto de todos estos componentes me ha salido por unos 830€, algo más barato que el portátil Sony si tengo en cuenta el SSD que le compre luego pero sensiblemente mejor con el lustro que ha pasado entre uno y otro.

#### NUC

La caja del NUC es muy pequeña en la que se incluye el NUC y la fuente de alimentación que es mucho más pequeña que el ladrillo de los Hades Canyon.

{{< image
    gallery="true"
    image1="image:desempaquetado-nuc-1.jpg" optionsthumb1="200x150" title1="Caja Intel NUC8i5BEK"
    image2="image:desempaquetado-nuc-2.jpg" optionsthumb2="200x150" title2="Caja Intel NUC8i5BEK"
    image3="image:desempaquetado-nuc-3.jpg" optionsthumb3="200x150" title3="Caja Intel NUC8i5BEK" >}}
{{< image
    gallery="true"
    image1="image:desempaquetado-nuc-4.jpg" optionsthumb1="200x150" title1="Caja Intel NUC8i5BEK"
    image2="image:desempaquetado-nuc-5.jpg" optionsthumb2="200x150" title2="Caja Intel NUC8i5BEK"
    image3="image:desempaquetado-nuc-6.jpg" optionsthumb3="200x150" title3="Caja Intel NUC8i5BEK"
    caption="Caja Intel NUC8i5BEK" >}}

Aspecto exterior del NUC.

{{< image
    gallery="true"
    image1="image:desempaquetado-nuc-7.jpg" optionsthumb1="200x150" title1="Aspecto exterior Intel NUC8i5BEK"
    image2="image:desempaquetado-nuc-8.jpg" optionsthumb2="200x150" title2="Aspecto exterior Intel NUC8i5BEK"
    image3="image:desempaquetado-nuc-9.jpg" optionsthumb3="200x150" title3="Aspecto exterior Intel NUC8i5BEK" >}}
{{< image
    gallery="true"
    image1="image:desempaquetado-nuc-10.jpg" optionsthumb1="200x150" title1="Aspecto exterior Intel NUC8i5BEK"
    image2="image:desempaquetado-nuc-11.jpg" optionsthumb2="200x150" title2="Aspecto exterior Intel NUC8i5BEK"
    image3="image:desempaquetado-nuc-12.jpg" optionsthumb3="200x150" title3="Aspecto exterior Intel NUC8i5BEK"
    caption="Aspecto exterior Intel NUC8i5BEK" >}}

La fuente de alimentación del NUC y el soporte VESA con sus tornillos.

{{< image
    gallery="true"
    image1="image:desempaquetado-nuc-13.jpg" optionsthumb1="200x150" title1="Fuente de alimentación"
    image2="image:desempaquetado-nuc-14.jpg" optionsthumb2="200x150" title2="Soporte VESA"
    caption="Fuente de alimentación y soporte VESA" >}}

Manuales e instrucciones del NUC.

{{< image
    gallery="true"
    image1="image:instrucciones-1.jpg" optionsthumb1="200x150" title1="Manuales e instrucciones del NUC"
    image2="image:instrucciones-2.jpg" optionsthumb2="200x150" title2="Manuales e instrucciones del NUC"
    image3="image:instrucciones-3.jpg" optionsthumb3="200x150" title3="Manuales e instrucciones del NUC"
    caption="Manuales e instrucciones del NUC" >}}

En el interior se aprecia el conector SATA aunque para usarlo en la versión _slim_ hay que dejar la tapa inferior sin poner para poder añadir el disco 2.5" y los cables que necesita. La parte interior de la tapa inferior tiene una tira de un material que hace de disipador para el SSD NVMe.

{{< image
    gallery="true"
    image1="image:nucblog-interior-1.jpg" optionsthumb1="200x150" title1="Placa base del NUC"
    caption="Placa base del NUC" source="nucblog.net" >}}

El ventilador es más grande que en generaciones anteriores.

{{< image
    gallery="true"
    image1="image:nucblog-nuc8i3beh-fan.jpg" optionsthumb1="200x150" title1="Ventilador"
    image2="image:nucblog-nuc8i3beh-heatsink.jpg" optionsthumb2="200x150" title2="Disipador"
    caption="Ventilador y disipador" source="nucblog.net" >}}

#### Memoria

El _kit_ de la memoria DDR4 a 2400 Mhz no tiene nada especial. Cada módulo está empaquetado en un _blister_ de plástico.

{{< image
    gallery="true"
    image1="image:desempaquetado-ram-1.jpg" optionsthumb1="200x150" title1="Desempaquetado memoria HyperX Impact"
    image2="image:desempaquetado-ram-2.jpg" optionsthumb2="200x150" title2="Desempaquetado memoria HyperX Impact"
    image3="image:desempaquetado-ram-3.jpg" optionsthumb3="200x150" title3="Desempaquetado memoria HyperX Impact"
    caption="Desempaquetado memoria HyperX Impact" >}}

#### SSD

El _stick_ del SSD también es muy pequeño solo mide 8cm de largo y unos 2,5 cm de ancho.

{{< image
    gallery="true"
    image1="image:desempaquetado-ssd-1.jpg" optionsthumb1="200x150" title1="Desempaquetado SSD Samsung 970 EVO NVMe"
    image2="image:desempaquetado-ssd-2.jpg" optionsthumb2="200x150" title2="Desempaquetado SSD Samsung 970 EVO NVMe"
    image3="image:desempaquetado-ssd-3.jpg" optionsthumb3="200x150" title3="Desempaquetado SSD Samsung 970 EVO NVMe" >}}
{{< image
    gallery="true"
    image1="image:desempaquetado-ssd-4.jpg" optionsthumb1="200x150" title1="Desempaquetado SSD Samsung 970 EVO NVMe"
    caption="Desempaquetado SSD Samsung 970 EVO NVMe" >}}

### Montaje de memoria y SSD

Montar la memoria y el SSD en el NUC es sencillo. Para acceder al interior del NUC hay que quitar los cuatro tornillos de la tapa inferior que da acceso a los _slots_ de memoria y el conector M.2, estos tornillos tienen unos topes de modo que no se puede quitarlos completamente tampoco se perderán.

La memoria se coloca en el _slot_ con cierta inclinación unos 30 grados y posteriormente se empuja hacia abajo con la precaución antes de tocar el módulo desconectar el NUC de la fuente de alimentación y descargar la electricidad estática tocando algo de metal que esté conectado a tierra. No es necesario hacer mucha fuerza ni hace falta forzarlo, como los _slots_ están uno encima del otro primero se coloca el módulo que queda abajo. Aunque no es necesario hacer mucha fuerza me ha dado la sensación de que hay que hacer más de la que debería ser necesaria.

El SSD se coloca de forma similar, con cierta inclinación al presentar el SSD en el contector y empujando hacia los lados alternativmente hasta que quede bien insertado en el conector sin hacer mucha fuerza, finalmente se empuja hacia abajo y con un tornillo situado al final del _stick_ fijado en su posición final para que no se mueva.

Una vez colocados ambos elementos se vuelve a colocar la tapa inferior que hace de base en el NUC y ya está listo para el primer encendido para instalarle el sistema operativo o entrar en la BIOS con las tecla F2, F10 para seleccionar la unidad de inicio y F7 para realizar una actualización del firmware y BIOS.

{{< image
    gallery="true"
    image1="image:montaje-nuc-1.jpg" optionsthumb1="200x150" title1="Montaje de memoria y SSD M.2"
    image2="image:montaje-nuc-2.jpg" optionsthumb2="200x150" title2="Montaje de memoria y SSD M.2"
    image3="image:montaje-nuc-3.jpg" optionsthumb3="200x150" title3="Montaje de memoria y SSD M.2"
    caption="Montaje de memoria y SSD M.2" >}}

El ventilador está en la parte superior del NUC, para acceder a él hay que desmontar la placa base con el objetivo de limpiar el polvo que se le acumule para que su capacidad de refrigeración sea eficiente. En el momento que funcione más rápidamente de lo normal en tareas que no requiere demasiada computación hay que hacerle una limpieza y al disipador.

* [Desmontaje de un Intel NUC](https://www.ifixit.com/Guide/Intel+NUC5i7RYH+Disassembly/98011)

### Análisis

El NUC es realmente pequeño con sus 11x11cm ocupa muy poco espacio, además la versión _slim_ solo tiene 3,6 cm de altura. Para instalar el sistema operativo, en mi caso la distribución Arch Linux de GNU/Linux he tenido que deshabilitar el _Secure Boot_ desde la BIOS a la que se accede pulsando la tecla F2 en el momento que se inicia el sistema, con la tecla F10 se puede elegir la unidad de inicio que será una memoria USB formateada con el medio de instalación, la tecla F7 sirve para instalar actualizaciones del firmware y BIOS cuando Intel los publica, el nuevo firmware se ha de guardar en una memoria USB formateada en FAT32. La BIOS es gráfica y se puede manejar con ratón con opciones que se muestran en las capturas. Por el contrario la selección de unidad de inicio y actualización del firmware son basadas en texto.

{{< image
    gallery="true"
    image1="image:nucblog-nuc8i5_bios1.png" optionsthumb1="200x150" title1="BIOS"
    image2="image:nucblog-nuc8i5_bios2.png" optionsthumb2="200x150" title2="BIOS"
    image3="image:nucblog-nuc8i5_bios3.png" optionsthumb3="200x150" title3="BIOS" >}}
{{< image
    gallery="true"
    image1="image:nucblog-nuc8i5_bios4.png" optionsthumb1="200x150" title1="BIOS"
    image2="image:nucblog-nuc8i5_bios5.png" optionsthumb2="200x150" title2="BIOS"
    image3="image:nucblog-nuc8i5_bios6.png" optionsthumb3="200x150" title3="BIOS" >}}
{{< image
    gallery="true"
    image1="image:nucblog-nuc8i5_bios7.png" optionsthumb1="200x150" title1="BIOS"
    image2="image:nucblog-nuc8i5_bios8.png" optionsthumb2="200x150" title2="BIOS"
    image3="image:nucblog-nuc8i5_bios9.png" optionsthumb3="200x150" title3="BIOS"
    caption="BIOS" source="nucblog.net" >}}

Usando el [_script_ para instalar Arch Linux de forma automatizada, desatendida y personalizable][blogbitix-204] conseguí instalarlo a la primera sin nada grave que no halla podido resolver. En GNU/Linux todo el hardware ha sido reconocido correctamente sin necesidad de instalar controladores adicionales. Desde la WIFI, Bluetooth, Thunderbolt, el SSD NVMe, puertos USB, tarjeta gráfica, salida HDMI y por supuesto los 32GiB de memoria. El monitor Benq con su resolución QHD también ha sido reconocido correctamente también en la instalación. Aún tengo que probarlo más pero tengo la sensación de que el texto está mejor definido en GNOME que en macOS. Lo anterior puede ser una percepción pero por otro lado me he dado cuenta es que en macOS sacando el audio por el cable HDMI no se puede controlar el volumen ni silenciarlo, en Arch Linux con GNOME si se puede controlar el volumen del sonido cuando se emite por el cable HDMI también usar las teclas para silenciarlo.

Comparado con el anterior portátil Sony que tenía el rendimiento se nota algo mejor por el SSD NVMe con el que las aplicaciones se inician más rápido, la memoria DDR4 más veloz y mejor CPU además de ser con 4 núcleos. Aunque el disco es NVMe y ofrece más ancho de banda que SATA y es más rápido se nota algo pero la diferencia no es tan apreciable como pasar de disco mecánico a SSD. En tareas ofimáticas y de navegación el ventilador se enciende a ratos y estando en silencio se oye ligeramente pero no es molesto, la temperatura de la CPU se mantiene entre 30º y 40º encendiéndose el ventilador de forma ligera. En un juego como Diablo 3 la temperatura de la CPU sube y se mantienen en 75º pero al tacto no parece que coja mucho calor, con el ventilador funcionando para mantener la temperatura tampoco hace mucho ruido.

Me están entrando dudas de si mejor hubiese optado por la versión BEH (_tall_) con bahía para disco SATA de 2.5" en vez de usar una tarjeta SDXC para tener más espacio de almacenamiento, un SSD y una SDXC tienen prácticamente el mismo precio por GB pero el disco SATA es más rápido, aunque es posible que en un futuro los SATA vayan desapareciendo por su limitación de transferencia.

Aún tengo que probarlo más pero estos NUCs se ajustan perfectamente a lo que finalmente estaba buscando en un futuro espero que AMD desarrolle un producto similar. Para tareas ofimáticas y de navegación por internet es más que suficiente, los ordenadores ATX e ITX quedan para los que quieren un rendmiento máximo o quieren jugar a las últimas novedades en juegos con grandes detalles y a altas resoluciones.

### Apple Mac mini

Un equipo equivalente a los NUC son los [Apple Mac mini](https://www.apple.com/es/mac-mini/). Después de unos años Apple los ha renovado como unos procesadores más recientes, más cantidad de memoria y SSD instalable. Pero a unos precios muy exagerados, tanto que el Mac mini con una configuración similar a la de este artículo del NUC saldría por 2100€, bastante más del doble. Salvo que uno quiera macOS sí o sí y uno esté muy obcecado en querer Apple no es una opción en mi opinión acertada. Paro bueno esto pasa con cualquier producto de Apple no solo es específico de Mac mini aunque como se aprecia es un ejemplo claro y sangrante al compararlo. Por si fuera poco el procesador no soporta HyperThreading o SMT con lo que son 4 núcleos y 4 hilos y la gráfica es una UHD 630 la mitad de potente que la Iris Graphics 655.

Por otra parte al comparar el monitor entre usar una Mac Book Retina de 13" y el NUC me he dado cuenta de dos cosas. Una que al usar el monitor externo Benq PD2700Q con resolución QHD me da la sensación de que el texto se ve mejor al usarlo con el NUC que con el Mac, esto puede ser una sensación pero la segunda cosa de la que me he dado cuenta que no admite interpretación es que cuando se saca el audio junto con el vídeo por el cable HDMI al monitor y de este el audio se conecta a unos altavoces por el jack 3.5mm en macOS el contol de volumen de audio queda desactivado de modo que si no tienes unos altavoces con control de volumen propio es muy incómodo usar los botones del monitor para regularlo, en GNOME se puede controlar el volumen desde el entorno de escritorio que en una configuración ordenador conectado a un monitor externo es lo que un usuario espera y lo más cómodo.

{{< image
    gallery="true"
    image1="image:mac-mini-1.jpg" optionsthumb1="200x150" title1="Mac mini (2018)"
    image2="image:mac-mini-2.jpg" optionsthumb2="200x150" title2="Mac mini (2018)"
    image3="image:mac-mini-3.jpg" optionsthumb3="200x150" title3="Mac mini (2018)"
    caption="Mac mini (2018)" >}}

En cualquier caso no entraba dentro de mis planes un Mac mini ni aunque tuviese el mismo precio del NUC ya que prefiero GNU/Linux como detallo en [Tú con tu Mac, yo con mi GNU/Linux][blogbitix-305].

<table class="table">
    <thead class="thead-light">
        <tr class="thead-light">
            <th>Componente</th>
            <th>Apple Mac mini</th>
            <th>Intel NUC Bean Canyon</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ordenador</td>
            <td style="text-align: right;">900€</td>
            <td style="text-align: right;">300€ (i3), 400€ (i5), 500€ (i7)</td>
        </tr>
        <tr>
            <td>Memoria 32 GiB</td>
            <td style="text-align: right;">+720€</td>
            <td style="text-align: right;">+300€</td>
        </tr>
        <tr>
            <td>SSD 500GB</td>
            <td style="text-align: right;">+480€</td>
            <td style="text-align: right;">+120€</td>
        </tr>
        <tr>
            <td>Total</td>
            <td style="text-align: right;">2100€</td>
            <td style="text-align: right;">820€ (i5)</td>
        </tr>
    </tbody>
</table>

### Slimbook One

También hubiese podido optar por un [Slimbook One](https://slimbook.es/one) per no me convenció porque solo tienen un _slot_ de memoria, admite hasta 32GB pero aún no hay módulos de esa cantidad si no es en _kit_, lo que en la práctica limita su memoria a 16GB. La tarjeta gráfica que tienen es una UHD 630 como comentaba la mitad de potente en teoría que la Iris Graphics 655. El diseño que tiene no es muy atractivo y no tiene tarjeta microSD como una forma de ampliarle el almacenamiento. El ONE sin descuento parte de 480€ más caro que los 400€ del Intel NUC.

{{< image
    gallery="true"
    image1="image:slimbook-one-1.jpg" optionsthumb1="200x150" title1="Slimbook ONE (v2)"
    image2="image:slimbook-one-2.jpg" optionsthumb2="200x150" title2="Slimbook ONE (v2)"
    image3="image:slimbook-one-3.jpg" optionsthumb3="200x150" title3="Slimbook ONE (v2)"
    caption="Slimbook ONE (v2)" >}}

### Switch HDMI y cables, monitor con el ordenador y consola

Si el monitor es compartido tanto por el ordenador como por [una consola como la PlayStation 4 como muestro en su desempaquetado][blogbitix-432] es necesario un adaptador o [_switch_ HDMI de múltiples entradas](https://amzn.to/2S7G0g5) y una salida para usar ambos sin necesidad de conectar y desconectar cables, no son caros y ofrecen mucha comodidad, con un botón se alterna entre la entrada del ordenador y la consola, además detecta la entrada pdesey se cambia automáticamente.

{{< amazon
    linkids="3a5a1b554cb717c2763220c81be8b6fa,3954e70941543ecb9ada5c76d26024e9,f5c9c155adf728e8d3217ab7e723d14c,87c2e46fa9d13984b35d29ce7d5761ae"
    asins="B07KSYS2L4,B00NO73MUQ,B07RY2X9LF,B01J8S6X2I" >}}

Otro accesorio de utilidad es un [teclado pequeño con soporte dual para bluetooth y comunicación inalámbrica 2.4 Ghz](https://amzn.to/36SUMMN) que es compatible tanto con el ordenador como una _smart tv_, teléfono Android o una PlayStation 4. En mi caso un uso sería tener el teclado pequeño con soporte de ratón para ver películas desde la cama y poder controlar el PC a distancia, incluye teclas multimedia y una rueda específica para hacer desplazamiento vertical muy cómoda al visualizar páginas web, además es retroiluminado perfecto para utilizarlo a oscuras si se está viendo una película. Funciona con una batería recargable.

{{< amazon
    linkids="ac037d001d51556cbf14f680b30146c2"
    asins="B07RQBRRR7" >}}

### Nuevo escritorio

Este es la dispoción que tenía antes con el Sony VAIO y la que tengo ahora con el NUC, la pantalla externa una [Benq PD2700Q](https://amzn.to/2Qjs7MT) de 27" y resolución QHD (2560x1440), teclado y ratón inalámbrico [V7 CKW200](https://amzn.to/2TKzmMT) a los que añadí un ratín [Logitech M90](https://amzn.to/2S9Bex2) con cable básico de tres botones ya que el ratón inalámbrico en algunos momentos funciona con problemas, el teclado sin embargo funciona perfectamente, y [alfombrilla](https://amzn.to/2P5jocE) para ellos junto con un [concentrador USB 2.0 de Amazon Basics](https://amzn.to/2BwubZJ). He ganado mucho espacio en la mesa si en algún momento quiero trabajar en ella para otras cosas, la pantalla la tengo ahora al final de la mesa y el NUC me ocupa menos espacio que el portátil además de que puedo colocarlo en cualquier sitio.

{{< amazon
    linkids="757f02716b01871e45865d4a9f1b75c6,49e0edf2268751aed306f89bf5a657f6,fbe6dbb7cf4d1a724de6c75d49946d10"
    asins="B01K2210GS,B0758DMHZG,B003D8ZT0C" >}}

{{< amazon
    linkids="0aaffd200da53423d2078de9209797e6,15cb29717d9441d0d13f0720d9731a0d"
    asins="B01KC4DR1C,B00E0NHMNQ" >}}

He tenido que esperar muchos meses a tener esta configuración, entre elegir que quería y aguantar a que lo que quería saliese al mercado. No se si la siguiente vez esperaré tanto ya que en algunos momento se me ha hecho un tanto difícil sobre todo los fines de semana y algunos días de vacaciones. Pero bueno ya lo tengo y ahora solo me queda sacarle provecho, no tener GNU/Linux durante un tiempo ha hecho que no haya escrito artículos sobre él, en cuanto lo pruebe más a fondo muy posiblemente escriba algunos artículos, empezando por esos que comento de como poder jugar a juegos con Wine, PlayOnLinux/Phoenicis, Winepak además de Steam y GOG en algún momento más tarde.

{{< image
    gallery="true"
    image1="image:gnome.png" optionsthumb1="600x450" title1="Intel NUC8i5BEK con Arch Linux y GNOME"
    caption="Intel NUC8i5BEK con Arch Linux y GNOME" >}}

Este es [el escritorio que tenía antes][blogbitix-201], con mucho espacio desaprovechado por la ubicación del portátil. 

{{< image
    gallery="true"
    image1="image:escritorio-portatil-1.jpg" optionsthumb1="200x150" title1="Escritorio con portátil"
    caption="Escritorio con portátil" >}}

Y el que tengo ahora.

{{< image
    gallery="true"
    image1="image:escritorio-nuc-1.jpg" optionsthumb1="200x150" title1="Escritorio con NUC"
    image2="image:escritorio-nuc-2.jpg" optionsthumb2="200x150" title2="Escritorio con NUC"
    image3="image:escritorio-nuc-3.jpg" optionsthumb3="200x150" title3="Escritorio con NUC"
    caption="Escritorio con NUC" >}}

> Software. Hardware. Complete.

{{< reference >}}
* [Intel Download Center](https://downloadcenter.intel.com/)
* [Intel Download Center - Intel NUC](https://downloadcenter.intel.com/product/98414/Mini-PCs)
* [Intel NUC8i5BEK/NUC8i5BEH Brief](https://www.intel.es/content/www/es/es/products/docs/boards-kits/nuc/nuc8i5bek-nuc8i5beh-brief.html)
* [Intel® NUC Kit NUC8i5BEK Compatibility Tool](http://compatibleproducts.intel.com/ProductDetails/ExportPeripheralInfo?moduleName=Intel%C2%AE%20NUC&productType=Kits&productName=Intel%C2%AE%20NUC%20Kit%20NUC8i5BEK)
* [Intel® NUC Products NUC8i3BE/NUC8i5BE/NUC8i7BE Technical Product Specification ](https://www.intel.com/content/dam/support/us/en/documents/mini-pcs/NUC8i3BE_NUC8i5BE_NUC8i7BE_TechProdSpec.pdf)
* [Intel® NUC Support Community](https://communities.intel.com/community/tech/nuc)
{{< /reference >}}

{{% /post %}}
