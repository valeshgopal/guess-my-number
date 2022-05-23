"use strict";

let num = Math.trunc(Math.random() * 20) + 1;
let secretNum = document.querySelector(".secret-number");
let checkNum = document.querySelector(".check");
const displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let score = document.querySelector(".score");
let scoreCal = 20;
let highscore = document.querySelector(".highscore");

const body = document.querySelector("body");
checkNum.addEventListener("click", function () {
  let inputNum = Number(document.querySelector(".guess").value);
  if (!inputNum) {
    alert("⛔️ No number!");
  } else if (inputNum === num) {
    displaymessage("🎉 Correct Answer!");
    secretNum.textContent = num;
    body.style.backgroundColor = "#32cd32";
    secretNum.style.width = "10rem";
    if (Number(score.textContent) > Number(highscore.textContent)) {
      highscore.textContent = score.textContent;
    }
  } else if (inputNum !== num) {
    displaymessage(inputNum < num ? "📉 Too Low" : "📈 Too High");
    scoreCal = scoreCal - 1;
    score.textContent = scoreCal;
  }
  if (scoreCal <= 0) {
    displaymessage("💥 You lose!");
    score.textContent = 0;
  }
});

const again = document.querySelector(".again");

again.addEventListener("click", function () {
  body.style.backgroundColor = "#333";
  secretNum.style.width = "6rem";
  document.querySelector(".guess").value = "";
  scoreCal = 20;
  score.textContent = scoreCal;
  num = Math.trunc(Math.random() * 20) + 1;
  secretNum.textContent = "?";
  displaymessage("Start guessing...");
});
