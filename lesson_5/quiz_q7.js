function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);

// for each iteration, the index advances, 


// [1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]
// index 0 => 1
// ̧length 11
// push n/a

// [3, 4, 2, 4, 6, 5, 7, 9, 10, 12]
// index 1 => 4
// length 10
// push 4

// [4, 2, 4, 6, 5, 7, 9, 10, 12]
// index 2 => 4
// length 9
// push 4

// [2, 4, 6, 5, 7, 9, 10, 12]
// index 3 => 5
// length 8
// push n/a

// [4, 6, 5, 7, 9, 10, 12]
// index 4 => 9
// length 7
// push n/a

// [6, 5, 7, 9, 10, 12]
// index 5 => 12
// length 8
// push 12

// [1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]
// index
// length
// push

// [1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]
// index
// length
// push

// 4, 4, 12