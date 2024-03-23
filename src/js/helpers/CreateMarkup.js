function createMarkup(arr, list) {
    const markup = arr.map(({ id, img, name }) => ` <li class="js-card" data-id="${id}">
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
   
list.innerHTML = markup;

}



export { createMarkup };