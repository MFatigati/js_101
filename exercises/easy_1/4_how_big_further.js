/* Build a program that asks the user to enter the length and width
of a room in meters, and then logs the area of the room to the console
in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

P
  -input:
    -length and width of a room, in meters
    -need to ask for this with readline-sync
  -output:
    -console.log area of room in square meters and square feet
    -given conversion allows for performing area calc on square meters, then converting to sq ft.
    -from the example, looks like we are supposed to round to two decimal places
E
  Enter the length of the room in meters:
    10
  Enter the width of the room in meters:
    7
  The area of the room is 70.00 square meters (753.47 square feet).
  
  11, 12 = 132, 1420.83

D
  No need for anything except numbers and code logic

A
First, activate readline-sync and prompt user to enter the length and width of the room in meters,
storing those values in variables. Then, save the two values multipled together as one value, for
square meters. In another variable, save that value times 10.7639. Finally, insert both variables
into a string interpolation console.log.

*/

/*

// initially answered this with the .question() method

let rlSync = require('readline-sync');
let length = Number(rlSync.question("Enter the length of the room in meters: "));
let width = Number(rlSync.question("Enter the width of the room in meters: "));

let sqMeters = (length * width).toFixed(2);
let sqFeet = (sqMeters * 10.7639).toFixed(2);

console.log(
  `The area of the room is ${sqMeters} square meters (${sqFeet} square feet).`
) */

let rlSync = require('readline-sync');

console.log("Enter you want to answer in meters or feet? (type 'meters' or 'feet')")
let type = rlSync.prompt();

// validate the input

while (type !== "meters" || "feet") {
  console.log("Please type 'meters' or 'feet')")
  let type = rlSync.prompt();
}

if (type === "meters") {

console.log("Enter the length of the room in meters: ");
let length = Number(rlSync.prompt());

console.log("Enter the width of the room in meters: ");
let width = Number(rlSync.prompt());

let sqMeters = (length * width).toFixed(2);
let sqFeet = (sqMeters * 10.7639).toFixed(2);

console.log(
  `The area of the room is ${sqMeters} square meters (${sqFeet} square feet).`
)}

if (type === "feet") {

  console.log("Enter the length of the room in feet: ");
let length = Number(rlSync.prompt());

console.log("Enter the width of the room in feet: ");
let width = Number(rlSync.prompt());

let sqFeet = (length * width).toFixed(2);
let sqMeters = (sqFeet / 10.7639).toFixed(2);

console.log(
  `The area of the room is ${sqFeet} square feet (${sqMeters} square meters).`
)

}