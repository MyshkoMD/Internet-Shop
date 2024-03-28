import { common } from "./common";
import { createMarkup } from "./helpers/CreateMarkup";
import { buttonRemove } from "./helpers/buttonRemove";
import { onClickButton } from "./helpers/onClickButtom";
import { modalWindow } from "./helpers/modal";
import { findProduct } from "./helpers/findProduct";
import { onSearch } from "./helpers/onSearch";




const list = document.querySelector('.js-list');
const search = document.querySelector(".js-input");
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];



createMarkup(favorite, list);
buttonRemove(favorite, basket, list);



list.addEventListener("click", onClick);
search.addEventListener('input', _.debounce(onSearch, 500));



function onClick(evt) {

    evt.preventDefault();


    if (evt.target.classList.contains("js-info")) {
   
    const product = findProduct(evt.target);

        modalWindow(product);
    };


     if (evt.target.classList.contains("js-basket")||evt.target.classList.contains("js-RemoveFromBasket")) {
         onClickButton(evt, favorite, basket);
       
    }
    // return // написати поведінку видалення із сторінки при натисканні кнопки ремувфромбаскет
    if (evt.target.classList.contains("js-RemoveFromFavorite")) {
        onClickButton(evt, favorite, basket);
        createMarkup(favorite, list);
        buttonRemove(favorite, basket, list);
        
        
    }
    
};


