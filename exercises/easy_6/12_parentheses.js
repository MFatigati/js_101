/* Write a function that takes a string as argument, and returns true if all 
parentheses in the string are properly balanced, false otherwise. To be properly 
balanced, parentheses must occur in matching '(' and ')' pairs.

return true if same number of both sides of parentheses, false otherwise
pairs must be in proper order


match all one type of parentheses and take length
match all one type of other parentheses and take length
if lengths are equal, return true, else false

having no parentheses returns true also
having reverse parentheses returns false

iterate over each index
  if the left index is a left parentheses
    check if
      next index is a right
        is so, remove both
      last index is a right
        if so, remove both
    if not, return false
  return true

 */

// The count of the left hand character should never be less than the count of the right hand character.

function isBalanced(string) {
  let newStr = string.replace(/[^()]/g, "");
  let arr = newStr.split("");
  let leftSide = 0;
  let rightSide = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === "(") {
      leftSide += 1;
    } else if (arr[i] === ")") {
      rightSide += 1;
    }
    if (rightSide > leftSide) {
      return false;
    }
  }
  return rightSide === leftSide;
}

  /* for (let i = 0; i < arr.length; i += 1) {
    if (arr.length > 1 && arr[i] === "(") {
      if (arr[i + 1] === ")" || arr[arr.length - 1] === ")") {
        if (arr[i + 1] === ")") {
          i += 1;
        } else if (arr[arr.length - 1] === ")") {
          arr.pop();
        }
      } else return false;
  } 

  console.log(arr);
}

return true;
} */


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);