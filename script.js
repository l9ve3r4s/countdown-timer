const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "19 August 2025";

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

function colorTime(time) {
  if (time < 10 )
  {
    switch(time)
    {
      case 10 :
        return ((secondsEl.style.color = "red"), `0${time}`);
        break;

      case 9 :
        return ((secondsEl.style.color = "orange"), `0${time}`);
        break;

      case 8 :
        return ((secondsEl.style.color = "yellow"), `0${time}`);
        break;

      case 7 :
          return ((secondsEl.style.color = "green"), `0${time}`);
          break;
          
      case 6 :
        return ((secondsEl.style.color = "blue"), `0${time}`);
        break;

      case 5 :
        return ((secondsEl.style.color = "violet"), `0${time}`);
        break;

      case 4 :
        return ((secondsEl.style.color = "violet"), `0${time}`);
        break;

      case 3 :
        return ((secondsEl.style.color = "black"), `0${time}`);
        break;
      
      case 2 :
        return ((secondsEl.style.color = "black"), `0${time}`);
        break;
      
      case 1 :
        return ((secondsEl.style.color = "gray"), `0${time}`);
        break;
        
    }

  }
  else
  {
    return ((secondsEl.style.color = "white"), time);
  }
}

countdown();

setInterval(countdown, 1000);
