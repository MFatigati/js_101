/* F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

A good recursive function has three primary qualities:

It calls itself at least once.
It has an ending condition — e.g., if (num === 1), in the sum function above.
The results of each recursion are used in each step — e.g., num + sum(num - 1) uses sum(num - 1).
Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

*/

function fibonacci(fibNum) {
  if (fibNum <= 2) {
    return 1
  } else {
    return fibonacci(fibNum - 1) + fibonacci(fibNum - 2);
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765