/*

i
  string word
o
  true if word can be spelled from blocks, false if not
r
  a block can only be used once, so if the word has both letters from a block, return false

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

e
d
  how to store the blocks?
    in a object
a
iterate over each item in the string
if there exists the value for letter key in the object later on in the string, return false
else, return true

*/

let blocks = {
  B:"O",   X:'K',   D:'Q',   C:'P',   N:'A',
  G:'T',   R:'E',   F:'S',   J:'W',   H:'U',
  V:'I',   L:'Y',   Z:'M',   O:'B',   K:'X',
  Q:'D',   P:'C',   A:'N',   T:'G',   E:'R',
  S:'F',   W:'J',   U:'H',   I:'V',   Y:'L',   M:'Z'
}

function isBlockWord(str) {
  str = str.toUpperCase();
  for (let i = 0; i < str.length; i += 1) {
    if (str.indexOf(blocks[str[i]], i + 1) !== -1 ||
        str.indexOf([str[i]], i + 1) !== -1) {
      return false
    }
  }
  return true;
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('bgvqsf'));       // false
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false