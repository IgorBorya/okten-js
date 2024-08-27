let arr = [123, 555, 564, 434, 535, 564, 435, 434, 3424, 3424]; // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let descriptionOfBooks = {
  title: "Vikings",
  pageCount: 110,
  genre: "action",
};

let descriptionOfBooks2 = {
  title: "Harry Poter",
  pageCount: 860,
  genre: "fantasy",
};

let descriptionOfBooks3 = {
  title: "clarkson",
  pageCount: 180,
  genre: "biography",
};

console.log(descriptionOfBooks);
console.log(descriptionOfBooks2);
console.log(descriptionOfBooks3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let descriptionOfBooks4 = {
  title: "Vikings",
  pageCount: 110,
  genre: "action",
  authors: [
    {
      name: "anonym",
      age: 35,
    },
  ],
};

let descriptionOfBooks5 = {
  title: "Harry Poter",
  pageCount: 860,
  genre: "fantasy",
  authors: [
    {
      name: "J.K.Rowling",
      age: 42,
    },
  ],
};

let descriptionOfBooks6 = {
  title: "clarkson",
  pageCount: 180,
  genre: "biography",
  authors: [
    {
      name: "JeremyClarkson",
      age: 62,
    },
  ],
};

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
  { name: "Ihor", username: "Borya", password: 1234 },
  { name: "Petro", username: "Ortep", password: 5678 },
  { name: "Yurii", username: "author", password: 9012 },
  { name: "Andrii", username: "pro", password: 4342 },
  { name: "Ivan", username: "stranger", password: 3232 },
  { name: "Borys", username: "goodBoy", password: 3434 },
  { name: "Nazar", username: "biber", password: 3232 },
  { name: "David", username: "maneskin", password: 4242 },
  { name: "Ostap", username: "student", password: 3211 },
  { name: "Liza", username: "cola", password: 5353 },
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperatures = [
  { day: 1, morning: 15, afternoon: 33, evening: 25 },
  { day: 2, morning: 19, afternoon: 29, evening: 21 },
  { day: 3, morning: 17, afternoon: 26, evening: 19 },
  { day: 4, morning: 23, afternoon: 35, evening: 28 },
  { day: 5, morning: 24, afternoon: 29, evening: 24 },
  { day: 6, morning: 17, afternoon: 25, evening: 19 },
  { day: 7, morning: 22, afternoon: 26, evening: 17 },
];

console.log(temperatures);
