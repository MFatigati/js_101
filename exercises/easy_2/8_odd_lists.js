/* Write a function that returns an Array that contains every 
other element of an Array that is passed in as an argument. The 
values in the returned list should be those values that are in the 
1st, 3rd, 5th, and so on elements of the argument Array.

P
  input
    -array of various elements
  output
    -elements at index 0, 2, 4, etc.
  rules
    -can include empty array, 1 and 2
E
  see below

D
just use code logic on the array, and store in a new array

A
iterate over every element in the array.
if the index positive divided by 2 has a remainder of zero, push to new array.
return new array.


*/
/*
function oddities(arr) {
  return arr.reduce(function(acc, x) {
    if (arr.indexOf(x) % 2 === 0) {
      acc.push(x);
    }
    return acc;
  }, [])
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs [] */

function evens(arr) {
  return arr.reduce(function(acc, x) {
    if (arr.indexOf(x) % 2 !== 0) {
      acc.push(x);
    }
    return acc;
  }, [])
}



console.log(evens([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evens(["abc", "def"])); // logs ['def']
console.log(evens([123])); // logs []
console.log(evens([])); // logs []