/* Modify the function from the previous exercise so it ignores non-alphabetic characters 
when determining whether it should uppercase or lowercase each letter. The non-alphabetic 
characters should still be included in the return value; they just don't count when toggling the desired case.

 */


let staggeredCase = function(str, skipNonAlpha = true) {
  let evenOrOdd = 0;
  let startingArr = str.split("");
  let newArr = [];
  startingArr.forEach((char) => {
    if (/[A-z]/.test(char)) {
      if (evenOrOdd % 2 === 0) {
        newArr.push(char.toUpperCase())
      } else {newArr.push(char.toLowerCase())};
      evenOrOdd += 1;
    } else {
      newArr.push(char);
      if (skipNonAlpha === false) {
        evenOrOdd += 1;
      }
    }
  })
  let finalArr = newArr.join("");
  console.log(finalArr);
  return finalArr;
}



console.log(staggeredCase("I Love Launch School!", false) === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS", false) === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers", false) === "IgNoRe 77 ThE 444 nUmBeRs"
);