function timer() {
  let date = new Date();
  let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  document.getElementById("watch").textContent = "timer";
  setTimeout(watch, 1000);
}

timer();
