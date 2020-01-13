---
pid: 79
type: "post"
title: "Programación de juegos y 3D en Java con jMonkeyEngine"
url: "/2015/05/programacion-de-juegos-y-3d-en-java-con-jmonkeyengine/"
date: 2015-05-09T10:18:40+02:00
updated: 2015-11-10T19:00:00+01:00
rss: true
sharing: true
comments: true
imagePost: "logotype:jmonkeyengine.png"
tags: ["java", "programacion", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="jmonkeyengine.png" title1="jMonkeyEngine" width1="200" image2="java.svg" >}}

Erróneamente se sigue pensado que Java es un lenguaje lento en ejecución, en las primeras versiones era cierto pero hoy la realidad es que con las mejoras introducidas en cada versión de Java y la máquina virtual el rendimiento actual es comparable a C y C++. En la programación de juegos y 3D gran parte del proceso de representación gráfica se ha descargado de la CPU a las cada vez más potentes tarjetas gráficas, la potencia de estas GPU son las que determinan la capacidad de proceso gráfico y la calidad gráfica de los juegos.

Java no suele ser considerado como opción para programar videojuegos triple A pero ahí está [Minecraft](https://minecraft.net/) uno de los juegos más populares y un ejemplo de que un juego de buena calidad y rendimiento también se puede hacer en Java. Hay algunos otros ejemplos notables como de variados estilos _RPG_, _Puzzle_, _MOBA_, _Rogue_, _RTS_, _Card MMOG_, _FPS_, _Arcade_, _Platform_ ,...:

* [4089: Ghost Within](http://store.steampowered.com/app/329770/)
* [Rising World](https://www.rising-world.net/)
* [Seizon](https://play.google.com/store/apps/details?id=com.rampage.seizon)
* [Copod](http://herebeben.com/copod)
* [Drohtin – Tales of an Old Kingdom](http://drohtin.org/)
* [CHAOS: In the Darkness](http://4realms.net/News/)
* [Just Tactics](https://www.indiedb.com/games/just-tactics/)
* [Gentrieve 2](https://gentrieve.wordpress.com/)
* [Spermination](http://steamcommunity.com/sharedfiles/filedetails/?id=354610327)
* [Herodex](http://www.indiedb.com/games/herodex)
* [Gentrieve 2](https://gentrieve.wordpress.com/)
* [Maker’s Tale](https://www.indiedb.com/games/makers-tale/videos)
* [3089](http://store.steampowered.com/app/263360/)
* [Boardtastic](http://boardtastic.com/)
* [PirateHell](http://store.steampowered.com/app/321080)
* [Mythruna](http://mythruna.com/)
* [Hostile Sector](http://mindemia.com/hostilesector/)
* [3079](http://store.steampowered.com/app/259620/)
* [TYGRON](https://www.tygron.com/)
* [Fleshsnatcher](https://sourceforge.net/projects/fleshsnatcher/)
* [Nord](http://nordgame.com/)
* [Urban Galaxy](https://www.urbangalaxyonline.com/)
* [Grappling Hook](https://ghook.speedrungames.com/)
* [Mad Skills Motocross](http://www.madskillsmx.com/)
* [Betaville](http://betaville.net/)
* [Script Blocks](http://scriptblocks.com/)
* [Windup Baseball](http://jmonkeyengine.org/project/windup-baseball/)
* [Pets vs Monsters](https://www.petsvsmonsters.com/)
* [Bang! Howdy](http://www.banghowdy.com/)
* [Imperii](http://jmonkeyengine.org/project/imperii/)

Este es un vídeo del juego PirateHell que tiene una pinta muy buena:

{{< youtube video="ODjq7IUkwUg" >}}

Algunas capturas de imagen de estos juegos, en los enlaces anteriores se pueden encontrar vídeos de algunos de ellos.

{{< image
    gallery="true"
    image1="image:4089.jpg" optionsthumb1="300x200" title1="4089: Ghost Within"
    image2="image:rising-world.jpg" optionsthumb2="300x200" title2="Rising World" >}}
{{< image
    gallery="true"
    image1="image:seizon.jpg" optionsthumb1="300x200" title1="Seizon"
    image2="image:copod.png" optionsthumb2="300x200" title2="Copod" >}}
{{< image
    gallery="true"
    image1="image:drohtin-tales-of-old-kingdom.png" optionsthumb1="300x200" title1="Drohtin – Tales of an Old Kingdom"
    image2="image:chaos_in-the-darkness.jpg" optionsthumb2="300x200" title2="CHAOS: In the Darkness" >}}
{{< image
    gallery="true"
    image1="image:just-tactics.jpg" optionsthumb1="300x200" title1="Just Tactics"
    image2="image:spermination.png" optionsthumb2="300x200" title2="Spermination" >}}
{{< image
    gallery="true"
    image1="image:makers-tale.jpg" optionsthumb1="300x200" title1="Maker’s Tale"
    image2="image:piratehell.jpg" optionsthumb2="300x200" title2="PirateHell" >}}
{{< image
    gallery="true"
    image1="image:hostile-sector.jpg" optionsthumb1="300x200" title1="Hostile Sector"
    image2="image:3079.png" optionsthumb2="300x200" title2="3079" >}}
{{< image
    gallery="true"
    image1="image:urban-galaxy.jpg" optionsthumb1="300x200" title1="Urban Galaxy"
    image2="image:grapplinghook.jpg" optionsthumb2="300x200" title2="Grappling Hook" >}}
{{< image
    gallery="true"
    image1="image:mad-skills-motocross.jpg" optionsthumb1="300x200" title1="Mad Skills Motocross"
    image2="image:pets-vs-monsters.jpg" optionsthumb2="300x200" title2="Pets vs Monsters" >}}
{{< image
    gallery="true"
    image1="image:bang-howdy.jpg" optionsthumb1="300x200" title1="Bang! Howdy"
    image2="image:imperii.jpg" optionsthumb2="300x200" title2="Imperii" >}}

Todos estos juegos están programados utilizando el lenguaje de programación Java y la librería [jMonkeyEngine][jmonkeyengine] que facilita las tareas de programación de videojuegos proporcionando programación gráfica en 3D usando [OpenGL][opengl], manejo de eventos de entrada como teclado o ratón, manejo de sonido, pantallas de menús o red. Usando jMonkeyEngine se pueden hacer cosas muy interesantes como se ve en los ejemplos. En el siguiente enlace se pueden encontrar el [código fuente de varios ejemplos](https://github.com/jMonkeyEngine/BookSamples/tree/master/src) que podemos probar.

A continuación mostraré el código y unas capturas de pantalla de algunas las posibilidades de jMonkeyEngine. Primeramente veamos como crear un ejemplo básico con un cubo aplicándole una textura con el que veremos como crear una escena. El segundo ejemplo aplica texturas de diferentes formas que varían la visualización de un elemento geométrico.

{{< code file="HolaMundoJMonkeyEngine.java" language="java" options="" >}}
{{< code file="Materiales.java" language="java" options="" >}}

Se pueden crear objetos con texturas transparentes, efectos de luz, _ray casting_, sistemas de partículas con las que simular fuego, chispas, polvo, establecer animaciones a objetos como cuando un personaje está descansando, terrenos, paisajes, aplicar efectos simulando la física del mundo real, sonido ambiental y posicional y más cosas. En las siguientes imágenes se pueden ver algunos ejemplos de las anteriores posibilidades (la tasa de _fps_ normal es de 60, al tomar las capturas baja).

{{< image
    gallery="true"
    image1="image:cubo.png" optionsthumb1="300x200" title1="¡Hola mundo!"
    image2="image:cubos.png" optionsthumb2="300x200" title2="Texturas y materiales" >}}
{{< image
    gallery="true"
    image1="image:particulas-fuego.png" optionsthumb1="300x200" title1="Sistemas de partículas, fuego"
    image2="image:agua.png" optionsthumb2="300x200" title2="Agua" >}}

Un videojuego se compone de múltiples recursos como imágenes, modelos 3D, música, _sprites_, texturas, fuentes de texto, sonidos, iconos... en la página [Open Game Art](http://opengameart.org) podemos encontrar todo este tipo de material sin necesidad de tener que crearlo desde la nada.

jMonkeyEngine ofrece un entorno de desarrollo (IDE) basado [NetBeans][netbeans]. Descargando el paquete de jMonkeyEngine y copiando las librerías .jar los programas se puede ejecutar perfectamente independientemente del IDE y desarrollar con [eclipse][eclipse] y usar la [herramienta de construcción gradle][gradle].

Para instalar jMonkeyEngine debemos [descargar el SDK](http://jmonkeyengine.org/downloads/) adecuado para la plataforma que usemos ya sea Windows, Linux o Macintosh. En el caso de Linux es un archivo .sh que deberemos ejecutar (dando permisos de ejecución si es necesario), seguimos las instrucciones y seleccionamos el directorio de instalación del SDK. En _jmonkeyplatform/libs_ de la carpeta de instalación encontramos los archivos .jar que deberemos usar en el IDE o en los programas de los ejemplos.

El [libro jMonkeyEngine 3.0 Beginners Guide](https://amzn.to/2ZRNc38) me ha resultado muy interesante como punto de introducción a la programación gráfica 3D con Java, pero también si realmente nos interesa la programación de videojuegos es muy recomendable leer el material ofrecido en el [Curso de Experto en Desarrollo de Videojuegos](http://www.cedv.es/), un libro de una extensión de más de 1100 páginas de muy buena calidad, en español y descargables gratuitamente. En la [_wiki_ de jMonkeyEngine](http://wiki.jmonkeyengine.org/doku.php) se pueden encontrar [numerosos tutoriales para principiantes](http://wiki.jmonkeyengine.org/doku.php/jme3#tutorials_for_beginners), también numerosos artículos de nivel más avanzado y el [javadoc de la API](https://javadoc.jmonkeyengine.org/).

{{< amazon
    linkids="56dfb3e4672ccdf48e706b39693b3b55"
    asins="1849516464" >}}

Otras librerías como [Slick2D][slick2d] permiten hacer videojuegos en 2D como serían los juegos de plataformas, más o menos lo que permite jMonkeyEngine en el 3D aplicado a 2D también usando como lenguaje Java. Sin duda los videojuegos han sido el motivo en parte de que muchos hoy seamos programadores e informáticos aunque en nuestro trabajo nos dediquemos a otro tipo de aplicaciones y entornos.

Que, ¿aún crees que en Java no se pueden hacer juegos que no tienen que envidiar a muchos otros?

{{< reference >}}
* [jMonkeyEngine][jmonkeyengine]
* [Curso Experto Desarrollo Videojuegos](http://www.cedv.es./)
* [Libro jMonkeyEngine 3.0 Beginners Guide](https://amzn.to/2QsiP0q)
* [Slick2D][slick2d]
* [libGDX](https://libgdx.badlogicgames.com/)
{{< /reference >}}

{{% /post %}}
