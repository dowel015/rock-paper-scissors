//get user input
function getPlayerChoice () {
    let input = prompt("Rock, Paper, or Scissors?");

    //check for correct input
    if((input.toLowerCase() != "rock") & (input.toLowerCase() != "paper") & (input.toLowerCase() != "scissors"))  {
        alert("Input invalid");
    }
    return input.toLowerCase();
}

//get computer input
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);
    if (computerChoice == 1) {
        computerChoice = "rock";
    }
    else if (computerChoice == 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}
//play one round
function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            let result = "You Tie! Rock ties Rock";
        }
        if (computerSelection == "paper") {
            let result = "You Lose! Paper beats Rock";
        }
        if (computerSelection == "scissors") {
            let result = "You Win! Rock beats Scissors";
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            let result = "You Win! Paper beats Rock";
        }
        if (computerSelection == "paper") {
            let result = "You Tie! Paper ties Paper";
        }
        if (computerSelection == "scissors") {
            let result = "You Lose! Scissors beats Paper";
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            let result = "You Lose! Rock beats Scissors";
        }
        if (computerSelection == "paper") {
            let result = "You Win! Scissors beats Paper";
        }
        if (computerSelection == "scissors") {
            let result = "You Tie! Scissors ties Scissors";
        }
    }
    return result;
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));