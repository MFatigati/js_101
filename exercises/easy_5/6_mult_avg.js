/* Write a function that takes an array of integers as input, multiplies 
all of the integers together, divides the result by the number of entries 
in the array, and returns the result as a string with the value rounded 
to three decimal places.

P
  I
    array of integers
  O
    string of a value, rounded to three dec. places
  R
    mult all integers, divide by total number of integers
E
  see below
D
  just numbers and code logic
A
  For each element, multiply it by the result of multipling the previous elements
  Divide total by length minus one
  Convert result to string with 3 decimal places

 */

function multiplicativeAverage(arr) {
  return (arr.reduce((acc, x) => acc * x)/(arr.length)).toFixed(3);
}



console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"