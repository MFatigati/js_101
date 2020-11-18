/* Write a function that takes a string argument, and returns a list of all substrings 
that start from the beginning of the string, ordered from shortest to longest.

P
  i: string
  o: array of strings
    each string is a subarray of all the substrings formed from first letter to end of string, ordered by length
E
  see below
D
  can iterate over strings and push slice onto new array
A
create new arr  
set starting index to 1
while index is less than the length of the string
   slice from 0 index to index
   push value onto new array
   increment index
return new arr

 */

/* function leadingSubstrings(str) {
  let newArr = [];
  let idx = 1;
  while (idx <= str.length) {
    let subStr = str.slice(0, idx);
    newArr.push(subStr);
    idx += 1;
  }
  return newArr;
} */

// refactor using reduce

function leadingSubstrings(str) {
  let lettersArr = str.split("");
  let subStrArr = lettersArr.reduce((acc, elem, idx) => {
    if (idx === 0) {
      acc.push(elem);
    } else {
      acc.push(acc[idx - 1] + elem);
    }
    return acc;
  }, [])
  return subStrArr;
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
