const loginForm = document.getElementById("loginForm");
loginForm.addEventListener(
  "submit",
  (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!loginForm.checkValidity()) {
      loginForm.classList.add("was-validated");
      return;
    }
    window.location.href = "./EmExibicao/index.html";
  },
  false
);
