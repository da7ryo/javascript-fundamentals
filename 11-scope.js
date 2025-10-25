// **** SCOPE ****
// Scope determines the accessibility or visibility of variables and functions at different parts of your code.

// Global scope

// Variables declared outside of any function or block ({}) are in the Global Scope.
// They can be accessed from anywhere in your JavaScript file.

const firstName = 'Dario';
let lastName = 'Milanovic';
console.log(firstName);

function log() {
  lastName = 'Vukovic';
  console.log(`${firstName} ${lastName}`);
}

log();
console.log(lastName);
const isMale = true;
if (isMale) {
  console.log(`${firstName} ${lastName}`);
}

function greet() {
  const x = 'Hello';
  function newGreet() {
    console.log(x);
  }
  newGreet();
}

greet();
