let data = require("./source.cjs");

let result = data.filter(
  (item) => item.contains.includes("C") && item.contains.length < 10
);

console.log(result);
