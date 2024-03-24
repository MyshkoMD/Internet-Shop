const list = document.querySelector(".js-list");

function buttonRemove(arr1, arr2, list) {
  
   arr1.forEach(({ id }) => {
    const item = list.querySelector(`[data-id="${id}"]`);
  if (!item) {
    return
  }
    item.querySelector('.js-favorite').setAttribute('hidden', true);
    item.querySelector('.js-RemoveFromFavorite').removeAttribute('hidden');
    
  });
    arr2.forEach(({ id }) => {
    const item = list.querySelector(`[data-id="${id}"]`);
      if (!item) {
    return
  }
    item.querySelector('.js-basket').setAttribute('hidden', true);
    item.querySelector('.js-RemoveFromBasket').removeAttribute('hidden');
    
  });

};


export { buttonRemove };