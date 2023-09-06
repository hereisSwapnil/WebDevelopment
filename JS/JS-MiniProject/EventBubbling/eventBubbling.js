let div = document.querySelector("div")
let ul = document.querySelector("ul")
let lis = document.querySelectorAll("li")

// due to event bubbling when a li is clicked the event listeners of all the parent element gets activated
// means div, ul, li will be printed as clicked
// to avoid this we use event.stopPropagation()
div.addEventListener("click", function(event) {
    event.stopPropagation()
    console.log("div was clicked");
})

ul.addEventListener("click", function(event) {
    event.stopPropagation()
    console.log("ul was clicked");
})

for(li of lis){
    li.addEventListener("click", function(event) {
        event.stopPropagation()
        console.log("li was clicked");
    })
}