import { clock } from "./clock.js";
import { alarm } from "./alarm.js";
import { countdown } from "./countdown.js";
import { timer } from "./timer.js";

let intervalId;

const showDevice = (device) => {
  device();
  intervalId = setInterval(device, 1000);
};

showDevice(clock);

let clockButton = document.getElementById("clockButton");
let alarmButton = document.getElementById("alarmButton");
let timerButton = document.getElementById("timerButton");
let countdownButton = document.getElementById("countdownButton");

const clearWatch = () => {
  clearInterval(intervalId);
  clearInterval(intervalId);
  clearInterval(intervalId);
  clearInterval(intervalId);
};

clockButton.addEventListener("click", clearWatch);
alarmButton.addEventListener("click", clearWatch);
timerButton.addEventListener("click", clearWatch);
countdownButton.addEventListener("click", clearWatch);

clockButton.addEventListener("click", () => showDevice(clock));
alarmButton.addEventListener("click", () => showDevice(alarm));
timerButton.addEventListener("click", () => showDevice(timer));
countdownButton.addEventListener("click", () => showDevice(countdown));
