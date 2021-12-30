const countdownDisplay = document.querySelector(".timer__1")
const countdownDisplayNext = document.querySelector(".timer__2")


const countDown = () => {
  const d = new Date();
  const now = d.getTime();

  const thisDay = d.getDate()
  const thisMonth = d.getMonth() + 1;
  let thisYear;

  if (thisMonth === 12 && thisDay < 25) {
      thisYear = d.getFullYear();
  } else {
      thisYear = d.getFullYear() + 1;
  }

  const xDate = new Date (`December 25, ${thisYear} 00:00:00`).getTime();
  const xDateNext = new Date (`December 25, ${thisYear + 1} 00:00:00`).getTime();

  const dateGap = xDate - now;
  const nextGap = xDateNext - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(dateGap / day);
  const hours = Math.floor((dateGap % day) / hour);
  const minutes = Math.floor((dateGap % hour) / minute);
  const seconds = Math.floor((dateGap % minute) / second);

  const daysNext = Math.floor(nextGap / day);
  const hoursNext = Math.floor((nextGap % day) / hour);
  const minutesNext = Math.floor((nextGap % hour) / minute);
  const secondsNext = Math.floor((nextGap % minute) / second);

  countdownDisplay.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
  countdownDisplayNext.innerHTML = `${daysNext} days ${hoursNext} hours ${minutesNext} minutes ${secondsNext} seconds`
};

const interval = setInterval(() => { countDown() }, 1000)

