$ ffmpeg -i input.mkv -vn -acodec libmp3lame -b:a 128K output.mp3
$ ffmpeg -i input.mkv -vn -acodec libvorbis -b:a 128K output.ogg