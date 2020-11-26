/* Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first 
digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in 
place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to 
get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 
321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum rotation of that 
integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise. */

function maxRotation(inputNum) {
  let numRotations = String(inputNum).length;
  while (numRotations > 1) {
    inputNum = rotateRightmostDigits(inputNum, numRotations);
    numRotations -= 1;
  }
  return inputNum;
}


function rotateRightmostDigits(inputNum, count) {
  let numArr = String(inputNum).split("");
  let part1 = numArr.slice(0, numArr.length - count);
  let part2 = numArr.slice(numArr.length - count);
  return Number(part1.concat(rotateArray(part2)).join(""));
}

function rotateArray(inputArr) {
  if (!Array.isArray(inputArr)) {
    return undefined
  }
  if (inputArr.length === 0) {
    return [];
  }
  return inputArr.slice(1).concat(inputArr[0]);
    // slice returns empty array if starting position does not exist
    // must use concat in this context otherwise will just return length of new array
}



console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845