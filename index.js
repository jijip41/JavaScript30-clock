'use strict'
const secHand = document.querySelector('.sec')
const minHand = document.querySelector('.min')
const hourHand = document.querySelector('.hour')
const hand = document.querySelector('.hand');




function setDate() {
  const newDate = new Date();
  const secs = newDate.getSeconds();
  const mins = newDate.getMinutes();
  const hrs = newDate.getHours();
  
  const secDegrees = ((secs * 360) / 60) + 90;
  const minDegrees = ((mins * 360) / 60) + 90;
  const hourDegrees = ((hrs * 360) / 12) + 90;

  console.log(secDegrees);
  if(secDegrees > 444) {
    hand.style.transitionDuration = '0s';
  }


  secHand.style.transform = `rotate(${secDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}


setInterval(setDate, 1000);