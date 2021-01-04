/* 1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner. */
const rlSync = require("readline-sync");

const CARDS_IN_HAND = {
  human: [],
  computer: []
}

const HAND_VALUE = {
  human: 0,
  computer: 0
}

function createUnshuffledDeck() {
  let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  let unshuffledDeckArray = [];

  suits.forEach(suit => {
    values.forEach(value => {
      unshuffledDeckArray.push(`${value} of ${suit}`)
    })
  })
  return unshuffledDeckArray;
}

function initializeShuffledDeck(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
}

function generateRandomCard(deck) {
  let numCards = deck.length;
  let card = deck[Math.floor(Math.random() * numCards)]; // returns a number 0-51
  return card;
}

function determineCardValue(card, currentHandValue) {
  card = card.split(" ")[0];
  // console.log(card);
  if (card >= 2 && card <= 10) {
    return Number(card);
  } else if (card === "Ace") {
    if (currentHandValue <= 10) {
      return 11;
    } else return 1;
  } else return 10; // face cards
}

function removeDealtCard(card, deck) {
  deck.splice(deck.indexOf(card), 1);
}

function dealInitialCards(deck, hands) {
  let humanCard1 = generateRandomCard(deck);
  hands.human.push(humanCard1);
  removeDealtCard(humanCard1, deck);

  let computerCard1 = generateRandomCard(deck);
  hands.computer.push(computerCard1);
  removeDealtCard(computerCard1, deck);

  let humanCard2 = generateRandomCard(deck);
  hands.human.push(humanCard2);
  removeDealtCard(humanCard2, deck);

  let computerCard2 = generateRandomCard(deck);
  hands.computer.push(computerCard2);
  removeDealtCard(computerCard2, deck);
}

function dealNewCard(player, deck, hands) {
  let newCard = generateRandomCard(deck);
  hands[player].push(newCard);
}

function updateHandValue(player, valuesObject, hands) {
  valuesObject[player] = hands[player].map(determineCardValue).reduce((val, acc) => acc += val);
}

function displayGameStateHumanTurn(hands, valuesObject) {
  let humanCards = "";
  for (let card = 0; card < hands.human.length - 1; card += 1) {
    if (card === 0) {
      humanCards += hands.human[card];
    } else if (card > 0) {
      humanCards += ", " + hands.human[card];
    }
  }
  humanCards += " and " + hands.human[hands.human.length - 1];
  
  console.log(`Dealer has: ${hands.computer[0]} and an unknown card.
Player has: ${humanCards} (total value: ${HAND_VALUE.human})`)
}

let deck = initializeShuffledDeck(createUnshuffledDeck());

dealInitialCards(deck, CARDS_IN_HAND);
updateHandValue("human", HAND_VALUE, CARDS_IN_HAND);
updateHandValue("computer", HAND_VALUE, CARDS_IN_HAND);

let humanChoice = "hit";
let bust = false;

while (humanChoice === "hit" && bust === false) {
  displayGameStateHumanTurn(CARDS_IN_HAND, HAND_VALUE);
  let choice = rlSync.question("Type \"s\" to stay, or \"h\" to hit: ").trim()[0];
  while (choice !== "s" && choice !== "h") {
    choice = rlSync.question("Invalid choice. Type \"s\" to stay, or \"h\" to hit: ").trim()[0];   
  }
  if (choice === "s") {
    humanChoice = "stay";
  }

  dealNewCard("human", deck, CARDS_IN_HAND);
  console.log(CARDS_IN_HAND);
  updateHandValue("human", HAND_VALUE, CARDS_IN_HAND);

  if (HAND_VALUE.human > 21) { // extract?
    bust = true;
    console.log("Busted!")
  }
}