$ ffmpeg -i video.mkv -map 0:0 -map 0:2 -acodec copy -vcodec copy newvideo.mkv
