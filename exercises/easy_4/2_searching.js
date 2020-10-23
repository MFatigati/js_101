let rlSync = require('readline-sync');

console.log("Please enter 6 numbers, separated by commas: ")
let allSix = rlSync.prompt();

let numbersArray = allSix.split(",")
let sixthNum = numbersArray[5].trim();
let fiveArray = [];
let i = 0;

while (i < 5) {
  fiveArray.push(numbersArray[i].trim())
  i += 1;
}

if (fiveArray.some(x => sixthNum < x)) {
  console.log(
    `The number ${sixthNum} is less than some number in ${fiveArray.join(", ")}`
  )
} else {
  console.log(
    `The number ${sixthNum} is not less than any number in ${fiveArray.join(", ")}`
  )
}

// if looking to satisfy some condition, iterate over the fiveArray, checking the condition each time
// if true, return one log, if false, return another log