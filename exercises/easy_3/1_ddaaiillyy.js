/*Write a function that takes a string argument and returns a new string
that contains the value of the original string with all consecutive 
duplicate characters collapsed into a single character.

P
  i
    a string with 0 or more words, with some consecutive repeating letteres
  o
    a string without the consecutive repeating letters collapsed
  r
E
  see below
D
  store letters as array
A
  Split characters into an array
  create empty arry
  iterate over each character in the first array.
    if the letter at the next index is the same, do nothing
    it the letter at the next index is different, push current index to empty array
  join second array and return it

*/
/*
function crunch(str) {
  let arrOriginal = str.split("");
  let arrNew = [];
  console.log(arrOriginal);
  for (let i = 0; i < arrOriginal.length; i += 1) {
    if (arrOriginal[i] !== arrOriginal[i + 1]) {
      arrNew.push(arrOriginal[i])
    }
  }

  return arrNew.join("");
}*/

// using regex

function crunch(str) {
  if (str === "") {
    return str;
  } else {
    return str.match(/(\w|\s)(?!\1)/g).join("");
  }
}


console.log(
crunch('ddaaiillyy ddoouubbllee'),    // "daily double"
crunch('4444abcabccba'),              // "4abcabcba"
crunch('ggggggggggggggg'),            // "g"
crunch('a'),                          // "a"
crunch(''));                           // ""