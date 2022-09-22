const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let rockImage = "../assets/images/Rock.png";
let scissorImage = "../assets/images/scissors.png";
let paperImage = "../assets/images/paper.png";
let user_id = document.querySelector(".user_id").innerHTML;
let userChoice;
let computerChoice;
let result;

let userChoiceImage;
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    if (userChoice === "rock") {
      userChoiceImage = rockImage;
    }
    if (userChoice === "scissors") {
      userChoiceImage = scissorImage;
    }
    if (userChoice === "paper") {
      userChoiceImage = paperImage;
    }
    userChoiceDisplay.innerHTML = `
    <img src="${userChoiceImage}"/> 
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
  computerChoiceDisplay.innerHTML = `<img src="${computerChoice}"/> `;
}

async function getResult() {
  if (computerChoice === userChoiceImage) {
    result = "Draw!";
  }
  if (computerChoice === rockImage && userChoiceImage === paperImage) {
    const res = await fetch(`/api/users/win-RPS/${user_id}`, {
      method: "PUT",
    });
    console.log(res);
    result = "Username!";
  }
  if (computerChoice === rockImage && userChoiceImage === scissorImage) {
    result = "Computer!";
  }
  if (computerChoice === paperImage && userChoiceImage === scissorImage) {
    const res = await fetch(`/api/users/win-RPS/${user_id}`, {
      method: "PUT",
    });
    console.log(res);
    result = "Username!";
  }
  if (computerChoice === paperImage && userChoiceImage === rockImage) {
    result = "Computer!";
  }
  if (computerChoice === scissorImage && userChoiceImage === rockImage) {
    const res = await fetch(`/api/users/win-RPS/${user_id}`, {
      method: "PUT",
    });
    console.log(res);
    result = "Username!";
  }
  if (computerChoice === scissorImage && userChoiceImage === paperImage) {
    result = "Computer!";
  }
  resultDisplay.innerHTML = result;
}
