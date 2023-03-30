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

// Selection variables
let computerSelection = getComputerChoice();
const playerSelection = "rock"

// Function for playing one round
function playRound(computerSelection, playerSelection) {
    // Checks the 2 inputs and decides the winner
    if ((playerSelection == "rock" && computerSelection == "scissors")  || 
        (playerSelection == "paper" && computerSelection == "rock")     || 
        (playerSelection == "scissors" && computerSelection == "paper")) {
            return(playerScore += 1, gameRound += 1)
    }
    else if ((playerSelection == "rock" && computerSelection == "paper")     || 
             (playerSelection == "paper" && computerSelection == "scissors") || 
             (playerSelection == "scissors" && computerSelection == "rock"))  {
                return(computerScore += 1, gameRound += 1)
    }
    // If both inputs are the same its a draw
    else {
        return(gameRound += 1)
    }
}

// Function for playing the full game
function game() {
    // Loop that repeats 6 times in order for the last increment to display result
    for (i = 0 ;i < 6; i++) {
        if (gameRound == 5) {
            if (playerScore > computerScore) {
                console.log('Player Wins!')
            }
            else if (computerScore > playerScore) {
                console.log('Computer Wins!')
            }
            else if (computerScore == playerScore) {
                console.log('Its a draw!') 
            }
        }
        else {
        getComputerChoice()
        let computerSelection = getComputerChoice();
        playRound(computerSelection, playerSelection)
        }
    }
}

game()