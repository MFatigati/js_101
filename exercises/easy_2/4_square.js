/* let multiply = (num1, num2) => num1 * num2; 

let square = num => multiply(num, num);


console.log(square(5));
console.log(square(-8));
console.log(square(5) === 25);
console.log(square(-8) === 64); */

// further explorations below

let multiply = (num1, num2) => num1 * num2; 

function powerOfN(num, n) {
  let result = 1;
  while (n > 0) {
    result = multiply(result, num);
    n = n - 1;
  }
  return result;
}

/*
2^4
2 * (2 * (2 * 2)) = 16; */

console.log(powerOfN(2, 4));
console.log(powerOfN(2, 5));
console.log(powerOfN(3, 3));
console.log(powerOfN(5, 4));
console.log(powerOfN(5, 0));
console.log(powerOfN(0, 0));
console.log(powerOfN(0, 1));