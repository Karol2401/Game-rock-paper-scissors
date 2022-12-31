// Get access to HTML elements
const startPage = document.getElementById('start')
const gameOverPage = document.getElementById('game-over')
const playerSelectionDisplay = document.getElementById('player-selection')
const computerSelectionDisplay = document.getElementById('computer-selection')
const resultDisplay = document.getElementById('result')
const playerScoreDisplay = document.getElementById('player-score')
const computerScoreDisplay = document.getElementById('computer-score')

// Creation of an array of all buttons
const possibleSelections = document.querySelectorAll('button')

// Get access to playerSelection, computerSelection, playerScore, computerScore, result and score from anywere
let playerSelection
let computerSelection
let result
let finalResult
let playerScore = 0
let computerScore = 0

//Add event when clicking one of the 3 buttons
possibleSelections.forEach(button => button.addEventListener('click', (e) => {
    playerSelection = e.target.id
    playerSelectionDisplay.innerHTML = playerSelection
    generateComputerSelection ()
    getResult()
    gameOver ()
}))

//Generate a random number from 0 to 2 and assign it to the elements rock paper scissors
function generateComputerSelection () {
    const randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        computerSelection = '✂️'
    }

    if (randomNumber === 1) {
        computerSelection = '📃'
    }

    if (randomNumber === 2) {
        computerSelection = '🗿'
    }
    computerSelectionDisplay.innerHTML = computerSelection
}

//Comparison of computer and player choices, matching of results and add score
function getResult () {
    if (computerSelection === playerSelection) {
        result = "Draw"    
    }
    if (computerSelection === '🗿' && playerSelection === '✂️') {
        result = "You lose"
        computerScore += 1
        computerScoreDisplay.innerText = computerScore

    }
    if (computerSelection === '✂️' && playerSelection === '📃') {
        result = "You lose"
        computerScore += 1
        computerScoreDisplay.innerText = computerScore
    }
    if (computerSelection === '📃' && playerSelection === '🗿') {
        result = "You lose"
        computerScore += 1
        computerScoreDisplay.innerText = computerScore
    }
    if (computerSelection === '✂️' && playerSelection === '🗿') {
        result = "You win"
        playerScore += 1
        playerScoreDisplay.innerText = playerScore
    }
    if (computerSelection === '📃' && playerSelection === '✂️') {
        result = "You win"
        playerScore += 1
        playerScoreDisplay.innerText = playerScore
    }
    if (computerSelection === '🗿' && playerSelection === '📃') {
        result = "You win"
        playerScore += 1
        playerScoreDisplay.innerText = playerScore
    }
    resultDisplay.innerHTML = result
}

//Window with end-of-game information and button to restart the game
function gameOver () {
    if (playerScore == 5) {
        startPage.style.display = 'none'
        gameOverPage.style.display = 'grid'
        finalResult = '<a href="https://8000-karol2401-gamerockpaper-rxqnq940vbj.ws-eu80.gitpod.io/">You are win. Try again!</a>'
    }
    if (computerScore == 5) {
        startPage.style.display = 'none'
        gameOverPage.style.display = 'grid' 
        finalResult = '<a href="https://8000-karol2401-gamerockpaper-rxqnq940vbj.ws-eu80.gitpod.io/">You are lose. Try again!</a>'  
    }
    gameOverPage.innerHTML = finalResult
}

