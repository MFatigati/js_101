/*Given a string of words separated by spaces, write a function that swaps the 
first and last letters of every word.

You may assume that every word contains at least one letter, and that the string 
will always contain at least one word. You may also assume that each string contains 
nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

P
  I
    string of words sep by spaces
  O
    string of words sep by spaces with first and let letters of each word swapped
  R
    keep cases
E
  see below
D
  will probably need to split string into array, and then words into array
A
Split string into array of words
create empty string
iterate over each item in the array
  split each item into an array of letters
  create a variable firstLetter, equal to first letter
   create a variable lastLetter, equal to last letter
  set first letter equal to lastLetter, and last letter equal to firstLetter
  join array and concat to empty string

*/
/*
function swap(str) {
  let wordsArr = str.split(" ");
  let newStr = "";

  wordsArr.forEach(function(x) {
    let lettersArr = x.split("");
    console.log(lettersArr);
    let firstLetter = lettersArr[0];
    let lastLetter = lettersArr[lettersArr.length - 1];

    lettersArr[0] = lastLetter;
    lettersArr[lettersArr.length - 1] = firstLetter;
    newStr += `${lettersArr.join("")} `;
  }
)
  return newStr;
}*/

// original solution above; mimicking LS use of slice below
/*
function swap(str) {
  let wordsArr = str.split(" ");
  let newStr = "";

  wordsArr.forEach(function(x) {
    if (x.length <= 1) {
      let reversedWord = x;
      newStr += `${reversedWord} `;
    } else {
    let reversedWord = x[x.length - 1] + x.slice(1, -1) + x[0];
    newStr += `${reversedWord} `;
  }
}
)
  return newStr;
} */

// refactor using map

function swap(str) {
  let wordsArr = str.split(" ");
  let newArr = wordsArr.map(function(x) {
    if (x.length <= 1) {
      return x;
    } else {
      return x[x.length - 1] + x.slice(1, -1) + x[0];
    }
  }
  )

  return newArr.join(" ");
}

console.log(
swap('Oh what a wonderful day it is'),  // "hO thaw a londerfuw yad ti si"
swap('Abcde'),                          // "ebcdA"
swap('a'));                              // "a"