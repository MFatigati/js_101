/* Rewrite your recursive fibonacci function so that it computes its results without using recursion.

1: 1

2: 1

3: 1 + 1 = 2

4: 1 + 2 = 3

5: 2 + 3 = 5

6: 3 + 5 = 8

for each fibNum greater than 2


 */

/* function fibonacci(finalFibNum) {
  let secondtoLastFibNum = 1;
  let lastFibNum = 1;
  let currentFibNum = 1;
  for (let count = 2; count < finalFibNum; count ++) {
    currentFibNum = secondtoLastFibNum + lastFibNum;
    secondtoLastFibNum = lastFibNum;
    lastFibNum = currentFibNum;
  }
  return currentFibNum;

} */

// my solution above, using array like LS below

function fibonacci(finalFibNum) {
  let fibSequence = [1, 1];
  for (let count = 2; count < finalFibNum; count += 1) {
    fibSequence = [fibSequence[1], fibSequence[0] + fibSequence[1]];
  }
  return fibSequence[1];
  
}


console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));