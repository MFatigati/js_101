/* sequence of consequtive even integers beginning with 2
grouped into rows, with first row containing one integer, second containing 2, third three
Given an integer representing the number of a particular row,
  return an integer representing the sum of the integers in that row

P
  I
    -integer representing the number of a row
  O
    -integer sum of integers in the input row
  R
    each row should be as long as its row number (row 3 has three rows)

    
E

  2         row 1 sum 2
  4, 6      row 2 sum 10
  8, 10, 12 row 3 sum 30

D
  rows are in an ordered sequence, and so should be stored in an array

A
  create empty array to hold rows
  populate array with rows, up to row number of input integer
    while row number is less than or equal to input integer
      create row
        row starts with the last element of the prior row, plus two
        while element number is less than or equal to row number
          add 2 to prior element
          push element into row
        push row onto empty array
        increrement row number
  return sum of final row

 */

 function sumRowNumber(finalRowNum) {
   let finalArr = [[2]];
   let rowNumber = 2;
   while (rowNumber <= finalRowNum) {
      let lastPriorArr = finalArr[finalArr.length-1];
      let lastPriorVal = lastPriorArr[lastPriorArr.length-1];
      row = createRow(rowNumber, lastPriorVal);
      finalArr.push(row);
      rowNumber += 1;
   }
   return finalArr[finalArr.length - 1].reduce((acc, x) => acc += x);
 }

 function createRow(rowNumber, lastPrior){
  let currentValue = lastPrior += 2;
  let row = [currentValue];
  while (row.length < rowNumber) {
    currentValue += 2;
    row.push(currentValue);
  }
  return row;
 }

 console.log(sumRowNumber(1));
 console.log(sumRowNumber(2));
 console.log(sumRowNumber(3));
 console.log(sumRowNumber(4));

 
/*  console.log(createRow(1, 0));
 console.log(createRow(2, 2));
 console.log(createRow(3, 6)); */