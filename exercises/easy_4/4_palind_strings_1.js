/* Write a function that returns true if the string passed as an argument 
is a palindrome, or false otherwise. A palindrome reads the same forwards and 
backwards. For this problem, the case matters and all characters matter. 

P
  i
    -string
  o
    -true, if palindrome
    -false, if not
  r
    -case sensitive
E
see below
D
use arrays and compare reversed
A
split the string into an array
make a copy of the original array and reverse it
iterate over the length of one array, checking the same index of the other array
  -if not strictly identical, return false
else after iteration, return true

*/
/*
function isPalindrome(str) {
  let originalArr = str.split("");
  let reversedArr = [...originalArr].reverse();

  for (let i = 0; i < originalArr.length; i += 1) {
    if (originalArr[i] !== reversedArr[i]) {
      return false;
    }
  }
  return true;
}*/
// manual solution above, more concise LS solution below

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}


console.log(
isPalindrome('madam'),               // true
isPalindrome('Madam'),               // false (case matters)
isPalindrome("madam i'm adam"),      // false (all characters matter)
isPalindrome('356653'));              // true