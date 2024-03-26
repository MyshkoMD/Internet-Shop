function createMarkup(arr, list) {
  let markup = '';
  if (!arr.length) {
   
    markup = ' <img src="https://r-10.com.ua/tpl/img/ui/cart-empty.svg" alt="Empty"> ';
   
  } else {
    markup = arr.map(({ id, img, name }) => ` <li class="js-card" data-id="${id}">
        <img src="${img}" alt="${name}">
        <a href="#">
          <p>${name}</p>
        </a>
        <p>
        <a href="#" class="js-info" >
           More info...
        </a>
        </p>
        <div>
        <button class = "js-favorite">Add to Favorite</button> 
        <button class = "js-RemoveFromFavorite" hidden>Remove from Favorite</button> 
        <button class = "js-basket">Add to Basket</button>
        <button class = "js-RemoveFromBasket" hidden>Remove from Basket</button> 
        </div>
      </li>`).join('');
  }
   
list.innerHTML = markup;

}



export { createMarkup };