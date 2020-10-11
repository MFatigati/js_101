/* Write a program that will ask for user's name. The program will then greet 
the user. If the user writes "name!" then the computer yells back to the user.

P
input
  -a name
  -output
    -normal greeting if no exclamation mark at the end
    -capitalized greeting if exclamation mark at the end.

E
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

D
working in strings and code logic

A
require input library
ask user for input
get the length of the input string
check the final spot for whether it is an exclamation mark or not.
If it is not, return normal greeting.
Else, return capitalized greeting.

 */

console.clear()

let rlSync = require('readline-sync');

let name = rlSync.question('What is your name? ');

let nameLength = name.length;

if (name[nameLength - 1] !== "!") {
  console.log(`Hello ${name}.`);
} else {
  console.log(`HELLO ${name.toUpperCase().slice(0, nameLength - 1)}. WHY ARE WE SCREAMING?
  `)
}
