// let phone = "";

// const behavior = +Math.round(Math.random());
// console.log(behavior);

// const promise = new Promise((resolve, reject) => {
//   phone = {
//     name: "Nokia",
//     color: "grey",
//     model: "3310",
//     lighter: "true",
//   };

//   document.body.innerHTML = `<h2 class="loadBar">Loading...</h2>`;
//   setTimeout(() => {
//     phone && behavior ? resolve(phone) : reject("bad behavior");
//   }, 1000);
// });

// promise
//   .then((data) => (document.body.innerHTML = `<h2 class="resp">You've got ${data.name}</h2>`))
//   .catch((err) => (document.body.innerHTML = `<h2 class="error">Because of your  ${err}</h2>`))
//   .finally(() => console.log("Thank you"));
//==================================
let major;
let candidates = ["Klichko", "Prytilo", "Popov"];

const roads = new Promise((res, rej) => {
  setTimeout(() => {
    major = candidates[Math.round(Math.random() * (candidates.length - 1))];
    console.log(major);

    major ? res({ major, budget: +5000000 }) : rej("no money");
  }, 1000);
});

const otkat = function (budget = 5000000) {
  return budget / 2;
};
console.log(roads);
roads
  .then((data) => {
    console.log(`Выборы прошли! Выиграл ${major}`);
    return data.budget;
  })
  // .then((otkat) => otkat)
  .then((info) => console.log(`Осталось ${info.budget}`))
  .catch((err) => console.log(err))
  .finally(console.log("Hello world"));
