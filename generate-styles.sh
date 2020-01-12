#!/usr/bin/env bash
set -e

npm run less-main
npm run less-main-cookieconsent
hugo gen chromastyles --style=github > themes/bitix/static/assets/css/syntax.css

cp themes/bitix/static/assets/css/syntax.css themes/bitix/layouts/partials/style-syntax.amp.css
cp themes/bitix/static/assets/css/main.css themes/bitix/layouts/partials/style-main.amp.css

npm run minify-amp