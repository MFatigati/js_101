/* Write a function that takes an array of numbers, and returns the sum of the sums of each 
leading subsequence for that array. You may assume that the array always contains at least one number.

create an empty array
create an index counter set to 1
for as long as the counter is less than the length of the array
  slice from zero to counter
  push value to array
  increment counter
reduce array to sum and return value

 */

/* function sumOfSums(arr) {
  let newArr = [];
  let idx = 1;
  while (idx <= arr.length) {
    let subStr = arr.slice(0, idx);
    newArr.push(subStr);
    idx += 1;
  }
  return newArr.flat().reduce((acc, elem) => acc += elem)
} */

// my original solution above, mimicking LS use of map and reduce below

function sumOfSums(arr) {
  return arr.map((_, idx) => arr.slice(0, idx + 1).reduce((sum, x) => sum += x)) // reduces the sliced portion
  .reduce((acc, x) => acc += x)
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35