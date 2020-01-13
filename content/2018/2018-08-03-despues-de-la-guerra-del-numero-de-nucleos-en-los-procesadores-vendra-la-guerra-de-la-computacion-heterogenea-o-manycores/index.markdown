---
pid: 337
type: "post"
title: "Después de la guerra del número de núcleos en los procesadores, ¿vendrá la guerra de la computación heterogénea o manycores?"
url: "/2018/08/despues-de-la-guerra-del-numero-de-nucleos-en-los-procesadores-vendra-la-guerra-de-la-computacion-heterogenea-o-manycores/"
date: 2018-08-03T17:00:00+02:00
updated: 2018-08-04T00:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:intel.svg"
tags: ["hardware", "opinion", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="intel.svg" title1="Intel" width1="200" image2="amd.svg" title2="AMD" width2="300" >}}

Hace alguna década los procesadores eran de un solo núcleo y hasta la aparición de Windows NT y GNU/Linux los sistemas operativos no se aprovechaban plenamente las capacidades de multiprogramación de los procesadores que ya se incluían desde los [Intel 386](https://es.wikipedia.org/wiki/Intel_80386).

La mejora de rendimiento en los procesadores se conseguía a base de mejores diseños en los procesadores como la segmentación, superescalaridad, caches de datos e caches de instrucciones más grandes que era posible debido también en parte al mayor número de transistores que permitían incluir los procesos de litografía de tamaño más reducidos para los transistores, también por la adición de nuevas [instrucciones en el conjunto de la arquitectura](https://en.wikipedia.org/wiki/Instruction_set_architecture) o ISA, o mayor número de registros y de mayor tamaño entre otras cosas.

Un menor tamaño de los transistores permite menor consumo de energía con menor calor a disipar al mismo tiempo que alcanzar mayores velocidades de funcionamiento para el procesador. Desde unas decenas de Khz, luego decenas Mhz, más tarde varios cientos de Mhz hasta alcanzar el hito del 1 Ghz en el año 2000, cada uno se atribuye ser el primero en alcanzarlo por pate de [Intel][intel] con el [Pentium III](https://es.wikipedia.org/wiki/Intel_Pentium_III) y por [AMD][amd] con una de sus buenas épocas con los [Athlon](https://es.wikipedia.org/wiki/AMD_Athlon), o hasta el punto actual límite de entre 2 y 4 Ghz.

Aumentar más la velocidad de funcionamiento en herzios de los procesadores en los niveles actuales provoca que el calor disipado aumente drásticamente y reducir el tamaño de los transistores está empezando a ser costoso (como le está costando ya a Intel pasar de los 14nm a los 10nm, 5 años ya empleando en diferentes generaciones los mismos 14nm) y dentro de no tanto se alcanzará el límite atómico de los materiales que se usan actualmente previsiblemente en los 2-3 nm. Mejores diseños en los procesadores permite aumentar el número de instrucciones por ciclo de reloj o IPC pero entre cada generación no suele estar más de un 3 y 10%. De modo que para aumentar el rendimiento más significativamente al no poder aumentar la velocidad y las mejoras de diseño no proporcionan aumentos tan significativos como en anterioridad la estrategia actual ha sido incluir más núcleos, desde los Intel Core 2 Duo y los AMD Athlon x2 lo normal ha sido que tengan dos núcleos y ahora están empezando a estar disponibles para el consumidor personal procesadores de 4, 8, 16 e incluso 32 núcleos que con [SMT](https://en.wikipedia.org/wiki/Simultaneous_multithreading) como Intel lo denomina en su implementación _Hyper Threading_ son capaces de manejar el doble de hilos, con multiprocesamiento real en vez de simulado como los procesadores de un único núcleo.

Por un tiempo el aumento de núcleos permitirá aumentar en mayor medida el rendimiento en aquellas tareas paralelizables o permitiendo manejar más tareas que con otras técnicas. Si empleando 12 nanómetros AMD ha sido capaz de empaquetar 32 núcleos en los [Threadripper](https://www.amd.com/en/products/ryzen-threadripper) de la serie 2000 con 7 nanómetros por que no iba ha ser capaz de empaquetar 64. Sin embargo, aumentar el número de núcleos indefinidamente no es escalable manteniendo la coherencia de las caches (que todos los procesadores vean el mismo valor de una posición de memoria) dada la carga que suponer mantener esa coherencia en todas las caches de un gran número de núcleos. Tampoco por los fallos de fabricación que se producen lo que obliga a desactivar núcleos y venderlos con menos núcleos activos, a mayor número de núcleos mayor probabilidad de que algunos contengan fallos.

Me pregunto si llegado el límite de no poder incluir más transistores en el mismo espacio sin el espacio que dejaba la reducción de nanómetros llegará un punto en el que no se podrán incluir más núcleos o una gran cantidad de núcleos iguales no es lo más eficiente cuando solo unos pocos está siendo utilizados o hay diversidad de tareas, unas que requieren alto rendimiento por usar de forma intensiva la CPU y otras que no por estar restringidas por operaciones de entrada y salida mucho más lentas que la capacidad de la CPU. En sus diseños de procesadores ARM permite una [arquitectura big.LITTLE](https://developer.arm.com/technologies/big-little) donde no todos los núcleos son iguales, posee núcleos de diferente tipo unos pocos como los [Cortex-A75](https://developer.arm.com/products/processors/cortex-a/cortex-A75) ofrecen gran rendimiento a base de mayor consumo siendo más grandes y otros pocos como los [Cortex-A55](https://developer.arm.com/products/processors/cortex-a/cortex-a55) con menor rendimiento pero más eficientes energéticamente y pequeños utilizando el sistema en cada momento los más adecuados para las tareas en ejecución. 

Pero en la arquitectura x86/x64 de Intel y AMD aún no hay todavía una implementación de algo similar a lo empleado por ARM. Las restricciones y límites impuestos de ser cada vez más difícil reducir los nanómetros y no poder incluir más transistores en el mismo tamaño quizá haga que los que se puedan incluir deban ser mejor aprovechados y haga que Intel o AMD desarrollen una nueva arquitectura x86 con soporte de big.LITTLE similar a la de ARM. Cuando se llege al límite de 2 nanómetros ya la litografía ya no será lo que permita aumentar el rendimiento o se necesitarán nuevos materiales o procesos de fabricación, seguramente se requerirán nuevos diseños de arquitectura.

Bueno, la posible arquitectura _big.LITTLE_ para x86 es una conjetura mía, muy posiblemente los ingenieros de Intel y AMD encuentren otras soluciones para seguir haciendo que cada generación de procesadores tenga un aumento de rendimiento significativo. La que hice sobre [la convergencia que sería la siguiente disrupción tecnológica][blogbitix-149] aún no se ha producido.

Una de las soluciones previsibles es que se empleen otros materiales distintos a los que desde hace décadas con el silicio se ha estado empleado: grafeno, siliceno, molibdenita o interconexiones ópticas. Permitiendo mayores frecuencias y con menor calor disipado lo que equivaldrá a poder seguir aumentando la capacidad de cómputo.

Otra es aprovechar más la computación heterogénea para delegar tareas que son más eficientes realizarlas en un procesador especializado en vez de uno de propósito general como la CPU, un ejemplo de este caso es la GPU para los gráficos pero empleando la capacidad de estas también para tareas de propósito general de cálculos, una API como [OpenCL][opencl] permite realizar cálculos en la GPU para procesamiento de audio, vídeo, imagen, criptografía, ... Otro serían los [DSP](https://en.wikipedia.org/wiki/Digital_signal_processing) para procesamiento de señales como audio o vídeo. Una forma de computación heterogénea hace en el caso de la CPU y GPU que compartan la misma memoria del sistema evitando tener que hacer copias de los datos entre memorias al tenerlas dedicadas en exclusiva a cada una de los procesadores.

Finalmente, pueden estar los [procesadores _manycore_](https://en.wikipedia.org/wiki/Manycore_processor) que a diferencia de los _multicore_ actuales integran un número de núcleos más grande en varios órdenes de magnitud (100, 1000) e independientes que palía el problema de los _multicore_ y su escalabilidad en número de núcleos por mantener la coherencia de las caches. Y para estos casos es más adecuado la arquitectura de procesadores ARM mucho más simple que la arquitectura x86, con procesadores más pequeños y más eficientes pero mayor número de ellos. Unido a si [Qualcomm](https://www.qualcomm.com/) consigue trauducir las instrucciones x86 sobre las de ARM manteniendo la compatibilidad con todo el software puede poner en serios aprietos la arquitectura x86 y hacer una realidad la citada convergencia entre móvil y PC. Siempre y cuando Intel lo permita, tal vez amenazado su hegemonía como recurso podrá defenderse de forma legal con juicios de patentes.

Y en esa guerra de computación heterogénea y _manycore_, aunque eso es mucho decir, puede que salga vencedora ARM y la actual guerra de núcleos entre Intel y AMD quede como una anécdota en la historia como ya hay muchas otras.

Si quieres conocer más en detalle los procesadores tanto de su historia, evolución y funcionamiento más minucioso la enciclopedia [El mundo de Bitman](https://amzn.to/2n7Ayuv) de [@_iandatux_](https://twitter.com/_iandatux_) recoge en varios volúmenes una ingente cantidad de información que leyendo el indice de contenidos de cada libro se presenta muy interesate, diría que la obra disponible más completa sobre los procesadores, además en español. Si te interesa el tema me parece imprescincdible, en la descripción de los libros en Amazon están los índices completos. Por ejemplo, concretamente el volumen V cubre los materiales candidatos a emplearse en el futuro, los límites de los semiconductores actuales y el futuro en los procesadores que comento brevemente en este artículo:

* [El mundo de Bitman Volumen I: Regreso al futuro de la computación](https://amzn.to/2AE9v3u)
* [El mundo de Bitman Volumen II: Caminando entre bits](https://amzn.to/2vyC0dc)
* [El mundo de Bitman Volumen III: Los pilares del microprocesador](https://amzn.to/2OHH2Nl)
* [El mundo de Bitman Volumen IV: Mr. C y la fábrica de chips](https://amzn.to/2vup9bK)
* [El mundo de Bitman Volumen V: El enigma de la microelectrónica](https://amzn.to/2neGP7T)
* [El mundo de Bitman Volumen VI: Viaje al centro de la CPU - Parte 1 de 2](https://amzn.to/2vgvpoj)
* [El mundo de Bitman Volumen VI: Viaje al centro de la CPU - Parte 2 de 2](https://amzn.to/2vupjjm)
* [El mundo de Bitman Volumen VII: En busca del valle de la sabiduría](https://amzn.to/2vtMxX0)

{{< amazon
    linkids="68de3e78830192ba75c0512a8b048e63,769694edd9c03d5e1a74b03b7eade17c,b1f514ab8a8cae2115f747df36ac6f50,746131c517ce1fcff5123b245b7b14e3"
    asins="B07D696XBB,B07D6BF6CW,B07D69FJZ6,B07D6CNWXY" >}}

{{< amazon
    linkids="d1f99426a5b8f832bed37cfe2dc523ce,a815ffc4213a965f1e5c563d251ebf70,f8912ba1ea6fef10df26ccbcdd518fea,c198603a8ed771769efbefe232468ecb"
    asins="B07D6DKR6M,B07D6DJY7S,1983184802,B07D6C48R2" >}}

Dentro de unos años, lustros o alguna década revisaré estos artículos de predicción a ver cuanto hay de acierto en la evolución de la tecnología que se produzca finalmente.

{{< reference >}}
* [ARM big.LITTLE](https://en.wikipedia.org/wiki/ARM_big.LITTLE)
* [Materiales del futuro! Grafeno Vs Siliceno](https://www.taringa.net/posts/ciencia-educacion/11725464/Materiales-del-futuro-Grafeno-Vs-Siliceno-Megapost.html)
* [Fibra óptica multi-núcleo para interconexiones ópticas con la mayor densidad
](https://www.conectronica.com/fibra-optica/cables-de-fibra-optica/fibra-optica-multi-nucleo-para-interconexiones-opticas-con-la-mayor-densidad)
{{< /reference >}}

{{% /post %}}
