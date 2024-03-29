import { common } from "./common";
import { createMarkup } from "./helpers/CreateMarkup";
import { findProduct } from "./helpers/findProduct";
import { modalWindow } from "./helpers/modal";
import { buttonRemoveFavorite } from "./onClickFavorite.js";
import { buttonRemoveBasket } from "./onClickBasket.js";
import { onClickButtonFavorite } from "./onClickFavorite.js";
import { onClickButtonBasket } from "./onClickBasket.js";

const deleteButton = document.querySelector('.js-delete');
const list = document.querySelector('.js-list');
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];



createMarkup(basketArr);
buttonRemoveFavorite();
buttonRemoveBasket();



list.addEventListener("click", onClick);
deleteButton.addEventListener("click", onClick);


function onClick(evt) {
    evt.preventDefault();

    if (evt.target.classList.contains("js-info")) {
   
    const product = findProduct(evt.target);

    modalWindow(product)
    };
    
    if (evt.target.classList.contains("js-favorite")||evt.target.classList.contains("js-RemoveFromFavorite")) {
        onClickButtonFavorite(evt);
    }
    // return // написати поведінку видалення із сторінки при натисканні кнопки ремувфромбаскет
    if (evt.target.classList.contains("js-RemoveFromBasket")) {
        onClickButtonBasket(evt);
        const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

        createMarkup(basketArr);
        buttonRemoveBasket();
    };

    if (evt.target.classList.contains("js-delete")) {
        
        basket.splice(0, basket.length);
        localStorage.setItem(common.KEY_BASKET, JSON.stringify(basket));

        createMarkup(basket);
    }
    
};
