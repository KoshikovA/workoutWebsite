var counter = 0;

var addToCart = document.querySelectorAll(".add-to-cart");
var tableBody = document.querySelector("#cart-body");
for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", function () {
    var productName = document.querySelectorAll(".d-inline-block .display-6");
    var productPrice = document.querySelectorAll(
      ".product .d-block .text-danger"
    );

    var row = document.createElement("tr");
    var rowNumber = document.createElement("th");
    var rowName = document.createElement("td");
    var rowQuantity = document.createElement("td");
    var rowPrice = document.createElement("td");

    rowNumber.setAttribute("scope", "row");

    rowName.setAttribute("class", "product-name");
    rowQuantity.setAttribute("class", "product-quantity");
    rowPrice.setAttribute("class", "product-price");

    rowNumber.innerHTML = ++counter;
    rowName.innerHTML = productName[i].innerHTML;
    rowQuantity.innerHTML = 1;
    rowPrice.innerHTML = productPrice[i].innerHTML;

    row.appendChild(rowNumber);
    row.appendChild(rowName);
    row.appendChild(rowQuantity);
    row.appendChild(rowPrice);

    tableBody.appendChild(row);

    var total = document.querySelector("#total");
    var totalNumber = parseInt(total.innerHTML);
    totalNumber += parseInt(productPrice[i].innerHTML);
    total.textContent = totalNumber;

    var remove = document.querySelectorAll(".remove");
    for (let j = 0; j < remove.length; j++) {
      remove[j].addEventListener("click", function () {
        var row = remove[j].parentNode.parentNode;
        var rowPrice = row.querySelector(".product-price");
        var total = document.querySelector("#total");
        var totalNumber = parseInt(total.innerHTML);
        totalNumber -= parseInt(rowPrice.innerHTML);
        total.innerHTML = totalNumber;
        row.parentNode.removeChild(row);
      });
    }
  });
}
