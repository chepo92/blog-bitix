$ convert -resize 300x200 201607.jpg -strip 201607-thumb.jpg

$ for f in *.jpg; do convert -resize 300x200 "$f" -strip -set filename:f "%t-thumb.%e" "%[filename:f]"; done;
$ for f in *.png; do convert -resize 300x200 "$f" -strip -set filename:f "%t-thumb.%e" "%[filename:f]"; done;

$ for f in *.jpg; do convert -resize 650x450 "$f" -strip -set filename:f "%t-thumb.%e" "%[filename:f]"; done;
$ for f in *.png; do convert -resize 650x4500 "$f" -strip -set filename:f "%t-thumb.%e" "%[filename:f]"; done;