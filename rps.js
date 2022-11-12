//random computer choice
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1) {
        computerChoice = "rock";
    }
    else if (computerChoice == 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}
//play one round
function playRound (playerSelection, computerSelection) {
    let result;
    
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            result = "You Tie! Rock ties Rock";
        }
        if (computerSelection == "paper") {
            result = "You Lose! Paper beats Rock";
        }
        if (computerSelection == "scissors") {
            result = "You Win! Rock beats Scissors";
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "You Win! Paper beats Rock";
        }
        if (computerSelection == "paper") {
            result = "You Tie! Paper ties Paper";
        }
        if (computerSelection == "scissors") {
            result = "You Lose! Scissors beats Paper";
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            result = "You Lose! Rock beats Scissors";
        }
        if (computerSelection == "paper") {
            result = "You Win! Scissors beats Paper";
        }
        if (computerSelection == "scissors") {
            result = "You Tie! Scissors ties Scissors";
        }
    }
    
    return result;
}

function game (e) {
    if(computerWins == 6) {
        return;
     } else if (computerWins == 5)  {
        container.removeChild(result);
        score.textContent = "You lost to Skynet!";
        computerWins = 6;
        return;
     } else if (playerWins == 5)  {
        container.removeChild(result);
        score.textContent = "John Henry defeats the machine!";
        computerWins = 6;
        return;
     } 

    const playerSelection = e.target.className;
    const computerSelection = getComputerChoice();

    resultString = playRound(playerSelection, computerSelection);
    result.textContent = resultString;
    container.appendChild(result);

    if(resultString.includes("Win")) {
        playerWins++;
    } else if(resultString.includes("Lose")) {
        computerWins++;
    }

    score.textContent = "Score is " + playerWins + " to " + computerWins;

    container.appendChild(score);
}

let playerWins=0;
let computerWins=0;
const result = document.createElement("div");
const score = document.createElement("div");
const container = document.querySelector(".container");

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => button.addEventListener("click", game));

