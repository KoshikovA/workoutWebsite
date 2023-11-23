let timerInterval;
let timerRunning = false;
let seconds = 60;
let exerciseNumber = 1;

let textIndex = 0;

function startTimer() {
  if (!timerRunning) {
    timerInterval = setInterval(updateTimer, 1000);
    timerRunning = true;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  seconds = 60;
  exerciseNumber = 1;
  updateTimer();
  updateExerciseImage();
}

function updateTimer() {
  seconds--;
  if (seconds === 0) {
    if (exerciseNumber < 5) {
      exerciseNumber++;
    } else {
      exerciseNumber = 1;
    }
    updateExerciseImage();
    seconds = 60;
  }
  const timeDisplay = `0:${seconds < 10 ? "0" + seconds : seconds}`;
  document.getElementById("timer").textContent = timeDisplay;
}

function updateExerciseImage() {
  const exerciseImage = document.getElementById("exerciseImage");
  exerciseImage.src = `../images/exercise${exerciseNumber}.jpg`;
}

const h1Element = document.getElementById("changingText");

const texts = [
  "Seated dumbbell press",
  "Deadlift",
  "Goblet squats",
  "Bent-over rows",
];

function changeH1Text() {
  h1Element.textContent = texts[textIndex];
  textIndex = (textIndex + 1) % texts.length;
}

updateTimer();
updateExerciseImage();

document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const resetButton = document.getElementById("resetButton");

  startButton.addEventListener("click", startTimer);
  resetButton.addEventListener("click", resetTimer);
});

setInterval(changeH1Text, 59000);
