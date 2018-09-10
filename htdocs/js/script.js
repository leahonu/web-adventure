const clock = document.querySelector('.clock');

function getTime() {
  clock.textContent = '00:00:00';
  setInterval(() => {
    const now = new Date();
    const seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : `${now.getSeconds()}`;
    const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`;
    const hours = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;
    const timeNow = `${hours}:${minutes}:${seconds}`;
    clock.textContent = timeNow;
  }, 1000);
}
getTime();


function getCalender(){
  const now = new Date();
  const day = now.getDay();
  const month = now.getMonth();
  console.log(day);
  console.log(month);
}

clock.addEventListener('click', getCalender);