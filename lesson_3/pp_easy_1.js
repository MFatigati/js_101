/* question 6

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

console.log(Object.assign(ages, additionalAges)); */

/* question 7

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(/Dino/.test(str1));
console.log(/Dino/.test(str2)); */

/* 8

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.concat("Dino", "test");
console.log(flintstones); */

// 9

// let advice = "Few things in life are as important as house training your pet dinosaur.";
// console.log(advice.match(/.+(?=house)/g)[0]);

let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.slice(0, advice.indexOf("house")));

console.log("This is a test".indexOf("s"));
console.log("This is a test".slice(3));