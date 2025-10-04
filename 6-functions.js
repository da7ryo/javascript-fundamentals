// **** INTRODUCTION TO FUNCTIONS ****
// Functions are like machines. They can(but don't need) recive inputs,
// they can do an action, and they can(but don't need) result in a value.
// Functions are also good for grouping repetative tasks.

// Just grouping and doing an action

function greet() {
  console.log('Hi!');
  console.log('Today is a good day');
  console.log('Bye!');
}

greet();
greet();
greet();

// Receiving input and doing an action

function greetWithName(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`);
  console.log('Today is a good day');
  console.log('Bye!');
}

greetWithName('Dario', 'Milanovic');
greetWithName('Mateo', 'Vukovic');

// When we define a function(declare a function, create a function) the variables that we define
// that can be used in that function are called parameters. The actual values that we are using
// when we call a function are called arguments. When we are calling a function before old the code
// that we have written, if we have defined parameters for each parameter a variable will be created
// and the value of this variable will be the value of the arguments that we used when calling the function.

function sum(a, b) {
  const result = a + b;
  return result;
}

const result = sum(5, 3);
console.log(result);

console.log(sum(4, 8));

function calc(a, b, operation) {
  if (operation === 'mult') {
    return a * b;
  }
  if (operation === 'add') {
    return a + b;
  }
  if (operation === 'sub') {
    return a - b;
  }
  if (operation === 'div') {
    return a / b;
  }
}

console.log(calc(4, 7, 'mult')); // Operations: "add", "sub", "mult", "div"
