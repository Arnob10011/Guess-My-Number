const showScore = document.querySelector(".show--number");
const btnAgain = document.querySelector(".btn--again");
const input = document.querySelector(".input__content");
const btnCheck = document.querySelector(".btn--check");
const text = document.querySelector(".text");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");

let score = 20;
let highScore = 0;
let guess = Math.floor(Math.random() * 20 + 1);

function showMessage(message) {
  text.textContent = message;
}

function getInputValue() {
  const inputValue = +input.value;
  checkTheNum(inputValue);
}

btnCheck.addEventListener("click", getInputValue);

function checkTheNum(myGuess) {
  const guessRange = 20;
  if (myGuess === guess) {
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
      showScore.textContent = guess;

      showMessage("🏆 You Won");
      btnCheck.disabled = true;
    }
  }

  if (myGuess > guess) {
    score--;
    scoreEl.textContent = score;
    input.value = "";

    showMessage("📈 Too Big");
  }
  if (myGuess < guess) {
    score--;
    scoreEl.textContent = score;
    input.value = "";

    showMessage("📉 Too Small");
  }

  if (myGuess > guessRange || myGuess < 0 || !myGuess) {
    input.value = "";
    showMessage("Your Number isn't valid");
  }

  if (score === 0) {
    showMessage("You Lose");
  }
  console.log(score, highScore);

  if (score < highScore) {
    btnCheck.disabled = true;
    showMessage("☹️ You Lose");
  }
}

function playAgain() {
  input.value = "";
  score = 20;
  scoreEl.textContent = score;
  guess = Math.floor(Math.random() * 20 + 1);
  showScore.textContent = "?";
  btnCheck.disabled = false;
  showMessage("Start Guessing");
}

btnAgain.addEventListener("click", playAgain);
