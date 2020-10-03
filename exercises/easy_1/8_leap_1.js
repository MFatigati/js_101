/* In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly 
divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, 
then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year 
greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.

P
  Input
    -a number greater than 0
  Output
    -true or false
  Rules
    -if num % 4 === 0, true
    -if num % 100 === 0, false
    -if num % 400 === 0, true
E
  see below
D
  numbers and code logic

A
  If number is not divisible by 4, return false.
  Otherwise, if it is divisible by 4. Return true, unless...
    Check if it is divisble by 100. If it is, check if it is divisble by 400. If it is, return true. Else false.
    

function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
} */

// my original solution above, copying LS shorter solution below

function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
}

console.log(
isLeapYear(2016),      // true
isLeapYear(2015),      // false
isLeapYear(2100),      // false
isLeapYear(2400),      // true
isLeapYear(240000),    // true
isLeapYear(240001),    // false
isLeapYear(2000),     // true
isLeapYear(1900),      // false
isLeapYear(1752),      // true
isLeapYear(1700),      // false
isLeapYear(1),         // false
isLeapYear(100),       // false
isLeapYear(400))       // true

