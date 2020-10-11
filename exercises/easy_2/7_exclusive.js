/*
The || operator returns a truthy value if either or both of its 
operands are truthy, a falsey value if both operands are falsey. 
The && operator returns a truthy value if both of its operands are 
truthy, and a falsey value if either operand is falsey. This works 
great until you need only one of two conditions to be truthy, the 
so-called exclusive or.

In this exercise, you will write a function named xor that takes two 
arguments, and returns true if exactly one of its arguments is truthy, 
false otherwise. Note that we are looking for a boolean result instead 
of a truthy/falsy value as returned by || and &&.

P
  input
    any two values
  ouput
    return true of false
  rules
    return true if one, and only one, of the arguments is truthy
    otherwise return false
E
see below
D
just code logic
A
Set a counter variable equal to zero.
If the first argument is truthy, add one.
If the second argument truthy, add one.
If the counter equals one, return true.
Else return false.

// my original sotlution using a counter

function xor(valueA, valueB) {
  let counter = 0;
  if (valueA) {
    counter += 1;
  }
  if (valueB) {
    counter += 1;
  }
if (counter === 1) {
  return true;
} else {
  return false;
}
}*/

// mimicking LS solution
// not clear why exclaimation marks would be needed

function xor(valueA, valueB) {
  return ((valueA && !valueB) || (!valueA && valueB))
}

function xor2(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

console.log(xor(5, 0)); // true
console.log(xor(false, true)); // true
console.log(xor(1, 1)); // false
console.log(xor(true, true)); // false

console.log(xor2(5, 0)); // true
console.log(xor2(false, true)); // true
console.log(xor2(1, 1)); // false
console.log(xor2(true, true)); // false

/* xor operations are not short-circuit evaluations, because
for xor operations we always need to check both values. A short-circuit
evaluation can reach a final value by knowing that the first value
is truthy, and then it returns that value, regardless of whether the 
second value is a truthy or falsey. But in a xor operation, if the first
value is truthy, we need to know that the second value is NOT truthy
in order for the function to return true. */