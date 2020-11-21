/* Write a function that takes an array of strings, and returns an array of the same 
values with all vowels (a, e, i, o, u) removed.

for each item in the array
  replace any vowels with empty string
return original array, or copy of original array with values changed

 */

function removeVowels(arr) {
  return arr.map(x => x.replace(/[aeiou]/ig, ""));
}



console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]