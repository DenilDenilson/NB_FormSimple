const textAlert = document.querySelector('#text_alert');
const iconAlert = document.querySelector('#icon_alert');
const submitButton = document.querySelector('#submit_button');
const inputEmail = document.querySelector('#input_email');

submitButton.addEventListener("click", (e) => {
    e.preventDefault;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(inputEmail.value))
    {
        iconAlert.classList.remove('invisible');
        iconAlert.classList.add('visible');
        textAlert.classList.remove('invisible');
        textAlert.classList.add('visible');
        
    }
    if (regexEmail.test(inputEmail.value))
    {
        iconAlert.classList.remove('visible')
        iconAlert.classList.add('invisible');
        textAlert.classList.remove('visible');
        textAlert.classList.add('invisible');
        
    }
});
