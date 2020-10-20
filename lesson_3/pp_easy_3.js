/* 1

let numbers1 = [1, 2, 3, 4];
numbers1.length = 0;
console.log(numbers1);

let numbers2 = [1, 2, 3, 4];
numbers2.shift();
numbers2.shift();
numbers2.shift();
numbers2.shift();
console.log(numbers2);

let numbers3 = [1, 2, 3, 4];
let length = numbers3.length;
while (length > 0) {
  numbers3.shift();
  length -= 1;
}
console.log(numbers3);

let numbers4 = [1, 2, 3, 4];
numbers4.splice(0);
console.log(numbers4);

let numbers5 = [1, 2, 3, 4];
while (numbers5.length) {
  numbers5.shift();
}
console.log(numbers5); */

/* 5

function isColorValid(color) {
  return color === "blue" || color === "green";
}
console.log(isColorValid("blue"));

function isColorValid(color) {
  return !!(color === "blue" || color === "green");
}
console.log(isColorValid("blue")); */

// const isColorValid = color => color === "blue" || color === "green";

const isColorValid = color => ["blue", "green"].includes(color);

console.log(isColorValid("blue"));