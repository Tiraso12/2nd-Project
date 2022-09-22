let randomNumber = document.getElementById("randomNumber");
let highButton = document.getElementById("high");
let lowButton = document.getElementById("low");
let result = document.getElementById("result");
let user_id = document.querySelector(".user_id").innerHTML;

//Math function to choose a number between 1 and 100
function getRandomValue() {
  let randomValue = Math.floor(Math.random() * 100);
  return randomValue;
}

//Initial random number
randomNumber.innerHTML = getRandomValue();

//Checks to see if the value is higher
async function checkHigh() {
  let newValue = getRandomValue();
  let currentValue = randomNumber.innerHTML;
  if (newValue > currentValue) {
    result.innerHTML = `
        ${newValue} is greater than ${currentValue}, so you win.
    `;
    const res = await fetch(`/api/users/win-hol/${user_id}`, {
      method: "PUT",
    });
    console.log(res);
  } else {
    result.innerHTML = `
        ${newValue} is less than ${currentValue}, so you lose.
    `;
  }
  randomNumber.innerHTML = newValue;
}
highButton.addEventListener("click", checkHigh);

//Check to see if the value is lower
async function checkLow() {
  let newValue = getRandomValue();
  let currentValue = randomNumber.innerHTML;
  if (newValue < currentValue) {
    result.innerHTML = `
        ${newValue} is less than ${currentValue}, so you win.
    `;
    const res = await fetch(`/api/users/win-hol/${user_id}`, {
      method: "PUT",
    });
    console.log(res);
  } else {
    result.innerHTML = `
        ${newValue} is greater than ${currentValue}, so you lose.
    `;
  }
  randomNumber.innerHTML = newValue;
}
lowButton.addEventListener("click", checkLow);
