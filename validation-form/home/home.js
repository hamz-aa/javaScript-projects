const logo = document.querySelector(".logo-text");
const sidebar = document.querySelector(".sidebar");
const logoutBtn = document.querySelector(".logout-btn");
const span = document.querySelector('main h1 span');
const setting = document.querySelector('.setting')
const dialog = document.querySelector('dialog');
const btnClose = document.querySelector('.close-btn');

const currentUser = JSON.parse(sessionStorage.getItem("current user"));

if(!currentUser) window.location.href = '../index.html';

logo.textContent = currentUser[0].name.slice(0, 2).toUpperCase();

let userName =  currentUser[0].name.slice(0, 1).toUpperCase() + currentUser[0].name.slice(1, currentUser[0].name.length);
span.textContent = ` ${userName}`

logo.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

logoutBtn.addEventListener("click", () => {
  sessionStorage.removeItem("current user");
  window.location.href = "../index.html";
});

setting.addEventListener('click', () => {
  dialog.showModal();
})

btnClose.addEventListener('click', () => {
  dialog.close();
})
