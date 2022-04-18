const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Task 02

const list = document.querySelector('ul');


const itemToAdd = ingredients.map(element => {

  const item = document.createElement('li');
  
  item.textContent = element;

  item.className="item"
  
  return item 
})

list.append(...itemToAdd)







// // ---Potatoes---
// const potatoes = document.createElement('li')
// potatoes.textContent = "Potatoes"
// potatoes.className="item"


// // ---Mushrooms---
// const  mushrooms = document.createElement('li')
// mushrooms.innerHTML = '<li class = "item">Mushrooms</li>';
// mushrooms.className="item"

// //  ---Garlic---
// const garlic = document.createElement('li')
// garlic.innerHTML = '<li class = "item">Garlic</li>';
// garlic.className="item"

// // ---Tomatos---
// const tomatos = document.createElement('li')
// tomatos.innerHTML = '<li class = "item">Tomatos</li>';
// tomatos.className="item"

// // ---Herbs---
// const herbs = document.createElement('li')
// herbs.innerHTML = '<li class = "item">Herbs</li>';
// herbs.className="item"

// // ---Condiments---
// const condiments = document.createElement('li')
// condiments.innerHTML = '<li class = "item">Condiments</li>';
// condiments.className="item"


// list.append(potatoes, mushrooms, garlic, tomatos, herbs, condiments);





