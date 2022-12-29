// Get access to HTML elements
const playerSelectionDisplay = document.getElementById('player-selection')
const computerSelectionDisplay = document.getElementById('computer-selection')
const resultDisplay = document.getElementById('result')
const scoreDisplay = document.getElementById('score')

// Creation of an array of all buttons
const possibleSelections = document.querySelectorAll('button')

// Get access to playerSelection, computerSelection, result and score from anywere
let playerSelection
let computerSelection
let result
let score

//Add event when clicking one of the 3 buttons
possibleSelections.forEach(button => button.addEventListener('click', (event) => {
    playerSelection = event.target.id
    playerSelectionDisplay.innerHTML = playerSelection
    generateComputerSelection ()
    getResult ()
}))

//Generate a random number from 0 to 2 and assign it to the elements rock paper scissors
function generateComputerSelection () {
    const randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        computerSelection = 'scissors'
    }

    if (randomNumber === 1) {
        computerSelection = 'paper'
    }

    if (randomNumber === 2) {
        computerSelection = 'rock'
    }
    computerSelectionDisplay.innerHTML = computerSelection
}

//Comparison of computer and player choices and matching of results
function getResult () {
    if (computerSelection === playerSelection) {
        result = "Draw"
        playerScore = 0
        computerScore = 0
    }
    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        result = "You lose"
        playerScore = 0
        computerScore = 1
    }
    if (computerSelection === 'scissors' && playerSelection === 'paper') {
        result = "You lose"
        playerScore = 0
        computerScore = 1
    }
    if (computerSelection === 'paper' && playerSelection === 'rock') {
        result = "You lose"
        playerScore = 0
        computerScore = 1
    }
    if (computerSelection === 'scissors' && playerSelection === 'rock') {
        result = "You win"
        playerScore = 1
        computerScore = 0
    }
    if (computerSelection === 'paper' && playerSelection === 'scissors') {
        result = "You win"
        playerScore = 1
        computerScore = 0
    }
    if (computerSelection === 'rock' && playerSelection === 'paper') {
        result = "You win"
        playerScore = 1
        computerScore = 0
    }
    resultDisplay.innerHTML = result
    return playerScore
    return computerScore
}

function getScore () {

}
