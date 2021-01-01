/*

p
  i
    odd number n
  o
    diamond
  r
    middle line n number of stars
    follow progression until only one star

e
  middle line n number of stars
    1 space, n - 2 number of stars
    2 spaces, n - 4 number of stars
    3 spaces, n - 4 number of stars
    4 spaces, n - 6 number of stars

d
a
create an array, starArr, with an initial value of n number of stars

set spaceValue at 1;
set starNum value at n - 2

while starNum is greater than or equal to one
  push and unshift spaceValue + starNum
  increment spaceValue by one
  decrement starNum by 2

print array elements in order;



*/

function diamond(middleStars) {
  let starArr = [];
  starArr.push("*".repeat(middleStars));
  
  let spaceValue = 1;
  let starNum = middleStars - 2;

  while (starNum >= 1) {
    starArr.push(`${" ".repeat(spaceValue)}${"*".repeat(starNum)}`)
    starArr.unshift(`${" ".repeat(spaceValue)}${"*".repeat(starNum)}`)
    spaceValue+= 1;
    starNum -= 2;
  }

  starArr.forEach(line => console.log(line));

}



diamond(9);
// logs
/*     *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    * */

   diamond(3);
   // logs
/*     *
   ***
    * */

   diamond(1);
   // logs
   //*