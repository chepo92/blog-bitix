const object = { name: 'Juan', age: 30 };
const array = [1, 2, 3];

for (let property in object) {
  console.log(`${property}: ${object[property]}`);
}
// name: Juan 
// age: 30

for (let property of array) {
  console.log(`${property}`);
}
// 1
// 2
// 3