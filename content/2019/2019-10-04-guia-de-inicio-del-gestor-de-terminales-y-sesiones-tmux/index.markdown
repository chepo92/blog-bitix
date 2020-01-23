---
pid: 435
type: "post"
title: "Guía de inicio del gestor de terminales y sesiones tmux"
url: "/2019/10/guia-de-inicio-del-gestor-de-terminales-y-sesiones-tmux/"
date: 2019-10-04T18:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:tmux.png"
tags: ["gnu-linux", "planeta-codigo", "software"]
summary: "Las personas que usan de forma intensiva la terminal seguramente usando un mutiplexador de terminales como tmux su trabajo es facilitado. Tmux permite dividir una terminal en paneles, ventanas independiente y sesiones. Usando sus múltiples combinaciones de teclas se divide una terminal o una ventana de forma horizontal y vertical en paneles del tamaño que se desee pudiendo de esta forma visualizar al mismo tiempo varias terminales ubicadas en cada panel. También se puede crear una configuración para iniciar tmux con la misma disposición de paneles, ventanas y sesiones."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Las terminales gráficas como [GNOME][gnome] Terminal y [KDE][kde] Konsole soportan pestañas e incluso desde un entorno gráfico en GNU/Linux están disponibles según la distribución varias terminales de texto accesibles con la combinación de teclas <kbd>Ctrl+Alt+F3</kbd> y <kbd>Ctrl+Alt+F4</kbd>, con <kbd>Ctrl+Alt+F2</kbd> se puede retornar a la interfaz gráfica. Sin embargo, ninguna de estas opciones permite dividir la misma terminal en varias ventanas o paneles para realizar operaciones y ver los resultados al mismo tiempo. Por otro lado cuando realizamos una sesión SSH y esta finaliza o termina abruptamente por un fallo en la conexión los procesos que se hayan iniciado desde ella son terminados lo que es especialmente grave si se está realizando una operación importante que puede ocasionar problemas.

[Tmux][tmux] es un multiplexador de terminales con soporte para iniciar sesiones. Con tmux en una misma terminal o sesión SSH es posible dividirla en varios paneles y ventanas. También permite iniciar sesiones y salir de ellas sin que los procesos que están corriendo sean terminados lo que permite iniciar una sesión por ejemplo en el trabajo, dejarla suspendida y luego continuarla desde otro equipo, ubicación o ser iniciada por una persona y continuada por otra.

{{< image
    gallery="true"
    image1="image:tmux.png" optionsthumb1="300x200" title1="Sesión de tmux en la terminal de GNOME"
    caption="Sesión de tmux en la terminal de GNOME" >}}

Tmux al ser un programa de la terminal todas sus opciones se realizan con el teclado, y no son pocas [las combinaciones de teclas de su _cheatsheet_ o chuleta](https://tmuxcheatsheet.com/). Algunas opciones básicas necesario conocer con son:

* Dividir una terminal en paneles verticales y horizontales, <kbd>Ctrl-b "</kbd>, <kbd>Ctrl-b %</kbd>.
* Cambiar entre paneles, <kbd>Ctrl-b q 0..9</kbd>.
* Cambiar tamaño de un panel, <kbd>Ctrl-b Up</kbd>, <kbd>Ctrl-b Down</kbd>, <kbd>Ctrl-b Left</kbd>, <kbd>Ctrl-b Right</kbd>. Una panel se maximiza y minimiza con <kbd>Ctrl-b z</kbd>.
* Cerrar un panel, <kbd>Ctrl-b x</kbd>.
* Cerrar una sesión <kbd>Ctrl-b :, kill-session</kbd>.
* Crear, moverse a otra ventana y cerrar una ventana, <kbd>Ctrl-b c</kbd>, <kbd>Ctrl-b 0..9</kbd>, <kbd>Ctrl-b ,</kbd>.
* Hacer _scroll_ en las ventanas, <kbd>Ctrl-b \[</kbd>.

Para facilitar un poco su uso y poder cambiar entre paneles y hacer _scroll_ si se usa en un entorno gráfico se pueden habilitar las funciones del ratón. Basta editar el archivo de configuración _~/.tmux.conf_ o introducir la opción con <kbd>Ctrl-b :</kbd>. En un entorno gráfico habilitar el soporte para el ratón cambia el comportamiento de copiar y pegar, para seleccionar texto hay que hacer uso de la tecla <kbd>Shift</kbd> a la vez que se selecciona el texto con el botón izquierdo del ratón.

{{< code file="tmux.conf" language="plaintext" options="" >}}

Para automatizar la configuración inicial de tmux soporta un archivo para personalizarlo a través de un _script_ con comandos. Así por ejemplo si siempre se desea una misma configuración de paneles y ventanas con la misma disposición es posible realizarlo con un _script_ como el siguiente.

{{< code file="tmux.sh" language="bash" options="" >}}

En el [manpage de tmux](http://man.openbsd.org/OpenBSD-current/man1/tmux.1) y los enlaces de referencia hay guías con una lista más completa que las operaciones básicas que incluyo en este artículo.

{{< reference >}}
* [A tmux Crash Course](https://robots.thoughtbot.com/a-tmux-crash-course)
* [A Quick and Easy Guide to tmux](http://www.hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/)
* [How to Use tmux the Terminal Multiplexer](https://www.linode.com/docs/networking/ssh/persistent-terminal-sessions-with-tmux/)
* [Archlinux Wiki tmux](https://wiki.archlinux.org/index.php/Tmux)
* [The Tao of tmux](https://leanpub.com/the-tao-of-tmux/read)
* [tmux: Multiplexador de terminal](http://www.sromero.org/wiki/linux/aplicaciones/tmux)
* [How to start tmux with several panes open at the same time?](https://askubuntu.com/questions/830484/how-to-start-tmux-with-several-panes-open-at-the-same-time)
* [How do I scroll in tmux?](https://superuser.com/questions/209437/how-do-i-scroll-in-tmux#209608)
{{< /reference >}}

{{% /post %}}
