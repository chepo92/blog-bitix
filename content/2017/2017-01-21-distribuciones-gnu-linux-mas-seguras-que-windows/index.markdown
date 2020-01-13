---
pid: 205
type: "post"
title: "Distribuciones GNU/Linux, ¿más seguras que Windows?"
url: "/2017/01/distribuciones-gnu-linux-mas-seguras-que-windows/"
date: 2017-01-21T10:00:00+01:00
updated: 2017-01-21T20:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "microsoft", "opinion", "planeta-codigo"]
summary: "Los sistemas GNU/Linux pueden ser igual de seguros o inseguros que los sistemas Windows. Sin embargo, en ambas plataformas hay algunas diferencias que explican por que los sistemas Windows tienen peor fama y por que los sistemas GNU/Linux se consideran más seguros que Windows."
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Habitualmente se comenta que los sistemas con alguna distribución [GNU][gnu]/[Linux][linux] son más seguros que los sistemas [Windows][windows]. Probablemente bien configurados y debidamente actualizados ambas opciones sean muy seguras. Sin embargo, desde el punto de vista de un usuario es común que Windows se vea infectado con virus o _malware_ aún con un antivirus instalado.

Las razones de que Windows se vea más amenazado son varias, una es que es una plataforma con una cuota de uso enorme por tanto muy atractiva de atacar. Otra es que instalar programas o software en las distribuciones GNU/Linux se realiza en su mayor parte desde los repositorios oficiales, es decir, de una fuente confiable. En Windows hay que buscar la página oficial del programa y en los resultados de Google no siempre es la primera opción si se busca por «windows reproductor de vídeo», «windows programa para descargar películas» o segundas o terceras opciones es software dudoso. Esas páginas no oficiales de los programas pueden realmente hospedar programas con virus. Quizá ahora que [Microsoft][microsoft] ha añadido en sus últimas versiones de Windows [una tienda de aplicaciones](https://www.microsoft.com/en-us/windows/windows-10-apps) se podrán instalar desde ella con más garantías de forma similar a lo que desde hace mucho tiempo en GNU/Linux son los repositorios de paquetes.

Otro motivo es que [muchos usuarios de Windows y Office los usan sin licencia][blogbitix-119] y no hay mayor problema ya que incluso Microsoft ofrece la descarga de la [imagen ISO de Windows 10](https://www.microsoft.com/es-es/software-download/windows10ISO) desde su propia página pero para realizar la activación sin la correspondiente licencia hay que usar un programa que puede contener un virus y en un buen caso obligar a reinstalar Windows para deshacerse de él, un peor caso es que el virus no muestre síntomas de su presencia y pase desapercibido pero recolectando datos (contraseñas, fotos, documentos, ...) del usuario sin que este lo sepa. La lista de programas que los usuarios de Windows usan sin licencia es mucho más extensa [Photoshop][adobe-photoshop], [Illustrator][adobe-illustrator], [InDesign][adobe-indesign], [Premiere Pro][adobe-premiere], [After Effects][adobe-aftereffects], [Lightroom][adobe-lightroom], [Acrobat][adobe-acrobat], [otro software de Adobe](https://www.adobe.com/es/creativecloud/catalog/desktop.html), [AutoCAD][autocad], [Winzip][winzip], ... que igualmente al _crackearlos_ para usarlos después de su periodo de prueba, con la que la seguridad de los sistemas Windows se ve comprometida. Para cada uno de estos programas hay otros [alternativos con licencias de software libre][alternativeto] mejores o las suficientes funciones para la mayoría de usuarios. Los juegos también son muy pirateados y los _cracks_ usados también pueden contener funciones maliciosas y es otra fuente de entrada para comprometer la seguridad.

Con la cuota de uso que tiene Windows serán muchos usuarios con muchos conocimientos que lo usan pero es mayor el número de sus usuarios que tienen pocos conocimientos informáticos y que a la mayoría les vino con el ordenador preinstalado con [el impuesto Windows][elblogdepicodev-57] con lo que la seguridad de los sistemas Windows queda inutilizada. Algunas páginas de reputación dudosa muestran mensajes o correos electrónicos fraudulentos contienen _banners_ advirtiendo que se debe descargar y ejecutar un programa, un usuario con conocimientos simplemente los ignoraría pero algunos usuarios sin conocimientos pueden hacerles caso. E incluso los usuarios con conocimientos si no usan el software con su licencia y usan activadores pueden comprometer la seguridad de sus sistemas.

Descargar y ejecutar un programa en GNU/Linux de una fuente externa a los repositorios oficiales igualmente puede comprometer la seguridad pero dado que todo el software normalmente se encuentra en los repositorios no suele haber necesidad. Sin embargo, también hay que tener precauciones de _scritps_ como estos dos que pueden destruir de forma catastrófica un sistema GNU/Linux.

**ADVERTENCIA: no los ejecutes!**. El primero elimina todos los archivos del sistema y el segundo por mucho que parezcan unos extraños inocentes emoticonos crea procesos hasta que agota los recursos del sistema. Un usuario de GNU/Linux precavido y con conocimientos antes revisaría el contenido de cualquier _script_ o binario ejecutable y no ejecutaría nada en caso de duda.

{{< code file="nuke.sh" language="bash" options="" >}}

Dicho lo cual, tanto GNU/Linux y Windows tendrán un nivel de seguridad no tan diferente bien configurados pero el hecho de que los primeros normalmente se basan en software libre, usan repositorios de software confiables, se mantienen siempre actualizados y más rápidamente (al no suponer un coste en nuevas licencias de Windows ni tiene una fecha de expiración del soporte como Windows XP, Vista o Windows 7), se evitan usar activadores, el código fuente está disponible para cualquiera que quiera verlo, la seguridad es auditable y si contuviese alguna función maliciosa podría ser descubierta con mayor facilidad, junto con que los usuarios de GNU/Linux tienen de media más conocimientos que los usuarios Windows, es una plataforma minoritaria en cuota de uso, más fragmentada en diferentes distribuciones y por tanto menos atractiva para atacar hace que GNU/Linux a nivel de usuario tenga menos problemas de seguridad.

{{% /post %}}
