import { getTime } from "./utils.js";

function alarm() {
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
}

export { alarm };
