// Printing on the console
console.log("hello world")

// Variables
let name = "swamp"
console.log(name)

// Converting String to Number
let num_alpha = '2'
console.log(Number(num_alpha) + 2)

//  Data Types
// numbers 👉 1,3,5,7,8
// strings 👉 "hello world", "hey"
// arrays 👉 []
// objects 👉 {}
// boolean 👉 true, false


// Math Operations
// Multiply 👉 *
// Divide 👉 /
// Exponents 👉 **
// Modulo/Remainder 👉 %
// Add 👉 +
// Subtract 👉 -

// Math Method object
// Floor 👉 Rounds Down
// Ceil 👉 Rounds Up
// Random 👉 Random number from 0 to 1

console.log(Math.floor(3.9))
console.log(Math.ceil(3.1))

// var 👉 not recommended to use
// let 👉 used for local scope generally used 
// const 👉 used if the value is not to be changed
 
// Conditional Operators
// ==, !=, <, >, <=, >=, !==, ===

// Function
function sayMyName(name) {
    console.log(name)
}
// Greeting Function
function greetMe(name) {
    let greet = `Hi ${name}, How are you?`
    console.log(greet)
}

// Array
const groceries = ["banana", "apple", "pear", "orange"]
console.log(groceries[2])

groceries.push("chocolate")

console.log(groceries)

console.log(groceries.slice(0,2))
console.log(groceries.indexOf("apple"))
console.log(groceries.length)

// Object
const person = {
    name: "John",
    shirt_color: "green"
}
console.log(person.name)
console.log(person["name"])

person.phone_number = 1234567890

console.log(person)

// Loops
const fruits = ["banana", "apple", "pear", "orange"]
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i])
}

for(const fruit of fruits){
    console.log(fruit)
}