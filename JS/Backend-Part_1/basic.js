// command line arguments
let arguments = process.argv

for(let i = 0; i<arguments.length; i++){
    console.log(arguments[i]);
}

// requiring modules from different files
// here 123 will be imported from math.js
// let math = require('./math')
// console.log(math);

let math = require('./math')
console.log(math);
console.log(math.sum(2,3));
