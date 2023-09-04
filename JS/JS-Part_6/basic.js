// Roll A Dice
function rollADice() {
    console.log(Math.floor(Math.random() * 6) + 1);
}
rollADice()

// Function with arguments
function sum(a,b) {
    console.log(a+b);
}
sum(2,4)

// Methods
const calculator = {
    add: function(a,b) {
        return a+b
    },
    substract: function(a,b) {
        return a-b
    },
    multiply: function(a,b) {
        return a*b
    }
}

console.log(calculator.add(3,5));