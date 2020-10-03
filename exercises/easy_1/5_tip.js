/* Create a simple tip calculator. The program should prompt for a bill amount and 
a tip rate. The program must compute the tip, and then log both the tip and the total
amount of the bill to the console. You can ignore input validation and assume that 
the user will enter numbers.

P
  -Input
    -a number in response to the question "What is the bill?"
    -a number in response to the question "What is the tip percentage?"
  output
    -a number extending to two decimals interpolated into the string "The tip is $"
    -a number extending to two decimals interpolated into the string "The total is $"

E
  200, 15 => 30, 230
  0, 15 => 0, 0
  200, 0 => 0, 200

D
  Need to ask for input with readline-sync, then convert to numbers

A
  -Activate readline sync.
  -Using the .prompt() method, ask for both the bill and tip percentage, saving them as
  variables.
  -log the relevant output strings, interpolating the relevant variables.

*/

let rlSync = require("readline-sync");

console.log("What is the bill?");
let bill = Number(rlSync.prompt());
console.log("What is the tip percentage?");
let percentage = Number(rlSync.prompt());

let tip = (bill*(percentage/100)).toFixed(2);
let total = (Number(bill) + Number(tip)).toFixed(2);

console.log(`The tip is $${tip}
The total is $${total}
`)
