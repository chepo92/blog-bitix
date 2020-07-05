---
pid: 498
type: "post"
title: "Diferencias entre GNU/Linux, BSD y sus distribuciones"
url: "/2020/07/diferencias-entre-gnu-linux-bsd-y-sus-distribuciones/"
date: 2020-07-05T11:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:beastie.png"
tags: ["gnu-linux", "planeta-codigo"]
summary: "Las distribuciones BSD tienen aún menor cuota de uso que las distribuciones GNU/Linux pero al igual que estas tiene una licencia de software libre aún más permisiva que las GNU/Linux y también se basan en la filosofía UNIX. Pero también tienen diferencias importantes en varios aspectos."
---

{{% post %}}

{{< logotype image1="bsd.svg" >}}

De los sistemas operativos [Windows][windows] de [Microsoft][microsoft] es el más popular en el uso en empresas y en los ordenadores personales con una cuota de uso del 90% prácticamente de monopolio. La siguiente opción más popular a nivel de usuario es [macOS][macos] de [Apple][apple] como única opción de sus equipos portátiles y de escritorio, macOS tiene una cuota de uso de un 7%. Con una cota de uso en el escritorio de apenas el el 3% la siguiente opción es alguna de las distribuciones [GNU][gnu]/[Linux][linux], tiene una cuota de uso tan pequeña porque prácticamente todos los equipos vendidos en grandes superficies incorporan Windows preinstalado, para usar GNU/Linux son los usuarios los que de forma expresa han de instalar GNU/Linux reemplazando a Windows aunque en los últimos años hay varias marcas que ofrecen GNU/Linux como opción entre ellas [Slimbook][slimbook] y [Vant][vant]. En el lado del servidor GNU/Linux si tiene una mucha mayor cuota de uso por encima incluso de Windows, muchos de los servicios ofrecidos por las compañías más importantes usan alguna distribución de GNU/Linux como sistema operativo. Las distribuciones empresariales GNU/Linux más populares son [RHEL][rhel] de [RedHat][redhat], [Ubuntu][ubuntu] de [Canonical][canonical] o [SLES][suse-sles] de [SUSE][suse].

Otra familia de sistemas operativos basados en UNIX al igual que GNU/Linux son las distribuciones BSD. Si la cuota de uso a nivel personal de GNU/Linux es muy reducida la de los sistemas operativos BSD es aún mucho más reducida, no llega al 0,5%, teniendo algo de mayor presencia como sistema de servidores con una comunuidad de usuarios pequeña pero al igual que la de GNU/Linux activa que comparte y colabora en el desarrollo.

Aún estando las distribuciones GNU/Linux y BSD ambas basadas en UNIX e implementar el estándar [POSIX][posix] que define una interfaz con el sistema operativo para permitir que las aplicaciones sean portables entre sistemas tienen notables diferencias en varios apartados importantes. Las diferencias entre las distribuciones GNU/Linux y BSD están en la licencia que usan, en su modelo de desarrollo, en la ya comentada cuota de uso o en aspectos importantes para los usuarios como el soporte del hardware.

Aunque solo para representar a los proyectos una diferencia está en su mascota, en Linux es _Tux_, en BSD es _Beastie_ y en GNU es un ñu.

{{< image
    gallery="true"
    image1="logotype:linux.svg" optionsthumb1="300x200" title1="Tux la mascota de Linux"
    image2="logotype:beastie.png" optionsthumb2="300x200" title2="Bestie la mascota de BSD"
    image3="logotype:gnu.svg" optionsthumb3="300x200" title3="GNU la mascota de GNU"
    caption="Mascotas de Linux, BSD y GNU" >}}

### Diferencias en el modelo de desarrollo

Lo que conocemos como Linux es simplemente el núcleo del sistema operativo de las distribuciones GNU/Linux. las distribuciones GNU/Linux están compuestas por otra multitud de programas de usuario que forman el sistema operativo completo y lo hacen usable, estos programas son muchos de los programados bajo los proyectos de la fundación GNU. Este es el motivo de que las distribuciones GNU/Linux incluyan los términos de ambos proyectos. Las distribuciones GNU/Linux son una recopilación de programas de terceras partes, todos estos programas GNU y no GNU incluidos en los sistemas GNU/Linux están desarrollados por diferentes programadores ajenos a Linux y los creadores de la distribución. Los creadores de las distribuciones GNU/Linux son los encargados de juntar los diferentes programas de cada fuente y empaquetarlas como un sistema usable, estable y libre de errores.

Las distribuciones BSD son muy diferentes en este aspecto ya que los desarrolladores del núcleo son los mismos que desarrollan los programas de usuario que hacen el sistema operativo completo.

Por otro lado, la arquitectura del sistema base y las aplicaciones de usuario tienen diferentes enfoques. En GNU/Linux hay dos variaciones usar una colección fija de paquetes donde solo se incorporan modificaciones de seguridad o un modelo en constante actualización o _rolling release_. Ubuntu y Debian son ejemplos de distribuciones de colecciones fijas en los ciclos de vida de las versiones y Arch Linux y [Void Linux][voidlinux] son ejemplos que están en constante actualización.

Las distribuciones BSD siguen un enfoque en el que el sistema base es fijo pero las aplicaciones de usuario se actualizan con nuevas versiones. El sistema base es pequeño, estable y solo incorpora cambios siguiendo un calendario de publicaciones. Los programas de usuario como [Firefox][Firefox], [LibreOffice][libreoffice] o el entorno de escritorio utilizan la última versión disponible de cada proyecto. Esto permite a las distribuciones BSD usar las últimas versiones sin comprometer la estabilidad del sistema al haber errores en el núcleo del sistema. Algunas distribuciones GNU/Linux proporcionan un modelo similar a las BSD como [Fedora Silverblue][fedora-silverblue] con una base estable y aplicaciones de usuario actualizadas.

Esta diferencia en el modelo de desarrollo del sistema base e independiente de las aplicaciones haace que en BSD las aplicaciones se instalen de forma independiente a los paquetes del sistema. Los _ports_ son la colección de paquetes con las aplicaciones instalables en los sistemas BSD.

### Diferencias en la licencia

Otro aspecto importante con diferencias está en la licencia del código fuente. Mientras que Linux usa una [licencia _GNU General Public License_ o GPL][gnu-gpl] los sistemas BSD usan una de las diferentes [licencias BSD][bsd-licenses] que tiene diferentes versiones según su número de clausulas de cuatro a cero en cuyo caso es considerado software de dominio público.Ambas son licencias consideradas como software libre.

La diferencia entre la licencia GPL y BSD está en que la BSD es más permisiva, la licencia GPL impone restricciones a los programas distribuidos requiriendo que el código fuente del software también sea entregado. Por el contrario, la licencia BSD no impone si se solicita el requerimiento a los programas de que el código fuente sea entregado en su forma original del programa compilado en formato binario. En algunos casos la licencia BSD es más atractiva para algunas empresas que pueden usar su software sin necesidad de tener que distribuir el código fuente del software en el que se basan ni sus modificaciones si han hecho alguna lo que les permite mantener su propiedad intelectual oculta a sus competidores.

Las licencias BSD no imponen unos requerimientos éticos y morales, la licencia GPL usada por Linux tiene un mayor activismo para promover y proteger el software libre. En BSD se centran más en el desarrollo que en el activismo del software libre y de código abierto.

En los últimos años el soporte de hardware en Linux ha mejorado notablemente y salvo hardware muy específico o raro lo normal es que todo funcione sin  problemas importantes. El soporte de los fabricantes se centra más hacer compatible su hardware con Windows o macOS que en Linux y es mas raro aún que ofrezcan soporte para algún BSD. De modo que el soporte de hardware en los BSD es más limitado.

### Distribuciones más importantes BSD

Al igual que en GNU/Linux ha varias distribuciones BSD con algunos propósitos más prioritarios en cada una de ellas. Soportan múltiples arquitecturas de procesadores incluyendo x86, ARM, MIPS, PowerPC y UltraSPARC. Estas son algunas de las distribuciones BSD más conocidas:

* [FreeBSD][freebsd]: es el BSD más popular, con el objetivo de proporcionar alto rendimiento y facilidad de uso. Soporta múltiples [plataformas de 32 y 64 bits](https://www.freebsd.org/platforms/).
* [OpenBSD][openbsd]: esta distribución está diseñada para la máxima seguridad realizando modificaciones de forma proactiva que otros vendedores no son capaces de hacer e integrando  criptografía.
* [NetBSD][netbsd]: uno de sus principios es hacer el sistema operativo altamente portable, valores por defecto seguros, calidad de código, corrección y adhesión a estándares.
* [MidnightBSD]: es una distribución BSD orientada al escritorio que incluye las aplicaciones de usuario básicas como navegador, correo electrónico, procesador de textos, juegos y muchos más.

Hay otros sistemas BSD notables:

* [DragonFly BSD][dragonflybsd]: sigue un camino diferente al de las anteriores BSD. Algunas características diferenciadoras son su sistema de archivos de alto rendimiento HAMMER, kernels virtuales, alto rendimiento en múltiples procesadores con SMP con poca contención.
* [Darwin](https://en.wikipedia.org/wiki/Darwin_%28operating_system%29) / Mac OS X: los sistema de Apple con Mac OS X están basados en BSD.
* [PlayStation 4](https://es.wikipedia.org/wiki/PlayStation_4): el sistema operativo Orbis de esta consola está basado en FreeBSD 9.

{{< image
    gallery="false"
    image1="logotype:freebsd.jpg" optionsthumb1="150x150" title1="FreeBSD"
    image2="logotype:openbsd.svg" optionsthumb2="150x150" title2="OpenBSD"
    image3="logotype:netbsd.svg" optionsthumb3="150x150" title3="NetBSD" >}}
{{< image
    gallery="false"
    image1="logotype:midnightbsd.svg" optionsthumb1="150x150" title1="MidnightBSD"
    image2="logotype:dragonflybsd.svg" optionsthumb2="150x150" title2="DragonFly"
    caption="Varias de las distribuciones más importantes de BSD" >}}

La publicación digital [BSD Magazine][bsdmag] gratuita bajo suscripción se publica de forma mensual con varios artículos técnicos dedicados a las diferentes distribuciones BSD. Permite adentrarse en el mundo de la distribuciones BSD. Más información sobre las distibuciones en la Wikipedia.

* [Wikipedia FreeBSD](https://en.wikipedia.org/wiki/FreeBSD)
* [Wikipedia OpenBSD](https://en.wikipedia.org/wiki/OpenBSD)
* [Wikipedia NetBSD](https://en.wikipedia.org/wiki/NetBSD)
* [Wikipedia DragonFly BSD](https://en.wikipedia.org/wiki/DragonFly_BSD)
* [Wikipedia macOS](https://en.wikipedia.org/wiki/MacOS)

### Razones por las que usar y no usar una distribución BSD

Entre las razones para usar BSD están:

* Posibilidad de usar características de Solaris como el avanzado sistema de archivos [ZFS][openzfs] o [DTrace][dtrace].
* La comunidad BSD se centra más en la tecnología que en los aspectos de licencia y políticos del software libre.
* Estabilidad y sistema bien estructurado.
* Alto rendimiento y gran desempeño en tareas de red.
* Menos fragmentación en distribuciones como ocurren en Linux donde algunas no tiene objetivos claros diferenciadores.
* La licencia BSD.

Algunas de las razones por las que no usar BSD están:

* Falta de soporte hardware.
* No hay soporte para suspender y continuar en portátiles.
* Ausencia en móviles y algunas funcionalidades inexistentes.
* Más fácil de usa Mac OS X que FreeBSD.
* _ports_ rotos.
* Menos información y ayuda en internet que de GNU/Linux.

### Distribuciones más importantes de GNU/Linux

Las distribuciones GNU/Linux son más numerosas si bien es cierto que muchas de ellas no tienen un objetivo que las diferencie claramente de otras. Algunas importantes son:

* [Fedora][Fedora], [CentOS][centos], RHEL.
* Ubuntu, [Debian][debian], [Linux Mint][linuxmint], [elementary OS][elementary].
* [openSUSE][opensuse].
* [Arch Linux][archlinux].

{{< image
    gallery="false"
    image1="logotype:ubuntu.svg" optionsthumb1="150x150" title1="Ubuntu"
    image2="logotype:opensuse.svg" optionsthumb2="150x150" title2="openSUSE"
    image3="logotype:debian.svg" optionsthumb3="150x150" title3="Debian" >}}
{{< image
    gallery="false"
    image1="logotype:archlinux.svg" optionsthumb1="150x150" title1="Arch Linux"
    image2="logotype:fedora.svg" optionsthumb2="150x150" title2="Fedora"
    image3="logotype:elementary.svg" optionsthumb3="150x150" title3="elementary OS" >}}

He escrito algunos artículos para [elegir la mejor distribución GNU/Linux][blogbitix-190] según las necesidades del usuario o uso. [Cómo descargar e instalar Ubuntu paso paso desde cero][blogbitix-232], una de las distribuciones más populares y recomendadas para los usuarios recién llegados a GNU/Linux y que muchos usuarios con experiencia siguen usando. [Las aplicaciones del entorno de escritorio GNOME][blogbitix-464] con las que los usuarios interaccionan con la computadora o [la distribución Fedora Silverblue][blogbitix-483] con una aproximación diferente a la mayoría de las distribuciones con un sistema inmutable y basado en contenedores que le dota de mayor fiabilidad al realizar actualizaciones del sistema que en ciertos aspectos se parece a las distribuciones BSD al separar el sistema base de las aplicaciones.

{{% reference %}}
* [What’s the Difference Between Linux and BSD?](https://www.howtogeek.com/190773/htg-explains-whats-the-difference-between-linux-and-bsd/)
* [Difference Between Linux And BSD | Open Source Operating Systems](https://fossbytes.com/difference-linux-bsd-open-source/)
* [BSD licenses](https://en.wikipedia.org/wiki/BSD_licenses)
* [BSD versus Linux distribution development](https://distrowatch.com/weekly.php?issue=20200622#qa)
* [Why Should You Use FreeBSD? Here's Some Reasons](https://www.phoronix.com/scan.php?page=news_item&px=MTExMDg)
* [Reasons Why You Should Not Use FreeBSD](https://www.phoronix.com/scan.php?page=news_item&px=MTExMjE)
* [FreeBSD Ports](https://www.freebsd.org/ports/)
{{% /reference %}}

{{% /post %}}
