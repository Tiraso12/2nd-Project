let bet50 = document.getElementById("50");
let bet100 = document.getElementById("100");
let bet200 = document.getElementById("200");
let bettingSection = document.getElementById("betting");
let betChoice = document.querySelector(".betChoice");

bet50.onclick = function () {
  betChoice.innerHTML = `<span style='color:white;'>User has selected 50</span>`;
};
bet100.onclick = function () {
  betChoice.innerHTML = `<span style='color:white;'>User has selected 100</span>`;
};
bet200.onclick = function () {
  betChoice.innerHTML = `<span style='color:white;'>User has selected 200</span>`;
};

