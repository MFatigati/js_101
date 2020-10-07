// ask the user for the first number
// ask the user for the second number
// ask the user for an operation to perform on both numbers
// perform the operation on the two numbers
// print result to terminal

let messages = require('./calculator_messages.json');

const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' || Number.isNaN(Number(number));
}

function invalidLang(lang) {
  return lang === "ar" || lang === "es" || lang === "en";
}

prompt(messages.settings.language);
let language = rlSync.question();

while (invalidLang(language) === false) {
  prompt(messages.settings.language);
  language = rlSync.question();
}


prompt(messages[language].welcome);

let again;

do {
  prompt(messages[language].firstNumPrompt);
  let number1 = rlSync.question();

  while (invalidNumber(number1)) {
    prompt(messages[language].invalidNum);
    number1 = rlSync.question();
  }

  prompt(messages[language].secondNumPrompt);
  let number2 = rlSync.question();

  while (invalidNumber(number2)) {
    prompt(messages[language].invalidNum);
    number2 = rlSync.question();
  }

  console.log(messages[language].operationChoice);
  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages[language].invalidChoice);
    operation = rlSync.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = number1 - number2; // only need to explicitly coerce numbers for addition.
      break;
    case '3':
      output = number1 * number2;
      break;
    case '4':
      output = number1 / number2;
      break;
  }

  console.log(`The result is: ${output}`);
  // Is there a way to store this message in the JSON object?
  // The variable seems to not work once it is stored in the JSON file.
  // This is my first time working with a JSON file.

  prompt(messages[language].again);
  again = rlSync.question();

  while (again !== "y" && again !== "n") {
    prompt(messages[language].invalidAgain);
    again = rlSync.question();
  }
}

while (again === "y");

prompt(messages[language].end);