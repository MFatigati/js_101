/* 1

function first() {
  return "a";
}

function second() {
  return
  "a";
}

console.log(first());
console.log(second()); */

/* 3

// A
function messWithVars(a, b, c) {
  a = b;
  b = c;
  c = a;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(a=["one"], b=["two"], c=["three"]); {
  a = ["two"] // local variables a and b refer to same object
  b = ["three"] // local variables b and c now refer to the same object
  c = ["two"] // local variables c and a now refer to the same object
}

console.log(`one is: ${one}`); // ["one"]
console.log(`two is: ${two}`); // ["two"]
console.log(`three is: ${three}`); // ["three"]
// in A the function only messes with local variables assignments, so the final logs rely on the global variables

// B
let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);
function messWithVars(a, b, c) {
  a = ["two"]; 
  b = ["three"];
  c = ["one"];
}


console.log(`one is: ${one}`); // ["one"]
console.log(`two is: ${two}`); // ["two"]
console.log(`three is: ${three}`); // ["three"]

// in B the function again just does local variable reassignments, not affecting the global variables that get logged at the end

//C
function messWithVars(a, b, c) {
  a.splice(0, 1, "two"); 
  b.splice(0, 1, "three"); 
  c.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(a, b, c);

function messWithVars(a, b, c) {
  a.splice(0, 1, "two"); // splice the object that was passed in to parameter a, global variable one = ["two"]
  b.splice(0, 1, "three"); // splice the object passed to param b, global two = ["three"]
  c.splice(0, 1, "one"); // splice the object passed to param c, global three = ["one"]
}

console.log(`one is: ${one}`); // ["two"]
console.log(`two is: ${two}`); // ["three"]
console.log(`three is: ${three}`); // ["one"]

// my initial struggle with this problem was just reading the console logs as part of the function
// correcting for that, this is actually quite easy. Just a distinction between functions that
// reassign local variables, or functions that modify the object passed into the function
*/

// 4
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length < 4 || dotSeparatedWords.length > 4) {
    return "invalid";
  }
  while (dotSeparatedWords.length) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress("10.4.5.11"));
console.log(isDotSeparatedIpAddress("4.5.5"));
console.log(isDotSeparatedIpAddress("1.2.3.4.5"));
console.log(isDotSeparatedIpAddress("1.abc.4.5"));
console.log(isDotSeparatedIpAddress("1.123123.4.5"));