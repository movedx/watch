function alarm() {
  let date = new Date();
  let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  document.getElementById("watch").textContent = "alarm";
}

export { alarm };
