/* Write a function that takes a non-empty string argument, and returns
the middle character(s) of the string. If the string has an odd length,
you should return exactly one character. If the string has an even length,
you should return exactly two characters.

P
  i: non empty string
  o: middle char of string, or middle two, in case of even number
E
D
A

Split string into array
get length of new array
if length of array is odd
  return index at length divided by two, rounded down
else
  return index at length divided by two
    minus one
    as is



 */

function centerOf(str) {
  let arr = str.split("");
  let length = arr.length;
  if (length % 2 === 1) {
    let middleIdx = Math.floor(length / 2);
    return arr[middleIdx];
  } else {
    let middleIdx1 = (length / 2) - 1;
    let middleIdx2 = length / 2;
    // return arr[middleIdx1] + arr[middleIdx2];
    return str.slice(middleIdx1, middleIdx1 + 2) // mimicking LS solution
  }
  
}

console.log(
centerOf('I Love JavaScript'), // "a"
centerOf('Launch School'),     // " "
centerOf('Launch'),            // "un"
centerOf('Launchschool'),      // "hs"
centerOf('x'));                 // "x"