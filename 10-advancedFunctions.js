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

const obj = {
  firstName: 'Mateo',
  age: 27,
  // When a property of a object has a function as the value, we called that property method
  calcBirthdate: function () {
    console.log(this);
  },
};

// If a function is called as a method on a object, this get the value of this object that has called the method

obj.calcBirthdate();
