/*

create and empty arr
iterate over ever item in the input array
  match that item to its index in the words array to get the word
  compare that word to the next word in the words array
  
the insight behind this solution is to create a special sorting function that using the numbers
in the input array to access the relevant words in the word array. It then returns the numbers
that sort needs to make its decision about what to do with the original numbers. but the numbers
are being sorted based off of the decision made about the words.

 */

let wordsArr = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
]

function specialSort(a, b) {
  if (wordsArr[a] < wordsArr[b]) {
    return -1
  } else if (wordsArr[a] > wordsArr[b]) {
    return 1
  } else if (wordsArr[a] === wordsArr[b]) {
    return 0
  }
}


function alphabeticNumberSort(inputArr) {
  // return inputArr.sort(specialSort);
  return inputArr.sort(function(a, b) {
    return specialSort(a, b);
  })
}


console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]