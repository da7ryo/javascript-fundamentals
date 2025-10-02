// **** VALUES AND DATA TYPES ****

console.log('Hello world'); // string data type
console.log(5); // number data type
console.log(true); // boolean data type

// **** VARIABLES ****

const favouriteNumber = 15;
console.log(favouriteNumber);
console.log(favouriteNumber);
console.log(favouriteNumber);

let fullName = 'Marija Biletic';
console.log(fullName);
fullName = 'Marija Milanovic';
console.log(fullName);

// There is also var variables, but this is only used in older codebases

let age; // Value is undefined and data type of undefined is undefined
console.log(age);
age = 15;

let person = null;
console.log(person);
person = 'Mateo Vukovic';
console.log(person);

// **** OPERATORS ****

// Operator is a symbol that does some operation on a value or multiple values and produces a final value
console.log(typeof 'Hello');
console.log(typeof 1000);
console.log(typeof false);

// Math operators
console.log(3 + 5);
const num1 = 10;
const num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// **** ASSIGMENT OPERATORS ****

let num3 = 10;
num3 = num3 + 1;
num3++;
num3 = num3 - 1;
num3--;
num3 = num3 + 5;
num3 += 5;
num3 = num3 * 7;
num3 *= 7;

// **** COMPARISON OPERATORS ****

console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 3);
console.log(5 <= 3);
console.log(5 === 6);
console.log(5 !== 6);

console.log((3 + 4) * 5);

// **** IF/ELSE STATEMENTS ****

console.log('**** IF/ELSE STATEMENTS ****');

const isFootballPlayer = false;

if (isFootballPlayer) {
  console.log('He will be the next Ronaldo');
}

console.log('Pikachu');
const isActionMovie = false;
if (isActionMovie) {
  console.log('This is an action movie');
} else {
  console.log('This is not an action movie');
}

const age2 = 25;
if (age2 < 25) {
  console.log('You are younger than 25');
} else if (age2 === 25) {
  console.log('You are 25');
} else {
  console.log('You are older than 25');
}

// **** TYPE CONVERSION VS TYPE COERCION ****

const firstName = 'Dario';
const lastName = 'Milanovic';
console.log(firstName + ' ' + lastName);

console.log(5 + 'Hello');

// Whenever JavaScript converts a value from one type to another this is called type coersion

const a = 3;
const b = 'Hi';
console.log(a + b);
console.log(a);
console.log(String(a)); // Whenever we convert a value from one type to another this is called type conversion
console.log(a);

// Whenever JavaScript is doing type coersion into boolean, it converts the value based on the concept of
// thruthy and falsy values
// Falsy values: 0, '', undefined, null

if (5) {
  console.log('Hello');
}

// **** LOGICAL OPERATORS: &&(and), ||(or), !(not) ****

// And will return the first falsy operand, if not found it will return the last operand
// Or will return the first thruthy operand, if not found it will return the last operand
// Not will always return a boolean, so it always does type coersion into boolean and affter
// it converts into boolean it returns the negation of it.

console.log(!false);
console.log(!true);
console.log(!12);
console.log(!undefined);

console.log(5 && 'Hello' && 8 && 'Dario');

if (5 && 'Hello' && 8 && 'Dario') {
  console.log('Hi');
}
