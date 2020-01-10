#!/usr/bin/env bash
cat links.txt | sort -R | head -3 | while read -r LINE
do
  NAME=`echo $LINE | cut -d \, -f 1`
  URL=`echo $LINE | cut -d \, -f 2`
  firefox -P headless -headless --screenshot "$NAME.png" $URL --window-size=1920
done