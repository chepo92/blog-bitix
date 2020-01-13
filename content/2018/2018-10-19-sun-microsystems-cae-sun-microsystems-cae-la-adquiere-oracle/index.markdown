---
pid: 355
type: "post"
title: "Sun Microsystems cae, la adquiere Oracle"
url: "/2018/10/sun-microsystems-cae-la-adquiere-oracle/"
aliases: ["/2018/10/sun-microsystems-cae/"]
date: 2018-10-19T11:00:00+02:00
update: 2018-10-20T12:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:sun-microsystems.svg"
tags: ["opinion", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="sun-microsystems.svg" title1="Sun Microsystems" width1="300" image2="oracle.svg" title2="Oracle" width2="300" >}}

Era enero del 2010 y se anunciaba que [Oracle][oracle] adquiría [Sun][sun-microsystems] (_Stanford University Network_) por unos 7400 millones de dólares. Sun Microsystems era asimilada por uno de los grandes entre el mundo empresarial que eliminaba a uno de sus competidores. Fue un hecho importante debido a varias de las tecnologías que había desarrollado Sun y poseía como aún a día de hoy uno de los lenguajes más populares para el desarrollo de software, Java, y otras tecnologías importantes que había adquirido hace no tanto tiempo como la base de datos [MySQL][mysql] competencia de Oracle.

Otras tecnologías de Sun relevantes eran el sistema operativo [Solaris][solaris], la tecnologías de depuración [DTraze][dtrace], el avanzado sistema de archivos [ZFS][zfs] utilizando a día de hoy en los sistemas [BSD][bsd], el paquete ofimático OpenOffice predecesora de [LibreOffice][libreoffice], la herramienta de automatización de proyectos Hudson también predecesora de [Jenkins][jenkins], el software de virtualización [VirtualBox][virtualbox] o la plataforma de microprocesadores [Sparc][sparc].

{{< image
    gallery="true"
    image1="image:sun-microsystems-headquarters.jpg" optionsthumb1="200x150" title1="Sun Microsystems Headquarters"
    image2="image:sun-microsystems-workstation.jpg" optionsthumb2="200x150" title2="Sun Microsystems Workstation"
    image3="image:sun-ultrasparc.jpg" optionsthumb3="200x150" title3="Sun Microsystems sparc" >}}

La adquisición de Oracle generó dudas por la cultura de empresa más cerrada que la que tenía Sun que contribuyó e influenció notablemente en el mundo tecnológico aún a día de hoy. Después de unos meses de la adquisición varias personas salieron de la compañía como [James Gosling][james-gosling] creador de Java, [Tim Bray](https://en.wikipedia.org/wiki/Tim_Bray) creador de formato XML, [Kohsuke Kawaguchi](https://en.wikipedia.org/wiki/Kohsuke_Kawaguchi) desarrollador principal de Hudson o [Bryan Cantrill](https://en.wikipedia.org/wiki/Bryan_Cantrill) creador de DTrace.

¿Cuál fue el error o errores de Sun Microsystems para que teniendo unas tecnologías tan importantes tuviese problemas económicos como para que fuese vendida? Fue una de las empresas más afectadas por el estallido de la burbuja de las punto com y una pérdida importante de clientes grandes. Posiblemente el fallo fue que aún poseyendo grandes tecnologías y habiendo realizado importantes adquisiciones, algunas de dudoso acierto y muy caras, no fue capaz de rentabilizarlas económicamente, quizá que GNU/Linux le estuviese haciendo competencia al sistema Solaris u opciones más económicas como la arquitectura x86 a Sparc.

Oracle se ha deshecho muchas de las tecnologías a las que creía no sacar rentabilidad, otras como Java las ha seguido desarrollando creo en una buena dirección con la publicación de Java 7 y más tarde incluyendo cambios más importantes con [Java 8][blogbitix-17], más recientemente [Java 9][blogbitix-263], [10][blogbitix-306] y [11][blogbitix-350]. Con Java EE ha dado también un paso importante para proporcionarle un modelo de desarrollo más abierto y rápido traspasando el desarrollo a la fundación Eclipse y adoptando un nuevo nombre de [Java EE][java-ee] a [Jakarta EE][jakartaee]. Algunas otras conserva como VirtualBox con buena salud.

{{< image
    gallery="false"
    image1="logotype:java.svg" optionsthumb1="300x200" title1="Java"
    image2="logotype:solaris.svg" optionsthumb2="300x200" title2="Solaris"
    image3="logotype:sparc.svg" optionsthumb3="300x200" title3="Sparc" >}}
{{< image
    gallery="false"
    image1="logotype:libreoffice.svg" optionsthumb1="300x200" title1="LibreOffice"
    image2="logotype:mysql.svg" optionsthumb2="150x100" title2="MySQL"
    image3="logotype:virtualbox.svg" optionsthumb3="300x200" title3="VirtualBox" >}}

En el artículo [The Java Saga](https://www.wired.com/1995/12/java-saga/) se comentan varios aspectos importantes de Java como que inicialmente este lenguaje estaba orientado a la electrónica donde la fiabilidad es más importante que la rapidez, C++ no era lo suficientemente fiable para lo que Gosling tenía en mente. Diseñaron la primera tableta electrónica, aún así pasa a ser la base de la emergente web para hacerla interactiva. Otro artículo interesante es [The downfall of Sun Microsystems](https://www.networkworld.com/article/2268096/servers/the-downfall-of-sun-microsystems.html) en el que precisamente se comenta la falta de rentabilizar varias de sus tecnologías y la crisis de las punto com.

En [Sun Microsystems, Inc.](https://www.britannica.com/topic/Sun-Microsystems-Inc) se indica que parte del éxito de Java se atribuye a la frase _«write once, run anywhere»_ significando que un programa escrito en Java no tiene que se reescrito para cada sistema operativo de cada computadora. Si es ejecutado en una computadora UNIX, debería ejecutarse en una máquina Windows o Macintosh mediante el uso de la máquina virtual de Java o JVM. La _Java Virtual Machine_ se proporcionaba con UNIX, Macintosh y otros systemas asi como navegadores web como Netscape o Internet Explorer. Esa versatilidad hizo de Java un lenguaje popular al escribir aplicaciones para la web y para varios observadores disminuyendo la importancia de los sistemas operativos.

En 1997 Microsoft viendose amenazada y haciendo uso de su técnica [adoptar, extender y extinguir](https://en.wikipedia.org/wiki/Embrace%2C_extend%2C_and_extinguish) publicó una JVM que era incompatible con otras JVMs rompiendo de forma efectiva la promesa _«write once, run anywhere»_ de los programas Java. En noviembre de 1998 la justicia instó a Microsoft a no distribuir más copias de su versión de Java.

En los artículos [La historia de Sun Microsystems, 1ª Parte: Network is the computer](https://mailchi.mp/bonillaware/sun-microsystems-1?e=ccf70eee59) y [La historia de Sun Microsystems. 2ª Parte: Write Once. Run Everywhere](https://mailchi.mp/bonillaware/sun-microsystems-2?e=ccf70eee59) se hace un buen repaso de la historia de esta empresa desde sus inicios e hitos más importantes asi como las personas que intervinieron en ellos pasando por los malos momentos hasta la finalmente adquisición por Oracle. Otro artículo y sus comentarios interesante es [Así es como Oracle ha sometido a Sun Microsystems a una muerte larga y agónica](https://www.xataka.com/historia-tecnologica/asi-es-como-oracle-ha-sometido-a-sun-microsystems-a-una-muerte-larga-y-agonica).

Por afinidad hacia el _open source_ con su cultura de empresa la que hubiese preferido que adquiriese Sun es [Red Hat][redhat] una compañía que ha demostrado que con el software libre se puede hacer negocio además de contribuir a la comunidad beneficiandose de ella al mismo tiempo, en el año 2012 alcanzó la cifra de 1000 millones de dólares de facturación y 2000 millones en el 2018. Sin embargo, no hubiese sido posible en ese momento porque Red Hat no era lo suficientemente grande como para hacer una adquisición de tal tamaño para con Sun Microsystems.

Sun Microsystems dejó una larga herencia que dura aún en día y frases legendarias y visionarias como _«the network is the computer»_ atribuida a [John Gage](https://en.wikipedia.org/wiki/John_Gage) o _«write once, run anywhere»_ de Java.

{{< reference >}}
* [Sun Microsystems][sun-microsystems]
* [Sun acquisition by Oracle](https://en.wikipedia.org/wiki/Sun_acquisition_by_Oracle)
* [Write once, run anywhere](https://en.wikipedia.org/wiki/Write_once,_run_anywhere)
* [Links related with the history of Sun Microsystems](https://gist.github.com/dbonillaf/d62dc83bc3747cccb0d885c9d4ad76f5)
* [The rise and fall of Sun Microsystems](https://www.arnnet.com.au/slideshow/334210/pictures-remember-rise-fall-sun-microsystems/)
{{< /reference >}}

{{% /post %}}
