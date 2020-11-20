/* Write a function that takes two arguments, inventoryItem and transactions, and 
returns an array containing only the transactions for the specified inventoryItem.

for each subobject
  if id matches 101
  select entire subobject onto empty array

 */

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

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]