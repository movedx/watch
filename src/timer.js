import { state, screen } from "./main.js";

function timer() {
  showTimer();
}

function showTimer() {
  document.getElementById("watch").textContent = "";
  let date = new Date();
  let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  document.getElementById("watch").textContent = "timer";
  state.currentScreen = screen.TIMER;
}

export { timer };
