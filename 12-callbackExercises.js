function mapArray(arr, cb) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const transformedCurrentElement = cb(currentElement);
    newArr[i] = transformedCurrentElement;
  }

  return newArr;
}

console.log(mapArray([1, 2, 3], (item) => item + 5));
console.log([1, 2, 3].map((item) => item + 5));

console.log([6, 2, 1, 7, 3, 9].filter((item) => item > 5));

function filterArr(arr, cb) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const isIncluded = cb(currentElement);
    if (isIncluded) {
      newArr.push(currentElement);
    }
  }

  return newArr;
}

console.log(filterArr([6, 2, 1, 7, 3, 9], (item) => item > 5));
