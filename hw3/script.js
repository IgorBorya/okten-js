//- Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Масив:

let listOfItems = [
  "html",
  "css",
  "javascript",
  "mysql",
  "mongodb",
  "react",
  "angular",
  "node.js",
];

document.write(`<ul>`);

for (let item of listOfItems) {
  document.write(`
  <li>${item}</li>
    `);
}
document.write(`</ul>`);

//  за допомоги циклу вивести:
//  (все робити окремими циклами, не в одному)

//  - користувачів які старші за 30 років
//  - користувачів які молодші за 29 років

let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];

// for (let user of users) {
//   if (user.age > 30) {
//     console.log(user);
//   }
// }

for (let user of users) {
  if (user.age < 29) {
    console.log(user);
  }
}
