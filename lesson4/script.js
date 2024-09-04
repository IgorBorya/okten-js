// function foobar(title, text) {
//   document.write(`<div>

//     <h2>${title}</h2>
//     <p>${text}</p>

//     </div>`);
// }

// foobar("tbmtbm", "gnnrgnirig");

// function square(a, b) {
//   let result = a * b;
//   console.log(result);
//   return result;
// }

// let room1 = square(10, 20);
// let room2 = square(10, 12);

// let resSquare = room1 + room2;
// console.log(resSquare);

// function userBuilder(userId, userName) {
//   let user = { id: userId, name: userName };
//   return user;
// }

// let user1 = userBuilder(1, "ihor");
// console.log(user1);

// let user2 = userBuilder(2, "borya");
// console.log(user2);

// let user3 = userBuilder(3, "solomia");
// console.log(user3);

let functions = {
  userBuilder: function (userId, userName) {
    let user = { id: userId, name: userName };
    return user;
  },
};

let user = functions.userBuilder(2, "veev");

console.log(user);
