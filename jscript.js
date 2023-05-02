// Global Variables
let gameRound = 0;
let playerScore = 0;
let computerScore = 0;

// Function for computer choice
function getComputerChoice() {
    // Array with 3 choices
    choice = ["rock", "paper", "scissors"];
    // Returns the variable as one of strings from the array
    return choice[Math.floor(Math.random() * choice.length)];
}


// Selection variable
let computerSelection = getComputerChoice();

// Function for playing one round
function playRound(computerSelection, playerSelection) {
    // Checks the 2 inputs and decides the winner
    if ((playerSelection == "rock" && computerSelection == "scissors")  || 
        (playerSelection == "paper" && computerSelection == "rock")     || 
        (playerSelection == "scissors" && computerSelection == "paper")) {
            scoreDisplay.textContent = 'Win'
            return(playerScore += 1,
                   gameRound += 1, 
                   playerCount.textContent = (playerScore),
                   computerCount.textContent = (computerScore) )
    }
    else if ((playerSelection == "rock" && computerSelection == "paper")     || 
             (playerSelection == "paper" && computerSelection == "scissors") || 
             (playerSelection == "scissors" && computerSelection == "rock"))  {
                scoreDisplay.textContent = 'Lose'
                computerCount.textContent = (computerScore)
                return(computerScore += 1, 
                       gameRound += 1,
                       playerCount.textContent = (playerScore),
                       computerCount.textContent = (computerScore))
    }
    // If both inputs are the same its a draw
    else {
        scoreDisplay.textContent = 'Draw'
        return(gameRound += 1)
    }
}


const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const scoreDisplay = document.querySelector('#gameResult')
const playerCount = document.querySelector('.playerScore')
const computerCount = document.querySelector('.computerScore')
const winnerDisplay = document.querySelector('#winnerDisplay')




rockBtn.onclick = () => {
    let playerSelection = "rock"
    getComputerChoice();
    let computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection)
    if (gameRound == 5) {
        if (playerScore > computerScore) {
            winnerDisplay.textContent = 'Player Wins'
        }
        else if (playerScore < computerScore) {
            winnerDisplay.textContent = 'Computer Wins'
        }
        else {
            winnerDisplay.textContent = 'It\'s a Draw'
        }
    }
};
paperBtn.onclick = () => {
    let playerSelection = "paper"
    getComputerChoice();
    let computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection)
    if (gameRound == 5) {
        if (playerScore > computerScore) {
            winnerDisplay.textContent = 'Player Wins'
        }
        else if (playerScore < computerScore) {
            winnerDisplay.textContent = 'Computer Wins'
        }
        else {
            winnerDisplay.textContent = 'It\'s a Draw'
        }
    }
};
scissorsBtn.onclick = () => {
    let playerSelection = "scissors"
    getComputerChoice();
    let computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection)
    if (gameRound == 5) {
        if (playerScore > computerScore) {
            winnerDisplay.textContent = 'Player Wins'
        }
        else if (playerScore < computerScore) {
            winnerDisplay.textContent = 'Computer Wins'
        }
        else {
            winnerDisplay.textContent = 'It\'s a Draw'
        }
    }
};

