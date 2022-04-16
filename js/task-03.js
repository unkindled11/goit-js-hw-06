const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Task-03

const list = document.querySelector('.gallery');


const urls = images.flatMap((element) => element.url);

const alts = images.flatMap((element) => element.alt);


const markup = urls.map((element) => `<li ><img width=250 height = 150 src = ${element}></li>`).join("");

  
list.insertAdjacentHTML("beforeend", markup);


list.style.backgroundColor = "teal"
list.style.padding = "20px 20px"
list.style.display = "flex"
list.style.justifyContent = "space-evenly"
list.style.listStyle="none"


