import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

const STORAGE_KEY = 'feedback-form-state';
let formData = {};


refs.form.addEventListener('submit', handleFormSubmit);
refs.form.addEventListener('input', throttle(handleSaveTextInput, 500));

populateTextarea();

function handleFormSubmit(event) {
    event.preventDefault();
    formData[event.target.name] = event.target.value;
    handleDelText();
}
function handleDelText() {
    refs.form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
    // console.log(formData);
}



function handleSaveTextInput(event) {
    formData[event.target.name]  = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    // console.log(message);
}
function populateTextarea() {
    let savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        savedMessage = JSON.parse(savedMessage);
        console.log(savedMessage);
        Object.entries(savedMessage).forEach(([key, value]) => {
        formData[key] = value
        refs.form.elements[key].value = value;
         })
    } 
} 
