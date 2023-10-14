
let count = 0;
let text = document.querySelector('p');

function reset(){
    count = 0;
    text.textContent = 0;
    text.style.color = 'blue';
}

function increase(){
    text.textContent = ++count;
    text.style.color = 'green';
}

function decrease(){
    text.textContent = --count;
    text.style.color = 'red';
}