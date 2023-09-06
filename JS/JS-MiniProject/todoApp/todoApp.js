let btn = document.querySelector("button")
let ul = document.querySelector("ul")

btn.addEventListener("click", function () {
    let input = document.querySelector("input")
    if (input.value != "") {
        let li = document.createElement("li")
        let delBtn = document.createElement("button")
        delBtn.innerText = "Delete"
        li.innerText = input.value
        ul.appendChild(li)
        li.appendChild(delBtn)
        input.value = ""
    }
})

// the new buttons that are added when triggering the button click does not apply with the event listeners 
// so with the use of event bubbling we apply the event listners on the their parent element that where too old to be present 
ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement
        par.remove()
    }
})