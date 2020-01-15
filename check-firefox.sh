#!/usr/bin/env bash
cat check-firefox-links.txt | while read -r LINE
do
  NAME=`echo $LINE | cut -d \, -f 1`
  URL=`echo $LINE | cut -d \, -f 2`
  firefox -P headless -headless --screenshot "$NAME.png" $URL --window-size=1920
done