import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector("button");
const time = document.querySelector(".value");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


let userDate;
let timeInMs;
let zero;

flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: dateSelection,
})


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function dateSelection(selectedDates) {
    if (selectedDates[0] <= new Date()) {
            startBtn.disabled = true;
            return window.alert("Please choose a date in the future");
        } else {
            startBtn.disabled = false;
            userDate = selectedDates[0];
    }
    
    timeInMs = userDate - Date.now();  
    
    zero = convertMs(timeInMs);
    
    
    
   
    console.log(userDate)
    
  }

startBtn.addEventListener("click", () => {
   days.textContent = zero.days;
   hours.textContent = zero.hours;
   minutes.textContent = zero.minutes;
   seconds.textContent = zero.seconds;  
} )






