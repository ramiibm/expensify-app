//
// Object destructuring
//

// const person = {
//   name: "Rami",
//   age: 22,
//   location: {
//     city: "Paris",
//     temp: 19,
//   },
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = [];

// const [, , state = "New York"] = address;

// console.log(`You are in ${state}.`);

const item = ["Coffee (iced)", "$2.00", "$2.45", "$2.75"];

const [drink, , mediumPrice] = item;

console.log(`A medium ${drink} costs ${mediumPrice}.`);
