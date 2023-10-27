
const subContent1 = document.querySelector('.subcontent-1');
const subContent2 = document.querySelector('.subcontent-2');
const subContent3 = document.querySelector('.subcontent-3');

const icon1 = document.querySelector('.icon-1');
const icon2 = document.querySelector('.icon-2');
const icon3 = document.querySelector('.icon-3');

let count1 = 0, count2 = 0, count3 = 0;

function collapse(val){
    if(val == 1){
        if(count1 % 2 == 0){
            subContent1.classList.replace('invisible', 'visible');
            icon1.classList.replace('fa-square-plus', 'fa-square-minus');
        }
        else {
            subContent1.classList.replace('visible', 'invisible');
            icon1.classList.replace('fa-square-minus', 'fa-square-plus');
        }
        count1++;
    }
    else if(val == 2){
        if(count2 % 2 == 0){
            subContent2.classList.replace('invisible', 'visible');
            icon2.classList.replace('fa-square-plus', 'fa-square-minus');
        }
        else {
            subContent2.classList.replace('visible', 'invisible');
            icon2.classList.replace('fa-square-minus', 'fa-square-plus');
        }
        count2++;
    }
    else if(val == 3){
        if(count3 % 2 == 0){
            subContent3.classList.replace('invisible', 'visible');
            icon3.classList.replace('fa-square-plus', 'fa-square-minus');
        }
        else {
            subContent3.classList.replace('visible', 'invisible');
            icon3.classList.replace('fa-square-minus', 'fa-square-plus');
        }
        count3++;
    }
    else {
        console.log('BUG!');
    }
}