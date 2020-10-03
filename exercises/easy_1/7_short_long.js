/* Write a function that takes two strings as arguments, determines the longer of the two strings, 
and then returns the result of concatenating the shorter string, the longer string, and the shorter 
string once again. You may assume that the strings are of different lengths.

P
  Input
    -two strings, one short, one long, in no particular order
  Output
    -a single string consisting of short + long + short
  Rules
    -the shorter string can be empty
    -the strings are in no particular order
E
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

D
determing length and concatating strings can be performed while keeping them strings

A
First, assign each string to a variable to work with. Then, determine which string is longer. If
the first value is longer, return a concat of second first second. Otherwise, return vice versa.

*/

function shortLongShort(string1, string2) {
if (string1.length > string2.length) {
  return string2 + string1 + string2;
 } else {
  return string1 + string2 + string1
 }
}



console.log(
shortLongShort('abc', 'defgh'),
shortLongShort('abcde', 'fgh'),
shortLongShort('', 'xyz'))