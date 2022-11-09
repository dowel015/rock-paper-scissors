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
    let score;

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            result = "You Tie! Rock ties Rock";
            score=1;
        }
        if (computerSelection == "paper") {
            result = "You Lose! Paper beats Rock";
            score=0;
        }
        if (computerSelection == "scissors") {
            result = "You Win! Rock beats Scissors";
            score=2;
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "You Win! Paper beats Rock";
            score=2;
        }
        if (computerSelection == "paper") {
            result = "You Tie! Paper ties Paper";
            score=1;
        }
        if (computerSelection == "scissors") {
            result = "You Lose! Scissors beats Paper";
            score=0;
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            result = "You Lose! Rock beats Scissors";
            score=0;
        }
        if (computerSelection == "paper") {
            result = "You Win! Scissors beats Paper";
            score=2;
        }
        if (computerSelection == "scissors") {
            result = "You Tie! Scissors ties Scissors";
            score=1;
        }
    }
    alert(result);
    return score;
}

function game () {
    let playerWins=0;
    let computerWins=0;

    for (let i=0;i<5;i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        let score = playRound(playerSelection, computerSelection);
        
        if (score == 0) {
            computerWins++;
        }
        if (score == 2) {
            playerWins++;
        }
        alert("Score is " + playerWins + " to " + computerWins);
    }
}

game();