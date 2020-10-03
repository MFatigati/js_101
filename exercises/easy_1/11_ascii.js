/*
Write a function that determines and returns the ASCII string value of a string passed 
in as an argument. The ASCII string value is the sum of the ASCII values of every 
character in the string. (You may use String.prototype.charCodeAt() to determine the 
ASCII value of a character.)


P
  Input
    -string
  Output
    -the sum of all the ASCII values of every character in the string
  Rules
    -determine ASCII value with String.prototype.charCodeAt()
E
see below

D
strings and numbers are all that is needed

A
Store the value of the string length in a variable.
Declare a sum variable.
Iterate over all the values of the string, adding their ASCII value to the sum.
Return the sum.

*/
function asciiValue(string) {
  let length = string.length;
  let sum = 0;
  for (let count = 0; count < length; count += 1) {
    sum += string[count].charCodeAt();
  }
return sum;
}


console.log(
asciiValue('Four score'),         // 984
asciiValue('Launch School'),      // 1251
asciiValue('a'),                  // 97
asciiValue(''));                   // 0