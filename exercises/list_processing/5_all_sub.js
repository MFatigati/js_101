/* Write a function that returns a list of all substrings of a string. Order the returned 
list by where in the string the substring begins. This means that all substrings that start 
at position 0 should come first, then all substrings that start at position 1, and so on. 
Since multiple substrings will occur at each position, return the substrings at a given 
position from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

P
  i: string
  o:array of all possible substrings
E
  see below
D
  just work with strings
A
  create empty array
  Iterate over each element in the string
    for each letter, take a substring from that letter to the end
    iterate over each letter of that substring
      for each substring, get all possible substrings starting with that letter
      push each possible substring to empty array
  return new arr

*/

/* function substrings(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i += 1) {
    let subStr1 = str.slice(i);
    newArr.push(leadingSubstrings(subStr1));
  }
  return newArr.flat();
  
}
 */
function substrings(str) {
  let subStrArr = str.split("").map((char, idx) => {
    return char + str.slice(idx + 1);
  })
  let allSubs = subStrArr.map(elem => leadingSubstrings(elem));
  return allSubs.flat();
}

function leadingSubstrings(str) {
  let newArr = [];
  let idx = 1;
  while (idx <= str.length) {
    let subStr = str.slice(0, idx);
    newArr.push(subStr);
    idx += 1;
  }
  return newArr;
}



console.log(substrings('abcde'));

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ] */ 