/* Building on the previous exercise, write a function that returns true or false based on whether or 
not an inventory item is available. As before, the function takes two arguments: an inventory item and 
a list of transactions. The function should return true only if the sum of the quantity values of the 
item's transactions is greater than zero. Notice that there is a movement property in each transaction 
object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise. 

P
  I: id and inventory
  O: true or false
  R: quantity for a particular id goes up by all the amounts labeled as "in", down by any "out"
      return true at end if total is greater than zero

E
  see below
D

A
filter all transactions related to a particular id
set a quantity variable to zero
for each transaction
  if movement is in, add quantity
  if movement is out, sub quantity
return true if quantity greater than zero, otherwise false

*/

function isItemAvailable(id, transArr) {
  let relevantArr = transactionsFor(id, transArr);
  let quantity = relevantArr.reduce((acc, subObj) => {
    if (subObj.movement === "in") {
      acc += subObj.quantity;
    } else {
      acc -= subObj.quantity;
    }
    return acc;
  }, 0)
  return quantity > 0;
}

function transactionsFor(id, transArr) {
  return transArr.filter(subObj => {
    return subObj["id"] === id
  })
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true