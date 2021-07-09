import { state, screen } from "./main.js";
import { clock } from "./clock.js";

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
  inputHours.type = "number";
  inputHours.placeholder = "h";
  inputHours.min = 0;
  inputHours.max = 23;
  inputHours.step = 1;
  inputHours.onchange = setTwoNumberDecimal;

  let inputMinutes = document.createElement("input");
  inputMinutes.className += " alarmInput";
  inputMinutes.type = "number";
  inputMinutes.placeholder = "m";
  inputMinutes.min = 0;
  inputMinutes.max = 59;
  inputMinutes.step = 1;
  inputMinutes.onchange = setTwoNumberDecimal;

  let inputSeconds = document.createElement("input");
  inputSeconds.className += " alarmInput";
  inputSeconds.type = "number";
  inputSeconds.placeholder = "s";
  inputSeconds.min = 0;
  inputSeconds.max = 59;
  inputSeconds.step = 1;
  inputSeconds.onchange = setTwoNumberDecimal;

  let watchContainer = document.getElementById("watch");
  watchContainer.append(controls);

  controls.append(inputHours);
  controls.append(":");
  controls.append(inputMinutes);
  controls.append(":");
  controls.append(inputSeconds);
  controls.append(setAlarmButton);

  setAlarmButton.addEventListener("click", setAlarm);
  state.currentScreen = screen.ALARM;
}

let setAlarm = () => {
  let setAlarmButton = document.getElementById("setAlarmButton");
  state.alarmActive = true;
  setAlarmButton.remove();
};

function setTwoNumberDecimal(event) {
  this.value = this.value < 10 ? "0" + this.value : this.value;
  console.log(event);
}

export { alarm };
