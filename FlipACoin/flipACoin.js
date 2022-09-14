let start = document.getElementById("start");
let result = document.getElementById("result");

function Odds() {
  let coin = Math.random();

  if (coin < 0.5) {
    result.innerHTML = "You got Tails";
  } else {
    result.innerHTML = "You got Heads";
  }
}

start.addEventListener("click", Odds);
