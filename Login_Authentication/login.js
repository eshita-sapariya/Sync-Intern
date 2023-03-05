//SignUp Page
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirmPassword");

//SignIn Page
const userEmail = document.querySelector(".userEmail");
const userPassword = document.querySelector(".userPassword");

function store() {
  if (email.value.length == 0) {
    alert("Please fill in email");
  } else if (password.value.length == 0) {
    alert("Please fill password");
  } else if (email.value.length == 0 && password.value.length == 0) {
    alert("Please fil in email and password");
  } else if (password.value.length > 8) {
    alert("Max of 8");
  } else {
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    alert("Your account has been created!");
    email.value = " ";
    password.value = null;
    confirmPassword.value = null;
  }
}

function check() {
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (userEmail.value == storedEmail && userPassword.value == storedPassword) {
    alert("You are logged in!");
    window.location.href = "welcome.html";
    userEmail.value = " ";
    userPassword.value = null;
  } else {
    alert("Error in login");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form-hidden");
      createAccountForm.classList.remove("form-hidden");
    });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    createAccountForm.classList.add("form-hidden");
    loginForm.classList.remove("form-hidden");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    check();
  });

  createAccountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    store();
  });
});
