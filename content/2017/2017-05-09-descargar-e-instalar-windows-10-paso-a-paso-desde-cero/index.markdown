---
pid: 231
type: "post"
title: "Descargar e instalar Windows 10 paso a paso desde cero"
url: "/2017/05/descargar-e-instalar-windows-10-paso-a-paso-desde-cero/"
date: 2017-05-09T22:30:00+02:00
updated: 2017-05-13T11:35:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:microsoft.svg"
tags: ["microsoft", "planeta-codigo", "software", "windows"]
summary: "Un virus, el _bloatware_ preinstalado en muchos portátiles o tras instalar y desinstalar programas en Windows puede ocasionar que el equipo sea lento, se muestren mensajes de error o un virus cifre los archivos personales. En estos casos una solución habitual sencilla, rápida y fiable de volver a usar con normalidad el equipo es reinstalar Windows 10 desde cero. No es complicado pero para un usuario con pocos conocimientos de informática no es una tarea sencilla. En este artículo explicaré como instalar paso a paso y desde cero el sistema operativo Windows 10."
---

{{% post %}}

{{< logotype image1="microsoft.svg" title1="Microsoft" width1="300" image2="windows-10.svg" title2="Windows 10" width2="300" >}}

Prácticamente la totalidad de portátiles que se venden en las grandes superficies comerciales más conocidas están con el sistema operativo Windows preinstalado. Pero los fabricantes con la intención dotar de más capacidades y funcionalidades que las que incorpora [Windows][windows] instalan numerosos programas que conforman el conocido _bloatware_ que en muchas ocasiones hacen que un equipo completamente nuevo sea más lento de lo normal al iniciar el sistema, al arrancar programas o trabajar con ellos. Entre los programas que suelen preinstalar los fabricantes están los antivirus que al cabo de un tiempo se desactivan ya que suelen ser versiones de evaluación pudiendo dejar al equipo desprotegido ante virus y software malicioso, Windows 10 ya incorpora uno, Windows Defender, y para la mayoría de usuarios es suficiente por su efectividad aceptable. Otros programas que los fabricantes suelen instalar son reproductores de vídeo o software multimedia en la mayoría de casos innecesario ya que Windows  de por si ya incorpora las capacidades de trabajar con archivos multimedia como fotografías o vídeos. También puede darse el caso que tras una actualización o la instalación de un programa el equipo empiece a presentar fallos.

En los casos anteriores realizar una reinstalación de Windows desde cero es necesaria. Muchos usuarios no tienen conocimientos avanzados de tecnología o informática y no conocen los pasos para realizar una reinstalación. En este artículo explicaré detalladamente, paso a paso y desde cero cuales son los pasos que hay que realizar para instalar Windows 10.

### Requisitos mínimos

Lo primero es conocer que Windows 10 para funcionar correctamente posee unos requisitos mínimos para el equipo en el que vaya a ser instalado, fue comercializado en julio del 2015 y cualquier equipo posterior a esa fecha ya cumplirá con los requisitos mínimos y también los equipos que cumpliesen con los de Windows 7 o viniesen preinstalados con esta versión anterior. En la página de [Especificaciones y requisitos del sistema para Windows](https://www.microsoft.com/es-es/windows/windows-10-specifications) están detalladas una buena cantidad de notas informativas y los requerimientos que son los siguientes:

* Procesador: Un procesador a 1 GHz o más rápido o SoC
* RAM: 1 gigabyte (GiB) para 32 bits o 2 GB para 64 bits
* Espacio en disco duro: 16 GB para un SO de 32 bits o 20 GB para un SO de 64 bits
* Tarjeta gráfica: DirectX 9 o posterior con un controlador WDDM 1.0
* Pantalla: 800 x 600

Estos son los requisitos básicos, los recomendables para una buena experiencia de uso son disponer de 4 GiB de memoria y con esta memoria el siguiente aspecto con el que más se nota una mejora es disponer de un disco duro de estado sólido o SSD en vez de mecánico ya que son varias magnitudes más rápidos tanto en la lectura como en la escritura.

Cualquier equipo nuevo cumple con estos requisitos pero quizá algunos no posean disco duro SSD, estos discos son más caros y ofrecen menos capacidad aunque ya se han abaratado y son bastante asequibles y su capacidad a partir de los 128 GiB o 256 GiB son suficientes para muchos usuarios. Pagar algo más por un equipo con un disco SSD es una buena decisión, un equipo con disco mecánico puede tardar 1 o 2 minutos en iniciarse, uno con un SSD menos de 10 segundos lo que es solo un ejemplo entre la diferencia entre unos y otros.

### Copia de seguridad

Una vez que sabes que el equipo cumple con los requisitos mínimos hay que hacer una copia de seguridad de los documentos, fotos y demás archivos personales que posea el equipo y quieras conservar en un disco duro o memoria USB externo, si son muchos los datos en vez de copiar y pegar con el explorador de archivos puedes hacer la [copia de seguridad con el programa FreeFileSync][blogbitix-144] y restaurar los datos también con el mismo programa una vez reinstalado Windows.

{{< image
    gallery="true"
    caption="Realizar copia de seguridad con FreeFileSync" >}}

### Creación del medio de instalación

En versiones anteriores de Windows este debía buscarse en las redes de compartición de archivos o P2P como torrent. Con Windows 10 Microsoft sabiamente para evitar problemas de seguridad proporciona la imagen ISO o una herramienta de creación del medio USB desde su propia página. Para [descargar la imagen ISO de Windows](https://www.microsoft.com/es-es/software-download/windows10) hay que seleccionar la edición a descargar (en el momento de escribir este artículo la última es la _Creators Update_) y el idioma.

Según la actualización de Windows descargada las capturas de pantalla o pasos variarán pero serán similares en gran parte. En este artículo he utilizado la actualización _Creators Update_, la anterior era _Anniversary Update_ y la anterior la versión original de Windows 10. Cualquier equipo de la última década ya incorpora un procesador de 64 bits, que el procesador sea de 64 bits le permite usar tamaños de memoria superiores a 4 GiB.

Accediendo a la página de descarga de Windows 10 desde un sistema con Windows 7, Windows 8.1 o Windows 10 se mostrará la opción de descargar la herramienta de creación de medios o _Media Creation Tool_. Descargada y ejecutada la herramienta realiza la descarga de Windows 10 y la creación de medio ya sea un DVD o memoria USB. En el caso de la memoria USB esta deberá tener una capacidad de al menos 8 GiB y todos los datos que posea se perderán con lo que su datos en su caso deberán ser salvaguardados en otra unidad externa.

Para realizar la instalación de Windows 10 es más recomendable usar una memoria USB con el programa _Media Creation Tool_ ya que es más rápida que utilizar un disco DVD ya en desuso para los que algunos sistemas ya ni siquiera incorporan su lector.

{{< image
    gallery="true"
    image1="image:windows-media-creation-tool-01.png" optionsthumb1="300x250" title1="Media Creation Tool"
    image2="image:windows-media-creation-tool-02.png" optionsthumb2="300x250" title2="Media Creation Tool"
    image3="image:windows-media-creation-tool-03.png" optionsthumb3="300x250" title3="Media Creation Tool" >}}
{{< image
    gallery="true"
    image1="image:windows-media-creation-tool-04.png" optionsthumb1="300x250" title1="Media Creation Tool"
    image2="image:windows-media-creation-tool-05.png" optionsthumb2="300x250" title2="Media Creation Tool"
    caption="Creación del medio de instalación" >}}

### Inicio instalación de Window 10

Una vez está listo el medio de instalación de Windows 10 en forma de memoria USB o DVD con el equipo apagado y el medio de instalación conectado a un puerto USB o insertado en el lector de DVD hay que iniciarlo para que arranque desde el medio de instalación. Según el fabricante iniciar el equipo desde el medio de instalación varía ligeramente pero suele emplearse la pulsación de una tecla cuando el equipo se inicia que suele ser la tecla F2, F8, F10, F12 o la tecla Escape que permite seleccionar la unidad desde la que se inicia el equipo donde hay que elegir la memoria USB o DVD. Puede ser que la tecla de acceso a la BIOS UEFI donde también se podrá seleccionar el orden de arranque de las unidades que también varía según el fabricante, la BIOS UEFI contiene parámetros importante de configuración del equipo con lo que hay que tener precaución en las cosas que se modifican en ellas por lo que si no estás seguro de los cambios que estás realizando no los guardes, por suerte las últimas versiones de las BIOS UEFI son más intuitivas y con interfaces gráficas más fáciles de usar.

Según el fabricante e incluso modelos de la misma fabricante la tecla de acceso para iniciar desde el medio de instalación varía:

* Acer: F2 o Delete
* Asus: F2 o F10
* Dell: F2, F1, Delete, F12 o F3
* HP: F10 o Esc
* Lenovo: F1 o F2
* Sony: F2, F3, F1 o tecla assist
* Toshiba: F2, F1, Esc

En las siguientes páginas puedes encontrar varias posibles teclas para entrar en la BIOS y cambiar la unidad de inicio del sistema según la marca, [I](http://www.makeuseof.com/tag/enter-bios-computer/), [II](https://www.lifewire.com/bios-setup-utility-access-keys-for-major-bios-manufacturers-2624461) y [III](https://www.lifewire.com/bios-setup-utility-access-keys-for-popular-computer-systems-2624463).

Puede ser el caso de que cuando se inicia el equipo muestre un mensaje con la tecla que hay que pulsar si hay que probar hasta dar con ella. Después de pulsar la tecla de encendido poco después o según se muestra un logotipo es cuando hay que pulsar la tecla.

### Asistente de instalación de Windows 10

Uno de los éxitos de Windows 10 es que la instalación ofrece un asistente con el que después de completar varios pasos y pulsaciones en botones _Siguiente_ el sistema queda instalado y listo para usarse. La instalación se completa en menos de una hora.

Entre los pasos están la selección del idioma, la versión del sistema _Home_ o _Pro_ (la primera es suficiente), la lectura de de los términos de la licencia de uso que poca gente se lee completamente por su extensión y su jerga legal poco comprensible. Si el equipo tiene una licencia se ofrecerá la posibilidad de introducir la clave del producto para activar Windows, si no la tiene es posible omitir este paso pulsando la opción _No tengo clave de producto_ y usar Windows sin limitaciones durante un tiempo, pasado un tiempo en cualquier caso las limitaciones son muy leves y Windows 10 es usable con normalidad.

Es recomendable la instalación _Personalizada: instalar solo Windows_ y no conservar archivos y configuraciones anteriores para evitar problemas o heredarlos del sistema anterior. También es recomendable eliminar todas las particiones del disco y dejar que Windows cree las necesarias.

{{< image
    gallery="true"
    image1="image:instalacion-windows-10-01.png" optionsthumb1="300x250" title1="Instalación de Windows 10"
    image2="image:instalacion-windows-10-02.png" optionsthumb2="300x250" title2="Instalación de Windows 10"
    image3="image:instalacion-windows-10-03.png" optionsthumb3="300x250" title3="Instalación de Windows 10" >}}
{{< image
    gallery="true"
    image1="image:instalacion-windows-10-04.png" optionsthumb1="300x250" title1="Instalación de Windows 10"
    image2="image:instalacion-windows-10-05.png" optionsthumb2="300x250" title2="Instalación de Windows 10"
    image3="image:instalacion-windows-10-06.png" optionsthumb3="300x250" title3="Instalación de Windows 10" >}}
{{< image
    gallery="true"
    image1="image:instalacion-windows-10-07.png" optionsthumb1="300x250" title1="Instalación de Windows 10"
    image2="image:instalacion-windows-10-08.png" optionsthumb2="300x250" title2="Instalación de Windows 10"
    image3="image:instalacion-windows-10-09.png" optionsthumb3="300x250" title3="Instalación de Windows 10" >}}
{{< image
    gallery="true"
    image1="image:instalacion-windows-10-10.png" optionsthumb1="300x250" title1="Instalación de Windows 10"
    image2="image:instalacion-windows-10-11.png" optionsthumb2="300x250" title2="Instalación de Windows 10"
    caption="Instalación de Windows 10" >}}

Tras unos pasos donde se mostrará el progreso de instalación y algún reinicio automático el sistema se inicia con un asistente de configuración para personalizar el sistema.

### Configuración básica

Después de instalar Windows este ofrece un nuevo asistente donde se personalizan algunas cosas adicionales del sistema. Algunas opciones a seleccionar en estos pasos antes de empezar a usar Windows 10 son:

* La región o país del usuario.
* La distribución o disposición de las teclas del teclado.
* El usuario de inicio de sesión ya sea con una cuenta de Microsoft o con una cuenta sin conexión y la contraseña.
* Si se desea usar Cortana como asistente personal.
* Algunas opciones de privacidad que son recomendables desactivar para que Windows no recopile información de nuestro dispositivo aunque sean datos anónimos.

{{< image
    gallery="true"
    image1="image:instalacion-windows-10-12.png" optionsthumb1="300x250" title1="Configuración Windows 10"
    image2="image:instalacion-windows-10-13.png" optionsthumb2="300x250" title2="Configuración Windows 10"
    image3="image:instalacion-windows-10-14.png" optionsthumb3="300x250" title3="Configuración Windows 10" >}}
{{< image
    gallery="true"
    image1="image:instalacion-windows-10-15.png" optionsthumb1="300x250" title1="Configuración Windows 10"
    image2="image:instalacion-windows-10-16.png" optionsthumb2="300x250" title2="Configuración Windows 10"
    image3="image:instalacion-windows-10-17.png" optionsthumb3="300x250" title3="Configuración Windows 10" >}}
{{< image
    gallery="true"
    image1="image:instalacion-windows-10-18.png" optionsthumb1="300x250" title1="Configuración Windows 10"
    image2="image:instalacion-windows-10-19.png" optionsthumb2="300x250" title2="Configuración Windows 10"
    image3="image:instalacion-windows-10-20.png" optionsthumb3="300x250" title3="Configuración Windows 10" >}}
{{< image
    gallery="true"
    image1="image:instalacion-windows-10-21.png" optionsthumb1="300x250" title1="Configuración Windows 10"
    image2="image:instalacion-windows-10-22.png" optionsthumb2="300x250" title2="Configuración Windows 10"
    image3="image:instalacion-windows-10-23.png" optionsthumb3="300x250" title3="Configuración Windows 10" >}}
{{< image
    gallery="true"
    image1="image:instalacion-windows-10-24.png" optionsthumb1="300x250" title1="Configuración Windows 10"
    image2="image:instalacion-windows-10-25.png" optionsthumb2="300x250" title2="Configuración Windows 10"
    image3="image:instalacion-windows-10-26.png" optionsthumb3="300x250" title3="Configuración Windows 10" >}}
{{< image
    gallery="true"
    image1="image:instalacion-windows-10-27.png" optionsthumb1="300x250" title1="Configuración Windows 10"
    image2="image:instalacion-windows-10-28.png" optionsthumb2="300x250" title2="Configuración Windows 10"
    image3="image:instalacion-windows-10-29.png" optionsthumb3="300x250" title3="Configuración Windows 10" >}}
{{< image
    gallery="true"
    image1="image:instalacion-windows-10-30.png" optionsthumb1="300x250" title1="Configuración Windows 10"
    image2="image:instalacion-windows-10-31.png" optionsthumb2="300x250" title2="Configuración Windows 10"
    image3="image:instalacion-windows-10-32.png" optionsthumb3="300x250" title3="Configuración Windows 10" >}}
{{< image
    gallery="true"
    image1="image:instalacion-windows-10-33.png" optionsthumb1="300x250" title1="Configuración Windows 10"
    image2="image:instalacion-windows-10-34.png" optionsthumb2="300x250" title2="Configuración Windows 10"
    image3="image:instalacion-windows-10-35.png" optionsthumb3="300x250" title3="Configuración Windows 10"
    caption="Configuración inicial de Windows 10" >}}

### Usando Windows

Si el equipo ya tenía licencia de de Windows y estaba activado seguramente Windows 10 ya lo reconozca como activado. También es muy probable que Windows 10 sea capaz de reconocer automáticamente todo el hardware que posea en el equipo incluyendo la tarjeta gráfica pasa usar la máxima resolución que ofrezca la pantalla.

Llegado a este punto Windows 10 ya se puede empezar a usar y quizá instalar el software básico que vayas a utilizar como un paquete ofimático ya sea [Microsoft Office][microsoft-office] o alguna de las mejores [3 alternativas a Microsoft Office][blogbitix-143], un navegador web como [Firefox][firefox] o [Chrome][google-chrome] con el complemento para bloquear publicidad [AdBlockPlus][adblockplus] en vez de usar [Microsoft Edge][microsoft-edge] que está incorporado por defecto.

Aún sin licencia y sin activar Windows 10 es perfectamente usable, quizá al cabo de un tiempo no puedas cambiar algunas opciones de personalización como el fondo del escritorio o temas de las ventanas pero nada importante que impida usarlo. Y en cualquier caso [Windows 10 y Office 2016 siguen siendo tan fáciles de usar sin licencia como siempre][blogbitix-119].

{{< image
    gallery="true"
    image1="image:windows-10-01.jpg" optionsthumb1="300x250" title1="Windows 10"
    image2="image:windows-10-02.png" optionsthumb2="300x250" title2="Windows 10" >}}
{{< image
    gallery="true"
    image1="image:windows-10-03.png" optionsthumb1="300x250" title1="Windows 10"
    image2="image:windows-10-04.jpg" optionsthumb2="300x250" title2="Windows 10"
    caption="Windows 10" >}}

### Alternativa a Windows con distribuciones GNU/Linux

Debes conocer que Windows no es la única opción de sistema operativo que puedes instalar, si quieres puedes probar alguna de las distribuciones [GNU][gnu]/[Linux][linux] como alternativa a Windows y descubrir el mundo del software libre que respeta tus derechos y no te los quita como el software privativo, puedes leer el artículo [Elegir una distribución GNU/Linux según el usuario o equipo][blogbitix-190] e [instalar Ubuntu paso a paso desde cero][blogbitix-232].

Las siguientes son unas capturas de pantalla de varias de las distribuciones GNU/Linux más famosas.

{{< image
    gallery="true"
    image1="image:ubuntu.png" optionsthumb1="300x250" title1="Ubuntu con entorno de escritorio Unity"
    image2="image:elementary-os.png" optionsthumb2="300x250" title2="elementaryOS"
    caption="Ubuntu y elementaryOS" >}}
{{< image
    gallery="true"
    image1="image:fedora.png" optionsthumb1="300x250" title1="Fedora con entorno de escritorio GNOME"
    image2="image:opensuse.png" optionsthumb2="300x250" title2="openSUSE con entorno de escritorio KDE"
    caption="Fedora y openSUSE" >}}

{{% /post %}}
