#!/bin/sh
sh merge_readme.sh
npm run prod
cp init.md ./dist/README.md
