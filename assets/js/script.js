// Get access to HTML elements
const playerSelectionDisplay = document.getElementById('player-selection')
const computerSelectionDisplay = document.getElementById('computer-selection')
const resultDisplay = document.getElementById('result')

// Creation of an array of all buttons
const possibleSelections = document.querySelectorAll('button')

// Get access to playerSelection, computerSelection and result from anywere
let playerSelection
let computerSelection
let result

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

function getResult () {
    if (computerSelection === playerSelection) {
        result = "Draw"
    }
    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        result = "You lose"
    }
    if (computerSelection === 'scissors' && playerSelection === 'paper') {
        result = "You lose"
    }
    if (computerSelection === 'paper' && playerSelection === 'rock') {
        result = "You lose"
    }
    if (computerSelection === 'scissors' && playerSelection === 'rock') {
        result = "You win"
    }
    if (computerSelection === 'paper' && playerSelection === 'scissors') {
        result = "You win"
    }
    if (computerSelection === 'rock' && playerSelection === 'paper') {
        result = "You win"
    }
    resultDisplay.innerHTML = result
}

