
const getId = (id) => document.getElementById(id);
const button = getId('button');
const color = getId('color');
const container = getId('container');


const clickHandler = () => {

  let hex = Math.floor(Math.random()*10000000).toString(16).padStart(6,0);
  let hexColor = '#' + hex;

  container.style.background = hexColor;
  color.innerText = hex;
  color.style.color = hexColor;

}

button.addEventListener('click', clickHandler);



