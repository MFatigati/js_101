/* Write a function that combines two arrays passed as arguments, and returns 
a new array that contains all elements from both array arguments, with each 
element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the 
same number of elements.

P
  I
  O
  R
E
D
A

*/

/* function interleave(arr1, arr2) {
  let finalArr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    finalArr.push(arr1[i]);
    finalArr.push(arr2[i]);
  }
  return finalArr;
} */

// original solution above; attempt with forEach below

function interleave(arr1, arr2) {
  let finalArr = [];
  arr1.forEach(function(element, i) {
    finalArr.push(arr1[i], arr2[i]);
  });
  return finalArr;
}

// using map

function interleave1(arr1, arr2) {
  return arr1.map(function(x, i) { // map can also take an index argument
    return [x].concat(arr2[i])}).flat();
    // since one of the values is a number, need to store that in an array
    // when you do so, the concat then results in a nested array, which you then flatten
}

// using reduce

function interleave2(arr1, arr2) {
  return arr1.reduce(function(acc, cur, idx) {
    acc.push(cur, arr2[idx]);
    return acc;
  }, []);
}

// MAP OR REDUCE?

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleave1([1, 2, 3], ['a', 'b', 'c']));
console.log(interleave2([1, 2, 3], ['a', 'b', 'c']));