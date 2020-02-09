---
pid: 462
type: "post"
title: "Tareas básicas después de instalar una distribución GNU/Linux"
url: "/2020/02/tareas-basicas-despues-de-instalar-una-distribucion-gnu-linux/"
date: 2020-02-09T10:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:linux.png"
tags: ["gnu-linux", "planeta-codigo"]
summary: "Para utilizar de forma efectiva y eficiente una distribución GNU/Linux es necesario conocer las tareas básicas que hay que realizar en todo sistema. Estas son actualizar los paquetes instalados del sistema a nuevas versiones con correcciones de seguridad, correcciones de errores y mejoras, instalar y desinstalar nuevos paquetes y programas. Conocer el uso básico de la terminal permite automatizar y realizar de forma masiva algunas tareas además de también permitir actualizar el sistema e instalar y desinstalar programas."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Si has instalado recientemente o piensas instalar una distribución [GNU][gnu]/[Linux][linux] después de [elegir la distribución GNU/Linux][blogbitix-190] que más se adapte a tus preferecias y de seguir los pasos para [instalar una como Ubuntu][blogbitix-232], después es necesario conocer unas pocas tareas de administración del sistema. En cada distribución varía ligeramente pero en todas hay que realizar unas tareas básicas de mantenimiento.

Estas tareas básicas de mantenimiento son:

* **Actualizar los paquetes instalados del sistema**. Los paquetes actualizados incluyen correcciones de seguridad por lo que es importante actualizar el sistema de forma regular. También, pueden incluir nuevas versiones de los paquetes con nuevas funcionalidades y correcciones de errores. Una programa que es necesario mantener actualizado es el navegador web, también el núcleo o _kernel_ de Linux.
* **Instalar y desinstalar nuevos paquetes y programas**. Dependiendo de las tareas que se deseen realizar hay que instalar los programas que permitan realizarlas. Para editar documentos ofimáticos, un navegador web, retocar imágenes, correo electrónico, descarga de _torrents_, reproductor de vídeo, reproductor de música, captura de imágenes, captura vídeo del escritorio, programas para el desarrollo y programación, virtualización, ... Cada programa tienen su paquete en la ditribución que es necesario instalar para usarlo y desinstalar cuando el programa ya no se va a usar más. Es dificil que no encuentres un programa que realice lo que se desea.
* **Uso básico de la terminal**. Hay programas con interfaz gráfica pero para algunas tareas es más rápido hacerlas desde la línea de comandos con la ventaja que con un _script_ es posible automatizar en caso de ser repetitiva. Desde la línea de comandos hay numerosos programas útiles que además se pueden combinar de forma que la salida de uno sea la entrada de otro.

Dependiendo de la distribución cada una de estas tareas puede variar el comando en concreto pero en general en todas se realizan de forma similar. A continuación comento como realizar las tareas en dos de las distribuciones más populares como son [Ubuntu][ubuntu] y [Arch Linux][archlinux] pero en [Fedora][Fedora], [Debian][debian], [elementary OS][elementary] se realizan de forma similar.

{{< image
    gallery="false"
    image1="logotype:ubuntu.svg" optionsthumb1="200x150" title1="Ubuntu"
    image2="logotype:archlinux.svg" optionsthumb2="200x150" title2="Arch Linux" >}}

### Actualizar los paquetes instalados del sistema

En todas las distribuciones hay un gestor de paquetes que se encarga de forma automatizada de descargar desde los repositorios las nuevas versiones y actualizar los paquetes. Cada paquete tiene unas dependencias que el gestor de paquetes también se encarga de descargar, instalar y actualizar. Es importante realizar la actualización regularmente, todas las semanas o cada dos semanas, dado que estos incluyen importantes correcciones de seguridad, correcciones de errores o mejoras con nuevas opciones.

En Ubuntu el gestor de paquetes es _apt_, la actualización de los paquetes instalados a la última versión disponible en los repositorios con las correcciones de seguridad y de errores se realiza con el siguiente comando. Arch Linux también tiene su comando para realizar la actualización de todos los paquetes del sistema.

{{< code file="actualizar-sistema-ubuntu.sh" language="bash" options="" >}}

Dado que Ubuntu no es una distribución _rolling release_ sino que tiene un calendario de publicación basado en fechas planificadas cada 6 meses y de dos años para las versiones de soporte largo o LTS cuando se lanza una nueva versión de la distribución hay que actualizar la versión del sistema. Se puede instalar el sistema completo desde cero en la nueva versión o actualizar la versión instalada en el sistema a la nueva versión. En ambos casos es recomendable previamente [realizar una copia de seguridad][blogbitix-144] por si en el proceso se produce algún tipo de error inesperado en el raro caso de que el sistema no llegue ni siquiera a entrar al entorno de escritorio.

{{< code file="actualizar-version-ubuntu.sh" language="bash" options="" >}}

En Arch Linux la actualización de los paquetes se realiza con el el siguiente comando. Dado que Arch Linux es una distribución _rolling release_ en la que en todo momento se disponen de las últimas versiones de los paquetes y programas no hay que hacer actualizaciones a nuevas versiones de la distribución sino que esta se mantiene en constante actualización. Lo importante en Arch Linux es hacer siempre actualizaciones completas del sistema y no parciales o de un programa individualmente dado que en algún caso es posible que la versiones de los paquetes de diferentes versiones de diferentes paquetes sean incompatibles.

{{< code file="actualizar-sistema-archlinux.sh" language="bash" options="" >}}

En el raro caso de que al actualizar un paquete en Arch Linux haya algún error se puede [desactualizar a la versión anterior o hacer un _downgrade_][blogbitix-66].

### Instalar y desinstalar nuevos paquetes y programas

Los programas y comandos permiten realizar las tareas de productividad que se deseen realizar. Para instalar nuevos programas también se utiliza el gestor de paquetes. Se puede realizar desde la linea de comandos o de forma gráfica usando el centro de software de GNOME. Basta con buscar el programa deseado y pulsar el botón instalar, la desinstalación se realiza tambíen desde el centro de Software de GNOME con el botón desinstalar.

{{< image
    gallery="true"
    image1="image:centro-de-software-gnome-1.png" optionsthumb1="300x200" title1="Centro de software de GNOME"
    image2="image:centro-de-software-gnome-2.png" optionsthumb2="300x200" title2="Programas en el centro de software"
    caption="Centro de software de GNOME" >}}

Si en algún momento se deja de usar un programa o se reemplaza por otro que que se considere mejor es recomendable desinstalar el antiguo lo que permite recuperar el espacio en el almacenamiento persistente que ocupe y evitar la necesidad de descargar las actualizaciones de seguridad de un programa que no se usa.

Si se trata de un programa gráfico al instalar el programa se añade un acceso directo en el lanzador de programas del entorno de escritorio como en [GNOME][gnome], el entorno de escritorio [KDE][kde] también tiene el suyo.

{{< image
    gallery="true"
    image1="image:gnome-dash.png" optionsthumb1="300x200" title1="Lanzador de aplicaciones de GNOME"
    caption="Lanzador de aplicaciones de GNOME" >}}

Los programas se pueden usar inmediatamente después de completar su instalación sin necesidad de reiniciar el sistema, las actualizaciones de componentes clave del sistema como el _kernel_ se instalan pero requieren un reinicio para que sean efectivas, este reinicio se puede realizar a conveniencia del usuario sin interrumpir de manera forzosa las tareas que esté realizando.

{{< image
    gallery="true"
    image1="image:actualizar-ubuntu-4.png" optionsthumb1="300x200" title1="Lanzador de aplicaciones de GNOME"
    caption="Reinicio del sistema después de una actualización de software" >}}

Ubuntu tiene un proceso que se ejecuta periódicamente y notifica al usuario si hay nuevas actualizaciones en la distribución, si las hay muestra un diálogo para aplicarlas. En Arch Linux las actualizaciones se inician a petición del usuario.

{{< image
    gallery="true"
    image1="image:actualizar-ubuntu-1.png" optionsthumb1="200x150" title1="Actualizar Ubuntu"
    image2="image:actualizar-ubuntu-2.png" optionsthumb2="200x150" title2="Actualizar Ubuntu"
    image3="image:actualizar-ubuntu-3.png" optionsthumb3="200x150" title3="Actualizar Ubuntu"
    caption="Actualizar Ubuntu" >}}

Desde la línea de comandos el gestor de paquetes también permite instalar y desinstalar programas, basta con conocer el nombre del paquete. La [base de datos de paquetes de Ubuntu][ubuntu-packages] y de [base de datos de Arch Linux][archlinux-packages] permiten hacer búsquedas por nombre, en el caso de Ubuntu hay varias bases de datos una por versión de la distribución de modo que hay que buscar en la que se tenga instalada.

{{< code file="instalar-programas-ubuntu.sh" language="bash" options="" >}}
{{< code file="instalar-programas-archlinux.sh" language="bash" options="" >}}

El centro de software de GNOME instala los [programas empaquetados con Flatpak][blogbitix-362] en vez de usando los paquetes de la distribución.

### Uso básico de la terminal

La línea de comandos de GNU/Linux al principio es difícil de utilizar dado que no es muy amigable al tener que conocer los comandos y sus parámetros para realizar la acción, las interfaces gráficas son más simples de utilizar dado que ofrecen una guía al usuario sin necesidad de que tenga un conocimiento previo de cómo utilizarlo.

Sin embargo, para tareas repetitivas o masivas es mas rápido y sencillo utilizar la linea de comandos conociendo el comando y los parámetros a utilizar. Un ejemplo de tarea para que se puede utilizar la línea de comandos es para [convertir de forma masiva el formato de imágenes][blogbitix-447], [música][blogbitix-134] o [vídeos][blogbitix-135].

{{< code file="audio-masive-convert.sh" language="bash" options="" >}}
{{< code file="video-masive-convert.sh" language="bash" options="" >}}
{{< code file="convert-to-webp.sh" language="bash" options="" >}}

Además, los comandos se pueden componer de modo que la salida de un comando sea la entrada de otro. En este ejemplo un archivo de texto con una serie de palabras si se desea ordenar de forma ascendente y eliminar las palabras duplicadas. El comando _cat_ lee un archivo y lo emite en su salida, _sort_ realiza la ordenación y _uniq_ que elimina las líneas duplicadas. La salida de un programa se conecta a la entrada de otro usando una barra vertical, |.

{{< code file="texto.txt" language="plaintext" options="" >}}
{{< code file="sort.sh" language="bash" options="" >}}

La parte de GNU de GNU/Linux incluye una colección importante y numerosa de comandos algunos de estos son: _cal, date, at, head, tail, vim, nano, sort, alias, grep, cd, chmod, chown, curl, diff, echo, find, history, kill, less, ls, man, mkdir, rmdir, mv, rm, cp, ping, pwd, ssh, sudo, tail, tar, gzip, top, iotp, uname, awk, xargs, unzip, crontab, systemd, mount, whatis, locate, uniq, seq, jq, traceroute_. No es necesario conocerlos todos y sus opciones pero es muy util que existen y saber al menos que hacen, al necesitar usarlos basta con hacer una búsqueda en internet para evr un ejemplo de uso con sus opciones.

Los programas de línea de comandos ofrecen páginas de manual para aprender qué hacen, cuáles son sus parámetros y cómo utilizarlos con el comando _man_.

{{< code file="man.sh" language="bash" options="" >}}

Cada entorno de escritorio ofrece un programa gráfico de una terminal virtual.

{{< image
    gallery="true"
    image1="image:terminal-gnome.png" optionsthumb1="300x200" title1="Terminal de GNOME"
    caption="Terminal de GNOME" >}}

El intérprete de comandos es el encargado de entender las sintaxis de los comandos además de interpretar los _scripts_ para automatizar las tareas con pequeños programas de _script_ en vez de tener que introducir los comandos manualmente en la terminal. [El intérprete de comandos Bash][blogbitix-158] es un intérprete que es instalado por defecto en la mayoría de distribuciones GNU/Linux.

### Que no hacer

Por muchas medidas de seguridad que implemente un sistema no son suficientes si el usuario no es consciente de algunos peligros y cosas que no se deben hacer sin saber que se está haciendo.

Lo primero es no ejecutar cualquier comando que se encuentre en internet sin saber que hace por muy curioso que sea. Un ejemplo es [el comando _fork bomb_][blogbitix-347], este hace que pasados unos pocos segundos el sistema agote todos sus recursos, lo hace inusable y obliga ha hacer un reinicio. Y este comando no es un comando de las peores maldades que se pueden hacer.

> :(){ :|:& };:

Al igual que los comandos es conveniente no ejecutar programas que no provenga de una fuente de confianza, normalmente los repositorios de software de la distribución o el centro de software. En Windows es común ejecutar _cracks_ y activadores para usar Windows, Microsoft Office u otros programas que requieren comprar una licencia de uso. Estos programas activadores es habitual que contengan virus y una fuente de infección del sistema con un peligro para la seguridad, ya solo acceder a las páginas de baja reputación desde la que descargarlos es un peligro.

En GNU/Linux la mayor parte del software no tiene coste y está disponible en los repositorios de software, puede ser necesario descargar un programa que no se encuentre ahí pero en caso necesario hay que hacerlo siempre desde la página oficial y prestando especial atención si para ejecutarlo requiere concederle permisos de superusuario.

{{% /post %}}
