import { state, screen } from "./main.js";

function countdown() {
  showCountdown();
}

function showCountdown() {
  document.getElementById("watch").textContent = "";
  let date = new Date();
  let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  document.getElementById("watch").textContent = "countdown";
  state.currentScreen = screen.COUNTDOWN;
}

export { countdown };
