/* A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than 
the length of the longest side, and every side must have a length greater than 0. If either of 
these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments, and 
returns one of the following four strings representing the triangle's classification: 'equilateral', 
'isosceles', 'scalene', or 'invalid'.


store lengths in arguments object

Create variables set at zero for:
  smallSide
  middleSide
  longSide

Iterate over each length
  if length greater than smallside
    assign to smallside
  if length greater than middleSide
    assign to middleside
  if lengh greater than longSide
    assign to longside


If
  every side is zero
    or
  the sum of the two shortest sides is smaller than the longest side
    return invalid
else if
  all sides are equal
    return equilateral
  all sides are different
    return scalene
else
  return isosceles

*/
/* 
function triangle(side1, side2, side3) {
  let sides = Object.values(arguments).sort((a, b) => a - b);

  if (sides.includes(0) || sides[0] + sides[1] < sides[2]) {
    return "invalid";
  } else if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return "equilateral";
  } else if (sides[0] !== sides[1] && sides[0] !== sides[2] && sides[1] !== sides[2]) {
    return "scalene";
  } else return "isosceles"; */


// my solution above. mimicking LS solution below.

function triangle(side1, side2, side3) {
  let long = Math.max(side1, side2, side3)
  let short = Math.min(side1, side2, side3)
  let middle = side1 + side2 + side3 - long - short;
  
  if (Object.values(arguments).includes(0) || short + middle < long) {
    return "invalid";
  } else if (short === middle && middle === long) {
    return "equilateral";
  } else if (short !== middle && short !== long && middle !== long) {
    return "scalene";
  } else return "isosceles";


  /* 

  let small = 0;
  let middle = 0;
  let long = 0;

  sides.forEach(side => {
    if (side > small) {
      small = side;
    }
    if (side > middle) {
      middle = side;
    }
    if (side > long) {
      long = side;
    }
  }) */


}



console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"