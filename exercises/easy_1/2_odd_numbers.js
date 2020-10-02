/* Log all odd numbers from 1 to 99, inclusive, to the console. Log all
numbers on separate lines.

*P
  -inputs: won't be any inputs
  -output: list of odd numbers from 1-99, on separate lines
    -include 1 and 99

*E
  1
  3
  5...
  99

*D
all will be done with numbers and code logic

*A
Iterate over all numbers from 1-99. If the remainder of dividing that number
by 2 is 1; then log it to the console on its own line.

*/

function logOdd() {
  let num = 1;
  while (num < 100) {
    if (num % 2 === 1) {
      console.log(num);
    }
    num += 1;
  }
}

logOdd();

function logOddRange(min, max) {
  let num = min;
  while (num <= max) {
    if (num % 2 === 1) {
      console.log(num);
    }
    num += 1;
  }
}

logOddRange(1, 10);