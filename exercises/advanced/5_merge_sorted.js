/* 

P
  I
    two sorted arrays
  O
    a single sortede array, made up of the original two
  R
    don't use sort()
E
  see below
D
  arrays should suffice
A
  create an empty array
  iterate over all the elements of the original two arrays
    if the value is a number, copy it to the new array
  while true
    create a copy of new array
    iterate over each item of the new array
      if current index is greater than next index, switch them
    if final array equals copy, break
  return new array

*/

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function merge(arr1, arr2) {
  let sortedArr = arr1.concat(arr2);
  
  while (true) {
    let copyArr = sortedArr.slice();
    for (let i = 0; i < sortedArr.length; i += 1) {
      let currentValue = sortedArr[i];
      let nextValue = sortedArr[i + 1];
      if (currentValue > nextValue) {
        sortedArr[i] = nextValue;
        sortedArr[i + 1] = currentValue;
      }
    }
    if (arraysEqual(sortedArr, copyArr)) break;
  }
  return sortedArr;
}



/* console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5] */
console.log(merge([9], [5]))
console.log(merge([5, 9], [1, 7]))