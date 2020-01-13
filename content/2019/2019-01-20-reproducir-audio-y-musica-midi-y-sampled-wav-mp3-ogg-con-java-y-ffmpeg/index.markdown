---
pid: 375
type: "post"
title: "Reproducir audio y música MIDI y sampled (wav, mp3, ogg) con Java y FFmpeg"
url: "/2019/01/reproducir-audio-y-musica-midi-y-sampled-wav-mp3-ogg-con-java-y-ffmpeg/"
date: 2019-01-21T12:00:00+01:00
updated: 2019-12-08T02:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" image2="ffmpeg.svg" title2="FFmpeg" width2="400" >}}

En la API de Java en el paquete [javax.sound.sampled](javadoc11:java.desktop/javax/sound/sampled/package-summary.html) hay unas pocas clases que permiten reproducir archivos de música o sonidos y en el paquete [java.sound.midi](javadoc11:java.desktop/javax/sound/midi/package-summary.html) contiene clases para la música o sonidos digitales o sintetizados. Los tipos de archivos de música o sonidos soportados son _wav, au, aif_ para los archivos _sampled_, y archivos _midi_ para los digitales. Nativamente Java con las clases incluidas en el JDK no puede reproducir varios formatos de archivo de sonido populares como _mp3_ u _ogg_.

Como Java no soporta muchos tipos de archivos para reproducir los no soportados hay que hacer una conversión a alguno de los si soportados, por ejemplo de _mp3_ a _wav_. [FFmpeg][ffmpeg] es un programa con el que se pueden hacer [conversiones de archivos de sonido][blogbitix-134] y [recodificaciones de archivos de vídeo][blogbitix-135] que junto con la posibilidad de [invocar desde Java un proceso del sistema][blogbitix-132] habilita reproducir archivos _mp3_ u _ogg_ desde Java.

La clase principal de la API de sonido es [AudioSystem](javadoc11:java.desktop/javax/sound/sampled/AudioSystem.html) para los archivos _sampled_ y [MidiSystem](javadoc11:java.desktop/javax/sound/midi/MidiSystem.html) para los archivos _midi_, con los métodos [getAudioFileTypes()](javadoc11:java.desktop/javax/sound/sampled/AudioSystem.html#getAudioFileTypes()) y [getMidiFileTypes()](javadoc11:java.desktop/javax/sound/midi/MidiSystem.html#getMidiFileTypes()) se obtienen los archivos de audio soportados.

{{< code file="Main-1.java" language="java" options="" >}}
{{< code file="System.out-1" language="plaintext" options="" >}}

Para reproducir un archivo _midi_ hay que usar las clases [MidiSystem](javadoc11:java.desktop/javax/sound/midi/MidiSystem.html), [Sequence](javadoc11:java.desktop/javax/sound/midi/Sequence.html) y [Sequencer](javadoc11:java.desktop/javax/sound/midi/Sequencer.html).

{{< code file="Main-2.java" language="java" options="" >}}
{{< code file="System.out-2" language="plaintext" options="" >}}

Para reproducir un archivo _wav_ hay que usar las clases [AudioSystem](javadoc11:java.desktop/javax/sound/sampled/AudioSystem.html), [AudioInputStream](javadoc11:java.desktop/javax/sound/sampled/AudioInputStream.html) y [Clip](javadoc11:java.desktop/javax/sound/sampled/Clip.html).

{{< code file="Main-3.java" language="java" options="" >}}
{{< code file="System.out-3" language="plaintext" options="" >}}

Para reproducir un archivo _mp3_ o _ogg_ hay que convertirlo al formato _wav_, con el comando _FFmpeg_ y usando una tubería leyendo de su salida resultado de la conversión con un [InputStream](javadoc11:java.base/java/io/InputStream.html). En el siguiente ejemplo se realiza una conversión de un _mp3_ a _wav_ con el formato 44100Hz, 2 canales y de 16 bits con un proceso de _FFmpeg_. Para reproducir un archivo _ogg_ el código es similar.

{{< code file="Main-4.java" language="java" options="" >}}
{{< code file="System.out-4" language="plaintext" options="" >}}

{{< code file="Main-5.java" language="java" options="" >}}
{{< code file="System.out-5" language="plaintext" options="" >}}

En todos los casos como se muestra en el código es posible también conocer la duración de un archivo de sonido. En realidad al usar _FFmpeg_ cualquier tipo de archivo de sonido que soporte la conversión a _wav_ es reproducible con Java, y no son pocos los soportados incluso muchos no tan populares como el _mp3_ o _ogg_.

{{< code file="ffmpeg.sh" language="bash" options="" >}}

{{% sourcecode git="blog-ejemplos/tree/master/JavaSound" command="./gradlew run --args=\"midi\", ./gradlew run --args=\"mp3\", ./gradlew run --args=\"ogg\"" %}}

{{< reference >}}
* [Tutorial Java Sound](https://docs.oracle.com/javase/tutorial/sound/sampled-overview.html)
* [Java Media Framework](https://www.oracle.com/technetwork/java/javase/tech/index-jsp-140239.html)
{{< /reference >}}

{{% /post %}}
