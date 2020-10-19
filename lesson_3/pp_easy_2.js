/* 1

let advice = "Few things in life are as important as house training your important pet dinosaur.";
console.log(advice.replace(/important/g, "urgent")) */

/* 2

let numbers = [1, 2, 3, 4, 5];
let newArr = numbers.slice(0)
newArr.reverse();
console.log(newArr); // [ 5, 4, 3, 2, 1 ]

let newArr2 = [...numbers]
newArr2.sort((num1, num2) => num2 - num1);
console.log(newArr2); // [ 5, 4, 3, 2, 1 ]

let newArr3 = [];
numbers.forEach(function(x) {
  newArr3.unshift(x);
})
console.log(newArr3);
console.log(numbers); */

// 3 just use .includes()

/* 4

let famousWords = "seven years ago...";

console.log("Four score and " + famousWords);
console.log("Four score and ".concat(famousWords)); */

/* 5

let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);
console.log(arr); */

/* 6

console.log(["Fred", "Wilma"].concat(["Barney", "Betty"]).concat(["Bambam", "Pebbles"]));

let arr1 = ["Fred", "Wilma"];
let arr2 = ["Barney", "Betty"];
let arr3 = ["Bambam", "Pebbles"];

arr1.push(...arr2);
arr1.push(...arr3);
console.log(arr1);

let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
flintstones = [].concat(...flintstones);
console.log(flintstones); */

/* 7

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
console.log(Object.entries(flintstones)[2]); */

/* 8

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers));
console.log(Array.isArray(table)); */

/* 9

let title = "Flintstone Family Members";
let sideSpaces = " ".repeat(Math.floor((40 - title.length) / 2));
console.log(sideSpaces + title + sideSpaces); */

// 10

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log((statement1.match(/t/g) || []).length);
console.log((statement2.match(/t/g) || []).length);

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);