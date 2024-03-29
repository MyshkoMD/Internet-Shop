
import { common } from "./common";
import { findProduct } from "./helpers/findProduct";


const list = document.querySelector(".js-list");
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ??[];




function buttonRemoveFavoriteModal(favoriteArr, modalCard) {
    favoriteArr.find(item => {
        const favoriteItem = item.id === Number(modalCard.dataset.id);
        if (!favoriteItem) {
            return
        }
    modalCard.querySelector('.js-favorite').setAttribute('hidden', true);
    modalCard.querySelector('.js-RemoveFromFavorite').removeAttribute('hidden');
    })
}




function buttonRemoveFavorite() {
  
    favoriteArr.forEach(({ id }) => {
    

        const item = list.querySelector(`[data-id="${id}"]`);
 
        if (!item) {
            return
        };
        item.querySelector('.js-favorite').setAttribute('hidden', true);
        item.querySelector('.js-RemoveFromFavorite').removeAttribute('hidden');
    
    })
};




function onClickButtonFavorite(evt) {



    if (evt.target.classList.contains("js-favorite")) {
    
        const product = findProduct(evt.target);
        const isProductExist = favoriteArr.some(({ id }) => id === product.id);

        if (isProductExist) {
            return
        }

        favoriteArr.push(product);
        localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
        buttonRemoveFavorite(favoriteArr);
        // buttonRemoveBasket(basketArr);
    };




    if (evt.target.classList.contains("js-RemoveFromFavorite")) {

        const product = findProduct(evt.target)


        const cardIdx = favoriteArr.findIndex(item => item.id === product.id);
   
        const removeAttribute = list.querySelector(`[data-id="${product.id}"]`);

        removeAttribute.querySelector('.js-RemoveFromFavorite').setAttribute('hidden', true);
        removeAttribute.querySelector('.js-favorite').removeAttribute('hidden')

        favoriteArr.splice(cardIdx, 1);
        localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));

   
       
    
    
    };
};



function onClickButtonFavoriteModal(evt) {
    
    if (evt.target.classList.contains("js-favorite")) {
        onClickButtonFavorite(evt)
        buttonRemoveFavoriteModal()
    }
}



export { buttonRemoveFavorite };
export { onClickButtonFavorite };
export { buttonRemoveFavoriteModal };
export { onClickButtonFavoriteModal };