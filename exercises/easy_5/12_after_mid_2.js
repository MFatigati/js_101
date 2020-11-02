/* As seen in the previous exercise, the time of day can be represented as the number 
of minutes before or after midnight. If the number of minutes is positive, the time is 
after midnight. If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return the 
number of minutes before and after midnight, respectively. Both functions should 
return a value in the range 0..1439.

You may not use javascript's Date class methods.

P
  I
    time in hour minute format
  O
    one function that tells you how many minutes after midnight that is
    one function that tells you how many minutes before midnight that is
  R

E
  see below
D
A



*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY; // 1440

function afterMidnight(hoursMinutes){
 return getTotalMinutes(hoursMinutes) % MINUTES_PER_DAY;
}

function beforeMidnight(hoursMinutes){
  if (getTotalMinutes(hoursMinutes) === 0) {
    return 0;
  } else return MINUTES_PER_DAY - getTotalMinutes(hoursMinutes);
}

function getTotalMinutes(hoursMinutes) {
  let hours = Number(hoursMinutes.split(":")[0]);
  let minutes = Number(hoursMinutes.split(":")[1]);
  return (hours * MINUTES_PER_HOUR) + minutes

}

// console.log(getTotalMinutes("12:34"));


console.log(afterMidnight("00:00"))// === 0);
console.log(beforeMidnight("00:00"))// === 0);
console.log(afterMidnight("12:34"))// === 754);
console.log(beforeMidnight("12:34"))// === 686);
console.log(afterMidnight("11:34"))// === 694);
console.log(beforeMidnight("11:34"))// === 746);
console.log(afterMidnight("24:00"))// === 0);
console.log(beforeMidnight("24:00"))// === 0);
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("11:34") === 694);
console.log(beforeMidnight("11:34") === 746);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);