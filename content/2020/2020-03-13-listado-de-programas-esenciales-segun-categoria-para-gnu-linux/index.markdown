---
pid: 469
type: "post"
title: "Listado de programas esenciales según categoría para GNU/Linux"
url: "/2020/03/listado-de-programas-esenciales-segun-categoria-para-gnu-linux/"
date: 2020-03-13T12:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imageHead: "image:onlyoffice-documentos.png"
imagePost: "image:onlyoffice-documentos.png"
tags: ["gnu-linux", "planeta-codigo", "software-libre"]
summary: "El sistema operativo solo proporciona la abstracción del hardware a los programas de usuario. Son los programas los que permiten al usuario realizar las tareas productivas. Según su categoría hay varios programas según los tipos de archivos que soportan o funcionalidad que proporcionan. Ofimática, internet y comunicaciones, fotos y gráficos, multimedia, juegos, programación y desarrollo seguridad y privacidad, ..."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Un sistema operativo como [GNU][gnu]/[Linux][linux], [Windows][windows] o [macOS][macos] tiene poca utilidad sin los programas de usuario que permiten realizar tareas. Para las tareas más comunes normalmente hay varios programas entre los que elegir, con una traducción al español e interfaz gráfica.

En GNU/Linux además la mayoría de los programas son software libre. Las ventajas del software libres son que el código fuente está disponible con lo que no pueden contener funciones maliciosas ocultas, está permitido modificar el código fuente y redistribuirlo bajo la misma licencia y compartir el programa con cualquiera que lo necesite. No tiene que ser así pero generalmente los programas de software libre son generalmente gratuitos ni requieren costosas licencias de uso.

En esta lista no incluye los [programas básicos que integra un entorno de escritorio por defecto como GNOME][blogbitix-464] sino solo los programas adicionales comunes que se suelen instalar para complementar los que ya están instalados en el sistema.

Los programas incluidos en esta lista solo son una pequeña muestra seleccionada de todos los disponibles que están entre los más usados y considerados por los usuarios.

* [Lista de software](https://wiki.archlinux.org/index.php/Category:Lists_of_software)
* [Lista de aplicaciones](https://wiki.archlinux.org/index.php/List_of_applications)
* [Aplicaciones para documentos](https://wiki.archlinux.org/index.php/List_of_applications/Documents)
* [Aplicaciones para internet](https://wiki.archlinux.org/index.php/List_of_applications/Internet)
* [Lista de juegos](https://wiki.archlinux.org/index.php/List_of_games)

Todos estos programas están disponibles como paquete para cada distribución GNU/Linux, si no lo estuviera quizá esté disponible como paquete [Flatpak][flatpak], [snaps][snaps] o [AppImage][appimage] para instalar el software independientemente de la distribución.

* [Flatpak, distribución e instalación de programas de escritorio en las distribuciones GNU/Linux][blogbitix-362]

Índice de categorías de programas:

* [Ofimática, documentos y escritorio](#ofimática-documentos-y-escritorio)
* [Editor de textos avanzado](#editor-de-textos-avanzado)
* [Internet y comunicaciones](#internet-y-comunicaciones)
* [Fotos y gráficos](#fotos-y-gráficos)
* [Multimedia, vídeo y audio](#multimedia-vídeo-y-audio)
* [Programación y desarrollo](#programación-y-desarrollo)
* [Seguridad y privacidad](#seguridad-y-privacidad)

### Ofimática, documentos y escritorio

La ofimática es la funcionalidad más común a todos los usuarios. Poder editar documentos de texto, utilizar hojas de cálculo aplicando fórmulas y crear presentaciones. Un editor de texto avanzado tiene más funcionalidad si son necesarias que el simple editor de texto incluido en los entornos de escritorio. Visualizar archivos digitalizados como libros electrónicos y archivos de cómics es necesario para aquellos usuarios que les gusta la lectura. Tomar capturas de pantalla es otra funcionalidad para que los entornos de escritorio ya incluyen algún programa pero también suelen ser simples aunque suficientes, para los usuarios que necesitan alguna funcionalidad hay algún programa más especializado.

#### Editor de documentos ofimáticos

[LibrerOffice][libreoffice] es el paquete ofimático más popular y completo de GNU/Linux pero su interfaz no es la más agradable visualmente y muchos usuarios no necesitan las funcionalidades más avanzadas. [OnlyOffice][onlyoffice] es un paquete ofimático más sencillo y solo incluye las aplicaciones básicas editor de documentos, hoja de cálculo y presentaciones. [WPS Office][wps-office] no es software libre pero posee una versión gratuita con limitaciones con una interfaz cuidada parecida a [Microsoft Office][microsoft-office].

* [4 opciones ofimáticas alternativas gratuitas a Microsoft Office][blogbitix-143]

### Editor de textos avanzado

[Visual Studio Code][microsoft-visual-studio-code] es un editor de texto avanzado con funcionalidades útiles para los usuarios avanzados como una terminal integrada. Se le pueden añadir complementos que casi lo convierte en un IDE sin llegar al nivel de uno dedicado. Posee muchas combinaciones de acceso rápido para aumentar la productividad al acceder a funcionalidades usadas repetidamente.

#### Libros electrónicos y cómics

Los libros electrónicos ya son muy asequibles y aportan comodidad en menor peso y espacio sobre los libros impresos en papel. Hay múltiples formatos de libro electrónico y los lectores soportan únicamente algunos de ellos por lo que es necesario un programa para realizar una conversión entre formato en el que se tiene el libro y el que soporta el lector. Un ejemplo es el [Amazon Kindle][amazon-kindle] que no soporta el formato _epub_ y hay que realizar la conversión a _azw_ o _mobi_. Un conversor de formato de libros electrónicos y organizador de la biblioteca digital es [Calibre][calibre].

* [Gestionar biblioteca y convertir entre formatos de libros electrónicos con Calibre][blogbitix-443]

Otros formatos de libros son los cómics y estos por su formato gráfico son imágenes empaquetas en un único archivo. Para leer estos archivos y proporcionar una interfaz adaptada a las necesidades de los cómics hay programas para estos tipos de archivos. [MComix][mcomix] es una aplicación dedicada a la lectura de cómics en el ordenador.

#### Capturador de pantalla

Hacer una captura de pantalla es muy útil para compartir la imagen de una aplicación, una parte del escritorio o el escritorio completo. Los entornos de escritorio ya suelen incluir un capturador de pantalla, las aplicaciones dedicadas incluyen alguna funcionalidad adicional como [Shutter][shutter].

Otra forma de captura del escritorio es capturar un vídeo del escritorio, incluído el sonido. [recordMyDesktop][recordmydesktop] graba el entorno de escritorio sin necesidad de un hardware dedicado como una capturadora de vídeo.

#### Copias de seguridad

Es muy importante realizar copias de seguridad de la información digital para no perderla si por cualquier circunstancia el sistema de almacenamiento o dispositivo se estropea impidiendo acceder a los archivos. [FreeFileSync][freefilesync] permite hacer copias de los archivos en varios dispositivos de almacenamiento de forma rápida copiando solo los archivos que hayan sido modificados desde la fecha de la última copia de seguridad.

* [Cómo realizar copias de seguridad en Windows con FreeFileSync][blogbitix-144]

### Internet y comunicaciones

El acceso a internet ya está disponible para mayoría de la población de las sociedades desarrolladas, ha multiplicado las posibilidades de los ordenadores y posibilitado diferentes formas de comunicación instantánea con personas que están a miles de kilómetros.

#### Navegador

El navegador web es una pieza fundamental en el ordenador que permite acceder a las páginas web de internet, realizar descargas de archivos y otra multitud de tareas que hoy en día ya se puede realizar desde leer periódicos digitales a compras y transferencias de dinero en la banca digital.

Dada la importancia que ya se realizan con estos programas y la información de los usuarios que tratan es importante que estén actualizados a la última versión con todas las correcciones de seguridad aplicadas y que incluya funcionalidades para proteger la privacidad de la información de los usuarios. [Firefox][firefox] y [Chromium][chromium] son de los más populares.

#### Correo electrónico

Con el correo web como [GMail][google-gmail] o [Protonamail][protonmail] las aplicaciones de correo electrónicos de escritorio no son imprescindibles. Sigue habiendo algunos programas dedicados que posibilitan algunas funcionalidades como firma digital o cifrado y descifrado con [GnuPG][gnupg]. Dos aplicaciones de correo electrónico son [Thunderbird][thunderbird] y [Geary][geary].

#### Lector de feeds

También hay lectores de feeds web como [Feedly][feedly] pero los usuarios pueden preferir un programa dedicado local en el ordenador, [Liferea][liferea] es uno.

#### Descargar archivos torrent y descargas directas

Para descargar películas, series y libros electrónicos se utilizan archivos torrent un programa que descargue el contenido de los usuarios que lo tengan, es una descarga distribuida y suele ofrecer una buena velocidad de descarga si lo tiene varios usuarios, un programa para descargar archivos torrent es [Transmission][transmissionbt].

Si es posible es mejor utilizar descarga mediante torrents, si no es posible y se ofrece la descarga directa está [JDownloader][jdownloader] que posibilita detener y continuar la descarga en el punto que se quedó.

#### Mensajería instantánea

[Telegram][telegram] y [Whatsapp][whatsapp] son las mensajerías más utilizadas por su ubicuidad con el auge de los _smartphones_. [Pidgin][pidgin] permite el envío de mensajes entre personas con un ordenador.

Para el trabajo en grupo [Slack][slack] es una evolución de los programas como Pidgin y muy utilizado en las empresas. Es otra forma de comunicación más apropiada en ciertas circunstancias que la comunicación mediante correo electrónico. Slack ofrece además de mensajes de texto, imágenes y reacciones permite llamadas de audio y videoconferencias.

#### Videoconferencia

[Skype][skype] permite hacer video llamadas por internet.

#### Nube privada

Google ofrece multitud de servicios gratuitos que poseen gran cantidad de información personal, en GMail los mensajes enviados y recibidos de otros usuarios, en Google Docs los documentos, en Calendar las citas y otra información utilizando más servicios. Para proteger la información personal [Nextcloud][nextcloud] permite sustituir varios de esos servicios en la nube por una nube privada propia.

* [Nube privada para documentos personales con Nextcloud y OnlyOffice][blogbitix-446]

### Fotos y gráficos

El retoque fotogŕafico permite crear imágenes y retocar fotografías en formato vectorial o formada por píxeles en formato _raster_, permite retocar las imágenes realizadas con móvil.

#### Retoque fotográfico

Para un uso personal [GIMP][gimp] permite sustituir programas que requieren costosas licencias com [Adobe Photoshop][adobe-photoshop], incluso para un uso profesional salvo quizá una función muy avanzada GIMP también es una muy buena opción. En cada nueva versión se mejoran sus funcionalidades y se añaden nuevas.

[Inkscape][inkscape] permite editar y crear imágenes en formato vectorial.

### Multimedia, vídeo y audio

Reproducir vídeos, películas, archivos de audio y música son otra categoría de archivos para los que se necesitan programas específicos. Algunos programas pueden hacer todo lo anterior y otros solo se centran en la música y archivos de audio. Otros programas permite crear vídeos a partir de una colección de archivos de vídeo y audio. También suele ser necesario realizar conversiones entre formatos de archivos para reproducirlos en los que soporte el programa que los reproduce.

#### Reproductor de vídeo, audio, películas y música

[VLC][vlc] es un programa que realiza multitud de funcionalidades, sus pricipales son reproducir archivos de vídeo y audio pero también permite realizar conversiones e incluso ser el programa que capture el vídeo de una capturadora hardware. Su interfaz no es la más estéticamente bonita pero funciona realmente bien y es capaz de reproducir cualquier formato de archivo multimedia.

Para reproducir música los programas [Rhythmbox][rhythmbox] y [Banshee][banshee] permite organizar la librería digital de archivos de música.

#### Editor de vídeo

Con una colección de archivos de vídeo, imágenes y archivos de audio y un programa como [OpenShot][openshot] permite crear un vídeo aplicando varios efectos y transiciones, el resultado es un nuevo vídeo que incluye parte o todo el contenido individual original.

#### Conversor de vídeo y audio

Al igual que en otros formatos de archivos es posible necesitar realizar conversiones entre formatos. Tanto de vídeo con [Handbrake][handbrake] y audio con [Soundconverter][soundconverter]. Además de hacer conversiones es posible ajustar la calidad del nuevo vídeo para hacer que tenga menos calidad y ocupe menos.

#### Otros programas específicos

[Audacity][audacity] es un programa para la edición de audio y [Blender][blender] un programa de modelado 3D. [EasyTAG][easytag] permite editar los metadatos de los archivos de música para que los reproductores muestren la información correta del título, álbum, grupo musical o género.

### Juegos

GNU/Linux no es la opción más popular para los juegos que está dominado por Windows pero ya hay algunos programas que permiten descargar e instalar juegos de forma muy sencilla e incluso jugar a los juegos que han sido desarrollados para Windows. También hay algunos buenos juegos desarrollados para GNU/Linux.

[Steam][steam] y [Wine][wine] permiten juga a juegos de Windows, en Steam hay juegos compatibles de forma nativa para GNU/Linux. [GOG][gog] permite jugar a juegos ya con unos años pero que fueron notables en su época. [Mame][mame], [Lakka][lakka] y [Retroarch][retroarch] permite jugar hoy en día a juegos de arcade aún más antiguos, de recreativas y de la generación de las primeras consolas.


* [Cómo usar Wine para jugar en GNU/Linux a Diablo 3 u otros juegos de Blizzard o Windows][blogbitix-364]
* [La aplicación cliente de Steam en GNU/Linux][blogbitix-431]
* [Jugar a videojuegos clásicos y míticos de arcade con Mame en GNU/Linux][blogbitix-170]
* [22+ buenos juegos en GNU/Linux][blogbitix-172]
* [Varios juegos de culto con ScummVM en GNU/Linux][blogbitix-173]

### Programación y desarrollo

Si algo destaca GNU/Linux es en el aspecto de programas disponibles para tareas de programación y desarrollo, hay multitud de programas y es uno de los sistemas operativos con más variedad y mejor preparado para este fin.

#### Compiladores

En GNU/Linux hay compiladores para cualquier lenguaje de programación ya sea Java, C, C#, Python, Rust, Go y muchos otros. [GCC][gcc] permite compilar los archivos de código fuente y producir el archivo ejecutable.

#### Entorno integrado de desarrollo

Los entornos integrados de desarrollo o IDE ofrecen funcionalidades que permiten aumentar la productividad al escribir código como la asistencia de código y mostrar la propia documentación de cada método y nombres de los parámetros. Así como depurar el código mientras se ejecuta.

En Java los tres IDEs más populares son [IntelliJ IDEA][intellij], [eclipse][eclipse], [Apache Netbeans][netbeans].

#### Bases de datos y software de servidor

Las aplicaciones normalmente guardan sus datos en almacenes de datos, esto son las bases de datos. Hay varios tipos de bases de datos, dos grandes grupos son las basadas en el modelo relacional como [PostgreSQL][postgresql] y [MySQL][mysql] y las noSQL como [Redis][redis] o [MongoDB][mongodb].

* [Introducción a la base de datos relacional PostgreSQL][blogbitix-236]
* [Introducción a la base de datos NoSQL MongoDB][blogbitix-237]

Hay otro tipo de programas útiles en el desarrollo como los servidores web como [Nginx][nginx], mensajería como [RabbitMQ][rabbitmq] o tecnología de contenedores como [Docker][docker].

* [Ejemplo de RabbitMQ con Java para enviar y recibir mensajes][blogbitix-210]
* [Inicio básico de Docker][blogbitix-50]

#### Virtualización

La virtualización permite ejecutar un sistema dentro de otros sistema, por ejemplo, ejecutar Windows en GNU/Linux o una distribución GNU/Linux en Windows. También permite probar macOS en GNU/Linux o incluso alguna ditribución BSD o [Minix][minix].

* [Cómo instalar y probar macOS con VirtualBox en Windows o GNU/Linux][blogbitix-181]

### Seguridad y privacidad

Un aspecto al que se le da gran importancia en GNU/Linux es a la seguridad, está construido con la seguridad como una característica importante. También la privacidad es otro aspecto destacado. Los programas son software libre y dado que el código fuente está disponible los programas no contienen funciones maliciosas ocultas que recopilan información del usuario sin su conocimiento.

Tampoco suele ser necesario instalar un antivirus ya que los programas al ser gratuitos no es necesario buscar activadores que permitan el uso de los programas sin haber adquirido la licencia previamente. Los activadores de programas son una de las principales fuentes de entradas de virus en un sistema, no solo porque son programas que se ejecutan en el sistema que pueden quedar residentes realizando funciones desconocidas pero no con buenos propósitos sino también por el tipo de páginas de baja reputación e inseguras a las que hay que acceder para descargarlos.

#### Gestor de contraseñas

Las contraseñas deben ser únicas para cada sitio web, tener una longitud de entre 8, 16 o más caracteres y combinar letras, números y símbolos. Estas restricciones hacen que las contraseñas sean difíciles de recordar. Precisamente por estos motivos hay programas que guardan cifradas bajo una contraseña maestra la colección de credenciales de cada sitio web. [KeepassXC][keepassxc] es una base de datos que guarda las credenciales e información adicional cifrada, también permite generar contraseñas únicas que complan los requisitos deseados de longitud y tipos de caracteres que deben incluir.

* [Guardar contraseñas de forma segura con KeePassXC][blogbitix-196]

#### Cifrado y descifrado de archivos

[GnuPG][gnupg] permite cifrar y firmar digitalmente archivos y contenido, esto permite comprobar que el archivo no ha sido modificado en la transmisión y que el archivo proviene de la persona que lo ha firmado. Esto es un mecanismo importante en la seguridad y las comunicaciones. GnuPG tiene complementos para integrase en Thunderbird para firmar y cifrar el correo electrónico. [GnuPG Assistant][gnupga] es una aplicación con interfaz gráfica que posibilita hacer operaciones de firma y cifrado.

[EncFS][encfs] permite crear un sistema de archivo cifrado de modo que su contenido esté protegido por una contraseña.

* [Cifrar archivos con EncFS en GNU/Linux][blogbitix-126]

#### Cortafuegos

[UFW][ufw] permite restringir el tráfico de red aceptado por la computadora tanto entrante como saliente, para exponer únicamente en interner los recusos imprescindibles de la computadora. Es fácil de utilizar e incluso tiene una [interfaz gráfica][gufw].

* [Permitir o denegar tráfico de red con el firewall UFW en GNU/Linux][blogbitix-369]

{{% reference %}}
* [Must Have Essential Linux Applications](https://itsfoss.com/essential-linux-applications/)
* [Best Free Software for Linux](https://www.techsupportalert.com/content/best-free-software-linux.htm)
{{% /reference %}}

{{% /post %}}
