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
    localTime: [h, m, s],
  };
  return time;
};

let enableClock = () => {
  if (clockId) {
    clearInterval(clockId);
    document.getElementById("clock").remove();
  }
  let clock = document.createElement("div");
  clock.id = "clock";
  document.getElementById("watch").append(clock);
  let [h, m, s] = getTime().localTime;
  clock.textContent = h + " : " + m + " : " + s;
  clockId = setInterval(() => {
    let [h, m, s] = getTime().localTime;
    clock.textContent = h + " : " + m + " : " + s;
  }, 1000);
};

let disableClock = () => {
  clearInterval(clockId);
  document.getElementById("clock").remove();
};

export { getTime, enableClock, disableClock };
