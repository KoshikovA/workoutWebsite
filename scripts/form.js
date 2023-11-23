// const signUp = (e) => {
//   let fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     email = document.getElementById("email").value,
//     pwd = document.getElementById("pwd").value;
//   let formData = JSON.parse(localStorage.getItem("formData"));
//   let exist =
//     formData.length &&
//     JSON.parse(localStorage.getItem("formData")).some(
//       (data) =>
//         data.fname.toLowerCase() == fname.toLowerCase() &&
//         data.lname.toLowerCase() == lname.toLowerCase()
//     );

//   if (!exist) {
//     formData.push({ fname, lname, email, pwd });
//     localStorage.setItem("formData", JSON.stringify(formData));
//     document.querySelector("form").reset();
//     document.getElementById("fname").focus();
//     alert("Account Created.\n\nPlease Sign In using the link below.");
//   } else {
//     alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
//   }
//   //---------------------------------
//   e.preventDefault();
// };

// function dispData() {
//   var output = document.querySelector("tbody");
//   output.innerHTML = "";
//   JSON.parse(localStorage.getItem("formData")).forEach((data) => {
//     output.innerHTML += `
//     <tr>
//         <td>${data.fname}</td>
//         <td>${data.lname}</td>
//         <td>${data.email}</td>
//         <td>${data.pwd}</td>
//     </tr>
//   `;
//   });
// }
// dispData();

// function signIn(e) {
//   let email = document.getElementById("email").value,
//     pwd = document.getElementById("pwd").value;
//   let formData = JSON.parse(localStorage.getItem("formData")) || [];
//   let exist =
//     formData.length &&
//     JSON.parse(localStorage.getItem("formData")).some(
//       (data) =>
//         data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd
//     );
//   if (!exist) {
//     alert("Incorrect login credentials");
//   } else {
//     location.href = "/";
//   }
//   e.preventDefault();
// }
function signIn() {
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("pwd").value;

  var users = JSON.parse(localStorage.getItem("formData")) || [];
  var user = users.find((u) => u.email === email && u.pwd === pwd);

  if (user) {
    alert("Sign in successful!");
    if (user.email === "admin2023@gmail.com" && user.pwd === "@Dmin2023") {
      window.location.href = "../htmls/adminPage.html";
    } else {
      window.location.href = "../htmls/userProfile.html";
    }
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

function signUp() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("pwd").value;

  // Проверка пароля
  if (validatePassword(pwd)) {
    var user = {
      fname: fname,
      lname: lname,
      email: email,
      pwd: pwd,
    };
    var users = JSON.parse(localStorage.getItem("formData")) || [];
    users.push(user);
    localStorage.setItem("formData", JSON.stringify(users));

    alert("Registration successful!");
    window.location.href = "../htmls/SignIn.html";
  } else {
    alert(
      "Password does not meet the requirements. Please ensure it is at least 8 characters long and includes at least 1 uppercase letter, 1 digit, and 1 special character (#, @, &, $, !)."
    );
  }
}

// Функция для проверки пароля
function validatePassword(pwd) {
  // Пароль должен быть не менее 8 символов
  if (pwd.length < 8) {
    return false;
  }

  // Проверка на наличие заглавной буквы
  var uppercaseRegex = /[A-Z]/;
  if (!uppercaseRegex.test(pwd)) {
    return false;
  }

  // Проверка на наличие цифры
  var digitRegex = /\d/;
  if (!digitRegex.test(pwd)) {
    return false;
  }

  // Проверка на наличие специального символа
  var specialCharRegex = /[#@&$!]/;
  if (!specialCharRegex.test(pwd)) {
    return false;
  }

  // Все проверки пройдены
  return true;
}
