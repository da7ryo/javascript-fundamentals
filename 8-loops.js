// **** FOR LOOP ****
// Steps
// First step: let i = 1;
// Second step: i <= 10; if this is true it will go in block and execute code,
// if this is false it will finish the loop and continue with the code after the loop
// Third step: after code execution in block, do i++ and go back to step 2

for (let i = 1; i <= 10; i++) {
  console.log(i);
  console.log('Hello world!');
}

for (let i = 100; i > 0; i--) {
  console.log(i);
}

const arr = ['Germany', 'Croatia', 'Italy', 'Spain', 'Hungary'];

for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}

for (let i = 0; i <= 20; i++) {
  if (i === 8) {
    break;
  }
  console.log(i);
}

for (let i = 0; i <= 20; i++) {
  if (i === 8) {
    continue;
  }
  console.log(i);
}

// **** WHILE LOOP ****
// We use while loop mainly if we don't know in advance how many literations we need
// We use for loop if we know how many literations we need

let i = 0;
let sum = 0;
while (i <= 10) {
  console.log(i);
  sum += i;
  console.log(sum);
  i++;
}

console.log(sum);

function multByTwo(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];
    newArr.push(currentItem * 2);
  }

  return newArr;
}

console.log(multByTwo([2, 3, 5]));
