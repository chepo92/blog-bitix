#!/usr/bin/env bash
set -e

npm run less
hugo --minify --destination="public" --source="." --cleanDestinationDir
# Renombrado assets en feeds
find ./public -type f -name "index.xml" -exec sed -i 's/\&\#34;assets\//\&\#34;https:\/\/picodotdev.github.io\/blog-bitix\/assets\//g' {} +
# Soporte para compatibilidad de feeds antiguos
cp public/index.xml deploy/atom.xml
mkdir -p public/categories/planeta-codigo/
cp public/tags/planeta-codigo/index.xml public/categories/planeta-codigo/atom.xml
