$ convert -colorspace Gray -strip 201607.jpg 201607-grayscale.jpg

$ for f in *.png; do convert -colorspace Gray -strip "$f" -set filename:f "%t-grayscale.%e" %[filename:f]; done;
$ for f in *.jpg; do convert -colorspace Gray -strip "$f" -set filename:f "%t-grayscale.%e" %[filename:f]; done;