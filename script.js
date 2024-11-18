const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "31 July 2025";

function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const totalseconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const minutes = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = colorTime(seconds);

}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function colorTime(time) {
  return time < 10
    ? ((secondsEl.style.color = "red"), `0${time}`)
    : ((secondsEl.style.color = "white"), time);
}

countdown();

setInterval(countdown, 1000);
