import { common } from "./common";
import { createMarkup } from "./helpers/CreateMarkup";
import { buttonRemove } from "./helpers/buttonRemove";
import { onClickButton } from "./helpers/onClickButtom";





const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];



createMarkup(basket, list);
buttonRemove(favorite, basket, list);



list.addEventListener("click", onClick);



function onClick(evt) {
    
    if (evt.target.classList.contains("js-favorite")||evt.target.classList.contains("js-RemoveFromFavorite")) {
        onClickButton(evt, favorite, basket);
    }
    // return // написати поведінку видалення із сторінки при натисканні кнопки ремувфромбаскет
    if (evt.target.classList.contains("js-RemoveFromBasket")) {
        onClickButton(evt, favorite, basket);
        createMarkup(basket, list);
        buttonRemove(favorite, basket, list);
    }
    
};
