const newGame = document.querySelector('.new-game button');
const rollDice = document.querySelector('.roll button');
const holdDice = document.querySelector('.hold button');

player1 = true;
player2 = false;

newGame.addEventListener('click', ()=>{
    const totalScore = document.querySelectorAll('.total-score');
    const score = document.querySelectorAll('.score');

    totalScore.forEach((total)=>{
        total.textContent = 0;
    })

    score.forEach((score)=>{
        score.textContent = 0;
    })
    
})

rollDice.addEventListener('click', ()=>{
    let score = Math.floor(Math.random() * 6) + 1;
    
    const diceScore = document.querySelector('.dice-score');
    diceScore.textContent = score;

    
})