const me = 'Dario';
const friends = ['Denis', 'Ermin', 'Ivan'];

console.log(friends);
console.log(friends.length);

console.log(friends[1]);
friends[2] = 'Marko';
console.log(friends);
friends.push('Nikola');
console.log(friends);

console.log(friends[friends.length - 1]);

function getLastArrayElement(arr) {
  return arr[arr.length - 1];
}

const lastElement = getLastArrayElement([1, 2, 3, 4]);
const lastFriend = getLastArrayElement(friends);
console.log(lastElement);
console.log(lastFriend);

function getLastArrayElementAndIndex(arr) {
  const lastIndex = arr.length - 1;
  return [arr[lastIndex], lastIndex];
}

getLastArrayElementAndIndex(friends);

function getLastArrayElementAndIndex2(arr) {
  const lastIndex = arr.length - 1;
  return [getLastArrayElement(arr), lastIndex];
}
