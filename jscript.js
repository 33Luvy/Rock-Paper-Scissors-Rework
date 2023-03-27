
// Function for computer choice
function getComputerChoice() {
    // Array with 3 choices
    choice = ["rock", "paper", "scissors"];
    // Returns the variable as one of strings from the array
    return choice[Math.floor(Math.random() * choice.length)];
}

// Selection variables
const computerSelection = getComputerChoice();
const playerSelection = "rock"

// Function for playing one round
function playRound(computerSelection, playerSelection) {
    // Checks the 2 inputs and decides the winner
    if ((playerSelection == "rock" && computerSelection == "scissors")  || 
        (playerSelection == "paper" && computerSelection == "rock")     || 
        (playerSelection == "scissors" && computerSelection == "paper")) {

        console.log("Player wins!")
    }
    else if ((playerSelection == "rock" && computerSelection == "paper")     || 
             (playerSelection == "paper" && computerSelection == "scissors") || 
             (playerSelection == "scissors" && computerSelection == "rock"))  {

        console.log("Computer wins!")
    }
    // If both inputs are the same its a draw
    else {
        console.log("Draw!")
    }
}

