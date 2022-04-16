const decrement = document.querySelector('button[data-action=decrement]')

const increment = document.querySelector('button[data-action=increment]')

let counterValue = 0;

increment.addEventListener("click",() => {
    counterValue += 1;
    document.getElementById('value').innerHTML=counterValue
})

decrement.addEventListener("click",() => {
    counterValue -= 1;
    document.getElementById('value').innerHTML=counterValue
})


