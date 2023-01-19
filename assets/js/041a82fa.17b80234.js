"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="Integrated Yaw",l={unversionedId:"documentation/IntegratedYaw",id:"documentation/IntegratedYaw",title:"Integrated Yaw",description:"Overview",source:"@site/docs/documentation/IntegratedYaw.md",sourceDirName:"documentation",slug:"/documentation/IntegratedYaw",permalink:"/docs/documentation/IntegratedYaw",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/documentation/Installation"},next:{title:"Cleanflight",permalink:"/docs/documentation/Introduction"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrated-yaw"},"Integrated Yaw"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Integrated Yaw is a feature which corrects a fundamental issue with quad control: while the pitch and roll axis are controlled by the thrust differentials the props generate yaw is different. Yaw gyro changes happen primarily due to inertia when the RPM of the motors change. A constant acceleration of yaw requires a constant rate of increase/decrease in the RPM of the yaw motor pairs."),(0,a.kt)("p",null,"This means that on Yaw I has the effect of P and P the effect of D. FF is a control element that adds impetus based on the acceleration in setpoint rate."),(0,a.kt)("p",null,"This results in several issues on yaw. Typically yaw will react very fast initially, then fall back and catch up again over time."),(0,a.kt)("p",null,"Integrated Yaw fixes this by integrating the output of the yaw pid before applying them to the mixer. This normalizes the way the pids work. You can now tune as any other axis. It requires use of absolute control since no I is needed with Integrated Yaw. "),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"From Betaflight 4.1.0 / Betaflight configurator 10.6.0 on Integrated Yaw can be set up in configurator, in the 'PID Tuning' tab."),(0,a.kt)("p",null,"As a fallback, these are the CLI commands to enable it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"set use_integrated_yaw=on\nset iterm_rotation=off\nset abs_control_gain=10\nset p_yaw=30\nset d_yaw=20\nset i_yaw=0\nset f_yaw=60\n")),(0,a.kt)("p",null,"The yaw pids serve as starting point and might need adjustment. Make sure I is low or zero since significant I leads to strong oscillations. Pitch and roll might require slight retuning - primarily reducing I a bit since absolute control acts similar to a second I term."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To be noted:")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"i_yaw")," is not set to ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", then the following additional command is needed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"set iterm_relax=RPY\n")))}p.isMDXComponent=!0}}]);