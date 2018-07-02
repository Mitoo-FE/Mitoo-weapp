#!/bin/sh
sh merge_readme.sh
npm run prod
cp README.MD ./dist/README.md
