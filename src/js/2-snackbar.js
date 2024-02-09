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

    const snackbarPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
             if (state === `fulfilled`) {
               resolve("message")
             } else {
                 reject("error")
        }
        }, delay)
       
    })

    snackbarPromise
    .then(() => {
        iziToast.success({
            message: `Fulfilled promise in ${delay}ms`,
            position: "topRight"
        });
})
        .catch(() => {
        iziToast.error({
            message: `Rejected promise in ${delay}ms`,
            position: "topRight"
        })
    })

    return 
    }
