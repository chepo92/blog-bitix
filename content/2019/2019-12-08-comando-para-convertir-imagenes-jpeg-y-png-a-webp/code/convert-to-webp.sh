$ for f in *.png; do convert -define webp:lossless=true "$f" "${f%.*}.webp"; done;
$ for f in *.jpg; do convert -define webp:lossless=false "$f" "${f%.*}.webp"; done;