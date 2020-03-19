---
pid: 134
type: "post"
title: "Cambiar el formato de archivos de música o audio en GNU/Linux"
url: "/2016/03/cambiar-el-formato-de-archivos-de-musica-o-audio-en-gnu-linux/"
aliases: ["/2016/03/cambiar-el-formato-de-archivos-de-musica-en-gnu-linux/"]
date: 2016-03-26T11:00:00+01:00
updated: 2016-04-03T11:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:ffmpeg.svg"
tags: ["gnu-linux", "software-libre"]
---

{{% post %}}

{{< logotype image1="ffmpeg.svg" title1="FFmpeg" width1="400" image2="linux.svg" >}}

En algún momento puede que necesitemos o queramos convertir archivos de audio a otro formato individualmente o de forma masiva. Por ejemplo convertir archivos de audio del formato de música más utilizado [mp3](https://es.wikipedia.org/wiki/MP3) al formato libre de patentes [ogg](https://es.wikipedia.org/wiki/Ogg), o de mp3 a [aac](https://es.wikipedia.org/wiki/Advanced_Audio_Coding) o desde otros formatos y a otros formatos como [wav](https://es.wikipedia.org/wiki/Waveform_Audio_Format) o [ac3](https://es.wikipedia.org/wiki/Dolby_Digital_%28AC-3%29). Algunos formatos ofrecen mejor compresión y ocupan menos espacio con la misma calidad y este puede ser un motivo por que queramos hacer la conversión. Aún así hay que tener en cuenta que las conversiones entre formatos con pérdida como de mp3 a ogg aún ocupando menos (o más) la calidad puede empeorar, aunque para un oído no entrenado será imperceptible, para convertir a un formato con pérdida es mejor partir de un archivo sin pérdida como wav.

Si extraemos las canciones de un CD de música dependiendo del programa obtendremos los archivos en formato wav o quizá directamente en mp3, si no las queremos en mp3 para no perder calidad es mejor extraer las canciones en el formato sin pérdida wav y luego realizar la conversión al formato que queramos. En este artículo explicaré como de forma sencilla desde la línea de comandos y con [FFmpeg][ffmpeg] podemos hacer las conversiones, de forma masiva para múltiples archivos y de forma recursiva en múltiples directorios queremos cambiar el formato de una biblioteca de música entera. Hay páginas que sin necesidad de tener instalar nada en el equipo salvo un navegador ofrecen como servicio hacer las conversiones pero hay que hacerlo para cada archivo de forma individual y es más lento por tener que realizar la transmisión a través de internet de algunos pocos megas.

La herramienta FFmpeg nos permite hacer las conversiones, por ejemplo para convertir de wav a mp3, de wav a ogg o de mp3 a ogg  ejecutaríamos los siguientes comandos. El último de ellos permite cambiar el _bitrate_ para que ocupen menos, se pierde algo de calidad pero hay que tener buen oído para apreciar significativamente la diferencia entre 320k y 128k, entre estas dos calidades la reducción de tamaño llega a la mitad.

{{< code file="convert.sh" language="bash" options="" >}}

Con la opción _-i_ indicamos el archivo a convertir, con la opción _-acodec_ indicamos el códec a usar para la conversión, en este caso _libmp3lame_ para mp3, _libvorbis_ para ogg y el último parámetro para indicar el archivo de salida. Para convertir a otros formatos los códecs que debemos usar son:

* mp3: libmp3lame
* ogg: libvorbis
* acc: libfaac
* ac3: ac3

Para hacer la conversión no de un archivo individual sino de forma masiva o múltiple que en los casos anteriores usamos:

{{< code file="masive-convert.sh" language="bash" options="" >}}

Para hacer un conversión masiva, recursiva y en múltiples directorios usamos:

{{< code file="recursive-convert.sh" language="bash" options="" >}}

En la [documentación de FFmpeg](https://trac.ffmpeg.org/wiki) podemos encontrar más parámetros al hacer las conversiones como modificar la calidad, la tasa de bits y por tanto el tamaño del archivo o extraer ciertas partes de un audio o canción. FFmpeg no sirve solo para archivos de sonido o música también sirve para [realizar conversiones entre formatos de archivos de vídeo][blogbitix-135] o para extraer el audio de un vídeo pero eso quizá sea contenido para otro artículo.

Si preferimos realizar la conversión mediante una interfaz gráfica podemos usar VLC que también nos servirá para hacer la conversión tanto en Windows como en Mac OS además de GNU/Linux. Primeramente en el menu _Archivo_ _>_ _Convertir_ añadimos el archivo a convertir a la lista y pulsamos botón _Convertir_. En el siguiente diálogo seleccionaremos el perfil de salida, en este caso _Audio - Vorbis (OGG)_ y el nombre del archivo de salida, editando el perfil tendremos opción de modificar la tasa de bits del audio, además de la resolución y la posibilidad de aplicar algunos filtros como el normalizador de volumen.

{{< image
    gallery="true"
    image1="image:vlc-input.png" optionsthumb1="300x200" title1="Conversión audio de MP3 a OGG"
    image2="image:vlc-codec.png" optionsthumb2="300x200" title2="Selección de códec" >}}
{{< image
    gallery="true"
    image1="image:vlc-output.png" optionsthumb1="300x200" title1="Salida de conversión" >}}

{{< reference >}}
* [Documentación de FFmpeg](https://trac.ffmpeg.org/wiki)
* [FFmpeg audio format conversions](http://linuxconfig.org/ffmpeg-audio-format-conversions)
{{< /reference >}}

{{% /post %}}
