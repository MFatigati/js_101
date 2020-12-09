/* 
P
  input
    array
      optional: delimeter
      optional: delimeter to go before last word
  o
    string
  r
    default: separate with spaces, and have last element preceded by "or"
    optional last delimeter does not override the general delimeter
E
D
A
for arguments
  set second argument to comma by default
  set third argument to "or " by default

set variable to empty string
iterate over each element of original array
  if its not the last one add the concat of element plus second arg to string
  if last element, add concat of third arg plus element to string

return string

*/
/* 
function joinOr(arr, generalDelim = ",", lastDelim = "or") {
  let string = "";

  if (arr.length === 1) {
    string += arr[0]
  } else if (arr.length === 2) {
    string += arr[0] + " " + lastDelim.trim() + " " + arr[1];
  } else if (arr.length > 2) {
    for (let i = 0; i < arr.length; i += 1) {
      if (i < arr.length - 1) {
        string += arr[i] + generalDelim.trim() + " ";
      } else {
        string += lastDelim.trim() + " " + arr[i];
      }
    }
  }
  return string;
} */

// initial solution above, mimicking LS switch solution below

function joinOr(arr, generalDelim = ",", lastDelim = "or") {
  let string = "";

  switch (arr.length) {
    case 0:
      return string;
    case 1:
      return string += arr[0]
    case 2:
      return string += arr[0] + " " + lastDelim.trim() + " " + arr[1];
    default:
      return arr.slice(0, arr.length - 1).join(generalDelim.trim() + " ") + 
      generalDelim.trim() + " " + lastDelim.trim() + " " + arr[arr.length - 1];
  }
}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([2]));                     // => "2"
console.log(joinOr([1, 2]));                  // => "1 or 2"