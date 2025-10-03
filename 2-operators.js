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
