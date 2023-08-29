var isOverlay = false

// Function to show the game over overlay
function showOverlay(winner) {
    isOverlay = true
    const win_label = document.querySelector("#winner")
    win_label.innerText = "Player " + winner + " Won!"
    const overlay = document.getElementById('gameOverOverlay');
    overlay.style.display = 'flex';
    overlay.classList.add('enlarge');
}

// Function to close the game over overlay
function closeOverlay() {
    isOverlay = false
    const overlay = document.getElementById('gameOverOverlay');
    overlay.style.display = 'none';
    overlay.classList.remove('enlarge');
    player1.score = 0
    player1.health = 100
    player2.score = 0
    player2.health = 100
    p1_h.innerText = 100
    p2_h.innerText = 100
    p1_s.innerText = 0
    p2_s.innerText = 0
}

class Player1 {
    constructor() {
        this.health = 100
        this.score = 0
    }
    heal() {
        let _heal = Math.floor(Math.random() * 3) + 1;
        this.health += _heal
    }
    attack(targetPlayer) {
        let _attack = Math.floor(Math.random() * 10) + 1;
        targetPlayer.health -= _attack
        if (targetPlayer.health < 0) {
            targetPlayer.health = 0
        }
        this.score += _attack
    }
}

class Player2 {
    constructor() {
        this.health = 100
        this.score = 0
    }
    heal() {
        let _heal = Math.floor(Math.random() * 3) + 1;
        this.health += _heal
    }
    attack(targetPlayer) {
        let _attack = Math.floor(Math.random() * 10) + 1;
        targetPlayer.health -= _attack
        if (targetPlayer.health < 0) {
            targetPlayer.health = 0
        }
        this.score += _attack
    }
}

// When the DOM Content is loaded
document.addEventListener("DOMContentLoaded", function () {
    p1_s = document.querySelector("#player1_score");
    p2_s = document.querySelector("#player2_score");
    p1_h = document.querySelector("#player1_health");
    p2_h = document.querySelector("#player2_health");
});

function winner() {
    if (p1_h.innerText == 0) {
        showOverlay(2)
    } else if (p2_h.innerText == 0) {
        showOverlay(1)
    }
}

player1 = new Player1()
player2 = new Player2()

function handleKeyPress(event) {
    switch (event.key) {
        case 'q':
            if (!isOverlay) {
                player1.attack(player2);
                p1_s.innerText = player1.score
                p2_h.innerText = player2.health
                winner()
            }
            break;
        case 'a':
            if (!isOverlay) {
                player1.heal();
                p1_h.innerText = player1.health
                winner()
            }
            break;
        case 'p':
            if (!isOverlay) {
                player2.attack(player1);
                p2_s.innerText = player2.score
                p1_h.innerText = player1.health
                winner()
            }
            break;
        case 'l':
            if (!isOverlay) {
                player2.heal();
                p2_h.innerText = player2.health
                winner()
            }
            break;
        default:
            console.log('Invalid key');
    }
}

document.addEventListener('keypress', handleKeyPress);