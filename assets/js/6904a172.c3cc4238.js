"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3841],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,c=m["".concat(d,".").concat(k)]||m[k]||f[k]||i;return a?n.createElement(c,o(o({ref:e},s),{},{components:a})):n.createElement(c,o({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[m]="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},94241:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="Betaflight Connector Standard",l={unversionedId:"manufacturer/connector-standard",id:"manufacturer/connector-standard",title:"Betaflight Connector Standard",description:"Draft Proposal for Standardized Drone Connectors",source:"@site/docs/manufacturer/connector-standard.mdx",sourceDirName:"manufacturer",slug:"/manufacturer/connector-standard",permalink:"/docs/manufacturer/connector-standard",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manufacturer",previous:{title:"Approved Partner Program",permalink:"/docs/manufacturer/Approved"},next:{title:"How to Create a Target Configuration",permalink:"/docs/manufacturer/creating-an-unified-target"}},d={},p=[{value:"Version Change Register",id:"version-change-register",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Connector Standards",id:"connector-standards",level:2},{value:"Availability",id:"availability",level:3},{value:"JST SH Series as Standard for Connectors.",id:"jst-sh-series-as-standard-for-connectors",level:3},{value:"JST GH Series as Optional Component.",id:"jst-gh-series-as-optional-component",level:3},{value:"ESC Pin Configuration",id:"esc-pin-configuration",level:3},{value:"RX Pin Configuration",id:"rx-pin-configuration",level:3},{value:"GPS Pin Configuration",id:"gps-pin-configuration",level:3},{value:"I2C Pin Configuration",id:"i2c-pin-configuration",level:3},{value:"Analog Camera Pin Configuration",id:"analog-camera-pin-configuration",level:3},{value:"VTX Pin Configuration",id:"vtx-pin-configuration",level:3},{value:"Digital Video Transmitter Pin Configuration",id:"digital-video-transmitter-pin-configuration",level:3},{value:"Logo",id:"logo",level:2},{value:"Betaflight Configurator",id:"betaflight-configurator",level:2},{value:"Conclusion",id:"conclusion",level:2}],s={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"betaflight-connector-standard"},"Betaflight Connector Standard"),(0,r.kt)("p",null,"Draft Proposal for Standardized Drone Connectors"),(0,r.kt)("h2",{id:"version-change-register"},"Version Change Register"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version #"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Revision Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Changes, Reasons, and Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Draft 0.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"27 April 2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial Draft Format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Draft 0.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"08 May 2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added Logo and pinout correction")))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The use of drones has increased significantly in recent years. The drone community has grown rapidly and there are now many different types of drones available on the market.\nThe drone community is also very active and there are many different manufacturers of drones and components. This has led to a wide variety of drones and components that are not compatible with each other.\nThis makes it difficult for users to build and maintain multi-rotor drones. With this increase comes the need for standardization.\nStandardization will help reduce confusion and ensure compatibility between components from different manufacturers, making it easier for users to build and maintain multi-rotor drones.\nStandardization would enable easier compatibility between components from different manufacturers, leading to more efficient and cost-effective and cost-effective industry.\nThis proposal aims to establish a standard for drone connectors that will be wildly adopted by manufacturers and users."),(0,r.kt)("h2",{id:"connector-standards"},"Connector Standards"),(0,r.kt)("h3",{id:"availability"},"Availability"),(0,r.kt)("p",null,"Any harness should be widely available and easy to obtain.\nThe harness should be available from multiple sources and should be easy to obtain from any source."),(0,r.kt)("h3",{id:"jst-sh-series-as-standard-for-connectors"},"JST SH Series as Standard for Connectors."),(0,r.kt)("p",null,"JST-SH is wildly used and reliable connector that proven to be a robust choice for drone applications.\nThe connector should be the standard for all drone manufacturers, ensuring compatibility between components from different manufacturers."),(0,r.kt)("h3",{id:"jst-gh-series-as-optional-component"},"JST GH Series as Optional Component."),(0,r.kt)("p",null,"Some manufacturers also use other firmware, such as Ardupilot or Pixhawk, which have their own ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pixhawk/Pixhawk-Standards"},"standard"),".\nThis connector type is optional for drone manufacturers, allowing them to choose the connector type that best suits their needs as long they provide a harness for both platforms."),(0,r.kt)("h3",{id:"esc-pin-configuration"},"ESC Pin Configuration"),(0,r.kt)("p",null,"An additional 2-pin connector for power (ext. power) can be used for high-powered devices or if the user wants to use an external power source."),(0,r.kt)("p",null,"We recommend using twisted wires to eliminate any confusion about the mirroring of the connector and to ensure that the same wiring order is used on both sides of the connection."),(0,r.kt)("p",null,"The pin configuration for the JST SH connector is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Pin #"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Signal Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V+"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GND"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ground")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Telemetry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Telemetry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Motor 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Motor 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Motor 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Motor 4")))),(0,r.kt)("h3",{id:"rx-pin-configuration"},"RX Pin Configuration"),(0,r.kt)("p",null,"The pin configuration for the JST SH connector is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Pin #"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Signal Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V+"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GND"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ground")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TX")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This connector could also be used for other serial devices")),(0,r.kt)("h3",{id:"gps-pin-configuration"},"GPS Pin Configuration"),(0,r.kt)("p",null,"The pin configuration for the JST SH connector is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Pin #"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Signal Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V+"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GND"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ground")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SDA (optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SCL (optional)")))),(0,r.kt)("h3",{id:"i2c-pin-configuration"},"I2C Pin Configuration"),(0,r.kt)("p",null,"The pin configuration for the JST SH connector is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Pin #"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Signal Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V+"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GND"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ground")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SDA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SCL")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The I2C connector should be used for all I2C devices, including compasses, barometers, and other sensors.\nPins are shared with PB10 and PB11 for TX3 and RX3 so please keep this in mind when using onboard I2C device such as compasses and barometers.")),(0,r.kt)("h3",{id:"analog-camera-pin-configuration"},"Analog Camera Pin Configuration"),(0,r.kt)("p",null,"The pin configuration for the JST SH connector is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Pin #"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Signal Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V+"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GND"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ground")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Video")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TX")))),(0,r.kt)("h3",{id:"vtx-pin-configuration"},"VTX Pin Configuration"),(0,r.kt)("p",null,"The pin configuration for the JST SH connector is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Pin #"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Signal Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V+"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GND"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ground")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Video")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TX")))),(0,r.kt)("h3",{id:"digital-video-transmitter-pin-configuration"},"Digital Video Transmitter Pin Configuration"),(0,r.kt)("p",null,"The current pin configuration for the JST SH connector is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Pin #"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Signal Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V+"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GND"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ground")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GND"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ground (DJI)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signal 3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SBUS (DJI)")))),(0,r.kt)("h2",{id:"logo"},"Logo"),(0,r.kt)("p",null,"The provided logo should be used to identify the connector as a Betaflight standardized connector.\nThe logo should be used on all components that use the standardized connector system and can be used on PCBs, packaging, and other marketing materials.\nThis way users know that the component is compatible with other components that use the standardized connector system."),(0,r.kt)("svg",{width:"32",height:"22",viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,r.kt)("path",{d:"M9.00002 1C18 1 18 11 9.00003 11C18 11 18 21 9.00001 21",stroke:"black","stroke-width":"2"}),(0,r.kt)("line",{x1:"8.06026e-09",y1:"1",x2:"9",y2:"1",stroke:"black","stroke-width":"2"}),(0,r.kt)("line",{x1:"8.06026e-09",y1:"13",x2:"6",y2:"13",stroke:"black","stroke-width":"2"}),(0,r.kt)("line",{x1:"8.06026e-09",y1:"5",x2:"6",y2:"5",stroke:"black","stroke-width":"2"}),(0,r.kt)("line",{x1:"8.06026e-09",y1:"17",x2:"6",y2:"17",stroke:"black","stroke-width":"2"}),(0,r.kt)("line",{x1:"8.06026e-09",y1:"9",x2:"6",y2:"9",stroke:"black","stroke-width":"2"}),(0,r.kt)("line",{x1:"31",x2:"31",y2:"9",stroke:"black","stroke-width":"2"}),(0,r.kt)("line",{x1:"27",y1:"7",x2:"27",y2:"16",stroke:"black","stroke-width":"2"}),(0,r.kt)("line",{x1:"8.06026e-09",y1:"21",x2:"9",y2:"21",stroke:"black","stroke-width":"2"}),(0,r.kt)("line",{x1:"8",y1:"11",x2:"9",y2:"11",stroke:"black","stroke-width":"2"}),(0,r.kt)("line",{x1:"31",y1:"1",x2:"9",y2:"1",stroke:"black","stroke-width":"2"}),(0,r.kt)("line",{x1:"31",y1:"8",x2:"20",y2:"8",stroke:"black","stroke-width":"2"}),(0,r.kt)("line",{x1:"27",y1:"15",x2:"20",y2:"15",stroke:"black","stroke-width":"2"}),(0,r.kt)("line",{x1:"21",y1:"14",x2:"21",y2:"22",stroke:"black","stroke-width":"2"}),(0,r.kt)("line",{x1:"21",y1:"21",x2:"9",y2:"21",stroke:"black","stroke-width":"2"})),(0,r.kt)("h2",{id:"betaflight-configurator"},"Betaflight Configurator"),(0,r.kt)("p",null,"The Betaflight configurator firmware flasher tab provides a link to each board in our documentation.\nThis link will take users to the documentation for the board they have selected."),(0,r.kt)("p",null,"Each boards documentation section should include a list of components that are compatible with the standardized connector system.\nDocumentation should include schematics, pinouts, and other information that will help users build and maintain their drones."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The standardized connector system proposed in this document will help reduce confusion and ensure compatibility between components from different manufacturers, making it easier for users to build and maintain multi-rotor drones.\nWe recommend that drone manufacturers and component manufacturers adopt the Betaflight standardized connector system to benefit the entire drone community."))}m.isMDXComponent=!0}}]);