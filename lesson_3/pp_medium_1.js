/* 1

num = 1;
while (num <= 10) {
  console.log(" ".repeat(num) + "The Flintstones Rock!");
  num += 1;
} */

/* 2

let munstersDescription = "The Munsters are creepy and spooky.";
let arr = munstersDescription.split("");

for (let i = 0; i < arr.length; i += 1) {
  if (/[A-Z]/.test(arr[i])) {
    arr[i] = arr[i].toLowerCase();
  } else {
    arr[i] = arr[i].toUpperCase();
  }
}
munstersDescription = arr.join("")

console.log(munstersDescription); */

/* 3

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor); // getting rid of ```number /``` just reverses the order
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(9)); */

/* 4

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
console.log(addToRollingBuffer1([1, 2, 3], 3, 4));
console.log(addToRollingBuffer2([1, 2, 3], 3, 4));

//no differene in terms of return value, just in terms of whether the buffer passed into the function is mutated or not
*/

// 8
// messWithDemographics(munsters) will mess with data in the original object, because the values
// array contains copieso of the original objects, pointing to the same heap.

/* 9

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(
  rps(
    rps("rock", "paper"), rps("rock", "scissors")
    ),
    "rock")
    );

console.log(rps(
  rps("paper", "rock"),
    "rock")
    );

console.log(rps(
  "paper", "rock")
    );

console.log("paper"); */

// 10
