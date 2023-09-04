const arr = [2,4,6,8]

// ForEach
arr.forEach(function(i) {
    console.log(i);
})

// Map
const double = arr.map(i => i*2)
console.log(double);

// Fitler 
const divBy3 = arr.filter(i => (i%3 == 0))
console.log(divBy3);

// Every
console.log(arr.every(i => i%2==0));

// Reduce
console.log(arr.reduce((result, element) => result+element));

// Default Parameters
function sum(a = 2, b = 3) {
    console.log(a+b);
}

sum()

// Infinite arguments
function sumAll(...arr) {
    return arr.reduce((result, element) => result+element)    
}

console.log(sumAll(1,2,3))

// Destructuring
let heroes = ["tony", "iron man", "thor", "hulk", "doctor strange"]
let [winner, runnerup, ...others] = heroes
console.log(winner);
console.log(runnerup);
console.log(others);

// Destructuring Objects
const student = {
    name: "karan",
    age: 23,
    username: "k_is_sexy",
    password: "karan123"
}

let {username, password} = student
console.log(username);
console.log(password);