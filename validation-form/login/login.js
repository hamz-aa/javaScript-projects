const username = document.querySelector("#login-username");
const password = document.querySelector("#login-password");

const loginBtn = document.querySelector(".login-btn");

username.value = "";
password.value = "";

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users"));

  if (!username.value || !password.value) return alert("Fill all fields");
  if (password.value.length < 8) {
    return alert("wrong password");
  }

  users.forEach((user) => {
    if (username.value !== user.name || password.value !== user.password) {
      return alert("wrong username or password");
    }
  });

  username.value = "";
  password.value = "";

  window.location.href = "../home.html";
});
