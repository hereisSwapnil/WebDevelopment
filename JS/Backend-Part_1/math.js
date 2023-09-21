let sum = (a,b) => a+b;
let mul = (a,b) => a*b;
let PI = 3.14;
let g = 9.8;

// we can export different numbers, strings, objects, etc in the form of objects
// module.exports = 123
// module.exports = "Hello world"

// To import function we use
let obj = {
    sum: sum,
    mul: mul,
    PI: PI,
    g: g
}

module.exports = obj

let fruits = require('./Fruits/index')
console.log(fruits);