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
const person1 = new Person('Mateo', 'Vukovic', 1998);
const person2 = new Person('Dario', 'Milanovic', 1992);

console.log(person1);
console.log(person2);
console.log(person1.calcAge());
console.log(person2.calcAge());
