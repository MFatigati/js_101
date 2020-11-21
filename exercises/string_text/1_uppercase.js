/* Write a function that takes a string argument, and returns true if all of the alphabetic 
characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

iterate over all characters
  if a letter
    if not capitalized, return false
return true

 */

/* function isUppercase(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (/[A-z]/.test(str[i])) {
      if (/[A-Z]/.test(str[i]) === false) {
        return false;
      }
    }
  }
  return true;
} */

// my iterative solution above... much easier LS solution below.

function isUppercase(str) {
  return str === str.toUpperCase();
}


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true