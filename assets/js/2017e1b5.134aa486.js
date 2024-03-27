"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[763],{11637:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(85893),t=n(11151);const r={},s="LUXF4OSD",a={id:"wiki/boards/archive/LUXF4OSD",title:"LUXF4OSD",description:"This is an AIO Flight Controller F4 FC with OSD and 30A BLHeli_32 ESC.",source:"@site/docs/wiki/boards/archive/LUXF4OSD.md",sourceDirName:"wiki/boards/archive",slug:"/wiki/boards/archive/LUXF4OSD",permalink:"/docs/wiki/boards/archive/LUXF4OSD",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"wiki",previous:{title:"KROOZX",permalink:"/docs/wiki/boards/archive/KROOZX"},next:{title:"Lux Mini F7",permalink:"/docs/wiki/boards/archive/LUXMINIF7"}},d={},c=[{value:"iBus and SmartAudio",id:"ibus-and-smartaudio",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"luxf4osd",children:"LUXF4OSD"}),"\n",(0,o.jsxs)(i.p,{children:["This is an AIO Flight Controller F4 FC with OSD and 30A BLHeli_32 ESC.\nMore information on this FC can be found here:\n",(0,o.jsx)(i.a,{href:"http://www.multirotorguide.com/news/lumenier-alpha-aio-flight-controller-f4-fc-with-osd-and-30a-blheli_32-esc/",children:"http://www.multirotorguide.com/news/lumenier-alpha-aio-flight-controller-f4-fc-with-osd-and-30a-blheli_32-esc/"})]}),"\n",(0,o.jsx)(i.h2,{id:"ibus-and-smartaudio",children:"iBus and SmartAudio"}),"\n",(0,o.jsx)(i.p,{children:"As this FC has only one UART (UART6) provided as pins, it can be tricky to get iBus (that needs a UART RX) and SmartAudio working at the same time. Here is a solution to get this accomplished:"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsx)(i.li,{children:"Solder iBus to the Pad labled RX6 and SmartAudio to the Pad labeled TX6."}),"\n",(0,o.jsx)(i.li,{children:"Configure iBus in Betaflight as usual for Port 6"}),"\n",(0,o.jsx)(i.li,{children:"Run the following commands in CLI:"}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.code,{children:"resource PWM 3 NONE"})}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.code,{children:"resource SERIAL_TX 6 NONE"})}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.code,{children:"resource SERIAL_TX 11 C06"})}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.code,{children:"feature SOFTSERIAL"})}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.code,{children:"save"})}),"\n",(0,o.jsxs)(i.ol,{start:"4",children:["\n",(0,o.jsx)(i.li,{children:"Now you should find another soft-serial on your ports-tab that you can use to configure SmartAudio"}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>s});var o=n(67294);const t={},r=o.createContext(t);function s(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);