/* Write a function that displays an 8-pointed star in an NxN grid, where N is an
odd integer that is supplied as an argument to the function. The smallest such star
you need to handle is a 7x7 grid (i.e., when N is 7).

P
  i
    number 7 or greater, odd
  o
    8 pointed star
  r
    middle row is n number of stars wide
E
D
A
starting number of spaces before stars is zero
starting number of spaces between stars is n - 3 / 2
while middleSpaces is greater than or equal to zero
  preStars plus star plus middleSpaces plus star plus middleSpaces plus star
  decrement middleSpaces by one
  increment preStars by one
log middleStars


 */

function star(middleStars) {
  let prependedSpaces = 0;
  let middleSpaces = (middleStars - 3) / 2;
  let prependArr = [];
  let middleSpaceArr = [];

  while (middleSpaces >= 0) {
    middleSpaceArr.push(middleSpaces);
    middleSpaces -= 1;

    prependArr.push(prependedSpaces);
    prependedSpaces += 1;
  }

  logTopHalf(prependArr, middleSpaceArr);
  console.log("*".repeat(middleStars));
  logBottomHalf(prependArr, middleSpaceArr);

}


function logTopHalf(prependArr, middleSpaceArr) {
  for (let row = 0; row < middleSpaceArr.length; row += 1) {
    console.log(`${" ".repeat(prependArr[row])}*${" ".repeat(middleSpaceArr[row])}*${" ".repeat(middleSpaceArr[row])}*`);
  }
}

function logBottomHalf(prependArr, middleSpaceArr) {
  for (let row = middleSpaceArr.length - 1; row >= 0; row -= 1) {
    console.log(`${" ".repeat(prependArr[row])}*${" ".repeat(middleSpaceArr[row])}*${" ".repeat(middleSpaceArr[row])}*`);
  }
}

star(7);
/* // logs
*  *  * // 2 spaces between stars (4 / 2), 0 before; 4 spaces + 3 stars = 7
 * * * // 1 space betwee stars, 1 before
  *** //  0 spaces between stars, 2 before
*******
  ***
 * * *
*  *  * */

star(9);
/* // logs
*   *   * // 3 spaces between stars, 0 before; 6 spaces + 3 stars = 9
 *  *  * // 2 spaces between stars, 1 before
  * * * // 1 space between stars, 2 before
   *** // 0 spaces between stars, 3 before
********* // 9 stars
   ***
  * * *
 *  *  *
*   *   * */