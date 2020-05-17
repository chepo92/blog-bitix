---
pid: 484
type: "post"
title: "La controversia sobre el sistema de inicio systemd adoptado en GNU/Linux"
url: "/2020/05/la-controversia-sobre-el-sistema-de-inicio-systemd-adoptado-en-gnu-lnux/"
date: 2020-05-17T12:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:systemd.svg"
tags: ["gnu-linux", "planeta-codigo"]
summary: "systemd ya tiene una década de desarrollo, ha sido adoptado como sistema de inicio en las distribuciones GNU/Linux más importantes como Debian, Ubuntu, Fedora o Arch Linux y derivadas. Durante este tiempo ha recibido múltiples críticas en varios aspectos. Sigue evolucionando cambiando aspectos importantes de cómo han sido siempre las distribuciones, uno de los próximos es posible que sea _systemd-homed_ con la intención de hacer portables y autocontenidos las carpetas de inicio de los usuarios."
---

{{% post %}}

{{< logotype image1="systemd.svg" image2="linux.svg" >}}

El sistema de inicio y control de procesos [systemd][systemd] creado por [Lennart Poettering](https://en.wikipedia.org/wiki/Lennart_Poettering) ha reemplazado en la mayoría de distribuciones [GNU][gnu]/[Linux][linux] al más antiguo sistema [SysVinit][sysvinit]. A systemd se le ha criticado en varios aspectos incluso algunas personas llegando a crear _forks_ de distribuciones con el principio de no usar systemd.

Poettering escribió un artículo respondiendo a [30 de los mayores mitos sobre systemd](http://0pointer.de/blog/projects/the-biggest-myths). También hay opiniones contrarias a systemd, otra persona respondía con [13 de las mayores falacias acerca de systemd](http://judecnelson.blogspot.com/2014/09/systemd-biggest-fallacies.html). Aún con las [críticas en su recepción]((https://en.wikipedia.org/wiki/Systemd#Reception)) que se ha hecho a systemd es admirable la fuerza de voluntad y determinación de Lennart Poettering que un día se propuso hacer un sistema de inicio que sea usado en toda la base de distribuciones de Linux, es capaz de sobreponerse a no hacerlo y un día proporciona ese sistema de inicio que funciona siendo adoptado en la mayoría de distribuciones Linux.

{{< image
    gallery="true"
    image1="image:systemd-components.svg" optionsthumb1="300x200" title1="Componentes de systemd"
    image2="image:linux-kernel-unified-hierarchy-cgroups-and-systemd.svg" optionsthumb2="300x200" title2="Jerarquía unificada del kernel Linux, cgroups y systemd"
    caption="Componentes de systemd y jerarquía unificada del kernel Linux, cgroups y systemd" >}}

En un [comentario de reddit](https://www.reddit.com/r/archlinux/comments/4lzxs3/why_did_archlinux_embrace_systemd/) el mantenedor de los _script_ init para [Arch Linux][archlinux] compartía varios puntos en los que systemd es mucho mejor que los _scripts_ init. Hay que tener en cuenta que los sistemas modernos actuales son más complejos, dinámicos y asíncronos que lo eran en la época que se creó SysVinit. No es posible determinar cuando una pieza de hardware estará disponible por ejemplo con los medios extraíbles. Durante bastante tiempo, esto ha sido resuelto lanzando eventos y esperando a _udev_. Esto toma mucho tiempo sin haber garantía que todo el hardware está disponible. Hacer esto con _scripts_ de shell puede ser muy complejo, lento y propenso a errores. Hay que reintentar todo tipos de operaciones en un bucle hasta tener éxito. La solución es un sistema que realice acciones basado en eventos, esta es una de las más importantes características de systemd.

Estos eran varios de los problemas de los _scripts init_:

* Los _scripts init_ son estúpidos. En su primera fase son una serie de pasos estáticos que son ejecutados en cada inicio sin casi posibilidad de ajustar el comportamiento. En su segunda fase los demonios son iniciados en orden lo que significa que cada _script init_ es llamado en serie uno detrás de otro.
* Las complejas tareas en los _scripts_ _shell_ requieren lanzar muchos programas externos de ayuda. Esto hace las cosas lentas. systemd trata la mayoría de estas tareas en código C o mediante las librerías correctas. No llama a muchos programas externos para realizar sus tareas.
* El proceso de inicio completo está serializado lo que también lo hace muy lento. systemd puede paralelizarlo y lo hace bastante bien.
* No hay indicación de cuándo un cierto demonio ha sido iniciado. Cada _script init_ tiene que implementar algún tipo de manejo de archivos PID o similar. La mayoría de los _scripts_ init no lo hacían. systemd tiene una solución totalmente confiable basada en los _cgroups_ de Linux.
* Eran posibles condiciones de carrera entre demonios iniciados con reglas _udev_, activación de _dbus_ y configuraciones manuales. Puede ocurrir que un demonio sea iniciado múltiples veces incluso simultáneamente, lo que ocasiona resultados inesperados (esto era un problema real con _bluez_). systemd proporciona una única instancia donde todos los demonios son manejados. Ahora ni _udev_ ni _dbus_ inician demonios, ahora le dicen a systemd que necesitan un demonio específico y systemd se preocupa de ello.
* Falta de configurabilidad. Era imposible cambiar el comportamiento de los _scripts init_ de una forma que sobreviviese a las actualizaciones del sistema. systemd proporciona buenos mecanismos con redefiniciones específicas para la máquina, elementos que estén presentes y ocultamiento.
* Mantenimiento costoso. Adicionalmente a los problemas de diseño mencionados los _scripts init_ también tenían un largo número de errores. Corregir esos errores era siempre complicado y tomaba tiempo que no siempre se disponían mantenedores. Delegar esta tarea a una comunidad más grande, en este caso a la comunidad de systemd, ha hecho las cosas mucho más fáciles para los mantenedores.

Aunque algunos de estos problemas pueden ser resueltos con algo de trabajo y algunos han sido resueltos por otros sistemas de inicio basados en SysV no hay ningún sistema que haya resuelto todos estos problemas y lo haya hecho de una manera confiable como lo ha hecho systemd. Lo que la mayoría de las críticas consideran _bloat_ el mantenedor de Arch los considera una complejidad necesaria para resolver problemas complejos de una manera genérica. Se puede decir lo que se quiera de Poettering pero él se ha dado cuenta de cuáles eran los problemas del sistema de inicio y ha proporcionado una solución que funciona.

Las críticas que se le hace a systemd son:

* Viola la filosofía de UNIX. La filosofía de UNIX es que cada programa debe tener un propósito específico, si es necesario crear varios programas uno por cada propósito. Se dice que systemd es un único binario que viola la filosofía UNIX, la realidad es que systemd se compone de múltiples binarios, pero están separados y modularizados. En su uso dependen unos de otros, no pueden usarse sin los otros y esta es la violación a la filosofía UNIX y por la que en este aspecto no se los considera modulares.
* Está sobrecargado (_bloated_) y es monolítico. De nuevo systemd está compuesto de múltiples binarios no es un un único binario.
* Tiene errores. Como todo software, en el caso de un sistema de inicio por su criticidad son más notables. Cualquier otro sistema de inicio no estaría exento de errores. Tiene manejo de errores que en vez de fallar y tumbar el sistema deja el sistema en un punto que al menos se puede reiniciar.
* No es portable. systemd es específico de Linux ya que usa varias funcionalidades que no están presentes en otros sistemas, una de ellas _cgroups_ para el manejo de procesos. Esto aísla al resto de plataformas como la familia de sistemas operativos BSD que no tiene esas funcionalidades pero al mismo tiempo esas plataformas son libres de usar el sistema de incio que deseen.

Algunas distribuciones no usan systemd o es opcional, dos notables son [Gentoo][gentoo] y [Alpine Linux][alpine-linux] que usan [OpenRC][openrc]. Otras alternativas son [runit][runit], [procd][procd] y [supervisor][supervisord]. La distribución [Devuan][devuan] que surgió como propósito principal no usar systemd abandera las distribuciones que no lo usan. En la wiki de Gentoo hay una [compraración entre los diferentes sitemas de inicio](https://wiki.gentoo.org/wiki/Comparison_of_init_systems).

De esa comparación destaco dos cosas de systemd:

* Los archivos de configuración de los servicios son proporcionados preferiblemente por los desarrolladores de los servicios y no los mantenedores de cada distribución, liberando a los mantenedores de esas tareas y haciendo que las mejoras en un servicio no sea exclusivo de una distribución sino que todas se beneficien de él.
* El formato de los archivos de configuración de los servicios es descriptivo, no codificado en un lenguaje de programación con un _script bash_.

{{< youtube
    video="o_AIw9bGogo" >}}

{{% reference %}}
* [About the systemd controversy...](https://blog.erratasec.com/2015/08/about-systemd-controversy.html)
* [What is with all the controversy with systemd?](https://www.reddit.com/r/linuxmasterrace/comments/616wxo/what_is_with_all_the_controversy_with_systemd/)
* [What's wrong with systemd?](https://www.reddit.com/r/linux/comments/3u2ahq/whats_wrong_with_systemd/)
* [Why do people not like Systemd?](https://www.reddit.com/r/linux/comments/5n069y/why_do_people_not_like_systemd/)
* [ELI5: systemd - Advantages and disadvantages](https://www.reddit.com/r/linux/comments/50mpzv/eli5_systemd_advantages_and_disadvantages/)
* [ELI5: What's the big issue with Systemd?](https://www.reddit.com/r/linux/comments/4n3t6s/eli5_whats_the_big_issue_with_systemd/)
{{% /reference %}}

{{% /post %}}
