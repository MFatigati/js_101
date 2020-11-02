/* Write a function that counts the number of occurrences of each element in a 
given array. Once counted, log each element alongside the number of occurrences. 
Consider the words case sensitive e.g. ("suv" !== "SUV").

P
  i
    array of string elements
  o
    log of each occuring case-sensitive element, alongside how many times it occured
  r
    occurences are case sensitive
E
  see below
D
  store case sensitive elements in an object, updating occurences value
A
  create an empty object
  iterate over each item in the array
    if the property already exists in the object, increase its value by one
    if the property does not exist in the object, add it with the value of one
  iterate through the object
    log each key alongside its value

 */
/* 
function countOccurrences(arr) {
  let ocurrences = {};
  arr.forEach(function(currentValue) {
    if (ocurrences.hasOwnProperty(currentValue)) {
      ocurrences[currentValue] += 1;
    } else {
      ocurrences[currentValue] = 1;
    }
    }
  )
  logOccurences(ocurrences)
  
}

function logOccurences(ocurrencesObj) {
  for (let prop in ocurrencesObj) {
    console.log(prop + " => " + ocurrencesObj[prop])
  }
}


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck', 'Car', 'Car', 'Truck',];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
Car => 2
Truck => 1 */

function countOccurrencesCI(arr) {
  let ocurrences = {};
  arr.forEach(function(currentValue) {
    currentValue = currentValue.toLowerCase();
    if (ocurrences.hasOwnProperty(currentValue)) {
      ocurrences[currentValue] += 1;
    } else {
      ocurrences[currentValue] = 1;
    }
    }
  )
  logOccurences(ocurrences)
  
}

function logOccurences(ocurrencesObj) {
  for (let prop in ocurrencesObj) {
    console.log(prop + " => " + ocurrencesObj[prop])
  }
}


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck', 'Car', 'Car', 'Truck',];

countOccurrencesCI(vehicles);

// console output -- your output sequence may be different
car => 6
truck => 4
SUV => 1
motorcycle => 2