/* Write a function that rotates an array by moving the first element to the end of the array. 
Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.

If the object is an array
  Create empty new arr
    If arr has a length greater than zero
      if arr has length greater than or equal to two
        copy everything from index one onwards to new arr
    push index one of original arr onto new arr
  return new arr
Else return undefined

*/
/* 
function rotateArray(inputArr) {
  if (Array.isArray(inputArr)) {
    let newArr = [];
      if (inputArr.length > 0) {
        if (inputArr.length > 1) {
          newArr = inputArr.slice(1);
        }
        newArr.push(inputArr[0])
      }
    return newArr;
  } else return undefined;
} */

// original solution above, mimicking LS solution below

function rotateArray(inputArr) {
  if (!Array.isArray(inputArr)) {
    return undefined
  }
  if (inputArr.length === 0) {
    return [];
  }
  return inputArr.slice(1).concat(inputArr[0]);
    // slice returns empty array if starting position does not exist
    // must use concat in this context otherwise will just return length of new array
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]