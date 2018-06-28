cat init.md > README.md
echo "\n\n" >> README.md
ls src | awk '{print "cat src/" $1"/README.md"}' | sh >> README.md
