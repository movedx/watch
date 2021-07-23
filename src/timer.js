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

  let btnContainer = document.createElement("div");
  btnContainer.id = "timerBtnContainer";
  document.getElementById("watch").append(btnContainer);

  btnStartTimer.id = "btnStartTimer";
  document.getElementById("timerBtnContainer").append(btnStartTimer);
  state.currentScreen = screen.TIMER;
  btnStartTimer.addEventListener("click", startTimer);

  let btnStopTimer = document.createElement("button");
  btnStopTimer.id = "btnStopTimer";
  btnStopTimer.textContent = "Stop Timer";
  btnStopTimer.style.display = "none";
  btnStopTimer.classList.add("button");
  document.getElementById("timerBtnContainer").append(btnStopTimer);

  let btnLap = document.createElement("button");
  btnLap.id = "btnLap";
  btnLap.textContent = "Lap";
  btnLap.classList.add("button");
  btnLap.style.display = "none";
  document.getElementById("timerBtnContainer").append(btnLap);

  let lapsList = document.createElement("div");
  lapsList.id = "lapsList";
  document.getElementById("watch").append(lapsList);
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
  btnStopTimer.addEventListener("click", () =>
    stopTimer(intervalId, timerElement.textContent)
  );

  let btnLap = document.getElementById("btnLap");
  btnLap.style.display = "block";

  btnLap.addEventListener("click", () => lap(timerElement.textContent));
}

function stopTimer(intervalId) {
  let btnStopTimer = document.getElementById("btnStopTimer");
  btnStopTimer.style.display = "none";

  let btnLap = document.getElementById("btnLap");
  btnLap.style.display = "none";

  let timerElement = document.getElementById("timer");
  clearInterval(intervalId);

  state.timerActive = false;

  let btnStartTimer = document.getElementById("btnStartTimer");
  btnStartTimer.style.display = "block";
}

function calculateLapTime(m, s, ms, lm, ls, lms) {
  let lapM = 0;
  let lapS = 0;
  let lapMS = 0;

  if (ms < lms) {
    s--;
    lapMS = ms + 1000 - lms;
  } else {
    lapMS = ms - lms;
  }

  if (s < ls) {
    m--;
    lapS = s + 60 - ls;
  } else {
    lapS = s - ls;
  }

  lapM = m - lm;

  return (
    lapM +
    ":" +
    (lapS < 10 ? "0" + lapS : lapS) +
    ":" +
    (lapMS < 10 ? "00" + lapMS : lapMS < 100 ? "0" + lapMS : lapMS)
  );
}

function lap(time) {
  let minutes = time.split(":")[0];
  let seconds = time.split(":")[1];
  let milliseconds = time.split(":")[2];

  let timerTime = state.timerTime;
  let last = timerTime.length;
  let lapTime =
    last > 0
      ? calculateLapTime(
          +minutes,
          +seconds,
          +milliseconds,
          +timerTime[last - 1].minutes,
          +timerTime[last - 1].seconds,
          +timerTime[last - 1].milliseconds
        )
      : `${minutes}:${seconds}:${milliseconds}`;
  let lapsList = document.getElementById("lapsList");
  lapsList.textContent +=
    "Lap " +
    (timerTime.length + 1) +
    " - " +
    lapTime +
    " | " +
    minutes +
    ":" +
    seconds +
    ":" +
    milliseconds +
    "\r\n";
  timerTime.push({ minutes, seconds, milliseconds });
}

export { timer };
