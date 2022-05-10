const startBtn = document.querySelector("#startBtn");
const slide1 = document.querySelector(".startGame");
const slide2 = document.querySelector(".timeSettings");
const slide3 = document.querySelector(".game");
const buttons = document.querySelector(".buttons");
const timer = document.querySelector("#timer");
const board = document.querySelector("#board");
const dragon = document.querySelector("#dragon");
const restart = document.querySelector("#restart");

let time = 0;
let scoreCircle = 0;

startBtn.addEventListener("click", () => {
  slide1.style.display = "none";
  slide2.style.display = "flex";
  dragon.classList.add("move-up");
});

buttons.addEventListener("click", (e) => {
  time = e.target.value;
  slide2.style.display = "none";
  slide3.style.display = "flex";
  gameStart();
});

function gameStart() {
  let tick = setInterval(increaseTime, 1000);
  createCircles();
}

function increaseTime() {
  if (time === 0) {
    endGame();
  } else {
    let current = --time;
    timer.innerHTML = `00:${current}`;
    if (time < 10) {
      timer.innerHTML = `00:0${current}`;
    }
  }
}

function createCircles() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  const size = getRandomSize(5, 40);
  const positionX = getRandomSize(10, 430);
  const positionY = getRandomSize(10, 430);
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${positionY}px`;
  circle.style.left = `${positionX}px`;

  board.append(circle);

  circle.addEventListener("click", newCircle);
}
function getRandomSize(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function newCircle(e) {
  if (e.target.classList.contains("circle")) {
    ++scoreCircle;
    e.target.remove();
    createCircles();
  }
}

function endGame() {
  board.innerHTML = `<h3>Вы надавили на ${scoreCircle} дырок</h3>`;
  restart.style.opacity = "1";
}

restart.addEventListener("click", () => {
  // time = 0;
  // scoreCircle = 0;
  // dragon.classList.remove("move-up");
  // slide3.style.display = "none";
  // slide1.style.display = "flex";

  document.location.reload();
});
