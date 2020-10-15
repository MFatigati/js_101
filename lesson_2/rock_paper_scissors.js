const rlSync = require('readline-sync');
const messages = require('./rock_paper_scissors.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

function prompt(message) { // function declaration gets hoisted to be available to displayWinner()
  console.log(`=> ${message}`);
}

function generateRandomInx() {
  return Math.floor(Math.random() * VALID_CHOICES.length);
}

//variations on the above function
/* function generateRandomInx() {
  return Math.ceil(((Math.random() * (VALID_CHOICES.length)) - 1));
}

function generateRandomInx() {
  return Math.round(Math.random() * (VALID_CHOICES.length -1));
} */

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = rlSync.question();
  while (!VALID_CHOICES.includes(choice)) {
    prompt(messages.invalidChoice);
    choice = rlSync.question();
  }

  let randomIndex = generateRandomInx();
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt(messages.playAgain);
  let answer = rlSync.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt(messages.invalidPlayAgain);
    answer = rlSync.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}