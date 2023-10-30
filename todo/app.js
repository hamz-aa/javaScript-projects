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