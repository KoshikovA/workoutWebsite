const h1Element = document.getElementById("changingText");

const texts = [
  "Seated dumbbell press",
  "Deadlift",
  "Goblet squats",
  "Bent-over rows",
];

let textIndex = 0;

function changeH1Text() {
  h1Element.textContent = texts[textIndex];
  textIndex = (textIndex + 1) % texts.length;
}

setInterval(changeH1Text, 59000);
