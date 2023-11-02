const btn = document.querySelector('.btn');
const todoData = document.querySelector('.todo-data');

let count = 0;

function submitHandler(){
    count++;

    const inp = document.querySelector('.input');
    const val = inp.value;

    const li = document.createElement('li');
    const p = document.createElement('p');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    p.textContent = val;
    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'Delete';

    editBtn.setAttribute('class', 'editBtn');
    deleteBtn.setAttribute('class', 'deleteBtn');

    editBtn.setAttribute('onclick', `editHandler(${count})`);
    deleteBtn.setAttribute('onclick', `deleteHandler(${count})`);

    li.setAttribute('class', `todo-data-wrapper todo-data-wrapper-${count}`);
    p.setAttribute('class', 'todo-text');

    li.append(p);
    li.append(editBtn);
    li.append(deleteBtn);

    todoData.prepend(li);
    inp.value = '';
}

function editHandler(num){
    const inp = document.createElement('input');
    inp.setAttribute('type', 'text');
    inp.setAttribute('class', 'editInp');

    const li = document.querySelector(`.todo-data-wrapper-${num}`);
    const p = document.querySelector(`.todo-data-wrapper-${num} p`);

    inp.value = p.textContent;
    p.remove();
    li.prepend(inp);
}

function deleteHandler(num){
    const li = document.querySelector(`.todo-data-wrapper-${num}`);
    li.innerHTML = ''
    li.remove();
}