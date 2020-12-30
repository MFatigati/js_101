/* 

P
  I
    an array of numbers of strings
  O
    a sorted array of numbers or strings
  R
    first, break down array into nested sub arrays
      group them into twos
      group them into ones
    then, merge then back together
      merge them into sorted arrays of twos (the sorted happens as they are grouped)
      merge them into a single, sorted array (the sorting happens as they are grouped)


E

D

A
Create a helper function, groupArrays:
  Input array
  Create empty array
  Iterate over array.
    for every two elements into the array, push them in a new array onto the empty array
Use groupArrays on starting array, until the input array only has a length of one

  




 */

/* function groupArrays(arr) {
  if (arr[0].length === 2) {
    let newArr = [];
    newArr.push(arr[0], arr[1]);
    return newArr;
  } else {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] && arr[i + 1]) {
        newArr.push([arr[i], arr[i + 1]])
      } else {
        newArr.push(arr[i])
      }
    }
    return groupArrays(newArr);
  }
} */

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let subArr1 = arr.slice(0, Math.floor(arr.length / 2));
  let subArr2 = arr.slice(Math.floor(arr.length / 2));
  subArr1 = mergeSort(subArr1);
  subArr2 = mergeSort(subArr2);

  return merge(subArr1, subArr2);
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

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

