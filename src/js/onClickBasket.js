
import { common } from "./common";
import { findProduct } from "./helpers/findProduct";

const list = document.querySelector(".js-list");

const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ??[];



function buttonRemoveBasketModal(basketArr, modalCard) {
    basketArr.find(item => {
      const basketItem = item.id === Number(modalCard.dataset.id);
      if (!basketItem) {
      return
      }
      modalCard.querySelector('.js-basket').setAttribute('hidden', true);
      modalCard.querySelector('.js-RemoveFromBasket').removeAttribute('hidden');
    });
}




function buttonRemoveBasket() {

    basketArr.forEach(({ id }) => {
      const item = list.querySelector(`[data-id="${id}"]`);
      
      if (!item) {
    return
  }
    item.querySelector('.js-basket').setAttribute('hidden', true);
    item.querySelector('.js-RemoveFromBasket').removeAttribute('hidden');
    
  });

};



function onClickButtonBasket(evt) {


  if (evt.target.classList.contains("js-basket")) {
    
    const product = findProduct(evt.target);
    const isProductExist = basketArr.some(({ id }) => id === product.id);

    if (isProductExist) {
      return
    }
  
    basketArr.push(product);

    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
   
        // buttonRemoveFavotite(favoriteArr);
        buttonRemoveBasket(basketArr);
    
  };




  if (evt.target.classList.contains("js-RemoveFromBasket")) {
    const product = findProduct(evt.target)



     const cardIdx = basketArr.findIndex(item => item.id === product.id);
   
    const removeAttribute = list.querySelector(`[data-id="${product.id}"]`);
   
    basketArr.splice(cardIdx, 1);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));

    
    removeAttribute.querySelector('.js-RemoveFromBasket').setAttribute('hidden', true);
    removeAttribute.querySelector('.js-basket').removeAttribute('hidden')

  
  
  };
};

export { buttonRemoveBasket };
export { onClickButtonBasket };
export { buttonRemoveBasketModal };
