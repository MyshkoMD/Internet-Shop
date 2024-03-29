import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { common } from '../common';
import { onClickButtonFavorite } from '../onClickFavorite.js';
import { onClickButtonBasket } from '../onClickBasket.js';
import { buttonRemoveFavoriteModal } from '../onClickFavorite.js';
import { buttonRemoveBasketModal } from '../onClickBasket.js';
import { createMarkup } from './CreateMarkup.js';



const list = document.querySelector(".js-remove-from-list");




function modalWindow(product) {
  const instance = basicLightbox.create(`
 <div class="card js-card js-card-modal"  data-id="${product.id}">
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


  const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
  const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];
  const modalCard = document.querySelector(".js-card-modal");
  modalCard.addEventListener('click', onClick);

  
  
  buttonRemoveFavoriteModal(favoriteArr, modalCard);
  buttonRemoveBasketModal(basketArr, modalCard);
  
  function onClick(evt) {
    
   
   if (evt.target.classList.contains("js-favorite")) {
        onClickButtonFavorite(evt);
        const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
        buttonRemoveFavoriteModal(favoriteArr, modalCard);
    };

   if (evt.target.classList.contains("js-RemoveFromFavorite")) {
      onClickButtonFavorite(evt);
       
      modalCard.querySelector('.js-RemoveFromFavorite').setAttribute('hidden', true);
     modalCard.querySelector('.js-favorite').removeAttribute('hidden');
     if (list) {
       const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
       createMarkup(favoriteArr);
       instance.close();
        
     }
    };

    if (evt.target.classList.contains("js-basket")) {
        onClickButtonBasket(evt);
        const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];
        buttonRemoveBasketModal(basketArr, modalCard);
    }
    if (evt.target.classList.contains("js-RemoveFromBasket")) {
      onClickButtonBasket(evt);
        
      modalCard.querySelector('.js-RemoveFromBasket').setAttribute('hidden', true);
      modalCard.querySelector('.js-basket').removeAttribute('hidden');
       if (list) {
       const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];
       createMarkup(basketArr);
       instance.close();
        
     }

    };    
  }



  
};
  

export { modalWindow };