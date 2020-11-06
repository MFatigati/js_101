/* Write a function that takes a string, doubles every consonant character in the string, 
and returns the result as a new string. The function should not double vowels 
('a','e','i','o','u'), digits, punctuation, or whitespace.

 */

function doubleConsonants(inputStr) {
  let finalStr = "";
  for (let i = 0; i < inputStr.length; i += 1) {
    finalStr += inputStr[i]
    if (/[a-z]/i.test(inputStr[i]) === true && ['a','e','i','o','u'].includes(inputStr[i]) === false) {
    finalStr += inputStr[i];
  }}
  return finalStr;
}


console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""