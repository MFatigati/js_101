/* Write a function that takes a floating point number representing an 
angle between 0 and 360 degrees, and returns a string representing that 
angle in degrees, minutes, and seconds. You should use a degree symbol 
(˚) to represent degrees, a single quote (') to represent minutes, and 
a double quote (") to represent seconds. There are 60 minutes in a degree, 
and 60 seconds in a minute.


*/
/*
function dms(angle) {
  let degrees = Math.floor(angle);
  let postDegreesDecimals = angle - degrees;

  let minutes = postDegreesDecimals * 60; // 60 is a magic number
  let minutesRounded = Math.floor(minutes);
  let postMinutesDecimals = minutes - minutesRounded;

  let seconds = Math.round(postMinutesDecimals * 60); //  magic number

  if (minutesRounded < 10) {
    minutesRounded = "0" + minutesRounded;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  // console.log(degrees, postDegreesDecimals, minutes, postMinutesDecimals, seconds);

  
  return `${degrees}°${minutesRounded}'${seconds}"`;
}*/

// mimicking LS use of constants and helper functions below

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(angle) {
  let degrees = Math.floor(correctAngle(angle));
  let postDegreesDecimals = correctAngle(angle) - degrees;

  let minutes = postDegreesDecimals * MINUTES_PER_DEGREE; // 60 is a magic number
  let minutesRounded = Math.floor(minutes);
  let postMinutesDecimals = minutes - minutesRounded;

  let seconds = Math.round(postMinutesDecimals * SECONDS_PER_MINUTE); //  magic number

  return `${degrees}°${padZeroes(String(minutesRounded))}'${padZeroes(String(seconds))}"`;
  
}

function padZeroes(str) {
  if (str.length < 2) {
    return "0" + str;
  } return str;
}

function correctAngle(num) {
  let newNum;
  if (num < -360) {
    newNum = num + 720;
  } else if (num < 0) {
    newNum = num + 360
  } else if (num > 360) {
    newNum = num - 360
  } else {newNum = num}
  return newNum;
}


console.log(dms(30)),           // 30°00'00"
console.log(dms(76.73)),        // 76°43'48"
console.log(dms(254.6)),        // 254°35'59"
console.log(dms(93.034773)),    // 93°02'05"
console.log(dms(0)),            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(
  dms(-1),   // 359°00'00"
  dms(400),  // 40°00'00"
  dms(-40),  // 320°00'00"
  dms(-420)) // 300°00'00"

/*
In geometry, angles are measured in degrees and fractions of a degree, 
such as minutes and seconds. It follows that 1 degree equals to 60 minutes, 
while 1 minute contains 60 seconds. Hence 1 degree also comprises 
3,600 (60 x 60) seconds. For many calculations, it's necessary to convert 
an angle value to the decimal form; for example, the angular fraction of 
15 minutes equals to 0.25 degree in the decimal notation.

Write down the angle value in the degree-minute-second form. For example, 
suppose you have the angle is 27 degrees, 12 minutes and 45 seconds.

Divide the seconds by 3,600 to calculate the corresponding fraction of a degree. 
Continuing with the example, 45 seconds divided by 3,600 = 0.0125 degree.

Divide the minutes by 60 to calculate the corresponding fraction of a degree. 
In this case, it would be 12 minutes divided by 60 = 0.2 degree.

Add up the integer number of degrees and minute/second fractions to convert 
the angle magnitude into the decimal form. In this example, the angle of 27 
degrees, 12 minutes and 45 seconds corresponds to 27 + 0.2 + 0.0125 = 27.2125 degrees.

1 degree = 60 minutes
1 minute = 60 seconds.
1 degree = 3600 seconds
If an angle is given in the form: Degrees (°), minutes ('), seconds (") then the
conversion to decimal degrees is given by decimal degrees = Degrees + minutes/ 60 + seconds / 3600
Example: 45° 34' 53" = 45 + 34/60 + 53 / 3600 = 45.581389 degrees */