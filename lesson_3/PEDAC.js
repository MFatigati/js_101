
let string = "holaback"
let startingindex = 0;

function substrings(str) {
for (let i = startingindex; i < string.length - 1; i += 1) {
  let numChars = 2;
  for (let j = numChars; j < string.length - startingindex; j += 1) {
    console.log `${string.slice(i, i + j)}`
  }

}
}

substrings(string);