let result = "";
let playerWins = 0;
let computerWins = 0;


// Creo Event Listener
const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", game)
}


//
function game() {
  const playerSelection = this.innerText;
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  console.log("Player: " + playerWins + " - Computer " + computerWins)
  if (playerWins == 3) {
    console.log("YOU WIN!")
  }
  if (computerWins == 3) {
    console.log("YOU LOSE!")
  }
  
}

function getComputerChoice() {
  let choice = "";
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "scissor";
      break;
    case 3:
      choice = "paper";
      break;
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    result = "Draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerWins++;
    result = "You win!";
  } else {
    computerWins++;
    result = "You lose!";
  }
  console.log(`Player: ${playerSelection} - Computer: ${computerSelection}`);
  return result;
}




/*
function game() {
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, scissor or paper?");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(result);
    if (result === "You win!") {
      playerWins++;
    } else if (result === "You lose!") {
      computerWins++;
    }
    console.log(playerWins, computerWins);
  }
  if (playerWins > computerWins) {
    return "WINNER!!!";
  } else {
    return "LOSER!!!";
  }
}
*/