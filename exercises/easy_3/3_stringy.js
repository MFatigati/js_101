/* Write a function that takes one argument, a positive integer,
 and returns a string of alternating '1's and '0's, always starting
  with a '1'. The length of the string should match the given integer.
  i
    positive integer
  o
    string of alternating 1 and 0, starting with 1, as long as the input number
  r
    if input number even, end on 0
    if odd, end on 1
e
d
  can all be done with just strings
a
  Store half length in variable halfLength
  Repeat 10 times halfLength
  If original integer even, return that string
  If original integer odd, add a final 1, and return

*/

function stringy(integer) {
  let halfLength = integer / 2;
  let str = "10".repeat(halfLength)
  if (integer % 2 === 0) {
    return str;
  } else {
    return str + "1";
  }

}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
