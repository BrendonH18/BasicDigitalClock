function renderTime() {
  const timeNow = new Date();
  const timeHours = timeNow.getHours();
  const timeMinutes = timeNow.getMinutes();
  const timeSeconds = timeNow.getSeconds();
  const isAM = timeHours < 12 || timeHours === 0;
  let amPM = isAM ? " AM" : " PM"; 

  document.getElementById("time").textContent = `${renderLeadingZero(formatHour(timeHours))}:${renderLeadingZero(timeMinutes)}:${renderLeadingZero(timeSeconds)}${amPM}`;
}

function renderLeadingZero (number) {
  return number < 10 ? "0" + number : number
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;
  hour = hour === 0 ? hour + 12 : hour;
  return hour; 
}

function renderDate() {
  const timeNow = new Date();
  const date = document.getElementById("date");
  const dateMonth = months[timeNow.getMonth()];
  const dateDay = days[timeNow.getDay()];
  const dateDate = timeNow.getDate();
  const dateYear = timeNow.getFullYear();
  
  date.textContent = `${dateDay} ${dateMonth} ${dateSuffix(dateDate)}, ${dateYear}`;
  }

function dateSuffix(date) {
  if (date < 10 || date > 20 ) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`; 
    }
  }
  return `${date}th`
}
//#region 
const months = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"];
  
  const days = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"];
//#endregion
renderTime();
renderDate();

setInterval(() => {
  renderDate();
  renderTime();
}, 1000);