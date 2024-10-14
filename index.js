const scoreHome = document.getElementById("score-home")
const scoreAway = document.getElementById("score-away")
let count = 0
// let reset = 0

function add1Home() {
    count += 1
    scoreHome.textContent = count
    
}

function add2Home() {
    count += 2
    scoreHome.textContent = count
    
}

function add3Home() {
    count += 3
    scoreHome.textContent = count
    
}

function add1Away() {
    count += 1
    scoreAway.textContent = count
    
}

function add2Away() {
    count += 2
    scoreAway.textContent = count
    
}

function add3Away() {
    count += 3
    scoreAway.textContent = count
    
}

function reset() {
    count = 0
    scoreHome.textContent = 0
    scoreAway.textContent = 0
}