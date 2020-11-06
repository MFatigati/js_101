/* Write a function that takes a positive integer as an argument, and returns 
that number with its digits reversed.

P
E
D
A

convert input number to a string
convert string to an array
reverse the array
convert array back to string
convert string to number
return number

 */

function reverseNumber(inputNum) {
  let str1 = String(inputNum);
  let str2 = Number(str1.split("").reverse().join(""));
  // console.log(str2);
  return str2;

}



reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1