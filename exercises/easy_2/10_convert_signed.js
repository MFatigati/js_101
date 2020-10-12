/*
P
  I
    -string of digits
  O
    -positive or negative number with appropriate sign
  R
    -input string may or may not have preceding +/-
E
  See below
D
  Use a loopup table to match values
  store initial string as array
A

*/

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

function stringToSignedInteger(string) {
  plainString = string.match(/\d+/g)[0];
  console.log(plainString);
  if (string[0] === "-") {
    return -(stringToInteger(plainString))
  } else {
    return stringToInteger(plainString)
  }
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true