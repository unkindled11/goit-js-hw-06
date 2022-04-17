// Task-06

const input = document.getElementById("validation-input")

input.onblur = function () {  
console.log(input.value.length)
}

input.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    if (input.value.length >= input.getAttribute('data-length')) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else { 
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}


