#!/usr/bin/env bash
set -e

(cd deploy/ && git pull)
./generate-styles.sh
#https://github.com/gohugoio/hugo/issues/6699
#hugo --minify
hugo --destination="deploy"
# Renombrado URLs absolutas en feeds
find ./deploy -type f -name "index.xml" -exec sed -i 's|\"/blog-bitix/|\"https://picodotdev.github.io/blog-bitix/|g' {} +
find ./deploy -type f -name "index.xml" -exec sed -i 's|\"https://picodotdev.github.io/blog-bitix/blog-bitix/|\"https://picodotdev.github.io/blog-bitix/|g' {} +
# Sustitución etiquetas (arregle de output formas hugo)
find ./deploy -type f -name "index.xml" -exec sed -i -r -e 's|<amp-img|<img|g' {} +
find ./deploy -type f -name "index.xml" -exec sed -i -r -e 's|<amp-iframe|<iframe|g' {} +
find ./deploy -type f -name "index.xml" -exec sed -i -r -e 's|</amp-img>||g' {} +
find ./deploy -type f -name "index.xml" -exec sed -i -r -e 's|</amp-iframe>||g' {} +
# Soporte para compatibilidad de feeds antiguos
cp deploy/index.xml deploy/atom.xml
mkdir -p deploy/categories/planeta-codigo/
cp deploy/tags/planeta-codigo/index.xml deploy/categories/planeta-codigo/atom.xml
