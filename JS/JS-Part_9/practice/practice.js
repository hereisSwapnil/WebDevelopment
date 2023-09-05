let p_1 = document.createElement("p")
p_1.innerText = "Hey I'm red!"
p_1.style.color = "red"

let h3_1 = document.createElement("h3")
h3_1.innerText = "Hey I'm blue h3!"
h3_1.style.color = "blue"

let h1_1 = document.createElement("h1")
let p_2 = document.createElement("p")
h1_1.innerText = "I'm in a div!"
p_2.innerText = "ME TOO!"

let div_1 = document.createElement("div")
div_1.style.border = "1px solid black"
div_1.style.backgroundColor = "pink"

window.onload = function () {
    document.body.append(p_1)
    document.body.append(h3_1)
    document.body.append(div_1)
    div_1.append(h1_1)
    div_1.append(p_2)
}
