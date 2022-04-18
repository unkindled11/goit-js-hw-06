// Task-06

const input = document.getElementById("validation-input")

input.onblur = function () {  
console.log(input.value.length)
}

input.addEventListener('blur', onInputBlur);

function classAction( remove , add) {
    
    input.classList.remove(remove);
    input.classList.add(add);

}

function onInputBlur(event) {

    if (input.value.length >= input.getAttribute('data-length')) {
        classAction("invalid","valid")
    } else { 
       classAction("valid","invalid")
    }
    
}


