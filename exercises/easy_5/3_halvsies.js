/* Write a function that takes an array as an argument, and returns an array that 
contains two elements, each of which is an array. Put the first half of the 
original array elements in the first element of the return value, and put the 
second half in the second element. If the original array contains an odd number 
of elements, place the middle element in the first half array.

P
  I: array of integers
  O: two nested arrays
    first half of input integers in first array, second half in second array
  R
    E
      input integer can contain even or odd number of integers
      if odd number of integers, put middle integer in first array
    I
      if input array is empty, return two empty nested arrays
      if input array only has one integer, return two empty nested arrays
      proceed in order

E
  see below
D
  just rely on arrays
A
  Create an empty array with two empty nested arrays.
  to see how many integers should be in each nested array divide length of input array by two, rounding down
  store length of desired nested arrays in their own variables
  if length of input array is odd, add one to desired length of first nested array.
  To populate first array
    iterate over input array, starting at 0, up to desired length -1, pushing each element
  to populate second array
    iterate over input array, starting at desired length of first array, to the end, pushing each element
  return final array.

*/

/* function halvsies(inputArr) {
  let finalArr = [[],[]];
  let lengthNested1 = Math.floor(inputArr.length/2)
  // let lengthNested2 = Math.floor(inputArr.length/2) // unnecessary
  
  if (inputArr.length % 2 === 1) {
    lengthNested1 += 1;
  }

  for (let i = 0; i < lengthNested1; i += 1) {
    finalArr[0].push(inputArr[i]);
  }
  for (let i = lengthNested1; i < inputArr.length; i += 1) {
    finalArr[1].push(inputArr[i]);
  }

  return finalArr;
} */

// my solution above; mimicking LS solution here

function halvsies(inputArr) {
  let finalArr = [[], []];
  let nestedLength1 = Math.ceil(inputArr.length/2);
  finalArr[0] = inputArr.slice(0, nestedLength1);
  finalArr[1] = inputArr.slice(nestedLength1);
  return finalArr;


}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]