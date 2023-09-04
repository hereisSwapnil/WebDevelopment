let number = Math.floor(Math.random()*100)
console.log(number);

function check_guess() {
    let hint_line = document.getElementById("hint")
    if(guessed_input.value == number){
        hint_line.innerText = "You Guessed it"
    }else{
        hint_line.innerText = guessed_input.value>number?"Guess a smaller number":"Guess a larger number"
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let guessed_input = document.getElementById("guessed_input")
})