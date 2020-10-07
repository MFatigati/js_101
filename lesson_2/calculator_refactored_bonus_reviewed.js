// ask the user for the first number
// ask the user for the second number
// ask the user for an operation to perform on both numbers
// perform the operation on the two numbers
// print result to terminal

console.clear();

let messages = require('./calculator_messages.json');

const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' || Number.isNaN(Number(number));
}

function validLang(lang) { //change: from invalidLang to validLang to make more sense of the return value
  lang = lang.toLowerCase(); // change: made this case insensitive
  return lang === "ar" || lang === "es" || lang === "en";
}

prompt(messages.settings.language);
let language = rlSync.question().toLowerCase(); // change: made this case insensitive

while (validLang(language) === false) {
  prompt(messages.settings.language);
  language = rlSync.question();
}

prompt(messages[language].welcome);

let playAgain; // changed name from again to playAgain to be more descriptive

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

  number1 = Number(number1); // added explicit coercion here, rather than at the questions above, so that I did not interfere with the invalidNumber function
  number2 = Number(number2);

  let output;
  switch (operation) {
    case '1':
      output = number1 + number2; // removed explicit coercion here
      break;
    case '2':
      output = number1 - number2;
      break;
    case '3':
      output = number1 * number2;
      break;
    case '4':
      output = number1 / number2;
      break;
  }

  console.log(messages[language].result + output);

  prompt(messages[language].again);
  playAgain = rlSync.question().toLowerCase(); // change: made this case insensitive and name more descriptive

  while (playAgain !== "y" && playAgain !== "n") {
    prompt(messages[language].invalidAgain);
    playAgain = rlSync.question().toLowerCase();  // change: made this case insensitive and name more descriptive
  }
  console.clear();
}

while (playAgain === "y");

prompt(messages[language].end);