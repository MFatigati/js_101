/* Write a function that takes an Array as an argument, and reverses its elements 
in place; that is, mutate the Array passed into this method. The return value 
should be the same Array object.


create a temporary empty array
while input array has length
  remove elements one by one, starting from the end
  push each removed element onto empty array
iterate over each element of the new array, starting from from
  push each element onto original array
return original array

 */

function reverse(inputArr) {
  let tempArr = [];
  while (inputArr.length) {
    tempArr.push(inputArr.pop());
  }
  while (tempArr.length) {
    inputArr.push(tempArr.shift());
  }
  return inputArr;
}


let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true