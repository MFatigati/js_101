/* The parseInt() method converts a string of numeric characters (including an 
  optional plus or minus sign) to an integer. The method takes 2 arguments where 
  the first argument is the string we want to convert and the second argument 
  should always be 10 for our purposes. parseInt() and the Number() method behave 
  similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a String of digits, and returns the appropriate number 
as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about 
invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, 
such as String() and Number(). Your function should do this the old-fashioned way 
and calculate the result by analyzing the characters in the string.

P
  I
    -string of digits to be converted
  O
    -returns number stored in that string
  R
    -don't worry about leading + or -, or invalid characters
E
  see below
D
A
Compare each character to a number set, and add it if it matches.

Create an empty counter.
Create an array with the numbers 0-9;
Iterate over each character in the string.
  Iterature over each element in the array.
    If items match, add number from number array to counter.
    After the first match, at every second match, the counter needs to be
    multiplied by 10 before the addition.
return counter.

*/

// original solution using nested for loops

/*
function stringToInteger(str) {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let counter = 0;
  for (let si = 0; si < str.length; si += 1) {
    for (let ni = 0; ni < numbers.length; ni += 1) {
      if (si === 0) {
        if (str[si] == numbers[ni]) {
          counter += numbers[ni];
        } 
      } else if (str[si] == numbers[ni]) {
        counter *= 10;
        counter += numbers[ni];
      }

  }
}
return counter;
} 

// mimicking LS solution using lookup object

function stringToInteger(str) {
  const LOOKKUP = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }

  let counter = 0;
  for (let si = 0; si < str.length; si += 1) {
    counter = (counter * 10) + LOOKKUP[str[si]];
  }
  return counter;
}


console.log(stringToInteger("4321")); // logs 4321
console.log(stringToInteger("570")); // logs 570
console.log(stringToInteger("0")); // logs 0
console.log(stringToInteger("1")); // logs 1 */

// further explorations

function hexadecimalToInteger(str) {
  const LOOKKUP = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  }
  arr = str.toLowerCase().split("").reverse();
  console.log(arr);
  let counter = 0;
  for (let i = 0; i < arr.length; i += 1) {
    counter = counter + (LOOKKUP[arr[i]] * (16 ** LOOKKUP[i]))
    console.log(counter);
  }
return counter;
}
console.log(hexadecimalToInteger('4D9f')); // 19871
 /*
7DE = (7 * 162) + (13 * 161) + (14 * 160) 
2014 */
