// Task 01-01

console.log("Number of categories:" + document.querySelector('#categories').children.length);


// Task 01-02

const items = document.querySelectorAll('.item>ul');


items.forEach((item => console.log("Elements:" + item.children.length + " Category:" + item.previousElementSibling.textContent)))


