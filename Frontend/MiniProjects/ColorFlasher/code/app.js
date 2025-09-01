let box = document.getElementById("box");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");

let intervalId; // to store setInterval id

function getRandomColor() {
  let r = Math.floor(Math.random() * 256); // 0–255
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

startBtn.addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(() => {
      box.style.backgroundColor = getRandomColor();
    }, 500);
  }
});

stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
});
