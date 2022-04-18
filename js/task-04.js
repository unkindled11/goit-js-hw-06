const decrement = document.querySelector('button[data-action=decrement]');
    
const increment = document.querySelector('button[data-action=increment]');

const value = document.getElementById('value');

let counterValue = 0;

increment.addEventListener("click",() => {
    counterValue += 1;
    value.innerHTML=counterValue
})

decrement.addEventListener("click",() => {
    counterValue -= 1;
    value.innerHTML=counterValue
})
