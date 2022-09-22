//image shrinks horizontally heads then tails does the opposing to give it the appearance of flipping
let imageContainer = document.querySelector(".imageContainer");
let headsImage = `../images/heads.png`;
let tailsImage = `../images/tails.png`;

let start = document.getElementById("start");
let result = document.getElementById("result");

function Odds() {
  let coin = Math.random();
  imageContainer.firstElementChild.classList.toggle("rotate");

  if (coin < 0.5) {
    setTimeout(function () {
      imageContainer.innerHTML = `<img src="${tailsImage}"/>`;
      result.innerHTML = "You got Tails";
    }, 1000);
  } else {
    setTimeout(function () {
      imageContainer.innerHTML = `<img src="${headsImage}"/>`;
      result.innerHTML = "You got Heads";
    }, 1000);
  }
}

start.addEventListener("click", Odds);
