BASENAME="apache-tapestry"
ARTWORK_FILE="$BASENAME-artwork.svg"

$ inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightObject --export-background white -w 800 --export-type png --export-filename "$BASENAME-icontext-800-light.png"
$ inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkObject --export-background black -w 800 --export-type png --export-filename "$BASENAME-icontext-800-dark.png"
$ inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightIconObject --export-background white -w 800 --export-type png --export-filename "$BASENAME-icon-800-light.png"
$ inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkIconObject --export-background black -w 800 --export-type png --export-filename "$BASENAME-icon-800-dark.png"
$ inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id lightTextObject --export-background white -w 800 --export-type png --export-filename "$BASENAME-text-800-light.png"
$ inkscape --without-gui "$ARTWORK_FILE" --export-id-only --export-id darkTextObject --export-background black -w 800 --export-type png --export-filename "$BASENAME-text-800-dark.png"