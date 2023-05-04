let data = require("./source.cjs");

let result = data.filter((item) => item.contains.includes("A"));

console.log(result);
