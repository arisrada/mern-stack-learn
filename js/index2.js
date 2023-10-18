// for single import

// const add = require('./calculator');
// console.log(add(6, 3));

// const add = require('./calculator');

// for multiple imports


//object destructuring
const { add, sub } = require('./calculator'); 

console.log(add(6, 3));
console.log(sub(6, 3));

