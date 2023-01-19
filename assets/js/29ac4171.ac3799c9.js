"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7762],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38103:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},l="Flytower F4 v2",s={unversionedId:"boards/FLYTOWERF4V2",id:"boards/FLYTOWERF4V2",title:"Flytower F4 v2",description:"Description",source:"@site/docs/boards/FLYTOWERF4V2.md",sourceDirName:"boards",slug:"/boards/FLYTOWERF4V2",permalink:"/docs/boards/FLYTOWERF4V2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flip32 F3 OSD",permalink:"/docs/boards/FLIP32-F3-OSD"},next:{title:"FRSKYF3",permalink:"/docs/boards/FRSKYF3"}},i={},c=[{value:"Description",id:"description",level:2},{value:"MCU, Sensors and Features",id:"mcu-sensors-and-features",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Features",id:"features",level:3},{value:"Manufacturers and Distributors",id:"manufacturers-and-distributors",level:2},{value:"Designers",id:"designers",level:2},{value:"Maintainers",id:"maintainers",level:2},{value:"Similar Targets",id:"similar-targets",level:2},{value:"Variants",id:"variants",level:2},{value:"FAQ &amp; Known Issues",id:"faq--known-issues",level:2},{value:"Other Resources",id:"other-resources",level:2},{value:"Image",id:"image",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flytower-f4-v2"},"Flytower F4 v2"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"All in one created by Exuav (",(0,a.kt)("a",{parentName:"p",href:"https://www.facebook.com/EXUAV/"},"https://www.facebook.com/EXUAV/"),"), includes: FC (F4), VTX (25mw - 400mW), OSD (Betaflight), PDB, Dshot ESC (40A), BlackBox (SD)."),(0,a.kt)("h2",{id:"mcu-sensors-and-features"},"MCU, Sensors and Features"),(0,a.kt)("h3",{id:"hardware"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MCU: STM32F405"),(0,a.kt)("li",{parentName:"ul"},"IMU: ICM-20608"),(0,a.kt)("li",{parentName:"ul"},"IMU Interrupt: SPI"),(0,a.kt)("li",{parentName:"ul"},"VCP: YES"),(0,a.kt)("li",{parentName:"ul"},"Hardware UARTS: 1"),(0,a.kt)("li",{parentName:"ul"},"OSD: YES, BetaFlight OSD (STM32 controls OSD chip over SPI in DMA mode)."),(0,a.kt)("li",{parentName:"ul"},"Blackbox: Yes (32GB SD Card Support)"),(0,a.kt)("li",{parentName:"ul"},"PPM/UART Shared: UART1, UART3, UART6, SOFTSERIAL x 2"),(0,a.kt)("li",{parentName:"ul"},"Battery Voltage Sensor: Yes"),(0,a.kt)("li",{parentName:"ul"},"Integrated Voltage Regulator: Yes"),(0,a.kt)("li",{parentName:"ul"},"Buttons: F4 Boot mode"),(0,a.kt)("li",{parentName:"ul"},"Size: 36x36mm board with 30.5mm mounting holes.")),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("p",null,"\u2605Practical -Easy to access connectors\n\u2605Configurable -Choose to use connectors\n\u2605Stackable -Mount our 4 in 1 ESC\n\u2605Compact -Only 36x36x15mm.(Add air-cooling finMAX 36",(0,a.kt)("em",{parentName:"p"},"36"),"20MM)\n\u2605Weight -26.3grams and 2 stack boards\n\u2605Professional -Symmetrical, Neat and Tidy and Easy to install in any racing drone\n\u260536x36mm board with 30.5mm mounting holes\n\u2605STM32 F405MCU, Runs Betaflight firmware(supported from v3.1)\n\u2605SD card slot\n\u2605Use ICM-20608as Acc & gyroover SPI Bus\n\u2605STM32 controls OSD chip over SPI in DMA mode, less CPU using, faster rate\n\u2605Micro USB socket\n\u26051x 6pins JST-SH sockets (PPM, PWM, SERIAL RX, GPIO, ADC, 3V, 5V, GND)\n\u2605The on-board pins areeasily connected to ournext 4 in 1 ESC &PDB board\n\u2605Internal VTX (40CH)(25/400MW adjustable power video transmission)\n\u2605Flight Control canadjustmentVTXdirectlythroughOSD\uff08power, frequency\uff09\n\u26051x 4pins JST-SH sockets with BUZZER & WS2811 RGB LED\n\u26051x 4pins JST-SH socket for Video & Audio transmission\n\u26051 IPX sockets easy connect the external antenna\n\u26054x 3 Pads for motor output\n\u26051x2 Pads for batter in easy solde"),(0,a.kt)("h2",{id:"manufacturers-and-distributors"},"Manufacturers and Distributors"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.exuavrc.com"},"www.exuavrc.com"),"\n",(0,a.kt)("a",{parentName:"p",href:"http://www.banggood.com/F4-Tower-Flight-Controller-Build-In-Accelerometer-Gyroscope-with-PDB-Buzzer-For-RC-Racer-p-1108717.html"},"http://www.banggood.com/F4-Tower-Flight-Controller-Build-In-Accelerometer-Gyroscope-with-PDB-Buzzer-For-RC-Racer-p-1108717.html")),(0,a.kt)("h2",{id:"designers"},"Designers"),(0,a.kt)("p",null,"Exuav"),(0,a.kt)("h2",{id:"maintainers"},"Maintainers"),(0,a.kt)("p",null,"Exuav\nFrancisco Perea (fncisco)"),(0,a.kt)("h2",{id:"similar-targets"},"Similar Targets"),(0,a.kt)("p",null,"Board---FishDroneF4"),(0,a.kt)("h2",{id:"variants"},"Variants"),(0,a.kt)("p",null,"Differences:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Esc 4 in 1"),(0,a.kt)("li",{parentName:"ul"},"More options to adjust VTX.")),(0,a.kt)("h2",{id:"faq--known-issues"},"FAQ & Known Issues"),(0,a.kt)("p",null,"None."),(0,a.kt)("h2",{id:"other-resources"},"Other Resources"),(0,a.kt)("p",null,"Setup Guide:\n",(0,a.kt)("a",{parentName:"p",href:"https://www.dropbox.com/s/0jjxp2tivvswze1/Fly%20FishTower%20F4%20Instructions%20V1.2.pdf?dl=0"},"https://www.dropbox.com/s/0jjxp2tivvswze1/Fly%20FishTower%20F4%20Instructions%20V1.2.pdf?dl=0")),(0,a.kt)("p",null,"Rcgroups Thread:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.rcgroups.com/forums/showthread.php?2813391-Flytower-F4-Flight-Controller-25-200-400mW-Switchable-FPV-VTX-OSD-Dshot-40A-4in1-ESC"},"https://www.rcgroups.com/forums/showthread.php?2813391-Flytower-F4-Flight-Controller-25-200-400mW-Switchable-FPV-VTX-OSD-Dshot-40A-4in1-ESC")),(0,a.kt)("h2",{id:"image"},"Image"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.banggood.com/F4-Tower-Flight-Controller-Build-In-Accelerometer-Gyroscope-with-PDB-Buzzer-For-RC-Racer-p-1108717.html?p=3T212374947582016110"},"http://www.banggood.com/F4-Tower-Flight-Controller-Build-In-Accelerometer-Gyroscope-with-PDB-Buzzer-For-RC-Racer-p-1108717.html?p=3T212374947582016110")))}p.isMDXComponent=!0}}]);