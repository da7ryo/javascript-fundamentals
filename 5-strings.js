// **** STRINGS ****

const firstName1 = 'Petar';
const lastName1 = 'Petrovic';
const age3 = 24;

// String concatenation
console.log(
  'I am' +
    ' ' +
    firstName1 +
    ' ' +
    lastName1 +
    ', and I am ' +
    age3 +
    ' years old.'
);

// Template literals

console.log(`I am ${firstName1} ${lastName1}, and I am ${age3} years old.`);

// **** EXPRESION VS STATEMENT ****

// An expresion is a value or anything that results in a value
// A statement is a fundamental buliding block of a program. It is
// an instruction that tells the computer to perform a specific task

// **** TERNARY OPERATOR ****

console.log(5 < 3 ? 'Hi' : 'Hello');
console.log(5 > 3 ? 'Hi' : 'Hello');
