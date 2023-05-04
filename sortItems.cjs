let data = require("./source.cjs");

data.sort((a, b) => {
  const l1 = a.contains.length;
  const l2 = b.contains.length;
  if (l1 > l2) return 1;
  else if (l1 < l2) return -1;
  else return 0;
});

console.log(data);
