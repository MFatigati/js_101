let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
let sorted = [...scores]

sorted.sort((a, b) => {
  let scoreA = a.reduce((acc, x) => acc + x);
  let scoreB = b.reduce((acc, x) => acc + x);
  return scoreA - scoreB;
}
)

console.log(scores);
console.log(sorted); // [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];
