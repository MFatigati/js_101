/* Write a function that takes a string argument consisting of a first name, 
a space, and a last name, and returns a new string consisting of the last name, 
a comma, a space, and the first name.

P
  i: string first space late
  o: string of last comma space first
E
D
A
  split the string into two words
  return the properly formatted string

 */
/* 
function swapName(str) {
  let arr = str.split(" ");
  return `${arr[1]}, ${arr[0]}`
} */

// further exploration

/* function swapName(str) {
  let arr = str.split(" ");
  let lastName = arr[arr.length - 1];
  arr.pop();
  let firstNames = arr.join(" ")
  return `${lastName}, ${firstNames}`
} */

function swapName(str) {
  let arr = str.split(" ").reverse();
  let [lastName, ...firstNames] = arr; // using destructuring assignment
  firstNames = firstNames.join(" ")
  return `${lastName}, ${firstNames}`
}


 console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
 console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"