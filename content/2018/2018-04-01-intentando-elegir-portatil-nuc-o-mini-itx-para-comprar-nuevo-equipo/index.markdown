---
pid: 309
type: "post"
title: "Intentando elegir portátil, NUC o mini ITX para comprar nuevo equipo"
url: "/2018/04/intentando-elegir-portatil-nuc-o-mini-itx-para-comprar-nuevo-equipo/"
date: 2018-04-01T10:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:intel.svg"
tags: ["hardware"]
---

{{% post %}}

{{< logotype image1="intel.svg" title1="Intel" width1="300" image2="amd.svg" title2="AMD" width2="300" >}}

Ya he comentado que [a mi los Mac ni macOS me convencen][blogbitix-305] por varios motivos, por su precio, por el software libre y porque lo que he podido comprobar no me ha parecido que tenga nada de lo que [GNU][gnu]/[Linux][linux] hoy en día tenga algo que envidiar, algunas cosas en macOS quizá sean algo mejor pero otras en GNU/Linux también en él lo son.

Tras regalar [mi antiguo portátil Sony VAIO][elblogdepicodev-134] ahora estoy buscando nuevo equipo y barajando opciones. El Sony era y es un buen equipo con el que he estado muy contento, tenía un [Intel][intel] Core i5 3210M Ivy Bridge de 22 nanómetros con dos núcleos y 4 hilos con [el _bug_ Meltdown y Spectre][blogbitix-293], 8 GiB de memoria RAM, almacenamiento SSD de 256 GiB SATA de almacenamiento y una pantalla de resolución 1600x900, la gráfica era un integrada Intel HD 4000 básica pero más que suficiente para un entorno de escritorio y con buen soporte en GNU/Linux por sus controladores de código abierto. Sin embargo, aunque era un portátil lo usaba únicamente como equipo de escritorio sin moverlo en ningún momento y en cuanto a memoria los 8 GiB de memoria sigue siendo perfectamente útiles pero en mi uso en algunos casos se me quedaban cortos al virtualizar o usar varios contenedores Docker.

Por otro lado me paso mucho tiempo y leyendo y trabajando delante del ordenador y la pantalla quizá con el entorno de escritorio integrado Java se queda algo escaso, eso o tener dos pantallas sería mejor para no tener que estar constantemente usando la combinación de tecla _alt+tab_ para intercambiar entre ventanas o poder visualizar dos contenidos a la vez por lo que además estoy evaluando independientemente de lo que elija una pantalla 2K o 4K de 27 pulgadas.

Estoy barajando tres opciones: un portátil, un Intel NUC o montarme un equipo de escritorio mini ITX. Aún no estoy decidido y estoy escribiendo este artículo también para plasmar por escrito las ideas que tengo.

### El portátil

En caso de que me decidiese por otro portátil tengo claro que la opción sería un [Slimbook PRO2](https://slimbook.es/pro-ultrabook-13-aluminio). Porque es un equipo potente, más incluso que un MacBook Pro que cuesta el doble de precio, porque es un equipo ensamblado por una empresa española, porque el soporte para GNU/Linux que tiene es bueno y está libre de adquirir licencia Windows aunque se puede si uno quisiese. En el 2012 no conocía opciones de portátil sin tener que pagar el [impuesto Windows][elblogdepicodev-57], hoy hay varias opciones entre las que los usuarios de GNU/Linux podemos elegir para no tener que pagarlo.

Se le puede instalar hasta 32 GiB de memoria, pantalla de resolución QHD+ 3200x1800, almacenamiento NVMe en formato M.2 con una velocidad de 3000 MiB/s de lectura y 1900 MB/s de escritura, si los SSD SATA ya son rápidos con una velocidad de unos 500 MiB/s por segundo en lectura y escritura en formato NVMe debe ser algo impensable hasta hace unos años con los discos duros tradicionales que no pasaban de los 100 MB/s.

Lo que no me gusta es que montan un Intel de 8ª generación con el grave fallo de seguridad Meltdown y Spectre que aún se está intentando mitigar sin que afecte al rendimiento con parches de software porque ni con microcódigo se puede por estar el fallo en el hardware. Slimbook no ofrece en ninguno de sus modelos uno de los nuevos [AMD Ryzen](https://www.amd.com/es/ryzen) que están demostrando ser muy competitivos y no estar afectados por el Meltdown y solo por alguna de las variantes de Spectre, más graves por más difíciles de ser explotadas.

Un portátil me permitiría tener una segunda pantalla pero la batería, la portabilidad por ser un portátil es algo que en este momento no me interesa y por solo ofrecer procesadores Intel defectuosos estoy barajando otras opciones.

### Un NUC, Brix, Cubi o similar

Estos pequeños equipos de escritorio aún con su pequeño tamaño se les puede instalar hasta 32 GiB, usando los mismos procesadores de los portátiles de última generación tienen 4 núcleos físicos y 8 hilos lo que es el doble de lo que tenía con el 3210M y con esa cantidad de memoria 4 veces más y que al menos por un lustro espero me sea más que suficiente.

Varias marcas ofrecen modelos utilizando el mismo formato. Están los [Intel NUC](https://www.intel.com/content/www/us/en/products/boards-kits/nuc.html), [Gigabyte BRIX](https://www.gigabyte.com/Mini-PcBarebone/BRIX), [MSI Cubi](https://es.msi.com/Desktop/Cubi.html), [ASUS Vivo](https://www.asus.com/es/Mini-PCs/VivoMini-Products/) y algun otro de [Zotac](https://www.zotac.com/product/mini_pcs/zbox_m_series) e inlcuso Slimbook ofrece el [ONE](https://slimbook.es/one-minipc-potente) pero que utiliza procesadores ya no de última generación y solo se les puede equipar hasta 16 GiB de memoria por lo menos hasta que no lo renueven.

Es la opción que en este momento me convence más pero al igual que en los portátiles no es ya que la mayoría equipen procesadores Intel defectuosos sino que no he visto que ninguno utilice un AMD Ryzen, quizá ahora que han salido las APU de AMD de la serie 2000 con una gráfica mucho más capaz que cualquiera de las Intel integradas y también 4 núcleos y 8 hilos algún fabricante espero que se decida a ofrecer algún modelo ya sea con un AMD Ryzen 2200G o 2400G.

Ocupan poco incluso se les puede instalar detrás del monitor, son muy silenciosos, se les puede instalar una buena cantidad de memoria y en el momento que a mi ya no me sirva es fácilmente transferible. Con un Ryzen no me lo pensaría tanto.

{{< amazon
    linkids="4167a48557ef5e7857822661ca9e88bf,5ca6b59bb1159b756e60d0666c05ff1d,edd1ea955806cd870b11246f90214d77,e671c5b8d5be144ad2bb72b8ec5b9abb"
    asins="B01N245UXY,B01MFGYDW9,B06XHW943T,B01M3Y8TFJ" >}}

### Un mini ITX

Dado que en los casos anteriores solo encuentro procesadores Intel defectuosos me planteo montar mi propio equipo en formato mini ITX, no quiero sea tan grande como un micro ATX o ATX. Esta opción ya si en este momento me permite tener un AMD Ryzen. Una micro ATX o ATX podría tener incluso más de esos 32 GiB de memoria, hasta 64 GiB y más núcleos pudiendo incluso 8 núcleos y 16 hilos, sin embargo, una de las cosas que valoro de forma alta es el espacio que ocupa el ordenador y el ruido que haga que si no es silencioso me molestaría, al menos le pediría que navegando o leyendo documentos fuese muy silencioso o inaudible cosa que no si habrá mejorado desde el 2008 de mi último equipo en este formato. No se si aún en tamaño mini ITX serán todo lo silenciosos que requiero.

Por otro lado por los componentes que he visto en este caso parece que los fabricantes se enfocan más a los usuarios jugadores que a los usuarios que quieren el equipo para cualesquiera otra cosa que no sea utilizarlos para jugar. Esta opción me requiere más investigación ya que me requiere buscar componentes y ensamblarlos en vez de adquirir un equipo ya ensamblado como en las otras opciones. Procesador, memoria, almacenamiento NVMe, disipador, ventiladores, fuente de alimentación, caja, ... Por un lado me atrae la idea de montar mi propio equipo pero por otro en igual medida me da miedo que alguna de las piezas al ensamblarlas me de algún tipo de problema.

Estos son los componentes que hasta el momento he buscado, la memoria DDR4 está especialmente cara, montar 64 GiB sería elevado incluso para mi que no tengo un límite de presupuesto superior estricto.

{{< amazon
    linkids="60efa75a30c9193b7625be14bad9fcac,d6647b9468e1ac93aea24cda4cad2891,744f1a26e7728ba34266d0777ceee688,dc2f26e47fd5ab2d92601fa783616577,5db6b69bc063e2b13570b5cc9cbf8a21,91931702412d5216a901b8501380834e"
    asins="B079D8FD28,B073R8DB3G,B019FRCV9G,B01M20VBU7,B019NWTCEA,B015UDUAKG" >}}

### Conclusión

Todavía no estoy decidido. Ninguna opción en este momento cumple posiblemente todo lo que pido o me genera alguna duda. Quizá tenga preguntar en algún foro especializado para recabar opiniones, o que esperar a que Intel saque nuevos procesadores sin fallos de seguridad, o por lo menos no conocidos hasta pasado un tiempo. No se si saldrá algunos portátiles de calidad o formato NUC pero con AMD. Y es que me paso el tiempo esperando... en otros casos y en este también hasta estar en buena medida convencido. 

{{% /post %}}
