let generatedColorS = []
let GuessesColorS = []

let checkIndex = 0

let gameStarted = false
let level = 0

let btnS = ["dark-cyan", "sky-blue", "cool-grey", "rosy-brown"]

function wrongS() {
    let body = document.body
    body.style.backgroundColor = "red"
    setTimeout(function () {
        body.style.backgroundColor = "#ffffff"
    }, 150)
}

function gameFlash(btn) {
    btn.classList.add("gameFlash")
    setTimeout(function () {
        btn.classList.remove("gameFlash")
    }, 250)
}

function userFlash(btn) {
    btn.classList.add("userFlash")
    setTimeout(function () {
        btn.classList.remove("userFlash")
    }, 250)
}

function levelUp() {
    level++
    let p = document.querySelector("p")
    p.innerText = `Level ${level}`
    let rndInd = Math.floor(Math.random() * 4)
    let rndBtn = document.querySelector(`.${btnS[rndInd]}`)
    generatedColorS.push(btnS[rndInd])
    gameFlash(rndBtn)
    GuessesColorS = []
    checkIndex = 0
    console.log(`Game: ${generatedColorS}`);
    console.log(`User: ${GuessesColorS}`);
}

function checkS() {
    if (GuessesColorS[checkIndex] == generatedColorS[checkIndex]) {
        if (checkIndex == level - 1) {
            setTimeout(function () {
                levelUp()
            }, 1000)
            checkIndex = 0
        } else {
            checkIndex++
        }
    } else {
        let p = document.querySelector("p")
        p.innerHTML = `Game Over! Your score was <b>${level}</b><br> Press any key to continue...`
        wrongS()
        resetGame()
    }
} 4

document.addEventListener("keypress", function (event) {
    if (gameStarted == false) {
        resetGame()
        levelUp()
        gameStarted = true
    }
})

let boxes = document.querySelectorAll(".box")

for (box of boxes) {
    box.addEventListener("click", function () {
        if (gameStarted == true) {
            userFlash(this)
            let id_ = this.getAttribute("id")
            GuessesColorS.push(id_)
            console.log(GuessesColorS);
            checkS()
            console.log(`Game: ${generatedColorS}`);
            console.log(`User: ${GuessesColorS}`);
        }
    })
}

function resetGame() {
    checkIndex = 0
    generatedColorS = []
    GuessesColorS = []
    gameStarted = false
    level = 0
}
