

import { instruments } from "./backend.js";
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { common } from './common.js';
import { buttonRemove } from './helpers/toggleButtons.js';
import { createMarkup } from "./helpers/CreateMarkup.js";



const list = document.querySelector(".js-list");

const search = document.querySelector(".js-input");
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ??[];






createMarkup(instruments, list);

buttonRemove(favoriteArr, basketArr, list);







list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  
  if (evt.target.classList.contains("js-info")) {
   
    const product = findProduct(evt.target);

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
        <button class = "js-RemoveFromFavorite" hidden>Remove from Favorite</button> 
        <button class = "js-basket">Add to Basket</button>
        <button class = "js-RemoveFromBasket" hidden>Remove from Basket</button>
        </div></div>
`);
    instance.show();
  }
  if (evt.target.classList.contains("js-favorite")) {
    
    const product = findProduct(evt.target);
    const isProductExist = favoriteArr.some(({ id }) => id === product.id);
    if (isProductExist) {
      return
    }

    favoriteArr.push(product);

  
    // evt.target.nextElementSibling.removeAttribute('hidden');
    // evt.target.setAttribute('hidden', 'true');
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
    buttonRemove(favoriteArr, basketArr, list);


    
  };
  if (evt.target.classList.contains("js-basket")) {
    
    const product = findProduct(evt.target);
      
  
    basketArr.push(product);

    // evt.target.nextElementSibling.removeAttribute('hidden');
    // evt.target.setAttribute('hidden', 'true');
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
    buttonRemove(favoriteArr, basketArr, list);
    
  }
};


function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return instruments.find(({ id }) => id === productId);
  
}

