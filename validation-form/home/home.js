const logo = document.querySelector(".logo-text");
const sidebar = document.querySelector(".sidebar");
const logoutBtn = document.querySelector(".logout-btn");

const currentUser = JSON.parse(sessionStorage.getItem("current user"));

logo.textContent = currentUser[0].name.slice(0, 2).toUpperCase();

logo.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

logoutBtn.addEventListener("click", () => {
  sessionStorage.removeItem("current user");
  window.location.href = "../index.html";
});
