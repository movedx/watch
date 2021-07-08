import { state, screen } from "./main.js";

function alarm() {
  showAlarm();
}

function showAlarm() {
  document.getElementById("watch").textContent = "";
  let setAlarmButton = document.createElement("button");
  setAlarmButton.className += " button";
  setAlarmButton.textContent = "Set Alarm";
  let controls = document.createElement("div");
  let watchContainer = document.getElementById("watch");
  watchContainer.append(controls);
  controls.append(setAlarmButton);

  let setAlarm = () => {
    setAlarmButton.remove();
  };

  setAlarmButton.addEventListener("click", setAlarm);
  state.currentScreen = screen.ALARM;
}

export { alarm };
