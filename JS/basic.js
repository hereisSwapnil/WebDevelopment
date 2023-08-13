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


// Math Oprations
// Multiply 👉 *
// Divide 👉 /
// Exponenets 👉 **
// Modulo/Remainder 👉 %
// Add 👉 +
// Substract 👉 -

// Math Methodobject
// Floor 👉 Rounds Down
// Ceil 👉 Rounds Up
// Random 👉 Random number from 0 to 1

console.log(Math.floor(3.9))
console.log(Math.ceil(3.1))

// var 👉 not recommendedto use
// let 👉 used for local scope generally used 
// const 👉 used if the value is not to be changed
 
// Conditional Operators
// ==, !=, <, >, <=, >=, !==, ===

// Function
function sayMyName(name) {
    console.log(name)
}
// Greating Function
function greetMe(name) {
    let greet = `Hi ${name}, How are you?`
    console.log(greet)
}

// Array
const grocries = ["banana", "apple", "pear", "orange"]
console.log(grocries[2])
grocries.push("chocolate")
console.log(grocries)

console.log(grocries.slice(0,2))
console.log(grocries.indexOf("apple"))
console.log(grocries.length)

// object
const person = {
    name: "John",
    shirt_color: "green"
}
console.log(person.name)
console.log(person["name"])

person.phone_number = 1234567890

console.log(person)
