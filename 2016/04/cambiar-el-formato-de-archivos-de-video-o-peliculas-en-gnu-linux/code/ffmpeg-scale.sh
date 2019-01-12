$ ffmpeg -i input.mkv -c:v mpeg2video -c:a libmp3lame -b:v 2500K -b:a 192K -vf scale=720x406,setdar=16:9 output.mpg
