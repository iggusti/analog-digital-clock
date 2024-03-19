function displayTime() {
  const date = new Date();
  const [hh, mm, ss] = [date.getHours(), date.getMinutes(), date.getSeconds()];

  const rotate = (unit, value) => unit * value;

  const updateClock = (element, rotation, value) => {
    element.style.transform = `rotate(${rotation}deg)`;
    element.querySelectorAll(".clock-number").forEach((clockNumber) => {
      clockNumber.innerHTML = value;
      clockNumber.style.transform = `rotate(${-rotation}deg)`;
    });
  };

  const updateDigitalClock = (id, value) => {
    document.getElementById(id).innerHTML = value.toString().padStart(2, "0");
  };

  updateDigitalClock("digiHour", hh);
  updateDigitalClock("digiMin", mm);
  updateDigitalClock("digiSec", ss);

  updateClock(document.getElementById("anaHour"), rotate(30, hh) + mm / 2, hh);
  updateClock(document.getElementById("anaMin"), rotate(6, mm), mm);
  updateClock(document.getElementById("anaSec"), rotate(6, ss), ss);
}

setInterval(displayTime, 1000);
