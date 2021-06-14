var fs = require('fs');
var chalk = require('chalk')
function isEmptyObject(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}
function getsData() {
  try {
    var data = fs.readFileSync('Pinefile','utf8');
  } // Read file
  catch {
    console.log(chalk.red.bold("Could not locate Pinefile"));
    process.exit(0);
  }
  try {
    var data = JSON.stringify(data); // Make it valid to parsing
    var file = JSON.parse(data); // Parse it once
    var data = JSON.parse(file); // Parse it again, didn't work with one for some reason
    if (data.name == undefined) {
      console.log(chalk.red.bold("Name cannot be found"));
      process.exit(0)
    }
    if (data.pines == undefined) {
      console.log(chalk.red.bold("No pines found"));
      process.exit(0);
    }
    if (isEmptyObject(data.pines) == true) {
      console.log(chalk.red.bold("Pine list is empty"));
      process.exit(0);
    }
    return data; // return it!
  }
  catch {
    console.log(chalk.red.bold("Invalid JSON"));
  }
}
module.exports = getsData;