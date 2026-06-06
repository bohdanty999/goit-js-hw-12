import{a as S,S as v,i as s}from"./assets/vendor-CIF6YjI2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function m(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const q="56165322-4eccb7c267e8fea85df72b379",g=async(e,o)=>(await S.get("https://pixabay.com/api/",{params:{key:q,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data,y=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=document.querySelector(".load-more"),P=new v(".gallery a",{});function M(e){return`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <ul class="gallery-item-desc">
        <li>Likes <p>${e.likes}</p></li>
        <li>Views <p>${e.views}</p></li>
        <li>Comments <p>${e.comments}</p></li>
        <li>Downloads <p>${e.downloads}</p></li>
      </ul>
    </li>
  `}function $(e){return e.map(M).join("")}function L(e){y.insertAdjacentHTML("beforeend",$(e)),P.refresh()}function O(){y.innerHTML=""}function w(){p.classList.add("loader--visible")}function i(){p.classList.remove("loader--visible")}function x(){h.classList.remove("load-more--hidden")}function u(){h.classList.add("load-more--hidden")}const f=document.querySelector(".form"),T=document.querySelector(".load-more");let c="",n=1,d=0;u();f.addEventListener("submit",async e=>{e.preventDefault();const o=f.querySelector('[name="search-text"]').value.trim();if(!o){s.warning({message:"Please enter a search term."});return}c=o,n=1,d=0,O(),u(),w();try{const a=await g(c,n);if(i(),a.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}d=a.totalHits,L(a.hits),b()}catch{i(),s.error({message:"Something went wrong. Please try again."})}});T.addEventListener("click",async()=>{n+=1,w();try{const e=await g(c,n);i(),L(e.hits),b()}catch{i(),s.error({message:"Something went wrong. Please try again."})}});function b(){n*15>=d?(u(),s.info({message:"We're sorry, but you've reached the end of search results."})):x()}
//# sourceMappingURL=index.js.map
