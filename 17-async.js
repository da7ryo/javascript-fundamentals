const fs = require('fs');

setTimeout(() => {
  console.log('Hello');
}, 0);

/* setTimeout(function () {
  console.log('Hello');
 }, 5000); */

console.log('Hi');

fs.readFile('testData1.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('Something went wrong, couldn´t read file');
    return;
  }

  console.log(data);
  fs.readFile('testData2.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log('Something went wrong, couldn´t read file');
      return;
    }

    console.log(data);
    fs.readFile('testData3.txt', 'utf-8', (err, data) => {
      if (err) {
        console.log('Something went wrong, couldn´t read file');
        return;
      }

      console.log(data);
    });
  });
});

console.log('pikachu');

// **** Promise objects ****
