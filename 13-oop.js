function Person(firstName, lastName, birthYear) {
  // When you call a function with new operator following things happen
  // 1. New empty object is created in the function
  // 2. this = newly created object
  // 3. Newly created object linked to prototype
  // 4. Newly created object is automaticly returned

  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
}
Person.prototype.calcAge = function () {
  return 2025 - this.birthYear;
};

Person.prototype.introduce = function () {
  console.log(
    `Hi, I am ${this.firstName} ${
      this.lastName
    }, and I am ${this.calcAge()} years old`
  );
};
const person1 = new Person('Mateo', 'Vukovic', 1998);
const person2 = new Person('Dario', 'Milanovic', 1992);

console.log(person1);
console.log(person2);
console.log(person1.calcAge());
console.log(person2.calcAge());

person1.introduce();
person2.introduce();

// Using arrays: option 1
const arr1 = [2, 5, 10];

// Using arrays: option 2
const arr2 = new Array(2, 5, 10);
arr2.push(4);
// Static method
const arr3 = Array.from(arr2);

Person.greet = function () {
  console.log('Hello');
};

Person.greet();

console.log(person1.__proto__);
console.log(person1.__proto__ === Person.prototype);
