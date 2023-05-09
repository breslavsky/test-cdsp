const { uniq, merge } = require("lodash");

const arr = [1, 3, 4, 5, 6, 1, 4, 6];
console.log(uniq(arr));

console.log(merge({ a: 1, c: 4 }, { a: 2, b: 3 }));
