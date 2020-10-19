/* 
Given a string that consists of some words and an assortment of non-alphabetic 
characters, write a function that returns that string with all of the non-alphabetic 
characters replaced by spaces. If one or more non-alphabetic characters occur in a 
row, you should only have one space in the result (i.e., the result string should 
never have consecutive spaces).

P
  i
    -a string with a mix of characters
  o
    -a string with all non-alphanumeric characters replaced by spaces
  r
    -if one or more non-a character in a row, only 1 space results
E
  -see below
D
  -should be able to do all this with strings and regex
A
  replace every set of one or more non-an characters with a space.

*/

/*
function cleanUp(str) {
  let arr = str.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (/\W/.test(arr[i]) && /\w/.test(arr[i + 1])) {
      newArr.push(" ");
    } else if (/\w/.test(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr.join("");
  // console.log(str.match(/\w+/g));
  // console.log(str.match(/\W+/g));
}
*/ 

// my working solution above using regex, attempt to mimick LS shorter solution below

function cleanUp(str) {
  return str.replace(/\W/g, " ").replace(/\s+/g, " ");
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "