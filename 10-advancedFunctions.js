// **** THREE TYPES OF FUNCTIONS ****

// Function declaration
logName('Toni');
function logName(name) {
  console.log(`Hello ${name}`);
}

logName('Mateo');

// Function expression

const logName2 = function (name) {
  console.log(`Hello ${name}`);
};

logName2('Mateo');

// Arrow function

const logName3 = (name) => {
  console.log(`Hello ${name}`);
};

logName3('Ana');

const add1 = (a, b) => {
  const result = a + b;
  return result;
};

const add2 = (a, b) => a + b;

// **** THIS KEYWORD ****

function f2() {
  // this = when the functions is called in the begining of that function a variable is created with the name "this"
  // the value of the variable depends on how the function was called
  console.log(this);
}

// In a regualar function call this gets the value of the global object
f2();

function calcBirthdate() {
  console.log(this);
}
const obj1 = {
  firstName: 'Mateo',
  age: 27,
  // When a property of a object has a function as the value, we called that property method

  calcBirthdate: calcBirthdate,
};

const obj2 = {
  firstName: 'Dario',
  age: 33,
  // When a property of a object has a function as the value, we called that property method

  calcBirthdate: calcBirthdate,
};

// If a function is called as a method on a object, this get the value of this object that has called the method

obj1.calcBirthdate();

obj2.calcBirthdate();
calcBirthdate();

console.log('age');

global.console.log(5);

const arr = [];
arr.push('Dario');

function copyObj(obj) {
  const newObj = {};

  const propertyNames = Object.keys(obj);

  for (let i = 0; i < propertyNames.length; i++) {
    const currentName = propertyNames[i];

    newObj[currentName] = obj[currentName];
  }

  return newObj;
}

const obj3 = copyObj(obj1);
obj3.firstName = 'Nikola';

console.log(obj1);
console.log(obj3);

const dog = {
  vrsta: 'Pitt Bull',
  boja: 'smedja',
  sound: function () {
    console.log('wow wow');
  },
};

dog.sound();

// **** FUNCTION RECIEVING OTHER FUNCTIONS AS ARGUMENTS ****

function calc(f1, a, b) {
  const result = f1(a, b);
  console.log('The result of your calculation is ' + result);
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

calc(add, 3, 5);
calc(sub, 8, 3);

// If a function recives another function as an argument, the one that was recieving is called "higher order function",
// and the function that was the argument is called "call back function"

function createGreeter(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
}

const sayHello = createGreeter('Hello');

console.log(sayHello('Mateo'));

console.log(sayHello('Dario'));

const sayHi = createGreeter('Hi');
console.log(sayHi('Mateo'));

const sayGodbye = createGreeter('Good bye');

console.log(sayGodbye('Mateo'));

function calc(a, b, opFn) {
  console.log('Calculator started');
  const result = opFn(a, b);
  console.log(result);
  console.log('Calculator finished');
}

function add(g, h) {
  // let g = 3
  // let h = 4
  return g + h;
}

const broj1 = 10;
const broj2 = 15;

calc(broj1, broj2, add);
