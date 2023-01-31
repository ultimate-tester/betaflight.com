"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5326],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=p(a),k=n,f=u["".concat(d,".").concat(k)]||u[k]||m[k]||o;return a?r.createElement(f,l(l({ref:e},s),{},{components:a})):r.createElement(f,l({ref:e},s))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[u]="string"==typeof t?t:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},58853:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:21},l="Firmware Flasher Tab",i={unversionedId:"wiki/configurator/firmware-flasher-tab",id:"wiki/configurator/firmware-flasher-tab",title:"Firmware Flasher Tab",description:"Here you update your firmware and select the features you require for you build.",source:"@site/docs/wiki/configurator/firmware-flasher-tab.mdx",sourceDirName:"wiki/configurator",slug:"/wiki/configurator/firmware-flasher-tab",permalink:"/docs/wiki/configurator/firmware-flasher-tab",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"wiki",previous:{title:"CLI Tab",permalink:"/docs/wiki/configurator/cli-tab"},next:{title:"Power & Battery",permalink:"/docs/wiki/configurator/power-tab"}},d={},p=[{value:"Preparation",id:"preparation",level:2},{value:"Flashing",id:"flashing",level:2},{value:"Board Defines",id:"board-defines",level:3},{value:"Radio Protocols",id:"radio-protocols",level:3},{value:"Telemetry Protocols",id:"telemetry-protocols",level:3},{value:"Other Options",id:"other-options",level:3},{value:"Motor Protocol",id:"motor-protocol",level:3},{value:"Custom Defines",id:"custom-defines",level:3},{value:"Local Flashing",id:"local-flashing",level:2},{value:"Troubeshooting",id:"troubeshooting",level:2}],s={toc:p};function u(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"firmware-flasher-tab"},"Firmware Flasher Tab"),(0,n.kt)("p",null,"Here you update your firmware and select the features you require for you build."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The Firmware contains only hardware support. Board configuration defines board specific hardware. With the Build Configuration you can add or remove features you need.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Firmware Flasher tab",src:a(31474).Z,width:"1635",height:"782"})),(0,n.kt)("h2",{id:"preparation"},"Preparation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Upgrade to the latest Betaflight Configurator.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Before upgrading always save a ",(0,n.kt)("b",null,"diff")," of the current configuration. Using ",(0,n.kt)("b",null,"status")," command you get some info about hardware being used.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can also save a ",(0,n.kt)("b",null,"diff")," using Presets tab using the ",(0,n.kt)("b",null,"save backup")," button.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Except ",(0,n.kt)("b",null,"master")," and ",(0,n.kt)("b",null,"profile")," most settings should be able to migrate from a previous version."))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please follow these steps in order to be able to restore in the event something is not supported.",(0,n.kt)("br",null),(0,n.kt)("br",null),"\nConfigurator only supports Betaflight version 4.0 and newer. Older versions only have access to the firmware flasher tab or CLI.")),(0,n.kt)("h2",{id:"flashing"},"Flashing"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Release"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Stable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Candidate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Preview")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Development"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Test")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"After selecting a build type select the board using the list or use the ",(0,n.kt)("b",null,"Auto-detect")," button."),(0,n.kt)("li",{parentName:"ul"},"Always use ",(0,n.kt)("b",null,"Full Chip Erase")," unless instructed otherwise.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Using ",(0,n.kt)("b",null,"Show Release Candidates")," with ",(0,n.kt)("b",null,"Expert Mode")," enabled gives access to development builds.")),(0,n.kt)("h3",{id:"board-defines"},"Board Defines"),(0,n.kt)("p",null,"We have defines for ",(0,n.kt)("b",null,"ACC"),", ",(0,n.kt)("b",null,"BARO"),", ",(0,n.kt)("b",null,"FLASH"),", ",(0,n.kt)("b",null,"GYRO"),", ",(0,n.kt)("b",null,"MAX7456"),", ",(0,n.kt)("b",null,"FLASH")," or ",(0,n.kt)("b",null,"SDCARD"),"  in the board configuration."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If your board pheriperals are not recognized please help us add the required configuration details."),(0,n.kt)("br",null),"Reach out on our Discord or create an issue in the Betaflight unified targets repo.",(0,n.kt)("br",null),"To get the required information follow this procedure:",(0,n.kt)("br",null),(0,n.kt)("br",null),"1. Flash your board with the ",(0,n.kt)("b",null,"Core Only")," switch enabled",(0,n.kt)("br",null),"2. Go to the CLI tab and click the ",(0,n.kt)("b",null,"Submit Support Data")," button.",(0,n.kt)("br",null),"3. With this generated support ",(0,n.kt)("b",null,"ID")," we have all required information to update board configuration files."),(0,n.kt)("h3",{id:"radio-protocols"},"Radio Protocols"),(0,n.kt)("p",null,"Select the receiver wire protocol used. The most common are:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Protocol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Receiver"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CRSF"),(0,n.kt)("td",{parentName:"tr",align:"left"},"TBS Crossfire or ExpressLRS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GHST"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Immersion RC Ghost")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SBUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"FrSky or Futaba")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"EXPRESSLRS (SPI) receivers uses CRSF protocol.",(0,n.kt)("br",null),"\nFrSky (SPI) receivers uses SBUS or FPORT protocol depending on the receiver firmware used.")),(0,n.kt)("h3",{id:"telemetry-protocols"},"Telemetry Protocols"),(0,n.kt)("p",null,"Select the telemetry protocol used. For CRSF, ELRS or GHST protocols this is included by default to ease configuraton."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"ExpressLRS uses CRSF protocol. SPI configuration is done in the board configuration.")),(0,n.kt)("h3",{id:"other-options"},"Other Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AKK (SA Fix)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Smartaudio patch for AKK hardware")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"DASHBOARD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Post-flight overview screen")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FLASH"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable blackbox Flash Tools")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GPS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable GPS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LED Strip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable 32 LEDs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LED Strip 64"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable 64 LEDs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MAG"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable magnetometer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"OSD_SD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable SD OSD (onboard MAX7456 required)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"OSD_HD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable HD OSD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"PIN IO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable PINIO")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"VTX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable VTX")))),(0,n.kt)("h3",{id:"motor-protocol"},"Motor Protocol"),(0,n.kt)("p",null,"Select ESC protocol being used. DShot is default."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"When needed additional protocols like ",(0,n.kt)("b",null,"PWM")," or ",(0,n.kt)("b",null,"SERVOS")," please add them using Custom Defines.")),(0,n.kt)("h3",{id:"custom-defines"},"Custom Defines"),(0,n.kt)("p",null,"You can add a custom define to bake a feature into the build which would not fit before:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Define"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ACRO_TRAINER"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adds Acro Trainer support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BATTERY_CONTINUE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"See ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/betaflight/betaflight/pull/11084"},"#11084"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CAMERA_CONTROL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adds Camera Control")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"EMFAT_AUTORUN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adds FAT emulation for onboard flash or MSC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"EMFAT_ICON"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adds (Windows) icon for FAT Emulation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ESCSERIAL_SIMONK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adds support for SimonK ESC Firmware")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FRSKYOSD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adds FrSky OSD support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GPS_PLUS_CODES"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use Open Location Code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SERIAL_4WAY_SK_BOOTLOADER"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Allow flashing APD / BlHeli ESC using serial 4way")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SERVOS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add Servo support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"VARIO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add Vario support")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Expert settings needs to enabled to use other options in ",(0,n.kt)("b",null,"Custom Defines")," field."),(0,n.kt)("p",{parentName:"admonition"},"To access ",(0,n.kt)("b",null,"Expert Settings")," you need to enable ",(0,n.kt)("b",null,"show releases candidates"),".")),(0,n.kt)("h2",{id:"local-flashing"},"Local Flashing"),(0,n.kt)("p",null,"To flash local development firmware with optional custom configuration use the ",(0,n.kt)("b",null,"Load Firmware local")," button to load board configuration or click ",(0,n.kt)("inlineCode",{parentName:"p"},"Auto-detect")," or when in ",(0,n.kt)("inlineCode",{parentName:"p"},"DFU")," mode select a board manually."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If using a local configuration file use the same button again to load a local hex file.")),(0,n.kt)("h2",{id:"troubeshooting"},"Troubeshooting"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Use a good quality data cable not a power cable."),(0,n.kt)("li",{parentName:"ul"},"USB hubs or OTG cables are sometimes needed with recent computers and in other cases they can cause issues."),(0,n.kt)("li",{parentName:"ul"},"Try disconnecting all cables from your PC first, try rebooting, other ports, upgrade system drivers. Remove other USB connections."),(0,n.kt)("li",{parentName:"ul"},"Try DFU mode (use boot button on FC while plugging in, use ",(0,n.kt)("b",null,"Activate Boot Loader / DFU")," button in setup tab or use ",(0,n.kt)("b",null,"bl")," command in CLI."),(0,n.kt)("li",{parentName:"ul"},"Sometimes peripherals on the flight controller such as receivers or GPS devices can hijack port communication requiring de-soldering."),(0,n.kt)("li",{parentName:"ul"},"Linux needs configuration to allow flashing."),(0,n.kt)("li",{parentName:"ul"},"MacOS or Windows do not need any drivers."),(0,n.kt)("li",{parentName:"ul"},"If it still doesn't work try IRC Driver Fix or Zadig on Windows platform."))))}u.isMDXComponent=!0},31474:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/betaflight_configurator_firmware_flasher_tab-00b92ebc6860d934b4bd042f68aa8664.png"}}]);