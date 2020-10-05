// ask the user for the first number
// ask the user for the second number
// ask the user for an operation to perform on both numbers
// perform the operation on the two numbers
// print result to terminal

const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

prompt("What's the first number?");
let number1 = rlSync.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = rlSync.question();
}

prompt("What's the second number?");
let number2 = rlSync.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = rlSync.question();
}

console.log('What operation would you like to perform?\n1) Add \n2) Subtract \n3) Multiply \n4) Divide');
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = rlSync.question();
}


let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = number1 - number2; // only need to explicitly coerce numbers for addition
    break;
  case '3':
    output = number1 * number2;
    break;
  case '4':
    output = number1 / number2;
    break;
}


console.log(`The result is: ${output}`);


