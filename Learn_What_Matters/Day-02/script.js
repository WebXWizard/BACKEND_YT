/* Install, Usage and Print Results */

var oneLinerJoke = require('one-liner-joke');

var figlet = require('figlet')

console.log(oneLinerJoke.getRandomJoke())

figlet("Sheryians !!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
