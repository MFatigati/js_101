/* Write a function that takes a string, and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither

You may assume that the string will always contain at least one character.

P
  i
    string
  o
    object with keys shown below, and the string percentages of those strings
  r
    spaces count as "neither"
E
  see below
D
  split string into array, use its length for the total characters
A
Create empty object
split string into array
declare variables set to zero for
  lowercase
  uppercase
  neither
iterate over each character in the array
  if lower, upper, or neither, update counter variables accordingly
object property for uppercase equals string of count for uppercase divided by length
  use tofixed for this, as it returns a string

*/
function letterPercentages(str) {
  let percentObj = {};
  let charArr = str.split("");
  
  let upperCount = 0;
  let lowerCount = 0;
  let neitherCount = 0;
  
  charArr.forEach(char => {
    if (char >= "A" && char <= "Z") {
      upperCount += 1;
    } else if (char >= "a" && char <= "z") {
      lowerCount += 1;
    } else {
      neitherCount += 1;
    }
  })

  percentObj.lowercase = (lowerCount / charArr.length * 100).toFixed(2);
  percentObj.uppercase = (upperCount / charArr.length * 100).toFixed(2);
  percentObj.neither = (neitherCount / charArr.length * 100).toFixed(2);

  return percentObj;

}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }