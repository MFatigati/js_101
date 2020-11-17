// 1

/* let arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => Number(b) - Number(a));
console.log(arr); */

// 2
// How would you order the following array of objects based on the year
// of publication of each book, from the earliest to the latest?

/* let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a.published) - Number(b.published));
console.log(books); */

// 3
// access letter g

/* let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);
let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1].third[0]);
let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2].third[0][0]);
let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1.b[1]);
let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
console.log(Object.keys(obj2.third)[0]); */

// 4
// For each of these collection objects, demonstrate how you would change the value 3 to 4.

/* let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
console.log(arr1);

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
console.log(arr2);

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;
console.log(obj1);

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;
console.log(obj2); */

// 5
// Compute and display the total age of the male members of the family.

/* let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

totalAge = 0;

for (let name in munsters) {
  if (munsters[name]["gender"] === "male") {
    totalAge += munsters[name]["age"];
  }
}

console.log(totalAge); */

// 6

/* let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let name in munsters) {
  console.log(`${name} is a ${munsters[name].age}-year-old ${munsters[name].gender}.`)
}
console.log(Object.entries(munsters)) */

// 7
// a still equals 2, because it was passed by value

// 8
// Using the forEach method, write some code to output all vowels 
// from the strings in the arrays. Don't use a for or while loop.

/* let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let entries = Object.entries(obj);
//console.log(entries)
entries.forEach(function(entry) {
  // entry[1].forEach(word => console.log(String(word.match(/[aeiou]/g)))) // my initial solution, followed by mimicking LS solution
  entry[1].forEach(word => word.split("").forEach(letter => {
    if (/[aeiou]/.test(letter)) {
      console.log(letter);
    }}

  ))
}) */

// 9 
// Given the following data structure, return a new array with the same structure, 
// but with the subarrays ordered -- alphabetically or numerically as appropriate -- in ascending order.

/* let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

// console.log(arr.map(subArr => subArr.sort()))
// my initial answer, above, wouldn't work for more complex numbers, and it is also destructive

let sortedArr = arr.map(subArr => {
  if (typeof subArr[0] === "string") {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a, b) => a - b);
  }
});
console.log(arr);
console.log(sortedArr); */

// 10
// same as 9, but in descending order

/* let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let sortedArr = arr.map(subArr => {
  if (typeof subArr[0] === "string") {
    return subArr.slice().sort((a, b) => a - b);
  } else {
    return subArr.slice().sort((a, b) => b - a);
  }
});

console.log(arr);
console.log(sortedArr); */

// if the strings are converted to their UTF-16 code prior to comparison, why won't the generic b-a work???

// 9 redux
// Given the following data structure, return a new array with the same structure, 
// but with the subarrays ordered -- alphabetically or numerically as appropriate -- in ascending order.

/* let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArr = arr.map(subStr => {
  if (typeof subStr[0] === "string") {
    return subStr.slice().sort();
  } else {
    return subStr.slice().sort((a, b) => a - b);
  }
})
console.log(newArr);
 */
// 10 redux

// Perform the same transformation of sorting the subarrays we did in the previous 
// exercise with one difference; sort the elements in descending order.

/* let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArr = arr.map(subArr => {
  if (typeof subArr[0] === "number") {
    return subArr.slice().sort((a, b) => b - a);
  } else {
    return subArr.slice().sort((a, b) => {
      if (b > a) {
        return 1;
      } else if (a > b) {
        return -1;
      } else return 0;
    })
  }
})

console.log(newArr); */

// 11
// Given the following data structure, use the map method to return a new array identical in 
// structure to the original but, with each number incremented by 1. Do not modify the original data structure.
/* 
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let arr2 = JSON.parse(JSON.stringify(arr));

arr2.forEach(elem => {
  for (let prop in elem) {
    elem[prop] += 1;
  }
})

console.log(arr);
console.log(arr2);
 */

// 12
// Given the following data structure, use a combination of methods, including filter,
// to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

/* let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let arr2 = arr.slice().map(subArr => { // slice is unnecessary, since map returns new array
  return subArr.filter(elem => {
    return elem % 3 === 0
  })
})

console.log(arr2);
 */

// 13

// Given the following data structure, sort the array so that the sub-arrays are 
// ordered based on the sum of the odd numbers that they contain.

/* let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

console.log(arr.sort((a, b) => {
  let sumA = a.reduce((acc, elem) => {
    if (elem % 2 !== 0) {
      acc += elem;
    }
    return acc;
  });
  let sumB = b.reduce((acc, elem) => {
    if (elem % 2 !== 0) {
      acc += elem;
    }
    return acc;
  });
  console.log(sumA, sumB);
  return sumA - sumB;
})); */

// 14
// Given the following data structure write some code to return an array containing the colors of the 
// fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

/* let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let valuesObj = Object.values(obj); */
/* console.log(valuesObj);
let arr = [];

valuesObj.forEach(elem => {
  if (elem.type === "vegetable") {
    arr.push(elem.size.toUpperCase())
  } else {arr.push(elem.colors.map(x => x[0].toUpperCase() + x.slice(1)))}
}); */

// first used forEach, now using map below with helper function
/* 
let capitalize = x => x[0].toUpperCase() + x.slice(1);

let arr = valuesObj.map(elem => { 
  if (elem.type === "vegetable") {
    return elem.size.toUpperCase();
  } else {
    return elem.colors.map(x => capitalize(x))}
});

console.log(arr);
 */
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

// 15
// Given the following data structure, write some code to return an array which contains 
// only the OBJECTS where all the numbers are even.

/* let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
]; */

// iterate over each subObject
// iterate over each subArray value of each subObject
  // iterate over each element of each subArray
  // if any of the numbers are not even, continue
  // else, add the subArray to a new array

// let newArr = [];

/* function allEven(arr) {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
} */
/* 
arr.forEach(subObj => {
  for (let entry in subObj) {
    if (allEven(subObj[entry])) {
      newArr.push(subObj[entry])
    }
  }
})

console.log(newArr); */

// my solution above returned all the ARRAYS where numbers were even, whereas the prompt was looking for whole objects

/* let newArr = arr.filter(object => {
  for (let value in object) {
    if (allEven(object[value]) === false) {
      return false
    }
    // console.log(object[value]);
  }
  return true;
})

console.log(newArr); */

// now trying again just using filter and every, like the example

/* let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr = arr.filter(object => {
  return Object.values(object).every(subArr => {
    return subArr.every(elem => elem % 2 === 0)
  });
})

console.log(newArr) */

// 16

// Given the following data structure, write some code that returns an object where the 
// key is the first item in each subarray, and the value is the second.

/* let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let newObj = {};
arr.forEach(elem => {
  newObj[elem[0]] = elem[1];
})

console.log(newObj);
 */
// practice mimicking LS solution with more description variables
/* let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let newObj = {};
arr.forEach(elem => {
  let key = elem[0];
  let value = elem[1];

  newObj[key] = value;
})

console.log(newObj);
 */

// 17

// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f)
// represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern,
// e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// Write a function that takes no parameters and returns a UUID.


let randomHex = (length) => {
let hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
let str = "";
while (length > 0) {
  str += String(hexCharacters[Math.round(Math.random() * 15)])
  length -= 1;
  }
return str;
};

function createUUID() {
  return `${randomHex(8)}-${randomHex(4)}-${randomHex(4)}-${randomHex(4)}-${randomHex(12)}`;
}

console.log(createUUID())

