$ for f in *.wav; do ffmpeg -i "$f" -codec:a libmp3lame "${f%.wav}.mp3"; done;
$ for f in *.wav; do ffmpeg -i "$f" -codec:a libvorbis "${f%.wav}.ogg"; done;
$ for f in *.mp3; do ffmpeg -i "$f" -codec:a libvorbis "${f%.mp3}.ogg"; done;