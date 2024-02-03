"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3085],{39407:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(36905),l=t(93743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=t(85893);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,s.jsx)("div",{className:(0,a.Z)(i.tableOfContents,"thin-scrollbar",n),children:(0,s.jsx)(l.Z,{...t,linkClassName:r,linkActiveClassName:c})})}},93743:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(67294),l=t(86668);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):a.push(l)})),a}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>r(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:i,maxHeadingLevel:s}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let l=n;l<=t;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:s}),o=c(r,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var m=t(39960),u=t(85893);function f(e){let{toc:n,className:t,linkClassName:a,isChild:l}=e;return n.length?(0,u.jsx)("ul",{className:l?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const v=a.memo(f);function h(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...f}=e;const h=(0,l.L)(),g=o??h.tableOfContents.minHeadingLevel,x=m??h.tableOfContents.maxHeadingLevel,L=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>s({toc:i(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:g,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:x}}),[r,c,g,x])),(0,u.jsx)(v,{toc:L,className:t,linkClassName:r,...f})}},4382:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});t(67294);var a=t(86010),l=t(1944),i=t(35281),s=t(53553),r=t(27779),c=t(39407);const o={mdxPageWrapper:"mdxPageWrapper_yV3F"};var d=t(85893);function m(e){const{content:n}=e,{metadata:{title:t,description:m,frontMatter:u}}=n,{wrapperClassName:f,hide_table_of_contents:v}=u;return(0,d.jsxs)(l.FG,{className:(0,a.Z)(f??i.k.wrapper.mdxPages,i.k.page.mdxPage),children:[(0,d.jsx)(l.d,{title:t,description:m}),(0,d.jsx)(s.Z,{children:(0,d.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,d.jsxs)("div",{className:(0,a.Z)("row",o.mdxPageWrapper),children:[(0,d.jsx)("div",{className:(0,a.Z)("col",!v&&"col--8"),children:(0,d.jsx)("article",{class:"theme-doc-markdown markdown",children:(0,d.jsx)(r.Z,{children:(0,d.jsx)(n,{})})})}),!v&&n.toc.length>0&&(0,d.jsx)("div",{className:"col col--2",children:(0,d.jsx)(c.Z,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level})})]})})})]})}}}]);