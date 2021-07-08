import { enableClock } from "./utils.js";
import { state, screen } from "./main.js";

let id;

function showClock() {
  if (id) {
    clearInterval(id);
    if (state.currentScreen == screen.CLOCK) {
      hideClock();
    }
  }
  document.getElementById("watch").textContent = "";
  let clock = document.createElement("div");
  clock.id = "clock";
  document.getElementById("watch").append(clock);
  clock.textContent =
    state.currentTime.h +
    " : " +
    state.currentTime.m +
    " : " +
    state.currentTime.s;
  state.currentScreen = screen.CLOCK;
  id = setInterval(() => {
    let h = state.currentTime.h;
    let m = state.currentTime.m;
    let s = state.currentTime.s;
    clock.textContent = h + " : " + m + " : " + s;
  }, 1000);
}

function hideClock() {
  clearInterval(id);
  document.getElementById("clock").remove();
}

function clock() {
  enableClock();
  showClock();
}

export { clock };
