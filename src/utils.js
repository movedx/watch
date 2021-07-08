import { state, screen } from "./main.js";

let clockId;

let getTime = () => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  let time = {
    localTime: { h, m, s },
  };
  return time;
};

let enableClock = () => {
  if (clockId) {
    clearInterval(clockId);
  }
  let { h, m, s } = getTime().localTime;
  state.currentTime.h = h;
  state.currentTime.m = m;
  state.currentTime.s = s;
  clockId = setInterval(() => {
    let { h, m, s } = getTime().localTime;
    state.currentTime.h = h;
    state.currentTime.m = m;
    state.currentTime.s = s;
  }, 1000);
};

let disableClock = () => {
  clearInterval(clockId);
};

export { getTime, enableClock, disableClock };
