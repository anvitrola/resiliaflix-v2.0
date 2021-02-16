const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  if (!loginForm.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }
  loginForm.classList.add("was-validated");
}, false);
