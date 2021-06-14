import { enableClock } from "./utils.js";

function clock() {
  document.getElementById("watch").textContent = "clock";
  enableClock();
}

export { clock };
