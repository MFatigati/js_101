/*
Write a function that computes the sum of all numbers between 1 and some other
number, inclusive, that are multiples of 3 or 5. For instance, if the supplied 
number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

P
  Input
    -integer greater than 1
  Output
    -sum of all numbers between one and the inputm that are multiples of 3 or 5
  Rules
    -multiples should not repeat
    -include 3 and 5
    -include the input number if it is a multiple of 3 or 5
E
10 => 3 + 5 + 6 + 9 + 10 => 33

D
use an array to store multiples before adding them up

A
-Create an array with the input integer in it.
-Iterate through all the multiples of 3 up to the input integer, pushing them onto the array.
-Interate through all the multiples of 5 up to the inpute integer, pushing them onto the array
if they are not already there.
-reduce the array to a sum and return the sum


function multiSum(num) {
let arr = [];
for (let count = 3; count <= num; count += 3) {
  arr.push(count);
}
for (let count = 5; count <= num; count += 5) {
  if (arr.indexOf(count) === -1) {
  arr.push(count);
  }
 }
console.log(arr);
return arr.reduce((acc, x) => acc + x);
} */

// my original solution above. Attempt to copy LS solution using helper functions below.

function isMultiple(number, divisor) {
  if (number % divisor === 0) {
    return true;
  }
}

function multiSum(num) {
  let sum = 0;
  for (let count = 3; count <= num; count += 1) {
    if (isMultiple(count, 3)||isMultiple(count, 5)) {
      sum += count;
    }

  }
  return sum;

}




console.log(
multiSum(3),       // 3
multiSum(5),       // 8
multiSum(10),      // 33
multiSum(1000));    // 234168