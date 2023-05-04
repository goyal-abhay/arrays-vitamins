let data = require("./source.cjs");

let result = data.filter((item) => item.available);

console.log(result);
