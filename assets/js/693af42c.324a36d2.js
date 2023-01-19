"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,g=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return r?o.createElement(g,i(i({ref:t},p),{},{components:r})):o.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={},i=void 0,l={unversionedId:"old/configuration/Mass-Storage-Device-(MSC)-Support",id:"old/configuration/Mass-Storage-Device-(MSC)-Support",title:"Mass-Storage-Device-(MSC)-Support",description:"Mass storage device support allows the micro SD card or the flash chip of your flight controller to be mounted as an external storage device on your PC. This allows for easy drag / drop download of log files.",source:"@site/docs/old/configuration/Mass-Storage-Device-(MSC)-Support.md",sourceDirName:"old/configuration",slug:"/old/configuration/Mass-Storage-Device-(MSC)-Support",permalink:"/docs/old/configuration/Mass-Storage-Device-(MSC)-Support",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Launch-Control",permalink:"/docs/old/configuration/Launch-Control"},next:{title:"Paralyze-for-team-races",permalink:"/docs/old/configuration/Paralyze-for-team-races"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Mass storage device support allows the micro SD card or the flash chip of your flight controller to be mounted as an external storage device on your PC. This allows for easy drag / drop download of log files.\nFor onboard flash chips, downloading this way is a lot faster than the 'legacy' way of downloading logs through the configurator."),(0,n.kt)("p",null,"Mass storage device support is currently only available on F4 / G4 / F7 / H7 boards."),(0,n.kt)("p",null,"To enable mass storage device support, the flight controller has to be rebooted into mass storage device mode by typing ",(0,n.kt)("inlineCode",{parentName:"p"},"msc")," into the CLI and hitting enter. After this, normal operation of the flight controller will be stopped until it is rebooted by power cycling it."))}u.isMDXComponent=!0}}]);