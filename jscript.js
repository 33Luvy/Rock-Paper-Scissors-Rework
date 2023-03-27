
// Function for computer choice
function getComputerChoice() {
    // Array with 3 choices
    choice = ["rock", "paper", "scissors"];
    // Returns the variable as one of strings from the array
    return choice[Math.floor(Math.random() * choice.length)];
}

