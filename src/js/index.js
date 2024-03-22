

import { instruments } from "./backend.js";
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';


console.dir("aefaefafe");


const list = document.querySelector(".list");
const input = document.querySelector(".js-input");


function createMarkup(arr) {
    const markup = arr.map(({ id, img, name }) => ` <li class="js-card" data-id="${id}">
        <img src="${img}" alt="${name}">
        <a href="#">
          <p>${name}</p>
        </a>
        <p>
        <a href="#" class="js-info" >
           More info...
        </a>
        </p>
        <div>
        <button class = "js-favorite">Add to Favorite</button> 
        <button class = "js-baslet">Add to Basket</button>
        </div>
      </li>`).join('');
   
list.innerHTML = markup;

}

createMarkup(instruments);



list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  
  if (evt.target.classList.contains("js-info")) {
   
    const product = findProduct(evt.target);
    console.log(product);
    const instance = basicLightbox.create(`
 <div class="card">
 <img src="${product.img}" alt="${product.name} " width ="300">
        <h2>${product.price} грн</h2>
        <a href="#">
          <p>${product.name}</p>
        </a>
        <p>${product.description}</p>
        <div>
        <button class = "js-favorite">Add to Favorite</button> 
        <button class = "js-baslet">Add to Basket</button>
        </div></div>
`);
    instance.show();
  }
  if (evt.target.classList.contains("js-favorite")) {
    
    const product = findProduct(evt.target);
    
  };
  if (evt.target.classList.contains("js-basket")) {
    
    const product = findProduct(evt.target);
    
  }
};


function findProduct(elem) {
  const { id: productId } = elem.closest('.js-card').dataset;
  return instruments.find(({ id }) => id === productId);
  
}

