/*
P
  -i
    -integer with or without +/- sign
  -o
    -string with +/- sign
  -r
E
see below

D


A

*/

/* 
function signedIntegerToString(number) {
  let nakedNum = Math.abs(number);
  if (number < 0) {
      return "-" + integerToString(nakedNum);
  } else if (number > 0) {
      return "+" + integerToString(nakedNum);
  } else return integerToString(nakedNum);
} */

// initial solution above, mimicking LS solution with Math.sign() below

function signedIntegerToString(number) {
  let sign = Math.sign(number);
  let nakedNum = Math.abs(number);
  switch (sign) {
    case -1:
      return "-" + integerToString(nakedNum);
      break;
    case +1:
      return "+" + integerToString(nakedNum);
      break;
    default:
      return integerToString(nakedNum);
      break;
  }
}

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
    string = LOOKUP[(counter % 10)] + string; // could have just reversed the concat order here, and then wouldn't need .split('').reverse().join('') below
    counter = Math.floor(counter / 10);
  }
  while (counter > 0) 

  return string;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");