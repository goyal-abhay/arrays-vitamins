let data = require("./source.cjs");

let result = {};
for (let item of data) {
  let allVitamin = item.contains.split(",");
  let name = item.name;
  for (let Vitamin of allVitamin) {
    Vitamin = Vitamin.trim();
    if (result[Vitamin]) {
      result[Vitamin].push(name);
    } else {
      result[Vitamin] = [name];
    }
  }
}

// const allvita = data.reduce((acc, item) => {
//   let vtamins = item.contains.split(",");
//   vtamins.map((vita) => {
//     vita = vita.trim();
//     acc[vita] = [];
//   });
//   return acc;
// }, {});

// data.map((item) => {
//   const name = item.name;
//   let vtamins = item.contains.split(",");
//   vtamins.map((vita) => {
//     vita = vita.trim();
//     allvita[vita].push(name);
//   });
// });

console.log(result);
