
const data = [
    {
        id : 1,
        img : './img/male-photo1.jpg',
        name : 'John Doe',
        job : 'WEB DEVELOPER',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores a nam sapiente sint. Ipsum ipsam aliquid accusantium cupiditate quae mollitia voluptate blanditiis nihil, quisquam corporis cumque exercitationem explicabo! Praesentium, iure?'
    },
    {
        id : 2,
        img : './img/male-photo2.jpg',
        name : 'Brian James',
        job : 'Designer',
        description : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ' 
    },
    {
        id : 3,
        img : './img/male-photo3.jpg',
        name : 'Ryan Gosling',
        job : 'Artist',
        description : 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.'
    }
]

let counter = 0;
let img = document.querySelector('img');
let userName = document.querySelector('.name');
let job = document.querySelector('.job');
let desc = document.querySelector('.sub-text')

function leftHandler(){
    if(counter == 0) counter = 2;
    else --counter;
    img.src = data[counter].img;
    userName.textContent = data[counter].name;
    job.textContent = data[counter].job;
    desc.textContent = data[counter].description;
}

function rightHandler(){
    if(counter == 2) counter = 0;
    else ++counter;
    img.src = data[counter].img;
    userName.textContent = data[counter].name;
    job.textContent = data[counter].job;
    desc.textContent = data[counter].description;
}

function surpriseHandler(){
    counter = uniqueGenerator();
    img.src = data[counter].img;
    userName.textContent = data[counter].name;
    job.textContent = data[counter].job;
    desc.textContent = data[counter].description;
}

function uniqueGenerator(){
    let random = Math.floor(Math.random() * data.length);
    while(random == counter){
        random = Math.floor(Math.random() * data.length);
    }
    return random;
}