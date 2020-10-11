/*
P
  -input: string with words
    -words === sequences of non-blank characters
  -output: second to last word
E
see below
D
put words into an array in order to select length - 2
A
split string into an array.
determine the length of the array, and return the string in the -2 position

*/

// modify so that it gives the middle word
// consider when the input is 0 words, 1 word, or even number of words
// if zero, say, ""No middle: string has zero words.""
// if one, say, "No middle: string only has one word."
// if even, say, "No middle: string has even number of words."

/*

function penultimate(string) {
  let arr = string.split(" ");
  if (arr.length)
  return arr[arr.length - 2];
}

console.log(penultimate("last word"));
console.log(penultimate("Launch School is great!"));
*/

// further explorations below

function middle(string) {
  let arr = string.trim().split(/\s+/); // changed from .split('') to account for multiple spaces between words
  console.log(arr);
  if (arr.length === 1) {
    if (arr[0] === "") {
      return "No middle: string has zero words.";
    } else {
      return "No middle: string only has one word.";
    }
    
  } else if (arr.length % 2 === 0) {
    return "No middle: string has even number of words.";
  } else {
  return arr[Math.floor(arr.length/2)];
  }
}

console.log(middle("last word"));
console.log(middle("Launch School is great yo!"));
console.log(middle("oneword"));
console.log(middle("oneword  "));
console.log(middle("  oneword  "));
console.log(middle(""));
console.log(middle(" "));
console.log(middle("    "));
console.log(middle("  asdf  asdf  "));