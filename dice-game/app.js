const newGame = document.querySelector('.new-game button');
const rollDice = document.querySelector('.roll button');
const holdDice = document.querySelector('.hold button');

const player1TotalScore = document.querySelector('.total-score-1');
const player1Score = document.querySelector('.score-1');

const player2TotalScore = document.querySelector('.total-score-2');
const player2Score = document.querySelector('.score-2');

const totalScore = document.querySelectorAll('.total-score');
const score = document.querySelectorAll('.score');

player1 = true;
player2 = false;

totalScore.forEach((total)=>{
    total.textContent = 0;
})

score.forEach((score)=>{
    score.textContent = 0;
})

const diceScore = document.querySelector('.dice-score');
diceScore.textContent = 0;

newGame.addEventListener('click', ()=>{
    totalScore.forEach((total)=>{
        total.textContent = 0;
    })

    score.forEach((score)=>{
        score.textContent = 0;
    })
})

rollDice.addEventListener('click', ()=>{
    let score = Math.floor(Math.random() * 6) + 1;
    
    diceScore.textContent = score;

    if (score === 1){
        if (player1) {
            player1 = false;
            player2 = true;
            player1Score.textContent = 0;
            player1TotalScore.textContent = 0;
        } 
        else {
            player2 = false;
            player1 = true;
            player2Score.textContent = 0;
            player2TotalScore.textContent = 0;
        }
    }

    if (player1){
        player1TotalScore.textContent = parseFloat(player1TotalScore.textContent) + score;
    }
    else {
        player2TotalScore.textContent = parseFloat(player2TotalScore.textContent) + score;
    }
})

holdDice.addEventListener('click', ()=>{
    if (player1) {
        player1 = false;
        player2 = true;
        player1Score.textContent = player1TotalScore.textContent;
        player1TotalScore.textContent = 0;
    } 
    else {
        player2 = false;
        player1 = true;
        player2Score.textContent = player2TotalScore.textContent;
        player2TotalScore.textContent = 0;
    }
})