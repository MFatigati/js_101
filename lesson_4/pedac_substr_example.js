function substrings1(str) {
let result = []
let startingindex = 0;

  while (startingindex <= str.length - 2) {
    let numChars = 2;
    while (numChars <= str.length - startingindex) {
      let substring = str.slice(startingindex, startingindex + numChars);
      result.push(substring);
      numChars += 1;
  }
    startingindex += 1;


  }
return result
}
/*
for each starting index from 0 through the next to last index position
  for each substring length from 2 until there are no substrings of that length
    extract the substring of the indicated length starting at the indicate index position
  end of inner loop
end of outer loop

iterate over each character in the string, from 0, to the second to last position
  iterate over the length of each substring, from the original index plus two, to the end
    extract each substring and push it onto an array.
  end of inner loop
end outer loop

*/

function substrings2(str) {
  let arr = [];
  for (let startingIndex = 0; startingIndex < str.length - 1; startingIndex += 1) {
    for (let endIndex = startingIndex + 2; endIndex <= str.length; endIndex += 1) {
      arr.push(str.slice(startingIndex, endIndex))
    }
  }
  return arr;
}







console.log(substrings1("holaback"));
console.log(substrings2("holaback"));



/* sakflkasdjf
asdlfkjaslkdjf
sdlkfjlkadsjf



 */