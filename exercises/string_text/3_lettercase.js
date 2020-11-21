/* Write a function that takes a string and returns an object containing three properties: 
one representing the number of characters in the string that are lowercase letters, one 
representing the number of characters that are uppercase letters, and one representing 
the number of characters that are neither.

create an empty object with all values set to zero
iterate over every character in the string
  if its uppercase, update property
  if its lowercase, update property
  else, update property
return object


 */

function letterCaseCount(str) {
  let countObj = { lowercase: 0, uppercase: 0, neither: 0 }
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      countObj['uppercase'] += 1;
    } else if (/[a-z]/.test(str[i])) {
      countObj['lowercase'] += 1;
    } else countObj['neither'] += 1;
  }
  return countObj;
}



console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }