/* Some people believe that Fridays that fall on the 13th day of the month are considered to be unlucky 
days. Write a function that takes a year as an argument, and returns the number of Friday the 13ths in 
that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted 
the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for 
the foreseeable future.

P
  i: number representing a year
  o: number of friday the 13ths in that year
  r:
    365 days in a year
    leap year if
      divisible by 4.
        unless divisible by 100
          unless divisible by 400
    january 1, 1752 = saturday
    january 7th, 1752 = friday
    7th day is a friday, and every 7th day after that


let nonLeap = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}

let leap = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}

let thirteenths = [13, ]




In the Gregorian calendar, three criteria must be taken into account to identify leap years:

The year must be evenly divisible by 4;
If the year can also be evenly divided by 100, it is not a leap year;
unless...
The year is also evenly divisible by 400. Then it is a leap year.
According to these rules, the years 2000 and 2400 are leap years,
while 1800, 1900, 2100, 2200, 2300, and 2500 are not leap years.



E
  see below
D
  months of years in object
A

Get first day of relevant year with JS getdate function
  increment for 365 days
    getday of week for each
      if friday, incremement counter



function 


var now = new Date();
var daysOfYear = [];
for (var d = new Date(2012, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
    daysOfYear.push(new Date(d));
}




/* fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2 */



/* need to know what the first weekday of each year is
    account for leap years
  need to know which fridays in that year correspond to 13 in each month
    account for leap years

First weekday of each year
  set counter to 1
  until reach year
    If leap year, add 365
    if not leap year, add 364
  get the remainder of dividing that number by 7
    result is the day of the week (saturday = 1, etc)

iterate over all the weekday names from first date onwards
  iterate over all the calendar days from first date onwards
    if name is Friday and date is 13, increment counter */


    


/* let nonLeap = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}

let leap = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}

function thirteenthsCalDaysInLeap() {
let thirteenthsCalDaysInLeap = [13];
let newDay = 13;
Object.values(leap).forEach(x => {
  newDay = newDay + x;
  thirteenthsCalDaysInLeap.push(newDay);
})
thirteenthsCalDaysInLeap.pop();
return thirteenthsCalDaysInLeap;
}

function thirteenthsCalDaysInNonLeap() {
let thirteenthsCalDaysInNonLeap = [13];
let newDay = 13;
Object.values(nonLeap).forEach(x => {
  newDay = newDay + x;
  thirteenthsCalDaysInNonLeap.push(newDay);
})
thirteenthsCalDaysInNonLeap.pop();
return thirteenthsCalDaysInNonLeap;
}
let calDaysInLeap = thirteenthsCalDaysInLeap();
let calDaysInNonLeap = thirteenthsCalDaysInNonLeap();
console.log(calDaysInLeap)
console.log(calDaysInNonLeap) */

// STARTING OVER
/* 
Set counter to zero
Iterate over all the days in a particular year
  it day is a Friday, increment counter
return counter
*/

/* function fridayThe13ths(year) {
  let nextDay = new Date(`${year}-1-1`);
  let count = 0;
    
  for (let cal = 1; cal < 365; cal += 1) {
    nextDay = new Date(nextDay.getTime()+1000*60*60*24);
    if (nextDay.getDay() === 5 && nextDay.getDate() === 13) {
      count += 1;
    }
  }
  return count;
} */

function fridayThe13ths(year) {
  let count = 0;

  for (let month = 0; month < 12; month += 1) {
    let date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      count += 1;
    }
  }

  return count;

}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2