let clock = document.getElementById("clock");


function updateClock() {
  let now = new Date(); // Get current date & time

  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}


setInterval(updateClock, 1000);

updateClock();
