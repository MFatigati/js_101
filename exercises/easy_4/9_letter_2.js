function wordSizes(str) {
  let obj = {}
  let wordArr = str.split(" ");
  wordArr.forEach(function(x) {
    if (x !== "") {
    let wordLength = x.match(/\w/g).length;
    obj[wordLength] = obj[wordLength] || 0; // rather than using hasOwnProperty()
    obj[wordLength] += 1;
    }
  })
  return obj;
}



console.log(
wordSizes('Four score and seven.'),                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!'),  // { "3": 5, "6": 3 }
wordSizes("What's up doc?"),                              // { "2": 1, "3": 1, "5": 1 }
wordSizes(''));                                            // {}