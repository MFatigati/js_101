let rlSync = require('readline-sync');

let today = new Date();
let year = today.getFullYear();

console.log("What is your age? ");
let currentAge = rlSync.prompt();
console.log("At what age would you like to retire? ");
let desiredRetireAge = rlSync.prompt();

let remainingWorkYears = desiredRetireAge - currentAge;

console.log(
`It's ${year}. You will retire in ${year + remainingWorkYears}.
You have only ${remainingWorkYears} years of work to go!`
)