import { common } from "./common";
import { createMarkup } from "./helpers/CreateMarkup";
import { buttonRemove } from "./helpers/buttonRemove";
import { onClickButton } from "./helpers/onClickButtom";
import { findProduct } from "./helpers/findProduct";
import { modalWindow } from "./helpers/modal";


const deleteButton = document.querySelector('.js-delete');
const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];



createMarkup(basket, list);
buttonRemove(favorite, basket, list);



list.addEventListener("click", onClick);
deleteButton.addEventListener("click", onClick);


function onClick(evt) {
    evt.preventDefault();
console.dir(evt.target);
    if (evt.target.classList.contains("js-info")) {
   
    const product = findProduct(evt.target);

    modalWindow(product)
    };
    
    if (evt.target.classList.contains("js-favorite")||evt.target.classList.contains("js-RemoveFromFavorite")) {
        onClickButton(evt, favorite, basket);
    }
    // return // написати поведінку видалення із сторінки при натисканні кнопки ремувфромбаскет
    if (evt.target.classList.contains("js-RemoveFromBasket")) {
        onClickButton(evt, favorite, basket);
        createMarkup(basket, list);
        buttonRemove(favorite, basket, list);
    };

    if (evt.target.classList.contains("js-delete")) {
        
        basket.splice(0, basket.length);
        localStorage.setItem(common.KEY_BASKET, JSON.stringify(basket));

        createMarkup(basket, list);
    }
    
};
