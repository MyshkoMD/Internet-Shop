!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r,a,i=n("fJh0j"),l=n("9bTGq"),s=n("cIRXO"),c=n("aT1vo"),d=n("dfPuN"),u=n("cMOL9"),f=document.querySelector(".js-list"),p=null!==(r=JSON.parse(localStorage.getItem(i.common.KEY_FAVORITE)))&&void 0!==r?r:[],v=null!==(a=JSON.parse(localStorage.getItem(i.common.KEY_BASKET)))&&void 0!==a?a:[];(0,l.createMarkup)(p,f),(0,s.buttonRemove)(p,v,f),f.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-info")){var t=(0,u.findProduct)(e.target);(0,d.modalWindow)(t)}(e.target.classList.contains("js-basket")||e.target.classList.contains("js-RemoveFromBasket"))&&(0,c.onClickButton)(e,p,v);e.target.classList.contains("js-RemoveFromFavorite")&&((0,c.onClickButton)(e,p,v),(0,l.createMarkup)(p,f),(0,s.buttonRemove)(p,v,f))}))}();
//# sourceMappingURL=favorite.a5f50121.js.map
