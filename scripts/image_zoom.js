let image = document.getElementById("img01");

// image.addEventListener("click", function () {
//   image.style =
//     "transform: scale(1.2); transition: 0.3s ease-in-out; cursor: pointer;";
// });

image.addEventListener("click", function () {

  if (image.style.transform == "scale(1)") {
    image.style =
      "transform: scale(1.5); transition: 0.2s ease-in-out; cursor: pointer;";
  } else {
    image.style =
      "transform: scale(1.0); transition: 0.4s; cursor: pointer;";
  }
});

