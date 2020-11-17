/* Write a function that takes an array of integers between 0 and 19, and returns 
an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, 
twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

P
  i: array of integers, 0-19
  o: array of integers, sorted according to values of string equivalents
E
  see below
D
  look up table for replacing
    need one going numbers to words
    one going from words to numbers
A

create two look-up tables with numbers and word versions of those numbers
iterate over each each item in the input array
  replace each number with its corresponding word
sort the array alphabetically
iteraute over each word in the sorted array
  replace each word with its corresponding number */

/* let numToWord = {
  0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
  10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: "fifteen", 16: "sixteen",
  17: "seventeen", 18: "eighteen", 19: "nineteen"
} */

/* let wordtoNum = {
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
  ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16,
  seventeen: 17, eighteen: 18, nineteen: 19
} */


  let wordsArr = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
  ]

// because the lookup tables had the same content as indexes, could use the index feature of
// forEach to create objects without doing it manually

let numToWord = {};
wordsArr.forEach((elem, idx) => numToWord[idx] = elem)

let wordToNum = {};
wordsArr.forEach((elem, idx) => wordToNum[elem] = idx)

function alphabeticNumberSort(arr, i) {
  let wordArr = arr.map(x => numToWord[x]);
  wordArr.sort();
  return wordArr.map(x => wordToNum[x]);
}







console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0] 