const { isUtf8 } = require('buffer');
const fs = require('fs');
const fsp = require('fs/promises');

setTimeout(() => {
  console.log('Hello');
}, 0);

/* setTimeout(function () {
  console.log('Hello');
 }, 5000); */

console.log('Hi');

/*
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
*/

console.log('pikachu');

// **** Promises ****

fsp
  .readFile('testData1.txt', 'utf-8')
  .then((val) => {
    console.log(val);
    return fsp.readFile('testData2.txt', 'utf-8');
  })
  .then((val) => {
    console.log(val);
    return fsp.readFile('testData3.txt', 'utf-8');
  })
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

// **** PROMISFY ****

function wait(timeInSec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeInSec * 1000);
  });
}

wait(5).then(() => {
  console.log('Hello world');
});

// **** ASYNC/AWAIT  ****

async function readFiles() {
  try {
    const data1 = await fsp.readFile('testData1.txt', 'utf-8');
    console.log(data1);
    const data2 = await fsp.readFile('testData2.txt', 'utf-8');
    console.log(data2);
    const data3 = await fsp.readFile('testData3.txt', 'utf-8');
    console.log(data3);
  } catch (err) {
    console.log(err);
  }
}

readFiles();
