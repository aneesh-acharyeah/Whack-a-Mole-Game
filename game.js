const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const holes = document.querySelectorAll(".hole");
let score = 0;
let timeLeft = 30;
let activeMole = null;
let gameInterval, moleInterval;

function randomHole() {
  const randomIndex = Math.floor(Math.random() * holes.length);
  return holes[randomIndex];
}

function showMole() {
  const hole = randomHole();
  if (activeMole) {
    activeMole.classList.remove("mole");
  }
  hole.classList.add("mole");
  activeMole = hole;
}

function hideMole() {
  if (activeMole) {
    activeMole.classList.remove("mole");
  }
}

function handleMoleClick(e) {
  if (e.target.classList.contains("mole")) {
    score++;
    scoreDisplay.textContent = score;
    hideMole();
  }
}

function startTimer() {
  gameInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      clearInterval(moleInterval);
      alert(`Game Over! Your final score is ${score}`);
    }
  }, 1000);
}

function startGame() {
  holes.forEach(hole => hole.addEventListener("click", handleMoleClick));
  startTimer();
  moleInterval = setInterval(showMole, 1000); // Mole appears every 1 second
}

startGame();
