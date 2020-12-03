/* Write a function that computes the difference between the square of the sum of the first 
count positive integers and the sum of the squares of the first count positive integers.

P
  i
    a number
  o
    difference between
      [sum of integers from 0 to number] squared
      sum of [square of each integer from 0 to number]
  r
E
D
A
set variables sum1 and sum2 to zero
iterate over all numbers from from to number
  add each number to sum1
set sum1 equal to the square of sum1

iterate over all numbers from from to number
  square the number
  add the result of the square to sum2

subtract sum2 from sum1

*/

function sumSquareDifference(num) {
  let sum1 = 0;
  let sum2 = 0;

  for (let count = 1; count <= num; count += 1) {
    sum1 += count;
    sum2 += (count ** 2);
  }
    sum1 = sum1 ** 2

  return sum1 - sum2;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150