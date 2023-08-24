// Random Button Section
const radn_func = () => {
    let radn_number = document.getElementById('radn_number')
    radn_number.innerText = Math.floor(Math.random() * 10)
}

// Heading Changer Section
const change_heading_func = () => {
    heading_div = document.getElementById('heading_tags')
    if (heading_div.querySelector('h1') !== null) {
        heading_div.innerHTML = "<h2>This is Heading 2</h2>"
    } else if (heading_div.querySelector('h2') !== null) {
        heading_div.innerHTML = "<h3>This is Heading 3</h3>"
    } else {
        heading_div.innerHTML = "<h1>This is Heading 1</h1>"
    }
}

// Rock Paper Scissors
const rps_comp_generate = () => {
    let r_num = Math.floor(Math.random() * 3);
    if (r_num == 0) {
        return "Rock"
    } else if (r_num == 1) {
        return "Paper"
    } else {
        return "Scissor"
    }
}
const win_check = (r_comp, r_human) => {
    if (r_comp == r_human) {
        return "It's a Draw"
    } else if (
        (r_human == "Paper" && r_comp == "Rock") ||
        (r_human == "Scissor" && r_comp == "Paper") ||
        (r_human == "Rock" && r_comp == "Scissor")
    ) {
        return "Human Wins"
    } else if (
        (r_comp == "Paper" && r_human == "Rock") ||
        (r_comp == "Scissor" && r_human == "Paper") ||
        (r_comp == "Rock" && r_human == "Scissor")
    ) {
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

// Random Dog Generator
const rnd_dog_func = () => {
    let dog_json = fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(json => {
        let rnd_dog_image = document.getElementById("rnd_dog")
        rnd_dog_image.src = json.message
    })
}

// Weather App
const search_weather = () => {
    let input_box = document.getElementById("weather_input").value
    const url = 'https://weather-api99.p.rapidapi.com/weather?city=' + input_box
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4ccc198a8cmsh93b29863c1316bbp1cdb41jsn78f64c5fbf92',
            'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
        }
    };
    fetch(url, options).then(response => response.json()).then(data => {
        let main_b = data.main
        let min_temp_d = document.getElementById("temp_min")
        let max_temp_d = document.getElementById("temp_max")
        let city_d = document.getElementById("city")
        city_d.innerText = "City: " + data.name
        min_temp_d.innerText = "Temp Min: " + (main_b.temp_min - 273).toFixed(0) + "°C"
        max_temp_d.innerText = "Temp Max: " + (main_b.temp_max - 273).toFixed(0) + "°C"
    })
}

// Bank
class Bank {
    constructor(balance) {
        this.balance = balance
    }
    withdraw(amount) {
        this.balance -= amount
        this.update_balance()
    }
    deposit(amount) {
        this.balance += amount
        this.update_balance()
    }
    update_balance() {
        document.getElementById("bank_balance").innerText = "Balance: " + Bank_1.balance
    }
}

const deposit_m = () => {
    let amount = parseInt(document.getElementById("bank_input").value)
    Bank_1.deposit(amount)
}

const withdraw_m = () => {
    let amount = parseInt(document.getElementById("bank_input").value)
    Bank_1.withdraw(amount)
}

Bank_1 = new Bank(1200)
document.getElementById("bank_balance").innerText = "Balance: " + Bank_1.balance