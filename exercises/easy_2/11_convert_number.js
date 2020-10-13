/*
P
  -i
    -number
  -o
    string of that number
  -r
E
  see below
D
  use a lookup table
A
  create lookup table with string values as values
  store number in a variable
  store empty string in variable
  while the number is greater than zero
    get the remainder of dividing the number by 10, and concat that to string variable.
    set the number to the number divided by 10, rounded down
  return the string variable

*/

function integerToString(num) {
  const LOOKUP = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9"
  }
  let counter = num;
  let string = "";
  do {
    string = string + LOOKUP[(counter % 10)]; // could have just reversed the concat order here, and then wouldn't need .split('').reverse().join('') below
    counter = Math.floor(counter / 10);
  }
  while (counter > 0) 
  
  return string.split('').reverse().join('');
}



console.log(
integerToString(4321),      // "4321"
integerToString(0),         // "0"
integerToString(5000),      // "5000"
integerToString(1234567890),
integerToString(-1234567890));      // does not work