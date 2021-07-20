import { state, screen } from "./main.js";
import { clock } from "./clock.js";
import { getTime } from "./utils.js";

function alarm() {
  showAlarm();
}

function showAlarm() {
  document.getElementById("watch").textContent = "";
  clock();
  let setAlarmButton = document.createElement("button");
  setAlarmButton.className += " button";
  setAlarmButton.textContent = "Set Alarm";
  setAlarmButton.id = "setAlarmButton";
  let controls = document.createElement("div");
  controls.id = "alarmControls";

  let inputHours = document.createElement("input");
  inputHours.className += " alarmInput";
  inputHours.id = "alarmInputHours";
  inputHours.type = "number";
  inputHours.placeholder = "h";
  inputHours.min = 0;
  inputHours.max = 23;
  inputHours.step = 1;
  inputHours.onchange = setTwoNumberDecimal;

  let inputMinutes = document.createElement("input");
  inputMinutes.className += " alarmInput";
  inputMinutes.id = "alarmInputMinutes";
  inputMinutes.type = "number";
  inputMinutes.placeholder = "m";
  inputMinutes.min = 0;
  inputMinutes.max = 59;
  inputMinutes.step = 1;
  inputMinutes.onchange = setTwoNumberDecimal;

  let watchContainer = document.getElementById("watch");
  watchContainer.append(controls);

  controls.append(inputHours);
  controls.append(":");
  controls.append(inputMinutes);
  controls.append(setAlarmButton);

  setAlarmButton.addEventListener("click", setAlarm);
  state.currentScreen = screen.ALARM;
}

let setAlarm = () => {
  let setAlarmButton = document.getElementById("setAlarmButton");
  let h = document.getElementById("alarmInputHours").value;
  let m = document.getElementById("alarmInputMinutes").value;
  state.alarmTime.push({ h, m });
  state.alarmActive = true;
  let intervalId = setInterval(() => {
    if (state.alarmActive) {
      let now = getTime().localTime;
      let alarmTime = state.alarmTime[0];
      if (now.h === alarmTime.h && now.m === alarmTime.m) {
        state.alarmActive = false;
        clearInterval(intervalId);
        state.alarmTime.shift();
        alert("Ding Dong!!!");
        setAlarmButton.style.display = "block";
        document.getElementById("alarmInputHours").value = "";
        document.getElementById("alarmInputMinutes").value = "";
      }
    }
  }, 200);
  setAlarmButton.style.display = "none";
};

function setTwoNumberDecimal(event) {
  this.value = this.value < 10 ? "0" + this.value : this.value;
}

export { alarm };
