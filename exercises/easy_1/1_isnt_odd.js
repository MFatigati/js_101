/* Write a function that takes one integer argument, which may be positive,
negative, or zero. This method returns true if the number's absolute value is odd.
You may assume that the argument is a valid integer value.

*P
Input:
  -one integer, positive, neg, or zero
Output:
  -return true if input number's abs. value is odd
  -question: if even or zero, do nothing?
    -LS examples show that we should return false

*E
isAbsOdd(0) => 
isAbsOdd(4) => 4
isAbsOdd(1) => 1
isAbsOdd(-1) => 1
isAbsOdd(-3) => 3

*D
Seems like we should be able to handle this just using numbers and code logic

*A
Count the distance between the number and zero. If the number is negative, add
until you get to zero. If positive, subtract until you get to zero. Keep track of
the distance with a variable.
  -Variable can initially be set to zero

Check whether the final value of the variable is even or odd. If odd, return true.

*/

function isAbsOdd(num) {
  let absValue = 0;
  if (num > 0) {
    for (let count = num; count > 0; count -= 1) {
      absValue += 1;
    }
  } else if (num < 0) {
    for (let count = num; count < 0; count += 1) {
      absValue += 1;
    }
  }

  if (absValue % 2 === 1) {
    return true;
  } else {return false} 


}

console.log(isAbsOdd(2)); // => false
console.log(isAbsOdd(5)); // => true
console.log(isAbsOdd(-17)); // => true
console.log(isAbsOdd(-8)); // => false
console.log(isAbsOdd(0)); // => false
console.log(isAbsOdd(7)); // => true