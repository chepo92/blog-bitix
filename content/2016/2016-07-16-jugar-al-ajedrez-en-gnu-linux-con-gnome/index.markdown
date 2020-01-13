---
pid: 160
type: "post"
title: "Jugar al ajedrez en GNU/Linux con GNOME"
url: "/2016/07/jugar-al-ajedrez-en-gnu-linux-con-gnome/"
date: 2016-07-16T12:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:gnome.svg"
tags: ["gnu-linux", "software-libre"]
series: ["juegos"]
---

{{% post %}}

{{< logotype image1="gnome.svg" title1="GNOME" width1="200" >}}

[GNU][gnu]/[Linux][linux] no es la plataforma primaria de los juegos triple A, pero existen multitud de juegos libres y gratuitos que igualmente nos hacen pasar muy buenos ratos. Hoy en día los juegos tienen unos gráficos en tres dimensiones espectaculares cada vez más realistas para lo que hasta hace unos pocos años atrás era posible. Aún así algunos juegos no tan avanzados gráficamente son tan o más adictivos y divertidos que cualquier juego triple A y con la ventaja de que no requieren tener la última tarjeta gráfica con al última tecnología, gran cantidad de memoria y se pueden jugar en un portátil sin el riesgo de sobrecalentarlo.

{{< image
    gallery="true"
    image1="image:gnome-chess.png" optionsthumb1="300x200" title1="Icono del juego de ajedrez de GNOME"
    caption="Icono del juego de ajedrez de GNOME" >}}

Un juego clásico es el ajedrez y en GNU/Linux y con el entorno de escritorio [GNOME][gnome] podemos jugar contra un oponente humano o la propia computadora que en el nivel fácil ya nos pondrá en muchas dificultades si es que conseguimos ganarla. Para instalar el juego de ajedrez deberemos instalar el [paquete gnome-chess](https://www.archlinux.org/packages/extra/x86_64/gnome-chess/) y si queremos que el oponente sea la computadora instalar el [paquete gnuchess](https://www.archlinux.org/packages/community/x86_64/gnuchess/). Usando [Arch Linux][archlinux] y su gestor de paquetes los instalamos de la siguiente forma:

{{< code file="pacman.sh" language="bash" options="" >}}

Iniciado el juego veremos el tablero de 8 por 8 casillas con las fichas posicionadas en las casillas de inicio.

{{< image
    gallery="true"
    image1="image:gnome-chess-tablero.png" optionsthumb1="300x200" title1="Juego de ajedrez de GNOME"
    caption="Juego de ajedrez de GNOME" >}}

En la sección de preferencias del juego configuramos si el oponente es otro humano o la computadora, en caso de ser la computadora su nivel de inteligencia o dificultad, si queremos jugar con las fichas blancas o negras si queremos establecer un tiempo límite para la partida para cada jugador y el tipo de reloj para el tiempo límite. En el apartado del aspecto podemos cambiar la apariencia de las fichas, el formato de la última jugada, la orientación del tablero, si queremos numeración y si queremos sugerencias.

{{< image
    gallery="true"
    image1="image:gnome-chess-preferencias-juego.png" optionsthumb1="300x200" title1="Preferencias de juego de ajedrez de GNOME"
    image2="image:gnome-chess-preferencias-aspecto.png" optionsthumb2="300x200" title2="Preferencias de aspecto de ajedrez de GNOME"
    caption="Preferencias del juego" >}}

También podemos guardar la partida para continuarla con posterioridad. Solo nos queda practicar la diferentes aperturas que forman una parte esencial de juego seguir alguna estrategia para el juego medio y como finalizar la partida con las piezas que no hayan sido eliminadas por el oponente. En la wikipedia hay algún [buen artículo introductorio al ajedrez](https://es.wikipedia.org/wiki/Ajedrez) y [algunos artículos sobre las aperturas](https://es.wikipedia.org/wiki/Apertura_(ajedrez)) donde encontratremos las más conocidas y seguro que otras muchas que no conocíamos e incluso si estamos aprendiendo la [reglas del juego](https://es.wikipedia.org/wiki/Leyes_del_ajedrez).

En Amazon hay varios libros que serán más didácticos sobre estrategia para el juego del ajedrez como [Ajedrez para niños](https://amzn.to/29Cj30T) o [El ajedrez de torneo](https://amzn.to/29CiOTD) y en la biblioteca libre [OpenLibra][openlibra] hay algunos de libre acceso como [Ajedrez y su Enseñanza: Libro de Aperturas](https://openlibra.com/es/book/ajedrez-y-su-ensenanza-libro-de-aperturas). Leyendo alguno de estos libros obtendremos pautas y tácticas que podemos emplear para mejorar nuestras jugadas.

{{< amazon
    linkids="c1e1fc606e2606fec91e2db08cadcfa7&internal=1,b78575ac7587361ca5bb1405a9a2de99&internal=1"
    asins="8425517893,842450397X" >}}

{{% /post %}}
