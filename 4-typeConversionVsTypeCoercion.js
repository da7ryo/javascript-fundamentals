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
