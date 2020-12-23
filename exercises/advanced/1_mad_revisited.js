/*

P
  I
    a template consisting of a sentence, with some
    nounds, adj, verb, and adv blanked out
  O
    a filled in template, using words from the word bank built into the function
  R
E
  see below
D
  store template as a string, so that you can use replacement on it
  store words as an array, so that they can be randomly accessed
A
within the function, define the arrays of substitute words
define a helper function that selects a random element from an input array

split intro string into an array.
  iterate over every item in the array.
    if noun, replace with random noun,
    etc

take the template, and replace every noun with a randomly chosen noun
  replace everything labeled noun with the return value of the helper function
take the template, and replace every adj with a randomly chosen adj
take the template, and replace every verb with a randomly chosen verb
take the template, and replace every adv with a randomly chosen adv


 */

const SUB_WORDS = {
  adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly']
}


function randomSubWord(wordTypeArr) {
  return wordTypeArr[Math.floor(Math.random() * wordTypeArr.length)];
}

/* function madlibs(template) {
  let splitTemplate = template.split(/\b/);
  for (let word = 0; word < splitTemplate.length; word += 1) {
    let wordToBeReplaced = splitTemplate[word]; // noun, adjective, etc.
    if (SUB_WORDS.hasOwnProperty(wordToBeReplaced)) {
      splitTemplate[word] = randomSubWord(SUB_WORDS[wordToBeReplaced])
    }
  }
  return splitTemplate.join("");
} */

// refactored using map

/* function madlibs(template) {
  let splitTemplate = template.split(/\b/);
  return splitTemplate.map(word => {
    if (SUB_WORDS.hasOwnProperty(word)) {
      return randomSubWord(SUB_WORDS[word])
    } else return word;
  }).join("");
} */

// need to solve the issue of accidentally treating real text as text to be replaced.

/* 
search for anything that matches the pattern ${}


*/

function replacePlaceholder(placeholder) {
  let justWordType = placeholder.match(/\w+/g)[0];
  let replacementWord = randomSubWord(SUB_WORDS[justWordType]);
  return replacementWord;
}

function madlibs(template) {
  // let newStr = template.replace(/!\{(\w+)\}/g, replacePlaceholder($1));
  // let newStr = template.replace(/!\{\w+\}/g, replacePlaceholder(match));
  let newStr = template.replace(/!\{\w+\}/g, replacePlaceholder);
  return newStr; 
}


let template1 = 'The !{adjective} brown !{noun} !{adverb} !{verb} the !{adjective} yellow !{noun}, who !{adverb} !{verb} his !{noun} and looks around.';

let template2 = "The !{noun} !{verb} the !{noun}'s !{noun}.";

console.log(madlibs(template1));
console.log(madlibs(template1));
console.log(madlibs(template2));
console.log(madlibs(template2));

