

import { instruments } from "./backend.js";
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { common } from './common.js';
import { buttonRemove } from './helpers/buttonRemove.js';
import { createMarkup } from "./helpers/CreateMarkup.js";
import { onClickButton } from "./helpers/onClickButtom.js";
import { findProduct } from "./helpers/findProduct.js";
import { modalWindow } from "./helpers/modal.js";




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

    modalWindow(product)
  }
  onClickButton(evt,favoriteArr,basketArr);
};



