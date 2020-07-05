#!/usr/bin/env bash
set -e

#for f in static/assets/images/logotypes/*.svg; do convert -size 1200x1200 -resize 750x750 "$f" "static/assets/images/logotypes/$(basename ${f%.*}).png"; done;
#for f in static/assets/images/logotypes/*.svg; do convert -size 1200x1200 -resize 1200x1200 "$f" "static/assets/images/structured-data/$(basename ${f%.*})-1200.png"; done;
#for f in *.svg; do inkscape -w 750 "$f" --export-background white --export-background-opacity 1 --export-type png --export-filename "$(basename ${f%.*})-750.png"; done;
for f in static/assets/images/logotypes/*.svg; do inkscape -w 750 "$f" --export-background white --export-background-opacity 1 --export-type png --export-filename "static/assets/images/structured-data/$(basename ${f%.*})-750.png"; done;
