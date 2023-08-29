// Function to show the game over overlay
function showOverlay() {
    const overlay = document.getElementById('gameOverOverlay');
    overlay.style.display = 'flex';
    overlay.classList.add('enlarge');
}

// Function to close the game over overlay
function closeOverlay() {
    const overlay = document.getElementById('gameOverOverlay');
    overlay.style.display = 'none';
    overlay.classList.remove('enlarge');
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
        this.score += _attack
    }
}