/*
P
Write a function that takes a string consisting of zero or more space separated words, 
and returns an object that shows the number of words of different sizes.
Words consist of any sequence of non-space characters.

  I
    string of zero or more words, separated by a space
  O
    object
      properties correspond the numbers of characters in a word, ascending order
      values correspond to number of words that match those character counts
  R
    ever more than one space?

E
  see below
D
  need to split string into array
  object for object
A
create empty object
split string into array at the spaces
iterate over each array item
  set a property on the array equal to that propertyvalue plus one
return array



*/

function wordSizes(str) {
  let obj = {}
  let wordArr = str.split(" ");
  wordArr.forEach(function(x) {
    if (x !== "") {
    if (obj.hasOwnProperty(x.length) === false) {
      obj[x.length] = 1;
    } else {
      obj[x.length] += 1;
    }
  }})
  return obj;
}

console.log(wordSizes('Four score and seven.')),                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')),  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")),                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}