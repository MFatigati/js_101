function binarySearch(arr, searchTerm) {
  let low = 0;
  let high = arr.length - 1;
  let mid = Math.floor((high - low) / 2);
  // let count = 0;

  do {
    if (searchTerm < arr[mid]) {
      high = mid;
      mid = low + Math.floor((high - low) / 2);
    } else if (searchTerm > arr[mid]) {
      low = mid;
      mid = low + Math.ceil((high - low) / 2);
    }
    if (arr[mid] === searchTerm) {
      return mid;
    }
    // console.log(low, mid, high);
    // count += 1;
  }
  while (low !== mid && high !== mid/*  && count < 10 */);
  return -1;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6