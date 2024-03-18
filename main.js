function displayTime() {
  const date = new Date();
  const [hh, mm, ss] = [date.getHours(), date.getMinutes(), date.getSeconds()];

  const rotate = (unit, value) => unit * value;

  const updateClock = (element, rotation, value) => {
    element.style.transform = `rotate(${rotation}deg)`;
    element.querySelectorAll(".clock_number").forEach((clockNumber) => {
      clockNumber.innerHTML = value;
      clockNumber.style.transform = `rotate(${-rotation}deg)`;
    });
  };

  updateClock(document.getElementById("hourLine"), rotate(30, hh) + mm / 2, hh);
  updateClock(document.getElementById("minuteLine"), rotate(6, mm), mm);
  updateClock(document.getElementById("secondLine"), rotate(6, ss), ss);
}

setInterval(displayTime, 1000);
