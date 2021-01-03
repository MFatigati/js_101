/* function range(end, start = 0) {
  let rangeArr = [];

  for (let element = start; element <= end; element++) {
    rangeArr.push(element);
  }

  return rangeArr;
}

/* function range(end) {
  return range(0, end);
} */

// Examples

/* console.log(range(20, 10));
console.log(range(5)); */


function range(start, end = -1) {
  if (end === -1) {
    end = start;
    start = 0;
  }

  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

/* function range(end) {
  return range(0, end);
} */

// Examples

console.log(range(10, 20));
console.log(range(5));