---
pid: 479
type: "post"
title: "Sobre el futuro de las distribuciones GNU/Linux y los sistemas operativos"
url: "/2020/05/sobre-el-futuro-de-las-distribuciones-gnu-linux-y-los-sistemas-operativos/"
date: 2020-05-03T09:30:00+02:00
updated: 2020-05-03T11:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:linux.svg"
tags: ["gnu-linux", "planeta-codigo"]
summary: "Linux es uno de los mejores sistemas operativos actuales y sobre todo usable y completo. Eso no quiere decir que en el futuro no tan lejano haya cambios importantes en como hemos conocido las distribuciones de GNU/Linux hasta hoy. Ya se están produciendo cambios y surgiendo nuevas basadas en tecnologías y pricipios significativamente diferentes que mejoran algunas deficiencias de la actual generación en la que están basadas la mayoría de las distribuciones más populares actuales."
---

{{% post %}}

{{< logotype image1="linux.svg" >}}

Las distribuciones [GNU][gnu]/[Linux][linux] tal y como las conocemos hoy es muy posible que cambien en el futuro en varios aspectos, ya lo están haciendo.

Uso [Arch Linux][archlinux] y estoy muy contento con ella por su excelente [documentación con su wiki][archlinux-wiki], es rápida y bastante estable, el tener siempre el sistema junto con sus aplicaciones actualizadas y un sistema con únicamente las aplicaciones que necesito, pero eso no quiere decir que algunos de sus aspectos sean mejorables.

Un aspecto mejorable es que el gestor de paquetes _pacman_ no descarga los paquetes de forma paralela con esto los usuarios que tengan una velocidad de descarga rápida reducirían el tiempo de descarga sensiblemente. Otro aspecto mejorable es que una actualización es susceptible de dejar el sistema roto en algún aspecto, puede ser simplemente que el sonido no funciona hasta en el caso más grave que el sistema no se inicie y haya arrancar el sistema en modo recuperación y hacer el [_downgrade_ del paquete que causa el error][blogbitix-66]. Por suerte, lo normal es que las actualizaciones funcionen correctamente sin introducir ningún error.

En cualquier caso las actualizaciones son frágiles tal como las conocemos, esto es algo que ni siquiera han resuelto [Windows][windows] ni [macOS][macos] que seguramente tendrán los mejores ingenieros de software de sistemas que el dinero puede pagar.

Hay cuatro puntos en los que es muy posible que los sistemas operativos cambien tal y como los conocemos: actualizaciones, aplicaciones, lenguaje de programación y _kernel_. Otros cambios que ya se han producido es la sustitución del antiguo sistema de inicio y gestor de servicios [System V][systemv] por [systemd][systemd] y del servidor gráfico [Xorg][xorg] por [Wayland][wayland] pero estos no son los únicos cambios que próximamente llegarán a algunas distribuciones GNU/Linux o surgirán nuevas basadas en estos nuevos principios y herramientas.

### Actualizaciones

Dada la fragilidad de las actualizaciones es deseable que en caso de que una produzca algún error sea posible volver a un estado anterior bueno conocido.

Ya se están produciendo cambios y surgiendo nuevas distribuciones. [Fedora Silverblue][fedora-silverblue] es un sistema inmutable que utiliza [OSTree][ostree] como sistema para versionar las actualizaciones en los sistemas Linux, [Toolbox][toolbox] basado en contenedores donde instalar las herramientas de desarrollo sin afectar al sistema operativo inmutable y Flatpak para instalar aplicaciones de usuario. [endless OS][endlessos] también utiliza OSTree y Flatpak, cada instalación es exactamente igual que en cualquier otro equipo de modo que no hay nignuna diferencia lo que proporciona mayor estabilidad y menos errores. Por otro lado las actualizaciones son muy rápidas y el sistema está preparado para volver a una versión anterior si algo no funciona.

[GNU Guix][gnu-guix] es una distribución que usa un gestor de paquetes transaccional de modo que en una actualización se actualizan todos los paquetes correctamente o no se actualiza ninguno evitando dejar un sistema inconsistente por algún error que se produzcan en el proceso de la actualización.

{{< image
    gallery="false"
    image1="logotype:fedora-silverblue.svg" optionsthumb1="200x150" title1="Fedora Silverblue"
    image2="logotype:endlessos.svg" optionsthumb2="200x150" title2="endless OS"
    image3="logotype:gnu-guix.svg" optionsthumb3="200x150" title3="GNU Guix"
    caption="Tres des las distribuciones de la siguiente generación" >}}

### Aplicaciones

Hasta hoy una parte característica de cada distribución es que tiene su propio repositorio de paquetes con el software que ofrece. Cada paquete de cada distribución es compilado y probado específicamente para cada distribución, cada paquete de cada distribución es mantenido por una persona lo que requiere mucho tiempo del escaso tiempo que tienen estos mantenedores más teniendo en cuenta que muchos de ellos lo hacen en su tiempo libre y no están respaldados económicamente por ninguna organización.

Otro problema de los paquetes de cada distribución es que algunas anteponen la estabilidad a las nuevas versiones lo que hace que incluyan software que está por detrás en varias versiones de la última. Al mismo tiempo para corregir problemas del software de algunos paquetes por fallos o errores de seguridad los mantenedores aplican parches y cambios adicionales que no son los del software original, a veces con buenos motivos pero que hacen que no todas las distribuciones se beneficien de esos cambios.

Han surgido varias formas de distribuir software y aplicaciones de usuario distintas a los paquetes de las distribuciones, tres de ellas son [Flatpak][flatpak], [Snapcraft][snapcraft] y [AppImage][appimage].

* [Flatpak, distribución e instalación de programas de escritorio en las distribuciones GNU/Linux][blogbitix-362]

Estas tres opciones son independientes de la distribución, el software es distribuido por los autores originales de la aplicación y permiten tener software actualizado incluso en distribuciones que sus paquetes equivalentes están desactualizados. No necesitan de un mantenedor en cada distribución ya que son los propios autores originales del software los que se encargan de la distribución de su software.

{{< image
    gallery="false"
    image1="logotype:flatpak.svg" optionsthumb1="200x150" title1="Flatpak"
    image2="logotype:snapcraft.svg" optionsthumb2="200x150" title2="Snapcraft"
    image3="logotype:appimage.svg" optionsthumb3="200x150" title3="AppImage"
    caption="Diferentes gestores de aplicaciones para instalar software y programas" >}}

### Lenguaje de programación

Mucho del software actual y sobre todo el de sistemas y los sistemas operativos ha sido desarrollado en el lenguaje de programación C por su abstracción del lenguaje máquina en un lenguaje de alto nivel pero conservando la proximidad al modo del funcionamiento de las máquinas. Bien empleado es capaz de obtener el máximo rendimiento de una máquina.

Pero el lenguaje C también tiene algunos inconvenientes uno de ellos es que delega en el programador algunas tareas. Dos de ellas son la solicitud y liberación de la memoria del sistema, un error en esta lógica hace que un programa no libere memoria que ha solicitado y cada vez ocupe más, degradando el sistema con el uso lo que afecta al resto de aplicaciones y el rendimiento del sistema además de requerir al programador dedicar tiempo a implementar esta lógica. El segundo problema de C es que por sí mismo no impone restricciones en el acceso a la memoria, muchos errores de seguridad provienen de que cierto código no comprueba correctamente los límites de memoria de una estructura de datos, esto provoca que cierta zona de memoria contigua pueda ser sobreescrita con datos no deseados o leer datos como claves. Incluso un programador experimentado dada la naturaleza compleja del software cometen estos errores.

Lenguajes más recientes como [Go][go] o [Rust][rust] los más conocidos es posible que sustituyan a C como lenguaje de sistemas. En Rust ya hay alguna implementación de sistema operativo, [Redox][redox] y es posible que si Google construye un sistema alternativo a [Andoid][android] esté basado en Go.

Es difícil que surja un nuevo sistema operativo que sustituya rápidamente a los existentes pero es posible que los existentes vayan cambiando su lenguaje de programación o surjan nuevos con esos lenguajes.

{{< image
    gallery="false"
    image1="logotype:rust.svg" optionsthumb1="200x150" title1="Rust"
    image2="logotype:go.svg" optionsthumb2="200x150" title2="Go"
    caption="Lenguajes de sistemas que pueden reemplazar a C" >}}

### Kernel

El kernel de Linux es monolítico no porque sea lo mejor sino porque como [Linus Torvalds][linus-torvalds] considera es lo más pragmático por su mayor facilidad de desarrollo. Pero un fallo en cualquier parte de su gran cantidad de código sobre todo el los controladores de dispositivos hace que el sistema produzca un volcado del sistema y deje de funcionar completamente. También es más inseguro ya que cualquier código que el kernel cargue y funcione en modo superusuario supone un potencial problema ya que es capaz de realizar cualquier cosa.

Los kernels basados en microkernels son más seguros al ser su núcleo mucho más pequeños, de unos pocos miles de líneas de código contra los millones de Linux, el resto de funcionalidades se implementan en modo de usuario. También son más seguros y fiables. Una parte del sistema no tiene por que hacer que el sistema completo colapse, el kernel puede reiniciar esa parte sin ni siquiera el usuario ser consciente de que ha habido un error, Minix tiene un servicio de reencarnación que reinicia otros servicios en caso de fallo. Dado que la mayor parte del sistema se ejecuta en modo usuario son más seguros ya que los procesos no tienen permisos para hacer cualquier cosa.

Ejemplos de kernels basados en microkernel son [Minix][minix], [GNU/Hurd][gnu-hurd], el propio Redox o [Genode][genode]. A pesar de todo ninguno de ellos ha tomado suficiente relevancia para hacer no ya sombra a Linux sino tampoco a los BSD. Sus desventajas es que hasta ahora no han demostrado alcanzar el mismo rendmiento que los kernels monolíticos y como en el caso de GNU/Hurd su desarrollo esté muy lejos de completarse por su mayor dificultad de desarrollo.

Si a Linux le surge una alternativa no será porque es malo sino porque no tiene algunas características. Un ámbito puede ser el de coches autónomos en los que un fallo puede suponer un accidente con víctimas mortales o algún sistema que necesite gran fiabilidad como operaciones bursátiles.

{{< image
    gallery="false"
    image1="logotype:minix.jpg" optionsthumb1="200x150" title1="Minix"
    image2="logotype:hurd.svg" optionsthumb2="200x150" title2="GNU/hurd"
    caption="Sistemas operativos basados en microkernel" >}}

### Sistema de archivos

Aún ext4 sigue siendo el sistema de archivos mayoritariamente empleado por la distribuciones GNU/Linux. Pero hay algunos otros sistemas que pretenden reemplazarlo, uno de ellos es [ZFS][zfs] y su reencarnación [openzfs][openzfs] originario de la extinta [Sun Microsystems][sun-microsystems] que como características destacadas tiene _snapshoting_, evitar corrupción de datos en metadatos y un mayor límite de espacio de almacenamiento máximo teórico que puede considerarse hoy en día infinito y únicamente relevante para superordenadores.

* [Comparison of file systems](https://en.wikipedia.org/wiki/Comparison_of_file_systems)

{{< image
    gallery="false"
    image1="logotype:openzfs.svg" optionsthumb1="200x150" title1="OpenZFS"
    caption="Sistema de archivos avanzado OpenZFS" >}}

{{% /post %}}
