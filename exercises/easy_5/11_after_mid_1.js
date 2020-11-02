/* The time of day can be represented as the number of minutes before or after 
midnight. If the number of minutes is positive, the time is after midnight. 
If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and 
returns the time of day in 24 hour format (hh:mm). Your method should 
work with any integer input.

You may not use javascript's Date class methods. 

P
  I
    integer representing number of minutes
  O
    string  in hh:mm format
  R
    if number is negative, represents midnight minus that time
    if positive, represents midnight plus that time
    number of minutes will sometimes total more than 24 hours
E
  see below
D
  just code logic and numbers
A
  create constant representing minutes per hour
  determine how many hours the number represents
    divide total by constant, rounding down
  determine how many left over minutes the number represents
    get the remainder of dividing by 60
      0 + hours
      if result length is 1, add a zero at the beginning
  determine how the hours should be represented in 24 hour format
    get remainder of hours divided by 24
      0 + minutes
      if result length is 1, add a zero at the beginning
  display results

*/

/* function timeOfDay(startingMinutes) {
  const MIN_PER_HOUR = 60;
  let sign = Math.sign(startingMinutes);

  let totalHours = getTotalClockHours(startingMinutes, sign);
  //console.log(totalHours);

  let totalMinutes = getTotalClockMinutes(startingMinutes);
  // console.log(totalMinutes);

  let displayHours = getDisplayHours(totalHours, sign);
  //console.log(displayHours);

  let displayMinutes = getDisplayMinutes(totalMinutes, sign);
  //console.log(displayMinutes);

  let finalHours = returnPaddedNumber(displayHours);
  // console.log(finalHours);

  let finalMinutes = returnPaddedNumber(displayMinutes);
  //console.log(finalMinutes);

  console.log(finalHours + ":" + finalMinutes);
  return finalHours + ":" + finalMinutes;


}

function getTotalClockHours(startingMinutes, sign) {
  const MIN_PER_HOUR = 60;
  let startingMinutesUnsigned = Math.abs(startingMinutes);
  let totalHours;
  if (sign < 0) {
    totalHours = Math.ceil(startingMinutesUnsigned/MIN_PER_HOUR) % 24;
  } else {
    totalHours = Math.floor(startingMinutesUnsigned/MIN_PER_HOUR) % 24;
  }
  return totalHours;
}

function getTotalClockMinutes(startingMinutes) {
  let startingMinutesUnsigned = Math.abs(startingMinutes);
  let totalMinutes = startingMinutesUnsigned % 60;
  return totalMinutes;
}

function getDisplayHours(rawHours, sign) {
  let displayHours = rawHours;
  if (sign < 0) {
    displayHours = 24 - rawHours;
  }
  if (rawHours === 0) { // very ad hoc fix... not sure how to fix this in a better way.
    displayHours = 0;
  } 
  return displayHours;
}

function getDisplayMinutes(rawMinutes, sign) {
  let displayMinutes;
  if (sign < 0) {
    displayMinutes = 60 - rawMinutes;
} else {
  displayMinutes = rawMinutes;
}
  return displayMinutes;
}

function returnPaddedNumber(number) {
  stringNum = String(number);
  if (stringNum.length === 1) {
    return "0" + stringNum;
  } else {
    return stringNum;
  }
} */

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(num) {
  return num < 10 ? "0" + String(num) : String(num);
}

function formatTime(num1, num2) {
  return `${num1}:${num2}`;
}

function timeOfDay(timeInMinutes) {
  if (timeInMinutes < 0) { // this was the key step I was missing; first get all time in minutes 
                           // into a positive format, rather than working with positives and 
                           // negatives in the calculations
    timeInMinutes = (timeInMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    timeInMinutes = (timeInMinutes % MINUTES_PER_DAY)
  }

  let hours = Math.floor(timeInMinutes / MINUTES_PER_HOUR);
  let minutes = Math.ceil(timeInMinutes % MINUTES_PER_HOUR); 
  

 return formatTime(leadingZero(hours), leadingZero(minutes));
}




console.log(timeOfDay(0))// === "00:00");
console.log(timeOfDay(-3))// === "23:57");
console.log(timeOfDay(35))// === "00:35");
console.log(timeOfDay(-1437))// === "00:03");
console.log(timeOfDay(3000))// === "02:00");
console.log(timeOfDay(800))// === "13:20");
console.log(timeOfDay(-4231))// === "01:29");
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");


/* console.log(leadingZero(0));
console.log(leadingZero(5));
console.log(leadingZero(10));
console.log(leadingZero(12));
 */

 /* console.log(formatTime(leadingZero(1), leadingZero(23)));
console.log(formatTime(leadingZero(12), leadingZero(00)));
console.log(formatTime(leadingZero(6), leadingZero(58))); */