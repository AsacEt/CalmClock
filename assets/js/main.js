const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const dayOfTheWeek = document.getElementById('dayOfTheWeek');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const clock = setInterval(function time() {
    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    let getDayOfTheWeek = dateToday.getDay();
    let weekList = new Array(6);
        weekList[0]='Dom';
        weekList[1]='Seg';
        weekList[2]='Ter';
        weekList[3]='Qua';
        weekList[4]='Qui';
        weekList[5]='Sex';
        weekList[6]='Sab';

    let dayToday = dateToday.getDate();
    let getActualMonth = dateToday.getMonth();
    let monthList = new Array(2);
        monthList[0] = 'Janeiro';
        monthList[1] = 'Fevereiro';
    
    let actualYear = dateToday.getFullYear();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
    dayOfTheWeek.textContent = weekList[getDayOfTheWeek] + ",";
    day.textContent = dayToday;
    month.textContent = monthList[getActualMonth];
    year.textContent = actualYear;
})
