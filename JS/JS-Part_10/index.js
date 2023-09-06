let btn_1 = document.getElementsByClassName("btn1")
btn_1[0].onclick = function() {
    console.log("Button is clicked!!");
}

let div_1 = document.getElementsByClassName("region")
div_1[0].onmouseenter = function(){
    console.log("You entered the region!!!")
}

let form = document.querySelector(".form_")
let input_ = document.querySelector(".input_field")
form.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log(input_.value);
    alert("form submitted")
})

// Change Event
// checks for only initial and final change in the input
input_.addEventListener("change", function(){
    console.log(this.value);
})

// Input Event
// checks for every small change in the input
input_.addEventListener("input", function() {
    console.log(this.value);
})