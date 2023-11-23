let sliderItems = document.querySelectorAll(".slider .slider-element");
let currentIndex = 0;

function showSlide(index) {
  sliderItems.forEach((item) => {
    item.style.display = "none";
  });

  sliderItems[index].style.display = "block";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % sliderItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", previousSlide);

sliderItems.length;
