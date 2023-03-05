let result = "";
let playerWins = 0;
let computerWins = 0;


// Catturo gli elementi necessari
const buttons = document.querySelectorAll("button");
const playerResult = document.querySelector("#player");
const computerResult = document.querySelector("#computer");
const endGameText = document.querySelector("h2")

// Creo Event Listener
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", game)
}


//
function game() {
  const playerSelection = this.id;
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  console.log("Player: " + playerWins + " - Computer " + computerWins)
  if (playerWins == 3) {
    endGameText.innerText = "YOU WIN!"
  }
  if (computerWins == 3) {
    endGameText.innerText = "YOU LOSE!"
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
  if (playerSelection === computerSelection) {
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerWins++;
  } else {
    computerWins++;
  }
  playerResult.innerText = playerWins;
  computerResult.innerText = computerWins;
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