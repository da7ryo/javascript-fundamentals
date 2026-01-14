function copyObj(obj) {
  const newObj = {};
  const propertyNames = Object.keys(obj);
  propertyNames.forEach((element) => {
    // newObj.element = obj.element; this is not good
    newObj[element] = obj[element];
  });
  return newObj;
}
const obj1 = {
  firstName: 'Dario',
  friends: ['Goran', 'Mateo', 'Nikola', 'Slaven'],
};
const obj2 = copyObj(obj1);
obj2.firstName = 'Ivan';
obj2.friends.push('Marko');
console.log(obj1);
console.log(obj2);

// Call back hell
/* fetch('https://jsonplaceholder.typicode.com/posts')
  .then((val) => {
    val.json().then((jsonVal) => console.log(jsonVal));
  })
  .catch((err) => {
    console.log(err);
  }); */

/* fetch('https://jsonplaceholder.typicode.com/posts')
  .then((val) => {
    return val.json();
  })
  .then((val) => console.log(val))
  .catch((err) => {
    console.log(err);
  }); */

async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    console.log(posts);
  } catch (err) {
    console.log(err);
  }
}
getPosts();
