// Random Button Section
const radn_func = () => {
    let radn_number = document.getElementById('radn_number')
    radn_number.innerText = Math.floor(Math.random() * 10)
}

// Heading Changer Section
const change_heading_func = () => {
    heading_div = document.getElementById('heading_tags')
    if(heading_div.querySelector('h1') !== null){
        heading_div.innerHTML = "<h2>This is Heading 2</h2>"
    }else if(heading_div.querySelector('h2') !== null){
        heading_div.innerHTML = "<h3>This is Heading 3</h3>"
    }else{
        heading_div.innerHTML = "<h1>This is Heading 1</h1>"
    }
}