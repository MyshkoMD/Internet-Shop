import { findProduct } from "./findProduct";
import { common } from "../common";
import { buttonRemove } from "./toggleButtons";


const list = document.querySelector(".js-list");


function onClickButton(evt, favoriteArr, basketArr) {

  
  // const favorite = list.querySelector('.js-favorite');
  // const basket = list.querySelector('.js-basket');


  if (evt.target.classList.contains("js-favorite")) {
    
    const product = findProduct(evt.target);
    const isProductExist = favoriteArr.some(({ id }) => id === product.id);

    if (isProductExist) {
      return
    }

    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
    buttonRemove(favoriteArr, basketArr, list);
  };




  if (evt.target.classList.contains("js-RemoveFromFavorite")) {

    const product = findProduct(evt.target)
    favoriteArr.find((item, idx) => {

      
      if (item.id === product.id) {
        console.dir(item.id === product.id);
        
     
        const removeAttribute = list.querySelector(`[data-id="${item.id}"]`);
        console.dir(removeAttribute);
        favoriteArr.splice(idx, 1)
        
        localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));



      removeAttribute.querySelector('.js-RemoveFromFavorite').setAttribute('hidden', true);
      removeAttribute.querySelector('.js-favorite').removeAttribute('hidden')
        
      }
    })
       

    
  }




  if (evt.target.classList.contains("js-basket")) {
    
    const product = findProduct(evt.target);
    const isProductExist = basketArr.some(({ id }) => id === product.id);

    if (isProductExist) {
      return
    }
  
    basketArr.push(product);

    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
   
    buttonRemove(favoriteArr, basketArr, list);
    
  };




  if (evt.target.classList.contains("js-RemoveFromBasket")) {
    const product = findProduct(evt.target)
    basketArr.find((item, idx) => {
      
      if (item.id === product.id) {
        const removeAttribute = list.querySelector(`[data-id="${item.id}"]`);
        basketArr.splice(idx, 1)
        
        localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));


      removeAttribute.querySelector('.js-RemoveFromBasket').setAttribute('hidden', true);
      removeAttribute.querySelector('.js-basket').removeAttribute('hidden')
        
      }
    })
  
  };
}
  
export { onClickButton };