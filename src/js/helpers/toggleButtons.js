const list = document.querySelector(".js-list");

function buttonRemove(favorite, basket, list) {
  
  favorite.forEach(({ id }) => {
        //  item.querySelector('.js-RemoveFromFavorite').setAttribute('hidden', true);
        //  item.querySelector('.js-favorite').removeAttribute('hidden');

     const item = list.querySelector(`[data-id="${id}"]`);
    
     if (!item) {
        return
     };
    item.querySelector('.js-favorite').setAttribute('hidden', true);
    item.querySelector('.js-RemoveFromFavorite').removeAttribute('hidden');
    
   });
  
  
  
  
  
  
    basket.forEach(({ id }) => {
    const item = list.querySelector(`[data-id="${id}"]`);
      if (!item) {
    return
  }
    item.querySelector('.js-basket').setAttribute('hidden', true);
    item.querySelector('.js-RemoveFromBasket').removeAttribute('hidden');
    
  });

};


export { buttonRemove };