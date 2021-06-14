import { clock } from "./clock.js";
import { alarm } from "./alarm.js";
import { countdown } from "./countdown.js";
import { timer } from "./timer.js";
import { getTime, enableClock, disableClock } from "./utils.js";

enableClock();

let clockButton = document.getElementById("clockButton");
let alarmButton = document.getElementById("alarmButton");
let timerButton = document.getElementById("timerButton");
let countdownButton = document.getElementById("countdownButton");

clockButton.addEventListener("click", clock);
alarmButton.addEventListener("click", alarm);
timerButton.addEventListener("click", timer);
countdownButton.addEventListener("click", countdown);
