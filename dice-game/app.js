const newGame = document.querySelector(".new-game button");
const rollDice = document.querySelector(".roll button");
const holdDice = document.querySelector(".hold button");

const player1TotalScore = document.querySelector(".total-score-1");
const player1Score = document.querySelector(".score-1");

const player2TotalScore = document.querySelector(".total-score-2");
const player2Score = document.querySelector(".score-2");

let playerName = document.querySelectorAll(".name");

const totalScore = document.querySelectorAll(".total-score");
const score = document.querySelectorAll(".score");

const show = document.querySelector(".show");

const info = document.querySelector(".info");
const infoToggler = document.querySelector(".infoToggler");
const btnStart = document.querySelector(".btn-start");

info.style.display = "none";

let toggleFlag = true;

const dice1 = document.querySelector(".dice-1");
const dice2 = document.querySelector(".dice-2");
const dice3 = document.querySelector(".dice-3");
const dice4 = document.querySelector(".dice-4");
const dice5 = document.querySelector(".dice-5");
const dice6 = document.querySelector(".dice-6");

const diceList = [dice1, dice2, dice3, dice4, dice5, dice6];

function clearDice() {
  for (let dice of diceList) {
    dice.style.display = "none";
  }
}

function setDice(n) {
  for (let i = 0; i < n; i++) {
    diceList[i].style.display = "block";
  }
}

function gridAreaReset() {
  for (let dice of diceList) {
    dice.style.gridArea = "";
  }
}

clearDice();
gridAreaReset();

player1 = true;
player2 = false;

totalScore.forEach((total) => {
  total.textContent = 0;
});

score.forEach((score) => {
  score.textContent = 0;
});

newGame.addEventListener("click", () => {
  totalScore.forEach((total) => {
    total.textContent = 0;
  });

  score.forEach((score) => {
    score.textContent = 0;
  });
});

rollDice.addEventListener("click", () => {
  let score = Math.floor(Math.random() * 6) + 1;

  clearDice();
  gridAreaReset();

  if (score == 1) {
    show.setAttribute("class", "show one");
    setDice(1);
  } else if (score == 2) {
    show.setAttribute("class", "show two");
    setDice(2);
    dice2.style.gridArea = "2 / 2";
  } else if (score == 3) {
    show.setAttribute("class", "show three");
    setDice(3);
    dice2.style.gridArea = "2 / 2";
    dice3.style.gridArea = "3 / 3";
  } else if (score == 4) {
    show.setAttribute("class", "show four");
    setDice(4);
  } else if (score == 5) {
    show.setAttribute("class", "show five");
    setDice(5);
    dice2.style.gridArea = "1 / 3";
    dice3.style.gridArea = "2 / 2";
    dice4.style.gridArea = "3 / 1";
    dice5.style.gridArea = "3 / 3";
  } else if (score == 6) {
    show.setAttribute("class", "show six");
    setDice(6);
  }

  if (score === 1) {
    if (player1) {
      player1 = false;
      player2 = true;
      player1Score.textContent = 0;
      player1TotalScore.textContent = 0;
    } else {
      player2 = false;
      player1 = true;
      player2Score.textContent = 0;
      player2TotalScore.textContent = 0;
    }
    return;
  }

  if (player1) {
    player1Score.textContent = parseInt(player1Score.textContent) + score;
  } else {
    player2Score.textContent = parseInt(player2Score.textContent) + score;
  }
});

holdDice.addEventListener("click", () => {
  if (player1) {
    player1 = false;
    player2 = true;
    player1TotalScore.textContent =
      parseInt(player1TotalScore.textContent) +
      parseInt(player1Score.textContent);
    player1Score.textContent = 0;
  } else {
    player2 = false;
    player1 = true;
    player2TotalScore.textContent =
      parseInt(player2TotalScore.textContent) +
      parseInt(player2Score.textContent);
    player2Score.textContent = 0;
  }
});

infoToggler.addEventListener("click", () => {
  if (toggleFlag) {
    info.style.display = "grid";
    toggleFlag = false;
  } else {
    info.style.display = "none";
    toggleFlag = true;
  }
});

btnStart.addEventListener("click", () => {
  info.style.display = "none";
  toggleFlag = true;
});

playerName.forEach((name) => {
  name.addEventListener("click", () => {
    let parent = name.parentElement;
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("onKeyPress", `inputName(${"event"})`);
    parent.prepend(input);
    name.remove();
  });
});

function inputName(e) {
  if (e.keyCode === 13) {
    let parent = e.target.parentElement;
    let pClass = parent.getAttribute("class");
    let n = pClass.slice(pClass.length - 1, pClass.length);
    let heading = document.createElement("h1");
    heading.textContent = e.target.value;
    heading.setAttribute("class", `name name-${n}`);
    parent.prepend(heading);
    e.currentTarget.remove();
    playerName = document.querySelectorAll(".name");
    console.log(playerName);
  }
}
