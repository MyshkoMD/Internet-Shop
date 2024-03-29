import { common } from "./common";
import { createMarkup } from "./helpers/CreateMarkup";
import { modalWindow } from "./helpers/modal";
import { findProduct } from "./helpers/findProduct";
import { onSearch } from "./helpers/onSearch";
import { buttonRemoveFavorite } from "./onClickFavorite.js";
import { buttonRemoveBasket } from "./onClickBasket.js";
import { onClickButtonFavorite } from "./onClickFavorite.js";
import { onClickButtonBasket } from "./onClickBasket.js";



const list = document.querySelector('.js-list');
const search = document.querySelector(".js-input");
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];




createMarkup(favoriteArr);
buttonRemoveFavorite();
buttonRemoveBasket();



list.addEventListener("click", onClick);
search.addEventListener('input', _.debounce(onSearch, 500));



function onClick(evt) {

    evt.preventDefault();


    if (evt.target.classList.contains("js-info")) {
   
    const product = findProduct(evt.target);

        modalWindow(product);
        
    };


     if (evt.target.classList.contains("js-basket")||evt.target.classList.contains("js-RemoveFromBasket")) {
         onClickButtonBasket(evt);
       
    }
    // return // написати поведінку видалення із сторінки при натисканні кнопки ремувфромбаскет
    if (evt.target.classList.contains("js-RemoveFromFavorite")) {
       
        onClickButtonFavorite(evt);
        const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
       
        createMarkup(favoriteArr);
        buttonRemoveFavorite();
    
    }
    
};


