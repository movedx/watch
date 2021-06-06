function countdown() {
  let date = new Date();
  let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  document.getElementById("watch").textContent = "countdown";
  setTimeout(watch, 1000);
}

countdown();
