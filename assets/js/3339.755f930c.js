(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3339],{30894:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var i=s(5485),n=s.n(i);const l=s(31336);l.tokenizer.separator=/[\s\-/]+/;const a=class{constructor(e,t,s){void 0===s&&(s="/"),this.searchDocs=e,this.lunrIndex=l.Index.load(t),this.baseUrl=s}getLunrResult(e){return this.lunrIndex.query((function(t){const s=l.tokenizer(e);t.term(s,{boost:10}),t.term(s,{wildcard:l.Query.wildcard.TRAILING})}))}getHit(e,t,s){return{hierarchy:{lvl0:e.pageTitle||e.title,lvl1:0===e.type?null:e.title},url:e.url,_snippetResult:s?{content:{value:s,matchLevel:"full"}}:null,_highlightResult:{hierarchy:{lvl0:{value:0===e.type?t||e.title:e.pageTitle},lvl1:0===e.type?null:{value:t||e.title}}}}}getTitleHit(e,t,s){const i=t[0],n=t[0]+s;let l=`${e.title.substring(0,i)}<span class="algolia-docsearch-suggestion--highlight">${e.title.substring(i,n)}</span>${e.title.substring(n,e.title.length)}`;return this.getHit(e,l)}getKeywordHit(e,t,s){const i=t[0],n=t[0]+s;let l=`${e.title}<br /><i>Keywords: ${e.keywords.substring(0,i)}<span class="algolia-docsearch-suggestion--highlight">${e.keywords.substring(i,n)}</span>${e.keywords.substring(n,e.keywords.length)}</i>`;return this.getHit(e,l)}getContentHit(e,t){const s=t[0],i=t[0]+t[1];let n=s,l=i,a=!0,r=!0;for(let c=0;c<3;c++){const t=e.content.lastIndexOf(" ",n-2),s=e.content.lastIndexOf(".",n-2);if(s>0&&s>t){n=s+1,a=!1;break}if(t<0){n=0,a=!1;break}n=t+1}for(let c=0;c<10;c++){const t=e.content.indexOf(" ",l+1),s=e.content.indexOf(".",l+1);if(s>0&&s<t){l=s,r=!1;break}if(t<0){l=e.content.length,r=!1;break}l=t}let o=e.content.substring(n,s);return a&&(o=`... ${o}`),o+=`<span class="algolia-docsearch-suggestion--highlight">${e.content.substring(s,i)}</span>`,o+=e.content.substring(i,l),r&&(o+=" ..."),this.getHit(e,null,o)}search(e){return new Promise((t=>{const s=this.getLunrResult(e),i=[];s.length>5&&(s.length=5),this.titleHitsRes=[],this.contentHitsRes=[],s.forEach((t=>{const s=this.searchDocs[t.ref],{metadata:n}=t.matchData;for(let l in n)if(n[l].title){if(!this.titleHitsRes.includes(t.ref)){const a=n[l].title.position[0];i.push(this.getTitleHit(s,a,e.length)),this.titleHitsRes.push(t.ref)}}else if(n[l].content){const e=n[l].content.position[0];i.push(this.getContentHit(s,e))}else if(n[l].keywords){const a=n[l].keywords.position[0];i.push(this.getKeywordHit(s,a,e.length)),this.titleHitsRes.push(t.ref)}})),i.length>5&&(i.length=5),t(i)}))}};var r=s(71639),o=s.n(r);const c="algolia-docsearch",h=`${c}-suggestion`,u={suggestion:`\n  <a class="${h}\n    {{#isCategoryHeader}}${h}__main{{/isCategoryHeader}}\n    {{#isSubCategoryHeader}}${h}__secondary{{/isSubCategoryHeader}}\n    "\n    aria-label="Link to the result"\n    href="{{{url}}}"\n    >\n    <div class="${h}--category-header">\n        <span class="${h}--category-header-lvl0">{{{category}}}</span>\n    </div>\n    <div class="${h}--wrapper">\n      <div class="${h}--subcategory-column">\n        <span class="${h}--subcategory-column-text">{{{subcategory}}}</span>\n      </div>\n      {{#isTextOrSubcategoryNonEmpty}}\n      <div class="${h}--content">\n        <div class="${h}--subcategory-inline">{{{subcategory}}}</div>\n        <div class="${h}--title">{{{title}}}</div>\n        {{#text}}<div class="${h}--text">{{{text}}}</div>{{/text}}\n        {{#version}}<div class="${h}--version">{{version}}</div>{{/version}}\n      </div>\n      {{/isTextOrSubcategoryNonEmpty}}\n    </div>\n  </a>\n  `,suggestionSimple:`\n  <div class="${h}\n    {{#isCategoryHeader}}${h}__main{{/isCategoryHeader}}\n    {{#isSubCategoryHeader}}${h}__secondary{{/isSubCategoryHeader}}\n    suggestion-layout-simple\n  ">\n    <div class="${h}--category-header">\n        {{^isLvl0}}\n        <span class="${h}--category-header-lvl0 ${h}--category-header-item">{{{category}}}</span>\n          {{^isLvl1}}\n          {{^isLvl1EmptyOrDuplicate}}\n          <span class="${h}--category-header-lvl1 ${h}--category-header-item">\n              {{{subcategory}}}\n          </span>\n          {{/isLvl1EmptyOrDuplicate}}\n          {{/isLvl1}}\n        {{/isLvl0}}\n        <div class="${h}--title ${h}--category-header-item">\n            {{#isLvl2}}\n                {{{title}}}\n            {{/isLvl2}}\n            {{#isLvl1}}\n                {{{subcategory}}}\n            {{/isLvl1}}\n            {{#isLvl0}}\n                {{{category}}}\n            {{/isLvl0}}\n        </div>\n    </div>\n    <div class="${h}--wrapper">\n      {{#text}}\n      <div class="${h}--content">\n        <div class="${h}--text">{{{text}}}</div>\n      </div>\n      {{/text}}\n    </div>\n  </div>\n  `,footer:`\n    <div class="${`${c}-footer`}">\n    </div>\n  `,empty:`\n  <div class="${h}">\n    <div class="${h}--wrapper">\n        <div class="${h}--content ${h}--no-results">\n            <div class="${h}--title">\n                <div class="${h}--text">\n                    No results found for query <b>"{{query}}"</b>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  `,searchBox:'\n  <form novalidate="novalidate" onsubmit="return false;" class="searchbox">\n    <div role="search" class="searchbox__wrapper">\n      <input id="docsearch" type="search" name="search" placeholder="Search the docs" autocomplete="off" required="required" class="searchbox__input"/>\n      <button type="submit" title="Submit your search query." class="searchbox__submit" >\n        <svg width=12 height=12 role="img" aria-label="Search">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-search-13"></use>\n        </svg>\n      </button>\n      <button type="reset" title="Clear the search query." class="searchbox__reset hide">\n        <svg width=12 height=12 role="img" aria-label="Reset">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-clear-3"></use>\n        </svg>\n      </button>\n    </div>\n</form>\n\n<div class="svg-icons" style="height: 0; width: 0; position: absolute; visibility: hidden">\n  <svg xmlns="http://www.w3.org/2000/svg">\n    <symbol id="sbx-icon-clear-3" viewBox="0 0 40 40"><path d="M16.228 20L1.886 5.657 0 3.772 3.772 0l1.885 1.886L20 16.228 34.343 1.886 36.228 0 40 3.772l-1.886 1.885L23.772 20l14.342 14.343L40 36.228 36.228 40l-1.885-1.886L20 23.772 5.657 38.114 3.772 40 0 36.228l1.886-1.885L16.228 20z" fill-rule="evenodd"></symbol>\n    <symbol id="sbx-icon-search-13" viewBox="0 0 40 40"><path d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.332 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.807 29.012zm-10.427.627c7.322 0 13.26-5.938 13.26-13.26 0-7.324-5.938-13.26-13.26-13.26-7.324 0-13.26 5.936-13.26 13.26 0 7.322 5.936 13.26 13.26 13.26z" fill-rule="evenodd"></symbol>\n  </svg>\n</div>\n  '};var g=s(7939),d=s.n(g);const p={mergeKeyWithParent(e,t){if(void 0===e[t])return e;if("object"!=typeof e[t])return e;const s=d().extend({},e,e[t]);return delete s[t],s},groupBy(e,t){const s={};return d().each(e,((e,i)=>{if(void 0===i[t])throw new Error(`[groupBy]: Object has no key ${t}`);let n=i[t];"string"==typeof n&&(n=n.toLowerCase()),Object.prototype.hasOwnProperty.call(s,n)||(s[n]=[]),s[n].push(i)})),s},values:e=>Object.keys(e).map((t=>e[t])),flatten(e){const t=[];return e.forEach((e=>{Array.isArray(e)?e.forEach((e=>{t.push(e)})):t.push(e)})),t},flattenAndFlagFirst(e,t){const s=this.values(e).map((e=>e.map(((e,s)=>(e[t]=0===s,e)))));return this.flatten(s)},compact(e){const t=[];return e.forEach((e=>{e&&t.push(e)})),t},getHighlightedValue:(e,t)=>e._highlightResult&&e._highlightResult.hierarchy_camel&&e._highlightResult.hierarchy_camel[t]&&e._highlightResult.hierarchy_camel[t].matchLevel&&"none"!==e._highlightResult.hierarchy_camel[t].matchLevel&&e._highlightResult.hierarchy_camel[t].value?e._highlightResult.hierarchy_camel[t].value:e._highlightResult&&e._highlightResult&&e._highlightResult[t]&&e._highlightResult[t].value?e._highlightResult[t].value:e[t],getSnippetedValue(e,t){if(!e._snippetResult||!e._snippetResult[t]||!e._snippetResult[t].value)return e[t];let s=e._snippetResult[t].value;return s[0]!==s[0].toUpperCase()&&(s=`\u2026${s}`),-1===[".","!","?"].indexOf(s[s.length-1])&&(s=`${s}\u2026`),s},deepClone:e=>JSON.parse(JSON.stringify(e))};class v{constructor(e){let{searchDocs:t,searchIndex:s,inputSelector:i,debug:n=!1,baseUrl:l="/",queryDataCallback:r=null,autocompleteOptions:c={debug:!1,hint:!1,autoselect:!0},transformData:h=!1,queryHook:g=!1,handleSelected:p=!1,enhancedSearchInput:y=!1,layout:m="column"}=e;this.input=v.getInputFromSelector(i),this.queryDataCallback=r||null;const b=!(!c||!c.debug)&&c.debug;c.debug=n||b,this.autocompleteOptions=c,this.autocompleteOptions.cssClasses=this.autocompleteOptions.cssClasses||{},this.autocompleteOptions.cssClasses.prefix=this.autocompleteOptions.cssClasses.prefix||"ds";const f=this.input&&"function"==typeof this.input.attr&&this.input.attr("aria-label");this.autocompleteOptions.ariaLabel=this.autocompleteOptions.ariaLabel||f||"search input",this.isSimpleLayout="simple"===m,this.client=new a(t,s,l),y&&(this.input=v.injectSearchBox(this.input)),this.autocomplete=o()(this.input,c,[{source:this.getAutocompleteSource(h,g),templates:{suggestion:v.getSuggestionTemplate(this.isSimpleLayout),footer:u.footer,empty:v.getEmptyTemplate()}}]);const x=p;this.handleSelected=x||this.handleSelected,x&&d()(".algolia-autocomplete").on("click",".ds-suggestions a",(e=>{e.preventDefault()})),this.autocomplete.on("autocomplete:selected",this.handleSelected.bind(null,this.autocomplete.autocomplete)),this.autocomplete.on("autocomplete:shown",this.handleShown.bind(null,this.input)),y&&v.bindSearchBoxEvent(),document.addEventListener("keydown",(e=>{(e.ctrlKey||e.metaKey)&&"k"==e.key&&(this.input.focus(),e.preventDefault())}))}static injectSearchBox(e){e.before(u.searchBox);const t=e.prev().prev().find("input");return e.remove(),t}static bindSearchBoxEvent(){d()('.searchbox [type="reset"]').on("click",(function(){d()("input#docsearch").focus(),d()(this).addClass("hide"),o().autocomplete.setVal("")})),d()("input#docsearch").on("keyup",(()=>{const e=document.querySelector("input#docsearch"),t=document.querySelector('.searchbox [type="reset"]');t.className="searchbox__reset",0===e.value.length&&(t.className+=" hide")}))}static getInputFromSelector(e){const t=d()(e).filter("input");return t.length?d()(t[0]):null}getAutocompleteSource(e,t){return(s,i)=>{t&&(s=t(s)||s),this.client.search(s).then((t=>{this.queryDataCallback&&"function"==typeof this.queryDataCallback&&this.queryDataCallback(t),e&&(t=e(t)||t),i(v.formatHits(t))}))}}static formatHits(e){const t=p.deepClone(e).map((e=>(e._highlightResult&&(e._highlightResult=p.mergeKeyWithParent(e._highlightResult,"hierarchy")),p.mergeKeyWithParent(e,"hierarchy"))));let s=p.groupBy(t,"lvl0");return d().each(s,((e,t)=>{const i=p.groupBy(t,"lvl1"),n=p.flattenAndFlagFirst(i,"isSubCategoryHeader");s[e]=n})),s=p.flattenAndFlagFirst(s,"isCategoryHeader"),s.map((e=>{const t=v.formatURL(e),s=p.getHighlightedValue(e,"lvl0"),i=p.getHighlightedValue(e,"lvl1")||s,n=p.compact([p.getHighlightedValue(e,"lvl2")||i,p.getHighlightedValue(e,"lvl3"),p.getHighlightedValue(e,"lvl4"),p.getHighlightedValue(e,"lvl5"),p.getHighlightedValue(e,"lvl6")]).join('<span class="aa-suggestion-title-separator" aria-hidden="true"> \u203a </span>'),l=p.getSnippetedValue(e,"content"),a=i&&""!==i||n&&""!==n,r=!i||""===i||i===s,o=n&&""!==n&&n!==i,c=!o&&i&&""!==i&&i!==s,h=!c&&!o,u=e.version;return{isLvl0:h,isLvl1:c,isLvl2:o,isLvl1EmptyOrDuplicate:r,isCategoryHeader:e.isCategoryHeader,isSubCategoryHeader:e.isSubCategoryHeader,isTextOrSubcategoryNonEmpty:a,category:s,subcategory:i,title:n,text:l,url:t,version:u}}))}static formatURL(e){const{url:t,anchor:s}=e;if(t){return-1!==t.indexOf("#")?t:s?`${e.url}#${e.anchor}`:t}return s?`#${e.anchor}`:(console.warn("no anchor nor url for : ",JSON.stringify(e)),null)}static getEmptyTemplate(){return e=>n().compile(u.empty).render(e)}static getSuggestionTemplate(e){const t=e?u.suggestionSimple:u.suggestion,s=n().compile(t);return e=>s.render(e)}handleSelected(e,t,s,i,n){void 0===n&&(n={}),"click"!==n.selectionMethod&&(e.setVal(""),window.location.assign(s.url))}handleShown(e){const t=e.offset().left+e.width()/2;let s=d()(document).width()/2;isNaN(s)&&(s=900);const i=t-s>=0?"algolia-autocomplete-right":"algolia-autocomplete-left",n=t-s<0?"algolia-autocomplete-right":"algolia-autocomplete-left",l=d()(".algolia-autocomplete");l.hasClass(i)||l.addClass(i),l.hasClass(n)&&l.removeClass(n)}}const y=v},15525:()=>{}}]);