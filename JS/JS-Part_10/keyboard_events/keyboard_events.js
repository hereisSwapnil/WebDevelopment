let div_1 = document.getElementsByClassName("keyClicks")

document.addEventListener("keydown", function(event){
    let item_pressed = document.createElement('p')
    item_pressed.innerHTML = `You Pressed <b>${event.key}</b> Code: ${event.code}`
    div_1[0].prepend(item_pressed)
})