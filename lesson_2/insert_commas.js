/*
P
  input
    -string with periods and two decmimal numbers at the end
  output
    -string with commas after every third number to the left of the zeroes
E
insertCommas("111222333.00") => "111,222,333.00"

D
  store string characters in an array to iterate and replace

A
break string up into an array
iterate over every element in the array until hitting the period
  -if the position of the element is a multiple of three, replace it with the same value, plus a comma
join the array back to a string, and return it

*/


function insertCommas(string) {
  stringArr = string.split("").reverse();
  console.log(stringArr);
  for (let i = 4; i < stringArr.length; i += 1) {
    if ((i+1) % 3 === 0) {
      stringArr[i] = `,${stringArr[i]}`;
    }
  }
  return stringArr.reverse().join("");
}

console.log(insertCommas("11122233.00")); // "111,222,333.00"
