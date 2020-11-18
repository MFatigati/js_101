/* Write a function that returns a list of all palindromic substrings of a string. 
That is, each substring must consist of a sequence of characters that reads the same 
forward and backward. The substrings in the returned list should be sorted by their 
order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention 
to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, 
assume that single characters are not palindromes.

input: array of all substrings
output: array of all substrings in order

create empty array
iterate over each element of input array
  for each element
    create split version
    create reverse version by reversing
    iterate over each character in one
      for each character, check to see if index at both arrays is equal
        if yes, return false, if not, continue
        if all are equal, return true
  if return true, push onto new array

 */

function palindromes(str) {
  let subStrArr = substrings(str);
  let palindArr = subStrArr.filter(elem => {
    let original = elem.split("");
    let reversed = [...original].reverse();
    if (original.join("") === reversed.join("") && original.join("").length > 1) {
      return true;
    } else return false;
})
  return palindArr;
}

function substrings(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i += 1) {
    let subStr1 = str.slice(i);
    newArr.push(leadingSubstrings(subStr1));
  }
  return newArr.flat();
  
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

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

