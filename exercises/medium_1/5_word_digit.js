/* Write a function that takes a sentence string as an argument, and returns that string with every 
occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 
'nine' — converted to its corresponding digit character. 

create a look up object with word/digit pairs
split sentence into array of words
iterate over each word
  if object has word as a property, replace that array object with the corresponding number value
return joined array

*/

let lookup = {
  'zero': 0, 
  'one': 1, 
  'two': 2,
  'three': 3,
  'four': 4, 
  'five': 5, 
  'six': 6, 
  'seven': 7, 
  'eight': 8, 
  'nine': 9
}

/* function wordToDigit(str) {
  return str.match(/[A-z]+|\W+/gi).map(word => {
    if (lookup.hasOwnProperty(word.toLowerCase())) {
      return lookup[word];
    } else return word;
  })
  .join("")
} */

// first solution above, creating an array with match for transformation
// second solution below, mimick LS, using replace, iterating over lookup table

/* function wordToDigit(str) {
  let keys = Object.keys(lookup);
  keys.forEach(numWord => {
    let searchWord = new RegExp('\\b' + numWord + '\\b', "gi");
    console.log(searchWord);
    str = str.replace(searchWord, lookup[numWord])
  }
  )
  return str;
} */

// third solution, what I was trying to do initially, just splitting the string. needed word-boundary anchor to do this

function wordToDigit(str) {
  return str.split(/\b/).map(word => {
    if (lookup.hasOwnProperty(word.toLowerCase())) {
      return lookup[word];
    } else return word;
  })
  .join("");
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."