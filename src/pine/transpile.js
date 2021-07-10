var getData = require('./finder/finder.js')
var chalk = require('chalk')
var fs = require('fs')
function write() {
  toTranspile = `{
  "name": "${data.name}",
  "author": "${data.author}",
  "version": "${data.version}",
  "main": "${data.entry}"
}`
  fs.writeFile('package.json', toTranspile, err => {
    if (err) {
      console.log(chalk.red.bold("ERROR"))
      process.exit(0)
    }
    console.log(chalk.green.bold("Succeded!"));
  });
}
function transpile() {
  data = getData();
  write()
}
module.exports = transpile;