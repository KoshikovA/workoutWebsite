const signUp = (e) => {
  let formData = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    pwd: document.getElementById("pwd").value,
  };
};

localStorage.setItem("formData", JSON.stringify(formData));
console.log(localStorage.getItem("formData"));
e.preventDefault();
