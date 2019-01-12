$ find ./ -name "*.wav" -exec ffmpeg -i {} -acodec libmp3lame "{}.mp3" \; -exec rename .wav.mp3 .mp3 "{}.mp3" \;
$ find ./ -name "*.wav" -exec ffmpeg -i {} -acodec libvorbis "{}.ogg" \; -exec rename .wav.ogg .ogg "{}.ogg" \;
$ find ./ -name "*.mp3" -exec ffmpeg -i {} -acodec libvorbis "{}.ogg" \; -exec rename .mp3.ogg .ogg "{}.ogg" \;