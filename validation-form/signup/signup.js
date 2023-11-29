const username = document.querySelector("#signup-username");
const email = document.querySelector("#signup-email");
const password = document.querySelector("#signup-password");
const confirmPassword = document.querySelector("#confirm-signup-password");

const signupBtn = document.querySelector(".signup-btn");

username.value = "";
email.value = "";
password.value = "";
confirmPassword.value = "";

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (
    !username.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value
  )
    return alert("Fill all fields");
  if (password.value.length < 8) {
    return alert("Password should be greater than 7 characters");
  }
  if (password.value !== confirmPassword.value) {
    return alert("Password does not match Confirm Password");
  }

  username.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";

  const user = {
    name: username.value,
    email: email.value,
    password: password.value,
  };

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = "../login/login.html";
});
