/* Write a function that takes a grocery list (a two-dimensional array) with each element 
containing a fruit and a quantity, and returns a one-dimensional array of fruits, in 
which each fruit appears a number of times equal to its quantity.

create empty array
iterate over each element in the outer array
  while the number at index 1 is greater than zero
  push item at index 0 to new array
return new array

 */

function buyFruit(nestedArr) {
  let newArr = [];
  nestedArr.forEach(pair => {
    let counter = pair[1];
    while (counter > 0) {
      newArr.push(pair[0]);
      counter -= 1;
    }
  })
  return newArr;
}

// practicing using reduce to flatten an array

let flatArr = [['apple', 3], ['orange', 1], ['banana', 2]].reduce((acc, pair) => acc.concat(pair), [])
console.log(flatArr)



console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]