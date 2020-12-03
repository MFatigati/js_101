/*
Write a function that takes an array as an argument and sorts that array using the bubble sort 
algorithm described above. The sorting should be done "in-place" — that is, the function should 
mutate the array. You may assume that the array contains at least two elements.

P
  I
    array with at least two elements (strings or numbers)
  O
    same srray, but sorted
  R
    elements are compared with > operator
    each index is iterated over in each cycle
    when comparing a>b, if b is greater, swap them
    how do you know when a pass made no swaps?
E
  see below
D
A
do
  create a copy of the current array
  iterate over each element in the array
    set var a to index
    set var b to index + 1
    if index > index + 1
        index + 1 = a
        index = b
while a copy of the array does not equal to the array
return array

 */

function bubbleSort(originalArr) {
  let testCopy;
  do {
    testCopy = originalArr.slice();
    for (let i = 0; i < originalArr.length; i += 1) {
      let firstValue = originalArr[i];
      let secondValue = originalArr[i + 1];
      if (firstValue > secondValue) {
        originalArr[i] = secondValue;
        originalArr[i + 1] = firstValue;
      }
    }
  }
  while (JSON.stringify(originalArr) !== JSON.stringify(testCopy))
  return originalArr;
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]