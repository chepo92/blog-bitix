// Arrays
const array = [1, 2];
const [a, b] = array;
console.log(`${a}, ${b}`);
// 1, 2

// Objects
const object = { name: 'Juan', age: 30 };
const {name, age} = object;
console.log(`${name}, ${age}`);
// Juan, 30

// Functions
function whois({displayName: displayName, fullName: { firstName: name }}){
  console.log(`${displayName} is ${name}`);
}

var user = {
  id: 42,
  displayName: "jgarcia",
  fullName: {
      firstName: "Juan",
      lastName: "García"
  }
};

whois(user);
// Juan Garcia is jgarcia 
