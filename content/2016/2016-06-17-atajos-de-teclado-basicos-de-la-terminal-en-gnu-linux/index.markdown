---
pid: 150
type: "post"
title: "Atajos de teclado básicos de la terminal en GNU/Linux"
url: "/2016/06/atajos-de-teclado-basicos-de-la-terminal-en-gnu-linux/"
date: 2016-06-17T18:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo", "software-libre"]
series: ["terminal"]
summary: "Aprender las combinaciones de teclas de aquellas aplicaciones que usamos frecuentemente y durante mucho tiempo nos ayuda a hacer las cosas en menos tiempo y de forma más sencilla. Cada aplicación tiene los suyos propios, en este artículo los de la terminal con el intérprete de comandos _bash_ para GNU/Linux."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Si no conoces lo que estás buscando una interfaz gráfica es una buena forma de descubrir cosas, si conoces exactamente lo que buscas y si lo tienes que hacer de forma repetida es tediosa y lenta. La terminal en [GNU][gnu]/[Linux][linux] sigue siendo una poderosa herramienta para realizar multitud de tareas. Entre sus ventajas son realizar la tareas de forma mucho más directa y simple que con una interfaz gráfica o la posibilidad de automatizar tareas repetitivas en un _script bash_ o en un lenguaje de programación como [Python][python]. Entre las desventajas de la línea de comandos está que no suele ser tan intuitiva como una interfaz gráfica. Dadas las ventajas de la terminal o línea de comandos para algunas personas su uso es muy frecuente y en GNU/Linux es común tener que usarla en algún momento, conocer las combinaciones de teclas que podemos usar la tarea será más fácil y la haremos rápidamente.

En el intérprete de la terminal [Bash][bash] podemos usar las siguientes combinaciones de teclas:

* <kbd>Ctrl+a</kbd>: lleva el cursor al inicio de la línea de comandos.
* <kbd>Ctrl+e</kbd>: lleva el cursor al final de la línea de comandos.
* <kbd>Ctrl+l</kbd>: limpia la terminal, similar a lo que hace el comando <code>clear</code>.
* <kbd>Ctrl+u</kbd>: limpia desde la posición del cursor hasta el inicio de la línea. Si se está al final limpia la línea entera.
* <kbd>Ctrl+k</kbd>: limpia desde la posición del cursor hasta el final de la línea. Si se está al inicio limpia la línea entera.
* <kbd>Ctrl+h</kbd>: hace lo mismo que la tecla <code>backspace</code>, borra el caracter inmediatamente anterior a la posición del cursor.
* <kbd>Ctrl+w</kbd>: borra la palabra inmediatamente antes del cursor.
* <kbd>Alt+d</kbd> o <kbd>Esc+d</kbd>: borra la palabra siguiente después del cursor.
* <kbd>Ctrl+p</kbd>: establece la línea de comandos con el último comando introducido.
* <kbd>Ctrl+r</kbd>: inicia la búsqueda de comandos usados anteriormente, tecleando parte de un comando usos anteriores que hayamos realizado incluyendo las opciones y parámetros. Hecha una búsqueda pulsando de nuevo la combinación de teclas encontraremos coincidencias anteriores.
* <kbd>Ctrl+c</kbd>: termina el proceso que se esté ejecutando, útil para recuperar el control del sistema.
* <kbd>Ctrl+d</kbd>: sale de la terminal, similar al comando <code>exit</code>.
* <kbd>Ctrl+z</kbd>: suspende la ejecución del proceso que se está ejecutando y lo pone en segundo plano, con el comando <code>fg</code> podremos volver a continuar su ejecución.
* <kbd>Ctrl+t</kbd>: intercambia la posición de los dos caracteres antes del cursor, útil para corregir malos tecleos.
* <kbd>Esc+t</kbd>: intercambia la posición de las dos palabras antes del cursor, útil para corregir malos tecleos.
* <kbd>Alt+f</kbd>: mueve el cursor al inicio de la palabra siguiente de la línea, lo mismo que <kbd>Ctrl+right</kbd> en la terminal de GNOME.
* <kbd>Alt+b</kbd>: mueve el cursor al inicio de la palabra anterior de la línea, lo mismo que <kbd>Ctrl+left</kbd> en la terminal de GNOME.
* <kbd>Tab</kbd>: autocompleta comandos o rutas de directorios o archivos.

Poner comandos en segundo plano es útil si un proceso deja el sistema sin respuesta o queremos introducir otro antes de que termine el primero. Con tres comandos podemos [manejar los procesos en primer y segundo plano](http://www.tldp.org/LDP/abs/html/x9644.html):

* <code>jobs</code>: con este comando podremos ver la lista de procesos en segundo plano, con información de si están detenidos/suspendidos o en ejecución además del identificativo asignado para usar en los comandos <code>fg</code> y <code>bg</code>.
* <code>fg</code>: pone en primer plano un proceso, si estaba suspendido reanuda su ejecución.
* <code>bg</code>: continua la ejecución del proceso pero lo deja en segundo plano, si emite contenido a la terminal se mostrará y quizá nos moleste al seguir trabajando.
* <code>kill</code>: con el identificativo del proceso en segundo plano y un símbolo de porcentaje por delante podemos enviar la señal de terminado del proceso. Ejemplo, <code>kill %1</code>.
* Añadiendo un _ampersand_, <code>&</code>, al final del comando pondremos el comando en ejecución pero en segundo plano directamente.

Las anteriores combinaciones de teclas son del intérprete de comandos bash, el emulador de terminal que usemos también incorpora algunas combinaciones de teclas más. En el caso del emulador del terminal de [GNOME][gnome] podemos usar las siguientes combinaciones muy útiles:

* <kbd>Ctrl+Shift+f</kbd>: abre un diálogo para hacer una búsqueda de texto en la salida de la terminal.
* <kbd>Ctrl+Shift+g</kbd>: busca la siguiente ocurrencia de la búsqueda previa en la terminal.
* <kbd>Ctrl+Shift+h</kbd>: busca la anterior ocurrencia de la búsqueda previa en la terminal.
* <kbd>Ctrl+Shift+c</kbd>: copia el texto seleccionado de la terminal al portapapeles.
* <kbd>Ctrl+Shift+v</kbd>: pega el texto del portapapeles en la línea de comandos.
* <kbd>Up</kbd>: establece en la línea de comandos el comando anterior del historial, igual que <kbd>Ctrl+p</kbd>.
* <kbd>Down</kbd>: establece en la línea de comandos el siguiente comando del historial.
* <kbd>Left Mouse</kbd>: selecciona líneas de texto de la terminal.
* <kbd>Ctrl+Left Mouse</kbd>: selecciona bloques de texto de la terminal.

{{< image
    gallery="true"
    image1="image:gnome-terminal.png" optionsthumb1="300x200" title1="Terminal de GNOME con el intérprete de comandos bash"
    caption="Terminal de GNOME con el intérprete de comandos bash" >}}

{{< reference >}}
* [Keyboard Shortcuts for Bash (Command Shell for Ubuntu, Debian, Suse, Redhat, Linux, etc)](http://www.howtogeek.com/howto/ubuntu/keyboard-shortcuts-for-bash-command-shell-for-ubuntu-debian-suse-redhat-linux-etc/)
* [Bg, Fg, &, Ctrl-Z – 5 Examples to Manage Unix Background Jobs](http://www.thegeekstuff.com/2010/05/unix-background-job/)
* [Block select on a Linux console](http://serverfault.com/questions/430153/block-select-on-a-linux-console)
* [Job Control Commands](http://www.tldp.org/LDP/abs/html/x9644.html)
{{< /reference >}}

{{% /post %}}
