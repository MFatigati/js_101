/* Write a function that takes two array arguments, each containing a list of numbers, 
and returns a new array containing the products of all combinations of number pairs 
that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array. 

P
  i: two arrays, each element a number
  o: one array
    each element is a product of one of the possible pairs between the two arrays
    array sorted in numeric order
E
  see below
D
  just arrays
A
  create empty array
  iterate over first array
    iterate over second array
      mult element from first array by element from second array and push to new array
  sort new array
  return new array

*/
/* function multiplyAllPairs(arr1, arr2) {
  let newArr = [];
  arr1.forEach(x => {
    arr2.forEach(y => {
      newArr.push(x * y);
    })
  })
  return newArr.sort((a, b) => a - b);
} */

function multiplyAllPairs(arr1, arr2) {
  let newArr = arr1.map(x => {
    return arr2.map(y => {
      return x * y;
    })
  })
  return newArr.flat().sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]