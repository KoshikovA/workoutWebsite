var mainVerify = false;

function toggleForm() {
  var loginForm = document.getElementById("login");
  var modal = document.getElementById("myModal");

  if (mainVerify) {
    document.getElementById("login").style.display = "none";
    document.getElementById("myModal").style.display = "none";
    document.getElementById("login").classList.add = "d-none";
  }
}

function login() {
  var loginEmail = document.getElementById("email").value;
  var loginPassword = document.getElementById("password").value;

  var accountJSON = localStorage.getItem(email);
  var Alim = JSON.parse(localStorage.getItem("alimzhan@mail.com"));
  var Ers = JSON.parse(localStorage.getItem("ersyn@mail.com"));
  if (accountJSON) {
    var account = JSON.parse(accountJSON);

    if (loginEmail === account.email && loginPassword === account.password) {
      alert("Successful!");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentLogin", "user");
      mainVerify = true;
    } else if (loginEmail === Alim.email && loginPassword === Alim.password) {
      alert("Successful!");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentLogin", "Alimzhan");
      mainVerify = true;
    } else if (loginEmail === Ers.email && loginPassword === Ers.password) {
      alert("Successful!");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentLogin", "Ersyn");
      mainVerify = true;
    } else if (loginEmail === "admin@admin.com" && loginPassword === "root") {
      alert("Successful!");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentLogin", "admin");
      mainVerify = true;
    } else {
      alert("Error. Please check correctness of account.");
    }
  } else {
    alert("Account not found. Please sign up.");
  }
}

document.getElementById("submit-main").addEventListener("click", function () {
  alert("Form validated successfully!");
  login();
  toggleForm();
});
