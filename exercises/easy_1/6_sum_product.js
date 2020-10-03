/* Write a program that asks the user to enter an integer greater than 0, then asks
whether the user wants to determine the sum or the product of all numbers between 1
and the entered integer, inclusive.

P
  Input
    -request and integer and choose and operation
    -Please enter an integer greater than 0:
    -Enter "s" to compute the sum, or "p" to compute the product. s

  Output
    -the sum or product of the integers between 1 and the number as
    part of the following string...
    -The sum of the integers between 1 and 5 is 15.
  Rules
    -what happens if they don't enter an integer greater than 0?
E
  5, s => 15
    1 + 2 + 3 + 4 + 5;
  6, p => 720
    1 * 2 * 3 * 4 * 5 * 6;

D
Operations will be numeric.
Asking for input will require coercing answer to number.

A
Request the number and the operation to be performed, storing these answers as variables.
Declare a result variable. If sum is desired, then iterate from one to the number, updating
the result variable each time. If product is desired, mutatis mutandis. Log result at the
end of each if statement.

*/
/*
let rlSync = require("readline-sync");

let num = Number(rlSync.question(`Please enter an integer greater than 0: `));
while (num !== num) {
  num = Number(rlSync.question(`Please enter an integer greater than 0: `));
}

let operation = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product: `);
while (operation !== "s" && operation !== "p") {
  operation = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product: `);
}

let count = 1;

if (operation === "s") {
  let result = 0;
  while (count <= num) {
    result = result + count;
    count += 1;
  }
  console.log(`The sum of the integers between 1 and ${num} is ${result}.`)
}

if (operation === "p") {
  let result = 1;
  while (count <= num) {
    result = result * count;
    count += 1;
  }
  console.log(`The product of the integers between 1 and ${num} is ${result}.`)
} */

let rlSync = require("readline-sync");

let arr = JSON.parse(rlSync.question(`Please enter an array of integers, all of which are greater than 0: `));
console.log(typeof arr);
while (Array.isArray(arr) === false) {
  arr = JSON.parse(rlSync.question(`Please enter an array of integers, all of which are greater than 0: `));
}

let operation = rlSync.question(`Enter "s" to compute the sum of these integers, or "p" to compute the product: `);
while (operation !== "s" && operation !== "p") {
  operation = rlSync.question(`Enter "s" to compute the sum of these integers, or "p" to compute the product: `);
}

if (operation === "s") {
  let result = arr.reduce((acc, x) => acc += x)
  console.log(`The sum of the integers in the array [${arr}] is ${result}.`)
}

if (operation === "p") {
  let result = arr.reduce((acc, x) => acc *= x)
  console.log(`The product of the integers in the array [${arr}] is ${result}.`)
}

// found JSON.parse() as a way of turning the string input into an array, but I don't understand it.