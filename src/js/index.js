

import { instruments } from "./backend.js";
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { common } from './common.js';
import { buttonRemove } from './helpers/toggleButtons.js';
import { createMarkup } from "./helpers/CreateMarkup.js";
import { onClickButton } from "./helpers/onClickButtom.js";
import { findProduct } from "./helpers/findProduct.js";




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
  onClickButton(evt,favoriteArr,basketArr);
};



