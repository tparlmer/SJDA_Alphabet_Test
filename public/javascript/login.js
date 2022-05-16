function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector('.form-message');

    messageElement.textContent = message;
    messageElement.classList.remove('form-message-success', 'form-message-error');
    messageElement.classList.add(`form-message-${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add('form-input-error');
    inputElement.parentElement.querySelector('.form-input-error-message').textContent = message;
}

setFormMessage(loginForm, 'success', 'You are logged in:)');

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#create-account');

    document.querySelector('#link-create-account').addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.add('form-hidden');
        createAccountForm.classList.remove('form-hidden');
    });

    document.querySelector('#link-login').addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.remove('form-hidden');
        createAccountForm.classList.add('form-hidden');
    });

    loginForm.addEventListener('submit', e => {
        e.preventDefault();

        //perform your login

        setFormMessage(loginForm, 'error', 'invalid username/password');
    });

    document.querySelectorAll('.form-input').forEach(inputElement => {
        inputElement.addEventListener('blur', e => {
            
        })
    })
})