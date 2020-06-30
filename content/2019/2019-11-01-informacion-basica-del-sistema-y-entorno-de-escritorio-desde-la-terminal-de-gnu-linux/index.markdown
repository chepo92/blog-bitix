---
pid: 439
type: "post"
title: "Información básica del sistema y entorno de escritorio desde la terminal de GNU/Linux"
url: "/2019/11/informacion-basica-del-sistema-y-entorno-de-escritorio-desde-la-terminal-de-gnu-linux/"
date: 2019-11-01T17:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:neofetch-1.png"
tags: ["gnu-linux", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Los comandos [neofetch][neofetch] y [screenfetch][screenfetch] permiten obtener una información básica del sistema desde la terminal. Esta información permite saber la distribución GNU/Linux que se está usando, la versión del _kernel_ de Linux, el número de paquetes instalados, que intérprete de comandos se usa y su versión, la resolución de la pantalla, el gestor de ventanas y su tema, la colección de iconos, terminal y fuente de la terminal, CPU, GPU y cantidad de memoria usada y total del sistema.

Al realizar una captura de pantalla del escritorio es muy interesante mostrar una terminal con esta información. Es habitual hacerlo al mostrar la personalización del escritorio con su tema de iconos, que entorno de escritorio es el usado, la configuración de colores de la terminal, etc. que permite a otros usuarios que vean esa captura obtener mucha información para obtener la misma personalización. O conocer la CPU, GPU y _kernel_ del sistema en que se tomó la captura.

Los comandos _neofetch_ y _screenfetch_ son muy similares en la salida que producen, quizá prefiero _neofetch_ porque tiene menos dependencias sobre otros paquetes y ocupa menos. Con la opción _\-\-help_ de cada uno de ellos muestran las opciones de personalización que poseen.

{{< code file="commands.sh" language="bash" options="" >}}

En las imágenes se aprecia que mi distribución es [Arch Linux][archlinux], [mi equipo es un Intel NUC8i5BEK][blogbitix-363], en el momento de escribir el artículo tengo la versión 5.3.7 del núcleo de Linux, un millar de paquetes instalados y unos pocos de [paquetes de Flatpak][blogbitix-362], mi interprete de comandos es [Bash][bash], mi entorno de escritorio es [GNOME][gnome] sin apenas personalización, la CPU del NUC es una [Intel i5-8259][intel-i5-8259U] de 4 núcleos y 8 hilos que tiene una GPU integrada [Intel Iris Plus Graphics 655][intel-iris-graphics-655], con algunos programas abiertos que está consumiendo unos 3 GiB de los 32 GiB disponibles.

{{< image
    gallery="true"
    image1="image:neofetch-1.png" optionsthumb1="300x250" title1="Información del sistema proporcionada por neofetch"
    image2="image:neofetch-2.png" optionsthumb2="300x250" title2="Información del sistema proporcionada por neofetch"
    caption="Información del sistema proporcionada por neofetch" >}}

[Inxi][inxi] es otra herramienta de línea de comandos que permite obtener información del sistema. Al pedir ayuda en un foro no está demás dar esta información básica de nuestro equipo para que nos puedan ayudar mejor a encontrar una solución al problema por el que preguntamos por si el error se debe a algún componente de nuestro equipo, del _kernel_ o la versión del servidor gráfico.

{{< code file="inxi.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:inxi-c7.png" optionsthumb1="300x250" title1="Información del sistema proporcionada por inxi"
    caption="Información del sistema proporcionada por inxi" >}}

Los comandos están disponibles en los repositorios de paquetes de la distribución que se esté usando.

{{% /post %}}
