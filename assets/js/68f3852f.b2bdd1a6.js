"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),c=o,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},99034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={},i="GPS",l={unversionedId:"documentation/Gps",id:"documentation/Gps",title:"GPS",description:"GPS features in Cleanflight are experimental.  Please share your findings with the developers.",source:"@site/docs/documentation/Gps.md",sourceDirName:"documentation",slug:"/documentation/Gps",permalink:"/docs/documentation/Gps",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/documentation/Getting Started"},next:{title:"G-Tune instructions.",permalink:"/docs/documentation/Gtune"}},p={},u=[{value:"Configuration",id:"configuration",level:2},{value:"GPS Provider",id:"gps-provider",level:3},{value:"GPS Auto configuration",id:"gps-auto-configuration",level:3},{value:"SBAS",id:"sbas",level:3},{value:"GPS Receiver Configuration",id:"gps-receiver-configuration",level:2},{value:"UBlox GPS manual configuration",id:"ublox-gps-manual-configuration",level:3},{value:"UBlox Navigation model",id:"ublox-navigation-model",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Ublox",id:"ublox",level:3},{value:"NEO-M8",id:"neo-m8",level:4},{value:"NEO-7",id:"neo-7",level:4},{value:"NEO-6",id:"neo-6",level:4},{value:"Serial NMEA",id:"serial-nmea",level:3},{value:"MediaTek",id:"mediatek",level:4}],d={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gps"},"GPS"),(0,o.kt)("p",null,"GPS features in Cleanflight are experimental.  Please share your findings with the developers."),(0,o.kt)("p",null,"GPS works best if the GPS receiver is mounted above and away from other sources of interference."),(0,o.kt)("p",null,"The compass/mag sensor should be well away from sources of magnetic interference, e.g. keep it away from power wires, motors, ESCs."),(0,o.kt)("p",null,"Two GPS protocols are supported. NMEA text and UBLOX binary."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Enable the GPS from the CLI as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/documentation/Serial"},"configure a serial port to use for GPS.")," "),(0,o.kt)("li",{parentName:"ol"},"set your GPS baud rate"),(0,o.kt)("li",{parentName:"ol"},"enable the ",(0,o.kt)("inlineCode",{parentName:"li"},"feature GPS")),(0,o.kt)("li",{parentName:"ol"},"set the ",(0,o.kt)("inlineCode",{parentName:"li"},"gps_provider")),(0,o.kt)("li",{parentName:"ol"},"connect your GPS to the serial port configured for GPS."),(0,o.kt)("li",{parentName:"ol"},"save and reboot.")),(0,o.kt)("p",null,"Note:  GPS packet loss has been observed at 115200.  Try using 57600 if you experience this."),(0,o.kt)("p",null,"For the connections step check the Board documentation for pins and port numbers."),(0,o.kt)("h3",{id:"gps-provider"},"GPS Provider"),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"gps_provider")," appropriately, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"set gps_provider=UBLOX")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NMEA")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UBLOX")))),(0,o.kt)("h3",{id:"gps-auto-configuration"},"GPS Auto configuration"),(0,o.kt)("p",null,"When using UBLOX it is a good idea to use GPS auto configuration so your FC gets the GPS messages it needs."),(0,o.kt)("p",null,"Enable GPS auto configuration as follows ",(0,o.kt)("inlineCode",{parentName:"p"},"set gps_auto_config=ON"),"."),(0,o.kt)("p",null,"If you are not using GPS auto configuration then ensure your GPS receiver sends out the correct messages at the right frequency.  See below for manual UBlox settings."),(0,o.kt)("h3",{id:"sbas"},"SBAS"),(0,o.kt)("p",null,"When using a UBLOX GPS the SBAS mode can be configured using ",(0,o.kt)("inlineCode",{parentName:"p"},"gps_sbas_mode"),"."),(0,o.kt)("p",null,"The default is AUTO."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Region"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AUTO"),(0,o.kt)("td",{parentName:"tr",align:null},"Global")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"EGNOS"),(0,o.kt)("td",{parentName:"tr",align:null},"Europe")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"WAAS"),(0,o.kt)("td",{parentName:"tr",align:null},"North America")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MSAS"),(0,o.kt)("td",{parentName:"tr",align:null},"Asia")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GAGAN"),(0,o.kt)("td",{parentName:"tr",align:null},"India")))),(0,o.kt)("p",null,"If you use a regional specific setting you may achieve a faster GPS lock than using AUTO."),(0,o.kt)("p",null,"This setting only works when ",(0,o.kt)("inlineCode",{parentName:"p"},"gps_auto_config=ON")),(0,o.kt)("h2",{id:"gps-receiver-configuration"},"GPS Receiver Configuration"),(0,o.kt)("p",null,"UBlox GPS units can either be configured using the FC or manually."),(0,o.kt)("h3",{id:"ublox-gps-manual-configuration"},"UBlox GPS manual configuration"),(0,o.kt)("p",null,"Use UBox U-Center and connect your GPS to your computer.  The CLI ",(0,o.kt)("inlineCode",{parentName:"p"},"gpspassthrough")," command may be of use if you do not have a spare USART to USB adapter."),(0,o.kt)("p",null,"Note that many boards will not provide +5V from USB to the GPS module, such as the SPRacingF3; if you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"gpspassthrough")," you may need to connect a BEC to the controller if your board permits it, or use a standalone UART adapter. Check your board documentation to see if your GPS port is powered from USB."),(0,o.kt)("p",null,"Display the Packet Console (so you can see what messages your receiver is sending to your computer)."),(0,o.kt)("p",null,"Display the Configation View."),(0,o.kt)("p",null,"Navigate to CFG (Configuration)"),(0,o.kt)("p",null,"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Revert to default configuration"),".\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Send"),"."),(0,o.kt)("p",null,"At this point you might need to disconnect and reconnect at the default baudrate - probably 9600 baud."),(0,o.kt)("p",null,"Navigate to PRT (Ports)"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"Target")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"1 - Uart 1"),"\nSet ",(0,o.kt)("inlineCode",{parentName:"p"},"Protocol In")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"0+1+2"),"\nSet ",(0,o.kt)("inlineCode",{parentName:"p"},"Protocol Out")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"0+1"),"\nSet ",(0,o.kt)("inlineCode",{parentName:"p"},"Buadrate")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"57600")," ",(0,o.kt)("inlineCode",{parentName:"p"},"115200"),"\nPress ",(0,o.kt)("inlineCode",{parentName:"p"},"Send")),(0,o.kt)("p",null,'This will immediatly "break" communication to the GPS. Since you haven\'t saved the new baudrate setting to the non-volatile memory you need to change the baudrate you communicate to the GPS without resetting the GPS. So ',(0,o.kt)("inlineCode",{parentName:"p"},"Disconnect"),", Change baud rate to match, then ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect"),". "),(0,o.kt)("p",null,"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"PRT")," in the Configuration view again and inspect the packet console to make sure messages are being sent and acknowledged."),(0,o.kt)("p",null,"Next, to ensure the FC doesn't waste time processing unneeded messages, click on ",(0,o.kt)("inlineCode",{parentName:"p"},"MSG")," and enable the following on UART1 alone with a rate of 1. When changing message target and rates remember to click ",(0,o.kt)("inlineCode",{parentName:"p"},"Send")," after changing each message.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAV-POSLLH\nNAV-DOP\nNAV-SOL\nNAV-VELNED\nNAV-TIMEUTC\n")),(0,o.kt)("p",null,"Enable the following on UART1 with a rate of 5, to reduce bandwidth and load on the FC."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAV-SVINFO\n")),(0,o.kt)("p",null,"All other message types should be disabled."),(0,o.kt)("p",null,"Next change the global update rate, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Rate (Rates)")," in the Configuration view."),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"Measurement period")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," ms.\nSet ",(0,o.kt)("inlineCode",{parentName:"p"},"Navigation rate")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),".\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Send"),"."),(0,o.kt)("p",null,"This will cause the GPS receive to send the require messages out 10 times a second.  If your GPS receiver cannot be set to use ",(0,o.kt)("inlineCode",{parentName:"p"},"100"),"ms try ",(0,o.kt)("inlineCode",{parentName:"p"},"200"),"ms (5hz) - this is less precise."),(0,o.kt)("p",null,"Next change the mode, click ",(0,o.kt)("inlineCode",{parentName:"p"},"NAV5 (Navigation 5)")," in the Configuration View."),(0,o.kt)("p",null,"Set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Dynamic Model")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Pedestrian")," and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Send"),"."),(0,o.kt)("p",null,"Next change the SBAS settings.  Click ",(0,o.kt)("inlineCode",{parentName:"p"},"SBAS (SBAS Settings)")," in the Configuration View."),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"Subsystem")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Enabled"),".\nSet ",(0,o.kt)("inlineCode",{parentName:"p"},"PRN Codes")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Auto-Scan"),".\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Send"),"."),(0,o.kt)("p",null,"Finally, we need to save the configuration."),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"CFG (Configuration")," in the Configuration View."),(0,o.kt)("p",null,"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Save current configuration")," and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Send"),"."),(0,o.kt)("h3",{id:"ublox-navigation-model"},"UBlox Navigation model"),(0,o.kt)("p",null,"Cleanflight will use ",(0,o.kt)("inlineCode",{parentName:"p"},"Pedestrian")," when gps auto config is used."),(0,o.kt)("p",null,"From the UBlox documentation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pedestrian - Applications with low acceleration and speed, e.g. how a pedestrian would move. Low acceleration assumed. MAX Altitude ","[m]",": 9000, MAX Velocity ","[m/s]",": 30, MAX Vertical, Velocity ","[m/s]",": 20, Sanity check type: Altitude and Velocity, Max Position Deviation: Small."),(0,o.kt)("li",{parentName:"ul"},"Portable - Applications with low acceleration, e.g. portable devices. Suitable for most situations. MAX Altitude ","[m]",": 12000, MAX Velocity ","[m/s]",": 310, MAX Vertical Velocity ","[m/s]",": 50, Sanity check type: Altitude and Velocity, Max Position Deviation: Medium."),(0,o.kt)("li",{parentName:"ul"},"Airborne < 1G - Used for applications with a higher dynamic range and vertical acceleration than a passenger car. No 2D position fixes supported. MAX Altitude ","[m]",": 50000, MAX Velocity ","[m/s]",": 100, MAX Vertical Velocity ","[m/s]",": 100, Sanity check type: Altitude, Max Position Deviation: Large")),(0,o.kt)("h2",{id:"hardware"},"Hardware"),(0,o.kt)("p",null,"There are many GPS receivers available on the market.\nBelow are some examples of user-tested hardware. "),(0,o.kt)("h3",{id:"ublox"},"Ublox"),(0,o.kt)("p",null,"###U-Blox"),(0,o.kt)("h4",{id:"neo-m8"},"NEO-M8"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Module"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"U-blox Neo-M8N w/Compass"),(0,o.kt)("td",{parentName:"tr",align:null},"Pinout can be found in Pixfalcon manual. SDA and SCL can be attached to I2C bus for compass, TX and RX can be attached to UART for GPS. Power must be applied for either to function.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Reyax RY825AI"),(0,o.kt)("td",{parentName:"tr",align:null},"NEO-M8N, 18Hz UART USB interface GPS Glonass BeiDou QZSS antenna module flash. ",(0,o.kt)("a",{parentName:"td",href:"http://www.ebay.com/itm/RY825AI-18Hz-UART-USB-interface-GPS-Glonass-BeiDou-QZSS-antenna-module-flash/181566850426"},"eBay"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mRo uGPS w/ LIS3MDL"),(0,o.kt)("td",{parentName:"tr",align:null},"Ultra compact and weights just 7.7 grams. Multiple constellation capabilities (GPS and GLONASS).  Includes JST-GH pigtail. Available from ",(0,o.kt)("a",{parentName:"td",href:"https://store.mrobotics.io/product-p/mro-ugps-samm8q-01.htm"},"mRobotics"),".")))),(0,o.kt)("h4",{id:"neo-7"},"NEO-7"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Module"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"U-blox Neo-7M w/Compass"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://www.hobbyking.com/hobbyking/store/__55558__Ublox_Neo_7M_GPS_with_Compass_and_Pedestal_Mount.html"},"HobbyKing")," You have to set align_mag in the CLI to get the magnetometer working correctly: ",(0,o.kt)("inlineCode",{parentName:"td"},"set align_mag = 8")," and don't forget to ",(0,o.kt)("inlineCode",{parentName:"td"},"save"),".")))),(0,o.kt)("h4",{id:"neo-6"},"NEO-6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Module"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Ublox NEO-6M GPS with Compass"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://www.ebay.com/itm/111585855757"},"eBay"))))),(0,o.kt)("h3",{id:"serial-nmea"},"Serial NMEA"),(0,o.kt)("h4",{id:"mediatek"},"MediaTek"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Module"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MTK 3329"),(0,o.kt)("td",{parentName:"tr",align:null},"Tested on hardware serial at 115200 baud (default) and on softserial at 19200 baud. The baudrate and refresh rate can be adjusted using the MiniGPS software (recommended if you lower the baudrate). The software will estimate the percentage of UART bandwidth used for your chosen baudrate and update rate.")))))}s.isMDXComponent=!0}}]);