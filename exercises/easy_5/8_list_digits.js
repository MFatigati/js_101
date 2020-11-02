/* Write a function that takes one argument, a positive integer, and 
returns a list of the digits in the number.

P
  I
    positive integer
  O
    array of all the individual digits in the original integer, in order
  R
E
  see below
D
  string to array
A
  create empty array
  convert integer to string
  iterate over each element in the string
  coerce each element back to number
  push each element onto empty array
  return array

 */

/* function digitList(integer) {
  let finalArr = [];
  let strInt = integer.toString();

  for (let i = 0; i < strInt.length; i ++) {
    finalArr.push(Number(strInt[i]));
  }

  return finalArr;
} */

// original above, refactoring using map below;

function digitList(integer) {
  return String(integer).split("").map(x => Number(x));
}




console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]