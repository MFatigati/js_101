 /* Write a function that rotates the last count digits of a number. To perform the rotation, 
move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

P
  i
    number and count
  o
    rotated number
  r
    the count number refers to how many digits from the end you are working with
      a count 2 means you are rotating the last two digits
      a count 3 means you are rotating the last three digits
    to rotate a set of numbers, move the first one to the end
E
  see below
  0 1 2 3 4 5
  7 3 5 2 9 1, 3
  
  0 1 2   4 5   3
  7 3 5   9 1   2

  0 1 2 3 4 5
  7 3 5 2 9 1, 4
  
  0 1   3 4 5  2
  7 3   2 9 1  5

D
  easier to work with in a a split array
A
convert number to string and split into array of characters

First part of new number will consist of index 0 to length minus count minus 1
Second part of new number will consist of index length minus count plus one to the end
last part of new number will consist of index length minus count

 */

/* function rotateRightmostDigits(inputNum, count) {
  let numArr = String(inputNum).split("");
  return Number(numArr.slice(0, numArr.length - count)
  .concat(numArr.slice(numArr.length - count + 1))
  .concat(numArr[numArr.length - count]).join(""));
}
 */
// my solution above, mimicking LS use of prior function below

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



console.log(rotateRightmostDigits(735291, 1) === 735291);      // 735291
console.log(rotateRightmostDigits(735291, 2) === 735219);      // 735219
console.log(rotateRightmostDigits(735291, 3) === 735912);      // 735912
console.log(rotateRightmostDigits(735291, 4) === 732915);      // 732915
console.log(rotateRightmostDigits(735291, 5) === 752913);      // 752913
console.log(rotateRightmostDigits(735291, 6) === 352917);      // 352917