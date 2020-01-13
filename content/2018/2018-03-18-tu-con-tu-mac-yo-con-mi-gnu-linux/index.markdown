---
pid: 305
type: "post"
title: "Tú con tu Mac, yo con mi GNU/Linux"
url: "/2018/03/tu-con-mac-yo-con-mi-gnu-linux/"
date: 2018-03-17T14:00:00+01:00
updated: 2018-03-18T17:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:macos.svg"
tags: ["apple", "gnu-linux", "microsoft", "opinion", "planeta-codigo", "windows"]
---

{{% post %}}

{{< logotype image1="macos.svg" title1="macOS" width1="300" image2="windows-10.svg" title2="Windows" width2="350" image3="gnu.svg" image4="linux.svg" >}}

Por motivos laborales y por política de la empresa tuve que elegir como equipo un portátil de [Apple][apple], en concreto un MacBook Pro con procesador Intel Core i5, 16 GiB de memoria y 512 GiB de almacenamiento SSD. Prácticamente el mejor portátil que había en su momento en el catálogo de la manzana que tendría un precio seguro más de 2000€ y quizá 2500€. Este cambio me ha permitido poder comparar con mi propio portátil, un Sony Vaio con procesador Intel Core i5 3210, 8 GiB de memoria y 250 GiB de almacenamiento SSD y la distribución [Arch Linux][archlinux] de [GNU][gnu]/[Linux][linux].

Tenía la duda de si esta experiencia me iba a convencer de pasarme al lado oscuro. Llevo usando el MacBook desde hace un año siendo este [mi primer contacto con un Mac][blogbitix-193] y puedo decir de momento que no hay nada en los Mac que me convezca de adquirir uno de los portátiles de Apple. Sí no son feos, tenían (en pasado) alguna cosa distinta como los _magsafe_ en el adaptador de corriente, no tienen elementos obsoletos como una salida VGA o grabadora DVD, una buena pantalla y un buen _touchpad_ pero a un precio exagerado. Aún así y ahora que he probado tanto Windows, macOS como GNU/Linux no tengo nada que envidiar a los portátiles de Apple ni a macOS por mi parte, es más estoy más convencido de usar GNU/Linux.

### Software

Empezando por el software libre, ¿hace falta que mecione [las cuatro libertades esenciales](https://www.gnu.org/philosophy/free-sw.es.html)? o la posibilidad de elegir la distribución o entorno de escritorio que más me guste o mejor se adapte a mis requerimientos. Pensando mal, en el portátil Mac no estoy seguro de que no tengan algún tipo de software espía, algún tipo de monitorización o telemetría.

Para cualquier necesidad en Linux seguramente hay una aplicación que realice esa funcionalidad, editor de documentos, reproductor de vídeo, edición fotográfica, navegador, administrador de ebooks, entorno de desarrollo, editor de código, descargas torrent. Las principales aplicaciones están disponibles para ambas plataformas: [LibreOffice][libreoffice], [VLC][vlc], [GIMP][gimp], [Firefox][firefox], [Calibre][calibre], [IntelliJ][intellij], [Visual Studio Code][microsoft-visual-studio-code], [Tranmission][transmissionbt], ...

Sin embargo, para algunas otras necesidades en Mac seguramente hay que sacar otra vez la tarjeta de crédito para compra alguna aplicación que realice la tarea que en GNU/Linux está disponible gratuitamente y es software libre. Por ejemplo, para convertir un vídeo a otro formato, para convertir a MP3 un CD de audio o un simple compresor/descompresor de archivos. Menos mal que en mac también se puede acceder a todo ese catálogo de software libre.

Y [en GNU/Linux también hay juegos de buena calidad][blogbitix-172].

### Hardware

El hardware de Apple es bonito y es un aspecto que lo cuidan mucho al menos más que en los típicos portátiles de la mayoría de las marcas que fabrican para Windows. Sin embargo, en cuanto a características no es de lo mejor que uno puede encontrar y a un precio significativamente mayor.

Mi equipo es del 2012 y el Mac que uso del 2015, realmente lo único que echo de menos es la resolución de la pantalla que en el Mac es de 2560x1600 nativa y de 1650x1050 escalada lo que hace que se vea el texto muy bien. El _magic mouse_ al ser táctil también está bien aunque a veces detecte gestos incorrectos pero el hecho de que cuando esté cargándose no se pueda utilizar es un fallo de diseño.

Compara el [Slimbook Pro 2][slimbook] y el [MacBook Pro](https://www.apple.com/es/macbook-pro/), para empezar en el Slimbook se pueden instalar 32 GiB de memoria en el Mac solo 16 GiB, a características similares con disco SSD de 512 GiB y pantalla de HiDPI el Slimbook está sobre los 1000€ y los Mac empezando por 1500€.

### Entorno de escritorio

El entorno de escritorio en lo personal uso [GNOME][gnome] y en ciertos aspectos tiene similitudes como la barra superior, la vista de ventas o la gestión de escritorios. GNOME ha evolucionado de forma muy notable desde las primeras versiones 3.0 añadiendo muchas nuevas funcionalidades y mejorando varios aspectos visuales en cada ciclo de desarrollo de seis meses. KDE también ha mejorado mucho.

GNOME puede personalizarse en cierta medida con algunos complementos para por ejemplo hacer que la barra de aplicaciones se muestre siempre. Algunos otros aspectos de GNOME me gustan más como el menú agrupado para varios de los iconos, en Mac cada icono tiene su propio menú de acciones. En la vista de aplicaciones de GNOME estás pueden cerrarse sin tener que seleccionar la aplicación. Tanto GNOME como macOS soportan escritorios virtuales.

{{< image
    gallery="true"
    image1="image:gnome-overview.jpg" optionsthumb1="300x200" title1="GNOME"
    image2="image:macos-overview.jpg" optionsthumb2="300x200" title2="macOS"
    caption="Comparación entre el entorno de escritotio de GNOME y macOS" >}}

GNOME incluye todo lo que un usuario necesita desde navegador de archivos, visor de fotos, visor de documentos, aplicación de correo electrónico, terminal, editor de texto plano. Y GNOME no es la única opción también está [KDE][kde] o [XFCE][xfce] por nombrar solo dos de los otros entornos e escritorio más conocidos.

### Gestor de paquetes

La forma de instalar y actualizar aplicaciones de las distribuciones GNU/Linux con los gestores y repositorios de paquetes es muy sencillo. En Arch Linux que es una distribución [rolling release][rollingrelease] cada vez que hago una actualización tengo las últimas versiones de cada paquete y aplicación.

En los Mac se puede utilizar algo similar con [Homebrew][homebrew] y menos mal que existe para hacer más fácil instalar y sobre todo matener actualizados los programas a las últimas versiones.

### Precio

No se cuanto costaría exactamente el equipo Mac pero con su configuración al menos unos 2000€. Pues bien un Slimbook a día de hoy con con una configuración del modelo tal que Intel Core i5 8250U (4 núcleos, 8 hilos), 32 GiB de memoria, 250 GiB de almacenamiento SSD con interfaz NVMe y pantalla QHD+ 3200 x 1800 HiDPI cuesta unos 1400€ siendo el tope de gama. Eso para los usuarios que necesiten tal ingente cantidad de memoria y en una de las configuraciones más completas.

El MacBook Pro más barato empieza en 1500€ y con únicamente 8 GiB de memoria y solo 128 GiB de SSD, con 16 GiB de memoria y 256 GiB de SSD se va a los 2000€.

### Obsolescencia

Es Apple quien decide cuando deja de dar soporte a sus equipos, en forma de actualizaciones de seguridad o nuevas versiones de macOS, 6+ años aproximadamente lo que me parece poco tiempo, posiblemente en ese momento uno ya se platee comprar otro pero también el equipo seguramente se útil para ciertos propósitos. En GNU/Linux los equipos siguen teniendo actualizaciones y siguen siendo usables incluso con 10 años. Dejan de ser válidos cuando el software demanda más al equipo del lo que es capaz principalmente por la cantidad de memoria. Pero aún en estos casos utilizando una distribución que consuma pocos recursos siguen siendo usables para ciertas tareas.

### Mi conclusión

La marca Apple tiene un halo de idolatración, de que no hay nada mejor ya sea en el hardware o en el software y si se me permite de elitismo, superioridad, ir a contracorriente, tener algo diferenciativo o exclusividad. Por mi experiencia no creo que GNU/Linux hoy día tenga mucho envidiar, ni sea más difícil de instalar o usar, quizá un buen soporte de hardware desde el primer día pero eso es consecuencia de la cuota de uso de GNU/Linux en el escritorio, aún así las cosas han mejorado mucho en la última década.

¿Quieres un equipo para trabajar sin preocuparte mucho de dedicarle tiempo a mantenerlo? usa una versión con soporte prolongado (LTS) de [Ubuntu][ubuntu], ¿quieres una distribución con el software actualizado? usa Arch Linux o una de sus derivadas, ¿quieres un equipo potente, configurable, ligero y bonito? échale un vistazo a los Slimbook.

Pasado este tiempo usando un Mac a mi no me han convencido de cambiar y comprar uno de ellos. La plataforma del pingüino también tiene defectos al igual que macOS no está exento de ellos, los dos alguna vez se me han bloqueado, pero después de probar un Mac la verdad es que no entiendo la idolatración y lo fieles que son algunos de sus usuarios a esta marca. Al pagar lo que hay que pagar por un Mac uno debe pensar que con legitimidad van a recibir a cambio algo acorde a sus expectativas más cuanto mayor sea el precio, quizá si el precio es elevado cuesta más reconocer los defectos. Quédate con tu Mac, a mi dame mi GNU/Linux.

{{< reference >}}
* [Apple actualiza la lista de Mac y otros dispositivos “vintage y obsoletos”](https://www.soydemac.com/apple-actualiza-la-lista-de-mac-y-otros-dispositivos-vintage-y-obsoletos/)
{{< /reference >}}

{{% /post %}}
