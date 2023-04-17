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
            console.log("Win")
            return(playerScore += 1, gameRound += 1)
    }
    else if ((playerSelection == "rock" && computerSelection == "paper")     || 
             (playerSelection == "paper" && computerSelection == "scissors") || 
             (playerSelection == "scissors" && computerSelection == "rock"))  {
                console.log("Lose")
                return(computerScore += 1, gameRound += 1)
    }
    // If both inputs are the same its a draw
    else {
        return(gameRound += 1)
    }
}


//       let playerSelection = prompt('Rock, Paper or Scissors?')
//       playerSelection.toLowerCase
//       getComputerChoice();
//       let computerSelection = getComputerChoice();

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')

rockBtn.onclick = () => {
    let playerSelection = "rock"
    getComputerChoice();
    let computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection)
};
paperBtn.onclick = () => {
    let playerSelection = "paper"
    getComputerChoice();
    let computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection)
};
scissorsBtn.onclick = () => {
    let playerSelection = "scissors"
    getComputerChoice();
    let computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection)
};

