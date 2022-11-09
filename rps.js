//get user input
let input = prompt("Rock, Paper, or Scissors?");

//check for correct input
if((input.toLowerCase() != "rock") & (input.toLowerCase() != "paper") & (input.toLowerCase() != "scissors"))  {
    alert("Input invalid");
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
//play the game

getComputerChoice();