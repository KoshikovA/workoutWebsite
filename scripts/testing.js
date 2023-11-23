document.addEventListener("DOMContentLoaded", function () {
  const arniImage = document.querySelector(".arni");
  const citationText = document.querySelector(".citation p");

  arniImage.addEventListener("click", function () {
    citationText.textContent += " New text added";
  });
});
