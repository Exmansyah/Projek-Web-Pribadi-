let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let loginContainer = document.getElementById("loginContainer");

function onLogin() {
  localStorage.setItem("username", passwordInput.value);
  if (usernameInput.value == "gpr" && passwordInput.value == "tampan") {
    loginContainer.style.display = "none"
    window.location.href = "second.html";
  }
  if (usernameInput.value == "admin" && passwordInput.value == "1") {
    loginContainer.style.display = "none"
    window.location.href = "second.html";
  }else{
    alert("Sorry, Account not registration");
  }
}

if (localStorage.getItem("username")) {
    loginContainer.style.display = "none"
    window.location.href = "second.html";
}