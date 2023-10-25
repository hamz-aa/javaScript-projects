const listItemInput = document.querySelector('#listItemInput');
const myUnorderdList = document.querySelector('ul');

function submitHandler() {
    let val = listItemInput.value;
    const li = `<li class="${val}">
    ${val}
    <div>
        <span class="listButton" id="edit" onclick="editHandler('${val}')">Edit</span>
        <span class="listButton" id="delete" onclick="deleteHandler('${val}')">Delete</span>
    </div>
    </li>`

    myUnorderdList.innerHTML += li;
    val = '';
    // const li = document.createElement('li');
    // const span1 = document.createElement('span');
    // const span2 = document.createElement('span');

    // li.textContent = listItemInput.value;
    // span1.innerText = 'Edit';
    // span2.innerText = 'Delete';

    // li.appendChild(span1)
    // li.appendChild(span2)

    // span1.classList.add('listButton')
    // span2.classList.add('listButton')

    // myUnorderdList.appendChild(li)
}

function editHandler(val){
    const li = document.querySelector(`.${val}`);
    listItemInput.value = li.children[0].textContent;
}

function deleteHandler(val){
    const li = document.querySelector(`.${val}`);
    li.remove();
    li.innerHTML = '';
}