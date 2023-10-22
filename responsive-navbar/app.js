
let width = window.screen.width;
const midContent = document.querySelector('.mid-content');
const social = document.querySelector('.social');

console.log(window.screen.width)

if(window.screen.width < 800){
    
}

// let mql = window.matchMedia("(max-width: 600px)");

// document.querySelector(".mq-value").innerText = mql.matches;

const mql = window.matchMedia("(max-width: 600px)");

mql.onchange = (e) => {
  if (e.matches) {
    midContent.classList.add('invisible');
    social.classList.add('invisible');
    /* the viewport is 600 pixels wide or less */
    console.log("This is a narrow screen — less than 600px wide.");
} else {
    midContent.classList.add('visible');
    social.classList.add('visible');
    /* the viewport is more than 600 pixels wide */
    console.log("This is a wide screen — more than 600px wide.");
  }
};