/* function neutralize(sentence) {
  let words = sentence.split(" ");
  let newArr = [];


  words.forEach(word => {
    if (!isNegative(word)) {
      newArr.push(word);
    }
  });
  return newArr.join(" ");
}; */

function neutralize(sentence) {
  let words = sentence.split(" ");
  return words.filter(word => !isNegative(word)).join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.

// modifying the caller