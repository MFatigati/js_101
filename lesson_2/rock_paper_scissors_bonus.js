const rlSync = require('readline-sync');
const messages = require('./rock_paper_scissors.json');
const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'Spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['Spock', 'paper'],
  Spock: ['rock', 'scissors']
};
const VALID_CHOICES = Object.keys(WINNING_COMBOS);
const VALID_CHOICES_FIRST = VALID_CHOICES.map(x => x[0]); // ['r', 'p', 's', 'l', 'S'];

// I considered using a lookup table (below) to simplfy the validity check,
// but it would have broken the generateRandomInx() function,
// because that function relies on a length property, and that function
// is vital to generating a computer choice. So, one way or another, I needed
// an array of the valid choices.

/* const VALID_CHOICES_OBJ = {
  'rock': 'rock',
  'r': 'rock',
  'paper': 'paper',
  'p': 'paper',
  'scissors': 'scissors',
  's': 's',
  'lizard': 'lizard',
  'l': 'lizard',
  'Spock': 'Spock',
  'S': 'Spock'
}; */

// original functions for displayWinner() and returnWinner() below, before LS suggestion
// of using the WINNING_COMBOS data structure
/*
function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'Spock')) ||
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choice === 'lizard' && (computerChoice === 'Spock' || computerChoice === 'paper')) ||
      (choice === 'Spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie");
  } else {
    prompt('Computer wins!');
  }
}

function returnWinner(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'Spock')) ||
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choice === 'lizard' && (computerChoice === 'Spock' || computerChoice === 'paper')) ||
      (choice === 'Spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
    return "player";
  } else if (choice === computerChoice) {
    return "tie";
  } else {
    return "computer";
  }
} */

function displayWinner(playerChoice, computerChoice, comboObject) {
  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);
  if (comboObject[playerChoice].includes(computerChoice)) {
    prompt('You win!');
  } else if (playerChoice === computerChoice) {
    prompt("It's a tie");
  } else {
    prompt('Computer wins!');
  }
}

function returnWinner(playerChoice, computerChoice, comboObject) {
  if (comboObject[playerChoice].includes(computerChoice)) {
    return "player";
  } else if (playerChoice === computerChoice) {
    return "tie";
  } else {
    return "computer";
  }
}

function invalidChoice(chosenOne, validChoicesWholeWordsArr,
  validChoicesFirstLettersArr) {
  if ((validChoicesWholeWordsArr.includes(chosenOne) === false) &&
      (validChoicesFirstLettersArr.includes(chosenOne) === false)) {
    return true;
  } else {
    return false;
  }
}

function prompt(message) { // function declaration gets hoisted to be available to displayWinner()
  console.log(`=> ${message}`);
}

function generateRandomInx(arr) {
  return Math.floor(Math.random() * arr.length);
}

function blankLine() {
  console.log("");
}

//variations on the above function
/* function generateRandomInx() {
  return Math.ceil(((Math.random() * (VALID_CHOICES.length)) - 1));
}

function generateRandomInx() {
  return Math.round(Math.random() * (VALID_CHOICES.length -1));
} */

console.clear();

let playerCount = 0;
let computerCount = 0;
let tieCount = 0;
let totalGames = 0;

while (true) {
  prompt(`Choose one (case-sensitive): ${VALID_CHOICES.join(", ")} (or: ${VALID_CHOICES_FIRST.join(", ")})`);
  let initialUserChoice = rlSync.question();
  while (invalidChoice(initialUserChoice, VALID_CHOICES, VALID_CHOICES_FIRST)) {
    prompt(messages.invalidChoice);
    initialUserChoice = rlSync.question();
  }

  let randomIndex = generateRandomInx(VALID_CHOICES);
  let computerChoice = VALID_CHOICES[randomIndex];
  let revisedUserChoice = VALID_CHOICES[VALID_CHOICES_FIRST.indexOf(
    initialUserChoice[0])];
  /* "revisedUserChoice" is structured as it is so that it can be used as a
  parameter for returnWinner() and displayWinner(). I needed to account for the
  fact that, while the user can initially input the first letter or a a whole
  word for their choice. returnWinner() and displayWinner() rely on whole
  words. So we need to use the whole words as input for the functions,
  regardless of what the user chose. */

  blankLine();

  displayWinner(revisedUserChoice, computerChoice, WINNING_COMBOS);

  if (returnWinner(revisedUserChoice, computerChoice, WINNING_COMBOS) === "player") {
    playerCount += 1;
    totalGames += 1;
  } else if (returnWinner(revisedUserChoice, computerChoice, WINNING_COMBOS) === "computer") {
    computerCount += 1;
    totalGames += 1;
  } else if (returnWinner(revisedUserChoice, computerChoice, WINNING_COMBOS) === "tie") {
    tieCount += 1;
    totalGames += 1;
  }

  blankLine();
  if (playerCount < 5 && computerCount < 5) {
    prompt(`Score (first to five is grand winner):
    player = ${playerCount}, computer = ${computerCount}, ties = ${tieCount}
    (total matches = ${totalGames})`);
  } else if (playerCount === 5) {
    prompt(messages.playerWins);
    blankLine();
    break;
  } else if (computerCount === 5) {
    prompt(messages.computerWins);
    blankLine();
    break;
  }

  blankLine();
  prompt(messages.playAgain);
  let answer = rlSync.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt(messages.invalidPlayAgain);
    answer = rlSync.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
  console.clear();
}