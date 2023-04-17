'use strict'

const images = document.querySelectorAll('.item');

images.forEach(element => {
  element.addEventListener('mouseover', () => {
    removeFocus()
    element.classList.add('expansion');
  })
})

const removeFocus = () => {
  images.forEach(element => {
    element.classList.remove('expansion');
  })
}

function countDownEvent() {
  const openingDate = new Date('May, 2023 00:00');
  const now = new Date();
  const difference = openingDate - now;
  

  const msInSecond = 1000;
  const msInMinute = 60 * 1000;
  const msInHour = 60 * 60 * 1000;
  const msInDay = 24 * 60 * 60 * 1000;

const dDays = Math.floor(difference / msInDay);
document.querySelector('.days').textContent = dDays;

const dHours = Math.floor((difference % msInDay) / msInHour);
document.querySelector('.hours').textContent = dHours;

const dMinutes = Math.floor((difference % msInHour) / msInMinute);
document.querySelector('.minutes').textContent = dMinutes;

const dSeconds = Math.floor((difference % msInMinute) / msInSecond);
document.querySelector('.seconds').textContent = dSeconds;

if (difference <= 0) {
  document.querySelector('.days').textContent = 0;
  document.querySelector('.hours').textContent = 0;
  document.querySelector('.minutes').textContent = 0;
  document.querySelector('.seconds').textContent = 0;
  clearInterval(intervalId);
  newDestination()
}

}

let intervalId = setInterval(countDownEvent, 1000);

function newDestination() {
  const heading = document.querySelector('#heading-change');
  heading.textContent = '🎉🎉🎉New destination is here 🎉🎉🎉';
  heading.classList.add('new-heading');

}
