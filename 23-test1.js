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

function DataFetcher() {
  this.data = [];
}

DataFetcher.prototype.fetchData = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(persons);
    }, 2000);
  });
};

DataFetcher.prototype.processData = async function () {
  const persons = await this.fetchData();
  this.data = persons.map(
    (item) =>
      `Hello I am ${item.firstName} ${item.lastName} and I am ${item.age} years old`
  );
};

const dataFetcher = new DataFetcher();

dataFetcher.processData();

setTimeout(() => {
  console.log(dataFetcher.data);
}, 5000);
