/* Write a function that takes a string, doubles every character in the string, and 
returns the result as a new string.

create an empty string
iterate over every value of the input string
  add the current value twice to the empty string
return final string

 */

function repeater(inputStr) {
  let finalStr = "";
  for (let i = 0; i < inputStr.length; i += 1) {
    finalStr += inputStr[i];
    finalStr += inputStr[i];
  }
  return finalStr;
}

console.log(
repeater('Hello'),        // "HHeelllloo"
repeater('Good job!'),    // "GGoooodd  jjoobb!!"
repeater(''));             // ""