/* 
P
  I
    MxN matrix
  O
    matrix rotated 90 degrees
  R
E

let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

3  4  1
9  7  5
6  2  8

ArrA ArrB

ArrB[0][0] = ArrA[2][0]
ArrB[0][1] = ArrA[1][0]
ArrB[0][2] = ArrA[0][0]
ArrB[1][0] = ArrA[2][1]
ArrB[1][1] = ArrA[1][1]
ArrB[1][2] = ArrA[0][1]
ArrB[2][0] = ArrA[2][2]
ArrB[2][1] = ArrA[1][2]
ArrB[2][2] = ArrA[0][2]

ArrA[0][0] = ArrB[0][2]
ArrA[0][1] = ArrB[1][2]
ArrA[0][2] = ArrB[2][2]

ArrA[1][0] = ArrB[0][1]
ArrA[1][1] = ArrB[1][1]
ArrA[1][2] = ArrB[2][1]

ArrA[2][0] = ArrB[0][0]
ArrA[2][1] = ArrB[1][0]
ArrA[2][2] = ArrB[2][0]

D
A
iterate over each item of the outer array of ArrA
  iterate over each item of the inner array

*/

function rotate90(ArrA) {
  let ArrB = [];
  ArrA[0].forEach(_ => ArrB.push([]));

/*   for (let i = 0; i < ArrA.length; i++) {
    for (let j = 0; j < ArrA[i].length; j++) {
      ArrB[i][j] = ArrA[ArrA.length - 1 - j][i];
    }
  } */

  for (let i = 0; i < ArrA.length; i++) {
    for (let j = 0; j < ArrA[i].length; j++) {
      ArrB[j][ArrA.length - 1 - i] = ArrA[i][j];
    }
  }


  /* ArrB[0][0] = ArrA[2][0]
  ArrB[0][1] = ArrA[1][0]
  ArrB[0][2] = ArrA[0][0]
  ArrB[1][0] = ArrA[2][1]
  ArrB[1][1] = ArrA[1][1]
  ArrB[1][2] = ArrA[0][1]
  ArrB[2][0] = ArrA[2][2]
  ArrB[2][1] = ArrA[1][2]
  ArrB[2][2] = ArrA[0][2] */

  
  
/*
  ArrB[0][1] = ArrA[0][0] // 3
  ArrB[1][1] = ArrA[0][1] // 7
  ArrB[2][1] = ArrA[0][2]
  ArrB[3][1] = ArrA[0][3]

  ArrB[0][0] = ArrA[1][0] // 5
  ArrB[1][0] = ArrA[1][1] // 1
  ArrB[2][0] = ArrA[1][2]
  ArrB[3][0] = ArrA[1][3] */
  
  
 

  return ArrB;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]