#!/usr/bin/env bash

./node_modules/npm-check-updates/bin/ncu -u
npm install
npm audit fix
