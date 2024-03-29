import { instruments } from "../backend";
import { createMarkup } from "./CreateMarkup";
import { buttonRemoveFavorite } from "../onClickFavorite";
import { buttonRemoveBasket } from "../onClickBasket";




const list = document.querySelector('.js-list');


const input = document.querySelector('.js-input');
input.addEventListener('blur', ()=> input.value = "");


function onSearch (evt) {
  
  
  const searchName = evt.target.value.toLowerCase();

  const searchedList = instruments.filter(item => item.name.toLowerCase().includes(searchName));

  
createMarkup(searchedList, list);
  buttonRemoveFavorite();
  buttonRemoveBasket()
 
};

export { onSearch };