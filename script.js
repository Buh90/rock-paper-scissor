// Imposto le variabili di partenza

let result = "";
let playerWins = 0;
let computerWins = 0;
let isAnimating = false;

// Catturo gli elementi necessari
const screen = document.querySelector("body");
const container = document.querySelector(".container");
const mainBox = document.getElementById("main");
const playButton = document.getElementById("play");
const buttons = document.querySelectorAll(".choice");
const pcButtons = document.querySelectorAll(".pc-choice");
const textBox = document.querySelector(".description");
const playerResult = document.querySelector("#player");
const computerResult = document.querySelector("#computer");
const endGameText = document.querySelector("h2");
const reset = document.getElementById("reset");
const modalBox = document.querySelector(".modal");
const text = textBox.textContent;

// Creo Event Listener
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", game);
}

// Animazione caricamento pagina

startAnimation();

async function startAnimation() {
  await delay(500);
  container.classList.add("started");
  initializeText();
}

async function initializeText() {
  textBox.textContent = "";
  textBox.style.visibility = "visible";
  await delay(2500);
  printText(text);
}

playButton.addEventListener("click", function () {
  this.classList.add("no-init");
  mainBox.classList.remove("hidden");
});

// Dinamica di gioco
async function game() {
  if (!isAnimating) {
    isAnimating = true;
    const playerSelection = this.id;
    const computerSelection = getComputerChoice();
    this.classList.add("selected");

    for (let i = 0; i < buttons.length; i++) {
      if (pcButtons[i].getAttribute("data-type") === computerSelection) {
        pcButtons[i].classList.add("selected");
      }
    }

    await delay(500);
    playRound(playerSelection, computerSelection);
    if (playerWins == 5) {
      modalBox.style.visibility = "visible";
      endGameText.innerText = "YOU WIN!";
      container.classList.add("winner");
      screen.classList.add("shake");
      modalBox.childNodes[5].classList.add("winner");
    }
    if (computerWins == 5) {
      endGameText.innerText = "YOU LOSE!";
      modalBox.style.visibility = "visible";
      container.classList.add("loser");
      screen.classList.add("shake");
      modalBox.childNodes[3].classList.add("loser");
    }
    await delay(800);
    this.classList.remove("selected");
    isAnimating = false;
    for (let i = 0; i < buttons.length; i++) {
      if (pcButtons[i].getAttribute("data-type") === computerSelection) {
        pcButtons[i].classList.remove("selected");
      }
    }
  }
}

function getComputerChoice() {
  let choice = "";
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      choice = "stone";
      break;
    case 2:
      choice = "wand";
      break;
    case 3:
      choice = "cloak";
      break;
  }
  return choice;
}

function printText(text) {
  if (text !== "") {
    let char = document.createElement("span");
    let newLine = document.createElement("br");
    char.innerText = text[0];
    if (char.innerText === "|") {
      textBox.appendChild(newLine);
    } else {
      textBox.appendChild(char);
    }
    timer = setTimeout(() => {
      printText(text.slice(1));
    }, 30);
  } else {
    playButton.classList.remove("no-init");
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
  } else if (
    (playerSelection === "stone" && computerSelection === "wand") ||
    (playerSelection === "wand" && computerSelection === "cloak") ||
    (playerSelection === "cloak" && computerSelection === "stone")
  ) {
    playerWins++;
  } else {
    computerWins++;
  }
  playerResult.innerText = playerWins;
  computerResult.innerText = computerWins;
}

reset.addEventListener("click", resetGame);

function resetGame() {
  playerResult.innerText = 0;
  computerResult.innerText = 0;
  playerWins = 0;
  computerWins = 0;
  modalBox.style.visibility = "hidden";
  container.classList.remove("winner");
  container.classList.remove("loser");
  modalBox.childNodes[3].classList.remove("loser");
  modalBox.childNodes[5].classList.remove("winner");
}

function delay(ms) {
  return new Promise((action) => setTimeout(action, ms));
}

//Elimino la classe al termine dell'animazione
screen.addEventListener("animationend", (e) => {
  if (e.animationName === "screenshake") {
    screen.classList.remove("shake");
  }
});
