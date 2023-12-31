const username = document.querySelector("#login-username");
const password = document.querySelector("#login-password");

const loginBtn = document.querySelector(".login-btn");

if (sessionStorage.getItem("current user"))
  window.location.href = "../home/home.html";

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const users = JSON.parse(sessionStorage.getItem("users"));
  const currentUser = [];

  if (!username.value || !password.value) return alert("Fill all fields");
  if (password.value.length < 8) {
    return alert("wrong password");
  }

  let flag = true;

  users.forEach((user) => {
    if (username.value !== user.name || password.value !== user.password) {
      flag = false;
    }
  });

  if (!flag) {
    alert("wrong username or password");
    return;
  }

  const user = {
    name: username.value,
    password: password.value,
  };

  currentUser.push(user);

  sessionStorage.setItem("current user", JSON.stringify(currentUser));

  username.value = "";
  password.value = "";

  window.location.href = "../home/home.html";
});
