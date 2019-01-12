$ ffmpeg -i input.mkv -c:v mpeg2video -c:a libmp3lame -b:v 3500K -b:a 192K output.mpg
$ ffmpeg -i input.mkv -c:v mpeg1video -c:a libmp3lame -b:v 3500K -b:a 192K output.mpg
$ ffmpeg -i input.mkv -c:v mpeg4 -c:a libmp3lame -b:v 3500k -b:a 192k output.avi
$ ffmpeg -i input.mkv -c:v libx264 -c:a ac3 -b:v 3500k -b:a 192k output.mp4
$ ffmpeg -i input.mkv -f avi -tag:v DIVX -c:v libxvid -b:v 1800k -c:a libmp3lame -b:a 192k -vf scale=720x406,setdar=16:9 output.avi
$ ffmpeg -i input.mkv -c:v libvpx -c:a libvorbis -b:v 3500K -b:a 192K output.webm
$ #cambiar de contenedor
$ ffmpeg -i input.mkv -c:v copy -c:a copy -b:v 3500K -b:a 192K output.mpg