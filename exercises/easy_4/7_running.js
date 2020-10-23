/* 
Write a function that takes an array of numbers, and returns an array 
with the same number of elements, with each element's value being the 
running total from the original array.

P
  I
    array of numbers
  O
    array of numbers
  R
    output array will have same number of elements as input array
    each element in output array will be a running total of values from original array
E
  see below
D
  keep it all in arrays
A
Create a new variable, set equal to an empty array.
iterate over each element of the input array
  push the sum of that element, plus the previous element of the original array, onto the new array
return new array.

*/
/*
function runningTotal(arr) {
  let newArr = [];
  if (arr.length) {
    newArr = [arr[0]]
    for (let i = 1; i < arr.length; i += 1) {
      newArr.push((arr[i] + newArr[i - 1]));
    }
  }
  return newArr;
}*/

function runningTotal(arr) {
  let sum = 0;
  return arr.map(function(x) {
    return sum = sum + x;
  })
}





console.log(runningTotal([2, 5, 13])),             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])),    // [14, 25, 32, 47, 67]
console.log(runningTotal([3])),                    // [3]
console.log(runningTotal([]));                     // []