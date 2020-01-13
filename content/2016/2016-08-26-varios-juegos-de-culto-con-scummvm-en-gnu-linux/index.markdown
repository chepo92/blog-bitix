---
pid: 173
type: "post"
title: "Varios juegos de culto con ScummVM en GNU/Linux"
url: "/2016/08/varios-juegos-de-culto-con-scummvm-en-gnu-linux/"
date: 2016-08-26T12:00:00+02:00
updated: 2016-08-26T23:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:scummvm.png"
tags: ["gnu-linux"]
series: ["juegos"]
summary: "Un juego puede gustar por sus gráficos espectaculares, sin embargo, no será venerado si no proporciona gran cantidad de diversión. Hay algunos juegos en que gran parte de la diversión es proporcionada por la historia o guión. Este son los casos de varios juegos de apuntar y pinchar de hace algunos lustros que quedaron en el recuerdo de muchos de sus jugadores que hoy en día son jugables con ScummVM."
---

{{% post %}}

{{< logotype image1="scummvm.png" title1="ScummVM" width1="200" image2="linux.svg" >}}

A día de hoy hay una buena colección de juegos que ya tiene varias décadas pero que están muy bien y han alcanzado el calificativo de míticos. Los clásicos del [juego del ajedrez][blogbitix-160] y el [juego go][blogbitix-163] son atemporales, en GNU/Linux también otros [clásicos del arcade y consolas con el emulador Mame][blogbitix-170], también en GNU/Linux hay [otros más actuales][blogbitix-172] algunos basados en originales de distintos géneros como Arcade, FPS, estrategia con gráficos en tres dimensiones o basados en texto jugables desde la terminal y que no requieren computadoras potentes. Otros juegos buenos, muy conocidos y míticos son [Monkey Island](https://en.wikipedia.org/wiki/Monkey_Island_(series)), [Maniac Mansion](https://es.wikipedia.org/wiki/Maniac_Mansion), [El día del tentáculo](https://es.wikipedia.org/wiki/Day_of_the_Tentacle), [Indiana Jones](https://es.wikipedia.org/wiki/Indiana_Jones_and_the_Fate_of_Atlantis), ... jugables con el emulador [ScummVM][scummvm].

Con ScummVM podemos jugar a esos juegos del estilo _point-and-click_ en los que se trata de probar diferentes acciones algunas lógicas otras no tanto con los objetos que tenemos o el escenario de la pantalla. Para los días de hoy gráficamente no son muy avanzados aunque sigue siendo notable su arte pixelado, pero lo principal de estos juegos no son los gráficos sino la historia que se desarrolla en los mismos. Historia que incluye bastante humor que ha hecho que perduren en el recuerdo de sus jugadores. Algunas de estas aventuras gráficas más conocidas son Monkey Island, Maniac Mansion, El día del tentáculo o Indiana Jones entre los que yo conocí.

{{< image
    gallery="true"
    image1="image:the-secret-of-monkey-island.jpg" optionsthumb1="300x200" title1="The Secret of Monkey Island"
    image2="image:lechuck-revenge.jpg" optionsthumb2="300x200" title2="LeChuck's Revenge" >}}
{{< image
    gallery="true"
    image1="image:the-curse-of-monkey-island.jpg" optionsthumb1="300x200" title1="The Curse of Monkey Island"
    image2="image:escape-from-monkey-island.jpg" optionsthumb2="300x200" title2="Escape from Monkey Island" >}}
{{< image
    gallery="true"
    image1="image:tales-of-monkey-island.jpg" optionsthumb1="300x200" title1="Tales of Monkey Island"
    image2="image:indiana-jones-fate-of-atlantis.jpg" optionsthumb2="300x200" title2="Indiana Jones and the Fate of Atlantis" >}}
{{< image
    gallery="true"
    image1="image:maniac-mansion.jpg" optionsthumb1="300x200" title1="Maniac Mansion"
    image2="image:day-of-the-tentacle.jpg" optionsthumb2="300x200" title2="Maniac Mansion 2: Day of the Tentacle" >}}

En GNU/Linux podemos seguir jugando a estos juegos, para ello debemos instalar el emulador ScummVM y descargar la ROM de los mismos. En [Arch Linux][archlinux] instalamos el emulador con el [paquete scummvm](https://www.archlinux.org/packages/community/x86_64/scummvm/) y el siguiente comando:

{{< code file="pacman.sh" language="bash" options="" >}}

{{< image
    gallery="true"
    image1="image:scummvm.png" optionsthumb1="300x200" title1="ScummVM" >}}

Son juegos en los que se desarrollan diálogos y hay que leer texto por lo que si no dominamos el inglés deberemos descargarlos en su versión en español. Descargar las ROMs en algunos casos es igual de ilegal que piratear un juego, en otros casos al ser juegos muy antiguos y que se consideran software abandonado o _abandonware_ no es ilegal y se considera una forma de conservación del software, en cualquier caso dejo esta decisión al lector. Algunos juegos han sido reeditados para nuevas plataformas como tabletas o móviles. Hay varios sitios web dedicados a almacenar las ROMs de los juegos. La que he utilizado y en la que he encontrado los juegos de los que hablo en este artículo es [EMUPARADISE](http://www.emuparadise.me), en esta página hay listados unos [500 juegos para ScummVM](https://www.emuparadise.me/ScummVM_Games/21).

Instalado ScummVM y con las ROMs descomprimidas iniciamos el emulador, seleccionamos _Add game..._ y buscamos el directorio descomprimido del juego usando el botón _Go up_ en caso de ser necesario para navegar el árbol de directorios. Añadido los juegos los iniciamos con el botón _Start_ y a partir de este momento ya podemos empezar a jugar. Algunos juegos originalmente tenían una protección anticopia que en las ROMs y ScummVM queda desactivada. En el [manual de usuario de ScummVM](https://raw.githubusercontent.com/scummvm/scummvm/v1.8.1/README) tenemos el listado de juegos soportados así como las teclas usables y sus funciones. Como son juegos que deberemos continuar en múltiples partidas deberemos guardar el estado del juego con <kbd>Alt 0-9</kbd> y cargar para continuar con <kbd>Ctrl 0-9</kbd>.

{{< image
    gallery="true"
    image1="image:the-secret-of-monkey-island-game.jpg" optionsthumb1="300x200" title1="The Secret of Monkey Island"
    image2="image:lechuck-revenge-game.jpg" optionsthumb2="300x200" title2="LeChuck's Revenge" >}}
{{< image
    gallery="true"
    image1="image:the-curse-of-monkey-island-game.jpg" optionsthumb1="300x200" title1="The Curse of Monkey Island"
    image2="image:indiana-jones-fate-of-atlantis-game.jpg" optionsthumb2="300x200" title2="Indiana Jones and the Fate of Atlantis" >}}
{{< image
    gallery="true"
    image1="image:maniac-mansion-game.jpg" optionsthumb1="300x200" title1="Maniac Mansion"
    image2="image:day-of-the-tentacle-game.jpg" optionsthumb2="300x200" title2="Maniac Mansion 2: Day of the Tentacle" >}}

¡A disfrutar! Lamentablemente ya no tengo el tiempo que tenía antes para jugar a juegos y a veces tampoco las ganas de dedicar ese tiempo a los juegos pero estoy seguro que a aquellos sigan disfrutando de los juegos les será interesante.

> ¡Hola! Me llamo Guybrush Threepwood, ¡y quiero ser un pirata!
>
> -- <cite>Guybrush Threepwood, The Secret of Monkey Island</cite>

{{% /post %}}
