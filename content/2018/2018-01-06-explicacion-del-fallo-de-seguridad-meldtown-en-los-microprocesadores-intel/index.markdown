---
pid: 293
type: "post"
title: "Explicación del fallo de seguridad Meltdown y Spectre en los microprocesadores Intel"
url: "/2018/01/explicacion-del-fallo-de-seguridad-meltdown-y-spectre-en-los-microprocesadores-intel/"
date: 2018-01-06T10:30:00+01:00
updated: 2018-01-07T01:30:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:intel.svg"
tags: ["hardware", "planeta-codigo", "seguridad", "software"]
summary: "Los procesadores Intel se han visto afectados por un grave error de seguridad debido a que fueron diseñados con ejecución especulativa sin tener algunas consideraciones de seguridad, técnica empleada para aumentar el rendimiento pero que tiene efectos colaterales en la cache que pueden se aprovechados para realizar ataques _side-channel_ con los que leer el contenido de la memoria del _kernel_, independientemente del sistema operativo utilizado."
---

{{% post %}}

El año 2018 ha empezando haciéndose público uno de los peores _bugs_ de seguridad que afecta a absolutamente todos los procesadores [Intel][intel] que esta compañía ha fabricado en la última década, denominado [_Meltdown_ y su variante _Spectre_](https://meltdownattack.com/), el error tiene su propio nombre, logotipo y página web. Un error de diseño en los procesadores que solo se puede corregir reemplazando el microprocesador o modificando los sistemas operativos aunque se especula con una pérdida de rendimiento en ciertas cargas de trabajo, entre un 5% y un 30%. El error es tan grave que permite leer a un programa la memoria del núcleo del sistema operativo que debería estar protegida. En la memoria del _kernel_ residen las claves de acceso a sistemas o datos sensibles que obtenidos y utilizados pueden ocasionar graves problemas de seguridad con consecuencias económicas o de acceso no autorizado a información. Este error es tan grave que deja al viejo conocido [fallo de la división de los Pentium](https://en.wikipedia.org/wiki/Pentium_FDIV_bug) a la altura de chiste. Hace unos meses por si fuera poco se conocía otro error de seguridad en el [Management Engine (ME)](https://en.wikipedia.org/wiki/Intel_Management_Engine) de Intel. 

* [Listado de procesadores Intel afectados por Meltdown y Spectre](https://security-center.intel.com/advisory.aspx?intelid=INTEL-SA-00088&languageid=en-fr)

{{< image
    gallery="false"
    image1="logotype:meltdown.svg" optionsthumb1="200x200" title1="Meltdown"
    image2="logotype:spectre.svg" optionsthumb2="200x200" title2="Spectre"
    caption="Logotipos de Meltdown y Spectre" >}}

Reemplazar todos los microprocesadores es tremendamente caro además de que primero hay que diseñar y fabricar unos que estén exentos del _bug_ que lleva tiempo, meses o años hasta que estén preparados, por lo que la solución hasta el momento pasa por hacer modificaciones en el software y en los sistemas operativos, compiladores y programas para resolver o mitigar el problema. En el sistema operativo la solución consiste en separar el espacio de direcciones del _kernel_ de la de los programas, sin embargo, cada vez que el microprocesador cambia entre un espacio de direcciones a otro hay una penalización en tiempo por lo que en ciertas cargas de trabajo muy intensivas en las que se cambia frecuentemente de contextos como operaciones de red, de almacenamiento rápido o E/S el rendimiento se ve afectado. Para un usuario doméstico, ofimático o juegos la perdida de rendimiento será insignificante y no será apreciable ya que en estos casos el microprocesador no trabaja a la máxima carga o no está cambiando frecuentemente del espacio de direcciones del _kernel_ al de usuario. En grandes centros de datos como la computación en la nube de [Amazon Web Services][amazon-web-services], [Google Cloud Platform][google-cloud] o [Microsoft Azure][microsoft-azure] el rendimiento será más apreciable.

Como usuarios domésticos para estar protegidos conviene descargar únicamente software de fuentes confiables pero para los usuarios empresariales con sus servicios en la nube en donde los sistemas están aislados pero usando infraestructura compartida y con el descubrimiento de este _bug_ es más grave si no se parchea, los proveedores de infraestructura en la nube ya han planificando tareas de mantenimiento y reinicios obligatorios. 

{{< image
    gallery="false"
    image1="logotype:intel.svg" optionsthumb1="200x200" title1="Intel"
    image2="logotype:amd.svg" optionsthumb2="200x200" title2="AMD"
    image3="logotype:arm.svg" optionsthumb3="200x200" title3="ARM" >}}

### Técnicas para aumentar el rendimiento

Los microprocesadores modernos implementan varias técnicas para aumentar el rendimiento. Una de las mas simples es aumentar la frecuencia de trabajo del microprocesador, uno de los primeros Pentium trabajaba únicamente a 100 Mhz y los actuales llegan hasta los 3 Ghz, casi 30 veces más. Pero aumentar la frecuencia solo es posible hasta cierto límite a partir del cual el microprocesador se calienta mucho y consume mucha energía. Por lo que hay que emplear otras técnicas al mismo tiempo.

Otra de las mas simples es reducir el tamaño de los transistores, unos transistores más pequeños hace que sea posible incluir más transistores en el mismo espacio físico para incluir caches de mayor tamaño o nuevas funcionalidades, con más velocidad y con menor consumo de energía. El tamaño de los transistores de los Pentium originales era de 800 nanómetros e incluía 3.1 millones, los Intel Core de octava generación se fabrican a 14 nanómetros incluyendo unos 5000 millones, unas 60 veces más pequeños. Aún así cada vez es más difícil cumplir con la [ley de Moore][wikipedia-ley-de-moore] ya que se está llegando a límite físico de los átomos de los materiales, consistía en que cada dos años se duplica el número de transistores de un microprocesador.

Con la ayuda de unos transistores más pequeños y más espacio se aprovecha para aumentar el rendimiento incluyendo más núcleos de cómputo. Pero para aumentar el rendimiento de un núcleo de cómputo individual o el <abbr title="Instructions Per Cicle">IPC</abbr> se emplean otras técnicas como utilizar múltiples _pipelines_ para ejecutar varias instrucciones simultáneamente, ejecución fuera de orden para reorganizar las instrucciones y la ejecución especulativa para mantener llenos esos _pipelines_.

### Escalar

En un microprocesador escalar se ejecuta una instrucción por ciclo, por ejemplo, en esta secuencia de instrucciones que realizan unas sumas se tardarían 6 ciclos de reloj. A estos microprocesadores que ejecutan una instrucción por ciclo de reloj se les denomina escalares, siendo ejemplos el Intel 486 y el ARM1176 usado en la Raspberry Pi 1. 

{{< code file="escalar.py" language="Python" options="" >}}

### Superescalar

En un microprocesador con dos _pipelines_ o [superescalar][wikipedia-superescalar] se pueden realizar varias operaciones simultáneamente, es decir, mientras se realiza la primera operación en la variable _m_ se realiza al mismo tiempo la segunda operación de _n_, con lo que estas operaciones podrían completarse en únicamente tres ciclos de reloj con la siguiente equivalencia de programa. Ejemplos de microprocesadores superescalares son el Intel Pentium y los [ARM][arm] Cortex-A7 y Cortex-A53 estos últimos usados en la Raspberry Pi 2 y 3 respectivamente.

{{< code file="superescalar-1.py" language="Python" options="" >}}

Sin embargo, hacer la suma de _o_ y _x_ al mismo tiempo no es posible ya que antes de calcular _x_ hay que calcular _o_ debido a que uno de los operandos en la suma de _x_ es _o_, es decir, hay una dependencia en estas instrucciones y se han de ejecutar una después de otra. Con lo que en vez de tres ciclos habría que conformase en ejecutar estas instrucciones en cuatro ciclos.

{{< code file="suprescalar-2.py" language="Python" options="" >}}

### Fuera de orden

Los microprocesadores [fuera de orden][wikipedia-out-of-order] reordenan las instrucciones de la forma adecuada para que el programa sea equivalente pero manteniendo los _pipelines_ llenos. Cambiando el orden entre las instrucciones _x_ e _y_ se consigue ejecutar las instrucciones en tres ciclos de reloj. Ejemplos de microprocesadores fuera de orden son el Pentium 2 y siguientes microprocesadores Intel y [AMD][amd] incluyendo varios ARM Cortex-A9, A15, A17 y A57.

{{< code file="fuera-de-orden.py" language="Python" options="" >}}

### Predicción de salto y ejecución especulativa

Los programas incluyen saltos con sentencias condicionales _if_ o de bucle. Los microprocesadores tratan de adivinar si una sentencia de salto se producirá o no (con heurísticas y son bastante buenos acertando) para recuperar y tener preparadas las siguientes instrucciones. Mantener los _pipelines_ llenos es difícil al aumentar su número a tres o cuatro. Para tratar de mantenerlos llenos los microprocesadores usan la predicción de salto y van ejecutando las instrucciones desechando las operaciones si finalmente no se acierta en el salto pero habiendo aumentado el rendimiento si se ha acertado, realizan [ejecución especulativa][wikipedia-speculative-execution] de las instrucciones.

En este otro caso, _v_ depende de _u_ y _u_ depende de _t_ de modo que un microprocesador superescalar sin ejecución especulativa tardará tres ciclos computando _t_, _u_ y _v_ para determinar el valor de _v_ en la sentencia condicional _if_ (en otro ciclo) momento en que pasa otros tres ciclos calculando _w_, _x_ e _y_, en total 4 o 7 ciclos dependiendo de si hay salto en la sentencia condicional.

{{< code file="ejecucion-especulativa-1.py" language="Python" options="" >}}

Si el predictor de salto determina que es probable que la condición sea cierta la ejecución especulativa reordena el programa de la siguiente manera:

{{< code file="ejecucion-especulativa-2.py" language="Python" options="" >}}

Y con la ejecución superescalar se mantiene los _pipelines_ ocupados de modo que el ejemplo tiene la siguiente equivalencia y tardando aproximadamente 3 ciclos cuando antes se necesitaban 7.

{{< code file="ejecucion-especulativa-3.py" language="Python" options="" >}}

### Cache

Los microprocesadores son muy rápidos comparados con la memoria o el acceso al almacenamiento secundario. Un Cortex-A53 de una Raspberry Pi puede ejecutar una instrucción en 0.5 nanosegundos pero el acceso a memoria costar 100 nanosegundos. Esto no es bueno pero por fortuna los accesos a memoria siguen patrones, accediendo repetidamente a variables recientemente accedidas y accediendo a variables en posiciones cercanas, de forma que colocando estas variables en una cache más rápida y cercana al procesador que la memoria principal se mitiga en gran medida el problema.

### Relación entre ejecución especulativa, cache y _Meltdown_ y _Spectre_

La ejecución especulativa tiene el efecto colateral de colocar datos en la memoria cache del microprocesador y esto es utilizado para realizar una forma de [ataque side-channel](https://en.wikipedia.org/wiki/Side-channel_attack). Desde el punto de vista de _Meltdown_ y _Spectre_ y la ejecución especulativa lo importante es que midiendo el tiempo que tarda el acceso a memoria se puede conocer si el dato está en la cache (tarda poco) o no (tarda mucho). 

{{< code file="meltdown-1.py" language="Python" options="" >}}

_u_ tiene una dependencia sobre _t_ y _v_ sobre _u_ con lo que el microprocesador usando la superescalabilidad, la ejecución fuera de orden y ejecución especulativa acabaría transformando el programa en la siguiente secuencia de operaciones:

{{< code file="meltdown-2.py" language="Python" options="" >}}

El microprocesador lee de el valor de una dirección del _kernel_ de forma especulativa pero el fallo en la operación de acceso no se produce hasta se conoce el valor de _v_ utilizando en la sentencia condicional no es cero. Limpiando la cache previamente y haciendo que _v_ de cero para que no se produzca la excepción con los valores adecuados de las variables (_a_, _b_, _c_, _d_) la ejecución especulativa de `v, y_ = u+d, user_mem[x_]` producirá un acceso a la dirección de memoria _0x000_ o _0x100_ dependiendo del valor del octavo bit recuperado en el acceso ilegal a la dirección de memoria `kern_mem[address]`. El ataque _side-channel_ se produce midiendo el tiempo que tarda una instrucción posterior que utilice estas direcciones, si está o no está en la cache (por el tiempo que tarda) determina a que dirección de memoria se ha accedido y cual es el valor del octavo bit de una dirección del _kernel_. ¡Felicidades has leído un bit de la memoria del kernel!. Bit a bit y con tiempo se puede leer todo el contenido de la memoria del _kernel_ aplicando esta operación millones de veces.

### Notas finales

Los microprocesadores ARM1176, Cortex-A7, and Cortex-A53 usados en la Raspberry Pi no se ven afectados por el _Meltdown_ ya que no poseen ejecución especulativa, los AMD Ryzen tampoco se ven afectados por el _Meltdown_ ya que aunque si soportan ejecución especulativa al contrario de Intel la ejecución especulativa no se permite entre diferentes anillos de seguridad, el _kernel_ se ejecuta en el anillo 0 y las aplicaciones en el anillo 3. Sin embargo, una variante de _Meltdown_ es _Spectre_ que es el mismo caso pero en vez de con la memoria del _kernel_ con la memoria de otra aplicación. Como las aplicaciones se ejecutan en el mismo anillo en este caso los AMD Ryzen y algunos modelos de ARM si se ven afectados por _Spectre_ al igual que también los Intel.

La ejecución especulativa hace más rápidos los microprocesadores pero habiéndose descubierto este fallo muy inseguros en el caso de los Intel ya que se ve afectados por _Meltdown_ y _Spectre_ a menos que se implementen parches por software ya que por microcódigo no es posible darle solución. _Meltdown_ es más grave pero se puede corregir modificando el _kernel_ aún con una pérdida de rendimiento, _Spectre_ es más difícil de explotar pero más difícil de corregir y lo que se hará en este último caso es mitigar el problema modificando el sistema operativo, compilador y aplicaciones.

Intel tiene un problema importante, con AMD y sus Ryzen a buen precio, con buen rendimiento y... sin el problema del _Meltdown_. Para corregir el fallo en el diseño de la arquitectura del hardware Intel va a tener que rediseñar en parte su arquitectura y esto le va a llevar meses hasta tener preparados nuevos modelos de microprocesadores sin el error.

En el _kernel_ de Linux 4.14.11 ya se han aplicado varios parches al igual que posteriormente se implementarán en Windows y macOS. Yo como usuario de Linux con un Intel Core i5-3210M que posee la característica _pcid_ y esa versión del _kernel_ no he notado ninguna perdida de rendimiento apreciable.

{{< reference >}}
* [Why Raspberry Pi isn’t vulnerable to Spectre or Meltdown](https://www.raspberrypi.org/blog/why-raspberry-pi-isnt-vulnerable-to-spectre-or-meltdown/)
* [The Intel 80x86 Processor Architecture: Pitfalls for Secure Systems](https://pdfs.semanticscholar.org/2209/42809262c17b6631c0f6536c91aaf7756857.pdf)
* [An Update on AMD Processor Security](https://www.amd.com/en/corporate/speculative-execution)
* [x86/cpu, x86/pti: Do not enable PTI on AMD processors](https://lkml.org/lkml/2017/12/27/2)
* [List of ARM microarchitectures](https://en.wikipedia.org/wiki/List_of_ARM_microarchitectures)
* [Meltdown y Spectre algunos comentarios](https://geeks.ms/etomas/2018/01/05/meltdown-y-spectre-algunos-comentarios/)
{{< /reference >}}

{{% /post %}}
