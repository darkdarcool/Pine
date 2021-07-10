var getFile = require('./finder/finder.js');
var exec = require('child_process').exec;
var chalk = require('chalk');

function makePine() {
  var data = getFile();
  var name = data.name;
  if (process.argv[2] == "run") {
    if (process.argv[3] != undefined) {
      if (eval(`data.pines.${process.argv[3]}`) == undefined) {
        console.log("Could not find task");
        process.exit(0);
      }
      else {
        console.log(chalk.blue.bold(`> Running the `) +process.argv[3] + chalk.blue.bold(` pine in Pinefile '`) + name + chalk.blue.bold("'"));
        var toBash = eval(`data.pines.${process.argv[3]}`);
        console.log(chalk.blue.bold(`> Running: <`) + `${toBash}` + chalk.blue.bold('>'));
        console.log();
        exec(toBash, function (err, stdout, stderr) {
          if (err) {
            console.log(err);
          }
          else {
            if (stderr) {
              console.log(stderr);
            }
            else {
              console.log(stdout);
            }
          }
        });
      }
    }
  }
}
module.exports = makePine;
