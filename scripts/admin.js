function populateUserTable() {
  var tableBody = document.getElementById("output");
  tableBody.innerHTML = ""; // Очищаем содержимое таблицы
  var users = JSON.parse(localStorage.getItem("formData")) || [];

  for (var i = 0; i < users.length; i++) {
    (function (index) {
      var user = users[index];
      var row = document.createElement("tr");

      var cell1 = document.createElement("td");
      cell1.textContent = user.fname;
      row.appendChild(cell1);

      var cell2 = document.createElement("td");
      cell2.textContent = user.lname;
      row.appendChild(cell2);

      var cell3 = document.createElement("td");
      cell3.textContent = user.email;
      row.appendChild(cell3);

      var cell4 = document.createElement("td");
      cell4.textContent = user.pwd; // Скрытый пароль
      row.appendChild(cell4);

      var cell7 = document.createElement("td");
      var editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("btn", "btn-primary", "btn-sm");
      editButton.onclick = function () {
        editUser(index);
      };
      cell7.appendChild(editButton);

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("btn", "btn-danger", "btn-sm");
      deleteButton.onclick = function () {
        deleteUser(index);
      };
      cell7.appendChild(deleteButton);

      row.appendChild(cell7);

      tableBody.appendChild(row);
    })(i);
  }
}

function editUser(index) {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  var user = users[index];

  var newName = prompt("Enter new first name:", user.fname);
  var newLastName = prompt("Enter new last name:", user.lname);
  var newEmail = prompt("Enter new email:", user.email);

  if (newName && newLastName && newEmail && newDob && newGender) {
    user.fname = newName;
    user.lname = newLastName;
    user.email = newEmail;
    localStorage.setItem("formData", JSON.stringify(users));
    populateUserTable();
  }
}

function deleteUser(index) {
  var users = JSON.parse(localStorage.getItem("formData")) || [];
  users.splice(index, 1);
  localStorage.setItem("formData", JSON.stringify(users));
  var tableBody = document.getElementById("output");
  tableBody.innerHTML = "";
  populateUserTable();
}

window.onload = populateUserTable;
