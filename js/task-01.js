// Task 01-1
const categories = document.querySelector('#categories')

console.log('Number of categories:', categories.children.length);

//Task-01-2
const animals = categories.childNodes[1]
const animalsText = animals.querySelector('h2').textContent
const animalsList = animals.querySelector('ul').children.length 

const products = categories.childNodes[3]
const productsText = products.querySelector('h2').textContent
const productsList = products.querySelector('ul').children.length

const technologies = categories.childNodes[5]
const technologiesText = technologies.querySelector('h2').textContent
const technologiesList = technologies.querySelector('ul').children.length

function input(category, elements) {
    
    console.log(`Category: ${category}`);
    
    console.log(`Elements:${elements}`);
    
}

input(animalsText, animalsList)
input(productsText, productsList)
input(technologiesText,technologiesList)