// #OPLI89c9G
// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву
//     (кожен в своєму li)

// let arr = ["Main", "Products", "About us", "Contacts"];

// let elementMenu = document.getElementById("menu");

// for (const item of arr) {
//   let li = document.createElement("li");
//   li.innerText = item;
//   elementMenu.appendChild(li);
// }

// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];
// Для кожного елементу масиву зробити блок в якому вивести
// інформацію про title та monthDuration
// Завдання робити через цикли.

let container = document.getElementById("container");

for (const course of coursesAndDurationArray) {
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.innerText = `${course.title} - ${course.monthDuration} month`;
  div.appendChild(h3);
  container.appendChild(div);
}
