/* Write a function that takes a string argument containing one or more words, 
and returns a new string containing the words from the string argument. 
All five-or-more letter words should have their letters in reverse order. 
The string argument will consist of only letters and spaces. Words will be 
separated by a single space.

create empty array
Split the string into an array of words
Iterate over each word
  if the word length is five or more
    split word into array of letters
    reverse array
    join array
    push reversed version of word to the empty array
  if not, just push it
join the array with spaces
return the joined array


 */

/* function reverseWords(startStr) {
  let arr = startStr.split(" ");
  let finalArr = [];
  arr.forEach(function(word) {
    if (word.length >= 5) {
      word = word.split("").reverse().join("");
      finalArr.push(word);
    } else {
      finalArr.push(word);
    }
  });
  return finalArr.join(" ")


} */

// first solution using forEach above, second solution using map below

function reverseWords(startStr) {
  let arr = startStr.split(" ");
  let finalArr = arr.map(function(word) {
    if (word.length >= 5) {
      word = word.split("").reverse().join("");
      return word;
    } else {
      return word;
    }
  });
  return finalArr.join(" ")


}



console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"