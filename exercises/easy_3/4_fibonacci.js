/*
p
  i
    integer greater than or equal to 2
  o
    index in fib sequence for first number in the fib sequence that has as many digits as the input integer
  r
    fib sequence is where every number is the sum of the two previous numbers
  
e
see below
d
  should all be done using code logic
a
  create a fibNum1 variable set equal to 1
  create a fibNum2 variable set equal to 2
  create a fibPosition variable, representing fibNum2, set equal to 3
  while the length of fibNum2 is less than the desiredLength
    set fibNum2 equal to sum of fibNum2 and fibNum1
    set fibNum1 equal to fibNum2
    add one to fibPosition
  when the loop is over, return fibPosition

*/
function findFibonacciIndexByLength(desiredLength) {
  let fibNum1 = 1;
  let fibNum2 = 2;
  let fibPosition = 3;
  while (String(fibNum2).length < desiredLength) {
    let fibNum2Copy = fibNum2;
    fibNum2 = fibNum2 + fibNum1;
    fibNum1 = fibNum2Copy;
    fibPosition += 1;
  }
  return fibPosition;
}


console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74