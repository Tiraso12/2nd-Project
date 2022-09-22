//image shrinks horizontally heads then tails does the opposing to give it the appearance of flipping
let imageContainer = document.querySelector(".imageContainer");
let headsImage = `../assets/images/heads.png`;
let tailsImage = `../assets/images/tails.png`;
let user_id = document.querySelector(".user_id").innerHTML;
let heads = document.getElementById("heads");
let tails = document.getElementById("tails");
let result = document.getElementById("result");

async function headsOdds() {
  let coin = Math.random();
  imageContainer.firstElementChild.classList.toggle("rotate");

  if (coin < 0.5) {
    setTimeout(function () {
      imageContainer.innerHTML = `<img src="${tailsImage}"/>`;
      result.innerHTML = "<span style='color:black;'>You chose incorrectly, it is tails</span>";
    }, 1000);
  } else {
    setTimeout(function () {
      imageContainer.innerHTML = `<img src="${headsImage}"/>`;
      result.innerHTML = "<span style='color:black;'>You chose correctly, it is heads</span>";
      
    }, 1000);
    const res = await fetch(`/api/users/win-HoT/${user_id}`, {
      method: "PUT",
    });
    console.log(res);
  }
}

async function tailsOdds() {
  let coin = Math.random();
  imageContainer.firstElementChild.classList.toggle("rotate");

  if (coin < 0.5) {
    setTimeout(function () {
      imageContainer.innerHTML = `<img src="${tailsImage}"/>`;
      result.innerHTML = "You chose correctly, it is tails";
    }, 1000);
    const res = await fetch(`/api/users/win-HoT/${user_id}`, {
      method: "PUT",
    });
    console.log(res);
  } else {
    setTimeout(function () {
      imageContainer.innerHTML = `<img src="${headsImage}"/>`;
      result.innerHTML = "You chose incorrectly, it is heads";
    }, 1000);
  }
}

tails.addEventListener("click", tailsOdds);
heads.addEventListener("click", headsOdds);
