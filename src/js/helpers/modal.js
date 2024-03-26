import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';




function modalWindow(product) {
    const instance = basicLightbox.create(`
 <div class="card">
 <img src="${product.img}" alt="${product.name} " width ="300">
        <h2>${product.price} грн</h2>
        <a href="#">
          <p>${product.name}</p>
        </a>
        <p>${product.description}</p>
        <div>
          <button class = "js-favorite">Add to Favorite</button> 
          <button class = "js-RemoveFromFavorite" hidden>Remove from Favorite</button> 
          <button class = "js-basket">Add to Basket</button>
          <button class = "js-RemoveFromBasket" hidden>Remove from Basket</button>
        </div></div>
`);
    instance.show();
}
  

export { modalWindow };