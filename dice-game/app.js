const newGame = document.querySelector(".new-game button");
const rollDice = document.querySelector(".roll button");
const holdDice = document.querySelector(".hold button");

const player1TotalScore = document.querySelector(".total-score-1");
const player1Score = document.querySelector(".score-1");

const player2TotalScore = document.querySelector(".total-score-2");
const player2Score = document.querySelector(".score-2");

let playerName = document.querySelectorAll(".name");
let playerName1 = document.querySelector(".name-1");
let playerName2 = document.querySelector(".name-2");

const totalScore = document.querySelectorAll(".total-score");
const score = document.querySelectorAll(".score");

const show = document.querySelector(".show");

const info = document.querySelector(".info");
const infoToggler = document.querySelector(".infoToggler");
const btnStart = document.querySelector(".btn-start");
const infoWrapper = document.querySelector(".info-wrapper");

const player1TossName = document.querySelector(".player-1-toss h1");
const player1Toss = document.querySelector(".player-1-toss p");

const player2TossName = document.querySelector(".player-2-toss h1");
const player2Toss = document.querySelector(".player-2-toss p");

const coin = document.querySelector(".coin");
const coinBtn = document.querySelector(".coin button");

const resultCoinToss = document.querySelector(".toss-section h1 span");
const tossWinPlayer = document.querySelector(".toss-section p span");

const tossWrapper = document.querySelector(".toss-wrapper");
const toss = document.querySelector(".toss");
toss.style.display = "none";

coinBtn.textContent = "Start";

info.style.display = "none";
infoWrapper.style.display = "none";

let toggleFlag = true;

const win = document.querySelector(".win");
const winWrapper = document.querySelector(".win-wrapper");
const winningPlayer = document.querySelector(".win h1 span");
const playAgainBtn = document.querySelector(".win button");

win.style.display = "none";

const dice1 = document.querySelector(".dice-1");
const dice2 = document.querySelector(".dice-2");
const dice3 = document.querySelector(".dice-3");
const dice4 = document.querySelector(".dice-4");
const dice5 = document.querySelector(".dice-5");
const dice6 = document.querySelector(".dice-6");

const diceList = [dice1, dice2, dice3, dice4, dice5, dice6];

const tossList = ["Heads", "Tails"];

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

  player1TossName.textContent = playerName1.textContent;
  player2TossName.textContent = playerName2.textContent;

  toggleEffect(toss, tossWrapper);
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
      playerName2.style.backgroundColor = "#eee2de";
      playerName1.style.backgroundColor = "transparent";
      playerName2.style.border = "2px solid";
      playerName1.style.border = "none";
      player1Score.textContent = 0;
      player1TotalScore.textContent = 0;
    } else {
      player2 = false;
      player1 = true;
      playerName1.style.backgroundColor = "#eee2de";
      playerName2.style.backgroundColor = "transparent";
      playerName2.style.border = "none";
      playerName1.style.border = "2px solid";
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

  if (
    parseInt(player1Score.textContent.trim()) +
      parseInt(player1TotalScore.textContent) >=
    50
  ) {
    playerWins(playerName1.textContent);
  } else if (
    parseInt(player2Score.textContent.trim()) +
      parseInt(player2TotalScore.textContent) >=
    50
  ) {
    playerWins(playerName2.textContent);
  }
});

holdDice.addEventListener("click", () => {
  if (player1) {
    player1 = false;
    player2 = true;
    playerName2.style.border = "2px solid";
    playerName1.style.border = "none";
    playerName2.style.backgroundColor = "#eee2de";
    playerName1.style.backgroundColor = "transparent";
    player1TotalScore.textContent =
      parseInt(player1TotalScore.textContent) +
      parseInt(player1Score.textContent);
    player1Score.textContent = 0;
  } else {
    player2 = false;
    player1 = true;
    playerName2.style.border = "none";
    playerName1.style.border = "2px solid";
    playerName1.style.backgroundColor = "#eee2de";
    playerName2.style.backgroundColor = "transparent";
    player2TotalScore.textContent =
      parseInt(player2TotalScore.textContent) +
      parseInt(player2Score.textContent);
    player2Score.textContent = 0;
  }

  if (parseInt(player1TotalScore.textContent.trim()) >= 50) {
    playerWins(playerName1.textContent);
  } else if (parseInt(player2TotalScore.textContent.trim()) >= 50) {
    playerWins(playerName2.textContent);
  }
});

infoToggler.addEventListener("click", () => {
  toggleEffect(infoWrapper, info);
});

btnStart.addEventListener("click", () => {
  toggleEffect(infoWrapper, info);
});

let removedElement;

playerName.forEach((name) => {
  name.addEventListener("click", () => {
    let parent = name.parentElement;
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "name-input");
    input.setAttribute("onKeyPress", `inputName(${"event"})`);
    parent.prepend(input);
    removedElement = parent.removeChild(name);
  });
});

function inputName(e) {
  if (e.keyCode === 13) {
    let parent = e.target.parentElement;
    removedElement.textContent = e.target.value;
    parent.prepend(removedElement);
    e.currentTarget.remove();
    playerName = document.querySelectorAll(".name");
  }
}

coinBtn.addEventListener("click", () => {
  let randomTossPlayer = Math.floor(Math.random() * 2) + 1;
  coin.style.animation = "1s ease 0s infinite normal none running rotate";
  if (randomTossPlayer === 1) {
    player1Toss.textContent = "Heads";
    player2Toss.textContent = "Tails";
  } else {
    player1Toss.textContent = "Tails";
    player2Toss.textContent = "Heads";
  }

  setTimeout(() => {
    coin.style.animation = "none";
    let resultToss = Math.floor(Math.random() * 2);
    resultCoinToss.textContent = tossList[resultToss];

    if (tossList[resultToss] === "Heads") {
      coinBtn.style.backgroundColor = "red";
      coinBtn.style.color = "white";
      coinBtn.textContent = "Heads";
    } else {
      coinBtn.style.backgroundColor = "green";
      coinBtn.style.color = "white";
      coinBtn.textContent = "Tails";
    }

    if (player1Toss.textContent.trim() === tossList[resultToss]) {
      tossWinPlayer.textContent = playerName1.textContent;
      playerName1.style.border = "2px solid";
      playerName1.style.backgroundColor = "#eee2de";
      playerName2.style.border = "none";
      playerName2.style.backgroundColor = "none";
    } else {
      tossWinPlayer.textContent = playerName2.textContent;
      playerName2.style.border = "2px solid";
      playerName2.style.backgroundColor = "#eee2de";
      playerName1.style.border = "none";
      playerName1.style.backgroundColor = "none";
    }

    setTimeout(() => {
      toggleEffect(toss, tossWrapper);
    }, 2000);
  }, 3000);
});

function playerWins(player) {
  winningPlayer.textContent = player;
  toggleEffect(win, winWrapper);
}

playAgainBtn.addEventListener("click", () => {
  playerName2.style.border = "none";
  playerName2.style.backgroundColor = "none";
  playerName1.style.border = "none";
  playerName1.style.backgroundColor = "none";
  win.style.display = "none";
  clearDice();
  gridAreaReset();

  totalScore.forEach((total) => {
    total.textContent = 0;
  });

  score.forEach((score) => {
    score.textContent = 0;
  });

  toggleEffect(win, winWrapper);
});

function toggleEffect(parent, child) {
  if (toggleFlag) {
    parent.style.display = "flex";
    child.style.display = "grid";
    parent.classList.add("transparent-background");
    toggleFlag = false;
  } else {
    parent.style.display = "none";
    parent.classList.remove("transparent-background");
    child.style.display = "none";
    toggleFlag = true;
  }
}
