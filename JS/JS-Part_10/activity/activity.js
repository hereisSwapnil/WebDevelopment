function generateColor() {
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    let div_1 = document.getElementsByClassName("colorDiv")
    div_1[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    let p_1 = document.getElementsByTagName("p")
    p_1[0].innerText = `rgb(${r}, ${g}, ${b})`
}