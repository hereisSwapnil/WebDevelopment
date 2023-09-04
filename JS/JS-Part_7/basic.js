const student = {
    name: "Shradha",
    age: 26,
    physics: 90,
    chemistry: 89,
    maths: 95,
    getAvg: function() {
        let sum = this.physics+this.chemistry+this.maths
        return sum/3
    }
}

console.log(student.getAvg());

// Try Catch
try {
    console.log(swamp);
} catch (e) {
    console.log(e);
}

// Arrow function
let sum = (a,b) => {
    console.log(a+b);
}
sum(3,5)

// Implicit return Arrow function
const mul = (a,b) => a*b

console.log(mul(3,4));

// Timeout
setTimeout(() => {
    console.log("hello")
}, 4000)

// Set interval
let id1 = setInterval(() => {
    console.log("hello");
}, 1000)
// stops the set interval multiple calling
clearInterval(id1)>