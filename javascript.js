// Scores
let humanScore = 0;
let computerScore = 0;
let round = 0;

// Get div once (global)
const scoresDiv = document.getElementById("scores");

// Computer choice
function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 0.33) return "rock";
  else if (randomNumber < 0.66) return "paper";
  else return "scissors";
}

// One round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  let result = "";

  round++;

  if (humanChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  // Update UI
  scoresDiv.innerHTML = `
    <p>Human choice: ${humanChoice}</p>
    <p>Computer choice: ${computerChoice}</p>
    <p>${result}</p>
    <p>This was round ${round}</p>
    <p>Human: ${humanScore}</p>
    <p>Computer: ${computerScore}</p>
  `;

  // Check winner
  if (humanScore === 5) {
    scoresDiv.innerHTML += `<p><strong>You win the game!</strong></p>`;
  } else if (computerScore === 5) {
    scoresDiv.innerHTML += `<p><strong>Computer wins the game!</strong></p>`;
  }
}

// Button click
const buttons = document.querySelectorAll(".choice");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const humanSelection = button.textContent.toLowerCase();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  });
});