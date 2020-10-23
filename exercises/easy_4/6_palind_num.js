/* Write a function that returns true if its integer argument is palindromic, 
or false otherwise. A palindromic number reads the same forwards and backwards.
*/

function isPalindromicNumber(num) {
  console.log(typeof num);
  // return String(num) === String(num).split("").reverse().join("");
}

console.log(
isPalindromicNumber(034543),        // true
isPalindromicNumber(123210),       // false
isPalindromicNumber(22),           // true
isPalindromicNumber(5));            // true