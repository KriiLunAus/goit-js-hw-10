import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delayForm = document.querySelector(".form");


delayForm.addEventListener("submit", makePromise)

function makePromise ( event ) {
    event.preventDefault();
    const form = event.target;
    const delay = form.elements.delay.value;
    const state = form.elements.state.value;

    form.reset();

    return new Promise(() => {
        setTimeout(() => {
             if (state === `fulfilled`) {
                 iziToast.success({
                     message: `Fulfilled promise in ${delay}ms`,
                     position: "topRight"
                 }) 
             } else {
                 iziToast.error({
                     message: `Rejected promise in ${delay}ms`,
                     position: "topRight"
                 })
        }
        }, delay)
       
    })

    
}