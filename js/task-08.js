const form = document.querySelector('.login-form')

form.addEventListener('submit',formSubmit)

function formSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        console.log('formSubmit -->', name, value);
    })

    if (formElements.email.value === "" || formElements.password.value==="") {
        return alert("Будь ласка, заповни усi поля :--)")
    }

}

