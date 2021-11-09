const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
    }
refs.form.addEventListener('submit', handleFormSubmit);
refs.email.addEventListener('input', handleEmailInput);
refs.textarea.addEventListener('input', handleTextareaInput);

function handleFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function handleEmailInput(event) {
    const email = event.currentTarget.value;
    localStorage.setItem('feedback-form-state', email);
    // console.log(message);
}

function handleTextareaInput(event) {
    const message = event.currentTarget.value;
    localStorage.setItem('feedback-form-state', message);
    // console.log(message);
}
function populateTextarea() {
    const savedMessage = localStorage.getItem('feedback-form-state');
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
}