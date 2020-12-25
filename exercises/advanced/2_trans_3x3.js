/* 

P
  i: three nested arrays
  o: three transposed nested arrays
E
[[1, 4, 3], [5, 7, 9], [8, 2, 6]]

[[1, 5, 8], [4, 7, 2], [3, 9, 6]]

B[0][0] = A[0][0]
B[1][0] = A[0][1]
B[2][0] = A[0][2]
B[0][1] = A[1][0]
B[1][1] = A[1][1]
B[2][1] = A[1][2]
B[0][2] = A[2][0]
B[1][2] = A[2][1]
B[2][2] = A[2][2]

D
A


*/

function transpose(arrA) {
  let arrB = [];
  arrA.forEach(_ => arrB.push([]));

  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrA[i].length; j++) {
      arrB[j][i] = arrA[i][j];
    }
  }/* 

  B[0][0] = A[0][0]
  B[0][1] = A[1][0]
  B[0][2] = A[2][0]
  B[1][0] = A[0][1]
  B[1][1] = A[1][1]
  B[1][2] = A[2][1]
  B[2][0] = A[0][2]
  B[2][1] = A[1][2]
  B[2][2] = A[2][2] */

  return arrB;
}



const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]