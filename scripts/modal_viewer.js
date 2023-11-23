var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("modal-caption");
var heading = document.getElementById("modal-heading");


var images = document.querySelectorAll(".d-inline-block img");
var headings = document.querySelector(".d-inline-block h1");
var captions =  document.querySelector(".d-inline-block p");

// function showModal(e) {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
//     heading.innerHTML = heading[e].innerHTML;
// }

// var data = document.querySelectorAll(".d-inline-block");

// var images = document.querySelectorAll(data + " img");
// var headings = document.querySelectorAll(data + " h1");
// var captions =  document.querySelectorAll(data + " p");

function showModal(e) {
    modal.style.display = "block";
    modalImg.src = this.src;
    this.alt = this.alt.replace("\\n", "<br>");
    captionText.innerHTML = this.alt;

}


for (let i = 0;i < images.length; i++) {
    images[i].addEventListener("click", showModal);
}




// for (var i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", showModal);
// }



