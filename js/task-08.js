const form = document.querySelector('.login-form')

form.addEventListener('submit',formSubmit)

function formSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;

    const password = formElements.password.value;

    const dataToConsole = {
        email,
        password
        
   }

    if (email === "" || password ==="") {
        return alert("Будь ласка, заповни усi поля :--)")
    }
    
    console.log(dataToConsole);
    event.currentTarget.reset();
}

