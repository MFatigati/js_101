/* A featured number (something unique to this exercise) is an odd number that is a multiple of 7, 
with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is 
not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next featured number greater 
than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

P
E
D
A

while current number is less than or equal to 9876543201.
incremement current number by one.

If the number is divisible by 7 and not divisible by 2
  Coerce number to a string
  split string into an array of digits
  iterate over each element
    compare each element to a splice of the remaining elements
    if the splice of the remaining elements includes the current element, break
    else, return current number


*/

// first main function below, following by attempt to use more efficient helper function
/* function featured(startNum) {
  let current = startNum;
  while (current <= 9876543201) {
    current += 1;
    if (current % 7 === 0 && current % 2 !== 0) { // what makes my algorith inefficient is that there are many numbers that satisfy this criteria, but have repeats, so anyRepeats has to run many times
      if (noRepeats(current)) {
        return current;
      }
    }
  
}
return "There is no possible number that fulfills those requirements.";
} */

function featured(startNum) {
  let current = nextOddMult7(startNum);
  while (current <= 9876543201) {
      if (noRepeats(current)) {
        return current;
    }
      current += 14 // hmmm... still lags when I do it this way.
}
return "There is no possible number that fulfills those requirements.";
}

/* function noRepeats(current) {
  let strArr = String(current).split("");
  let comparison = strArr.filter((x, idx) => {
    if (strArr.slice(idx + 1).includes(x) === false) {
      return x;
    }
  })
  if (comparison.join("") === strArr.join("")) {
    return true;
  }
} */

/* function noRepeats(current) {
  let strArr = String(current).split("");
  let seen = {};

  strArr.forEach((x) => {
    console.log(seen[x])
    if (seen[x]) {
      return false;
    } 
      seen[x] = true;
  })
  return true;
} */

// original helper function above, using lookup object here. Attempt to use forEach loop just above does not work because the return
// statements do not exit the loop

function noRepeats(current) {
  let strArr = String(current).split("");
  let seen = {};

  for (let i = 0; i < strArr.length; i += 1) {
    if (seen[strArr[i]]) {
      return false;
    } 
    seen[strArr[i]] = true;
  }
  return true;
}

function nextOddMult7(num) {
  do {
    num += 1;
  } while (num % 7 !== 0 || num % 2 === 0)
  return num;
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."