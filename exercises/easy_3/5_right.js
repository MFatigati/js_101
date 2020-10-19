/* 
Write a function that takes a positive integer, n, as an argument, 
and logs a right triangle whose sides each have n stars. The 
hypotenuse of the triangle (the diagonal side in the images below) 
should have one end at the lower-left of the triangle, and the other
 end at the upper-right.

P
  i
    positive integer n
  o
    string of stars
      n lines tall
  r
    first line is 1 star
      add one start per line
    first line starts with is n-1 spaces
      decrease one space each line
E
see below
D
code logic
A
input num
set stars equal to 1
set spaces equal to num - 1
while stars is less than or equal to num
  print spaces + stars
  decrement spaces by 1
  increment stars by 1


*/

function triangle(num) {
  let stars = 1;
  let spaces = num - 1;
  while (stars <= num) {
    console.log(" ".repeat(spaces) + "*".repeat(stars));
    spaces -= 1;
    stars += 1;
  }
}

triangle(5);
triangle(9);

/*
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

*/