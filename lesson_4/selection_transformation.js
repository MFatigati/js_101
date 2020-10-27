/* let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
}; */

/* function selectFruit(produceArr) {
  let fruitObj = {};
  for (let item in produceArr) {
    if (produceArr[item] === "Fruit") {
      fruitObj[item] = produceArr[item];
    }
  }
  return fruitObj;
} */

// both solutions work, just practicing iterating over object with keys array below

/* function selectFruit(produceObj) {
  let fruitObj = {};
  let itemArr = Object.keys(produceObj);
  for (let i = 0; i < itemArr.length; i += 1) {
    let currentItem = itemArr[i];
    let currentType = produceObj[currentItem];
    if (currentType === "Fruit") {
      fruitObj[currentItem] = "Fruit";
    }

  }
  
  return fruitObj;
} */

/* 
console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    numbers[counter] = numbers[counter] * 2;
    counter += 1;
  }

  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6] // needs to be mutated on new implementation */
/* 
function doubleOddNumbers(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];

console.log(doubleOddNumbers(myNumbers));  // => [1, 8, 3, 14, 2, 12]

// not mutated
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]
 */


let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(numArr, multiplier) {
  let newArr = [];
  for (let i = 0; i < numArr.length; i += 1) {
    newArr.push(numArr[i] * multiplier)
  }
  return newArr;
}

console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]