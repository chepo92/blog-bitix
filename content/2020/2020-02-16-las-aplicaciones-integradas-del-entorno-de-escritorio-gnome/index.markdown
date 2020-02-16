---
pid: 464
type: "post"
title: "Las aplicaciones integradas del entorno de escritorio GNOME"
url: "/2020/02/las-aplicaciones-integradas-del-entorno-de-escritorio-gnome/"
date: 2020-02-16T11:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:gnome-desktop.png"
tags: ["gnu-linux", "planeta-codigo"]
summary: "Todos los entornos de escritorio poseen unas pocas aplicaciones básicas y sencillas pero de uso muy común para todos los usuarios. Estas aplicaciones del entorno de escritorio están estrechamente integradas para ofrecer una experiencia de usuario consistente y funcionar correctamente entre ellas. GNOME posee varias desde un editor de archivos de texto, una calculadora, captura de pantalla, visor de imágenes, reproductor de música y vídeo, gestor de correo electrónico, calendario, navegador web, juegos, ... y otras más."
---

{{% post %}}

{{< logotype image1="gnome.svg" >}}

Todos los equipos informáticos incorporan un sistema operativo, este es una pieza importante e indispensable de software que abstrae las las especificidades de cada elemento hardware además de permitir se uso compartido desde la CPU, memoria, almacenamiento persistente, comunicación de red entre otros muchos componentes y periféricos que poseen los ordenadores actuales. Pero simplemente ofrece una interfaz de bajo nivel destinada a los programas no el usuario.

Para facilitar el uso el sistema operativo y en los actuales ofrecer una interfaz gráfica a través de ventanas, imágenes y texto a los usuarios están los entornos de escritorio. Los entornos de escritorio además incorporan una colección de aplicaciones de uso común para todos los usuarios como un navegador de archivos, navegador web, editor de texto, reproductor de música, reproductor de vídeo, visor de imágenes y documentos, gestor de aplicaciones, calculadora, capturador de pantalla entre las básicas.

{{< image
    gallery="true"
    image1="image:interfaz-grafica-usuario.png" optionsthumb1="300x250" title1="Capas de software desde el hardware hasta el entorno de escritorio"
    caption="Capas de software desde el hardware hasta el entorno de escritorio" >}}

Ejemplos de sistema operativos son [GNU][gnu]/[Linux][linux], [Windows][windows], [macOS][macos] o [FreeBSD][freebsd]. En los casos de Windows y macOS el mismo nombre engloba la interfaz gráfica y el entorno de escritorio sin ofrecer ninguna alternativa, en GNU/Linux hay varias alternativas de entorno de escritorio a elegir según las preferencias del usuario entre ellas [GNOME][gnome], [KDE][kde], [XFCE][xfce], Pantheon de elementary OS, [MATE][mate], [Cinnamon][cinnamon] o [LXDE][lxde].

Las distribuciones de GNU/Linux proporcionan el conjunto de software completo formado por el núcleo o _kernel_ que con el conjunto de aplicaciones de GNU forman el sistema operativo, el entorno de escritorio con sus aplicaciones básicas y finalmente aplicaciones adicionales que no forman parte del entorno de escritorio pero son preinstaladas en la instalación del sistema. Algunos ejemplos de distribuciones GNU/Linux son [Ubuntu][ubuntu], [Fedora][fedora], [openSUSE][opensuse], [Debian][debian], [Arch Linux][archlinux] o [elementary OS][elementary] entre muchas otras.

{{< image
    gallery="false"
    image1="logotype:ubuntu.svg" optionsthumb1="100x100" title1="Ubuntu"
    image2="logotype:opensuse.svg" optionsthumb2="100x100" title2="openSUSE"
    image3="logotype:debian.svg" optionsthumb3="100x100" title3="Debian" >}}
{{< image
    gallery="false"
    image1="logotype:archlinux.svg" optionsthumb1="100x100" title1="Arch Linux"
    image2="logotype:fedora.svg" optionsthumb2="100x100" title2="Fedora"
    image3="logotype:elementary.svg" optionsthumb3="100x100" title3="Elementary OS" >}}

El entorno de escritorio se instala con el sistema con lo que primero es [elegir una distribución GNU/Linux][blogbitix-190], para los usuarios que proviene de Windows o macOS y quieren probar GNU/Linux una distribución recomendable es Ubuntu. El siguiente paso seguir la guía de [como instalar Ubuntu paso a paso desde cero][blogbitix-232] y conocer [las tareas básicas de administración y uso después de instalar una distribución][blogbitix-462]. Para los usuarios que ya conocen GNU/Linux, quieren personalizar el sistema con sus preferencias  no las de los desarrolladores de la distribución y prefieren un modelo de ciclo de vida _rolling release_ en el que el software se mantiene en constante actualización con las últimas versiones puede [instalar Arch Linux de forma rápida, desatendida y personalizable con un scipt][blogbitix-204].

### El entorno de escritorio GNOME

GNOME con las críticas iniciales a la versión primera de la rama 3.0 publicada en abril del 2011 por el cambio significativo respecto a versiones anteriores ha mejorado mucho y sigue haciéndolo con cada nueva versión publicada cada seis meses.

En GNOME se opta por la simplicidad, a veces criticada por la falta de opciones de configuración y personalización, en la que los detalles gráficos y la usabilidad del sistema son aspectos con más relevancia respecto a versiones anteriores.

* [Notas de publicación 3.0](https://help.gnome.org/misc/release-notes/3.0/)
* [Notas de publicación 3.2](https://help.gnome.org/misc/release-notes/3.2/)
* [Notas de publicación 3.4](https://help.gnome.org/misc/release-notes/3.4/)
* [Notas de publicación 3.6](https://help.gnome.org/misc/release-notes/3.6/)
* [Notas de publicación 3.8](https://help.gnome.org/misc/release-notes/3.8/)
* [Notas de publicación 3.10](https://help.gnome.org/misc/release-notes/3.10/)
* [Notas de publicación 3.12](https://help.gnome.org/misc/release-notes/3.12/)
* [Notas de publicación 3.14](https://help.gnome.org/misc/release-notes/3.14/)
* [Notas de publicación 3.16](https://help.gnome.org/misc/release-notes/3.16/)
* [Notas de publicación 3.18](https://help.gnome.org/misc/release-notes/3.18/)
* [Notas de publicación 3.20](https://help.gnome.org/misc/release-notes/3.20/)
* [Notas de publicación 3.22](https://help.gnome.org/misc/release-notes/3.22/)
* [Notas de publicación 3.24](https://help.gnome.org/misc/release-notes/3.24/)
* [Notas de publicación 3.26](https://help.gnome.org/misc/release-notes/3.26/)
* [Notas de publicación 3.28](https://help.gnome.org/misc/release-notes/3.28/)
* [Notas de publicación 3.30](https://help.gnome.org/misc/release-notes/3.30/)
* [Notas de publicación 3.32](https://help.gnome.org/misc/release-notes/3.32/)
* [Notas de publicación 3.34](https://help.gnome.org/misc/release-notes/3.34/)

Continúan realizándose mejoras, algunas de las cuales son aplicadas en cada nueva versión y otras registradas para tenerlas en cuenta en futuras versiones.

* [GNOME 3.34 is awesome but still needs improvements in key areas](https://jatan.blog/2020/02/08/gnome-3-34-is-awesome-but-still-needs-improvements-in-key-areas/)
* [Peticiones de mejoras y correcciones de errores de GNOME](https://gitlab.gnome.org/groups/GNOME/-/issues)

{{< image
    gallery="true"
    image1="image:gnome-desktop.png" optionsthumb1="200x150" title1="Escritorio de GNOME"
    image2="image:gnome-dash-1.png" optionsthumb2="200x150" title2="Lanzador de aplicaciones de GNOME"
    image3="image:gnome-dash-2.png" optionsthumb3="200x150" title3="Lanzador de aplicaciones de GNOME"
    caption="Entorno de escritorio y lanzador de aplicaciones de GNOME" >}}

### Aplicaciones del entorno de escritorio GNOME

GNOME integra un conjunto de aplicaciones que proporcionan una funcionalidad importante en la experiencia del entorno de escritorio.

Estas aplicaciones están diseñadas por los propios diseñadores de GNOME como un paquete coherente, son parte de la experiencia GNOME, están diseñadas para funcionar de forma cooperativa unas con otras, tienen una integración fuerte con el entorno de escritorio, tienen nombres genéricos y son exclusivas de la experiencia GNOME.

El conjunto de aplicaciones del núcleo o esenciales de GNOME está formado por unas 30 agrupadas en diferentes categorías.

* [Conjunto de aplicaciones del núcleo o esenciales de GNOME](https://wiki.gnome.org/Apps)
* [Página de diseño de las aplicaciones de GNOME](https://wiki.gnome.org/Design/Apps/)
* [Aplicaciones de GNOME (wikipedia)](https://en.wikipedia.org/wiki/GNOME_Core_Applications)

#### Conversaciones y organización personal

<ul>
   <li>Evolution: cliente de correo electrónico y organizador</li>
   <li>Geary: cliente de correo electrónico</li>
   <li>Contactos</li>
   <li>Calendario</li>
</ul>

{{< image
    gallery="true"
    image1="image:evolution.png" optionsthumb1="200x150" title1="Evolution"
    image2="image:geary.png" optionsthumb2="200x150" title2="Geary" >}}
{{< image
    gallery="true"
    image1="image:contactos.png" optionsthumb1="200x150" title1="Contactos"
    image2="image:calendario-1.png" optionsthumb2="200x150" title2="Calendario"
    image3="image:calendario-2.png" optionsthumb3="200x150" title3="Calendario" >}}

#### Archivos

<ul>
   <li>Visor de imágenes</li>
   <li>Fotos</li>
   <li>Documentos</li>
   <li>Gestor de archivos (compresor)</li>
   <li>Música</li>
   <li>Lollypop: reproductor de música</li>
   <li>Vídeos</li>
</ul>

{{< image
    gallery="true"
    image1="image:visor-de-imagenes.png" optionsthumb1="200x150" title1="Visor de imágenes"
    image2="image:fotos-1.png" optionsthumb2="200x150" title2="Fotos"
    image3="image:fotos-2.png" optionsthumb3="200x150" title3="Fotos" >}}
{{< image
    gallery="true"
    image1="image:documentos.png" optionsthumb1="200x150" title1="Documentos"
    image2="image:archivos.png" optionsthumb2="200x150" title2="Archivos" >}}
{{< image
    gallery="true"
    image1="image:musica-1.png" optionsthumb1="200x150" title1="Música"
    image2="image:musica-2.png" optionsthumb2="200x150" title2="Música"
    image3="image:musica-3.png" optionsthumb3="200x150" title3="Música" >}}
{{< image
    gallery="true"
    image1="image:lollypop.png" optionsthumb1="200x150" title1="Lollypop" >}}
{{< image
    gallery="true"
    image1="image:videos-1.png" optionsthumb1="200x150" title1="Vídeos"
    image2="image:videos-2.png" optionsthumb2="200x150" title2="Vídeos"
    image3="image:videos-3.png" optionsthumb3="200x150" title3="Vídeos" >}}

#### Herramientas de sistema

<ul>
   <li>Captura de pantalla</li>
   <li>Discos</li>
   <li>Ayuda</li>
   <li>Trazas</li>
   <li>Informar de problema</li>
   <li>Terminal</li>
   <li>Uso (system monitor + disk usage)</li>
</ul>

{{< image
    gallery="true"
    image1="image:captura-de-pantalla.png" optionsthumb1="200x150" title1="Captura de pantalla"
    image2="image:discos.png" optionsthumb2="200x150" title2="Discos"
    image3="image:ayuda-gnome.png" optionsthumb3="200x150" title3="Ayuda de GNOME" >}}
{{< image
    gallery="true"
    image1="image:terminal-1.png" optionsthumb1="200x150" title1="Terminal"
    image2="image:terminal-2.png" optionsthumb2="200x150" title2="Terminal"
    image3="image:monitor-sistema.png" optionsthumb3="200x150" title3="Monitor del sistema" >}}

#### Sistema esencial

<ul>
   <li>Configuración: opciones de configuración del sistema</li>
   <li>Software: instalar, actualizar y desinstalar programas de software</li>
   <li>Web: navegador de páginas web</li>
</ul>

{{< image
    gallery="true"
    image1="image:configuracion-1.png" optionsthumb1="200x150" title1="Configuración"
    image2="image:configuracion-2.png" optionsthumb2="200x150" title2="Configuración"
    image3="image:configuracion-3.png" optionsthumb3="200x150" title3="Configuración" >}}
{{< image
    gallery="true"
    image1="image:software-1.png" optionsthumb1="200x150" title1="Software"
    image2="image:software-2.png" optionsthumb2="200x150" title2="Software" >}}
{{< image
    gallery="true"
    image1="image:web-1.png" optionsthumb1="200x150" title1="Web"
    image2="image:web-2.png" optionsthumb2="200x150" title2="Web"
    image3="image:web-3.png" optionsthumb3="200x150" title3="Web" >}}

#### Mundo

<ul>
   <li>Relojes</li>
   <li>Tiempo</li>
   <li>Mapas</li>
</ul>

{{< image
    gallery="true"
    image1="image:relojes.png" optionsthumb1="200x150" title1="Relojes"
    image2="image:tiempo.png" optionsthumb2="200x150" title2="Tiempo" >}}
{{< image
    gallery="true"
    image1="image:mapas-1.png" optionsthumb1="200x150" title1="Mapas"
    image2="image:mapas-2.png" optionsthumb2="200x150" title2="Mapas"
    image3="image:mapas-3.png" optionsthumb3="200x150" title3="Mapas" >}}
{{< image
    gallery="true"
    image1="image:mapas-4.png" optionsthumb1="200x150" title1="Mapas" >}}

#### Utilidades

<ul>
   <li>Calculadora</li>
   <li>Tipografías</li>
   <li>Notas</li>
   <li>Editor de texto</li>
   <li>Retoques: ofrece varios opciones de personalización</li>
   <li>Herramientas de red</li>
</ul>

{{< image
    gallery="true"
    image1="image:calculadora-1.png" optionsthumb1="200x150" title1="Calculadora"
    image2="image:calculadora-2.png" optionsthumb2="200x150" title2="Calculadora" >}}
{{< image
    gallery="true"
    image1="image:tipografias-1.png" optionsthumb1="200x150" title1="Tipografias"
    image2="image:tipografias-2.png" optionsthumb2="200x150" title2="Tipografias" >}}
{{< image
    gallery="true"
    image1="image:notas.png" optionsthumb1="200x150" title1="Notas"
    image2="image:editor-de-texto.png" optionsthumb2="200x150" title2="Editor de texto"
    image3="image:retoques.png" optionsthumb3="200x150" title3="Retoques" >}}
{{< image
    gallery="true"
    image1="image:herramientas-de-red.png" optionsthumb1="200x150" title1="Herramientas de red" >}}

#### Propósito especial

<ul>
   <li>Cajas: virtualización</li>
</ul>

{{< image
    gallery="true"
    image1="image:cajas-1.png" optionsthumb1="200x150" title1="Cajas"
    image2="image:cajas-2.png" optionsthumb2="200x150" title2="Cajas"
    image3="image:cajas-3.png" optionsthumb3="200x150" title3="Cajas" >}}

#### Audio y vídeo

<ul>
   <li>Cheese: aplicación webcam</li>
   <li>Sound Juicer: extractor de CD de audio</li>
   <li>Grabadora de sonido</li>
</ul>

{{< image
    gallery="true"
    image1="image:camara.png" optionsthumb1="200x150" title1="Cheese"
    image2="image:grabadora-de-sonido.png" optionsthumb2="200x150" title2="Grabadora de sonido" >}}

#### Creación y edición

<ul>
   <li>Brasero: grabadora de CD y DVD</li>
   <li>EasyTAG: editor de metadados de archivos de música</li>
   <li>Subtítulos: editor de subtítulos para archivos de vídeo</li>
</ul>

#### Comunicación

<ul>
   <li>Fractal</li>
   <li>Polari</li>
</ul>

#### Entornos de desarrollo

<ul>
   <li>Builder: entorno integrador de desarrollo</li>
   <li>Glade: diseñador de interfaces gráficas de GNOME</li>
</ul>

{{< image
    gallery="true"
    image1="image:builder-1.png" optionsthumb1="200x150" title1="Builder"
    image2="image:builder-2.png" optionsthumb2="200x150" title2="Builder"
    image3="image:builder-3.png" optionsthumb3="200x150" title3="Builder" >}}
{{< image
    gallery="true"
    image1="image:builder-4.png" optionsthumb1="200x150" title1="Builder"
    image2="image:glade-1.png" optionsthumb2="200x150" title2="Glade"
    image3="image:glade-2.png" optionsthumb3="200x150" title3="Glade" >}}

#### Juegos

##### Aventura

<ul>
   <li>MUD</li>
   <li>Arcade</li>
   <li>Nibbles</li>
   <li>Robots</li>
   <li>Blocks</li>
   <li>Quadrapassel (Lines)</li>
   <li>Board</li>
   <li>Chess</li>
   <li>Iagno</li>
   <li>Mahjongg</li>
</ul>

##### Cartas

<ul>
   <li>Aisleriot (Solitaire, sol)</li>
   <li>Tali</li>
</ul>

##### Emuladores

<ul>
   <li>Juegos: emulador de juegos</li>
</ul>

##### Lógica

<ul>
   <li>2048</li>
   <li>Atomix</li>
   <li>Five or more</li>
   <li>Four in a row</li>
   <li>gbrainy</li>
   <li>Hitori</li>
   <li>Klotski</li>
   <li>Lights off</li>
   <li>Mines</li>
   <li>Sudoku</li>
   <li>Swell Foop</li>
   <li>Taquin</li>
   <li>Tetravex</li>
</ul>

{{< image
    gallery="true"
    image1="image:juegos.png" optionsthumb1="200x150" title1="Juegos" >}}
{{< image
    gallery="true"
    image1="image:juegos-ajedrez.png" optionsthumb1="200x150" title1="Ajedrez"
    image2="image:juegos-klotski.png" optionsthumb2="200x150" title2="Klotski"
    image3="image:juegos-minas.png" optionsthumb3="200x150" title3="Minas" >}}
{{< image
    gallery="true"
    image1="image:juegos-sudoku.png" optionsthumb1="200x150" title1="Sudoku"
    image2="image:juegos-swellfoop.png" optionsthumb2="200x150" title2="Swell Foop"
    image3="image:juegos-tetravex.png" optionsthumb3="200x150" title3="Tetravex" >}}

### Formatos de vídeo y audio y aplicaciones de terceros

Para que las aplicaciones de vídeos y música soporten más formatos de archivo es necesario instalar los decodificadores de esos formatos. En Arch Linux los siguientes paquetes.

{{< image
    gallery="true"
    image1="image:videos-4.png" optionsthumb1="200x150" title1="Códecs no encontrados en Vídeos" >}}

{{< code file="pacman-gstreamer.sh" language="bash" options="" >}}

Las aplicaciones de terceros proporcionan funcionalidades adicionales, son una alternativa a las de GNOME con más funcionalidades o complementan a estas que algunos usuarios necesitan como paquete ofimático con procesador de documentos, hoja de cálculo y presentaciones, edición de vídeo, editor de fotos,  editor de imágenes vectoriales, editor de animación 3D, gestor de biblioteca de libros electrónicos, descargas de archivos, mensajería instantánea, videoconferencia, nube privada, otro reproductor de audio y vídeo, conversores entre formatos de audio y vídeo, compiladores, bases de datos, gestor de contraseñas, ...

En otro artículo recojo un _listado de programas básicos según categoría en GNU/Linux_ de terceros que no son específicos de ningún entorno de escritorio. Todos esos programas son software libre sin coste de licencia de uso para cualquier propósito incluyendo que sea personal o empresarial con fines lucrativos.

{{% /post %}}
