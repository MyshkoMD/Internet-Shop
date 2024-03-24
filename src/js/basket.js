import { common } from "./common";
import { createMarkup } from "./helpers/CreateMarkup";
import { buttonRemove } from "./helpers/toggleButtons";

const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];



createMarkup(basket, list);
buttonRemove(favorite, basket, list);