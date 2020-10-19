/*

A double number is an even-length number whose left-side
digits are exactly the same as its right-side digits. For
example, 44, 3333, 103103, and 7676 are all double numbers, 
whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an
argument multiplied by two, unless the argument is a double 
number; return double numbers as-is.

P
  -i
    a number
  -o
    -a number
  -rules
    -if first half does not match second half, return 2x number
    -if first half does match second half, return number
E
see below
D
split number into two strings to compare
A
Get length of number.
  Find halfway point by dividing by 2, and rounding up.
Store first half in one variable.
Store second half in second variable.
If two variables are equal, return original number.
If not equal, return 2x number.
      
*/

function twice(num) {
  let fullLength = String(num).length;
  let firstHalfLength = Math.round(fullLength / 2);
  
  let firstHalf = String(num).slice(0, firstHalfLength);
  let secondHalf = String(num).slice(firstHalfLength);
  
  if (firstHalf === secondHalf) {
    return num;
  } else {
    return num * 2;
  }
  
}
console.log(
twice(37),          // 74
twice(44),         // 44
twice(334433),      // 668866
twice(444),         // 888
twice(107),        // 214
twice(103103),      // 103103
twice(3333),        // 3333
twice(7676));        // 7676