!function(){function t(t,e,o,r){Object.defineProperty(t,e,{get:o,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=e.parcelRequired7c6;null==n&&((n=function(t){if(t in o)return o[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequired7c6=n),n.register("fJh0j",(function(e,o){t(e.exports,"common",(function(){return r}));var r={KEY_FAVORITE:"favorite",KEY_BASKET:"basket"}})),n.register("9bTGq",(function(e,o){t(e.exports,"createMarkup",(function(){return n}));var r=document.querySelector(".js-list");function n(t){var e="";e=t.length?t.map((function(t){var e=t.id,o=t.img,r=t.name;return' <li class="js-card" data-id="'.concat(e,'">\n        <img src="').concat(o,'" alt="').concat(r,'">\n        <a href="#">\n          <p>').concat(r,'</p>\n        </a>\n        <p>\n        <a href="#" class="js-info" >\n           More info...\n        </a>\n        </p>\n        <div>\n        <button class = "js-favorite">Add to Favorite</button> \n        <button class = "js-RemoveFromFavorite" hidden>Remove from Favorite</button> \n        <button class = "js-basket">Add to Basket</button>\n        <button class = "js-RemoveFromBasket" hidden>Remove from Basket</button> \n        </div>\n      </li>')})).join(""):' <img src="https://r-10.com.ua/tpl/img/ui/cart-empty.svg" alt="Empty"> ',r.innerHTML=e}})),n.register("dfPuN",(function(e,o){t(e.exports,"modalWindow",(function(){return d}));var r=n("dyT35"),i=n("fJh0j"),a=n("88oYW"),c=n("dqqjk"),s=(a=n("88oYW"),c=n("dqqjk"),n("9bTGq")),u=document.querySelector(".js-remove-from-list");function d(t){var e,o=r.create('\n <div class="card js-card js-card-modal"  data-id="'.concat(t.id,'">\n <img src="').concat(t.img,'" alt="').concat(t.name,' " width ="300">\n        <h2>').concat(t.price,' грн</h2>\n        <a href="#">\n          <p>').concat(t.name,"</p>\n        </a>\n        <p>").concat(t.description,'</p>\n        <div>\n          <button class = "js-favorite">Add to Favorite</button> \n          <button class = "js-RemoveFromFavorite" hidden>Remove from Favorite</button> \n          <button class = "js-basket">Add to Basket</button>\n          <button class = "js-RemoveFromBasket" hidden>Remove from Basket</button>\n        </div></div>\n'));o.show();var n,d=null!==(e=JSON.parse(localStorage.getItem(i.common.KEY_FAVORITE)))&&void 0!==e?e:[],l=null!==(n=JSON.parse(localStorage.getItem(i.common.KEY_BASKET)))&&void 0!==n?n:[],m=document.querySelector(".js-card-modal");m.addEventListener("click",(function(t){if(t.target.classList.contains("js-favorite")){var e;(0,a.onClickButtonFavorite)(t);var r=null!==(e=JSON.parse(localStorage.getItem(i.common.KEY_FAVORITE)))&&void 0!==e?e:[];(0,a.buttonRemoveFavoriteModal)(r,m)}if(t.target.classList.contains("js-RemoveFromFavorite")&&((0,a.onClickButtonFavorite)(t),m.querySelector(".js-RemoveFromFavorite").setAttribute("hidden",!0),m.querySelector(".js-favorite").removeAttribute("hidden"),u)){var n,d=null!==(n=JSON.parse(localStorage.getItem(i.common.KEY_FAVORITE)))&&void 0!==n?n:[];(0,s.createMarkup)(d),o.close()}if(t.target.classList.contains("js-basket")){var l;(0,c.onClickButtonBasket)(t);var f=null!==(l=JSON.parse(localStorage.getItem(i.common.KEY_BASKET)))&&void 0!==l?l:[];(0,c.buttonRemoveBasketModal)(f,m)}if(t.target.classList.contains("js-RemoveFromBasket")&&((0,c.onClickButtonBasket)(t),m.querySelector(".js-RemoveFromBasket").setAttribute("hidden",!0),m.querySelector(".js-basket").removeAttribute("hidden"),u)){var p,v=null!==(p=JSON.parse(localStorage.getItem(i.common.KEY_BASKET)))&&void 0!==p?p:[];(0,s.createMarkup)(v),o.close()}})),(0,a.buttonRemoveFavoriteModal)(d,m),(0,c.buttonRemoveBasketModal)(l,m)}})),n.register("dyT35",(function(t,e){t.exports=function t(e,o,r){function n(a,c){if(!o[a]){if(!e[a]){var s=void 0;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var d=o[a]={exports:{}};e[a][0].call(d.exports,(function(t){return n(e[a][1][t]||t)}),d,d.exports,t,e,o,r)}return o[a].exports}for(var i=void 0,a=0;a<r.length;a++)n(r[a]);return n}({1:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.create=o.visible=void 0;var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=document.createElement("div");return o.innerHTML=t.trim(),!0===e?o.children:o.firstChild},n=function(t,e){var o=t.children;return 1===o.length&&o[0].tagName===e},i=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};o.visible=i,o.create=function(t,e){var o=function(t,e){var o=r('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=o.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return i.appendChild(t)}));var a=n(i,"IMG"),c=n(i,"VIDEO"),s=n(i,"IFRAME");return!0===a&&o.classList.add("basicLightbox--img"),!0===c&&o.classList.add("basicLightbox--video"),!0===s&&o.classList.add("basicLightbox--iframe"),o}(t=function(t){var e="string"==typeof t,o=t instanceof HTMLElement==1;if(!1===e&&!1===o)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(r(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),a=function(t){return!1!==e.onClose(c)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(t)||t.parentElement.removeChild(t),e()}),410),!0}(o,(function(){if("function"==typeof t)return t(c)}))};!0===e.closable&&o.addEventListener("click",(function(t){t.target===o&&a()}));var c={element:function(){return o},visible:function(){return i(o)},show:function(t){return!1!==e.onShow(c)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(o,(function(){if("function"==typeof t)return t(c)}))},close:a};return c}},{}]},{},[1])(1)})),n.register("88oYW",(function(e,o){t(e.exports,"buttonRemoveFavoriteModal",(function(){return d})),t(e.exports,"buttonRemoveFavorite",(function(){return l})),t(e.exports,"onClickButtonFavorite",(function(){return m}));var r,i,a=n("fJh0j"),c=n("cMOL9"),s=document.querySelector(".js-list"),u=null!==(r=JSON.parse(localStorage.getItem(a.common.KEY_FAVORITE)))&&void 0!==r?r:[];i=JSON.parse(localStorage.getItem(a.common.KEY_BASKET));function d(t,e){t.find((function(t){t.id===Number(e.dataset.id)&&(e.querySelector(".js-favorite").setAttribute("hidden",!0),e.querySelector(".js-RemoveFromFavorite").removeAttribute("hidden"))}))}function l(){u.forEach((function(t){var e=t.id,o=s.querySelector('[data-id="'.concat(e,'"]'));o&&(o.querySelector(".js-favorite").setAttribute("hidden",!0),o.querySelector(".js-RemoveFromFavorite").removeAttribute("hidden"))}))}function m(t){if(t.target.classList.contains("js-favorite")){var e=(0,c.findProduct)(t.target);if(u.some((function(t){return t.id===e.id})))return;u.push(e),localStorage.setItem(a.common.KEY_FAVORITE,JSON.stringify(u)),l()}if(t.target.classList.contains("js-RemoveFromFavorite")){var o=(0,c.findProduct)(t.target),r=u.findIndex((function(t){return t.id===o.id})),n=s.querySelector('[data-id="'.concat(o.id,'"]'));n.querySelector(".js-RemoveFromFavorite").setAttribute("hidden",!0),n.querySelector(".js-favorite").removeAttribute("hidden"),u.splice(r,1),localStorage.setItem(a.common.KEY_FAVORITE,JSON.stringify(u))}}})),n.register("cMOL9",(function(e,o){t(e.exports,"findProduct",(function(){return i}));var r=n("a6LLF");function i(t){var e=Number(t.closest(".js-card").dataset.id);return r.instruments.find((function(t){return t.id===e}))}})),n.register("a6LLF",(function(e,o){t(e.exports,"instruments",(function(){return r}));var r=[{id:1,name:"Мотообприскувач ранцевий Dnipro-M 14 Turbo",img:"https://static.dnipro-m.ua/cache/products/6568/catalog_origin_302816.jpg",price:1750,description:"Мотообприскувач Dnipro-M 14 Turbo призначений для догляду за великими садами, виноградниками, тепличними господарствами та овочівництвами."},{id:2,name:"Акумуляторний дриль-шуруповерт Dnipro-M CD-12CX Compact",img:"https://static.dnipro-m.ua/cache/products/6301/catalog_origin_306089.jpg",price:2850,description:"Акумуляторний дриль-шуруповерт Dnipro-M CD-12CX Compact призначений для роботи зі стандартними насадками, бітами та свердлами по дереву та металу. Також підходить для роботи з перовими свердлами невеликих діаметрів. "},{id:3,name:"Акумуляторна шліфмашина Dnipro-M CG-12BC Ultra (без АКБ та ЗП)",img:"https://static.dnipro-m.ua/cache/products/4381/catalog_origin_303588.jpg",price:2799,description:"Акумуляторна кутошліфувальна машина CG-12BC Ultra — хороший вибір для виконання наступних завдань: Різання листового металу, Різання профілів, Різання пластикових підвіконь, Зачищення металу, Різання керамограніт"},{id:4,name:"Акумуляторний гвинтоверт Dnipro-M DTD-200 (без АКБ i ЗП)",img:"https://static.dnipro-m.ua/cache/products/2505/catalog_origin_303505.jpg",price:1998,description:"Акумуляторний гвинтоверт DTD-200 — потужний інструмент для легкого загвинчування довгих кріплень та свердління у металі та дереві без особливих зусиль. Інструмент ідеально підходить для роботи з дерев’яними конструкціями, металевим профілем та профнастилом, а також висотних монтажних робіт."},{id:5,name:"Акумуляторна ланцюгова пила Dnipro-M DCS-200BC Dual (без АКБ та ЗП)",img:"https://static.dnipro-m.ua/cache/products/4406/catalog_origin_302438.jpg",price:5600,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."},{id:6,name:"Акумуляторний реноватор Dnipro-M MT-12 (без АКБ та ЗП)",img:"https://static.dnipro-m.ua/cache/products/5528/catalog_origin_300048.jpg",price:2250,description:"Акумуляторний реноватор Dnipro-M MT-12 дозволяє зробити погружний пропил у фанері, ламінаті, дереві або гіпсокартоні, відрізати цвях «під корінь», зашліфувати невелику дерев'яну або бетонну поверхню, підрізати пластик, зачистити міжплиточні шви і плитку від клею, виконати демонтаж шпалер, лінолеуму і т.д. Достатньо встановити відповідну насадку."},{id:7,name:"Акумуляторна циркулярна пила Dnipro-M DSC-200BC ULTRA (без АКБ та ЗП)",img:"https://static.dnipro-m.ua/cache/products/5022/catalog_origin_308462.jpg",price:4499,description:"Акумуляторна циркулярна пила Dnipro-M DSC-200BC Ultra оснащена потужним безколекторним (безщітковим) двигуном, що забезпечує високу продуктивність. Він знижує споживання електроенергії і збільшує час безперервної роботи інструментом."},{id:8,name:"Акумуляторна батарея Dnipro-M BP-240 4 A/год (2 шт.)",img:"https://static.dnipro-m.ua/cache/products/2410/catalog_origin_301836.jpg",price:3750,description:"Акумуляторна батарея Dnipro-M BP-240 - акумуляторна Li-Ion батарея напругою 20 V та ємністю 4 А/г. Завдяки своїм ємнісним показникам та чудовій автономності вона дозволяє проявити ресурс інструменту на всі 100% і виконувати професійні завдання, не зупиняючись."},{id:9,name:"Мийка високого тиску Dnipro-M PW-14B (2021)",img:"https://static.dnipro-m.ua/cache/products/5784/catalog_origin_304367.jpg",price:5499,description:"Мийка високого тиску Dnipro-M PW-18Ri (2021) призначена для усунення забруднень з різних поверхонь, серед яких: Басейни, Огорожі та кам'яні доріжки, Легкові автомобілі, Садові доріжки, Мототехніка, Мікроавтобуси та будинки на колесах, Садові меблі та інші"},{id:10,name:"Фрезер Dnipro-M ER-160S",img:"https://static.dnipro-m.ua/cache/products/4210/catalog_origin_311262.jpg",price:3999,description:"Ручний фрезер Dnipro-M ER-160S призначений для обробки деревних матеріалів. Він ефективний під час фрезерування пазів і канавок, зняття фасок, підгонки країв і виготовлення декоративних фігур."}]})),n.register("dqqjk",(function(e,o){t(e.exports,"buttonRemoveBasketModal",(function(){return u})),t(e.exports,"buttonRemoveBasket",(function(){return d})),t(e.exports,"onClickButtonBasket",(function(){return l}));var r,i=n("fJh0j"),a=n("cMOL9"),c=document.querySelector(".js-list"),s=null!==(r=JSON.parse(localStorage.getItem(i.common.KEY_BASKET)))&&void 0!==r?r:[];function u(t,e){t.find((function(t){t.id===Number(e.dataset.id)&&(e.querySelector(".js-basket").setAttribute("hidden",!0),e.querySelector(".js-RemoveFromBasket").removeAttribute("hidden"))}))}function d(){s.forEach((function(t){var e=t.id,o=c.querySelector('[data-id="'.concat(e,'"]'));o&&(o.querySelector(".js-basket").setAttribute("hidden",!0),o.querySelector(".js-RemoveFromBasket").removeAttribute("hidden"))}))}function l(t){if(t.target.classList.contains("js-basket")){var e=(0,a.findProduct)(t.target);if(s.some((function(t){return t.id===e.id})))return;s.push(e),localStorage.setItem(i.common.KEY_BASKET,JSON.stringify(s)),d()}if(t.target.classList.contains("js-RemoveFromBasket")){var o=(0,a.findProduct)(t.target),r=s.findIndex((function(t){return t.id===o.id})),n=c.querySelector('[data-id="'.concat(o.id,'"]'));s.splice(r,1),localStorage.setItem(i.common.KEY_BASKET,JSON.stringify(s)),n.querySelector(".js-RemoveFromBasket").setAttribute("hidden",!0),n.querySelector(".js-basket").removeAttribute("hidden")}}}))}();
//# sourceMappingURL=favorite.b16e4071.js.map