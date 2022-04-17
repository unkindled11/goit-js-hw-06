function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyBg = document.querySelector("body");

const button = document.querySelector(".change-color")

const colorNumber = document.querySelector(".color");


button.addEventListener('click', colorToChange)


function colorToChange(event) {
  
  const color = getRandomHexColor();
  
  bodyBg.style.backgroundColor = color;

  colorNumber.textContent = color;

}