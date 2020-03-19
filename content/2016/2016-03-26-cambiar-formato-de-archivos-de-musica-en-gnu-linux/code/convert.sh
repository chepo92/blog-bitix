$ ffmpeg -i entrada.wav -codec:a libmp3lame salida.mp3
$ ffmpeg -i entrada.wav -codec:a libvorbis salida.ogg
$ ffmpeg -i entrada.mp3 -codec:a libvorbis salida.ogg
$ ffmpeg -i entrada.mp3 -codec:a libmp3lame -b:a 128k salida.mp3