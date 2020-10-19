/*
Write a function that takes a year as input and returns the century. 
The return value should be a string that begins with the century number, 
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 
comprise the 20th century.

P
  -i
    -year
  -o
    century with suffix
  -r
    st
      1
    nd
      2
    rd
      3
    th
      0
      4-20
    for centuries
      -0-99
        1st
      100-199
        -2ndh
E
  see below
D
  look up table for endings
A
  create lookup table for endings
  determine the century by dividing the year by 100, rounding up
  determine the ending by looking at the last two digits
    get last two digits by slicing from length -2 to the end
  concat year plus ending from lookup table

*/ /*
function century(year) {
  let ending = "";
  let century = Math.ceil(year / 100);
  let finalDigits = Number(String(century).slice(String(century).length-2));

  if (finalDigits < 20) {
    switch (finalDigits) {
      case 1:
        ending = "st";
        break;
      case 2:
        ending = "nd";
        break;
      case 3:
        ending = "rd";
        break;
      default:
        ending = "th"
        break;
    }
  } else if (finalDigits >= 20) {
    switch (String(finalDigits)[String(finalDigits).length - 1]) {
      case "1":
        ending = "st";
        break;
      case "2":
        ending = "nd";
        break;
      case "3":
        ending = "rd";
        break;
      default:
        ending = "th"
        break;
    }
    }
  
  
  return century + ending;
  
} */

function century(year) {
  let ending = "";
  let century = Math.ceil(year / 100);
  let finalDigits = String(century).slice(String(century).length-2);
  
  if (finalDigits === "11" ||
      finalDigits === "12" ||
      finalDigits === "13") {
        ending = "th";
  } else {
    switch (String(finalDigits).slice(String(finalDigits).length-1)) {
      case "1":
        ending = "st";
        break;
      case "2":
        ending = "nd";
        break;
      case "3":
        ending = "rd";
        break;
      default:
        ending = "th"
        break;
    }
  }
return century + ending;
}



console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"