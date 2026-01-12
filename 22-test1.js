const persons = [
  {
    firstName: 'James',
    lastName: 'Carter',
    age: 29,
  },
  {
    firstName: 'Elena',
    lastName: 'Rodriguez',
    age: 34,
  },
  {
    firstName: 'Michael',
    lastName: 'Chen',
    age: 41,
  },
  {
    firstName: 'Sarah',
    lastName: 'Thompson',
    age: 22,
  },
  {
    firstName: 'David',
    lastName: 'Okeke',
    age: 55,
  },
];

class DataFetcher {
  constructor() {
    this.data = [];
  }

  fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(persons);
      }, 2000);
    });
  }

  async processData() {
    const persons = await this.fetchData();

    /*for (let i = 0; i < persons.length; i++) {
      let currentPerson = persons[i];
      this.data.push(
        `Hello, I am ${currentPerson.firstName} ${currentPerson.lastName} and I am ${currentPerson.age} years old.`
      );
    } */

    this.data = persons.map(
      (item) =>
        `Hello, I am ${item.firstName} ${item.lastName} and I am ${item.age} years old.`
    );
  }
}

const dataFetcher = new DataFetcher();

dataFetcher.processData();

console.log(dataFetcher.data);

/* setTimeout(() => {
  console.log(dataFetcher.data);
}, 5000); */
