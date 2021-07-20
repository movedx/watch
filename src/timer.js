import { state, screen } from "./main.js";

function timer() {
  showTimer();
}

function showTimer() {
  document.getElementById("watch").textContent = "";
  let timerElement = document.createElement("div");
  timerElement.id = "timer";
  document.getElementById("watch").append(timerElement);
  timerElement.textContent = "0:00:000";
  let btnStartTimer = document.createElement("button");
  btnStartTimer.textContent = "Start Timer";
  btnStartTimer.classList.add("button");
  btnStartTimer.id = "btnStartTimer";
  document.getElementById("watch").append(btnStartTimer);
  state.currentScreen = screen.TIMER;
  btnStartTimer.addEventListener("click", startTimer);
  let btnStopTimer = document.createElement("button");
  btnStopTimer.id = "btnStopTimer";
  btnStopTimer.style.display = "none";
  btnStopTimer.classList.add("button");
  document.getElementById("watch").append(btnStopTimer);
}

function startTimer() {
  let btnStartTimer = document.getElementById("btnStartTimer");
  btnStartTimer.style.display = "none";
  let timerElement = document.getElementById("timer");
  let startTime = Date.now();
  let intervalId = setInterval(function () {
    state.timerActive = true;
    let timeElapsed = Date.now() - startTime;
    let minutes = Math.floor(timeElapsed / 60000);
    let seconds = Math.floor((timeElapsed - minutes * 60000) / 1000);
    let milliseconds = timeElapsed - minutes * 60000 - seconds * 1000;
    timerElement.textContent =
      minutes +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds) +
      ":" +
      (milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds);
  }, 1);
  let btnStopTimer = document.getElementById("btnStopTimer");
  btnStopTimer.style.display = "block";
  btnStopTimer.textContent = "Stop Timer";
  btnStopTimer.classList.add("button");
  btnStopTimer.id = "btnStopTimer";
  document.getElementById("watch").append(btnStopTimer);
  btnStopTimer.addEventListener("click", () => stopTimer(intervalId));
}

function stopTimer(intervalId) {
  let btnStopTimer = document.getElementById("btnStopTimer");
  btnStopTimer.style.display = "none";
  let timerElement = document.getElementById("timer");
  clearInterval(intervalId);
  state.timerActive = false;
  let btnStartTimer = document.getElementById("btnStartTimer");
  btnStartTimer.style.display = "block";
}

export { timer };
