// generate a random number
let randomNumber = Math.floor(Math.random() * 100) + 1;

// create constants and variables
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
let biggerThan = [0];
let smallerThan = [100];
const numberRange = document.querySelector(".range");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
  //   alert("I am a placeholder");
  const userGuess = Number(guessField.value); // check later and see if script works when "Number" is removed
  // if (guessCount === 1) {
  //   guesses.textContent = "Previouse guesses: ";
  // }
  // console.log(userGuess);
  // guesses.textContent += ` ${userGuess},`;

  //   console.log("jiba" + Math.min.apply(Math, lowestAndHighestGuess));
  //   lowestGuess.textContent =
  //     "Lowest Guess: " + Math.min.apply(Math, lowestAndHighestGuess);
  //   highestGuess.textContent =
  //     "Highest Guess: " + Math.max.apply(Math, lowestAndHighestGuess);

  if (userGuess == randomNumber) {
    lastResult.textContent = "可以啊！有点厉害哟！！一天好心情！！";
    lastResult.style.textAlign = "center";
    lastResult.style.backgroundColor = "green";
    lastResult.style.marginBottom = "20px";
    numberRange.textContent = "";
    lowOrHigh.textContent = "";
    console.log(lowOrHigh);
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent =
      "没关系，再来！儿子想的数其实是：" + `${randomNumber}`;
    numberRange.textContent = "";
    lowOrHigh.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "再试试!!";
    lastResult.style.textAlign = "center";

    lastResult.style.backgroundColor = "blue";
    lastResult.style.marginBottom = "20px";
    if (userGuess < randomNumber) {
      lowOrHigh.textContent =
        "再高点！还有" + ` ${10 - guessCount} ` + "次机会";
      biggerThan.push(userGuess);
      console.log(biggerThan);
    } else if (userGuess > randomNumber) {
      lowOrHigh.textContent =
        "低点低点。。。还有" + ` ${10 - guessCount} ` + "次机会";
      smallerThan.push(userGuess);
      console.log(smallerThan);
    }
    numberRange.textContent =
      "儿子想的数在 " +
      Math.max.apply(Math, biggerThan) +
      " 和 " +
      Math.min.apply(Math, smallerThan) +
      "之间";
  }

  guessCount++;
  console.log(guessCount);
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "再来一次！";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
