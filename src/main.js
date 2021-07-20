import { clock } from "./clock.js";
import { alarm } from "./alarm.js";
import { countdown } from "./countdown.js";
import { timer } from "./timer.js";

let screen = {
  CLOCK: "CLOCK",
  ALARM: "ALARM",
  TIMER: "TIMER",
  COUNTDOWN: "COUNTDOWN",
};

let state = {
  currentScreen: screen.CLOCK,
  clockActive: false,
  alarmActive: false,
  timerActive: false,
  countdownActive: false,
  alarmTime: [], // set alarms
  timerTime: [], // laps time
  countdownTimeLeft: 0,
  currentFunction: "clock",
  currentTime: { h: 0, m: 0, s: 0 },
};

clock();

let clockButton = document.getElementById("clockButton");
let alarmButton = document.getElementById("alarmButton");
let timerButton = document.getElementById("timerButton");
let countdownButton = document.getElementById("countdownButton");

clockButton.addEventListener("click", clock);
alarmButton.addEventListener("click", alarm);
timerButton.addEventListener("click", timer);
countdownButton.addEventListener("click", countdown);

export { state, screen };
