import { instruments } from "../backend";
import { common } from "../common";
import { createMarkup } from "./CreateMarkup";
import { buttonRemoveFavorite } from "../onClickFavorite";
import { buttonRemoveBasket } from "../onClickBasket";




const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];





function onSearch (evt) {
  
  
  const searchName = evt.target.value.toLowerCase();
  console.dir(searchName);
  const searchedList = instruments.filter(item => item.name.toLowerCase().includes(searchName));

  
createMarkup(searchedList, list);
  buttonRemoveFavorite();
  buttonRemoveBasket()

};

export { onSearch };