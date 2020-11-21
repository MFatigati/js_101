/* Write a function that takes a string as an argument, and returns that string with every 
lowercase letter changed to uppercase and every uppercase letter changed to lowercase. 
Leave all other characters unchanged.

 */


function swapCase(str) {
  return str.split("").map(char => swapSingle(char)).join("");
}


function swapSingle(letter) {
  if (letter.toUpperCase() === letter) {
    return letter.toLowerCase();
  } else return letter.toUpperCase();
}


console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"