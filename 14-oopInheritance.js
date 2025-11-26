// **** INHERITANCE ****

// call method in a function

function test(name) {
  console.log(this);
  console.log(name);
}

test('Dario');
new test('Dario');
test.call({ x: 5 }, 'Dario');

function Person(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
  return 2025 - this.birthYear;
};

const person1 = new Person('Dario', 'Milanovic', 1922);
console.log(person1);

function Student(firstName, lastName, birthYear, indexNumber) {
  // We need a way to put all those parameters automatically on the newly created object
  Person.call(this, firstName, lastName, birthYear);
  this.indexNumber = indexNumber;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.logIndex = function () {
  console.log(this.indexNumber);
};

const student1 = new Student('Mateo', 'Vukovic', 1998, 1250);

console.log(student1);
student1.logIndex();
console.log(student1.calcAge());
