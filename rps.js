//get user input
let input = prompt("Rock, Paper, or Scissors?");

//check for correct input
if((input.toLowerCase() != "rock") & (input.toLowerCase() != "paper") & (input.toLowerCase() != "scissors"))  {
    alert("Input invalid");
}

//get computer input
//play the game