import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

const STORAGE_KEY = 'feedback-form-state';
const formData = {};


refs.form.addEventListener('submit', handleFormSubmit);
// refs.email.addEventListener('input', handleEmailInput);
refs.textarea.addEventListener('input', throttle(handleTextareaInput, 500));

refs.form.addEventListener('input', event => {
    // console.log(event.target.name);
    // console.log(event.target.value);

    formData[event.target.name] = event.target.value;
    console.log(formData);
})

populateTextarea();

function handleFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

// function handleEmailInput(event) {
//     const email = event.currentTarget.value;
//     localStorage.setItem(STORAGE_KEY, email);
//     // console.log(message);
// }

function handleTextareaInput(event) {
    const message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message);
    // console.log(message);
}
function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
}
