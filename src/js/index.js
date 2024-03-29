

import { instruments } from "./backend.js";
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { createMarkup } from "./helpers/CreateMarkup.js";
import { findProduct } from "./helpers/findProduct.js";
import { modalWindow } from "./helpers/modal.js";
import { onSearch } from "./helpers/onSearch.js";
import { buttonRemoveFavorite } from "./onClickFavorite.js";
import { buttonRemoveBasket } from "./onClickBasket.js";
import { onClickButtonFavorite } from "./onClickFavorite.js";
import { onClickButtonBasket } from "./onClickBasket.js";





const list = document.querySelector(".js-list");
const search = document.querySelector(".js-input");




createMarkup(instruments, list);
buttonRemoveFavorite();
buttonRemoveBasket();




list.addEventListener('click', onClick);
search.addEventListener('input', _.debounce(onSearch, 500));

function onClick(evt) {
  evt.preventDefault();
  
  if (evt.target.classList.contains("js-info")) {
   
    const product = findProduct(evt.target);

    modalWindow(product)
  };
  onClickButtonFavorite(evt);
  onClickButtonBasket(evt);
  
};








  


