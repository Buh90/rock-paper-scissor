let result = "";

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
  if (
    playerSelection !== "rock" &&
    playerSelection !== "scissor" &&
    playerSelection !== "paper"
  ) {
    result = "Scelta non valida";
  } else if (playerSelection === computerSelection) {
    result = "Draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }
  console.log(`Player: ${playerSelection} - Computer: ${computerSelection}`);
  return result;
}

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
