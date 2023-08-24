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

// Rock Paper Scissors
const rps_comp_generate = () => {
    let r_num = Math.floor(Math.random() * 3);
    if(r_num == 0){
        return "Rock"
    }else if(r_num == 1){
        return "Paper"
    }else{
        return "Scissor"
    }
}
const win_check = (r_comp, r_human) => {
    if(r_comp == r_human){
        return "It's a Draw"
    }else if(
        (r_human == "Paper" && r_comp == "Rock")||
        (r_human == "Scissor" && r_comp == "Paper")||
        (r_human == "Rock" && r_comp == "Scissor")
    ){
        return "Human Wins"
    }else if(
        (r_comp == "Paper" && r_human == "Rock")||
        (r_comp == "Scissor" && r_human == "Paper")||
        (r_comp == "Rock" && r_human == "Scissor")
    ){
        return "Computer Wins"
    }
}

const click_rock = () => {
    r_comp = rps_comp_generate()
    r_human = "Rock"
    console.log("Computer : " + r_comp)
    console.log("Human : " + r_human)
    let winner = win_check(r_comp, r_human)
    console.log(winner)
    r_human_text = document.getElementById("r_human")
    r_comp_text = document.getElementById("r_comp")
    r_winner = document.getElementById("winner_text")
    r_human_text.innerText = r_human
    r_comp_text.innerText = r_comp
    r_winner.innerText = winner    
}
const click_paper = () => {
    r_comp = rps_comp_generate()
    r_human = "Paper"
    let winner = win_check(r_comp, r_human)
    r_human_text = document.getElementById("r_human")
    r_comp_text = document.getElementById("r_comp")
    r_winner = document.getElementById("winner_text")
    r_human_text.innerText = r_human
    r_comp_text.innerText = r_comp
    r_winner.innerText = winner  
}
const click_scissor = () => {
    r_comp = rps_comp_generate()
    r_human = "Scissor"
    let winner = win_check(r_comp, r_human)
    r_human_text = document.getElementById("r_human")
    r_comp_text = document.getElementById("r_comp")
    r_winner = document.getElementById("winner_text")
    r_human_text.innerText = r_human
    r_comp_text.innerText = r_comp
    r_winner.innerText = winner  
}