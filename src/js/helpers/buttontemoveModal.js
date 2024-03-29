





function buttonRemoveModal(favoriteArr, basketArr, modalCard) {
    favoriteArr.find(item => {
      const favoriteItem = item.id === Number(modalCard.dataset.id);
      if (!favoriteItem) {
        return
      }
      modalCard.querySelector('.js-favorite').setAttribute('hidden', true);
      modalCard.querySelector('.js-RemoveFromFavorite').removeAttribute('hidden');
    });

    basketArr.find(item => {
      const basketItem = item.id === Number(modalCard.dataset.id);
      if (!basketItem) {
      return
      }
      modalCard.querySelector('.js-basket').setAttribute('hidden', true);
      modalCard.querySelector('.js-RemoveFromBasket').removeAttribute('hidden');
    });
};
  
export { buttonRemoveModal };