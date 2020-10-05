// ask the user for the first number
// ask the user for the second number
// ask the user for an operation to perform on both numbers
// perform the operation on the two numbers
// print result to terminal

const rlSync = require('readline-sync');


console.log('Welcome to Calculator!');
let number1 = rlSync.question("What's the first number? ");
let number2 = rlSync.question("What's the second number? ");

console.log('What operation would you like to perform?\n1) Add \n2) Subtract \n3) Multiply \n4) Divide')
let operation = rlSync.question();

let output;
if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = number1 - number2; // only need to explicitly coerce numbers for addition
} else if (operation === '3') {
  output = number1 * number2;
} else if (operation === '4') {
  output = number1 / number2;
}


console.log(`The result is: ${output}`);

