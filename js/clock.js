const clock = document.getElementById("js-clock");
const clockText = document.getElementById("clock");

function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  clockText.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  } `;
}

function init() {
  getClock();
  setInterval(getClock, 1000);
}
init();
