// **** OBJECTS ****
// In JavaScript we groups values into two main types: primitive and objects.
// Primitive values are: number, string, boolean, undefined and null.
// Everything else is object.

const mateo = {
  firstName: 'Mateo',
  lastName: 'Vukovic',
  age: 27,
};

console.log(mateo);
console.log(mateo.firstName);
mateo.age = 28;
console.log(mateo);

// **** REFFERENCES(OBJECTS) VS PRIMITIVE VALUES ****

let a = 10;
let b = a;
b = b + 2;
console.log(a);
console.log(b);

const obj1 = {
  firstName: 'Dario',
  age: 33,
};

const obj2 = obj1;
obj2.age = 27;
console.log(obj1);
console.log(obj2);
