const images = document.getElementsByClassName("rounded-circle");
for (let i = 0; i < images.length; i++) {
  let image = images[i];
  image.addEventListener("mouseover", function () {
    image.style =
      "transform: scale(1.2); transition: 0.3s ease-in-out; cursor: pointer;";
  });
  image.addEventListener("mouseout", function () {
    image.style =
      "transform: scale(1); transition: 0.3s ease-in-out; cursor: pointer;";
  });
}
