#!/usr/bin/env bash
set -e

DIRECTORY=`dirname $0`
BASENAME="apache-tapestry"
ARTWORK_DIR="artwork"
ARTWORK_FILE="$ARTWORK_DIR/$BASENAME-artwork.svg"

cd $DIRECTORY
rm -R $ARTWORK_DIR
mkdir -p $ARTWORK_DIR

cp "$BASENAME.svg" "$ARTWORK_FILE"

inkscape --verb LayerShowAll --verb FileSave --verb FileQuit "$ARTWORK_FILE"

inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightObject -w 300 --export-png="$ARTWORK_DIR/$BASENAME-icontext-300.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightObject -w 600 --export-png="$ARTWORK_DIR/$BASENAME-icontext-600.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightObject -w 800 --export-png="$ARTWORK_DIR/$BASENAME-icontext-800.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightObject -w 1200 --export-png="$ARTWORK_DIR/$BASENAME-icontext-1200.png"

inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightObject --export-background white -w 300 --export-png="$ARTWORK_DIR/$BASENAME-icontext-300-light.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightObject --export-background white -w 600 --export-png="$ARTWORK_DIR/$BASENAME-icontext-600-light.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightObject --export-background white -w 800 --export-png="$ARTWORK_DIR/$BASENAME-icontext-800-light.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightObject --export-background white -w 1200 --export-png="$ARTWORK_DIR/$BASENAME-icontext-1200-light.png"

inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkObject --export-background black -w 300 --export-png="$ARTWORK_DIR/$BASENAME-icontext-300-dark.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkObject --export-background black -w 600 --export-png="$ARTWORK_DIR/$BASENAME-icontext-600-dark.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkObject --export-background black -w 800 --export-png="$ARTWORK_DIR/$BASENAME-icontext-800-dark.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkObject --export-background black -w 1200 --export-png="$ARTWORK_DIR/$BASENAME-icontext-1200-dark.png"

inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject -w 32 --export-png="$ARTWORK_DIR/$BASENAME-icon-32.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject -w 57 --export-png="$ARTWORK_DIR/$BASENAME-icon-57.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject -w 72 --export-png="$ARTWORK_DIR/$BASENAME-icon-72.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject -w 114 --export-png="$ARTWORK_DIR/$BASENAME-icon-114.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject -w 144 --export-png="$ARTWORK_DIR/$BASENAME-icon-144.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject -w 300 --export-png="$ARTWORK_DIR/$BASENAME-icon-300.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject -w 600 --export-png="$ARTWORK_DIR/$BASENAME-icon-600.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject -w 800 --export-png="$ARTWORK_DIR/$BASENAME-icon-800.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject -w 1200 --export-png="$ARTWORK_DIR/$BASENAME-icon-1200.png"

inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject --export-background white -w 32 --export-png="$ARTWORK_DIR/$BASENAME-icon-32-light.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject --export-background white -w 57 --export-png="$ARTWORK_DIR/$BASENAME-icon-57-light.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject --export-background white -w 72 --export-png="$ARTWORK_DIR/$BASENAME-icon-72-light.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject --export-background white -w 114 --export-png="$ARTWORK_DIR/$BASENAME-icon-114-light.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject --export-background white -w 144 --export-png="$ARTWORK_DIR/$BASENAME-icon-144-light.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject --export-background white -w 300 --export-png="$ARTWORK_DIR/$BASENAME-icon-300-light.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject --export-background white -w 600 --export-png="$ARTWORK_DIR/$BASENAME-icon-600-light.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject --export-background white -w 800 --export-png="$ARTWORK_DIR/$BASENAME-icon-800-light.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject --export-background white -w 1200 --export-png="$ARTWORK_DIR/$BASENAME-icon-1200-light.png"

inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkIconObject --export-background black -w 32 --export-png="$ARTWORK_DIR/$BASENAME-icon-32-dark.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkIconObject --export-background black -w 57 --export-png="$ARTWORK_DIR/$BASENAME-icon-57-dark.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkIconObject --export-background black -w 72 --export-png="$ARTWORK_DIR/$BASENAME-icon-72-dark.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkIconObject --export-background black -w 114 --export-png="$ARTWORK_DIR/$BASENAME-icon-114-dark.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkIconObject --export-background black -w 144 --export-png="$ARTWORK_DIR/$BASENAME-icon-144-dark.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkIconObject --export-background black -w 300 --export-png="$ARTWORK_DIR/$BASENAME-icon-300-dark.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkIconObject --export-background black -w 600 --export-png="$ARTWORK_DIR/$BASENAME-icon-600-dark.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkIconObject --export-background black -w 800 --export-png="$ARTWORK_DIR/$BASENAME-icon-800-dark.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkIconObject --export-background black -w 1200 --export-png="$ARTWORK_DIR/$BASENAME-icon-1200-dark.png"

#(cd $ARTWORK_DIR/ && for f in *.png; do convert -colorspace Gray -strip "$f" -set filename:f "%t-gray.%e" %[filename:f];  done;)

inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightTextObject -w 300 --export-png="$ARTWORK_DIR/$BASENAME-text-300.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightTextObject -w 600 --export-png="$ARTWORK_DIR/$BASENAME-text-600.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightTextObject -w 800 --export-png="$ARTWORK_DIR/$BASENAME-text-800.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightTextObject -w 1200 --export-png="$ARTWORK_DIR/$BASENAME-text-1200.png"

inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightTextObject --export-background white -w 300 --export-png="$ARTWORK_DIR/$BASENAME-text-300-light.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightTextObject --export-background white -w 600 --export-png="$ARTWORK_DIR/$BASENAME-text-600-light.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightTextObject --export-background white -w 800 --export-png="$ARTWORK_DIR/$BASENAME-text-800-light.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightTextObject --export-background white -w 1200 --export-png="$ARTWORK_DIR/$BASENAME-text-1200-light.png"

inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkTextObject --export-background black -w 300 --export-png="$ARTWORK_DIR/$BASENAME-text-300-dark.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkTextObject --export-background black -w 600 --export-png="$ARTWORK_DIR/$BASENAME-text-600-dark.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkTextObject --export-background black -w 800 --export-png="$ARTWORK_DIR/$BASENAME-text-800-dark.png"
inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkTextObject --export-background black -w 1200 --export-png="$ARTWORK_DIR/$BASENAME-text-1200-dark.png"

(cp "$ARTWORK_FILE" "$ARTWORK_DIR/$BASENAME-icon-light.svg" && inkscape "$ARTWORK_DIR/$BASENAME-icon-light.svg" --verb LayerHideAll --verb DialogLayers --verb LayerToggleHide --verb FitCanvasToDrawing --verb FileSave --verb FileQuit)
(cp "$ARTWORK_FILE" "$ARTWORK_DIR/$BASENAME-icon-dark.svg" && inkscape "$ARTWORK_DIR/$BASENAME-icon-dark.svg" --verb LayerHideAll --verb DialogLayers --verb LayerPrev --verb LayerToggleHide --verb FitCanvasToDrawing --verb FileSave --verb FileQuit)
(cp "$ARTWORK_FILE" "$ARTWORK_DIR/$BASENAME-text-light.svg" && inkscape "$ARTWORK_DIR/$BASENAME-text-light.svg" --verb LayerHideAll --verb DialogLayers --verb LayerPrev --verb LayerPrev --verb LayerToggleHide --verb EditDeselect --verb FitCanvasToDrawing --verb FileSave --verb FileQuit)
(cp "$ARTWORK_FILE" "$ARTWORK_DIR/$BASENAME-text-dark.svg" && inkscape "$ARTWORK_DIR/$BASENAME-text-dark.svg" --verb LayerHideAll --verb DialogLayers --verb LayerPrev --verb LayerPrev --verb LayerPrev --verb LayerToggleHide --verb FitCanvasToDrawing --verb FileSave --verb FileQuit)
(cp "$ARTWORK_FILE" "$ARTWORK_DIR/$BASENAME-icontext-light.svg" && inkscape "$ARTWORK_DIR/$BASENAME-icontext-light.svg" --verb LayerHideAll --verb DialogLayers --verb LayerPrev --verb LayerPrev --verb LayerPrev --verb LayerPrev --verb LayerToggleHide --verb FitCanvasToDrawing --verb FileSave --verb FileQuit)
(cp "$ARTWORK_FILE" "$ARTWORK_DIR/$BASENAME-icontext-dark.svg" && inkscape "$ARTWORK_DIR/$BASENAME-icontext-dark.svg" --verb LayerHideAll --verb DialogLayers --verb LayerPrev --verb LayerPrev --verb LayerPrev --verb LayerPrev --verb LayerPrev --verb LayerToggleHide --verb FitCanvasToDrawing --verb FileSave --verb FileQuit)

rm "$ARTWORK_FILE"
rm "$BASENAME-artwork.zip"

zip "$BASENAME-artwork.zip" ./generate-logotype-artwork.sh "$BASENAME.svg"
zip "$BASENAME-artwork.zip" -r $ARTWORK_DIR --include "*.png" --include "*.svg"