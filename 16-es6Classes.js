class Person {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2025 - this.birthYear;
  }

  greet() {
    console.log('Hi');
  }

  static run() {
    console.log('Run');
  }
}

const person1 = new Person('Ivan', 'Krasic', 1995);

class Student extends Person {
  constructor(firstName, lastName, birthYear, indexNumber) {
    super(firstName, lastName, birthYear);
    this.indexNumber = indexNumber;
  }
}
