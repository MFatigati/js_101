/* Write a function that takes two arrays as arguments, and returns an 
array containing the union of the values from the two. There should be 
no duplication of values in the returned array, even if there are duplicates 
in the original arrays. You may assume that both arguments will always be arrays.

P
  I
    two arrays of integers, not nested
  O
    single array, containing all the values from both input arrays
  R
    E
      no duplicates in the return array, even if duplicates between both arrays
    I
E
  see below
D
  need new array to contain final values
A
  create empty array for final array, populated with the values of the first array
  iterate over all the values of the second array
    if the final array already includes the value, do nothing
    else, push value of second array onto final array
  return final aray

 */

/* function union(arr1, arr2) {
  let finalArr = [...arr1]; // problem: if first array contains duplicates, so will the return array
  arr2.forEach(value => {
    if (finalArr.includes(value) === false) {
      finalArr.push(value);
    }
})
return finalArr;
} */

function union(arr1, arr2) {
  let finalArr = [];
  Object.values(arguments).forEach(function(inputArr) {
    inputArr.forEach(value => {
      if (!finalArr.includes(value)) {
        finalArr.push(value);
      }
  })
})
return finalArr;
}


console.log(union([1, 3, 5], [3, 6, 9]));  // [1, 3, 5, 6, 9]
console.log(union([1, 3, 3, 5, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]