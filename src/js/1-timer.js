import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector("button");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


let userDate;
let timeInMs;
let zero;
let timerReload;

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

      iziToast.warning({
        message: 'Please choose a date in the future',
        theme: 'dark',
        position: 'topRight',
        backgroundColor: 'red'
      })
            return 
        } else {
            startBtn.disabled = false;
            userDate = selectedDates[0];
    }
    
    
    
    
  }

function addLeadingZero(value) {
  
    return value.toString().padStart(2, '0');
    
  }


startBtn.addEventListener("click", () => {
  timerReload = setInterval(() => {
    timeInMs = userDate - Date.now();  

    if (timeInMs < 0) {
      clearInterval(timerReload)
      return
    }

    zero = convertMs(timeInMs);
    

    console.log(timeInMs)
    days.textContent = addLeadingZero(zero.days);
    hours.textContent = addLeadingZero(zero.hours);
    minutes.textContent = addLeadingZero(zero.minutes);
    seconds.textContent = addLeadingZero(zero.seconds);


  }, 1000);

  const input = document.getElementById('datetime-picker');
  input.disabled = true;
  startBtn.disabled = true;

} )






