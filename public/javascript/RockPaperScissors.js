const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let rockImage = "../images/Rock.png";
let scissorImage = "../images/scissors.png";
let paperImage = "../images/paper.png";
let userChoice;
let computerChoice;
let result;

let userChoiceImage;
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    console.log(userChoice);
    if (userChoice === "rock") {
      userChoiceImage = rockImage;
    }
    if (userChoice === "scissor") {
      userChoiceImage = scissorImage;
    }
    if (userChoice === "paper") {
      userChoiceImage = paperImage;
    }
    userChoiceDisplay.innerHTML = `<img src="${userChoiceImage}" width='80px' height='80px'/> 
    `;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = rockImage;
  }
  if (randomNumber === 2) {
    computerChoice = scissorImage;
  }
  if (randomNumber === 3) {
    computerChoice = paperImage;
  }
  computerChoiceDisplay.innerHTML = `<img src="${computerChoice}" width='80px' height='80px'/> `;
}

function getResult() {
  if (computerChoice === userChoiceImage) {
    result = "Draw!";
  }
  if (computerChoice === rockImage && userChoiceImage === paperImage) {
    result = "Username!";
  }
  if (computerChoice === rockImage && userChoiceImage === scissorImage) {
    result = "Computer!";
  }
  if (computerChoice === paperImage && userChoiceImage === scissorImage) {
    result = "Username!";
  }
  if (computerChoice === paperImage && userChoiceImage === rockImage) {
    result = "Computer!";
  }
  if (computerChoice === scissorImage && userChoiceImage === rockImage) {
    result = "Username!";
  }
  if (computerChoice === scissorImage && userChoiceImage === paperImage) {
    result = "Computer!";
  }
  resultDisplay.innerHTML = result;
}
