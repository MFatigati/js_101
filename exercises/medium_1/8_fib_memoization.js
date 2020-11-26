let fibObj = {
  1: 1,
  2: 1
}

function fibonacci(fibNum) {
  if (fibNum <= 2) {
    return 1
  } else {
    fibObj[fibNum] = fibonacci(fibNum - 1) + fibObj[fibNum - 2];
    return fibObj[fibNum];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765