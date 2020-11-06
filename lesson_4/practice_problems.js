// 1

// [1, 2, 3] because filter selects the current value whenever its callback returns a truthy value
// and in this case, it will always return a truthy value

// 2
// returns empty array because there is no return statement in the callback function
// correction: returns [undefined, undefined, undefined] because the callback function,
// without a return statement, returns undefined.

/* 3
will now return [1, 4, 9], because without curly braces a single line in an array function
is an implied return statement

*/

/* 4
11, because the length property is being called on the return value of pop, which is 'caterpillar'

*/

/* 5
each iteration of the callback will have a different return value: 2, 4, 6;
because these are all truthy values, ```every``` will return true at the end 

*/

/* 6
looking at the documentation, fill is desctrutive, and takes three possible arguments:
-first one is necessary, the number to replace array elements with
-second one is the starting point for the replacement
  -if no entry, defaults to 0
-third is end point for replacement
  -if not entry, continues to end

*/


/* 7 
[undefined, 'bear']

Because ```map``` populates the new array with the return value of each iteration of 
the function. A function that does not explicitly return anything returns undefined.

*/

/* 8 

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let arr = flintstones.reduce(function(acc, x) {
  acc[x] = flintstones.indexOf(x);
  return acc;
}, {})

console.log(arr);

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
*/

/* 9
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Object.values(ages).reduce((acc, x) => acc += x));
*/

/* 10

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Object.values(ages).sort()[0]);

// alterative

console.log(Math.min(...Object.values(ages)));
*/

/* 11 */

/* let statement = "The Flintstones Rock";

let letters = statement.split("")
letters = letters.filter(x => /\w/.test(x))
let lettersObj = letters.reduce(function(acc, x) {
  acc[x] ? acc[x] += 1 : acc[x] = 1;
  return acc;
}, {})

console.log(lettersObj); */

let statement = "The Flintstones Rock";

let letters = statement.split("")
letters = letters.filter(x => /\w/.test(x))
let lettersObj = letters.reduce(function(acc, x) {
  acc[x] = acc[x] || 0; // mimicking LS solution using binary operator instead of ternary, like I did
  acc[x] += 1;
  return acc;
}, {})

console.log(lettersObj);

/// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
