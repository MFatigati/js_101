let age = Math.round((Math.random()*100)) + 20

function teddyAge(max, min) {
  let age = Math.round((Math.random()*(max-min))) + min;
  return `Teddy is ${age} years old!`;
}

console.log(teddyAge(120, 20));