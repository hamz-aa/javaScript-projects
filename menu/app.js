
const content = [
    {
        img: './img/buttermilk_pancakes.jpg',
        mainText: 'Buttermilk Pancakes',
        price: '15.99',
        subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste suscipit fuga perferendis autem laborum, nobis laboriosam ab? Error, officia.</p>',
        category: ['all', 'breakfast']
    },
    {
        img: './img/diner_double.jpg',
        mainText: 'Diner Double',
        price: '13.99',
        subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste suscipit fuga perferendis autem laborum, nobis laboriosam ab? Error, officia.</p>',
        category: ['all', 'lunch']
    },
    {
        img: './img/godzilla_milkshake.jpg',
        mainText: 'Godzilla Milkshake',
        price: '6.99',
        subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste suscipit fuga perferendis autem laborum, nobis laboriosam ab? Error, officia.</p>',
        category: ['all', 'shake']
    },
    {
        img: './img/breakfast.jpg',
        mainText: 'Country Delight',
        price: '20.99',
        subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste suscipit fuga perferendis autem laborum, nobis laboriosam ab? Error, officia.</p>',
        category: ['all', 'breakfast']
    },
    {
        img: './img/egg_attack.jpg',
        mainText: 'Egg Attack',
        price: '22.99',
        subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste suscipit fuga perferendis autem laborum, nobis laboriosam ab? Error, officia.</p>',
        category: ['all', 'lunch']
    },
    {
        img: './img/oreo_dream.jpg',
        mainText: 'Oreo Dream',
        price: '18.99',
        subText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iste suscipit fuga perferendis autem laborum, nobis laboriosam ab? Error, officia.</p>',
        category: ['all', 'shake']
    }
]

const mainContent = document.querySelector('.main-content')
let card;

for (let i = 0; i < content.length; i++) {
    card = document.querySelector(`.card-${i + 1}`);
    card.innerHTML += `<img src="${content[i].img}" alt="">        
    <div class="img-content">
        <div class="top-content">
            <p class="main-text">${content[i].mainText}</p>
            <p class="price">$${content[i].price}</p>
        </div>
        <p class="sub-text">${content[i].subText}</p>
    </div>`
}

function allHandler() {
    mainContent.innerHTML = '';
    for (let i = 0; i < content.length; i++) {
        mainContent.innerHTML += `<div class="card card-${i + 1}">
                <img src="${content[i].img}" alt="">        
                <div class="img-content">
                    <div class="top-content">
                        <p class="main-text">${content[i].mainText}</p>
                        <p class="price">$${content[i].price}</p>
                    </div>
                    <p class="sub-text">${content[i].subText}</p>
                    </div>
                </div>`
    }
}

function breakfastHandler() {
    mainContent.innerHTML = '';
    for (let i = 0; i < content.length; i++) {
        for (let j = 0; j < content[i].category.length; j++) {
            if (content[i].category[j] == 'breakfast') {
                mainContent.innerHTML += `<div class="card card-${i + 1}">
                <img src="${content[i].img}" alt="">        
                <div class="img-content">
                    <div class="top-content">
                        <p class="main-text">${content[i].mainText}</p>
                        <p class="price">$${content[i].price}</p>
                    </div>
                    <p class="sub-text">${content[i].subText}</p>
                    </div>
                </div>`
            }
        }
    }
}

function lunchHandler() {
    mainContent.innerHTML = '';
    for (let i = 0; i < content.length; i++) {
        for (let j = 0; j < content[i].category.length; j++) {
            if (content[i].category[j] == 'lunch') {
                mainContent.innerHTML += `<div class="card card-${i + 1}">
                <img src="${content[i].img}" alt="">        
                <div class="img-content">
                    <div class="top-content">
                        <p class="main-text">${content[i].mainText}</p>
                        <p class="price">$${content[i].price}</p>
                    </div>
                    <p class="sub-text">${content[i].subText}</p>
                    </div>
                </div>`
            }
        }
    }
}

function shakesHandler() {
    mainContent.innerHTML = '';
    for (let i = 0; i < content.length; i++) {
        for (let j = 0; j < content[i].category.length; j++) {
            if (content[i].category[j] == 'shake') {
                mainContent.innerHTML += `<div class="card card-${i + 1}">
                <img src="${content[i].img}" alt="">        
                <div class="img-content">
                    <div class="top-content">
                        <p class="main-text">${content[i].mainText}</p>
                        <p class="price">$${content[i].price}</p>
                    </div>
                    <p class="sub-text">${content[i].subText}</p>
                    </div>
                </div>`
            }
        }
    }
}