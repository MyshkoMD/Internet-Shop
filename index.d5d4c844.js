!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("a6LLF");n("dyT35");var a,l,i=n("fJh0j"),u=n("cIRXO"),c=n("9bTGq"),d=n("aT1vo"),s=n("cMOL9"),f=n("dfPuN"),m=(r=n("a6LLF"),i=n("fJh0j"),c=n("9bTGq"),u=n("cIRXO"),document.querySelector(".js-list")),v=null!==(a=JSON.parse(localStorage.getItem(i.common.KEY_FAVORITE)))&&void 0!==a?a:[],p=null!==(l=JSON.parse(localStorage.getItem(i.common.KEY_BASKET)))&&void 0!==l?l:[];var g,S,E=document.querySelector(".js-list"),O=document.querySelector(".js-input"),L=null!==(g=JSON.parse(localStorage.getItem(i.common.KEY_FAVORITE)))&&void 0!==g?g:[],T=null!==(S=JSON.parse(localStorage.getItem(i.common.KEY_BASKET)))&&void 0!==S?S:[];(0,c.createMarkup)(r.instruments,E),(0,u.buttonRemove)(L,T,E),E.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-info")){var t=(0,s.findProduct)(e.target);(0,f.modalWindow)(t)}(0,d.onClickButton)(e,L,T)})),O.addEventListener("input",_.debounce((function(e){var t=e.target.value.toLowerCase();console.dir(t);var o=r.instruments.filter((function(e){return e.name.toLowerCase().includes(t)}));(0,c.createMarkup)(o,m),(0,u.buttonRemove)(v,p,m)}),500))}();
//# sourceMappingURL=index.d5d4c844.js.map
