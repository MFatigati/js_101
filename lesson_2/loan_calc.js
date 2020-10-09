console.clear();

let rlSync = require('readline-sync');

function prompt(message) {
  console.log("=> " + message);
}

function blankLine() {
  console.log("");
}

function invalidInput(input) {
  return input !== input;
}

let messages = require('./loan_calc_messages.json');

prompt(messages.greeting);
blankLine();

let loanTotal;
let loanAPR;
let loanDurationYears;
let confirmAmounts;
let monthlyPayment;
let playAgain;

do {

  do {
    prompt(messages.inputLoanAmount);
    loanTotal = parseFloat(rlSync.prompt().replace(/,/g, '').match(/\d.*/));
    while (invalidInput(loanTotal)) {
      prompt(messages.invalidLoanAmount);
      loanTotal = parseFloat(rlSync.prompt().replace(/,/g, '').match(/\d.*/));
    }

    prompt(messages.inputAPR);
    loanAPR = parseFloat(rlSync.prompt().replace(/,/g, '').match(/\d.*/));
    while (invalidInput(loanAPR)) {
      prompt(messages.invalidAPR);
      loanAPR = parseFloat(rlSync.prompt().replace(/,/g, '').match(/\d.*/));
    }

    prompt(messages.inputDuration);
    loanDurationYears = parseFloat(rlSync.prompt().replace(/,/g, '').match(/\d.*/));
    while (invalidInput(loanDurationYears)) {
      prompt(messages.invalidDuration);
      loanDurationYears = parseFloat(rlSync.prompt().replace(/,/g, '').match(/\d.*/));
    }

    blankLine();
    prompt(messages.displayInputs);
    console.log(`
  Total loan amount: $${loanTotal}
  Loan APR: ${loanAPR}%
  Loan Duration: ${loanDurationYears} years`);

    blankLine();
    prompt(messages.confirmInputs);
    confirmAmounts = rlSync.prompt().toLowerCase();
    while (confirmAmounts !== "y" && confirmAmounts !== "n") {
      prompt(messages.invalidConfirmation);
      confirmAmounts = rlSync.prompt().toLowerCase();
    }
    if (confirmAmounts === "n") {
      prompt(messages.tryAgain);
      blankLine();
    }

  }

  while (confirmAmounts === "n");

  let loanDurationMonths = loanDurationYears * 12;
  let monthlyRate = (loanAPR / 100) / 12;

  if (monthlyRate === 0) {
    monthlyPayment = (loanTotal / loanDurationMonths).toFixed(2);
  } else if (loanDurationMonths === 0) {
    monthlyPayment = loanTotal.toFixed(2);
  } else {
    monthlyPayment = loanTotal * (monthlyRate /
    (1 - Math.pow((1 + monthlyRate), (-loanDurationMonths))));
    monthlyPayment = monthlyPayment.toFixed(2);
  }

  console.clear();
  console.log(`
  Total loan amount: $${loanTotal}
  Loan APR: ${loanAPR}%
  Loan Duration: ${loanDurationYears} years`);
  blankLine();
  prompt(messages.displayPayment + monthlyPayment);

  blankLine();
  prompt(messages.runAgain);
  playAgain = rlSync.question().toLowerCase();
  while (playAgain !== "y" && playAgain !== "n") {
    prompt(messages.invalidConfirmation);
    playAgain = rlSync.prompt().toLowerCase();
  }

  console.clear();

}

while (playAgain === "y");

console.clear();

prompt(messages.goodbye);
blankLine();


/* Notes on dealing with 0 values for APR and duration:
  if loanDurationYears === 0, monthlyPayment === infnity
  any number raised to power of 0 = 1

  if loanAPR === 0, monthlyPayment === NaN
  1 raised to the power of anything = 1 */

/*
P
  input
    the loan amount
    the Annual Percentage Rate (APR)
    the loan duration
  output
    -monthly payment amount as dollars and cents
      e.g., $123.45

  rules
    let m = p * (j / (1 - Math.pow((1 + j), (-n))));
      m = monthly payment
      p = loan amount
      j = monthly interest rate
        -need to calculate prior to formula
      n = loan duration in months
        -need to calculate prior to formula

E
  see calculator website
  test for 0% apr
  test for 0 dollar loan
  test for decimal points and non-decimal points

D
  will primarily be handled with numbers, variables and code logic

A
Calculate monthly payment on a loan based off of user input.
  Clear console and greet user.
  Ask user to input the following, and store them as variables.
    the loan amount
      Needs to remove preceding dollar sign
      Need to handle commas
    the Annual Percentage Rate (APR) (allow zero interest)
      Needs to account for percentage sign at end (parseInt)
    the loan duration (in years) (allow floating point numbers)
      Needs to trim years (parseInt)
  Based off the loan duration in years, calculate it in months by dividing
    by twelve. Store in variable.
  Based off the APR, calculate it in months by dividing by twelve.
    Store in variable.
  Feed appropriate variables into the formula above,
    and store return in a variable.
  Print final value.
  Ask if they want to perform another operation.
    -If so, clear and return to the top.
    -If not, clear and say goodbye.

*/
