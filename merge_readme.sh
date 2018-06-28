cat init.md > README.md
ls src | awk '{print "cat src/" $1"/README.md"}' | sh >> README.md
