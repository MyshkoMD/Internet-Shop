!function(){function t(t,e,i,r){Object.defineProperty(t,e,{get:i,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){r[t]=e},e.parcelRequired7c6=o),o.register("fJh0j",(function(e,i){t(e.exports,"common",(function(){return r}));var r={KEY_FAVORITE:"favorite",KEY_BASKET:"basket"}})),o.register("9bTGq",(function(e,i){function r(t,e){var i=t.map((function(t){var e=t.id,i=t.img,r=t.name;return' <li class="js-card" data-id="'.concat(e,'">\n        <img src="').concat(i,'" alt="').concat(r,'">\n        <a href="#">\n          <p>').concat(r,'</p>\n        </a>\n        <p>\n        <a href="#" class="js-info" >\n           More info...\n        </a>\n        </p>\n        <div>\n        <button class = "js-favorite">Add to Favorite</button> \n        <button class = "js-RemoveFromFavorite" hidden>Remove from Favorite</button> \n        <button class = "js-basket">Add to Basket</button>\n        <button class = "js-RemoveFromBasket" hidden>Remove from Basket</button> \n        </div>\n      </li>')})).join("");e.innerHTML=i}t(e.exports,"createMarkup",(function(){return r}))})),o.register("8cAtm",(function(e,i){t(e.exports,"buttonRemove",(function(){return r}));document.querySelector(".js-list");function r(t,e,i){t.forEach((function(t){var e=t.id,r=i.querySelector('[data-id="'.concat(e,'"]'));r&&(r.querySelector(".js-favorite").setAttribute("hidden",!0),r.querySelector(".js-RemoveFromFavorite").removeAttribute("hidden"))})),e.forEach((function(t){var e=t.id,r=i.querySelector('[data-id="'.concat(e,'"]'));r&&(r.querySelector(".js-basket").setAttribute("hidden",!0),r.querySelector(".js-RemoveFromBasket").removeAttribute("hidden"))}))}})),o.register("aT1vo",(function(e,i){t(e.exports,"onClickButton",(function(){return s}));var r=o("cMOL9"),n=o("fJh0j"),c=o("8cAtm"),a=document.querySelector(".js-list");function s(t,e,i){if(t.target.classList.contains("js-favorite")){var o=(0,r.findProduct)(t.target);if(e.some((function(t){return t.id===o.id})))return;e.push(o),localStorage.setItem(n.common.KEY_FAVORITE,JSON.stringify(e)),(0,c.buttonRemove)(e,i,a)}if(t.target.classList.contains("js-RemoveFromFavorite")){var s=(0,r.findProduct)(t.target);e.find((function(t,i){if(t.id===s.id){console.dir(t.id===s.id);var r=a.querySelector('[data-id="'.concat(t.id,'"]'));console.dir(r),e.splice(i,1),localStorage.setItem(n.common.KEY_FAVORITE,JSON.stringify(e)),r.querySelector(".js-RemoveFromFavorite").setAttribute("hidden",!0),r.querySelector(".js-favorite").removeAttribute("hidden")}}))}if(t.target.classList.contains("js-basket")){var d=(0,r.findProduct)(t.target);if(i.some((function(t){return t.id===d.id})))return;i.push(d),localStorage.setItem(n.common.KEY_BASKET,JSON.stringify(i)),(0,c.buttonRemove)(e,i,a)}if(t.target.classList.contains("js-RemoveFromBasket")){var u=(0,r.findProduct)(t.target);i.find((function(t,e){if(t.id===u.id){var r=a.querySelector('[data-id="'.concat(t.id,'"]'));i.splice(e,1),localStorage.setItem(n.common.KEY_BASKET,JSON.stringify(i)),r.querySelector(".js-RemoveFromBasket").setAttribute("hidden",!0),r.querySelector(".js-basket").removeAttribute("hidden")}}))}}})),o.register("cMOL9",(function(e,i){t(e.exports,"findProduct",(function(){return n}));var r=o("a6LLF");function n(t){var e=Number(t.closest(".js-card").dataset.id);return r.instruments.find((function(t){return t.id===e}))}})),o.register("a6LLF",(function(e,i){t(e.exports,"instruments",(function(){return r}));var r=[{id:1,name:"Мотообприскувач ранцевий Dnipro-M 14 Turbo",img:"https://static.dnipro-m.ua/cache/products/6568/catalog_origin_302816.jpg",price:1750,description:"Мотообприскувач Dnipro-M 14 Turbo призначений для догляду за великими садами, виноградниками, тепличними господарствами та овочівництвами."},{id:2,name:"Акумуляторний дриль-шуруповерт Dnipro-M CD-12CX Compact",img:"https://static.dnipro-m.ua/cache/products/6301/catalog_origin_306089.jpg",price:2850,description:"Акумуляторний дриль-шуруповерт Dnipro-M CD-12CX Compact призначений для роботи зі стандартними насадками, бітами та свердлами по дереву та металу. Також підходить для роботи з перовими свердлами невеликих діаметрів. "},{id:3,name:"Акумуляторна шліфмашина Dnipro-M CG-12BC Ultra (без АКБ та ЗП)",img:"https://static.dnipro-m.ua/cache/products/4381/catalog_origin_303588.jpg",price:2799,description:"Акумуляторна кутошліфувальна машина CG-12BC Ultra — хороший вибір для виконання наступних завдань: Різання листового металу, Різання профілів, Різання пластикових підвіконь, Зачищення металу, Різання керамограніт"},{id:4,name:"Акумуляторний гвинтоверт Dnipro-M DTD-200 (без АКБ i ЗП)",img:"https://static.dnipro-m.ua/cache/products/2505/catalog_origin_303505.jpg",price:1998,description:"Акумуляторний гвинтоверт DTD-200 — потужний інструмент для легкого загвинчування довгих кріплень та свердління у металі та дереві без особливих зусиль. Інструмент ідеально підходить для роботи з дерев’яними конструкціями, металевим профілем та профнастилом, а також висотних монтажних робіт."},{id:5,name:"Акумуляторна ланцюгова пила Dnipro-M DCS-200BC Dual (без АКБ та ЗП)",img:"https://static.dnipro-m.ua/cache/products/4406/catalog_origin_302438.jpg",price:5600,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."},{id:6,name:"Акумуляторний реноватор Dnipro-M MT-12 (без АКБ та ЗП)",img:"https://static.dnipro-m.ua/cache/products/5528/catalog_origin_300048.jpg",price:2250,description:"Акумуляторний реноватор Dnipro-M MT-12 дозволяє зробити погружний пропил у фанері, ламінаті, дереві або гіпсокартоні, відрізати цвях «під корінь», зашліфувати невелику дерев'яну або бетонну поверхню, підрізати пластик, зачистити міжплиточні шви і плитку від клею, виконати демонтаж шпалер, лінолеуму і т.д. Достатньо встановити відповідну насадку."},{id:7,name:"Акумуляторна циркулярна пила Dnipro-M DSC-200BC ULTRA (без АКБ та ЗП)",img:"https://static.dnipro-m.ua/cache/products/5022/catalog_origin_308462.jpg",price:4499,description:"Акумуляторна циркулярна пила Dnipro-M DSC-200BC Ultra оснащена потужним безколекторним (безщітковим) двигуном, що забезпечує високу продуктивність. Він знижує споживання електроенергії і збільшує час безперервної роботи інструментом."},{id:8,name:"Акумуляторна батарея Dnipro-M BP-240 4 A/год (2 шт.)",img:"https://static.dnipro-m.ua/cache/products/2410/catalog_origin_301836.jpg",price:3750,description:"Акумуляторна батарея Dnipro-M BP-240 - акумуляторна Li-Ion батарея напругою 20 V та ємністю 4 А/г. Завдяки своїм ємнісним показникам та чудовій автономності вона дозволяє проявити ресурс інструменту на всі 100% і виконувати професійні завдання, не зупиняючись."},{id:9,name:"Мийка високого тиску Dnipro-M PW-14B (2021)",img:"https://static.dnipro-m.ua/cache/products/5784/catalog_origin_304367.jpg",price:5499,description:"Мийка високого тиску Dnipro-M PW-18Ri (2021) призначена для усунення забруднень з різних поверхонь, серед яких: Басейни, Огорожі та кам'яні доріжки, Легкові автомобілі, Садові доріжки, Мототехніка, Мікроавтобуси та будинки на колесах, Садові меблі та інші"},{id:10,name:"Фрезер Dnipro-M ER-160S",img:"https://static.dnipro-m.ua/cache/products/4210/catalog_origin_311262.jpg",price:3999,description:"Ручний фрезер Dnipro-M ER-160S призначений для обробки деревних матеріалів. Він ефективний під час фрезерування пазів і канавок, зняття фасок, підгонки країв і виготовлення декоративних фігур."}]}))}();
//# sourceMappingURL=favorite.5ceb1256.js.map
