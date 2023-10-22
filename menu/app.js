
const content = [
    {
        img : './img/breakfast.jpg',
        mainText : 'Buttermilk Pancakes',
        price : '15.99',
        subText : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste suscipit fuga perferendis autem laborum, nobis laboriosam ab? Error, officia.</p>',
        category : ['all', 'breakfast']
    },
    {
        img : './img/breakfast.jpg',
        mainText : 'Diner Double',
        price : '13.99',
        subText : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste suscipit fuga perferendis autem laborum, nobis laboriosam ab? Error, officia.</p>',
        category : ['all', 'lunch']
    },
    {
        img : './img/breakfast.jpg',
        mainText : 'Godzilla Milkshake',
        price : '6.99',
        subText : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste suscipit fuga perferendis autem laborum, nobis laboriosam ab? Error, officia.</p>',
        category : ['all', 'shake']
    },
    {
        img : './img/breakfast.jpg',
        mainText : 'Country Delight',
        price : '20.99',
        subText : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste suscipit fuga perferendis autem laborum, nobis laboriosam ab? Error, officia.</p>',
        category : ['all', 'breakfast']
    },
    {
        img : './img/breakfast.jpg',
        mainText : 'Egg Attack',
        price : '22.99',
        subText : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste suscipit fuga perferendis autem laborum, nobis laboriosam ab? Error, officia.</p>',
        category : ['all', 'lunch']
    },
    {
        img : './img/breakfast.jpg',
        mainText : 'Oreo Dream',
        price : '18.99',
        subText : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste suscipit fuga perferendis autem laborum, nobis laboriosam ab? Error, officia.</p>',
        category : ['all', 'shake']
    }
]

const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const card3 = document.querySelector('.card-3');
const card4 = document.querySelector('.card-4');
const card5 = document.querySelector('.card-5');
const card6 = document.querySelector('.card-6');

const mainContent = document.querySelector('.main-content')
let card;

function allHandler(){
    for(let i = 0; i < content.length; i++){
        card = document.querySelector(`.card-${i+1}`);
        card.innerHTML = `<img src="${content[i].img}" alt="">        
        <div class="img-content">
            <div class="top-content">
                <p class="main-text">${content[i].mainText}</p>
                <p class="price">${content[i].price}</p>
            </div>
            <p class="sub-text">${content[i].subText}</p>
        </div>`
    }
}

function breakfastHandler(){
    for(let i = 0; i < content.length; i++){
        card = document.querySelector(`.card-${i+1}`);
        for(let j = 0; j < content[i].category.length; j++){
            if(content[i].category[j] == 'breakfast'){
                console.log(content[i].category[j], card)
                card.innerHTML = `<img src="${content[i].img}" alt="">        
        <div class="img-content">
            <div class="top-content">
                <p class="main-text">${content[i].mainText}</p>
                <p class="price">${content[i].price}</p>
            </div>
            <p class="sub-text">${content[i].subText}</p>
        </div>`
            }
            else {
                card.classList.add('invisible');
            }
        }
    }
}