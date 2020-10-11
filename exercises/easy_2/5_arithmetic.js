/*

P
  Input
    -two positive integers
  Output
    -print results of the following operations on those two integers
      -addition
      -subtraction
      -product
      -quotient
      -remainder
      -power
  Rules
    -
E
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103

D
just numbers and code logic

A
require readline sync
prompt user for two integers, and store in variables
store the results of the above equations in variables.
use the variables in a template literal.

*/

let rlSync = require('readline-sync');

let num1 = Number(rlSync.question("Please enter the first positive integer: "));
let num2 = Number(rlSync.question("Please enter the second positive integer: "));

/*let resultAdd = num1 + num2;
let resultSub = num1 - num2;
let resultProduct = num1 * num2;
let resultQuotient = num1 / num2;
let resultRemainder = num1 % num2;
let resultPower = num1 ** num2;*/

console.log(`
${num1} + ${num2} = ${num1 + num2}
${num1} - ${num2} = ${num1 - num2}
${num1} * ${num2} = ${num1 * num2}
${num1} / ${num2} = ${Math.floor(num1 / num2)}
${num1} % ${num2} = ${num1 % num2}
${num1} ** ${num2} = ${Math.pow(num1, num2)}`
)