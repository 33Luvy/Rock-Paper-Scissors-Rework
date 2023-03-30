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
        return("Player wins!")
    }
    else if ((playerSelection == "rock" && computerSelection == "paper")     || 
             (playerSelection == "paper" && computerSelection == "scissors") || 
             (playerSelection == "scissors" && computerSelection == "rock"))  {

        return("Computer wins!")
    }
    // If both inputs are the same its a draw
    else {
        return("Draw!")
    }
}

// Function for playing the full game
function game() {
    // Loop that repeats 5 times
    for (i = 0 ;i < 5; i++) {
        getComputerChoice()
        let computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, playerSelection))
    }
}

game()