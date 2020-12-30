/* 
P
  I
    array, search item
  O
    index of search item in array, or -1 if does not exist
  R
    perform search by cutting array in half.
      if value is less than middle
        discard upper half, repeat process with lower half
      if value is greater than middle
        discard lower half, repeat process with upper half
      repeat until middle term equals search term
    may need to deal with even number
E
D
A
create checkArray variable assigned to input array
Set a middleindex variable equal to half the length of the checkArray, rounded up

while true
reassign middleindex variable equal middleindex plus half the length of the checkArray, rounded up
check if middle is equal to search item
  if so, return middleindex
slice from zero to middle index
slice from middle index to end
  if less than middle index
    set checkArray to bottom half
  if greater than middle index
    set checkArray to upperhalf

 */

 function binarySearch(inputArr, searchTerm) {
   let arrToCheck = inputArr;
   let middleIndexCount = Math.floor(arrToCheck.length / 2);
   // let count = 0;

   while (true) {
     let currentMiddleIndex = Math.floor(arrToCheck.length / 2);
     if (arrToCheck.length === 1) {
      if (searchTerm === arrToCheck[currentMiddleIndex]) {
        return 0;
      } else return -1;
    }

     if (searchTerm === arrToCheck[currentMiddleIndex]) {
       return middleIndexCount;
     }

     let firstHalf = arrToCheck.slice(0, currentMiddleIndex);
     let secondHalf = arrToCheck.slice(currentMiddleIndex);
     
     if (searchTerm < arrToCheck[currentMiddleIndex]) {
       arrToCheck = firstHalf;
       middleIndexCount = middleIndexCount - Math.floor(arrToCheck.length / 2);
     }
     if (searchTerm > arrToCheck[currentMiddleIndex]) {
       arrToCheck = secondHalf;
       middleIndexCount = middleIndexCount + Math.floor(arrToCheck.length / 2);
     }
     // console.log(arrToCheck, middleIndexCount)
   }
 }


let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6