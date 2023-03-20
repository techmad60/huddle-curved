const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const invalidEmailError = document.getElementById('invalid-email-error');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const emailRegex = /\S+@\S+\.\S+/;

    if(!emailRegex.test(email)) {
        invalidEmailError.style.display = 'block';
        emailError.style.display = 'none';
    }

    else {
        emailError.style.display = 'block';
        invalidEmailError.style.display = 'none';
    }
});