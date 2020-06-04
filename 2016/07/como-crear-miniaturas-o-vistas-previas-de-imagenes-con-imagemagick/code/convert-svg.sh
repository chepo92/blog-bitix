$ for f in *.svg; do convert -size 750x750 -resize 750x750 "$f" "${f%.*}.jpg"; done;
$ for f in *.svg; do convert -size 750x750 -resize 750x750 "$f" "${f%.*}.png"; done;