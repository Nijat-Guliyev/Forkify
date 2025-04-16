function e(e){return e&&e.__esModule?e.default:e}const t="https://forkify-api.jonas.io/api/v2/recipes/",r="b3f7b202-7f27-42fb-8908-9ee007bda3fc",i=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,new Promise(function(e,t){setTimeout(()=>{t(Error("Request too long! Timeout after 10 second"))},1e4)})]),n=await i.json();if(!i.ok)throw Error(`${n.message} (${i.status})`);return n}catch(e){throw e}},n={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},s=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},a=async function(e){try{let a=await i(`${t}${e}?key=${r}`);n.recipe=s(a),n.bookmarks.some(t=>t.id===e)?n.recipe.bookmarked=!0:n.recipe.bookmarked=!1,console.log(n.recipe)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},o=async function(e){try{n.search.query=e;let s=await i(`${t}?search=${e}&key=${r}`);console.log(s),n.search.results=s.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),n.search.page=1}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},c=function(e=n.search.page){n.search.page=e;let t=(e-1)*n.search.resultsPerPage,r=e*n.search.resultsPerPage;return n.search.results.slice(t,r)},l=function(e){n.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/n.recipe.servings}),n.recipe.servings=e},d=function(){localStorage.setItem("bookmarks",JSON.stringify(n.bookmarks))},u=function(e){n.bookmarks.push(e),e.id===n.recipe.id&&(n.recipe.bookmarked=!0),d()},p=function(e){let t=n.bookmarks.findIndex(t=>t.id===e);n.bookmarks.splice(t,1),e===n.recipe.id&&(n.recipe.bookmarked=!1),d()},_=localStorage.getItem("bookmarks");_&&(n.bookmarks=JSON.parse(_));const h=async function(e){try{let a=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use correct format :)");let[r,i,n]=t;return{quantity:r?+r:null,unit:i,description:n}}),o={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:a},c=await i(`${t}?key=${r}`,o);n.recipe=s(c),u(n.recipe)}catch(e){throw e}};var g={};g=import.meta.resolve("9oAJN");class v{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`
       <div class="spinner">
            <svg class="search__icon">
              <use href="${e(g)}#icon-spinner"></use>
            </svg>
       </div>
       `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){let r=`
       <div class="error">
          <svg class="search__icon">
            <use href="${e(g)}#icon-warning"></use>
          </svg>
          <p>${t}</p>
       </div>
       `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){let r=`
       <div class="message">
          <svg class="search__icon">
            <use href="${e(g)}#icon-emoji-happy"></use>
          </svg>
          <p>${t}</p>
       </div>
       `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}var m={};function f(e,t,r,i,n){var s,a,o,c;let l=[2,3,5];if(!0===n)for(let t=3;t*t<=e;t+=2)e%t==0&&l.push(t);let d=0,u=e,p=t;for(;d<=l.length;)u%l[d]==0&&p%l[d]==0?(l[d],u/=l[d],p/=l[d]):d++;return s=p,a=u,o=r,c=i,1===s&&1===a?(o=`${c}${(parseInt(o)+1).toString()}`,`${o}`):0===a?`${c}${o}`:"0"==o?`${c}${a}/${s}`:`${c}${o} ${a}/${s}`}m=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let i=e.toString(),n=i.split("."),s=n[0];if("0"==r&&"0"!==s)return s;if("0"==r&&"0"==s)return"0";if("99"==(r=i.length>=17?n[1].slice(0,n[1].length-1):n[1])&&"0"!==s)return`${s} 99/100`;if("99"==r&&"0"==s)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return s;let a=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!a||!(r.length>2)){var o,c,l;return o=r,c=s,l=t,f(parseInt(o,10),Math.pow(10,o.length),c,l,!1)}{let e=a[0].split("").reverse().join(""),i=a[1].split("").reverse().join("");if(i.length>1){let e=i.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(i=e[0])}return i.length>1&&i.length%2==0&&(i=parseInt(i.slice(0,i.length/2),10)-parseInt(i.slice(i.length/2,i.length),10)==0?i.slice(0,i.length/2):i),function(e,t,r,i,n){let s=e.length-r.length>=1?e.length-r.length:1,a=Math.pow(10,s),o=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return f(Math.round((o*c-o)*Math.pow(10,s)),(c-1)*a,i,n,!0)}(r,i,e,s,t)}};class k extends v{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn__update-serving");if(!r)return;let{updateTo:i}=r.dataset;+i>0&&e(+i)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
     <div class="recipe__fig">
          <img
            src="${this._data.image}"
            alt="${this._data.title}"
            class="recipe__img"
          />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </div>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${e(g)}#icon-clock"></use>
            </svg>
            <div class="recipe__info-minutes recipe__info-data">${this._data.cookingTime}</div>
            <div class="recipe__info-text">minutes</div>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${e(g)}#icon-users"></use>
            </svg>
            <div class="recipe__info-people recipe__info-data">${this._data.servings}</div>
            <div class="recipe__info-text">servings</div>

            <div class="recipe__info-buttons">
              <button data-update-to="${this._data.servings-1}" class="btn__tiny btn__update-serving">
                <svg>
                  <use href="${e(g)}#icon-circle-with-minus"></use>
                </svg>
              </button>
              <button data-update-to="${this._data.servings+1}" class="btn__tiny btn__update-serving">
                <svg>
                  <use href="${e(g)}#icon-circle-with-plus"></use>
                </svg>
              </button>
            </div>
          </div> 
              
          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${e(g)}#icon-users"></use>
            </svg>
          </div> 
            <button class="btn__round btn--bookmark ${this._data.bookmarked?"bookmarked":""}">
              <svg>
                 <use href="${e(g)}#icon-bookmark"></use>
              </svg>
           </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please
            check out directions at their website.
          </p>
          <a
            href="${this._data.sourceUrl}"
            target="_blank"
            class="btn__small recipe__btn"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${e(g)}#icon-arrow-long-right"></use>
            </svg>
          </a>
        </div> 
        `}_generateMarkupIngredient(t){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${e(g)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${t.quantity?e(m)(t.quantity).toString():""}</div>
        <div class="recipe__description"> 
          <span class="recipe__unit">${t.unit}</span> ${t.description}
        </div>
      </li>
      `}toggleBookmarkStyle(e){let t=document.querySelector(".btn--bookmark");t&&t.classList.toggle("bookmarked",e)}}var b=new k;class y{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var $=new y,w=new class extends v{_parentElement="";_generateMarkup(){let t=window.location.hash.slice(1);return`
        <li class="preview">
            <a href="#${this._data.id}" class="preview__link ${this._data.id===t?"preview__link-active":""}">
            <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}">
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                  <svg class="search__icon">
                    <use href="${e(g)}#icon-users"></use>
                  </svg>
                </div>
            </div>
            </a>
        </li> 
    `}};class E extends v{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again :)";_message="";_generateMarkup(){return this._data.map(e=>w.render(e,!1)).join("")}}var S=new E;class M extends v{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?this._generateMarkupButtonNext(e):e===t&&t>1?this._generateMarkupButtonPrevious(e):e<t?`
         ${this._generateMarkupButtonPrevious(e)}
         ${this._generateMarkupButtonNext(e)}
      `:""}_generateMarkupButtonPrevious(t){return`
      <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
          <use href="${e(g)}#icon-arrow-long-left"></use>
          </svg>
          <span>Page ${t-1}</span>
      </button>
    `}_generateMarkupButtonNext(t){return` 
      <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
        <span>Page ${t+1}</span>
        <svg class="search__icon">
          <use href="${e(g)}#icon-arrow-long-right"></use>
        </svg>
      </button>
    `}}var q=new M;class H extends v{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>w.render(e,!1)).join("")}}var A=new H;class P extends v{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var L=new P;const x=async function(){try{let e=window.location.hash.slice(1);if(!e)return;b.renderSpinner(),S.update(c()),A.update(n.bookmarks),await a(e),b.render(n.recipe)}catch(e){b.renderError(),console.error(e)}},j=async function(){try{S.renderSpinner();let e=$.getQuery();if(!e)return;await o(e),S.render(c()),q.render(n.search)}catch(e){console.error(e)}},T=async function(e){try{L.renderSpinner(),await h(e),console.log(n.recipe),b.render(n.recipe),L.renderMessage(),A.render(n.bookmarks),window.history.pushState(null,"",`#${n.recipe.id}`),setTimeout(function(){L.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),L.renderError(e.message)}};A.addHandlerRender(function(){A.render(n.bookmarks)}),b.addHandlerRender(x),b.addHandlerUpdateServings(function(e){l(e),b.update(n.recipe)}),b.addHandlerAddBookmark(function(){n.recipe.bookmarked?p(n.recipe.id):u(n.recipe),b.toggleBookmarkStyle(n.recipe.bookmarked),b.update(n.recipe),A.render(n.bookmarks)}),$.addHandlerSearch(j),q.addHandlerClick(function(e){S.render(c(e)),q.render(n.search)}),L.addHandlerUpload(T);
//# sourceMappingURL=Forkify.2f2ee51f.js.map
