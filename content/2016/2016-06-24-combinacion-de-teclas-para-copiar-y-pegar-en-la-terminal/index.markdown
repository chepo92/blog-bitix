---
pid: 152
type: "post"
title: "Combinación de teclas para copiar y pegar en la terminal"
url: "/2016/06/combinacion-de-teclas-para-copiar-y-pegar-en-la-terminal/"
date: 2016-06-24T15:30:00+02:00
updated: 2020-06-02T18:15:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo", "software-libre"]
series: ["terminal"]
summary: "En vez de usar el botón derecho de ratón y hacer clic sobre el menú desplegable para realizar la acción de copiar y pegar se puede emplear el teclado con una combinación de teclas para realizar estas mismas acciones. Si estas operaciones se realizan frecuentemente la combinación de teclas es más rápido y sencillo."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Usar una combinación de teclas para realizar alguna acción es más rápido que usar el ratón. Si se trata de una acción que realizamos frecuentemente podemos ahorrar bastante tiempo. Yo trabajo bastante con la terminal de GNOME y hasta ahora no sabía cómo copiar y pegar con una combinación de teclas del teclado.

Esto no es algo nada vital pero si es algo que usamos frecuentemente puede hacernos más fácil la tarea y ahorrarnos tiempo al igual que conocer y usar los [atajos de teclado básicos de la terminal en GNU/Linux][blogbitix-150] para realizar otras operaciones comunes en la terminal como desplazarse al principio del símbolo del sistema, al final, a la siguiente o anterior palabra, limpiar la terminal, hacer búsquedas de texto para encontrar coincidencias, ejecutar el comando anterior, buscar en el historial de comandos o gestionar procesos.

La combinación de teclas estandarizada para copiar y pegar en cualquier aplicación tanto en Linux como en Windows es <kbd>Ctrl+c</kbd> para copiar y <kbd>Ctrl+v</kbd> para pegar de y al portapapeles. En la terminal (al menos en la de GNOME) cambia ligeramente y hay que usar <kbd>Ctrl+Shift+c</kbd> para copiar y <kbd>Ctrl+Shift+v</kbd> para pegar el texto en la posición del cursor.

Para copiar el texto deseado hay que usar el ratón para seleccionar el texto pero con la combinación de teclas nos evitaremos pulsar el botón derecho del ratón, desplazarnos hasta la opción _Copiar_ del menú y finalmente hacer clic en él. Para pegar con el ratón la acción está en el mismo menú pero pulsando en la opción _Pegar_.

{{< image
    gallery="true"
    image1="image:gnome-terminal.png" optionsthumb1="300x200" title1="Menú para copiar y pegar en la terminal de GNOME"
    caption="Menú para copiar y pegar en la terminal de GNOME" >}}

{{< reference >}}
[A terminal which provides select-to-copy and right-click-to-paste](http://askubuntu.com/questions/211292/a-terminal-which-provides-select-to-copy-and-right-click-to-paste)
{{< /reference >}}

{{% /post %}}
