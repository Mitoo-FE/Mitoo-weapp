cat init.md > README.md
echo "\n\n\n\n## 具体组件\n\n\n" >> README.md
ls src | awk '{print "cat src/" $1"/README.md"}' | sh >> README.md
cp README.md dist/
